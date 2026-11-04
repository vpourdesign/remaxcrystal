/* ============================================================
   COURTIERS CONFIG — RE/MAX D'ici (Lanaudière)
   Utilisé par :
   - courtier-formulaire.html  (copié depuis ../remaxcrystal par
                                 sync-formulaire-dici.mjs, ne pas l'éditer ici)
   - build-courtiers.mjs --site ../remaxdici
   ============================================================ */
window.COURTIERS_CONFIG = {

  AGENCE: {
    id: 'dici',
    nom: "RE/MAX D'ici",
    region: 'Lanaudière',
    regionDe: 'de Lanaudière',
    logo: 'brand_assets/diciblanc.png',
    exemplesVilles: 'Terrebonne, Mascouche, Repentigny, Joliette'
  },

  API_URL: '/api/fiche',
  FALLBACK_EMAIL: 'info@vpourdesign.com',

  SITE_BASE: 'https://agence.remaxdici.com',

  VILLES: [
    { nom: 'Charlemagne',             guide: 'guide-dici-charlemagne.html', photo: 'images-opt/villes/charlemagne/charlemagne-2.jpg', photoAlt: 'Hôtel de ville de Charlemagne' },
    { nom: 'Joliette',                guide: 'guide-dici-joliette.html', photo: 'images-opt/villes/joliette/joliette-2.jpg', photoAlt: 'Vue aérienne du centre-ville de Joliette et de la cathédrale' },
    { nom: "L'Assomption",            guide: 'guide-dici-lassomption.html', photo: 'images-opt/villes/lassomption/lassomption-1.jpg', photoAlt: 'Vue aérienne du centre-ville historique de L&#39;Assomption' },
    { nom: "L'Épiphanie",             guide: 'guide-dici-lepiphanie.html', photo: 'images-opt/villes/lepiphanie/lepiphanie-4.jpg', photoAlt: 'Rivière L&#39;Achigan à L&#39;Épiphanie' },
    { nom: 'Lavaltrie',               guide: 'guide-dici-lavaltrie.html', photo: 'images-opt/villes/lavaltrie/lavaltrie-1.jpg', photoAlt: 'Glissades hivernales devant l&#39;église de Lavaltrie' },
    { nom: 'Mascouche',               guide: 'guide-dici-mascouche.html', photo: 'images/villes/mascouche/mascouche-4.jpg', photoAlt: 'Place publique et pavillon moderne à Mascouche' },
    { nom: 'Repentigny',              guide: 'guide-dici-repentigny.html', photo: 'images/villes/repentigny/repentigny-4.jpg', photoAlt: 'L&#39;Espace culturel de Repentigny au crépuscule' },
    { nom: 'Saint-Jacques',           guide: 'guide-dici-saint-jacques.html', photo: 'images-opt/villes/stjacques/stjacques-3.jpg', photoAlt: 'Allée arborée en automne à Saint-Jacques' },
    { nom: 'Saint-Lin–Laurentides',   guide: 'guide-dici-saint-lin-laurentides.html', photo: 'images/villes/saintlin/saintlin-1.jpg', photoAlt: 'Vue aérienne de l&#39;église de Saint-Lin–Laurentides' },
    { nom: "Saint-Roch-de-l'Achigan", guide: 'guide-dici-saint-roch-de-lachigan.html', photo: 'images-opt/villes/saintrochachigan/saintrochachigan-2.jpg', photoAlt: 'Couvent patrimonial de Saint-Roch-de-l&#39;Achigan' },
    { nom: 'Saint-Sulpice',           guide: 'guide-dici-saint-sulpice.html', photo: 'images-opt/villes/saintsulpice/saintsulpice-2.jpg', photoAlt: 'Belvédère sur le fleuve Saint-Laurent à Saint-Sulpice' },
    { nom: 'Terrebonne',              guide: 'guide-dici-terrebonne.html', photo: 'images/villes/terrebonne/terrebonne-6.jpg', photoAlt: 'Vue aérienne de Terrebonne et de la rivière des Mille Îles' }
  ],

  /* --- Bureaux RE/MAX D'ici (NAP repris de agence.remaxdici.com,
         à confirmer avec l'agence) --- */
  BUREAUX: [
    {
      id: 'repentigny',
      ville: 'Repentigny',
      adresse: '411, rue Notre-Dame, bureau 302',
      codePostal: 'J6A 2T2',
      tel: '450 585-9500'
    },
    {
      id: 'terrebonne',
      ville: 'Terrebonne',
      adresse: '550, chemin du Coteau, bureau 206',
      codePostal: 'J6W 5H2',
      tel: '450 471-5503'
    }
  ]
};
