/* ============================================================
   BUILD COURTIERS — À partir de data/courtiers/*.json :
   1. Génère le hub annuaire  courtiers/index.html  (filtrable par ville)
   2. Génère                  sitemap.xml           (index + guides + courtiers)
   3. Injecte le maillage guides→courtiers dans courtiers.js
      (bloc COURTIER_PAGES — le modal de jumelage ajoute « Voir sa page »)
   4. Valide chaque page courtier : title ≤ 60, meta description,
      canonical, H1 unique, JSON-LD parsable, breadcrumb
   5. Détecte les phrases dupliquées entre pages courtiers (anti-duplication)

   Usage : node build-courtiers.mjs                       (site Crystal)
           node build-courtiers.mjs --site ../remaxdici   (site D'ici)
           options : --hub (annuaire seulement) · --exclure slug1,slug2
   La marque (nom, région, logo) vient de <site>/data/courtiers-config.js.
   Les pages courtiers/<slug>.html elles-mêmes ne sont PAS générées ici :
   elles sont rédigées à neuf (voir docs/GENERER-PAGE-COURTIER.md).
   ============================================================ */

import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const siteArg = process.argv.indexOf('--site');
const ROOT = siteArg > -1 ? path.resolve(process.argv[siteArg + 1]) : SCRIPT_DIR;
const COURTIERS_DIR = path.join(ROOT, 'courtiers');
const DATA_DIR = path.join(ROOT, 'data/courtiers');

// ---------- Config ----------
function loadWindowData(filePath, key) {
  const code = fs.readFileSync(filePath, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox.window[key];
}
const CFG = loadWindowData(path.join(ROOT, 'data/courtiers-config.js'), 'COURTIERS_CONFIG');
const SITE = (process.env.SITE_BASE || CFG.SITE_BASE).replace(/\/$/, '');
const AG = CFG.AGENCE;
// Politique de confidentialité du site principal de l'agence (bannière Loi 25)
const POLITIQUE = /d.ici/i.test(AG.nom)
  ? 'https://remaxdici.com/fr/politique-confidentialite.html'
  : 'https://remaxcrystal.com/fr/politique-confidentialite.html';
console.log(`Site : ${AG.nom} (${path.relative(process.cwd(), ROOT) || '.'})`);

const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// ---------- Charge les fiches courtiers ----------
if (!fs.existsSync(DATA_DIR) || !fs.readdirSync(DATA_DIR).some(f => f.endsWith('.json'))) { console.log('Aucune fiche dans data/courtiers/ : rien à générer.'); process.exit(0); }
const fiches = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json')).map(f => {
  const j = JSON.parse(fs.readFileSync(path.join(DATA_DIR, f), 'utf8'));
  if (j.schemaVersion !== 1) console.warn(`⚠ ${f} : schemaVersion ${j.schemaVersion} inattendu (attendu : 1).`);
  if (!j.slug) j.slug = path.basename(f, '.json');
  return j;
}).sort((a, b) => a.identite.nomComplet.localeCompare(b.identite.nomComplet, 'fr'));

// --exclure slug1,slug2 : fiches à laisser de côté (brouillons, données de test)
const exclArg = process.argv.indexOf('--exclure');
const EXCLUS = new Set(exclArg > -1 ? process.argv[exclArg + 1].split(',').map(x => x.trim()) : []);
for (let i = fiches.length - 1; i >= 0; i--) if (EXCLUS.has(fiches[i].slug)) { console.log(`· ${fiches[i].slug} exclu (--exclure).`); fiches.splice(i, 1); }
// --hub : régénère seulement courtiers/index.html (ni sitemap, ni courtiers.js)
const HUB_SEUL = process.argv.includes('--hub');

console.log(`\n${fiches.length} fiche(s) courtier chargée(s).`);

// ---------- Helpers ----------
const guideDe = (ville) => (CFG.VILLES.find(v => v.nom === ville) || {}).guide || null;
const pageOf = (fiche) => `courtiers/${fiche.slug}.html`;
const isDemo = (fiche) => Boolean(fiche._note && /fictif|fictive|d[ée]mo/i.test(fiche._note));

