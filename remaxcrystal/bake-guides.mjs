/* ============================================================
   BAKE GUIDES — Écrit dans le HTML des guides de villes ce que
   le JavaScript calcule au chargement, pour que Google et les
   outils d'IA (qui lisent le HTML brut) voient les vrais chiffres.

   1. Tableau Centris : valeurs, variations, flèches, date.
   2. Calculateurs : résultats affichés avec les valeurs par défaut.
   3. FAQ JSON-LD : réponses tirées du contenu réel de chaque page
      (taxe de bienvenue, taxes municipales, transport, ventes
      Centris, atouts), plus « Comment choisir un courtier ».

   Le JavaScript des pages continue de tourner : rien ne change
   pour le visiteur, le HTML de départ est simplement déjà rempli.

   Usage (après chaque mise à jour de data/market-stats.js) :
     node bake-guides.mjs
   Requiert puppeteer (installé dans ~/node_modules) et Google Chrome.
   ============================================================ */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const require = createRequire(path.join(os.homedir(), 'node_modules', 'noop.js'));
const puppeteer = require('puppeteer');

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SITES = [
  { dir: ROOT, brand: 'RE/MAX Crystal', region: 'les Basses-Laurentides', match: /^guide-.*\.html$/ },
  { dir: path.join(ROOT, '..', 'remaxdici'), brand: "RE/MAX D'ici", region: 'Lanaudière', match: /^guide-dici-.*\.html$/ },
];

const CALC_IDS = [
  'welcome-total', 'welcome-breakdown', 'welcome-source',
  'tax-total', 'tax-month', 'tax-rate', 'tax-fixed', 'tax-pool-fee', 'tax-breakdown', 'tax-source',
  'mortgage-monthly', 'mortgage-payment', 'mortgage-taxes', 'mortgage-insurance', 'mortgage-loan',
  'mortgage-breakdown', 'mortgage-source',
];

// Remplace le contenu de l'élément qui porte cet id (balises imbriquées équilibrées).
function replaceById(src, id, inner) {
  const open = new RegExp(`<(\\w+)\\b[^>]*\\bid="${id}"[^>]*>`);
  const m = open.exec(src);
  if (!m) return { src, ok: false };
  const tag = m[1];
  const start = m.index + m[0].length;
  const re = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'g');
  re.lastIndex = start;
  let depth = 1, t;
  while ((t = re.exec(src))) {
    depth += t[1] ? -1 : 1;
    if (depth === 0) return { src: src.slice(0, start) + inner + src.slice(t.index), ok: true };
  }
  return { src, ok: false };
}

const MAC_CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browser = await puppeteer.launch({
  headless: true,
  ...(fs.existsSync(MAC_CHROME) ? { executablePath: MAC_CHROME } : {}),
});
const page = await browser.newPage();
let total = 0, problems = 0;

