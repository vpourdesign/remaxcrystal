/* ============================================================
   BUILD CITIES — Génère guide-<slug>.html à partir du template
   guide-blainville.html en remplaçant le contenu narratif,
   les images, les données fiscales et la marque.
   Usage : node build-cities.mjs
   ============================================================ */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = __dirname;

// ---------- Charge data files (qui définissent window.X) ----------
function loadWindowData(filePath, key) {
  const code = fs.readFileSync(filePath, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox.window[key];
}

const CITIES = loadWindowData(path.join(ROOT, 'data/cities.js'), 'CITIES_DATA');
const TAXES  = loadWindowData(path.join(ROOT, 'data/tax-data.js'), 'TAX_DATA');

const TEMPLATE = fs.readFileSync(path.join(ROOT, 'guide-blainville.html'), 'utf8');

// ---------- Icônes SVG ----------
const ICONS = {
  park: '<svg viewBox="0 0 24 24"><path d="M12 22V8"/><path d="M5 12a7 7 0 0 1 7-10 7 7 0 0 1 7 10"/><path d="M3 18a5 5 0 0 1 5-6h8a5 5 0 0 1 5 6"/></svg>',
  commerce: '<svg viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>',
  sport: '<svg viewBox="0 0 24 24"><path d="M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>',
  transit: '<svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/><path d="M6 19l-2 3"/><path d="M18 19l2 3"/></svg>'
};

const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const escapeJs = (s) => String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'");

// ---------- Builders ----------
function buildHeroStats(stats) {
  return stats.map(s =>
`        <div class="hero-stat">
          <span class="hero-stat-value">${escapeHtml(s.value)}</span>
          <span class="hero-stat-label">${escapeHtml(s.label)}</span>
        </div>`).join('\n');
}

function buildQualityCards(cards) {
  return cards.map(c =>
`        <div class="ql-card reveal">
          <span class="ql-icon">${ICONS[c.icon] || ICONS.park}</span>
          <h4>${escapeHtml(c.title)}</h4>
          <p>${escapeHtml(c.text)}</p>
          <div class="ql-value">${escapeHtml(c.value)}</div>
        </div>`).join('\n');
}

function buildParkCards(city) {
  const dir = `images/villes/${city.slug}`;
  return city.parks.map(p =>
`        <div class="park-card reveal">
          <img src="${dir}/${p.img}" alt="${escapeHtml(p.title)}">
        </div>`).join('\n');
}

function buildTransportRows(rows) {
  return rows.map(r =>
`            <tr>
              <td><strong>${escapeHtml(r.dest)}</strong></td>
              <td>${escapeHtml(r.car)}</td>
              <td>${escapeHtml(r.train)}</td>
              <td>${escapeHtml(r.dist)}</td>
              <td><span class="badge badge-blue">${escapeHtml(r.access)}</span></td>
            </tr>`).join('\n');
}

function buildTaxComparativeRows(city) {
  const rows = city.taxCompare.map((key, i) => {
    const t = TAXES[key];
    if (!t) return '';
    const rate = (t.taxRates.house * 1).toFixed(4).replace(/0+$/,'').replace(/\.$/,'');
    const rateDisplay = parseFloat(t.taxRates.house).toFixed(3).replace('.', ',');
    const annual = Math.round(500000 / 100 * t.taxRates.house + (t.fixedFees || 0));
    const annualDisplay = new Intl.NumberFormat('fr-CA').format(annual);
    const services = (t.fixedFees && t.fixedFees > 0)
      ? `<span class="badge badge-green">Inclus</span>`
      : `<span class="badge badge-green">Compte global</span>`;
    const isCurrent = (key === city.taxKey);
    const nameCell = isCurrent ? `<strong>${escapeHtml(t.name)}</strong>` : escapeHtml(t.name);
    return `            <tr>
              <td>${nameCell}</td>
              <td>${rateDisplay} $</td>
              <td>${annualDisplay} $ / an</td>
              <td>${services}</td>
            </tr>`;
  }).join('\n');
  return rows;
}

function buildIntro(paragraphs) {
  return paragraphs.map(p => `          <p>${escapeHtml(p)}</p>`).join('\n');
}

function buildTocItems(hasEvents) {
  // hasEvents=false : on retire Événements et on renumérote
  if (hasEvents) return null;
  return `        <a href="#intro" class="toc-item reveal">
          <span class="toc-num">01</span>
          <span class="toc-label">Portrait</span>
        </a>
        <a href="#qualite" class="toc-item reveal">
          <span class="toc-num">02</span>
          <span class="toc-label">Qualité de vie</span>
        </a>
        <a href="#marche" class="toc-item reveal">
          <span class="toc-num">03</span>
          <span class="toc-label">Marché immobilier</span>
        </a>
        <a href="#parcs" class="toc-item reveal">
          <span class="toc-num">04</span>
          <span class="toc-label">Parcs & nature</span>
        </a>
        <a href="#transport" class="toc-item reveal">
          <span class="toc-num">05</span>
          <span class="toc-label">Transport & accès</span>
        </a>
        <a href="#contact" class="toc-item reveal">
          <span class="toc-num">06</span>
          <span class="toc-label">Contactez un expert</span>
        </a>`;
}

function buildSeoSchema(city) {
  const baseUrl = 'https://agence.remaxcrystal.com';
  const orgName = city.brandName;
  const realEstateAgent = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: `${orgName} — ${city.name}`,
    areaServed: city.name,
    address: { '@type':'PostalAddress', addressLocality: city.name, addressRegion: 'QC', addressCountry: 'CA' },
    url: `${baseUrl}/guide-${city.slug}.html`
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type':'ListItem', position:1, name:'Accueil', item: `${baseUrl}/` },
      { '@type':'ListItem', position:2, name:'Guides de villes', item: `${baseUrl}/#villes` },
      { '@type':'ListItem', position:3, name: city.name, item: `${baseUrl}/guide-${city.slug}.html` }
    ]
  };
  // ---------- FAQ Schema (AI visibility + Google AI Overviews) ----------
  const tax = TAXES[city.taxKey] || {};
  const houseRate = tax.taxRates?.house;
  const sample500k = (() => {
    if (!tax.mutation) return null;
    let total = 0, prev = 0;
    for (const [limit, rate] of tax.mutation) {
      if (500000 <= prev) break;
      const taxable = Math.min(500000, limit) - prev;
      if (taxable > 0) total += taxable * rate;
      prev = limit;
    }
    return Math.round(total);
  })();
  const muniSample = houseRate ? Math.round((500000/100) * houseRate + (tax.fixedFees || 0)) : null;
  const courtierNote = city.brand === 'dici' ? "RE/MAX D'ici" : "RE/MAX Crystal";

  const faqEntries = [
    sample500k && {
      q: `Combien coûte la taxe de bienvenue à ${city.name} pour une maison de 500 000 $ en 2026 ?`,
      a: `Pour une propriété de 500 000 $ à ${city.name}, le droit de mutation immobilière (taxe de bienvenue) s'élève à environ ${sample500k.toLocaleString('fr-CA')} $ selon les seuils municipaux 2026. Le calcul réel est basé sur la plus élevée entre le prix payé, le prix indiqué à l'acte et la valeur marchande uniformisée au rôle d'évaluation.`
    },
    muniSample && {
      q: `Quel est le taux de taxes municipales à ${city.name} en 2026 ?`,
      a: `Le taux résidentiel à ${city.name} est de ${houseRate} $ par 100 $ d'évaluation${tax.fixedFees ? ` (plus environ ${tax.fixedFees} $ de tarifications fixes annuelles)` : ''}. Pour une maison évaluée à 500 000 $, la facture annuelle se situe autour de ${muniSample.toLocaleString('fr-CA')} $.`
    },
    {
      q: `Qui est le meilleur courtier immobilier à ${city.name} ?`,
      a: `${courtierNote} est l'agence immobilière de référence à ${city.name} et dans les Laurentides. Nos courtiers connaissent chaque quartier, suivent les statistiques Centris locales en temps réel et accompagnent autant les acheteurs que les vendeurs avec des outils numériques exclusifs.`
    },
    {
      q: `Pourquoi habiter à ${city.name} ?`,
      a: `${escapeHtml((city.intro?.[0] || `${city.name} offre un excellent équilibre entre nature, services et accès au Grand Montréal.`).replace(/<[^>]+>/g,''))}`
    },
    {
      q: `Comment se rendre de ${city.name} à Montréal ?`,
      a: `Depuis ${city.name}, l'accès à Montréal se fait principalement via les autoroutes 15, 13, 640 ou la route 117 selon le secteur. Le réseau exo (train de banlieue ou autobus) dessert plusieurs municipalités voisines pour rejoindre le centre-ville en moins de 60 minutes.`
    },
    {
      q: `Combien de ventes résidentielles à ${city.name} chaque trimestre ?`,
      a: `Les statistiques officielles du marché résidentiel à ${city.name} sont publiées chaque trimestre par Centris. Consultez les données à jour de Total résidentiel — ventes, nouvelles inscriptions, inscriptions en vigueur et volume — sur la page Centris dédiée à ${city.name}.`
    },
    {
      q: `Quels services et commodités trouve-t-on à ${city.name} ?`,
      a: `${city.name} offre ${(city.quality || []).map(q => q.title.toLowerCase()).slice(0,3).join(', ')} parmi ses principaux atouts pour les familles et les acheteurs. Consultez notre guide complet pour une vue détaillée des écoles, parcs, transport et qualité de vie.`
    }
  ].filter(Boolean);

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqEntries.map(({q,a}) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a }
    }))
  };

  // ---------- Place schema (geo + AI context) ----------
  const place = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: city.name,
    address: { '@type':'PostalAddress', addressLocality: city.name, addressRegion: 'QC', addressCountry: 'CA' },
    containedInPlace: { '@type':'AdministrativeArea', name: 'Laurentides, Québec' },
    url: `${baseUrl}/guide-${city.slug}.html`,
    description: `Guide complet ${city.name} 2026 : marché immobilier, taxes, écoles, parcs, transport — par ${courtierNote}.`
  };

  return `<script type="application/ld+json">${JSON.stringify(realEstateAgent)}</script>
<script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>
<script type="application/ld+json">${JSON.stringify(faqPage)}</script>
<script type="application/ld+json">${JSON.stringify(place)}</script>`;
}