function pageExists(fiche) { return fs.existsSync(path.join(ROOT, pageOf(fiche))); }
function pageHtml(fiche) { return fs.readFileSync(path.join(ROOT, pageOf(fiche)), 'utf8'); }
function pageIsNoindex(fiche) { return /name="robots"\s+content="[^"]*noindex/i.test(pageHtml(fiche)); }

function portraitSrc(fiche) {
  const local = fiche.medias && fiche.medias.portrait && fiche.medias.portrait.fichier;
  if (local && fs.existsSync(path.join(ROOT, local))) return `../${local}`;
  return `https://placehold.co/600x800/1e3350/b0cfe8?text=${encodeURIComponent(fiche.identite.nomComplet)}`;
}

// ============================================================
// 1. HUB — courtiers/index.html
//    Même design system que les guides et l'accueil : tokens de la marque
//    et règles communes de design-system/guide.css, en-tête et pied de page
//    repris de l'accueil du site (chemins réécrits pour courtiers/).
// ============================================================
const GUIDE_CSS = path.join(SCRIPT_DIR, 'design-system', 'guide.css');

function cssDesignSystem(marque) {
  const src = fs.readFileSync(GUIDE_CSS, 'utf8');
  const tokens = src.match(new RegExp(`/\\* @tokens ${marque} \\*/\\s*([\\s\\S]*?)\\s*/\\* @fin-tokens \\*/`));
  const commun = src.split('/* @commun */');
  if (!tokens || commun.length !== 2) throw new Error(`guide.css : tokens « ${marque} » ou marqueur @commun introuvable`);
  return `${tokens[1]}\n${commun[1].trim()}`;
}

