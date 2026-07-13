/* ============================================================
   BUILD COURTIERS — À partir de data/courtiers/*.json :
   1. Génère le hub annuaire  courtiers/index.html  (filtrable par ville)
   2. Génère                  sitemap.xml           (index + guides + courtiers)
   3. Injecte le maillage guides→courtiers dans courtiers.js
      (bloc COURTIER_PAGES — le modal de jumelage ajoute « Voir sa page »)
   4. Valide chaque page courtier : title ≤ 60, meta description,
      canonical, H1 unique, JSON-LD parsable, breadcrumb
   5. Détecte les phrases dupliquées entre pages courtiers (anti-duplication)

   Usage : node build-courtiers.mjs
   Les pages courtiers/<slug>.html elles-mêmes ne sont PAS générées ici :
   elles sont rédigées à neuf (voir docs/GENERER-PAGE-COURTIER.md).
   ============================================================ */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
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

const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// ---------- Charge les fiches courtiers ----------
if (!fs.existsSync(DATA_DIR)) { console.error('Aucun dossier data/courtiers/.'); process.exit(1); }
const fiches = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json')).map(f => {
  const j = JSON.parse(fs.readFileSync(path.join(DATA_DIR, f), 'utf8'));
  if (j.schemaVersion !== 1) console.warn(`⚠ ${f} : schemaVersion ${j.schemaVersion} inattendu (attendu : 1).`);
  if (!j.slug) j.slug = path.basename(f, '.json');
  return j;
}).sort((a, b) => a.identite.nomComplet.localeCompare(b.identite.nomComplet, 'fr'));

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
// ============================================================
function buildHub() {
  const villesAvecCourtier = [...new Set(fiches.flatMap(f =>
    [f.territoire.villePrincipale, ...f.territoire.villesSecondaires]))].sort((a, b) => a.localeCompare(b, 'fr'));

  const cards = fiches.map(f => {
    const annees = f.identite.anneeDebut ? new Date().getFullYear() - f.identite.anneeDebut : null;
    const villes = [f.territoire.villePrincipale, ...f.territoire.villesSecondaires];
    return `      <a class="bcard reveal" href="${f.slug}.html" data-villes="${escapeHtml(villes.join('|'))}">
        <div class="bcard-photo"><img src="${escapeHtml(portraitSrc(f))}" alt="${escapeHtml(f.identite.nomComplet)}, courtier immobilier à ${escapeHtml(f.territoire.villePrincipale)}" loading="lazy"></div>
        <div class="bcard-body">
          ${isDemo(f) ? '<span class="bcard-demo">Démo</span>' : ''}
          <h2>${escapeHtml(f.identite.nomComplet)}</h2>
          <p class="bcard-title">${escapeHtml(f.identite.titre)}</p>
          <p class="bcard-meta">${escapeHtml(f.territoire.villePrincipale)}${f.territoire.villesSecondaires.length ? ' · ' + escapeHtml(f.territoire.villesSecondaires.join(' · ')) : ''}</p>
          ${annees ? `<p class="bcard-exp">${annees} ans de courtage</p>` : ''}
          <span class="bcard-link">Voir sa page →</span>
        </div>
      </a>`;
  }).join('\n');

  const filters = villesAvecCourtier.map(v =>
    `        <button class="fpill" data-ville="${escapeHtml(v)}">${escapeHtml(v)}</button>`).join('\n');

  const html = `<!DOCTYPE html>
<!-- ⚙ GÉNÉRÉ par build-courtiers.mjs — ne pas éditer à la main. -->
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nos courtiers immobiliers — RE/MAX Crystal, Basses-Laurentides</title>
<meta name="description" content="Trouvez votre courtier immobilier RE/MAX Crystal par ville : Blainville, Sainte-Thérèse, Deux-Montagnes, Saint-Eustache et toutes les Basses-Laurentides.">
<link rel="canonical" href="${SITE}/courtiers/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Nos courtiers immobiliers — RE/MAX Crystal">
<meta property="og:description" content="L'annuaire des courtiers RE/MAX Crystal, classés par ville des Basses-Laurentides.">
<meta property="og:url" content="${SITE}/courtiers/">
<meta property="og:locale" content="fr_CA">
<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<script type="application/ld+json">
${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Nos courtiers', item: `${SITE}/courtiers/` }
  ]
}, null, 0)}
</script>
<style>
  :root {
    --navy-deep:#1a2332; --navy:#1e3350; --blue-brand:#3578c4; --blue-light:#6ba3d9; --blue-pale:#b0cfe8;
    --cream:#f7f5f0; --warm-white:#faf9f6; --gold:#c4a245;
    --text-dark:#1a1f2b; --text-body:#3d4555; --text-muted:#6b7385;
    --surface-card:#f8f9fb; --border-subtle:#e2e5eb;
  }
  * { margin:0; padding:0; box-sizing:border-box; }
  html { font-size:16px; scroll-behavior:smooth; }
  body { font-family:'Open Sans',sans-serif; background:var(--warm-white); color:var(--text-body); line-height:1.7; -webkit-font-smoothing:antialiased; }
  h1,h2,h3 { font-family:'Raleway',sans-serif; color:var(--text-dark); line-height:1.1; letter-spacing:-0.03em; }
  em { font-style:italic; color:var(--blue-brand); }
  img { display:block; max-width:100%; }
  a { text-decoration:none; color:inherit; }
  .container { width:min(90%,1180px); margin-inline:auto; }
  .topbar { position:sticky; top:0; z-index:50; display:flex; align-items:center; justify-content:space-between; padding:16px clamp(20px,5vw,56px); background:rgba(26,35,50,0.92); backdrop-filter:blur(10px); }
  .topbar img { height:26px; }
  .topbar-nav { display:flex; gap:26px; align-items:center; }
  .topbar-nav a { color:rgba(255,255,255,0.82); font-size:0.86rem; font-weight:500; }
  .topbar-nav a.cta { background:var(--blue-brand); color:#fff; padding:9px 18px; border-radius:999px; font-weight:600; }
  @media (max-width:760px){ .topbar-nav a:not(.cta){ display:none; } }
  .crumbs { background:var(--cream); border-bottom:1px solid var(--border-subtle); font-size:0.8rem; }
  .crumbs .container { display:flex; gap:8px; align-items:center; padding-block:10px; color:var(--text-muted); }
  .crumbs a { color:var(--blue-brand); font-weight:600; }
  .hero { background:linear-gradient(160deg,var(--navy-deep),var(--navy) 60%,#15212f); color:#fff; padding-block:clamp(44px,6vw,76px); position:relative; overflow:hidden; }
  .hero::after { content:""; position:absolute; inset:0; background:radial-gradient(900px 420px at 85% 10%,rgba(53,120,196,0.25),transparent 60%); pointer-events:none; }
  .hero .container { position:relative; z-index:1; }
  .eyebrow { display:inline-flex; align-items:center; gap:10px; font-family:'Raleway',sans-serif; font-size:0.74rem; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:var(--blue-light); margin-block-end:16px; }
  .eyebrow::before { content:""; width:26px; height:2px; background:var(--gold); }
  .hero h1 { color:#fff; font-weight:300; font-size:clamp(2.2rem,5vw,3.6rem); letter-spacing:-0.04em; }
  .hero h1 strong { font-weight:700; }
  .hero p { color:rgba(255,255,255,0.82); max-width:60ch; margin-block-start:16px; font-weight:300; }
  .filters { display:flex; gap:10px; flex-wrap:wrap; padding-block:clamp(24px,3vw,36px); }
  .fpill { font-family:'Raleway',sans-serif; font-size:0.82rem; font-weight:600; color:var(--text-body); background:#fff; border:1px solid var(--border-subtle); border-radius:999px; padding:9px 18px; cursor:pointer; transition:all .25s; }
  .fpill:hover { border-color:var(--blue-light); }
  .fpill.on { background:var(--navy); border-color:var(--navy); color:#fff; }
  .grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; padding-block-end:clamp(56px,7vw,96px); }
  @media (max-width:900px){ .grid { grid-template-columns:repeat(2,1fr); } }
  @media (max-width:600px){ .grid { grid-template-columns:1fr; } }
  .bcard { background:#fff; border:1px solid var(--border-subtle); border-radius:16px; overflow:hidden; box-shadow:0 1px 3px rgba(35,50,70,0.04),0 10px 30px rgba(35,50,70,0.05); transition:transform .4s cubic-bezier(.16,1,.3,1),box-shadow .4s; display:flex; flex-direction:column; }
  .bcard:hover { transform:translateY(-5px); box-shadow:0 4px 10px rgba(35,50,70,0.1),0 20px 48px rgba(35,50,70,0.15); }
  .bcard.hide { display:none; }
  .bcard-photo { aspect-ratio:4/3.4; overflow:hidden; background:var(--navy); }
  .bcard-photo img { width:100%; height:100%; object-fit:cover; object-position:center top; transition:transform .8s cubic-bezier(.16,1,.3,1); }
  .bcard:hover .bcard-photo img { transform:scale(1.05); }
  .bcard-body { padding:20px 22px 24px; display:flex; flex-direction:column; gap:4px; flex:1; }
  .bcard-demo { align-self:flex-start; font-size:0.62rem; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; background:var(--gold); color:var(--navy-deep); border-radius:999px; padding:3px 10px; margin-block-end:4px; }
  .bcard h2 { font-size:1.25rem; font-weight:700; }
  .bcard-title { font-size:0.8rem; color:var(--text-muted); }
  .bcard-meta { font-size:0.84rem; color:var(--text-body); font-weight:600; margin-block-start:6px; }
  .bcard-exp { font-size:0.78rem; color:var(--text-muted); }
  .bcard-link { margin-block-start:auto; padding-block-start:12px; font-size:0.84rem; font-weight:700; color:var(--blue-brand); }
  .empty { display:none; text-align:center; color:var(--text-muted); padding-block:40px; }
  .empty.show { display:block; }
  .footer { background:var(--navy-deep); color:rgba(255,255,255,0.5); padding-block:28px; font-size:0.8rem; }
  .footer .container { display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px; }
  .reveal { opacity:0; transform:translateY(24px); transition:opacity .7s ease,transform .7s cubic-bezier(.16,1,.3,1); }
  .reveal.in { opacity:1; transform:none; }
  @media (prefers-reduced-motion: reduce){ .reveal { opacity:1; transform:none; transition:none; } }
</style>
</head>
<body>
  <nav class="topbar">
    <a href="../index.html"><img src="../brand_assets/Crystal-long-blanc-crystal.png" alt="RE/MAX Crystal"></a>
    <div class="topbar-nav">
      <a href="../index.html#guides">Guides de villes</a>
      <a href="../index.html#outils">Outils</a>
      <a href="../index.html#contact" class="cta">Contact</a>
    </div>
  </nav>

  <nav class="crumbs" aria-label="Fil d'Ariane">
    <div class="container">
      <a href="../index.html">Accueil</a>
      <span aria-hidden="true">›</span>
      <span>Nos courtiers</span>
    </div>
  </nav>

  <header class="hero">
    <div class="container">
      <div class="eyebrow">RE/MAX Crystal · Basses-Laurentides</div>
      <h1>Nos <strong>courtiers</strong>, ville par ville</h1>
      <p>Chaque courtier RE/MAX Crystal a sa page : son territoire, sa façon de travailler, ses résultats et les réponses aux questions qu'on lui pose vraiment. Filtrez par ville pour trouver le vôtre.</p>
    </div>
  </header>

  <main class="container">
    <div class="filters" role="group" aria-label="Filtrer par ville">
      <button class="fpill on" data-ville="*">Toutes les villes</button>
${filters}
    </div>
    <div class="grid" id="grid">
${cards}
    </div>
    <p class="empty" id="empty">Aucune page de courtier pour cette ville pour l'instant — <a href="../index.html#contact" style="color:var(--blue-brand);font-weight:600;">contactez l'agence</a>, on vous jumelle avec le bon courtier.</p>
  </main>

  <footer class="footer">
    <div class="container">
      <span>© 2026 RE/MAX Crystal — Franchisé indépendant et autonome de RE/MAX Québec</span>
      <span><a href="../index.html" style="text-decoration:underline;">agence.remaxcrystal.com</a></span>
    </div>
  </footer>

  <script>
    const pills = document.querySelectorAll('.fpill');
    const cards = document.querySelectorAll('.bcard');
    pills.forEach(p => p.addEventListener('click', () => {
      pills.forEach(x => x.classList.remove('on'));
      p.classList.add('on');
      const v = p.dataset.ville;
      let shown = 0;
      cards.forEach(c => {
        const ok = v === '*' || c.dataset.villes.split('|').includes(v);
        c.classList.toggle('hide', !ok);
        if (ok) shown++;
      });
      document.getElementById('empty').classList.toggle('show', shown === 0);
    }));
    const io = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el,i) => { el.style.transitionDelay=(i%3)*0.05+'s'; io.observe(el); });
  </script>
</body>
</html>
`;
  fs.mkdirSync(COURTIERS_DIR, { recursive: true });
  fs.writeFileSync(path.join(COURTIERS_DIR, 'index.html'), html);
  console.log('✓ courtiers/index.html généré (hub annuaire).');
}

