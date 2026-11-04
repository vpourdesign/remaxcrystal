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
    { nom: 'Charlemagne',             guide: 'guide-dici-charlemagne.html' },
    { nom: 'Joliette',                guide: 'guide-dici-joliette.html' },
    { nom: "L'Assomption",            guide: 'guide-dici-lassomption.html' },
    { nom: "L'Épiphanie",             guide: 'guide-dici-lepiphanie.html' },
    { nom: 'Lavaltrie',               guide: 'guide-dici-lavaltrie.html' },
    { nom: 'Mascouche',               guide: 'guide-dici-mascouche.html' },
    { nom: 'Repentigny',              guide: 'guide-dici-repentigny.html' },
    { nom: 'Saint-Jacques',           guide: 'guide-dici-saint-jacques.html' },
    { nom: 'Saint-Lin–Laurentides',   guide: 'guide-dici-saint-lin-laurentides.html' },
    { nom: "Saint-Roch-de-l'Achigan", guide: 'guide-dici-saint-roch-de-lachigan.html' },
    { nom: 'Saint-Sulpice',           guide: 'guide-dici-saint-sulpice.html' },
    { nom: 'Terrebonne',              guide: 'guide-dici-terrebonne.html' }
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