const CSS_HUB = `
/* ===== annuaire des courtiers ===== */
.topbar-logo { display: block; }
@media (max-width: 1080px) {
  .topbar-nav { display: flex; }
  .topbar-nav a:not(.topbar-cta) { display: none; }
}
.crumbs { border-bottom: 1px solid var(--brume); }
.crumbs ol { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 10px; min-height: 52px; font-size: var(--fs-petit); color: var(--gris-note); }
.crumbs a { display: inline-flex; align-items: center; min-height: 44px; font-weight: 500; color: var(--identite); text-underline-offset: 4px; text-decoration-thickness: 2px; transition: color var(--t) ease; }
.crumbs a:hover { text-decoration-line: underline; }
.crumbs a:active { color: var(--encre); }

.annuaire-tete { padding-block: clamp(48px, 6vw, 96px) clamp(36px, 4.5vw, 56px); }
.annuaire-tete .container {
  display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: var(--gout); row-gap: clamp(20px, 2.4vw, 32px);
  grid-template-areas:
    "surtitre surtitre surtitre surtitre surtitre surtitre surtitre surtitre surtitre surtitre surtitre surtitre"
    "titre titre titre titre titre titre titre titre titre . . ."
    "chapo chapo chapo chapo chapo chapo chapo . faits faits faits faits";
}
.annuaire-surtitre { grid-area: surtitre; font-size: var(--fs-petit); font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--identite); }
.annuaire-tete h1 {
  grid-area: titre; font-family: var(--affiche); font-weight: 400; font-size: var(--fs-h1);
  line-height: 1.02; letter-spacing: 0.005em; text-transform: uppercase; text-wrap: balance;
}
.annuaire-tete h1::after { content: ""; display: block; width: 36px; height: 3px; margin-top: 18px; background: var(--rouge); }
.annuaire-chapo { grid-area: chapo; font-size: var(--fs-chapo); font-weight: 500; line-height: 1.55; color: var(--encre); max-width: 58ch; }
.annuaire-faits { grid-area: faits; align-self: start; border-top: 2px solid var(--identite); }
.annuaire-fait { display: flex; align-items: baseline; justify-content: space-between; gap: 20px; padding-block: 12px; border-bottom: 1px solid var(--brume); }
.annuaire-fait dt { font-size: var(--fs-petit); color: var(--gris-note); }
.annuaire-fait dd { font-weight: 600; color: var(--encre); font-variant-numeric: tabular-nums; }

.filtres-bande { border-block: 1px solid var(--brume); }
.filtres { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; padding-block: 18px; }
.filtres-label { margin-inline-end: 8px; font-size: var(--fs-petit); font-weight: 600; color: var(--encre); }
.fpill {
  min-height: 44px; padding-inline: 16px; border: 1px solid var(--bord-champ); border-radius: var(--r-ui);
  font-size: var(--fs-petit); font-weight: 500; color: var(--encre);
  transition: background-color var(--t) ease, color var(--t) ease, border-color var(--t) ease;
}
.fpill:hover { border-color: var(--identite); color: var(--identite); }
.fpill:active { background-color: var(--brume); }
.fpill[aria-pressed="true"] { background-color: var(--identite); border-color: var(--identite); color: var(--creme); }

.annuaire { padding-block: clamp(40px, 5vw, 72px) var(--chap); }
.grille-courtiers { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: var(--gout); row-gap: clamp(44px, 5vw, 72px); }
.bcard { grid-column: span 4; display: flex; flex-direction: column; gap: 18px; border-radius: var(--r-bloc); }
.bcard.hide { display: none; }
.bcard:focus-visible { outline-offset: 6px; }
.bcard-photo { aspect-ratio: 4 / 5; overflow: hidden; border-radius: var(--r-bloc); background: var(--brume); }
.bcard-photo img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
.bcard-body { display: flex; flex-direction: column; gap: 4px; padding-top: 14px; border-top: 2px solid var(--identite); flex: 1; }
.bcard-demo { align-self: flex-start; margin-bottom: 6px; padding: 2px 8px; border: 1px solid var(--bord-champ); border-radius: var(--r-ui); font-size: var(--fs-petit); font-weight: 600; color: var(--encre); }
.bcard h2 { font-size: var(--fs-h3); font-weight: 600; line-height: 1.3; letter-spacing: -0.01em; transition: color var(--t) ease; }
.bcard-title { font-size: var(--fs-petit); color: var(--gris-note); }
.bcard-meta { margin-top: 8px; font-size: var(--fs-petit); font-weight: 500; color: var(--ardoise); }
.bcard-exp { font-size: var(--fs-petit); color: var(--ardoise); font-variant-numeric: tabular-nums; }
.bcard-link {
  margin-top: auto; padding-top: 14px; font-size: var(--fs-petit); font-weight: 600; color: var(--identite);
  text-underline-offset: 5px; text-decoration-thickness: 2px; transition: color var(--t) ease;
}
.bcard:hover h2 { color: var(--identite); }
.bcard:hover .bcard-link { text-decoration-line: underline; }
.bcard:active .bcard-link, .bcard:active h2 { color: var(--encre); }
.vide { display: none; max-width: 52ch; padding-block: 24px; font-size: var(--fs-chapo); font-weight: 500; color: var(--encre); }
.vide.show { display: block; }
.vide a, .annuaire-appel a.lien { color: var(--identite); font-weight: 600; text-decoration-line: underline; text-underline-offset: 4px; }

.annuaire-appel { background: var(--brume); color: var(--ardoise); padding-block: clamp(48px, 6vw, 80px); }
.annuaire-appel .container { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: var(--gout); row-gap: 24px; align-items: end; }
.annuaire-appel h2 { grid-column: 1 / span 7; font-family: var(--affiche); font-weight: 400; font-size: var(--fs-h2); line-height: 1.05; text-transform: uppercase; letter-spacing: 0.005em; color: var(--encre); text-wrap: balance; }
.annuaire-appel h2::after { content: ""; display: block; width: 36px; height: 3px; margin-top: 14px; background: var(--rouge); }
.annuaire-appel p { grid-column: 1 / span 6; font-size: var(--fs-chapo); line-height: 1.55; }
.annuaire-appel .bouton {
  grid-column: 9 / -1; grid-row: 1 / span 2; justify-self: end; display: inline-flex; align-items: center; min-height: 48px; padding-inline: 24px;
  border-radius: var(--r-ui); background: var(--identite); color: var(--creme); font-weight: 600; transition: background-color var(--t) ease;
}
.annuaire-appel .bouton:hover { background: var(--encre); }
.annuaire-appel .bouton:active { background: var(--bande); }

@media (max-width: 1080px) {
  .bcard { grid-column: span 6; }
  .annuaire-tete .container { grid-template-areas: "surtitre" "titre" "chapo" "faits"; grid-template-columns: minmax(0, 1fr); }
  .annuaire-faits { max-width: 420px; }
  .annuaire-appel h2, .annuaire-appel p, .annuaire-appel .bouton { grid-column: 1 / -1; grid-row: auto; justify-self: start; }
}
@media (max-width: 600px) {
  .bcard { grid-column: 1 / -1; }
  .bcard-photo { aspect-ratio: 4 / 4.2; }
}
`;