// ============================================================
// 2. SITEMAP — sitemap.xml (site Crystal)
// ============================================================
function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: `${SITE}/`, priority: '1.0' },
    { loc: `${SITE}/courtiers/`, priority: '0.8' },
    ...CFG.VILLES.map(v => ({ loc: `${SITE}/${v.guide}`, priority: '0.8' })),
    ...fiches.filter(f => pageExists(f) && !pageIsNoindex(f))
      .map(f => ({ loc: `${SITE}/${pageOf(f)}`, priority: '0.7' }))
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><priority>${u.priority}</priority></url>`).join('\n')}
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
  let js = fs.readFileSync(jsPath, 'utf8');
  const map = {};
  fiches.filter(f => pageExists(f) && !isDemo(f)).forEach(f => { map[f.identite.nomComplet] = pageOf(f); });
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
    text: pageHtml(f)
      .replace(/<script[\s\S]*?<\/script>/g, ' ')
      .replace(/<style[\s\S]*?<\/style>/g, ' ')
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
buildSitemap();
injectCourtierPages();
const seoProblems = validatePages();
const dups = checkDuplication();
console.log(`\nTerminé. ${seoProblems} problème(s) SEO, ${dups} duplication(s).`);
process.exitCode = dups > 0 ? 1 : 0;
