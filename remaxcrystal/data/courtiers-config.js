/* ============================================================
   COURTIERS CONFIG — Configuration partagée
   Utilisé par :
   - courtier-formulaire.html  (formulaire d'intake courtier)
   - build-courtiers.mjs       (hub /courtiers/, sitemap, maillage)
   ============================================================ */
window.COURTIERS_CONFIG = {

  /* --- Livraison du formulaire ---
     WEBHOOK_URL : endpoint n8n (POST JSON). Laisser vide tant que
     le workflow n8n n'est pas branché : le formulaire bascule alors
     automatiquement sur le fallback (téléchargement JSON + courriel). */
  WEBHOOK_URL: '',
  FALLBACK_EMAIL: 'info@vpourdesign.com',

  /* --- URLs absolues (canonical, og:url, JSON-LD, sitemap) --- */
  SITE_BASE: 'https://agence.remaxcrystal.com',

  /* --- Villes desservies par RE/MAX Crystal (guides existants) --- */
  VILLES: [
    { nom: 'Blainville',               guide: 'guide-blainville.html' },
    { nom: 'Boisbriand',               guide: 'guide-boisbriand.html' },
    { nom: 'Bois-des-Filion',          guide: 'guide-boisdesfillions.html' },
    { nom: 'Deux-Montagnes',           guide: 'guide-deuxmontagnes.html' },
    { nom: 'Lorraine',                 guide: 'guide-lorraine.html' },
    { nom: 'Mirabel',                  guide: 'guide-mirabel.html' },
    { nom: 'Oka',                      guide: 'guide-oka.html' },
    { nom: 'Pointe-Calumet',           guide: 'guide-pointecalumet.html' },
    { nom: 'Rosemère',                 guide: 'guide-rosemere.html' },
    { nom: 'Saint-Eustache',           guide: 'guide-steustache.html' },
    { nom: 'Saint-Janvier (Mirabel)',  guide: 'guide-st-janvier.html' },
    { nom: 'Sainte-Anne-des-Plaines',  guide: 'guide-steannedesplaines.html' },
    { nom: 'Sainte-Marthe-sur-le-Lac', guide: 'guide-stemarthe.html' },
    { nom: 'Sainte-Sophie',            guide: 'guide-stesophie.html' },
    { nom: 'Sainte-Thérèse',           guide: 'guide-stetherese.html' }
  ],

  /* --- Bureaux RE/MAX Crystal (NAP officiel — ne pas modifier
         sans confirmer avec l'agence) --- */
  BUREAUX: [
    {
      id: 'sainte-therese',
      ville: 'Sainte-Thérèse',
      adresse: '228 boul. du Curé-Labelle',
      codePostal: 'J7E 2X7',
      tel: '450 430-4207'
    },
    {
      id: 'saint-eustache',
      ville: 'Saint-Eustache',
      adresse: '479 boul. Arthur-Sauvé',
      codePostal: 'J7P 2B3',
      tel: '450 472-7220'
    },
    {
      id: 'sainte-anne-des-plaines',
      ville: 'Sainte-Anne-des-Plaines',
      adresse: '140 boul. Sainte-Anne',
      codePostal: 'J5N 3P1',
      tel: '450 941-1234'
    }
  ]
};
