#!/usr/bin/env node
/* ============================================================
   refonte-guides.mjs : applique la refonte « guide de magazine »
   aux guides de villes (RE/MAX Crystal et RE/MAX D'ici).

   Source du style : design-system/guide.css (un bloc de tokens par marque).
   Référence : design-system/DESIGN.md, section « Guides de villes (web) ».

   Usage
     node refonte-guides.mjs <entrée.html> <sortie.html> [--marque crystal|dici] [--noindex]
     node refonte-guides.mjs --verifier [fichier.html ...]   transforme en mémoire, n'écrit rien
     node refonte-guides.mjs --tous                          les 27 guides et les 2 accueils, en place (tout ou rien)

   Les deux accueils (index.html de chaque site) reçoivent guide.css suivi de
   design-system/accueil.css. Le script les reconnaît à leur nom de fichier.

   Garanties
     - Le texte visible, les id, le JSON-LD et les balises meta ne changent pas
       (vérifié à chaque passage; le script s'arrête sinon).
     - Chaque ancre de transformation est comptée. Une ancre absente ou en
       double arrête le script : jamais de page à moitié refaite.
     - Idempotent : sur un guide déjà refondu, seul le bloc
       <style id="guide-refonte"> est rafraîchi depuis guide.css.
   ============================================================ */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ICI = dirname(fileURLToPath(import.meta.url));
const CSS_SOURCE = join(ICI, 'design-system', 'guide.css');
const CSS_ACCUEIL = join(ICI, 'design-system', 'accueil.css');
const DOSSIERS = { crystal: ICI, dici: resolve(ICI, '..', 'remaxdici') };
const POLICES =
  '<link rel="preconnect" href="https://fonts.googleapis.com">\n' +
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
  '<link href="https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">';
const STYLES_CONNUS = new Set(['', 'mm-style', 'tw-base', 'style-sobre', 'events-cta-style']);
const STYLES_ACCUEIL = new Set(['', 'mm-style', 'tw-base', 'style-sobre', 'offices-style']);
const estAccueil = (fichier) => basename(fichier) === 'index.html';
const STYLES_REQUIS = ['', 'mm-style', 'style-sobre', 'events-cta-style'];
const SECTIONS = ['intro', 'qualite', 'marche', 'evenements', 'parcs', 'transport'];
const RE_STYLE_REFONTE = /<style id="guide-refonte"[^>]*>[\s\S]*?<\/style>/g;

class ErreurRefonte extends Error {}
const echec = (msg) => { throw new ErreurRefonte(msg); };

/* ---------- CSS ---------- */
function cssPour(marque, page = 'guide') {
  const src = readFileSync(CSS_SOURCE, 'utf8');
  const tokens = src.match(new RegExp(`/\\* @tokens ${marque} \\*/\\s*([\\s\\S]*?)\\s*/\\* @fin-tokens \\*/`));
  if (!tokens) echec(`guide.css : bloc « @tokens ${marque} » introuvable`);
  const commun = src.split('/* @commun */');
  if (commun.length !== 2) echec('guide.css : marqueur « @commun » absent ou en double');
  let css = `${tokens[1]}\n${commun[1].trim()}`;
  if (page === 'accueil') {
    const accueil = readFileSync(CSS_ACCUEIL, 'utf8').replace(/^\/\*[\s\S]*?\*\/\s*/, '');
    css += `\n\n/* ===== accueil.css ===== */\n${accueil.trim()}`;
  }
  for (const interdit of ['gradient(', 'box-shadow', 'backdrop-filter', 'blur(', 'transition: all', '#fff', '#000']) {
    if (css.toLowerCase().includes(interdit)) echec(`la feuille de style contient un interdit du design system : « ${interdit} »`);
  }
  return (
    `<style id="guide-refonte" data-marque="${marque}"${page === 'accueil' ? ' data-page="accueil"' : ''}>\n` +
    `/* ${page === 'accueil' ? 'Accueil' : 'Guide de ville'}, marque ${marque}. Généré par refonte-guides.mjs depuis design-system/guide.css${page === 'accueil' ? ' et accueil.css' : ''} : modifier la source, puis relancer le script. */\n` +
    `${css}\n</style>`
  );
}

