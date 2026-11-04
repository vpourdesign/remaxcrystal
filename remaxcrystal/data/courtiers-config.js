/* ============================================================
   COURTIERS CONFIG — Configuration partagée
   Utilisé par :
   - courtier-formulaire.html  (formulaire d'intake courtier)
   - build-courtiers.mjs       (hub /courtiers/, sitemap, maillage)
   ============================================================ */
window.COURTIERS_CONFIG = {

  /* --- Agence (marque du formulaire, du hub /courtiers/ et des pages) --- */
  AGENCE: {
    id: 'crystal',
    nom: 'RE/MAX Crystal',
    region: 'Basses-Laurentides',
    regionDe: 'des Basses-Laurentides',
    logo: 'brand_assets/Crystal-long-blanc-crystal.png',
    exemplesVilles: 'Blainville, Sainte-Thérèse, Deux-Montagnes, Saint-Eustache'
  },

  /* --- Livraison du formulaire ---
     API_URL : fonction Vercel (api/fiche.mjs) qui dépose la fiche et
     ses photos dans GitHub sous forme de pull request. Si l'envoi
     échoue, le formulaire télécharge le JSON et propose le courriel. */
  API_URL: '/api/fiche',
  FALLBACK_EMAIL: 'info@vpourdesign.com',

  /* --- URLs absolues (canonical, og:url, JSON-LD, sitemap) --- */
  SITE_BASE: 'https://agence.remaxcrystal.com',

  /* --- Villes desservies par RE/MAX Crystal (guides existants)
         photo / photoPortrait / photoAlt : photo principale du hero du guide,
         réutilisée sur les pages de courtiers --- */
  VILLES: [
    { nom: 'Blainville',               guide: 'guide-blainville.html', photo: 'images-opt/hero.webp', photoPortrait: 'images-opt/hero-portrait.webp', photoAlt: 'Vue aérienne de Blainville' },
    { nom: 'Boisbriand',               guide: 'guide-boisbriand.html', photo: 'images-opt/villes/boisbriand/Boisbriand_QC_2.webp', photoPortrait: 'images-opt/villes/boisbriand/Boisbriand_QC_2-portrait.webp', photoAlt: 'Vue aérienne de Boisbriand' },
    { nom: 'Bois-des-Filion',          guide: 'guide-boisdesfillions.html', photo: 'images-opt/villes/boisdesfillions/Image_DecouvrezBDF_1600x1000.webp', photoPortrait: 'images-opt/villes/boisdesfillions/Image_DecouvrezBDF_1600x1000-portrait.webp', photoAlt: 'Vue aérienne de Bois-des-Filion' },
    { nom: 'Deux-Montagnes',           guide: 'guide-deuxmontagnes.html', photo: 'images-opt/villes/deuxmontagnes/ville-deux-montagnes.webp', photoPortrait: 'images-opt/villes/deuxmontagnes/ville-deux-montagnes-portrait.webp', photoAlt: 'Vue aérienne de Deux-Montagnes' },
    { nom: 'Lorraine',                 guide: 'guide-lorraine.html', photo: 'images-opt/villes/lorraine/lorraine1.webp', photoPortrait: 'images-opt/villes/lorraine/lorraine1-portrait.webp', photoAlt: 'Vue aérienne de Lorraine' },
    { nom: 'Mirabel',                  guide: 'guide-mirabel.html', photo: 'images-opt/villes/mirabel/Couverture_1620x675.webp', photoPortrait: 'images-opt/villes/mirabel/Couverture_1620x675-portrait.webp', photoAlt: 'Vue aérienne de Mirabel' },
    { nom: 'Oka',                      guide: 'guide-oka.html', photo: 'images-opt/villes/oka/2021-Loik-Monette-Oka-le-plus-beau-scaled.webp', photoPortrait: 'images-opt/villes/oka/2021-Loik-Monette-Oka-le-plus-beau-scaled-portrait.webp', photoAlt: 'Vue d&#39;Oka et du lac des Deux Montagnes' },
    { nom: 'Pointe-Calumet',           guide: 'guide-pointecalumet.html', photo: 'images-opt/villes/pointecalumet/Digue_-_Sainte-Marthe-sur-le-Lac_-_Vue_aérienne_(1).webp', photoPortrait: 'images-opt/villes/pointecalumet/Digue_-_Sainte-Marthe-sur-le-Lac_-_Vue_aérienne_(1)-portrait.webp', photoAlt: 'Vue aérienne de Pointe-Calumet' },
    { nom: 'Rosemère',                 guide: 'guide-rosemere.html', photo: 'images-opt/villes/rosemere/rosemere1.webp', photoPortrait: 'images-opt/villes/rosemere/rosemere1-portrait.webp', photoAlt: 'Vue de Rosemère' },
    { nom: 'Saint-Eustache',           guide: 'guide-steustache.html', photo: 'images-opt/villes/steustache/Saint-Eustache_-_Vue_aérienne_(2).webp', photoPortrait: 'images-opt/villes/steustache/Saint-Eustache_-_Vue_aérienne_(2)-portrait.webp', photoAlt: 'Vue aérienne de Saint-Eustache' },
    { nom: 'Saint-Janvier (Mirabel)',  guide: 'guide-st-janvier.html', photo: 'images-opt/villes/st-janvier/mirabel1.webp', photoPortrait: 'images-opt/villes/st-janvier/mirabel1-portrait.webp', photoAlt: 'Vue de Saint-Janvier' },
    { nom: 'Sainte-Anne-des-Plaines',  guide: 'guide-steannedesplaines.html', photo: 'images-opt/villes/steannedesplaines/territoire-eglise-champs-sadp.webp', photoPortrait: 'images-opt/villes/steannedesplaines/territoire-eglise-champs-sadp-portrait.webp', photoAlt: 'Vue aérienne de Sainte-Anne-des-Plaines' },
    { nom: 'Sainte-Marthe-sur-le-Lac', guide: 'guide-stemarthe.html', photo: 'images-opt/villes/stemarthe/Sainte-Marthe-sur-le-Lac_-_Vue_a_rienne__1_.webp', photoPortrait: 'images-opt/villes/stemarthe/Sainte-Marthe-sur-le-Lac_-_Vue_a_rienne__1_-portrait.webp', photoAlt: 'Vue aérienne de Sainte-Marthe-sur-le-Lac' },
    { nom: 'Sainte-Sophie',            guide: 'guide-stesophie.html', photo: 'images-opt/villes/stesophie/Sainte-Sophie.webp', photoPortrait: 'images-opt/villes/stesophie/Sainte-Sophie-portrait.webp', photoAlt: 'Vue de Sainte-Sophie' },
    { nom: 'Sainte-Thérèse',           guide: 'guide-stetherese.html', photo: 'images-opt/villes/stetherese/Village-VST-d34f2a1762ebdc1f8a3c032e4f48b60e.webp', photoPortrait: 'images-opt/villes/stetherese/Village-VST-d34f2a1762ebdc1f8a3c032e4f48b60e-portrait.webp', photoAlt: 'Vieux-Sainte-Thérèse' }
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
