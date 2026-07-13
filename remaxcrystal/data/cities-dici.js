/* ============================================================
   CITIES DICI — Contenu narratif des 12 guides de villes
   RE/MAX D'ici · Lanaudière
   Utilisé par build-cities-dici.mjs pour générer
   ../remaxdici/guide-<fileSlug>.html
   ------------------------------------------------------------
   Champs clés :
     fileSlug   : nom du fichier de sortie (guide-<fileSlug>.html)
     slug       : dossier d'images (images/villes/<slug>/...)
     centrisSlug: slug ville pour le lien Centris
     taxKey     : clé dans tax-data.js (TAX_DATA)
   Icônes qualité disponibles : park · commerce · sport · transit
   ============================================================ */
window.CITIES_DICI = {

  terrebonne: {
    fileSlug: 'dici-terrebonne',
    eventsUrl: 'https://terrebonne.ca/calendrier-des-evenements/',
    slug: 'terrebonne',
    name: 'Terrebonne',
    nameEm: 'Terrebonne',
    region: 'Lanaudière',
    brand: 'dici',
    brandName: "RE/MAX D'ici",
    brandTagline: "Vos courtiers de confiance dans Lanaudière.",
    centrisRegionSlug: 'lanaudiere',
    centrisSlug: 'terrebonne-terrebonne',
    heroImage: 'images/villes/terrebonne/terrebonne-6.jpg',
    heroAlt: 'Vue aérienne de Terrebonne et de la rivière des Mille Îles',
    introImage: 'images/villes/terrebonne/terrebonne-1.jpg',
    introImageAlt: 'Hôtel de ville patrimonial de Terrebonne',
    introCaptionTitle: 'Le Vieux-Terrebonne',
    introCaptionSub: 'Cœur historique sur la rivière des Mille Îles',
    stats: [
      { value: '119 000+', label: 'Résidents' },
      { value: '100+', label: 'Parcs & espaces verts' },
      { value: 'Gare exo', label: 'Train de banlieue' },
      { value: 'A-25 / A-40 / A-640', label: 'Accès direct' }
    ],
    tagline: "La grande ville de Lanaudière, entre patrimoine du Vieux-Terrebonne et quartiers neufs comme Urbanova.",
    intro: [
      `Terrebonne est la locomotive de Lanaudière : près de 120 000 résidents, un centre historique parmi les mieux conservés du Québec et des secteurs résidentiels neufs qui attirent chaque année des centaines de familles. La ville conjugue le charme du Vieux-Terrebonne et l'élan des nouveaux quartiers comme Urbanova.`,
      `L'Île-des-Moulins, site historique national au bord de la rivière des Mille Îles, donne à la ville une âme rare. À quelques minutes, les rues du Vieux-Terrebonne alignent restos, terrasses, théâtre et commerces de proximité dans un décor patrimonial vivant.`,
      `Côté pratique, Terrebonne coche toutes les cases : gare de train de banlieue exo, accès aux autoroutes 25, 40 et 640, écoles, hôpital et grands pôles commerciaux. C'est la ville la plus complète de la région pour qui veut tout avoir à portée de main.`
    ],
    qualityIntro: "De l'Île-des-Moulins aux sentiers d'Urbanova, Terrebonne offre aux familles un cadre de vie aussi riche en histoire qu'en services modernes.",
    qualityCards: [
      { icon: 'park', title: 'Île-des-Moulins & rivière', text: 'Site historique national, parcs riverains et sentiers le long de la rivière des Mille Îles, en plein cœur de la ville.', value: 'Site national' },
      { icon: 'commerce', title: 'Vieux-Terrebonne', text: 'Restaurants, terrasses, boutiques et théâtre dans un quartier patrimonial parmi les plus animés de la Rive-Nord.', value: 'Cœur vivant' },
      { icon: 'sport', title: 'Sport & loisirs', text: 'Complexe aquatique, arénas, Cité du sport et un vaste réseau de pistes cyclables, notamment dans Urbanova.', value: '100+ parcs' },
      { icon: 'transit', title: 'Transport & accès', text: 'Gare de train de banlieue exo vers Montréal et accès rapide aux autoroutes 25, 40 et 640.', value: 'Gare exo' }
    ],
    parksIntro: "Terrebonne protège un patrimoine vert exceptionnel : l'Île-des-Moulins, les berges de la rivière et les grands parcs de quartier des nouveaux secteurs.",
    parks: [
      { img: 'terrebonne-2.jpg', title: 'Parc de l\'Île-des-Moulins' },
      { img: 'terrebonne-3.jpg', title: 'Île-des-Moulins, Terrebonne' },
      { img: 'terrebonne-4.jpg', title: 'Parc des Pionniers' },
      { img: 'terrebonne-5.jpg', title: 'Parc des Vignobles' }
    ],
    transportIntro: "Idéalement reliée à Montréal et à Laval, Terrebonne combine train de banlieue, réseau d'autobus exo et trois autoroutes majeures.",
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '30 – 45 min', train: 'Train exo ~45 min', dist: '32 km', access: 'A-25 Sud' },
      { dest: 'Laval', car: '15 – 25 min', train: 'Bus exo', dist: '18 km', access: 'A-25 / A-440' },
      { dest: 'Aéroport YUL', car: '35 – 45 min', train: '—', dist: '45 km', access: 'A-25 / A-40' },
      { dest: 'Mascouche', car: '10 – 15 min', train: 'Train exo', dist: '10 km', access: 'A-25' },
      { dest: 'Repentigny', car: '15 – 20 min', train: '—', dist: '18 km', access: 'A-40' }
    ],
    taxKey: 'terrebonne',
    taxCompare: ['terrebonne', 'mascouche', 'repentigny', 'charlemagne'],
    ctaTagline: "Nos courtiers connaissent Terrebonne quartier par quartier, du Vieux-Terrebonne à Urbanova. Parlez à un expert local pour trouver votre prochaine maison.",
    seoKeywords: ['agence immobilière Terrebonne','courtier immobilier Terrebonne','maison à vendre Terrebonne','vivre à Terrebonne','guide Terrebonne 2026','Urbanova','Vieux-Terrebonne']
  },

  mascouche: {
    fileSlug: 'dici-mascouche',
    eventsUrl: 'https://mascouche.ca/evenements',
    slug: 'mascouche',
    name: 'Mascouche',
    nameEm: 'Mascouche',
    region: 'Lanaudière',
    brand: 'dici',
    brandName: "RE/MAX D'ici",
    brandTagline: "Vos courtiers de confiance dans Lanaudière.",
    centrisRegionSlug: 'lanaudiere',
    centrisSlug: 'mascouche',
    heroImage: 'images/villes/mascouche/mascouche-4.jpg',
    heroAlt: 'Place publique et pavillon moderne à Mascouche',
    introImage: 'images/villes/mascouche/mascouche-2.jpg',
    introImageAlt: 'Hôtel de ville de Mascouche',
    introCaptionTitle: 'Cœur de Mascouche',
    introCaptionSub: 'Une ville-nature en pleine croissance',
    stats: [
      { value: '52 000+', label: 'Résidents' },
      { value: 'Grand-Coteau', label: 'Parc-nature' },
      { value: 'Gare exo', label: 'Train de banlieue' },
      { value: 'A-25 / A-640', label: 'Accès direct' }
    ],
    tagline: "La ville-nature de Lanaudière, à 25 minutes de Montréal grâce au train de banlieue.",
    intro: [
      `Mascouche s'est imposée comme l'une des villes les plus attractives de la Rive-Nord : croissance soutenue, nouveaux quartiers résidentiels et un cadre de vie où la nature n'est jamais loin. Sa gare de train de banlieue exo la place à environ 25 minutes du centre-ville de Montréal.`,
      `Le Parc du Grand-Coteau, vaste poumon vert au cœur de la ville, résume bien l'esprit de Mascouche : ski de fond, glissades, sentiers et patinoire l'hiver, plein air et événements l'été. Le Domaine seigneurial de Mascouche rappelle quant à lui ses racines historiques.`,
      `Avec ses pôles commerciaux le long de la 25, ses écoles et son accès autoroutier direct, Mascouche séduit les familles qui cherchent l'espace et le calme sans renoncer à la proximité de la métropole.`
    ],
    qualityIntro: "Mascouche marie nature, services de proximité et accès rapide à Montréal — un équilibre recherché par les familles de la région.",
    qualityCards: [
      { icon: 'park', title: 'Parc du Grand-Coteau', text: 'Le grand parc-nature de la ville : ski de fond, glissades, patinoire, sentiers et activités familiales en toutes saisons.', value: 'Quatre saisons' },
      { icon: 'transit', title: 'Train de banlieue exo', text: 'La gare de Mascouche relie le centre-ville de Montréal en environ 25 minutes, sans la voiture.', value: '~25 min Mtl' },
      { icon: 'commerce', title: 'Commerces & services', text: 'Pôles commerciaux le long de la 25, épiceries, restaurants et services professionnels à distance de marche des quartiers.', value: 'Tout sur place' },
      { icon: 'sport', title: 'Sport & plein air', text: 'Arénas, complexe sportif, terrains et un réseau de pistes cyclables qui sillonne la ville et ses espaces verts.', value: 'Ville active' }
    ],
    parksIntro: "Mascouche mise sur ses grands espaces : le Parc du Grand-Coteau et un chapelet de parcs de quartier qui font respirer chaque secteur.",
    parks: [
      { img: 'mascouche-1.jpg', title: 'Aire de jeux familiale, Mascouche' },
      { img: 'mascouche-3.jpg', title: 'Parcs et étangs de Mascouche' }
    ],
    transportIntro: "Mascouche profite d'un atout rare dans Lanaudière : une gare de train de banlieue, doublée d'un accès direct aux autoroutes 25 et 640.",
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '30 – 45 min', train: 'Train exo ~25 min', dist: '35 km', access: 'A-25 Sud' },
      { dest: 'Laval', car: '20 – 30 min', train: 'Bus exo', dist: '22 km', access: 'A-25 / A-440' },
      { dest: 'Terrebonne', car: '10 – 15 min', train: 'Train exo', dist: '10 km', access: 'A-25' },
      { dest: 'Aéroport YUL', car: '35 – 45 min', train: '—', dist: '46 km', access: 'A-25 / A-40' },
      { dest: 'Repentigny', car: '20 – 25 min', train: '—', dist: '22 km', access: 'A-640 / A-40' }
    ],
    taxKey: 'mascouche',
    taxCompare: ['mascouche', 'terrebonne', 'repentigny', 'lassomption'],
    ctaTagline: "Nos courtiers connaissent Mascouche, ses nouveaux quartiers et ses secteurs établis. Parlez à un expert local pour réussir votre projet.",
    seoKeywords: ['agence immobilière Mascouche','courtier immobilier Mascouche','maison à vendre Mascouche','vivre à Mascouche','guide Mascouche 2026','gare Mascouche','Grand-Coteau']
  },

  repentigny: {
    fileSlug: 'dici-repentigny',
    eventsUrl: 'https://repentigny.ca/calendrier',
    slug: 'repentigny',
    name: 'Repentigny',
    nameEm: 'Repentigny',
    region: 'Lanaudière',
    brand: 'dici',
    brandName: "RE/MAX D'ici",
    brandTagline: "Vos courtiers de confiance dans Lanaudière.",
    centrisRegionSlug: 'lanaudiere',
    centrisSlug: 'repentigny-repentigny',
    heroImage: 'images/villes/repentigny/repentigny-4.jpg',
    heroAlt: "L'Espace culturel de Repentigny au crépuscule",
    introImage: 'images/villes/repentigny/repentigny-3.jpg',
    introImageAlt: 'Hôtel de ville de Repentigny',
    introCaptionTitle: "L'Espace culturel",
    introCaptionSub: 'Le pôle culturel au bord du fleuve',
    stats: [
      { value: '86 000+', label: 'Résidents' },
      { value: 'Fleuve', label: 'Saint-Laurent' },
      { value: 'Espace culturel', label: 'Pôle artistique' },
      { value: 'A-40 / A-640', label: 'Accès direct' }
    ],
    tagline: "La ville au bord du fleuve, porte d'entrée de Lanaudière à la limite de Montréal.",
    intro: [
      `Repentigny est la deuxième ville de Lanaudière et la plus proche de l'île de Montréal. Posée sur la rive du Saint-Laurent, à l'embouchure de la rivière L'Assomption, elle offre un cadre de vie maritime rare sur la Rive-Nord, avec promenades riveraines, marinas et golfs.`,
      `La ville s'est dotée d'un véritable cœur culturel : l'Espace culturel de Repentigny, avec sa bibliothèque, sa salle de spectacle et ses jardins, est devenu un repère pour toute la région. Les familles y trouvent une programmation riche, été comme hiver.`,
      `Avec ses quartiers résidentiels établis, ses écoles, son cégep et un accès direct aux autoroutes 40 et 640, Repentigny combine la tranquillité d'une ville de banlieue mature et la proximité immédiate de Montréal.`
    ],
    qualityIntro: "Entre le fleuve, l'Espace culturel et ses quartiers verdoyants, Repentigny offre une qualité de vie complète aux portes de Montréal.",
    qualityCards: [
      { icon: 'park', title: 'Bord du fleuve', text: 'Promenades riveraines, parcs au bord du Saint-Laurent, marinas et golfs : un cadre de vie maritime unique sur la Rive-Nord.', value: 'Front fleuve' },
      { icon: 'commerce', title: 'Espace culturel', text: 'Bibliothèque, salle de spectacle, jardins et programmation événementielle font de Repentigny un pôle culturel régional.', value: 'Pôle culturel' },
      { icon: 'sport', title: 'Sport & loisirs', text: 'Arénas, piscines, golfs, pistes cyclables et grands parcs : une ville pensée pour bouger en famille.', value: 'Ville active' },
      { icon: 'transit', title: 'Transport & accès', text: 'Accès direct aux autoroutes 40 et 640, terminus d\'autobus exo et liaison rapide vers Montréal.', value: 'Aux portes de Mtl' }
    ],
    parksIntro: "Repentigny déroule ses parcs le long du fleuve et de la rivière L'Assomption, ponctués d'équipements de loisirs pour toute la famille.",
    parks: [
      { img: 'repentigny-1.jpg', title: "Jardins de l'Espace culturel" },
      { img: 'repentigny-5.jpg', title: 'Piscine et parc municipal' },
      { img: 'repentigny-6.jpg', title: 'Espaces verts du Vieux-Repentigny' },
      { img: 'repentigny-2.jpg', title: 'Parc riverain de Repentigny' }
    ],
    transportIntro: "Première ville de Lanaudière en arrivant de Montréal, Repentigny bénéficie d'un accès autoroutier immédiat et d'un réseau d'autobus exo.",
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '25 – 40 min', train: 'Bus exo', dist: '25 km', access: 'A-40 Ouest' },
      { dest: 'Laval', car: '25 – 35 min', train: '—', dist: '30 km', access: 'A-40 / A-25' },
      { dest: 'Terrebonne', car: '15 – 20 min', train: '—', dist: '18 km', access: 'A-40 / A-640' },
      { dest: 'Charlemagne', car: '5 – 10 min', train: 'Bus exo', dist: '5 km', access: 'A-40' },
      { dest: 'Aéroport YUL', car: '35 – 50 min', train: '—', dist: '40 km', access: 'A-40 / A-25' }
    ],
    taxKey: 'repentigny',
    taxCompare: ['repentigny', 'charlemagne', 'lassomption', 'terrebonne'],
    ctaTagline: "Nos courtiers connaissent Repentigny, du bord du fleuve aux quartiers établis. Parlez à un expert local pour acheter ou vendre au bon prix.",
    seoKeywords: ['agence immobilière Repentigny','courtier immobilier Repentigny','maison à vendre Repentigny','vivre à Repentigny','guide Repentigny 2026','condo bord du fleuve Repentigny']
  },

  charlemagne: {
    fileSlug: 'dici-charlemagne',
    eventsUrl: 'https://www.charlemagne.ca/evenements',
    slug: 'charlemagne',
    name: 'Charlemagne',
    nameEm: 'Charlemagne',
    region: 'Lanaudière',
    brand: 'dici',
    brandName: "RE/MAX D'ici",
    brandTagline: "Vos courtiers de confiance dans Lanaudière.",
    centrisRegionSlug: 'lanaudiere',
    centrisSlug: 'charlemagne',
    heroImage: 'images/villes/charlemagne/charlemagne-2.jpg',
    heroAlt: 'Hôtel de ville de Charlemagne',
    introImage: 'images/villes/charlemagne/charlemagne-5.jpg',
    introImageAlt: 'Église de Charlemagne',
    introCaptionTitle: 'Charlemagne',
    introCaptionSub: 'La petite ville au grand cœur, berceau de Céline Dion',
    stats: [
      { value: '6 000+', label: 'Résidents' },
      { value: 'À 20 min', label: 'de Montréal' },
      { value: 'Céline Dion', label: 'Ville natale' },
      { value: 'A-40', label: 'Accès direct' }
    ],
    tagline: "La plus petite ville de Lanaudière, nichée entre deux rivières aux portes de Montréal.",
    intro: [
      `Charlemagne est une ville à échelle humaine, coincée entre la rivière L'Assomption et la rivière des Prairies, à la limite immédiate de l'île de Montréal. Son territoire compact en fait l'une des municipalités les plus accessibles de la région — tout est à quelques minutes.`,
      `Connue comme la ville natale de Céline Dion, Charlemagne cultive une fierté de quartier et une vie communautaire tissée serré. On y trouve l'essentiel : écoles, commerces de proximité, parcs et bord de l'eau.`,
      `Pour qui veut entrer dans Lanaudière tout en restant collé à Montréal, Charlemagne offre un rapport qualité-prix et un accès autoroutier (A-40) difficiles à battre.`
    ],
    qualityIntro: "Compacte et conviviale, Charlemagne réunit l'essentiel des services et un accès express à Montréal dans un format de petite ville.",
    qualityCards: [
      { icon: 'park', title: 'Entre deux rivières', text: "Bordée par la rivière L'Assomption et la rivière des Prairies, la ville offre parcs riverains et aires de jeux familiales.", value: 'Bord de l\'eau' },
      { icon: 'transit', title: 'Aux portes de Montréal', text: "Accès direct à l'autoroute 40 et liaison d'autobus : le centre-ville de Montréal est à une vingtaine de minutes.", value: '~20 min Mtl' },
      { icon: 'commerce', title: 'Proximité', text: 'Commerces de proximité, écoles et services du quotidien à distance de marche dans une ville à échelle humaine.', value: 'Tout proche' },
      { icon: 'sport', title: 'Vie de quartier', text: 'Jeux d\'eau, parcs et installations communautaires animent une ville reconnue pour son esprit tissé serré.', value: 'Convivial' }
    ],
    parksIntro: "Malgré sa petite taille, Charlemagne soigne ses espaces verts et ses aires de jeux, parfaits pour les familles.",
    parks: [
      { img: 'charlemagne-1.jpg', title: 'Aire de jeux, Charlemagne' },
      { img: 'charlemagne-3.jpg', title: "Jeux d'eau de Charlemagne" }
    ],
    transportIntro: "Collée à l'île de Montréal, Charlemagne offre un des accès les plus rapides à la métropole de toute la région.",
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '20 – 35 min', train: 'Bus exo', dist: '22 km', access: 'A-40 Ouest' },
      { dest: 'Repentigny', car: '5 – 10 min', train: 'Bus exo', dist: '5 km', access: 'A-40' },
      { dest: 'Laval', car: '25 – 35 min', train: '—', dist: '28 km', access: 'A-40 / A-25' },
      { dest: 'Terrebonne', car: '15 – 20 min', train: '—', dist: '17 km', access: 'A-40 / A-640' },
      { dest: 'Aéroport YUL', car: '30 – 45 min', train: '—', dist: '37 km', access: 'A-40 / A-25' }
    ],
    taxKey: 'charlemagne',
    taxCompare: ['charlemagne', 'repentigny', 'lassomption', 'terrebonne'],
    ctaTagline: "Nos courtiers connaissent Charlemagne et son marché de proximité. Parlez à un expert local pour saisir la bonne occasion.",
    seoKeywords: ['agence immobilière Charlemagne','courtier immobilier Charlemagne','maison à vendre Charlemagne','vivre à Charlemagne','guide Charlemagne 2026']
  },

  lassomption: {
    fileSlug: 'dici-lassomption',
    eventsUrl: 'https://www.ville.lassomption.qc.ca/calendrier/',
    slug: 'lassomption',
    name: "L'Assomption",
    nameEm: "L'Assomption",
    region: 'Lanaudière',
    brand: 'dici',
    brandName: "RE/MAX D'ici",
    brandTagline: "Vos courtiers de confiance dans Lanaudière.",
    centrisRegionSlug: 'lanaudiere',
    centrisSlug: 'l-assomption',
    heroImage: 'images/villes/lassomption/lassomption-1.jpg',
    heroAlt: "Vue aérienne du centre-ville historique de L'Assomption",
    introImage: 'images/villes/lassomption/lassomption-5.jpg',
    introImageAlt: "Église de L'Assomption-de-la-Sainte-Vierge",
    introCaptionTitle: 'Vieux quartier',
    introCaptionSub: 'Un cœur patrimonial dans une boucle de rivière',
    stats: [
      { value: '24 000+', label: 'Résidents' },
      { value: 'Rivière', label: "L'Assomption" },
      { value: 'Hector-Charland', label: 'Théâtre' },
      { value: 'A-40 / A-540', label: 'Accès direct' }
    ],
    tagline: "La ville d'histoire et de culture, lovée dans une boucle de la rivière L'Assomption.",
    intro: [
      `L'Assomption est l'une des plus anciennes villes de Lanaudière, et cela se voit : son cœur historique, blotti dans une presqu'île formée par la rivière L'Assomption, aligne maisons patrimoniales, rues piétonnes et institutions réputées comme le Collège de L'Assomption.`,
      `La ville respire la culture. Le Théâtre Hector-Charland en fait l'un des pôles de diffusion les plus dynamiques de la région, tandis que le centre-ville mêle cafés, boutiques et événements qui rythment l'année.`,
      `Entourée de campagne et de pistes cyclables, mais reliée à Montréal par les autoroutes 40 et 340, L'Assomption attire les familles qui cherchent le charme d'une ville d'histoire avec les services d'aujourd'hui.`
    ],
    qualityIntro: "Patrimoine vivant, culture et nature : L'Assomption offre un milieu de vie au caractère affirmé, rare dans la région.",
    qualityCards: [
      { icon: 'park', title: 'Rivière & nature', text: "La rivière L'Assomption enserre le centre-ville. Parc écologique, berges et pistes cyclables prolongent la ville dans la nature.", value: 'Parc écolo' },
      { icon: 'commerce', title: 'Cœur patrimonial', text: 'Vieux quartier, cafés, boutiques et le Collège de L\'Assomption composent un centre-ville plein de caractère.', value: 'Centre vivant' },
      { icon: 'sport', title: 'Culture & loisirs', text: 'Le Théâtre Hector-Charland, les festivals et les installations sportives animent la ville toute l\'année.', value: 'Hector-Charland' },
      { icon: 'transit', title: 'Transport & accès', text: 'Accès aux autoroutes 40 et 340, à 35-40 minutes de Montréal, au cœur de Lanaudière.', value: '~40 min Mtl' }
    ],
    parksIntro: "Entre la boucle de la rivière et le Parc écologique, L'Assomption offre un réseau d'espaces verts qui ceinture son centre historique.",
    parks: [
      { img: 'lassomption-3.jpg', title: "Méandre de la rivière L'Assomption" },
      { img: 'lassomption-4.jpg', title: "Parc écologique de L'Assomption" },
      { img: 'lassomption-2.jpg', title: 'Aire de jeux familiale' }
    ],
    transportIntro: "Au cœur de Lanaudière, L'Assomption relie facilement Montréal et les pôles voisins par les autoroutes 40 et 340.",
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '35 – 50 min', train: 'Bus exo', dist: '42 km', access: 'A-40 Ouest' },
      { dest: 'Repentigny', car: '10 – 15 min', train: '—', dist: '12 km', access: 'A-40 / R-344' },
      { dest: 'Terrebonne', car: '20 – 25 min', train: '—', dist: '24 km', access: 'A-640' },
      { dest: 'Joliette', car: '20 – 25 min', train: '—', dist: '25 km', access: 'A-31 / R-343' },
      { dest: 'Aéroport YUL', car: '40 – 55 min', train: '—', dist: '52 km', access: 'A-40 / A-25' }
    ],
    taxKey: 'lassomption',
    taxCompare: ['lassomption', 'repentigny', 'lepiphanie', 'charlemagne'],
    ctaTagline: "Nos courtiers connaissent L'Assomption, de son vieux quartier à ses développements récents. Parlez à un expert local pour votre projet.",
    seoKeywords: ['agence immobilière L\'Assomption','courtier immobilier L\'Assomption','maison à vendre L\'Assomption','vivre à L\'Assomption','guide L\'Assomption 2026','Théâtre Hector-Charland']
  },

  lepiphanie: {
    fileSlug: 'dici-lepiphanie',
    eventsUrl: 'https://www.lepiphanie.ca/programmation',
    slug: 'lepiphanie',
    name: "L'Épiphanie",
    nameEm: "L'Épiphanie",
    region: 'Lanaudière',
    brand: 'dici',
    brandName: "RE/MAX D'ici",
    brandTagline: "Vos courtiers de confiance dans Lanaudière.",
    centrisRegionSlug: 'lanaudiere',
    centrisSlug: 'l-epiphanie',
    heroImage: 'images/villes/lepiphanie/lepiphanie-4.jpg',
    heroAlt: "Rivière L'Achigan à L'Épiphanie",
    introImage: 'images/villes/lepiphanie/lepiphanie-1.jpg',
    introImageAlt: "Église et presbytère de L'Épiphanie",
    introCaptionTitle: "L'Épiphanie",
    introCaptionSub: "Village et campagne au bord de la rivière L'Achigan",
    stats: [
      { value: '9 200+', label: 'Résidents' },
      { value: "L'Achigan", label: 'Rivière' },
      { value: 'Campagne', label: 'Cadre rural' },
      { value: 'R-341 / A-40', label: 'Accès' }
    ],
    tagline: "La ville-campagne de Lanaudière, traversée par la rivière L'Achigan.",
    intro: [
      `L'Épiphanie réunit, depuis le regroupement de la ville et de la paroisse, un noyau villageois animé et de vastes terres agricoles. La rivière L'Achigan traverse le territoire et donne à la municipalité son cadre paisible et verdoyant.`,
      `On vient à L'Épiphanie pour l'espace, le calme et la qualité de vie : grands terrains, air de campagne et un cœur villageois où se concentrent l'église, les commerces et les services de proximité.`,
      `À distance raisonnable de Repentigny, de L'Assomption et des accès autoroutiers vers Montréal, L'Épiphanie offre le compromis idéal entre vie rurale et proximité des grands services.`
    ],
    qualityIntro: "Espace, nature et tranquillité : L'Épiphanie séduit les familles qui cherchent la campagne sans s'éloigner des services.",
    qualityCards: [
      { icon: 'park', title: "Rivière L'Achigan", text: 'La rivière et ses abords offrent un décor naturel apaisant, prisé pour la détente et les activités de plein air.', value: 'Cadre nature' },
      { icon: 'commerce', title: 'Cœur villageois', text: 'Église, commerces et services essentiels se regroupent dans un noyau villageois à échelle humaine.', value: 'Village vivant' },
      { icon: 'sport', title: 'Plein air & loisirs', text: 'Parcs, aires de jeux et grands espaces verts soutiennent une vie active et familiale.', value: 'Grands espaces' },
      { icon: 'transit', title: 'Campagne accessible', text: 'Routes 341 et 339 et accès à l\'autoroute 40 : Montréal et les pôles de la région restent à portée.', value: 'Bien relié' }
    ],
    parksIntro: "L'Épiphanie cultive ses espaces verts au fil de la rivière L'Achigan et de son cœur villageois.",
    parks: [
      { img: 'lepiphanie-2.jpg', title: 'Espace civique de L\'Épiphanie' },
      { img: 'lepiphanie-3.jpg', title: 'Plan d\'eau et nature' }
    ],
    transportIntro: "Entre campagne et grands axes, L'Épiphanie rejoint facilement Repentigny, L'Assomption et l'autoroute 40.",
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '40 – 55 min', train: '—', dist: '45 km', access: 'A-40 / R-341' },
      { dest: 'Repentigny', car: '15 – 20 min', train: '—', dist: '16 km', access: 'R-341' },
      { dest: "L'Assomption", car: '10 – 15 min', train: '—', dist: '10 km', access: 'R-341' },
      { dest: 'Terrebonne', car: '25 – 30 min', train: '—', dist: '28 km', access: 'A-640' },
      { dest: 'Joliette', car: '20 – 30 min', train: '—', dist: '28 km', access: 'R-341 / A-31' }
    ],
    taxKey: 'lepiphanie',
    taxCompare: ['lepiphanie', 'lassomption', 'saintrochachigan', 'saintlin'],
    ctaTagline: "Nos courtiers connaissent L'Épiphanie, son village et sa campagne. Parlez à un expert local pour trouver l'espace qu'il vous faut.",
    seoKeywords: ['agence immobilière L\'Épiphanie','courtier immobilier L\'Épiphanie','maison à vendre L\'Épiphanie','vivre à L\'Épiphanie','guide L\'Épiphanie 2026','terrain L\'Épiphanie']
  },

  saintsulpice: {
    fileSlug: 'dici-saint-sulpice',
    eventsUrl: 'https://municipalitesaintsulpice.com/evenements-a-venir-a-saint-sulpice',
    slug: 'saintsulpice',
    name: 'Saint-Sulpice',
    nameEm: 'Saint-Sulpice',
    region: 'Lanaudière',
    brand: 'dici',
    brandName: "RE/MAX D'ici",
    brandTagline: "Vos courtiers de confiance dans Lanaudière.",
    centrisRegionSlug: 'lanaudiere',
    centrisSlug: 'saint-sulpice',
    heroImage: 'images/villes/saintsulpice/saintsulpice-2.jpg',
    heroAlt: 'Belvédère sur le fleuve Saint-Laurent à Saint-Sulpice',
    introImage: 'images/villes/saintsulpice/saintsulpice-1.jpg',
    introImageAlt: 'Mairie de Saint-Sulpice',
    introCaptionTitle: 'Le Chemin du Roy',
    introCaptionSub: 'Un village riverain au bord du Saint-Laurent',
    stats: [
      { value: '3 600+', label: 'Résidents' },
      { value: 'Fleuve', label: 'Saint-Laurent' },
      { value: 'Chemin du Roy', label: 'Route historique' },
      { value: 'A-40', label: 'Accès' }
    ],
    tagline: "Le village riverain par excellence, sur le Chemin du Roy au bord du fleuve.",
    intro: [
      `Saint-Sulpice est un village patrimonial étiré le long du fleuve Saint-Laurent, sur l'historique Chemin du Roy. Ici, la vie suit le rythme de l'eau : belvédères, haltes riveraines et grands ciels font le quotidien des résidents.`,
      `Petite municipalité tissée serré, Saint-Sulpice conjugue maisons de caractère, terres agricoles et front fleuve. C'est une adresse recherchée par ceux qui rêvent de calme, d'espace et d'un point de vue imprenable sur le Saint-Laurent.`,
      `Tout en cultivant son charme villageois, Saint-Sulpice reste à quelques minutes de Repentigny et d'un accès rapide à l'autoroute 40 vers Montréal.`
    ],
    qualityIntro: "Front fleuve, patrimoine et tranquillité : Saint-Sulpice offre une qualité de vie riveraine devenue rare.",
    qualityCards: [
      { icon: 'park', title: 'Bord du fleuve', text: 'Belvédères, haltes et accès au Saint-Laurent rythment le village le long du Chemin du Roy.', value: 'Front fleuve' },
      { icon: 'commerce', title: 'Charme villageois', text: 'Maisons de caractère, patrimoine bâti et vie de village composent une adresse paisible et authentique.', value: 'Village' },
      { icon: 'sport', title: 'Vélo & plein air', text: 'La route verte et le Chemin du Roy en font un terrain de jeu prisé des cyclistes et des amateurs de plein air.', value: 'Route verte' },
      { icon: 'transit', title: 'Calme & accessible', text: "À quelques minutes de Repentigny et de l'autoroute 40 pour rejoindre Montréal.", value: 'Bien situé' }
    ],
    parksIntro: "Saint-Sulpice vit au bord de l'eau : ses plus beaux espaces longent le fleuve et le Chemin du Roy.",
    parks: [
      { img: 'saintsulpice-3.jpg', title: 'Bords du Saint-Laurent' },
      { img: 'saintsulpice-4.jpg', title: 'Chemin du Roy et route verte' }
    ],
    transportIntro: "Village riverain, Saint-Sulpice rejoint Repentigny et l'autoroute 40 en quelques minutes par le Chemin du Roy.",
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '35 – 50 min', train: '—', dist: '38 km', access: 'A-40 Ouest' },
      { dest: 'Repentigny', car: '10 – 15 min', train: '—', dist: '12 km', access: 'R-138 / A-40' },
      { dest: "L'Assomption", car: '15 – 20 min', train: '—', dist: '16 km', access: 'R-343' },
      { dest: 'Lavaltrie', car: '10 – 15 min', train: '—', dist: '14 km', access: 'R-138 (Chemin du Roy)' },
      { dest: 'Terrebonne', car: '25 – 30 min', train: '—', dist: '30 km', access: 'A-40 / A-640' }
    ],
    taxKey: 'saintsulpice',
    taxCompare: ['saintsulpice', 'lavaltrie', 'repentigny', 'lassomption'],
    ctaTagline: "Nos courtiers connaissent Saint-Sulpice et son marché riverain unique. Parlez à un expert local pour trouver votre adresse au bord du fleuve.",
    seoKeywords: ['agence immobilière Saint-Sulpice','courtier immobilier Saint-Sulpice','maison à vendre Saint-Sulpice','vivre à Saint-Sulpice','guide Saint-Sulpice 2026','bord du fleuve Chemin du Roy']
  },

  lavaltrie: {
    fileSlug: 'dici-lavaltrie',
    eventsUrl: 'https://www.ville.lavaltrie.qc.ca/activites/evenements',
    slug: 'lavaltrie',
    name: 'Lavaltrie',
    nameEm: 'Lavaltrie',
    region: 'Lanaudière',
    brand: 'dici',
    brandName: "RE/MAX D'ici",
    brandTagline: "Vos courtiers de confiance dans Lanaudière.",
    centrisRegionSlug: 'lanaudiere',
    centrisSlug: 'lavaltrie',
    heroImage: 'images/villes/lavaltrie/lavaltrie-1.jpg',
    heroAlt: 'Glissades hivernales devant l\'église de Lavaltrie',
    introImage: 'images/villes/lavaltrie/lavaltrie-4.jpg',
    introImageAlt: 'Hôtel de ville de Lavaltrie',
    introCaptionTitle: 'Lavaltrie',
    introCaptionSub: 'Ville d\'art et de culture au bord du fleuve',
    stats: [
      { value: '14 000+', label: 'Résidents' },
      { value: 'Fleuve', label: 'Saint-Laurent' },
      { value: 'Chemin du Roy', label: 'Route historique' },
      { value: 'A-40', label: 'Accès direct' }
    ],
    tagline: "La ville d'art au bord du fleuve, sur le Chemin du Roy.",
    intro: [
      `Lavaltrie marie le bord du fleuve Saint-Laurent et une vie culturelle étonnamment riche pour sa taille. Sur l'historique Chemin du Roy, la ville cultive les arts, la sculpture et les événements qui animent ses berges été comme hiver.`,
      `Les familles apprécient Lavaltrie pour son équilibre : quartiers résidentiels paisibles, parc riverain, jeux d'eau et un cœur de ville fleuri et accueillant. La proximité de l'eau donne à chaque saison son décor.`,
      `Avec un accès direct à l'autoroute 40, Lavaltrie reste bien reliée à Repentigny, à Joliette et à Montréal, tout en conservant son cachet de ville riveraine.`
    ],
    qualityIntro: "Bord du fleuve, arts et qualité de vie familiale : Lavaltrie offre un cadre de vie aussi beau qu'animé.",
    qualityCards: [
      { icon: 'park', title: 'Parc riverain', text: 'Berges aménagées, jeux d\'eau et accès au Saint-Laurent font du bord du fleuve le cœur récréatif de la ville.', value: 'Front fleuve' },
      { icon: 'commerce', title: 'Ville d\'art', text: 'Sculpture, culture et événements rythment l\'année sur le Chemin du Roy, dans un centre-ville fleuri.', value: 'Vie culturelle' },
      { icon: 'sport', title: 'Plein air & loisirs', text: 'Pistes cyclables, parcs, glissades l\'hiver : Lavaltrie se vit dehors en toutes saisons.', value: 'Quatre saisons' },
      { icon: 'transit', title: 'Transport & accès', text: "Accès direct à l'autoroute 40, à mi-chemin entre Repentigny et Joliette.", value: '~45 min Mtl' }
    ],
    parksIntro: "Lavaltrie déroule ses plus beaux espaces le long du fleuve, entre berges aménagées, jardins et aires de jeux.",
    parks: [
      { img: 'lavaltrie-5.jpg', title: 'Jardins et chapelle de Lavaltrie' },
      { img: 'lavaltrie-3.jpg', title: 'Aire de jeux familiale' },
      { img: 'lavaltrie-2.jpg', title: 'Vue aérienne de Lavaltrie' }
    ],
    transportIntro: "À mi-chemin entre Repentigny et Joliette, Lavaltrie profite d'un accès direct à l'autoroute 40 et du panoramique Chemin du Roy.",
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '40 – 55 min', train: '—', dist: '50 km', access: 'A-40 Ouest' },
      { dest: 'Repentigny', car: '15 – 25 min', train: '—', dist: '22 km', access: 'A-40' },
      { dest: 'Joliette', car: '20 – 25 min', train: '—', dist: '25 km', access: 'A-40 / R-131' },
      { dest: 'Saint-Sulpice', car: '10 – 15 min', train: '—', dist: '14 km', access: 'R-138 (Chemin du Roy)' },
      { dest: 'Terrebonne', car: '30 – 35 min', train: '—', dist: '38 km', access: 'A-40 / A-640' }
    ],
    taxKey: 'lavaltrie',
    taxCompare: ['lavaltrie', 'saintsulpice', 'lassomption', 'repentigny'],
    ctaTagline: "Nos courtiers connaissent Lavaltrie, du bord du fleuve à ses nouveaux quartiers. Parlez à un expert local pour réussir votre projet.",
    seoKeywords: ['agence immobilière Lavaltrie','courtier immobilier Lavaltrie','maison à vendre Lavaltrie','vivre à Lavaltrie','guide Lavaltrie 2026','bord du fleuve Lavaltrie']
  },

  saintrochachigan: {
    fileSlug: 'dici-saint-roch-de-lachigan',
    eventsUrl: 'https://sra.quebec/calendrier-des-evenements',
    slug: 'saintrochachigan',
    name: "Saint-Roch-de-l'Achigan",
    nameEm: "Saint-Roch-de-l'Achigan",
    region: 'Lanaudière',
    brand: 'dici',
    brandName: "RE/MAX D'ici",
    brandTagline: "Vos courtiers de confiance dans Lanaudière.",
    centrisRegionSlug: 'lanaudiere',
    centrisSlug: 'saint-roch-de-l-achigan',
    heroImage: 'images/villes/saintrochachigan/saintrochachigan-2.jpg',
    heroAlt: "Couvent patrimonial de Saint-Roch-de-l'Achigan",
    introImage: 'images/villes/saintrochachigan/saintrochachigan-5.jpg',
    introImageAlt: "Bâtiment patrimonial de Saint-Roch-de-l'Achigan",
    introCaptionTitle: "Saint-Roch-de-l'Achigan",
    introCaptionSub: 'Un village en pleine croissance au bord de la rivière',
    stats: [
      { value: '5 600+', label: 'Résidents' },
      { value: "L'Achigan", label: 'Rivière' },
      { value: 'En croissance', label: 'Nouveaux quartiers' },
      { value: 'A-25', label: 'Accès direct' }
    ],
    tagline: "Le village de Montcalm qui monte, à un saut d'autoroute de la métropole.",
    intro: [
      `Saint-Roch-de-l'Achigan est l'une des municipalités les plus dynamiques de la MRC de Montcalm. Son cœur villageois patrimonial, dominé par le Couvent et l'église, côtoie de nouveaux développements résidentiels qui attirent de jeunes familles.`,
      `Traversée par la rivière L'Achigan, la municipalité offre l'espace et le calme de la campagne, avec des installations récentes : jeux d'eau, terrains sportifs synthétiques et parcs de quartier flambant neufs.`,
      `Son accès direct à l'autoroute 25 met Terrebonne, Laval et Montréal à portée, ce qui en fait un choix de plus en plus prisé pour ceux qui veulent bâtir ou acheter neuf à bon prix.`
    ],
    qualityIntro: "Patrimoine villageois, installations neuves et accès autoroutier : Saint-Roch-de-l'Achigan combine racines et croissance.",
    qualityCards: [
      { icon: 'park', title: "Rivière L'Achigan", text: 'La rivière et les parcs de quartier offrent un cadre nature apprécié des familles, au cœur du village.', value: 'Cadre nature' },
      { icon: 'commerce', title: 'Cœur patrimonial', text: 'Le Couvent, l\'église et le noyau villageois donnent à Saint-Roch un caractère historique affirmé.', value: 'Patrimoine' },
      { icon: 'sport', title: 'Installations neuves', text: 'Jeux d\'eau, terrains de soccer synthétiques et parcs récents soutiennent une vie sportive active.', value: 'Équipements neufs' },
      { icon: 'transit', title: 'Accès A-25', text: "L'autoroute 25 met Terrebonne, Laval et Montréal à courte distance.", value: '~35 min Mtl' }
    ],
    parksIntro: "Saint-Roch-de-l'Achigan a investi dans des parcs et des installations sportives récentes pour ses familles.",
    parks: [
      { img: 'saintrochachigan-1.jpg', title: "Jeux d'eau, Saint-Roch-de-l'Achigan" },
      { img: 'saintrochachigan-3.jpg', title: 'Parc et splash pad' },
      { img: 'saintrochachigan-4.jpg', title: 'Terrain de soccer synthétique' }
    ],
    transportIntro: "Grâce à l'autoroute 25, Saint-Roch-de-l'Achigan rejoint rapidement Terrebonne, Laval et Montréal.",
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '35 – 50 min', train: '—', dist: '45 km', access: 'A-25 Sud' },
      { dest: 'Terrebonne', car: '15 – 20 min', train: '—', dist: '20 km', access: 'A-25' },
      { dest: 'Laval', car: '25 – 35 min', train: '—', dist: '32 km', access: 'A-25 / A-440' },
      { dest: 'Mascouche', car: '15 – 20 min', train: 'Train exo (Mascouche)', dist: '18 km', access: 'A-25' },
      { dest: "Saint-Lin–Laurentides", car: '15 – 20 min', train: '—', dist: '17 km', access: 'R-339' }
    ],
    taxKey: 'saintrochachigan',
    taxCompare: ['saintrochachigan', 'saintlin', 'saintjacques', 'lepiphanie'],
    ctaTagline: "Nos courtiers connaissent Saint-Roch-de-l'Achigan, son village et ses nouveaux développements. Parlez à un expert local pour acheter ou bâtir.",
    seoKeywords: ['agence immobilière Saint-Roch-de-l\'Achigan','courtier immobilier Saint-Roch-de-l\'Achigan','maison à vendre Saint-Roch-de-l\'Achigan','vivre à Saint-Roch-de-l\'Achigan','guide Saint-Roch 2026','construction neuve Montcalm']
  },

  saintlin: {
    fileSlug: 'dici-saint-lin-laurentides',
    eventsUrl: 'https://www.saint-lin-laurentides.com/evenements',
    slug: 'saintlin',
    name: 'Saint-Lin–Laurentides',
    nameEm: 'Saint-Lin–Laurentides',
    region: 'Lanaudière',
    brand: 'dici',
    brandName: "RE/MAX D'ici",
    brandTagline: "Vos courtiers de confiance dans Lanaudière.",
    centrisRegionSlug: 'lanaudiere',
    centrisSlug: 'saint-lin-laurentides',
    heroImage: 'images/villes/saintlin/saintlin-1.jpg',
    heroAlt: 'Vue aérienne de l\'église de Saint-Lin–Laurentides',
    introImage: 'images/villes/saintlin/saintlin-6.jpg',
    introImageAlt: 'Hôtel de ville de Saint-Lin–Laurentides',
    introCaptionTitle: 'Saint-Lin–Laurentides',
    introCaptionSub: 'Berceau de Wilfrid Laurier, ville en plein essor',
    stats: [
      { value: '22 000+', label: 'Résidents' },
      { value: "L'Achigan", label: 'Rivière' },
      { value: 'Wilfrid Laurier', label: 'Ville natale' },
      { value: 'R-335 / A-25', label: 'Accès' }
    ],
    tagline: "L'une des villes qui grandissent le plus vite dans Lanaudière, berceau de Wilfrid Laurier.",
    intro: [
      `Saint-Lin–Laurentides figure parmi les villes à la croissance la plus rapide de Lanaudière. Ville natale de l'ancien premier ministre Wilfrid Laurier, elle conjugue un noyau villageois historique et de vastes développements résidentiels neufs.`,
      `Traversée par la rivière L'Achigan, entourée de boisés et de sentiers, la ville offre l'espace et la nature recherchés par les familles, avec des prix encore accessibles pour qui veut bâtir ou acheter neuf.`,
      `Les services suivent le rythme de la croissance : écoles, commerces, parcs et installations sportives se multiplient, tandis que la route 335 et l'autoroute 25 assurent le lien vers Terrebonne et Montréal.`
    ],
    qualityIntro: "Nature, croissance et services en expansion : Saint-Lin–Laurentides attire les familles en quête d'espace et de neuf.",
    qualityCards: [
      { icon: 'park', title: 'Rivière & boisés', text: "La rivière L'Achigan et les sentiers boisés offrent un terrain de jeu nature au cœur d'une ville en pleine expansion.", value: 'Plein air' },
      { icon: 'commerce', title: 'Ville en essor', text: 'Commerces, écoles et services se multiplient au rythme d\'une des plus fortes croissances de la région.', value: 'En expansion' },
      { icon: 'sport', title: 'Sport & loisirs', text: 'Parcs récents, aires de jeux et installations sportives accompagnent les nouveaux quartiers.', value: 'Équipements neufs' },
      { icon: 'transit', title: 'Transport & accès', text: "La route 335 et l'autoroute 25 relient Terrebonne, Laval et Montréal.", value: '~45 min Mtl' }
    ],
    parksIntro: "Saint-Lin–Laurentides mise sur la nature et les parcs de quartier pour accompagner sa croissance.",
    parks: [
      { img: 'saintlin-4.jpg', title: 'Sentier boisé en automne' },
      { img: 'saintlin-5.jpg', title: 'Aire de jeux familiale' },
      { img: 'saintlin-3.jpg', title: 'Quartiers résidentiels de Saint-Lin' }
    ],
    transportIntro: "Saint-Lin–Laurentides rejoint Terrebonne et Montréal par la route 335 et l'autoroute 25.",
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '45 – 60 min', train: '—', dist: '55 km', access: 'A-25 / R-335' },
      { dest: 'Terrebonne', car: '20 – 30 min', train: '—', dist: '28 km', access: 'R-335 / A-25' },
      { dest: 'Mascouche', car: '20 – 25 min', train: 'Train exo (Mascouche)', dist: '24 km', access: 'A-25' },
      { dest: 'Laval', car: '30 – 40 min', train: '—', dist: '40 km', access: 'A-25 / A-440' },
      { dest: "Saint-Roch-de-l'Achigan", car: '15 – 20 min', train: '—', dist: '17 km', access: 'R-339' }
    ],
    taxKey: 'saintlin',
    taxCompare: ['saintlin', 'saintrochachigan', 'saintjacques', 'terrebonne'],
    ctaTagline: "Nos courtiers connaissent Saint-Lin–Laurentides et son marché en pleine croissance. Parlez à un expert local pour acheter, bâtir ou vendre.",
    seoKeywords: ['agence immobilière Saint-Lin–Laurentides','courtier immobilier Saint-Lin','maison à vendre Saint-Lin–Laurentides','vivre à Saint-Lin','guide Saint-Lin 2026','construction neuve Saint-Lin']
  },

  saintjacques: {
    fileSlug: 'dici-saint-jacques',
    eventsUrl: 'https://www.st-jacques.org/evenements',
    slug: 'stjacques',
    name: 'Saint-Jacques',
    nameEm: 'Saint-Jacques',
    region: 'Lanaudière',
    brand: 'dici',
    brandName: "RE/MAX D'ici",
    brandTagline: "Vos courtiers de confiance dans Lanaudière.",
    centrisRegionSlug: 'lanaudiere',
    centrisSlug: 'saint-jacques',
    heroImage: 'images/villes/stjacques/stjacques-3.jpg',
    heroAlt: 'Allée arborée en automne à Saint-Jacques',
    introImage: 'images/villes/stjacques/stjacques-6.jpg',
    introImageAlt: 'Église et cœur villageois de Saint-Jacques',
    introCaptionTitle: 'Saint-Jacques',
    introCaptionSub: 'Le village au cœur acadien de Montcalm',
    stats: [
      { value: '4 700+', label: 'Résidents' },
      { value: 'Acadien', label: 'Patrimoine' },
      { value: 'Montcalm', label: 'MRC' },
      { value: 'R-341 / A-25', label: 'Accès' }
    ],
    tagline: "Le village de la « Nouvelle-Acadie », fier de ses racines et de sa qualité de vie.",
    intro: [
      `Saint-Jacques est le cœur de la Nouvelle-Acadie, ce coin de Lanaudière où se sont installées des familles acadiennes après le Grand Dérangement. Cette histoire singulière donne à la municipalité une identité forte et une vie communautaire bien vivante.`,
      `Le village s'organise autour de son église, de ses parcs soigneusement entretenus et d'un centre-ville à échelle humaine. On y trouve écoles, commerces de proximité et une nature toujours à portée de main.`,
      `Bien reliée par la route 341 et à courte distance de l'autoroute 25, Saint-Jacques offre la tranquillité d'un village avec un accès commode à Saint-Lin, à Joliette et à la région métropolitaine.`
    ],
    qualityIntro: "Patrimoine acadien, parcs soignés et vie de village : Saint-Jacques cultive une qualité de vie authentique.",
    qualityCards: [
      { icon: 'park', title: 'Parcs & nature', text: 'Allées arborées, parcs entretenus et sentiers boisés offrent un cadre de vie verdoyant et paisible.', value: 'Cadre vert' },
      { icon: 'commerce', title: 'Cœur villageois', text: 'Église, commerces de proximité et services essentiels animent un centre-ville à échelle humaine.', value: 'Village vivant' },
      { icon: 'sport', title: 'Loisirs & communauté', text: 'Aires de jeux, terrains sportifs et événements communautaires rythment la vie de la Nouvelle-Acadie.', value: 'Vie active' },
      { icon: 'transit', title: 'Transport & accès', text: "Route 341 et accès à l'autoroute 25 vers Saint-Lin, Joliette et Montréal.", value: 'Bien relié' }
    ],
    parksIntro: "Saint-Jacques soigne ses parcs et ses allées, écrin de verdure de la Nouvelle-Acadie.",
    parks: [
      { img: 'stjacques-5.jpg', title: 'Sentier boisé en automne' },
      { img: 'stjacques-2.jpg', title: 'Aire de jeux familiale' },
      { img: 'stjacques-4.jpg', title: 'Parc et jardins de Saint-Jacques' }
    ],
    transportIntro: "Saint-Jacques rejoint Saint-Lin, Joliette et l'autoroute 25 par la route 341.",
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '45 – 60 min', train: '—', dist: '55 km', access: 'A-25 / R-341' },
      { dest: 'Saint-Lin–Laurentides', car: '10 – 15 min', train: '—', dist: '12 km', access: 'R-341' },
      { dest: 'Joliette', car: '15 – 20 min', train: '—', dist: '18 km', access: 'R-158' },
      { dest: 'Terrebonne', car: '30 – 35 min', train: '—', dist: '35 km', access: 'A-25' },
      { dest: "L'Assomption", car: '20 – 25 min', train: '—', dist: '24 km', access: 'R-341' }
    ],
    taxKey: 'saintjacques',
    taxCompare: ['saintjacques', 'saintlin', 'saintrochachigan', 'lassomption'],
    ctaTagline: "Nos courtiers connaissent Saint-Jacques et la Nouvelle-Acadie. Parlez à un expert local pour trouver la maison qui vous ressemble.",
    seoKeywords: ['agence immobilière Saint-Jacques','courtier immobilier Saint-Jacques','maison à vendre Saint-Jacques','vivre à Saint-Jacques','guide Saint-Jacques 2026','Nouvelle-Acadie']
  },

  joliette: {
    fileSlug: 'dici-joliette',
    eventsUrl: 'https://www.joliette.ca/evenements',
    slug: 'joliette',
    name: 'Joliette',
    nameEm: 'Joliette',
    region: 'Lanaudière',
    brand: 'dici',
    brandName: "RE/MAX D'ici",
    brandTagline: "Vos courtiers de confiance dans Lanaudière.",
    centrisRegionSlug: 'lanaudiere',
    centrisSlug: 'joliette',
    heroImage: 'images/villes/joliette/joliette-2.jpg',
    heroAlt: 'Vue aérienne du centre-ville de Joliette et de la cathédrale',
    introImage: 'images/villes/joliette/joliette-1.jpg',
    introImageAlt: 'Place et rues arborées du centre-ville de Joliette',
    introCaptionTitle: 'Centre-ville de Joliette',
    introCaptionSub: 'La capitale culturelle de Lanaudière',
    stats: [
      { value: '21 000+', label: 'Résidents' },
      { value: "Festival", label: 'de Lanaudière' },
      { value: "Musée d'art", label: 'de Joliette' },
      { value: 'A-31 / R-158', label: 'Accès' }
    ],
    tagline: "La capitale culturelle de Lanaudière, vibrante de musique, d'art et de vie de centre-ville.",
    intro: [
      `Joliette est le cœur urbain et culturel de Lanaudière. Ville-centre de la région, elle rayonne grâce au Festival de Lanaudière — le plus grand festival de musique classique au Canada — et au Musée d'art de Joliette, l'un des plus importants musées régionaux du Québec.`,
      `Son centre-ville animé, ses rues arborées, sa cathédrale et la rivière L'Assomption qui le traverse donnent à Joliette une qualité de vie urbaine rare hors des grands centres. Cafés, terrasses, commerces et institutions de santé et d'éducation y sont concentrés.`,
      `Pôle de services pour toute la région, Joliette combine emplois, écoles, cégep et hôpital avec un coût de la vie attractif. La ville séduit autant les familles que ceux qui cherchent la vitalité d'un vrai centre-ville.`
    ],
    qualityIntro: "Culture, services et vie de centre-ville : Joliette offre tous les avantages d'une ville-centre au cœur de Lanaudière.",
    qualityCards: [
      { icon: 'commerce', title: 'Capitale culturelle', text: 'Festival de Lanaudière, Musée d\'art de Joliette, théâtre et galeries font rayonner la ville bien au-delà de la région.', value: 'Pôle culturel' },
      { icon: 'park', title: 'Rivière & parcs', text: "La rivière L'Assomption traverse la ville ; parcs urbains, patinoire et berges en font le décor du quotidien.", value: 'Cœur vert' },
      { icon: 'sport', title: 'Services complets', text: 'Hôpital, cégep, écoles et grands pôles commerciaux : Joliette est la ville-centre de tout Lanaudière.', value: 'Tout sur place' },
      { icon: 'transit', title: 'Transport & accès', text: "Autoroute 31, route 158 et service d'autocars relient Joliette à Montréal et à la région.", value: '~1 h Mtl' }
    ],
    parksIntro: "Joliette vit au rythme de la rivière L'Assomption et de son centre-ville animé, entre parcs, patinoire et places publiques.",
    parks: [
      { img: 'joliette-4.jpg', title: 'Vie de centre-ville à Joliette' },
      { img: 'joliette-5.jpg', title: "Patinage au parc, l'hiver" },
      { img: 'joliette-3.jpg', title: 'Vue aérienne de Joliette' }
    ],
    transportIntro: "Ville-centre de Lanaudière, Joliette rejoint Montréal par l'autoroute 31 et la 40, et dessert toute la région environnante.",
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '55 – 70 min', train: 'Autocar', dist: '75 km', access: 'A-31 / A-40' },
      { dest: 'Repentigny', car: '30 – 40 min', train: '—', dist: '45 km', access: 'A-31 / A-40' },
      { dest: "L'Assomption", car: '20 – 25 min', train: '—', dist: '25 km', access: 'R-343' },
      { dest: 'Lavaltrie', car: '20 – 25 min', train: '—', dist: '25 km', access: 'R-131 / A-40' },
      { dest: 'Terrebonne', car: '35 – 45 min', train: '—', dist: '50 km', access: 'A-31 / A-40' }
    ],
    taxKey: 'joliette',
    taxCompare: ['joliette', 'lassomption', 'saintjacques', 'lavaltrie'],
    ctaTagline: "Nos courtiers connaissent Joliette, son centre-ville et ses quartiers. Parlez à un expert local pour profiter de la capitale culturelle de Lanaudière.",
    seoKeywords: ['agence immobilière Joliette','courtier immobilier Joliette','maison à vendre Joliette','vivre à Joliette','guide Joliette 2026','Festival de Lanaudière','condo centre-ville Joliette']
  }

};