/* ---------- outils ---------- */
/** Remplace `motif` et exige un nombre d'occurrences entre min et max. */
function remplacer(html, motif, remplacement, nom, min = 1, max = min) {
  const re = new RegExp(motif.source, motif.flags.includes('g') ? motif.flags : motif.flags + 'g');
  const n = (html.match(re) || []).length;
  if (n < min || n > max) {
    echec(`ancre « ${nom} » : ${n} occurrence(s), attendu ${min === max ? min : `${min} à ${max}`}`);
  }
  return html.replace(re, remplacement);
}

const DECODE = { '&nbsp;': '\u00a0', '&amp;': '&', '&#39;': "'", '&quot;': '"', '&lt;': '<', '&gt;': '>' };
/** Texte visible du <body>, pour prouver que la refonte ne touche pas au contenu. */
function texteVisible(html) {
  const corps = html.slice(html.indexOf('<body'));
  return corps
    .replace(/<script\b[\s\S]*?<\/script>/g, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<svg style="position:absolute;width:0;height:0;">[\s\S]*?<\/svg>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/g, (e) => DECODE[e] ?? e)
    .replace(/\s+/g, ' ')
    .trim();
}
const idsDe = (html) =>
  [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])
    .filter((id) => !['noise', 'mm-style', 'tw-base', 'style-sobre', 'events-cta-style', 'offices-style', 'guide-refonte'].includes(id))
    .sort().join(' ');
const jsonLdDe = (html) => (html.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g) || []).join('\n');
const metasDe = (html) => (html.match(/<(?:meta|title)\b[^>]*>(?:[^<]*<\/title>)?/g) || []).filter((m) => !/name="robots"/.test(m)).join('\n');
const scriptsEnLigne = (html) =>
  (html.match(/<script\b(?![^>]*\bsrc=)(?![^>]*ld\+json)[^>]*>[\s\S]*?<\/script>/g) || []).join('\n');