/** Réécrit les liens relatifs de l'accueil pour une page dans courtiers/. */
function versSousDossier(fragment) {
  return fragment.replace(/\b(href|src)="([^"]*)"/g, (m, attr, v) => {
    if (/^(https?:|mailto:|tel:|\/\/|\/|data:)/.test(v)) return m;
    if (v.startsWith('#')) return `${attr}="../index.html${v}"`;
    if (v.startsWith('courtiers/')) return `${attr}="${v.slice('courtiers/'.length)}"`;
    return `${attr}="../${v}"`;
  });
}

function morceauxAccueil() {
  const accueil = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const marque = (accueil.match(/<style id="guide-refonte" data-marque="(crystal|dici)"/) || [])[1];
  let topbar = (accueil.match(/<nav class="topbar"[\s\S]*?<\/nav>/) || [])[0];
  let footer = (accueil.match(/<footer class="footer"[\s\S]*?<\/footer>/) || [])[0];
  if (!marque || !topbar || !footer) throw new Error('index.html du site : bloc de style, topbar ou footer introuvable (accueil pas encore refondu ?)');
  const contact = (topbar.match(/<a href="([^"]+)"[^>]*class="topbar-cta"/) || [])[1] || '../index.html#contact';
  topbar = topbar
    .replace(/\s*<button type="button" class="mm-trigger"[\s\S]*?<\/button>/, '')
    .replace(/\s*<button type="button" class="nav-burger"[\s\S]*?<\/button>/, '')
    .replace(/<div class="topbar-logo">([\s\S]*?)<\/div>/, '<a class="topbar-logo" href="index.html">$1</a>')
    .replace(' id="topbar"', '');
  footer = footer
    .replace(/\s*<span class="credit-photo">[\s\S]*?<\/span>/, '')  // crédit de la photo d'accueil : sans objet ici
    .replace(' id="contact"', '');
  return { marque, contact, topbar: versSousDossier(topbar), footer: versSousDossier(footer) };
}

