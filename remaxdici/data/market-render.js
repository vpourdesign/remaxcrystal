/* ============================================================
   MARKET RENDER — Injecte automatiquement les stats dans le DOM
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

  function formatVal(field, n) {
    if (n === null || n === undefined) return '—';
    return nf.format(n);
  }

  function formatVar(v) {
    if (v === null || v === undefined) return '—';
    if (v === 0) return '0 %';
    const sign = v > 0 ? '+' : '−';
    return `${sign}${Math.abs(v)} %`;
  }

  function trendClass(v) {
    if (v === null || v === undefined || v === 0) return 'trend-stable';
    return v > 0 ? 'trend-up' : 'trend-down';
  }

  function trendArrow(v) {
    if (v === null || v === undefined || v === 0) return '—';
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

      // Injecte les valeurs et variations
      section.querySelectorAll('[data-stat]').forEach(el => {
        const [field, prop] = el.getAttribute('data-stat').split('.');
        const entry = res[field];
        if (!entry) return;
        const value = entry[prop];

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
        }
      });

      // Métadonnées (label trimestre, source, date)
      section.querySelectorAll('[data-meta]').forEach(el => {
        const key = el.getAttribute('data-meta');
        if (key === 'centrisUrl') {
          if (el.tagName === 'A') el.href = city.centrisUrl;
        } else if (data.meta[key] !== undefined) {
          el.textContent = data.meta[key];
        } else if (key === 'updatedFr') {
          const d = new Date(data.meta.updated);
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
