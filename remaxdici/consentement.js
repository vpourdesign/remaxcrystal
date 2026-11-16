/* ============================================================
   CONSENTEMENT AUX TÉMOINS — Loi 25 (Québec)

   - Aucun témoin non essentiel avant un choix explicite (opt-in).
   - « Tout refuser » aussi accessible que « Tout accepter ».
   - Choix par catégorie, modifiable en tout temps
     (tout élément [data-consent-open] rouvre le panneau).
   - Choix conservé 12 mois dans le témoin « rmx_consent ».

   Intégration (avant </body>) :
     <script src="consentement.js"
             data-agence="RE/MAX Crystal"
             data-politique="https://remaxcrystal.com/fr/politique-confidentialite.html"
             defer></script>

   Pour brancher un traceur plus tard, l'écrire inerte :
     <script type="text/plain" data-consent="mesure" src="..."></script>
     <script type="text/plain" data-consent="publicite">...</script>
   Le script ne s'exécute qu'après consentement à sa catégorie.
   API : window.rmxConsent.get() · .open() · .onChange(fn)
   Google Consent Mode v2 est mis à jour si gtag est présent.
   ============================================================ */
(function () {
  'use strict';
  if (window.rmxConsent) return;

  var me = document.currentScript;
  var AGENCE = (me && me.getAttribute('data-agence')) || 'RE/MAX';
  var POLITIQUE = (me && me.getAttribute('data-politique')) || '#';
  var COOKIE = 'rmx_consent';
  var VERSION = '1';
  var DUREE_JOURS = 365;
  var listeners = [];

  /* ---------- Lecture / écriture du choix ---------- */
  function read() {
    var m = document.cookie.match(new RegExp('(?:^|; )' + COOKIE + '=([^;]*)'));
    if (!m) return null;
    var p = decodeURIComponent(m[1]).split('|');
    if (p[0] !== VERSION) return null;
    return { mesure: p[1] === '1', publicite: p[2] === '1', date: p[3] || '' };
  }

  function write(choix) {
    var val = [VERSION, choix.mesure ? '1' : '0', choix.publicite ? '1' : '0', new Date().toISOString().slice(0, 10)].join('|');
    var exp = new Date(Date.now() + DUREE_JOURS * 864e5).toUTCString();
    var secure = location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = COOKIE + '=' + encodeURIComponent(val) + '; expires=' + exp + '; path=/; SameSite=Lax' + secure;
  }

  /* ---------- Application du choix ---------- */
  function apply(choix) {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: choix.mesure ? 'granted' : 'denied',
        ad_storage: choix.publicite ? 'granted' : 'denied',
        ad_user_data: choix.publicite ? 'granted' : 'denied',
        ad_personalization: choix.publicite ? 'granted' : 'denied'
      });
    }
    var inertes = document.querySelectorAll('script[type="text/plain"][data-consent]');
    Array.prototype.forEach.call(inertes, function (s) {
      var cat = s.getAttribute('data-consent');
      if (!choix[cat]) return;
      var n = document.createElement('script');
      Array.prototype.forEach.call(s.attributes, function (a) {
        if (a.name !== 'type' && a.name !== 'data-consent') n.setAttribute(a.name, a.value);
      });
      if (!s.src) n.text = s.text;
      s.parentNode.replaceChild(n, s);
    });
    listeners.forEach(function (fn) { try { fn(choix); } catch (e) {} });
  }

  function save(choix) {
    write(choix);
    apply(choix);
    closeAll();
  }

  /* ---------- Styles ---------- */
  var css = '' +
    '.rmxc{--c-ink:#1a2332;--c-body:#3d4555;--c-muted:#5d6577;--c-line:#dcd8cf;--c-bg:#faf9f6;--c-brand:#1e3350;--c-focus:#3578c4;' +
      'font-family:"Open Sans",system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--c-body);font-size:15px;line-height:1.55;-webkit-font-smoothing:antialiased;}' +
    '.rmxc *,.rmxc *::before,.rmxc *::after{box-sizing:border-box;}' +
    '.rmxc-bar{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;max-width:1080px;margin:0 auto;background:var(--c-bg);border:1px solid var(--c-line);border-radius:6px;' +
      'box-shadow:0 2px 6px rgba(26,35,50,.06),0 12px 32px rgba(26,35,50,.14);padding:20px 24px;display:grid;grid-template-columns:1fr auto;gap:20px 32px;align-items:center;}' +
    '.rmxc-bar[hidden],.rmxc-modal[hidden]{display:none;}' +
    '.rmxc-titre{font-family:"Raleway",system-ui,sans-serif;font-weight:700;font-size:16px;color:var(--c-ink);margin:0 0 4px;}' +
    '.rmxc-texte{margin:0;font-size:14px;max-width:68ch;}' +
    '.rmxc a{color:var(--c-brand);text-decoration:underline;text-underline-offset:2px;}' +
    '.rmxc-actions{display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:flex-end;}' +
    '.rmxc-btn{appearance:none;font:inherit;font-size:14px;font-weight:600;line-height:1;cursor:pointer;border-radius:4px;padding:13px 20px;min-width:140px;border:1.5px solid var(--c-brand);' +
      'transition:background-color .2s ease,color .2s ease,border-color .2s ease;}' +
    '.rmxc-btn--plein{background:var(--c-brand);color:#faf9f6;}' +
    '.rmxc-btn--plein:hover{background:var(--c-ink);border-color:var(--c-ink);}' +
    '.rmxc-btn--contour{background:transparent;color:var(--c-brand);}' +
    '.rmxc-btn--contour:hover{background:#efece5;}' +
    '.rmxc-btn--lien{background:none;border-color:transparent;color:var(--c-brand);min-width:0;padding:13px 8px;text-decoration:underline;text-underline-offset:3px;}' +
    '.rmxc-btn--lien:hover{color:var(--c-ink);}' +
    '.rmxc-btn:active{transform:translateY(1px);}' +
    '.rmxc button:focus-visible,.rmxc a:focus-visible,.rmxc input:focus-visible+.rmxc-switch{outline:2px solid var(--c-focus);outline-offset:2px;}' +
    '.rmxc-modal{position:fixed;inset:0;z-index:2147483001;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(26,35,50,.55);}' +
    '.rmxc-panneau{background:var(--c-bg);border-radius:6px;width:100%;max-width:560px;max-height:calc(100vh - 32px);overflow:auto;padding:28px;box-shadow:0 24px 64px rgba(26,35,50,.3);}' +
    '.rmxc-panneau h2{font-family:"Raleway",system-ui,sans-serif;font-weight:700;font-size:20px;color:var(--c-ink);margin:0 0 8px;}' +
    '.rmxc-panneau>p{margin:0 0 20px;font-size:14px;}' +
    '.rmxc-cat{border-top:1px solid var(--c-line);padding:16px 0;display:grid;grid-template-columns:1fr auto;gap:4px 20px;align-items:start;}' +
    '.rmxc-cat:last-of-type{border-bottom:1px solid var(--c-line);}' +
    '.rmxc-cat h3{font-size:15px;font-weight:700;color:var(--c-ink);margin:0;}' +
    '.rmxc-cat p{grid-column:1;margin:0;font-size:13.5px;color:var(--c-muted);}' +
    '.rmxc-toujours{font-size:13px;font-weight:600;color:var(--c-muted);white-space:nowrap;}' +
    '.rmxc-bascule{position:relative;display:inline-flex;grid-row:1/span 2;grid-column:2;cursor:pointer;}' +
    '.rmxc-bascule input{position:absolute;opacity:0;width:1px;height:1px;}' +
    '.rmxc-switch{width:44px;height:24px;border-radius:12px;background:#c9c4b8;position:relative;transition:background-color .2s ease;}' +
    '.rmxc-switch::after{content:"";position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#faf9f6;transition:transform .2s ease;}' +
    '.rmxc-bascule input:checked+.rmxc-switch{background:var(--c-brand);}' +
    '.rmxc-bascule input:checked+.rmxc-switch::after{transform:translateX(20px);}' +
    '.rmxc-panneau .rmxc-actions{margin-top:20px;justify-content:flex-start;}' +
    '@media (max-width:760px){.rmxc-bar{grid-template-columns:1fr;left:8px;right:8px;bottom:8px;padding:18px;}' +
      '.rmxc-actions{justify-content:stretch;}.rmxc-actions .rmxc-btn--plein,.rmxc-actions .rmxc-btn--contour{flex:1 1 40%;min-width:0;}' +
      '.rmxc-actions .rmxc-btn--lien{flex:1 1 100%;order:3;}.rmxc-panneau{padding:22px;}}' +
    '@media (prefers-reduced-motion:reduce){.rmxc *{transition:none!important;}}';

  /* ---------- Gabarit ---------- */
  function html() {
    return '' +
      '<div class="rmxc-bar" role="region" aria-labelledby="rmxc-titre" hidden>' +
        '<div>' +
          '<p class="rmxc-titre" id="rmxc-titre">Votre vie privée</p>' +
          '<p class="rmxc-texte">' + AGENCE + ' utilise des témoins (cookies) essentiels au fonctionnement du site. ' +
          'Avec votre accord, nous utiliserons aussi des témoins de mesure d\'audience et de publicité. ' +
          'Vous pouvez changer d\'avis en tout temps. <a href="' + POLITIQUE + '" target="_blank" rel="noopener">Politique de confidentialité</a></p>' +
        '</div>' +
        '<div class="rmxc-actions">' +
          '<button type="button" class="rmxc-btn rmxc-btn--lien" data-rmxc="perso">Personnaliser</button>' +
          '<button type="button" class="rmxc-btn rmxc-btn--contour" data-rmxc="refuser">Tout refuser</button>' +
          '<button type="button" class="rmxc-btn rmxc-btn--plein" data-rmxc="accepter">Tout accepter</button>' +
        '</div>' +
      '</div>' +
      '<div class="rmxc-modal" hidden data-lenis-prevent>' +
        '<div class="rmxc-panneau" role="dialog" aria-modal="true" aria-labelledby="rmxc-h2" tabindex="-1">' +
          '<h2 id="rmxc-h2">Gérer les témoins</h2>' +
          '<p>Choisissez les témoins que vous acceptez. Les témoins non essentiels restent désactivés tant que vous ne les activez pas. ' +
          '<a href="' + POLITIQUE + '" target="_blank" rel="noopener">Politique de confidentialité</a></p>' +
          '<div class="rmxc-cat">' +
            '<h3>Essentiels</h3><span class="rmxc-toujours">Toujours actifs</span>' +
            '<p>Nécessaires au fonctionnement du site et à la mémorisation de votre choix. Ils ne servent pas à vous identifier.</p>' +
          '</div>' +
          '<div class="rmxc-cat">' +
            '<h3 id="rmxc-l-mesure">Mesure d\'audience</h3>' +
            '<label class="rmxc-bascule"><input type="checkbox" data-cat="mesure" aria-labelledby="rmxc-l-mesure"><span class="rmxc-switch"></span></label>' +
            '<p>Statistiques de visite (pages vues, provenance) pour améliorer le site.</p>' +
          '</div>' +
          '<div class="rmxc-cat">' +
            '<h3 id="rmxc-l-pub">Publicité et réseaux sociaux</h3>' +
            '<label class="rmxc-bascule"><input type="checkbox" data-cat="publicite" aria-labelledby="rmxc-l-pub"><span class="rmxc-switch"></span></label>' +
            '<p>Mesure de nos campagnes et publicités adaptées sur Google, Facebook et Instagram.</p>' +
          '</div>' +
          '<div class="rmxc-actions">' +
            '<button type="button" class="rmxc-btn rmxc-btn--plein" data-rmxc="enregistrer">Enregistrer mes choix</button>' +
            '<button type="button" class="rmxc-btn rmxc-btn--contour" data-rmxc="refuser">Tout refuser</button>' +
            '<button type="button" class="rmxc-btn rmxc-btn--contour" data-rmxc="accepter">Tout accepter</button>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  var root, bar, modal, panneau, lastFocus;

  function build() {
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
    root = document.createElement('div');
    root.className = 'rmxc';
    root.innerHTML = html();
    document.body.appendChild(root);
    bar = root.querySelector('.rmxc-bar');
    modal = root.querySelector('.rmxc-modal');
    panneau = root.querySelector('.rmxc-panneau');

    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-rmxc]');
      if (!b) return;
      var a = b.getAttribute('data-rmxc');
      if (a === 'accepter') save({ mesure: true, publicite: true });
      else if (a === 'refuser') save({ mesure: false, publicite: false });
      else if (a === 'perso') openModal();
      else if (a === 'enregistrer') save({
        mesure: root.querySelector('[data-cat="mesure"]').checked,
        publicite: root.querySelector('[data-cat="publicite"]').checked
      });
    });
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function (e) {
      if (modal.hidden) return;
      if (e.key === 'Escape') { closeModal(); return; }
      if (e.key === 'Tab') {
        var f = panneau.querySelectorAll('a,button,input');
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  function openModal() {
    var c = read() || { mesure: false, publicite: false };
    root.querySelector('[data-cat="mesure"]').checked = c.mesure;
    root.querySelector('[data-cat="publicite"]').checked = c.publicite;
    lastFocus = document.activeElement;
    modal.hidden = false;
    panneau.focus();
  }

  function closeModal() {
    modal.hidden = true;
    if (!read()) { bar.hidden = false; bar.querySelector('[data-rmxc="perso"]').focus(); }
    else if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function closeAll() {
    modal.hidden = true;
    bar.hidden = true;
    if (lastFocus && lastFocus.focus && document.contains(lastFocus)) lastFocus.focus();
  }

  function init() {
    build();
    var c = read();
    if (c) apply(c); else bar.hidden = false;
    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-consent-open]');
      if (!t) return;
      e.preventDefault();
      openModal();
    });
  }

  window.rmxConsent = {
    get: read,
    open: function () { if (modal) openModal(); },
    onChange: function (fn) { if (typeof fn === 'function') listeners.push(fn); }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
