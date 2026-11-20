/* ============================================================
   MARKET RENDER, Injecte automatiquement les stats dans le DOM
   ------------------------------------------------------------
   Lit window.MARKET_STATS (défini dans data/market-stats.js)
   et remplit la section ayant l'attribut data-city="<slug>".

   Conventions data-stat :
     data-stat="ventes.q"           → valeur du trimestre
     data-stat="ventes.qVar"        → variation %
     data-stat="ventes.cumul"       → cumul 4T
     data-stat="ventes.cumulVar"    → variation % du cumul
   Champs : ventes, inscriptions, envigueur, volume
   ============================================================ */

(function () {
  const nf = new Intl.NumberFormat('fr-CA');

  // Donnée absente : Centris affiche « ** » quand le volume de transactions
  // est insuffisant. On écrit « n. d. » (jamais un tiret seul) et on retire
  // l'unité (k$) qui suit la valeur.
  const ND = 'n. d.';
  const ND_TITLE = 'Donnée non publiée par Centris : trop peu de transactions pour la période';
  const isNull = (v) => v === null || v === undefined;

  function formatVal(field, n) {
    if (isNull(n)) return ND;
    return nf.format(n);
  }

  function formatVar(v) {
    if (isNull(v)) return ND;
    if (v === 0) return '0 %';
    const sign = v > 0 ? '+' : '−';
    return `${sign}${Math.abs(v)} %`;
  }

  function trendClass(v) {
    if (v === null || v === undefined || v === 0) return 'trend-stable';
    return v > 0 ? 'trend-up' : 'trend-down';
  }

  function trendArrow(v) {
    if (isNull(v)) return '';
    if (v === 0) return '—';
    return v > 0 ? '↑' : '↓';
  }

  function render() {
    const data = window.MARKET_STATS;
    if (!data) return;

    document.querySelectorAll('[data-city]').forEach(section => {
      const slug = section.getAttribute('data-city');
      const city = data.cities[slug];
      if (!city) {
        console.warn(`[market-render] Ville inconnue : ${slug}`);
        return;
      }
      const res = city.residential;
      let hasNull = false;

      // Injecte les valeurs et variations
      section.querySelectorAll('[data-stat]').forEach(el => {
        const [field, prop] = el.getAttribute('data-stat').split('.');
        const entry = res[field];
        if (!entry) return;
        const value = entry[prop];
        const manquant = isNull(value);
        if (manquant) { hasNull = true; el.title = ND_TITLE; el.classList.add('stat-nd'); }
        else { el.removeAttribute('title'); el.classList.remove('stat-nd'); }

        if (prop === 'qVar' || prop === 'cumulVar') {
          el.textContent = formatVar(value);
          // Applique la classe de tendance au conteneur parent .stat-trend
          const trend = el.closest('.stat-trend');
          if (trend) {
            trend.classList.remove('trend-up', 'trend-down', 'trend-stable');
            trend.classList.add(trendClass(value));
            const arrow = trend.querySelector('.stat-arrow');
            if (arrow) arrow.textContent = trendArrow(value);
          }
        } else {
          el.textContent = formatVal(field, value);
          // L'unité (k$) n'a pas de sens sans valeur
          const suffix = el.nextElementSibling;
          if (suffix && suffix.classList.contains('stats-value-suffix')) suffix.hidden = manquant;
        }
      });

      // Note explicative sous le tableau quand une donnée manque
      const wrap = section.querySelector('.stats-table-wrap');
      let note = section.querySelector('.stats-note-nd');
      if (hasNull && wrap && !note) {
        note = document.createElement('p');
        note.className = 'stats-note-nd';
        // style : .stats-note-nd dans design-system/guide.css
        note.textContent = 'n. d. : donnée non publiée par Centris, le nombre de transactions étant trop faible pour la période.';
        wrap.insertAdjacentElement('afterend', note);
      } else if (!hasNull && note) {
        note.remove();
      }

      // Métadonnées (label trimestre, source, date)
      section.querySelectorAll('[data-meta]').forEach(el => {
        const key = el.getAttribute('data-meta');
        if (key === 'centrisUrl') {
          if (el.tagName === 'A') el.href = city.centrisUrl;
        } else if (data.meta[key] !== undefined) {
          el.textContent = data.meta[key];
        } else if (key === 'updatedFr') {
          const d = new Date(data.meta.updated + 'T12:00:00'); // midi local : évite le décalage d'un jour (UTC)
          el.textContent = d.toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' });
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