for (const site of SITES) {
  const files = fs.readdirSync(site.dir).filter(f => site.match.test(f)).sort();
  for (const file of files) {
    const full = path.join(site.dir, file);
    await page.goto(pathToFileURL(full).href, { waitUntil: 'load' });

    const data = await page.evaluate(() => {
      const $ = (s, r = document) => r.querySelector(s);
      const txt = el => (el ? el.textContent.replace(/\s+/g, ' ').trim() : '');
      const out = { calc: {}, stats: {}, trends: {}, meta: {} };

      // 1. Centris
      const sec = $('[data-city]');
      if (sec) {
        sec.querySelectorAll('[data-stat]').forEach(el => {
          const k = el.getAttribute('data-stat');
          out.stats[k] = el.textContent;
          const tr = el.closest('.stat-trend');
          if (tr) out.trends[k] = {
            cls: [...tr.classList].find(c => c.startsWith('trend-')) || 'trend-stable',
            arrow: txt(tr.querySelector('.stat-arrow')),
          };
        });
        const up = sec.querySelector('[data-meta="updatedFr"]');
        out.meta.updatedFr = up ? up.textContent : '';
        out.meta.quarter = txt(sec.querySelector('[data-meta="quarterLabel"]'));
      }

      // 2. Calculateurs (valeurs par défaut)
      const ids = ['welcome-total','welcome-breakdown','welcome-source','tax-total','tax-month','tax-rate','tax-fixed','tax-pool-fee','tax-breakdown','tax-source','mortgage-monthly','mortgage-payment','mortgage-taxes','mortgage-insurance','mortgage-loan','mortgage-breakdown','mortgage-source'];
      ids.forEach(id => { const el = document.getElementById(id); if (el) out.calc[id] = el.innerHTML; });

      // 3. Données pour la FAQ : simulation à 500 000 $
      const set = (id, v) => { const el = document.getElementById(id); if (el) { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })); } };
      const wp = document.getElementById('welcome-price')?.value;
      const tv = document.getElementById('tax-value')?.value;
      set('welcome-price', 500000);
      set('tax-value', 500000);
      out.faq = {
        welcome: txt(document.getElementById('welcome-total')),
        taxTotal: txt(document.getElementById('tax-total')),
        taxRate: txt(document.getElementById('tax-rate')),
        taxFixed: txt(document.getElementById('tax-fixed')),
      };
      set('welcome-price', wp); set('tax-value', tv);

      // Transport : intro de la section et ligne « Centre-ville de Montréal »
      const rows = [...document.querySelectorAll('table tr')];
      const mtl = rows.find(r => /Centre-ville de Montréal/.test(txt(r.cells?.[0])));
      if (mtl) {
        const table = mtl.closest('section');
        out.faq.transportIntro = txt(table?.querySelector('.section-intro'));
        out.faq.mtl = [...mtl.cells].map(txt);
        out.faq.mtlHead = [...mtl.closest('table').querySelectorAll('thead th')].map(txt);
      }
      // Atouts : trois premières cartes de la section Qualité de vie
      out.faq.atouts = [...document.querySelectorAll('.ql-card p')].slice(0, 3).map(txt);
      out.city = txt(document.querySelector('.hero h1 em')) || '';
      return out;
    });

    let src = fs.readFileSync(full, 'utf8');
    const before = src;

    // 1. Centris
    for (const [k, v] of Object.entries(data.stats)) {
      src = src.replace(new RegExp(`(data-stat="${k.replace('.', '\\.')}"[^>]*>)[^<]*(<)`), `$1${v}$2`);
      const tr = data.trends[k];
      if (tr) {
        src = src.replace(
          new RegExp(`<span class="stat-trend [\\w-]+">(\\s*)<span class="stat-arrow">[^<]*</span>(\\s*)<span data-stat="${k.replace('.', '\\.')}">`),
          `<span class="stat-trend ${tr.cls}">$1<span class="stat-arrow">${tr.arrow}</span>$2<span data-stat="${k}">`);
      }
    }
    if (data.meta.updatedFr) src = src.replace(/(data-meta="updatedFr">)[^<]*(<)/, `$1${data.meta.updatedFr}$2`);

    // 2. Calculateurs
    for (const id of CALC_IDS) {
      if (data.calc[id] === undefined) continue;
      const r = replaceById(src, id, data.calc[id]);
      if (!r.ok) { console.warn(`  ! ${file} : #${id} introuvable`); problems++; }
      src = r.src;
    }

    // 3. FAQ JSON-LD
    src = src.replace(/<script type="application\/ld\+json">(\{"@context":"https:\/\/schema\.org","@type":"FAQPage".*?)<\/script>/s, (all, json) => {
      const faq = JSON.parse(json);
      const city = (faq.mainEntity.find(q => /^Pourquoi habiter à /.test(q.name))?.name.replace(/^Pourquoi habiter à | \?$/g, '')) || data.city;
      const f = data.faq;
      const st = data.stats;
      const nb = s => (s || '').replace(/ | /g, ' ');
      const de = c => (/^[AEIOUÉÈÊHaeiouéèêh]/.test(c) ? `d'${c}` : `de ${c}`);
      const vs = (v, ctx) => (v && v !== '—' ? ` (${nb(v)} ${ctx})` : '');
      const answers = [];
      for (const q of faq.mainEntity) {
        const n = q.name;
        let a = q.acceptedAnswer.text;
        if (/taxe de bienvenue/.test(n) && f.welcome) {
          a = `Pour une propriété de 500 000 $ à ${city}, le droit de mutation immobilière (taxe de bienvenue) s'élève à environ ${nb(f.welcome)} selon les seuils 2026. Le calcul réel est basé sur la plus élevée entre le prix payé, le prix indiqué à l'acte et la valeur marchande uniformisée au rôle d'évaluation.`;
        } else if (/taux de taxes municipales/.test(n) && f.taxTotal) {
          a = `Le taux résidentiel à ${city} est de ${nb(f.taxRate)} d'évaluation pour une unifamiliale, plus environ ${nb(f.taxFixed)} de tarifications fixes annuelles. Pour une maison évaluée à 500 000 $, la facture annuelle se situe autour de ${nb(f.taxTotal)}.`;
        } else if (/meilleur courtier/.test(n)) {
          q.name = `Comment choisir un courtier immobilier à ${city} ?`;
          a = `Vérifiez d'abord que le courtier détient un permis de l'OACIQ, consultable dans le registre public sur oaciq.com. Demandez-lui ensuite des ventes récentes comparables à ${city} et sa lecture des statistiques Centris du secteur. Les courtiers de ${site.brand} travaillent à ${city} et dans ${site.region}.`;
        } else if (/Comment se rendre/.test(n) && f.mtl) {
          const [, car, transit, dist, access] = f.mtl;
          let s = f.transportIntro ? f.transportIntro + ' ' : '';
          s += `Vers le centre-ville de Montréal, comptez ${car} en voiture (${dist}, ${access})`;
          if (transit && transit !== '—') s += `; en transport collectif : ${transit}`;
          a = s + '.';
        } else if (/ventes résidentielles/.test(n) && st['ventes.q'] && st['ventes.q'] !== '—') {
          a = `Selon Centris, ${city} a enregistré ${nb(st['ventes.q'])} ventes résidentielles au ${data.meta.quarter}${vs(st['ventes.qVar'], "par rapport au même trimestre l'an dernier")} et ${nb(st['ventes.cumul'])} ventes sur les quatre derniers trimestres${vs(st['ventes.cumulVar'], 'sur un an')}. On y comptait ${nb(st['inscriptions.q'])} nouvelles inscriptions durant le trimestre. Données mises à jour le ${data.meta.updatedFr}.`;
        } else if (/services et commodités/.test(n) && f.atouts?.length) {
          a = `Les principaux atouts ${de(city)} pour les familles et les acheteurs : ${f.atouts.join(' ')}`;
        }
        q.name = q.name.replace(/ de ([AEIOUÉH][\w-]*) à Montréal/, " d'$1 à Montréal");
        q.acceptedAnswer.text = a.replace(/&#39;/g, "'").replace(/\s—\s/g, ', ');
        answers.push(q);
      }
      faq.mainEntity = answers;
      return `<script type="application/ld+json">${JSON.stringify(faq)}</script>`;
    });

    if (src !== before) { fs.writeFileSync(full, src, 'utf8'); total++; }
    const empty = Object.values(data.stats).filter(v => v === '—').length;
    console.log(`${file.padEnd(42)} stats:${Object.keys(data.stats).length}${empty ? ` (${empty} « — » chez Centris)` : ''}  500k bienvenue:${data.faq.welcome}  taxes:${data.faq.taxTotal}`);
  }
}

await browser.close();
console.log(`\n${total} pages mises à jour${problems ? `, ${problems} problème(s)` : ''}.`);