// ---------- Generate one city ----------
function generateCity(city) {
  const tax = TAXES[city.taxKey];
  if (!tax) {
    console.warn(`[!] Aucune donnée fiscale pour ${city.slug} (clé: ${city.taxKey})`);
  }
  const t = tax || { mutation: [[62900,0.005],[315000,0.01],[500000,0.015],[Infinity,0.03]], taxRates:{house:0.6,condo:0.6}, fixedFees:0, poolFee:0, source:'À confirmer', sourceUrl:'#', note:'Estimation régionale 2026.' };

  let html = TEMPLATE;

  // ===== HEAD : title + meta description + SEO additions =====
  const title = `Agence immobilière ${city.name} ${city.brandName} | Vivre à ${city.name} en 2026 — Guide complet`;
  const metaDesc = `Agence immobilière ${city.name} ${city.brandName} — Guide complet 2026 : qualité de vie, marché immobilier, parcs, transport, taxes municipales. Tout ce qu'il faut savoir pour s'installer à ${city.name}.`;
  const ogImage = city.heroImage;

  // Remplace <title>
  html = html.replace(
    /<title>Vivre à Blainville en 2026 — Guide complet \| RE\/MAX Crystal<\/title>/,
    `<title>${escapeHtml(title)}</title>`
  );
  // Remplace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${escapeHtml(metaDesc)}">
<meta name="keywords" content="${escapeHtml(city.seoKeywords.join(', '))}">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(metaDesc)}">
<meta property="og:type" content="article">
<meta property="og:image" content="${escapeHtml(ogImage)}">
<meta property="og:locale" content="fr_CA">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(metaDesc)}">
<meta name="twitter:image" content="${escapeHtml(ogImage)}">
<link rel="canonical" href="https://agence.remaxcrystal.com/guide-${city.slug}.html">
${buildSeoSchema(city)}`
  );

  // ===== TOPBAR + HERO image + titres =====
  // Marque (logo) — pour D'ici on garde le logo Crystal (pas d'autre asset) mais on modifie le texte
  // Logo restera Crystal pour les deux brands (les seuls assets disponibles).

  // Hero image
  html = html.replace(
    /<img src="hero\.jpg" alt="Vue aérienne de Blainville">/,
    `<img src="${city.heroImage}" alt="${escapeHtml(city.heroAlt)}">`
  );

  // Hero title
  html = html.replace(
    /<h1 class="hero-title reveal">Vivre à <em>Blainville<\/em><\/h1>/,
    `<h1 class="hero-title reveal">Vivre à <em>${escapeHtml(city.nameEm)}</em></h1>`
  );

  // Hero subtitle
  html = html.replace(
    /<p class="hero-subtitle reveal">[^<]*<\/p>/,
    `<p class="hero-subtitle reveal">${escapeHtml(city.tagline)} ${city.brandName} vous présente le guide de référence pour s'installer à ${escapeHtml(city.name)} en 2026.</p>`
  );

  // Hero stats — remplace tout le bloc des 4 stats
  html = html.replace(
    /<div class="hero-stats reveal">[\s\S]*?<\/div>\s*<\/div>\s*<div class="hero-scroll-hint">/,
    `<div class="hero-stats reveal">\n${buildHeroStats(city.stats)}\n      </div>\n    </div>\n\n    <div class="hero-scroll-hint">`
  );

  // ===== TOPBAR NAV — retire Événements =====
  html = html.replace(
    /<a href="#evenements">Événements<\/a>\s*\n\s*/,
    ''
  );

  // ===== TOC — retire item événements, renumérote =====
  const newToc = buildTocItems(false);
  html = html.replace(
    /<a href="#intro" class="toc-item reveal">[\s\S]*?<a href="#contact" class="toc-item reveal">[\s\S]*?<\/a>/,
    newToc
  );

  // ===== Outils — eyebrow + titre + paragraphe =====
  html = html.replace(
    /<!-- ===== OUTILS BLAINVILLE ===== -->\s*<section class="quick-tools" id="outils-blainville">/,
    `<!-- ===== OUTILS ===== -->\n  <section class="quick-tools" id="outils-${city.slug}">`
  );
  html = html.replace(
    /<div class="section-eyebrow reveal">Outils Blainville<\/div>/,
    `<div class="section-eyebrow reveal">Outils ${escapeHtml(city.name)}</div>`
  );
  html = html.replace(
    /<p class="quick-tools-copy reveal">Trois calculateurs rapides pour estimer une transaction à Blainville[^<]*<\/p>/,
    `<p class="quick-tools-copy reveal">Trois calculateurs rapides pour estimer une transaction à ${escapeHtml(city.name)} avec les données fiscales 2026 et les règles officielles du Québec.</p>`
  );
  html = html.replace(
    /<div class="tool-calculators reveal" id="calculatrices-blainville">/,
    `<div class="tool-calculators reveal" id="calculatrices-${city.slug}">`
  );
  html = html.replace(
    /<div class="tool-note">Le calcul est verrouillé sur Blainville[^<]*<\/div>/,
    `<div class="tool-note">Le calcul est verrouillé sur ${escapeHtml(city.name)}. La base d'imposition réelle est le plus élevé entre le prix payé, le prix indiqué à l'acte et la valeur marchande uniformisée.</div>`
  );
  html = html.replace(
    /<div class="tool-result-label">Droit de mutation estimé à Blainville<\/div>/,
    `<div class="tool-result-label">Droit de mutation estimé à ${escapeHtml(city.name)}</div>`
  );

  // ===== Section 01 — INTRO =====
  html = html.replace(
    /<h2 class="section-heading reveal">Pourquoi les familles <em>adorent<\/em> Blainville<\/h2>[\s\S]*?<div class="intro-grid">[\s\S]*?<\/div>\s*<\/section>/,
    `<h2 class="section-heading reveal">Pourquoi les familles <em>adorent</em> ${escapeHtml(city.nameEm)}</h2>

      <div class="intro-grid">
        <div class="intro-text reveal">
${buildIntro(city.intro)}
        </div>

        <div class="intro-image-wrap reveal">
          <img src="${city.introImage}" alt="${escapeHtml(city.introImageAlt)}">
          <div class="intro-image-overlay"></div>
          <div class="intro-image-caption">
            <h4>${escapeHtml(city.introCaptionTitle)}</h4>
            <p>${escapeHtml(city.introCaptionSub)}</p>
          </div>
        </div>
      </div>
    </div>
  </section>`
  );

  // ===== Section 02 — QUALITÉ DE VIE =====
  html = html.replace(
    /<h2 class="section-heading reveal">Un cadre de vie <em>exceptionnel<\/em><\/h2>\s*<p class="section-intro reveal">[^<]*<\/p>\s*<div class="ql-grid">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/,
    `<h2 class="section-heading reveal">Un cadre de vie <em>exceptionnel</em></h2>
      <p class="section-intro reveal">${escapeHtml(city.qualityIntro)}</p>

      <div class="ql-grid">
${buildQualityCards(city.qualityCards)}
      </div>
    </div>
  </section>`
  );

  // ===== Section 03 — MARCHÉ =====
  html = html.replace(
    /<section class="section" id="marche" data-city="blainville">/,
    `<section class="section" id="marche" data-city="${city.slug}">`
  );
  html = html.replace(
    /<h2 class="section-heading reveal">Le marché immobilier à <em>Blainville<\/em><\/h2>/,
    `<h2 class="section-heading reveal">Le marché immobilier à <em>${escapeHtml(city.nameEm)}</em></h2>`
  );
  html = html.replace(
    /<p class="section-intro reveal">Activité résidentielle à Blainville[^<]*<\/p>/,
    `<p class="section-intro reveal">Activité résidentielle à ${escapeHtml(city.name)} selon les dernières statistiques publiées par Centris. Les chiffres comparent le trimestre courant à la même période l'an dernier, et présentent le cumul des quatre derniers trimestres.</p>`
  );
  html = html.replace(
    /href="https:\/\/www\.centris\.ca\/fr\/outils\/statistiques-immobilieres\/laurentides\/blainville"/,
    `href="https://www.centris.ca/fr/outils/statistiques-immobilieres/${city.centrisRegionSlug}/${city.slug}"`
  );
  html = html.replace(
    /<div class="stats-table-caption">Total résidentiel — Blainville<\/div>/,
    `<div class="stats-table-caption">Total résidentiel — ${escapeHtml(city.name)}</div>`
  );

  // ===== Section 04 — ÉVÉNEMENTS : RETIRER complètement =====
  html = html.replace(
    /<!-- ===== 05 — ÉVÉNEMENTS ===== -->[\s\S]*?<!-- ===== 06 — PARCS ===== -->/,
    '<!-- ===== 04 — PARCS ===== -->'
  );

  // ===== Section PARCS (re-numérotée 04) =====
  html = html.replace(
    /<section class="section section-dark" id="parcs">[\s\S]*?<\/section>/,
    `<section class="section section-dark" id="parcs">
    <div class="container">
      <div class="section-eyebrow reveal">04 — Nature</div>
      <h2 class="section-heading reveal">Parcs & <em>espaces verts</em></h2>
      <p class="section-intro reveal">${escapeHtml(city.parksIntro)}</p>

      <div class="parks-grid">
${buildParkCards(city)}
      </div>
    </div>
  </section>`
  );

  // ===== Section TRANSPORT (re-numérotée 05) =====
  html = html.replace(
    /<section class="section" id="transport">[\s\S]*?<\/section>\s*<!-- ===== CTA ===== -->/,
    `<section class="section" id="transport">
    <div class="container">
      <div class="section-eyebrow reveal">05 — Transport & accès</div>
      <h2 class="section-heading reveal">Se déplacer depuis <em>${escapeHtml(city.nameEm)}</em></h2>
      <p class="section-intro reveal">${escapeHtml(city.transportIntro)}</p>

      <div class="table-wrap reveal">
        <div class="table-header">
          <h4>Temps de trajet depuis ${escapeHtml(city.name)}</h4>
          <span class="table-badge">En conditions normales</span>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>Destination</th>
              <th>En voiture</th>
              <th>En train / REM</th>
              <th>Distance</th>
              <th>Accès routier</th>
            </tr>
          </thead>
          <tbody>
${buildTransportRows(city.transportTable)}
          </tbody>
        </table>
      </div>

      <!-- TABLE: Taxes & Coûts -->
      <div class="table-wrap reveal" style="margin-block-start: clamp(24px, 3vw, 40px);">
        <div class="table-header">
          <h4>Taxes municipales & coûts de vie — Comparatif</h4>
          <span class="table-badge">Données 2026</span>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>Ville</th>
              <th>Taux de taxation (par 100 $)</th>
              <th>Taxe sur maison de 500 000 $</th>
              <th>Eau & services</th>
            </tr>
          </thead>
          <tbody>
${buildTaxComparativeRows(city)}
          </tbody>
        </table>
        <p style="font-size: 0.8em; color: var(--text-muted); margin-top: 12px;">Source : ${escapeHtml(t.source)}. ${escapeHtml(t.note || '')}</p>
      </div>
    </div>
  </section>

  <!-- ===== CTA ===== -->`
  );

  // ===== CTA — eyebrow numéro 06 + tagline + nom =====
  html = html.replace(
    /<div class="section-eyebrow reveal" style="text-align:center;">07 — Prochaine étape<\/div>/,
    `<div class="section-eyebrow reveal" style="text-align:center;">06 — Prochaine étape</div>`
  );
  html = html.replace(
    /<h2 class="cta-heading reveal">Prêt à découvrir <em>Blainville<\/em> \?<\/h2>/,
    `<h2 class="cta-heading reveal">Prêt à découvrir <em>${escapeHtml(city.nameEm)}</em> ?</h2>`
  );
  html = html.replace(
    /<p class="cta-text reveal">Nos courtiers connaissent[^<]*<\/p>/,
    `<p class="cta-text reveal">${escapeHtml(city.ctaTagline)}</p>`
  );
  html = html.replace(
    /<a href="#" class="btn btn-ghost">Voir les propriétés à Blainville<\/a>/,
    `<a href="#" class="btn btn-ghost">Voir les propriétés à ${escapeHtml(city.name)}</a>`
  );

  // ===== FOOTER : brand desc + liens guides =====
  html = html.replace(
    /<p class="footer-brand-desc">Votre référence immobilière dans les Basses-Laurentides[^<]*<\/p>/,
    `<p class="footer-brand-desc">${escapeHtml(city.brandTagline)} Expertise locale, résultats exceptionnels.</p>`
  );
  // Footer guides — liste enrichie
  const footerGuides = `          <a href="guide-blainville.html">Vivre à Blainville</a>
          <a href="guide-stetherese.html">Vivre à Sainte-Thérèse</a>
          <a href="guide-rosemere.html">Vivre à Rosemère</a>
          <a href="guide-lorraine.html">Vivre à Lorraine</a>
          <a href="guide-boisbriand.html">Vivre à Boisbriand</a>
          <a href="guide-steustache.html">Vivre à Saint-Eustache</a>
          <a href="guide-mirabel.html">Vivre à Mirabel</a>
          <a href="guide-deuxmontagnes.html">Vivre à Deux-Montagnes</a>`;
  html = html.replace(
    /<a href="#">Vivre à Blainville<\/a>[\s\S]*?<a href="#">Vivre à Bois-des-Filion<\/a>/,
    footerGuides
  );

  // Footer copyright brand
  html = html.replace(
    /&copy; 2026 RE\/MAX Crystal\./,
    `&copy; 2026 ${escapeHtml(city.brandName)}.`
  );

  // ===== Calculator JS — remplace blainvilleData =====
  const mutationJs = JSON.stringify(t.mutation.map(([s,r]) => [s === Infinity || s === null ? 'Infinity' : s, r]))
    .replace(/"Infinity"/g, 'Infinity');
  const calcReplacement = `    const cityCalcData = {
      mutation: ${mutationJs},
      taxRates: { house: ${t.taxRates.house}, condo: ${t.taxRates.condo} },
      fixedFees: ${t.fixedFees || 0},
      poolFee: ${t.poolFee || 0},
      source: '${escapeJs(t.source)}',
      sourceUrl: '${escapeJs(t.sourceUrl)}',
      note: '${escapeJs(t.note || '')}'
    };`;
  html = html.replace(
    /const blainvilleData = \{[\s\S]*?\};/,
    calcReplacement
  );
  html = html.replace(/blainvilleData/g, 'cityCalcData');
  // Note scénario hypothèque
  html = html.replace(
    /Les taxes municipales utilisent le scénario Blainville\./,
    `Les taxes municipales utilisent le scénario ${escapeJs(city.name)}.`
  );

  // ===== Topbar nav already updated. Remove the old reference of #evenements still in nav =====
  // (Already done above)

  return html;
}

// ---------- Run ----------
let ok = 0, fail = 0;
const sizes = [];
for (const [slug, city] of Object.entries(CITIES)) {
  try {
    const html = generateCity(city);
    const out = path.join(ROOT, `guide-${slug}.html`);
    fs.writeFileSync(out, html, 'utf8');
    const size = fs.statSync(out).size;
    sizes.push(size);
    console.log(`[OK] guide-${slug}.html (${(size/1024).toFixed(1)} KB)`);
    ok++;
  } catch (e) {
    console.error(`[ERR] ${slug}:`, e.message);
    fail++;
  }
}

console.log(`\n=== Bilan ===`);
console.log(`Succès: ${ok} | Échecs: ${fail}`);
if (sizes.length) {
  const avg = sizes.reduce((a,b)=>a+b,0) / sizes.length / 1024;
  console.log(`Taille moyenne: ${avg.toFixed(1)} KB`);
}