function buildHub() {
  const enLigne = fiches.filter(f => pageExists(f));
  const villesAvecCourtier = [...new Set(enLigne.flatMap(f =>
    [f.territoire.villePrincipale, ...f.territoire.villesSecondaires]))].sort((a, b) => a.localeCompare(b, 'fr'));
  const A = morceauxAccueil();
  const css = cssDesignSystem(A.marque) + '\n' + CSS_HUB.trim();
  for (const interdit of ['gradient(', 'box-shadow', 'backdrop-filter', 'blur(', 'transition: all', '#fff', '#000']) {
    if (css.toLowerCase().includes(interdit)) throw new Error(`CSS du hub : interdit du design system « ${interdit} »`);
  }

  const cards = enLigne.map(f => {
    const brut = f.identite.anneeDebut ? new Date().getFullYear() - Number(f.identite.anneeDebut) : null;
    const annees = brut > 0 && brut < 70 ? brut : null;  // une année de début invraisemblable n'est pas affichée
    const villes = [f.territoire.villePrincipale, ...f.territoire.villesSecondaires];
    return `      <a class="bcard" href="${f.slug}.html" data-villes="${escapeHtml(villes.join('|'))}">
        <div class="bcard-photo"><img src="${escapeHtml(portraitSrc(f))}" alt="${escapeHtml(f.identite.nomComplet)}, courtier immobilier à ${escapeHtml(f.territoire.villePrincipale)}" loading="lazy"></div>
        <div class="bcard-body">
          ${isDemo(f) ? '<span class="bcard-demo">Démo</span>' : ''}
          <h2>${escapeHtml(f.identite.nomComplet)}</h2>
          <p class="bcard-title">${escapeHtml(f.identite.titre)}</p>
          <p class="bcard-meta">${escapeHtml(villes.join(' · '))}</p>
          ${annees ? `<p class="bcard-exp">${annees} ans de courtage</p>` : ''}
          <span class="bcard-link">Voir sa page →</span>
        </div>
      </a>`;
  }).join('\n');

  const filters = villesAvecCourtier.map(v =>
    `        <button type="button" class="fpill" data-ville="${escapeHtml(v)}" aria-pressed="false">${escapeHtml(v)}</button>`).join('\n');

  const html = `<!DOCTYPE html>
<!-- ⚙ GÉNÉRÉ par build-courtiers.mjs — ne pas éditer à la main. -->
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" type="image/png" sizes="32x32" href="../brand_assets/favicon-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="../brand_assets/favicon-192.png">
<link rel="apple-touch-icon" href="../brand_assets/apple-touch-icon.png">
<title>Nos courtiers immobiliers | ${AG.nom}, ${AG.region}</title>
<meta name="description" content="Trouvez votre courtier immobilier ${escapeHtml(AG.nom)} par ville : ${escapeHtml(AG.exemplesVilles)} et toute la région ${escapeHtml(AG.regionDe)}.">
<link rel="canonical" href="${SITE}/courtiers/index.html">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Nos courtiers immobiliers | ${escapeHtml(AG.nom)}">
<meta property="og:description" content="L'annuaire des courtiers ${escapeHtml(AG.nom)}, classés par ville ${escapeHtml(AG.regionDe)}.">
<meta property="og:url" content="${SITE}/courtiers/index.html">
<meta property="og:locale" content="fr_CA">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
<script type="application/ld+json">
${JSON.stringify({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Nos courtiers', item: `${SITE}/courtiers/index.html` }
  ]
})}
</script>
<style id="annuaire-courtiers" data-marque="${A.marque}">
/* Annuaire des courtiers, marque ${A.marque}. Généré par build-courtiers.mjs depuis design-system/guide.css : modifier la source, puis relancer le script. */
${css}
</style>
</head>
<body>
  ${A.topbar}

  <nav class="crumbs" aria-label="Fil d'Ariane">
    <ol class="container">
      <li><a href="../index.html">Accueil</a></li>
      <li aria-hidden="true">›</li>
      <li aria-current="page">Nos courtiers</li>
    </ol>
  </nav>

  <header class="annuaire-tete">
    <div class="container">
      <p class="annuaire-surtitre">${escapeHtml(AG.nom)} · ${escapeHtml(AG.region)}</p>
      <h1>Nos courtiers, ville par ville</h1>
      <p class="annuaire-chapo">Chaque courtier ${escapeHtml(AG.nom)} a sa page : son territoire, sa façon de travailler, ses résultats et les réponses aux questions qu'on lui pose vraiment. Filtrez par ville pour trouver le vôtre.</p>
      <dl class="annuaire-faits">
        <div class="annuaire-fait"><dt>Courtiers</dt><dd>${enLigne.length}</dd></div>
        <div class="annuaire-fait"><dt>Villes couvertes</dt><dd>${villesAvecCourtier.length}</dd></div>
      </dl>
    </div>
  </header>

  <div class="filtres-bande">
    <div class="container filtres" role="group" aria-label="Filtrer par ville">
      <span class="filtres-label">Ville</span>
      <button type="button" class="fpill" data-ville="*" aria-pressed="true">Toutes les villes</button>
${filters}
    </div>
  </div>

  <main class="container annuaire">
    <div class="grille-courtiers" id="grid">
${cards}
    </div>
    <p class="vide" id="empty" role="status">Aucune page de courtier pour cette ville pour l'instant. <a href="${A.contact}" target="_blank" rel="noopener">Contactez l'agence</a> : on vous jumelle avec le bon courtier.</p>
  </main>

  <section class="annuaire-appel" aria-labelledby="appel-titre">
    <div class="container">
      <h2 id="appel-titre">Votre ville n'est pas dans la liste ?</h2>
      <p>L'agence couvre toute la région ${escapeHtml(AG.regionDe)}. Dites-nous où vous cherchez, on vous jumelle avec le courtier qui connaît le secteur.</p>
      <a class="bouton" href="${A.contact}" target="_blank" rel="noopener">Contacter l'agence</a>
    </div>
  </section>

  ${A.footer}

  <script>
    const pills = document.querySelectorAll('.fpill');
    const cards = document.querySelectorAll('.bcard');
    pills.forEach(p => p.addEventListener('click', () => {
      pills.forEach(x => x.setAttribute('aria-pressed', String(x === p)));
      const v = p.dataset.ville;
      let shown = 0;
      cards.forEach(c => {
        const ok = v === '*' || c.dataset.villes.split('|').includes(v);
        c.classList.toggle('hide', !ok);
        if (ok) shown++;
      });
      document.getElementById('empty').classList.toggle('show', shown === 0);
    }));
  </script>

  <script src="../consentement.js" data-agence="${escapeHtml(AG.nom)}" data-politique="${POLITIQUE}" defer></script>
</body>
</html>
`;
  fs.mkdirSync(COURTIERS_DIR, { recursive: true });
  fs.writeFileSync(path.join(COURTIERS_DIR, 'index.html'), html);
  console.log(`✓ courtiers/index.html généré (hub annuaire, ${enLigne.length} courtiers).`);
}