function marqueDe(fichier, forcee) {
  if (forcee) {
    if (!DOSSIERS[forcee]) echec(`--marque inconnue : ${forcee} (crystal ou dici)`);
    return forcee;
  }
  const chemin = resolve(fichier);
  if (/\/remaxdici\//.test(chemin) || /^guide-dici-/.test(basename(chemin))) return 'dici';
  return 'crystal';
}

function ajouterNoindex(html) {
  if (/<meta name="robots"/.test(html)) return html.replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex">');
  return remplacer(html, /(<meta name="viewport"[^>]*>)/, '$1\n<meta name="robots" content="noindex">', 'meta viewport');
}

/* ---------- transformation ---------- */
function refondre(html, { marque, noindex = false }) {
  const style = cssPour(marque);

  /* Déjà refondu : on ne rafraîchit que le style. */
  if (html.includes('<style id="guide-refonte"')) {
    let out = remplacer(html, RE_STYLE_REFONTE, () => style, 'style guide-refonte', 1);
    if (noindex) out = ajouterNoindex(out);
    return { html: out, deja: true, notes: [] };
  }

  const notes = [];
  let out = html;

  /* 1. Polices : Raleway et Open Sans sortent, Anton et Montserrat entrent. */
  out = remplacer(out, /<noscript>\s*<link[^>]*fonts\.googleapis\.com\/css2\?family=Raleway[^>]*>\s*<\/noscript>\n?/, '', 'noscript des polices', 0, 1);
  out = remplacer(out, /<link rel="preconnect" href="https:\/\/fonts\.(?:googleapis|gstatic)\.com"[^>]*>\n?/, '', 'preconnect des polices', 0, 2);
  out = remplacer(out, /<link[^>]*fonts\.googleapis\.com\/css2\?family=Raleway[^>]*>/, () => POLICES, 'lien Google Fonts (Raleway)', 1);

  /* 2. Scripts retirés : Tailwind (son reset est repris dans guide.css), GSAP, ScrollTrigger, Lenis. */
  out = remplacer(out, /[ \t]*<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>\n?/, '', 'script Tailwind', 0, 1);
  out = remplacer(out, /[ \t]*<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/gsap@3\/dist\/gsap\.min\.js"><\/script>\n?/, '', 'script GSAP', 1);
  out = remplacer(out, /[ \t]*<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/gsap@3\/dist\/ScrollTrigger\.min\.js"><\/script>\n?/, '', 'script ScrollTrigger', 1);
  out = remplacer(out, /[ \t]*<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/@studio-freight\/lenis\/bundled\/lenis\.min\.js"><\/script>\n?/, '', 'script Lenis', 1);

  /* 3. Styles : tous les blocs <style> du gabarit laissent la place à un seul. */
  const blocs = [...out.matchAll(/<style\b([^>]*)>[\s\S]*?<\/style>/g)];
  const idsStyle = blocs.map((b) => (b[1].match(/id="([^"]+)"/) || [, ''])[1]);
  for (const id of idsStyle) if (!STYLES_CONNUS.has(id)) echec(`bloc <style id="${id}"> inconnu du gabarit`);
  for (const id of STYLES_REQUIS) {
    if (idsStyle.filter((x) => x === id).length !== 1) echec(`bloc <style${id ? ` id="${id}"` : ''}> : attendu 1 exactement`);
  }
  let premier = true;
  out = out.replace(/[ \t]*<style\b[^>]*>[\s\S]*?<\/style>\n?/g, () => {
    if (premier) { premier = false; return `${style}\n`; }
    return '';
  });

  /* 4. Filtre de grain SVG : plus de texture. */
  out = remplacer(out, /[ \t]*<!-- NOISE SVG FILTER -->\s*<svg style="position:absolute;width:0;height:0;">[\s\S]*?<\/svg>\n?/, '', 'filtre de grain SVG', 1);

  /* 5. Sections : une tête (titre + chapô) et un corps, pour poser chaque section sur la grille. */
  for (const id of SECTIONS) {
    const re = new RegExp(
      `(<section class="section[^"]*" id="${id}"[^>]*>\\s*<div class="container">\\s*)` +
      `(<h2 class="section-heading[^"]*">[\\s\\S]*?</h2>(?:\\s*<p class="section-intro[^"]*">[\\s\\S]*?</p>)?)` +
      `([\\s\\S]*?)(\\n[ \\t]*</div>\\s*</section>)`
    );
    out = remplacer(out, re, (_, debut, tete, corps, fin) => {
      if (!corps.trim()) echec(`section #${id} : corps vide`);
      if (/<section\b/.test(corps)) echec(`section #${id} : fermeture introuvable avant la section suivante`);
      return `${debut}<div class="section-tete">\n      ${tete}\n      </div>\n      <div class="section-corps">${corps}\n      </div>${fin}`;
    }, `section #${id}`, 1);
  }

  /* 6. Styles en ligne des tableaux : remplacés par des classes. */
  out = remplacer(out, /<p style="font-size: 0\.8em; color: var\(--text-muted\);[^"]*">/, '<p class="table-note">', 'note de tableau', 0, 2);
  out = remplacer(out, /(<div class="table-wrap[^"]*") style="margin-block-start: clamp\(24px, 3vw, 40px\);"/, '$1', 'marge en ligne du second tableau', 0, 1);
  const restants = out.slice(out.indexOf('<body')).match(/\sstyle="[^"]*"/g);
  if (restants) echec(`style en ligne non prévu par le gabarit : ${restants[0].trim()}`);

  /* 7. JavaScript : Lenis, ScrollTrigger et les apparitions GSAP sortent; les calculateurs ne bougent pas. */
  out = remplacer(out, /[ \t]*\/\/ ===== LENIS SMOOTH SCROLL =====[\s\S]*?(?=[ \t]*\/\/ ===== [^\n]*CALCULAT(?:ORS|EURS) =====)/, '', 'bloc JS Lenis et apparitions', 1);
  out = remplacer(out, /\n[ \t]*setTimeout\(\(\) => ScrollTrigger\.refresh\(\), 80\);/, '', 'ScrollTrigger.refresh des onglets', 1);
  out = remplacer(
    out,
    /[ \t]*\/\/ ===== SMOOTH ANCHOR SCROLL =====[\s\S]*?\n([ \t]*)<\/script>/,
    (_, retrait) =>
      '    // ===== ANCRES =====\n' +
      '    // Le défilement vers les ancres est natif (scroll-behavior et scroll-padding-top dans le CSS).\n' +
      '    // On neutralise seulement les liens « # » sans cible.\n' +
      "    document.querySelectorAll('a[href=\"#\"]').forEach(link => {\n" +
      "      link.addEventListener('click', (e) => e.preventDefault());\n" +
      '    });\n' +
      `${retrait}</script>`,
    'bloc JS ancres et parallaxe', 1
  );
  const onglets = (out.match(/<button class="tool-tab[ "]/g) || []).length;
  if (onglets < 1 || onglets > 3) echec(`calculateurs : ${onglets} onglet(s), attendu 1 à 3`);
  if (onglets !== 3) notes.push(`${onglets} calculateur(s) au lieu de 3`);
  for (const mot of ['gsap', 'ScrollTrigger', 'lenis', 'Lenis']) {
    if (scriptsEnLigne(out).includes(mot)) echec(`JavaScript : référence à « ${mot} » encore présente`);
  }

  if (noindex) out = ajouterNoindex(out);

  /* 8. Contrôles : rien du contenu ne doit avoir bougé. */
  if (texteVisible(html) !== texteVisible(out)) echec('le texte visible a changé');
  if (idsDe(html) !== idsDe(out)) echec('la liste des id a changé');
  if (jsonLdDe(html) !== jsonLdDe(out)) echec('le JSON-LD a changé');
  if (metasDe(html) !== metasDe(out)) echec('les balises meta ou le titre ont changé');
  if ((out.match(/<style\b/g) || []).length !== 1) echec('il reste plus d\'un bloc <style>');
  for (const requis of ['id="navBurger"', 'id="mmTrigger"', 'id="mmOverlay"', 'consentement.js', 'data/market-render.js', 'data/market-stats.js', 'class="tool-tab active"', 'data-tool-panel="mortgage"', 'class="vp-logo"', 'franchisé indépendant et autonome de']) {
    if (!out.includes(requis)) echec(`élément attendu absent après refonte : ${requis}`);
  }
  if ((html.match(/loading="lazy"/g) || []).length !== (out.match(/loading="lazy"/g) || []).length) echec('le nombre de loading="lazy" a changé');

  const parcs = (out.match(/class="park-card/g) || []).length;
  if (parcs < 2 || parcs > 5) notes.push(`${parcs} photo(s) de parcs : vérifier la mosaïque`);
  return { html: out, deja: false, notes };
}

/* ---------- accueils ---------- */
function refondreAccueil(html, { marque }) {
  const style = cssPour(marque, 'accueil');
  if (html.includes('<style id="guide-refonte"')) {
    return { html: remplacer(html, RE_STYLE_REFONTE, () => style, 'style guide-refonte', 1), deja: true, notes: [] };
  }
  const notes = [];
  let out = html;

  /* 1. Polices. */
  out = remplacer(out, /<noscript>\s*<link[^>]*fonts\.googleapis\.com\/css2\?family=Raleway[^>]*>\s*<\/noscript>\n?/, '', 'noscript des polices', 0, 1);
  out = remplacer(out, /<link rel="preconnect" href="https:\/\/fonts\.(?:googleapis|gstatic)\.com"[^>]*>\n?/, '', 'preconnect des polices', 0, 2);
  /* Crystal charge ses polices par un <link rel="preload"> (la feuille de secours était dans le <noscript>); D'ici par un <link> simple. */
  out = remplacer(out, /<link[^>]*fonts\.googleapis\.com\/css2\?family=Raleway[^>]*>/, () => POLICES, 'lien Google Fonts (Raleway)', 1);

  /* 2. Scripts retirés. */
  out = remplacer(out, /[ \t]*<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>\n?/, '', 'script Tailwind', 0, 1);
  out = remplacer(out, /[ \t]*<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/gsap@3\/dist\/gsap\.min\.js"><\/script>\n?/, '', 'script GSAP', 1);
  out = remplacer(out, /[ \t]*<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/gsap@3\/dist\/ScrollTrigger\.min\.js"><\/script>\n?/, '', 'script ScrollTrigger', 1);
  out = remplacer(out, /[ \t]*<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/@studio-freight\/lenis\/bundled\/lenis\.min\.js"><\/script>\n?/, '', 'script Lenis', 1);

  /* 3. Styles : un seul bloc, dans le <head>. */
  const blocs = [...out.matchAll(/<style\b([^>]*)>[\s\S]*?<\/style>/g)];
  const idsStyle = blocs.map((b) => (b[1].match(/id="([^"]+)"/) || [, ''])[1]);
  for (const id of idsStyle) if (!STYLES_ACCUEIL.has(id)) echec(`bloc <style id="${id}"> inconnu du gabarit d'accueil`);
  if (idsStyle[0] !== '' || out.indexOf('<style') > out.indexOf('</head>')) echec('le premier bloc <style> devrait être celui du <head>');
  let premier = true;
  out = out.replace(/[ \t]*<style\b[^>]*>[\s\S]*?<\/style>\n?/g, () => {
    if (premier) { premier = false; return `${style}\n`; }
    return '';
  });

  /* 4. Filtre de grain SVG. */
  out = remplacer(out, /[ \t]*<!-- NOISE SVG -->\s*<svg style="position:absolute;width:0;height:0;">[\s\S]*?<\/svg>\n?/, '', 'filtre de grain SVG', 1);

  /* 5. Styles en ligne. */
  out = remplacer(out, /(<div class="hero-scroll-hint") style="display:none;"/, '$1', 'style en ligne du repère de défilement', 1);
  out = remplacer(out, /<span style="opacity:\.6;">(Photo d’en-tête)/, '<span class="credit-photo">$1', 'crédit photo du pied de page', 0, 1);
  out = remplacer(out, /(<a href="https:\/\/commons\.wikimedia\.org[^"]*" target="_blank" rel="noopener") style="color:inherit;"/, '$1', 'lien du crédit photo', 0, 1);
  const restants = out.slice(out.indexOf('<body')).match(/\sstyle="[^"]*"/g);
  if (restants) echec(`style en ligne non prévu par le gabarit d'accueil : ${restants[0].trim()}`);

  /* 6. JavaScript : Lenis, ScrollTrigger, apparitions et parallaxe sortent; les calculateurs ne bougent pas. */
  out = remplacer(out, /[ \t]*\/\/ ===== LENIS =====[\s\S]*?(?=[ \t]*\/\/ ===== LOCAL CALCULATORS =====)/, '', 'bloc JS Lenis, barre, apparitions, parallaxe', 1);
  out = remplacer(out, /\n[ \t]*setTimeout\(\(\) => ScrollTrigger\.refresh\(\), 80\);/, '', 'ScrollTrigger.refresh des onglets', 1);
  out = remplacer(
    out,
    /[ \t]*\/\/ ===== SMOOTH ANCHORS =====[\s\S]*?\n([ \t]*)<\/script>/,
    (_, retrait) =>
      '    // Le défilement vers les ancres est natif (scroll-behavior et scroll-padding-top dans le CSS).\n' +
      `${retrait}</script>`,
    'bloc JS ancres et vidéos', 1
  );
  for (const mot of ['gsap', 'ScrollTrigger', 'lenis', 'Lenis']) {
    if (scriptsEnLigne(out).includes(mot)) echec(`JavaScript : référence à « ${mot} » encore présente`);
  }

  /* 7. Contrôles. */
  if (texteVisible(html) !== texteVisible(out)) echec('le texte visible a changé');
  if (idsDe(html) !== idsDe(out)) echec('la liste des id a changé');
  if (jsonLdDe(html) !== jsonLdDe(out)) echec('le JSON-LD a changé');
  if (metasDe(html) !== metasDe(out)) echec('les balises meta ou le titre ont changé');
  if ((out.match(/<style\b/g) || []).length !== 1) echec('il reste plus d\'un bloc <style>');
  for (const requis of ['id="navBurger"', 'id="mmTrigger"', 'id="mmOverlay"', 'consentement.js', 'id="calculatrices"', 'class="tool-tab active"', 'data-tool-panel="mortgage"', 'class="hero-cities-row', 'class="city-card featured', 'class="offices-grid"', 'class="vp-logo"']) {
    if (!out.includes(requis)) echec(`élément attendu absent après refonte : ${requis}`);
  }
  if ((html.match(/loading="lazy"/g) || []).length !== (out.match(/loading="lazy"/g) || []).length) echec('le nombre de loading="lazy" a changé');
  const villes = (out.match(/class="city-card[ "]/g) || []).length;
  if (villes !== 12 && villes !== 15) notes.push(`${villes} villes : la mosaïque est dessinée pour 12 ou 15`);
  return { html: out, deja: false, notes };
}

/* ---------- ligne de commande ---------- */
function listeDesGuides() {
  const liste = [];
  for (const [marque, dossier] of Object.entries(DOSSIERS)) {
    const motif = marque === 'dici' ? /^guide-dici-.+\.html$/ : /^guide-.+\.html$/;
    for (const f of readdirSync(dossier).sort()) {
      if (motif.test(f) && !/-refonte\.html$/.test(f)) liste.push({ fichier: join(dossier, f), marque });
    }
    liste.push({ fichier: join(dossier, 'index.html'), marque });
  }
  return liste;
}

function traiter(fichier, options) {
  const marque = marqueDe(fichier, options.marque);
  const faire = estAccueil(fichier) ? refondreAccueil : refondre;
  if (estAccueil(fichier) && options.noindex) echec('--noindex ne s\'applique pas à un accueil');
  const res = faire(readFileSync(fichier, 'utf8'), { marque, noindex: options.noindex });
  /* idempotence : un second passage ne doit rien changer */
  const second = faire(res.html, { marque, noindex: options.noindex });
  if (second.html !== res.html) echec('la refonte n\'est pas idempotente sur ce fichier');
  return { ...res, marque };
}

function main() {
  const args = process.argv.slice(2);
  const options = { noindex: args.includes('--noindex'), marque: null };
  const iM = args.indexOf('--marque');
  if (iM !== -1) options.marque = args[iM + 1];
  const fichiers = args.filter((a, i) => !a.startsWith('--') && (iM === -1 || i !== iM + 1));
  const tous = args.includes('--tous');
  const verifier = args.includes('--verifier');

  if (tous || verifier) {
    if (tous && (fichiers.length || options.noindex)) echec('--tous ne prend ni fichier ni --noindex');
    const cibles = verifier && fichiers.length
      ? fichiers.map((f) => ({ fichier: resolve(f), marque: marqueDe(f, options.marque) }))
      : listeDesGuides();
    const prets = [];
    const erreurs = [];
    for (const { fichier, marque } of cibles) {
      try {
        const res = traiter(fichier, { ...options, marque });
        prets.push({ fichier, ...res });
        console.log(`ok     ${marque.padEnd(7)} ${basename(fichier)}${res.deja ? '  (déjà refondu, style rafraîchi)' : ''}${res.notes.length ? '  [' + res.notes.join('; ') + ']' : ''}`);
      } catch (e) {
        if (!(e instanceof ErreurRefonte)) throw e;
        erreurs.push(fichier);
        console.error(`ÉCHEC  ${marque.padEnd(7)} ${basename(fichier)} : ${e.message}`);
      }
    }
    if (erreurs.length) {
      console.error(`\n${erreurs.length} page(s) en échec sur ${cibles.length}. Aucun fichier écrit.`);
      process.exit(1);
    }
    if (verifier) {
      console.log(`\n${prets.length} page(s) vérifiée(s) en mémoire. Aucun fichier écrit.`);
      return;
    }
    for (const p of prets) writeFileSync(p.fichier, p.html);
    console.log(`\n${prets.length} page(s) refondue(s) en place.`);
    return;
  }

  if (fichiers.length !== 2) {
    console.error('Usage : node refonte-guides.mjs <entrée.html> <sortie.html> [--marque crystal|dici] [--noindex]\n        node refonte-guides.mjs --verifier [fichier.html ...]\n        node refonte-guides.mjs --tous');
    process.exit(2);
  }
  const [entree, sortie] = fichiers.map((f) => resolve(f));
  try {
    const res = traiter(entree, options);
    writeFileSync(sortie, res.html);
    console.log(`ok  ${res.marque}  ${basename(entree)} -> ${sortie}${res.deja ? '  (déjà refondu, style rafraîchi)' : ''}${res.notes.length ? '  [' + res.notes.join('; ') + ']' : ''}`);
  } catch (e) {
    if (!(e instanceof ErreurRefonte)) throw e;
    console.error(`ÉCHEC ${basename(entree)} : ${e.message}\nAucun fichier écrit.`);
    process.exit(1);
  }
}

main();
