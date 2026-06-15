/* ============================================================
   EVENTS RENDER — Injecte automatiquement les événements
   ------------------------------------------------------------
   Lit window.CITY_EVENTS (défini dans data/events.js) et
   remplit tout conteneur portant data-events-city="<slug>".

   Comportement :
   - Filtre les événements dont `expires` est passé (jamais
     d'événement périmé affiché, même si la donnée est vieille)
   - Trie par sortDate, affiche les 6 prochains
   - Si aucune donnée pour la ville → laisse le HTML statique
     existant intact (fallback gracieux)

   Le markup généré utilise les classes .event-row / .event-date /
   .event-title déjà stylées dans les guides de villes.
   ============================================================ */

(function () {
  var MAX_EVENTS = 6;

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function todayISO() {
    var d = new Date();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + m + '-' + day;
  }

  var ARROW_SVG =
    '<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" ' +
    'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

  function rowHTML(ev) {
    return (
      '<div class="event-row">' +
        '<div class="event-date">' +
          '<div class="event-date-day">' + esc(ev.day) + '</div>' +
          '<div class="event-date-month">' + esc(ev.month) + '</div>' +
        '</div>' +
        '<div class="event-info">' +
          '<div class="event-category">' + esc(ev.category) + '</div>' +
          '<h3 class="event-title">' + esc(ev.title) + '</h3>' +
          '<p class="event-desc">' + esc(ev.desc) + '</p>' +
        '</div>' +
        '<div class="event-arrow">' + ARROW_SVG + '</div>' +
      '</div>'
    );
  }

  function render() {
    var data = window.CITY_EVENTS;
    if (!data || !data.cities) return;

    var today = todayISO();

    document.querySelectorAll('[data-events-city]').forEach(function (list) {
      var slug = list.getAttribute('data-events-city');
      var events = data.cities[slug];
      if (!events || !events.length) return; // fallback: HTML statique conservé

      var upcoming = events
        .filter(function (ev) { return (ev.expires || ev.sortDate || '9999') >= today; })
        .sort(function (a, b) { return (a.sortDate || '').localeCompare(b.sortDate || ''); })
        .slice(0, MAX_EVENTS);

      if (!upcoming.length) return; // rien à venir → on garde le contenu existant

      list.innerHTML = upcoming.map(rowHTML).join('');

      if (window.ScrollTrigger) {
        setTimeout(function () { window.ScrollTrigger.refresh(); }, 60);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