// ============================================================
// 2. SITEMAP — sitemap.xml du site
// ============================================================
function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  // lastmod = date du dernier commit de la page (pas la date du build) : Google
  // ignore les lastmod qui bougent sans changement réel. Fichier pas encore
  // commité -> date du jour.
  const lastmodOf = (loc) => {
    const rel = loc.replace(`${SITE}/`, '') || 'index.html';
    try {
      return execFileSync('git', ['log', '-1', '--format=%cs', '--', rel], { cwd: ROOT, encoding: 'utf8' }).trim() || today;
    } catch { return today; }
  };
  const urls = [
    { loc: `${SITE}/`, priority: '1.0' },
    { loc: `${SITE}/courtiers/index.html`, priority: '0.8' },
    ...CFG.VILLES.map(v => ({ loc: `${SITE}/${v.guide}`, priority: '0.8' })),
    ...fiches.filter(f => pageExists(f) && !pageIsNoindex(f))
      .map(f => ({ loc: `${SITE}/${pageOf(f)}`, priority: '0.7' }))
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u.loc}</loc><lastmod>${lastmodOf(u.loc)}</lastmod><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);
  console.log(`✓ sitemap.xml généré (${urls.length} URLs — pages noindex exclues).`);
}

// ============================================================
// 3. MAILLAGE guides→courtiers — bloc COURTIER_PAGES dans courtiers.js
// ============================================================
function injectCourtierPages() {
  const jsPath = path.join(ROOT, 'courtiers.js');
  if (!fs.existsSync(jsPath)) { console.log('· courtiers.js absent sur ce site : maillage du modal ignoré.'); return; }
  let js = fs.readFileSync(jsPath, 'utf8');
  const map = {};
  fiches.filter(f => pageExists(f) && !isDemo(f)).forEach(f => {
    map[f.identite.nomComplet] = pageOf(f);
    // Équipe : chaque membre pointe aussi vers la page d'équipe
    // (le roster du modal de jumelage liste les courtiers individuellement).
    (f.identite.membresEquipe || []).forEach(m => { if (m.nom) map[m.nom] = pageOf(f); });
  });
  const block = `/* COURTIER_PAGES:START — généré par build-courtiers.mjs, ne pas éditer */\n  const courtierPages = ${JSON.stringify(map, null, 2).replace(/\n/g, '\n  ')};\n  /* COURTIER_PAGES:END */`;
  if (js.includes('COURTIER_PAGES:START')) {
    js = js.replace(/\/\* COURTIER_PAGES:START[\s\S]*?COURTIER_PAGES:END \*\//, block);
  } else {
    console.warn('⚠ courtiers.js : bloc COURTIER_PAGES introuvable — maillage non injecté.');
    return;
  }
  fs.writeFileSync(jsPath, js);
  console.log(`✓ courtiers.js : ${Object.keys(map).length} page(s) courtier reliée(s) au modal de jumelage.`);
}

// ============================================================
// 4. VALIDATIONS SEO par page
// ============================================================
function validatePages() {
  let problems = 0;
  for (const f of fiches) {
    const label = pageOf(f);
    if (!pageExists(f)) {
      console.warn(`⚠ ${label} : page manquante pour la fiche ${f.slug}.json — à générer (docs/GENERER-PAGE-COURTIER.md).`);
      problems++;
      continue;
    }
    const html = pageHtml(f);
    const checks = [];
    const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
    if (!title) checks.push('title manquant');
    else if (title.length > 60) checks.push(`title trop long (${title.length} > 60)`);
    const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
    if (!desc) checks.push('meta description manquante');
    else if (desc.length < 120 || desc.length > 165) checks.push(`meta description : ${desc.length} caractères (visez 150-160)`);
    if (!html.includes('rel="canonical"')) checks.push('canonical manquant');
    const h1s = html.match(/<h1[\s>]/g) || [];
    if (h1s.length !== 1) checks.push(`${h1s.length} balises H1 (il en faut exactement 1)`);
    if (!/BreadcrumbList/.test(html)) checks.push('JSON-LD BreadcrumbList manquant');
    if (!/RealEstateAgent/.test(html)) checks.push('JSON-LD RealEstateAgent manquant');
    if (!/FAQPage/.test(html)) checks.push('JSON-LD FAQPage manquant');
    for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try { JSON.parse(m[1]); } catch (e) { checks.push('JSON-LD invalide (ne parse pas)'); }
    }
    if (checks.length) { console.warn(`⚠ ${label} :\n    - ${checks.join('\n    - ')}`); problems += checks.length; }
    else console.log(`✓ ${label} : title (${title.length}), description (${desc.length}), canonical, H1, JSON-LD — OK.`);
  }
  return problems;
}

// ============================================================
// 5. ANTI-DUPLICATION — phrases identiques entre pages courtiers
// ============================================================
function checkDuplication() {
  const pages = fiches.filter(pageExists).map(f => ({
    slug: f.slug,
    // nav/footer exclus : le chrome commun (topbar, fil d'Ariane, footer légal) est
    // légitimement identique entre pages — seule la rédaction doit être unique.
    text: pageHtml(f)
      .replace(/<!-- MEGA-MENU VILLES -->[\s\S]*?<\/script>/g, ' ')
      .replace(/<header[\s\S]*?<\/header>/g, ' ')
      .replace(/<script[\s\S]*?<\/script>/g, ' ')
      .replace(/<style[\s\S]*?<\/style>/g, ' ')
      .replace(/<nav[\s\S]*?<\/nav>/g, ' ')
      .replace(/<footer[\s\S]*?<\/footer>/g, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
  }));
  if (pages.length < 2) { console.log('✓ Anti-duplication : une seule page — rien à comparer.'); return 0; }

  // Phrases de 8 mots et plus, normalisées
  const seen = new Map(); // phrase -> [slugs]
  for (const p of pages) {
    const sentences = p.text.split(/[.!?»]/).map(s => s.trim().toLowerCase()).filter(s => (s.match(/\S+/g) || []).length >= 8);
    for (const s of new Set(sentences)) {
      if (!seen.has(s)) seen.set(s, []);
      seen.get(s).push(p.slug);
    }
  }
  let dups = 0;
  for (const [sentence, slugs] of seen) {
    if (slugs.length > 1) {
      dups++;
      console.warn(`✗ PHRASE DUPLIQUÉE entre [${slugs.join(', ')}] :\n    « ${sentence.slice(0, 120)}… »`);
    }
  }
  if (!dups) console.log(`✓ Anti-duplication : aucune phrase (8 mots+) partagée entre les ${pages.length} pages.`);
  else console.warn(`\n✗ ${dups} phrase(s) dupliquée(s) — à réécrire avant publication (règle 2.5).`);
  return dups;
}

// ============================================================
buildHub();
if (HUB_SEUL) { console.log('Terminé (--hub : sitemap et courtiers.js non touchés).'); process.exit(0); }
buildSitemap();
injectCourtierPages();
const seoProblems = validatePages();
const dups = checkDuplication();
console.log(`\nTerminé. ${seoProblems} problème(s) SEO, ${dups} duplication(s).`);
process.exitCode = dups > 0 ? 1 : 0;
