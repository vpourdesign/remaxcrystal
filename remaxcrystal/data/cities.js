/* ============================================================
   CITIES DATA — Contenu narratif des 14 guides de villes
   Utilisé par build-cities.mjs pour générer guide-<slug>.html
   ============================================================ */
window.CITIES_DATA = {

  boisbriand: {
    slug: 'boisbriand',
    name: 'Boisbriand',
    nameEm: 'Boisbriand',
    region: 'Basses-Laurentides',
    brand: 'crystal',
    brandName: 'RE/MAX Crystal',
    brandTagline: 'Votre référence immobilière dans les Basses-Laurentides.',
    centrisRegionSlug: 'laurentides',
    heroImage: 'images/villes/boisbriand/Boisbriand_QC_2.jpg',
    heroAlt: 'Vue aérienne de Boisbriand',
    introImage: 'images/villes/boisbriand/MaisonBelanger_Boisbriand.jpg',
    introImageAlt: 'Maison Bélanger à Boisbriand',
    introCaptionTitle: 'Faubourg Boisbriand',
    introCaptionSub: 'Quartier mixte en plein essor',
    stats: [
      { value: '27 800+', label: 'Résidents' },
      { value: '40+', label: 'Parcs & espaces verts' },
      { value: '8', label: 'Écoles primaires' },
      { value: 'A-15 / A-640', label: 'Accès direct' }
    ],
    tagline: 'Le carrefour dynamique des Basses-Laurentides, entre commerces, sport et nature.',
    intro: [
      `Boisbriand occupe une position stratégique entre Montréal, Laval et les Laurentides, à la jonction des autoroutes 15 et 640. Cette accessibilité exceptionnelle attire les familles qui cherchent à concilier carrière, qualité de vie et services de proximité.`,
      `Avec le développement du Faubourg Boisbriand, la ville a redéfini sa centralité commerciale. Plus de 90 boutiques, restaurants et services s'y déploient autour d'une place urbaine animée, devenue un repère pour toute la Rive-Nord.`,
      `Boisbriand mise aussi sur le sport et la culture : aréna, complexe aquatique, sentiers récréatifs et programmation événementielle font de la ville un milieu de vie complet, dynamique et accessible.`
    ],
    qualityIntro: 'Boisbriand combine services urbains, infrastructures sportives de pointe et espaces verts pour offrir aux familles un cadre de vie équilibré.',
    qualityCards: [
      { icon: 'park', title: 'Parc régional du Domaine Vert', text: 'À deux pas de Boisbriand, 640 hectares pour ski de fond, randonnée, vélo et activités familiales.', value: '640 ha' },
      { icon: 'commerce', title: 'Faubourg Boisbriand', text: 'Le pôle commercial de référence des Basses-Laurentides. Plus de 90 enseignes, restos et services regroupés.', value: '90+ commerces' },
      { icon: 'sport', title: 'Sport & loisirs', text: 'Centre d\'excellence sportive, aréna, complexe aquatique municipal et sentiers piétonniers/cyclables.', value: 'Niveau pro' },
      { icon: 'transit', title: 'Accès et transport', text: 'Carrefour des autoroutes 15 et 640, lignes EXO et accès rapide au train de banlieue de Sainte-Thérèse.', value: '25 min Mtl' }
    ],
    parksIntro: 'Boisbriand propose un réseau de parcs urbains et un accès privilégié au Domaine Vert — un terrain de jeu naturel toute l\'année.',
    parks: [
      { img: 'parc.jpg', title: 'Parc régional du Domaine Vert', desc: 'Le poumon vert de la région — ski de fond, vélo, randonnée et camping familial.' },
      { img: 'parc_Blais.jpg', title: 'Parc Blais', desc: 'Jeux d\'eau, modules pour enfants et grands espaces gazonnés pour familles.' },
      { img: 'parc_Clairiere.jpg', title: 'Parc de la Clairière', desc: 'Aire de jeux ombragée et sentiers de promenade conviviaux.' },
      { img: 'parc_Desjardins.jpg', title: 'Parc Desjardins', desc: 'Terrains sportifs, espace pique-nique et installations communautaires.' },
      { img: 'parc_Parthenais.jpg', title: 'Parc Parthenais', desc: 'Un parc de quartier prisé pour ses sentiers boisés et son aire de jeux.' }
    ],
    natureExtraImg: 'Centrerousseau.jpg',
    natureExtraAlt: 'Centre Rousseau, Boisbriand',
    transportIntro: 'Boisbriand jouit d\'une accessibilité routière et collective optimale, au carrefour des grands axes de la Rive-Nord.',
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '30 – 45 min', train: '50 min', dist: '32 km', access: 'A-15 Sud' },
      { dest: 'Laval (Carrefour)', car: '10 – 20 min', train: '—', dist: '12 km', access: 'A-15' },
      { dest: 'Aéroport YUL', car: '30 – 40 min', train: '—', dist: '36 km', access: 'A-15 / A-40' },
      { dest: 'Saint-Jérôme', car: '20 min', train: '15 min', dist: '20 km', access: 'A-15 Nord' },
      { dest: 'Blainville', car: '8 – 12 min', train: '—', dist: '7 km', access: 'A-640' }
    ],
    taxKey: 'boisbriand',
    taxCompare: ['boisbriand', 'blainville', 'stetherese', 'rosemere'],
    ctaTagline: 'Nos courtiers connaissent Boisbriand quartier par quartier. Parlez à un expert local pour trouver votre prochaine maison.',
    seoKeywords: ['agence immobilière Boisbriand','courtier immobilier Boisbriand','maison à vendre Boisbriand','vivre à Boisbriand','guide Boisbriand 2026','condo Boisbriand','Faubourg Boisbriand']
  },

  boisdesfillions: {
    slug: 'boisdesfillions',
    name: 'Bois-des-Filion',
    nameEm: 'Bois-des-Filion',
    region: 'Basses-Laurentides',
    brand: 'crystal',
    brandName: 'RE/MAX Crystal',
    brandTagline: 'Votre référence immobilière dans les Basses-Laurentides.',
    centrisRegionSlug: 'laurentides',
    heroImage: 'images/villes/boisdesfillions/Image_DecouvrezBDF_1600x1000.jpg',
    heroAlt: 'Vue aérienne de Bois-des-Filion',
    introImage: 'images/villes/boisdesfillions/Image_HotelVille.jpg',
    introImageAlt: 'Hôtel de Ville de Bois-des-Filion',
    introCaptionTitle: 'Cœur villageois',
    introCaptionSub: 'Une petite ville à l\'échelle humaine',
    stats: [
      { value: '10 200+', label: 'Résidents' },
      { value: '15+', label: 'Parcs & espaces verts' },
      { value: '3', label: 'Écoles primaires' },
      { value: '30 min', label: 'Montréal' }
    ],
    tagline: 'Une ville compacte, conviviale et bien connectée, à l\'échelle humaine.',
    intro: [
      `Bois-des-Filion séduit par sa taille humaine et son ambiance villageoise. Niché entre la rivière des Mille Îles et les grands axes routiers, ce milieu de vie attire les familles qui cherchent tranquillité et proximité.`,
      `La ville investit dans la requalification de ses parcs et de ses berges. Les sentiers, jeux d'eau et installations familiales y sont entretenus avec soin — un cadre rare pour une municipalité de cette taille.`,
      `À deux pas de Laval et de l'autoroute 640, Bois-des-Filion offre l'équilibre parfait entre prix accessibles, services de proximité et accès rapide aux grandes destinations métropolitaines.`
    ],
    qualityIntro: 'Bois-des-Filion mise sur la convivialité, les espaces verts revitalisés et une connectivité optimale.',
    qualityCards: [
      { icon: 'park', title: 'Berges revitalisées', text: 'Accès aménagé à la rivière des Mille Îles, sentiers riverains et points de vue uniques.', value: 'Riveraine' },
      { icon: 'commerce', title: 'Services de proximité', text: 'Tous les services essentiels au cœur du village — épiceries, pharmacies, restos.', value: 'À pied' },
      { icon: 'sport', title: 'Parcs & loisirs', text: 'Réseau de parcs récents, jeux d\'eau, terrains sportifs et programmation municipale active.', value: '15+ parcs' },
      { icon: 'transit', title: 'Connexion routière', text: 'À la jonction de la 335 et de la 640. Accès direct à Laval, Terrebonne et Boisbriand.', value: '5 min A-640' }
    ],
    parksIntro: 'Le réseau de parcs de Bois-des-Filion s\'étire le long de la rivière des Mille Îles — un terrain de jeu nature étonnamment dense.',
    parks: [
      { img: 'parc1.jpg', title: 'Parc Bourbonnais', desc: 'Le grand parc familial avec jeux d\'eau, terrains sportifs et aire de pique-nique.' },
      { img: 'parc2.jpg', title: 'Parc des Patriotes', desc: 'Sentiers ombragés, espace gazonné et accès à la rivière des Mille Îles.' },
      { img: 'parc3.jpg', title: 'Parc Léo-Lemay', desc: 'Modules récents, terrain de soccer et zone de jeux pour tous âges.' },
      { img: 'parc4.jpg', title: 'Parc des Berges', desc: 'Promenade riveraine et accès à l\'eau pour kayak et pédalo.' },
      { img: 'parc5.jpg', title: 'Parc Filion', desc: 'Aire de jeux et terrains de pratique sportive au cœur du quartier.' }
    ],
    natureExtraImg: 'Image_Histoire_1500x800_01.jpg',
    natureExtraAlt: 'Bois-des-Filion historique',
    transportIntro: 'Bois-des-Filion bénéficie d\'un accès direct à la 640 et d\'un lien rapide avec Laval et l\'île de Montréal.',
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '30 – 40 min', train: '—', dist: '32 km', access: 'A-15 / A-640' },
      { dest: 'Laval (Carrefour)', car: '15 min', train: '—', dist: '13 km', access: 'A-19 / 335' },
      { dest: 'Terrebonne', car: '10 min', train: '—', dist: '8 km', access: 'A-640' },
      { dest: 'Aéroport YUL', car: '35 – 45 min', train: '—', dist: '38 km', access: 'A-15 / A-40' },
      { dest: 'Saint-Jérôme', car: '25 min', train: '—', dist: '25 km', access: 'A-15 Nord' }
    ],
    taxKey: 'boisdesfillions',
    taxCompare: ['boisdesfillions', 'rosemere', 'lorraine', 'stetherese'],
    ctaTagline: 'Nos courtiers connaissent Bois-des-Filion et ses quartiers. Trouvons ensemble votre prochaine adresse.',
    seoKeywords: ['agence immobilière Bois-des-Filion','courtier immobilier Bois-des-Filion','maison à vendre Bois-des-Filion','vivre à Bois-des-Filion','guide Bois-des-Filion 2026']
  },

  deuxmontagnes: {
    slug: 'deuxmontagnes',
    name: 'Deux-Montagnes',
    nameEm: 'Deux-Montagnes',
    region: 'Basses-Laurentides',
    brand: 'crystal',
    brandName: 'RE/MAX Crystal',
    brandTagline: 'Votre référence immobilière dans les Basses-Laurentides.',
    centrisRegionSlug: 'laurentides',
    heroImage: 'images/villes/deuxmontagnes/ville-deux-montagnes.webp',
    heroAlt: 'Vue aérienne de Deux-Montagnes',
    introImage: 'images/villes/deuxmontagnes/Hôtel_de_ville_Deux-Montagnes_2.jpg',
    introImageAlt: 'Hôtel de ville de Deux-Montagnes',
    introCaptionTitle: 'Bord du lac',
    introCaptionSub: 'Ambiance villégiature toute l\'année',
    stats: [
      { value: '18 600+', label: 'Résidents' },
      { value: '20+', label: 'Parcs & espaces verts' },
      { value: '4', label: 'Écoles primaires' },
      { value: 'REM', label: 'Gare REM directe' }
    ],
    tagline: 'Vivre au bord du lac des Deux Montagnes, à 30 min de Montréal grâce au REM.',
    intro: [
      `Deux-Montagnes combine l'ambiance bord-de-lac à une connectivité métropolitaine de pointe. La gare terminus du REM en fait l'une des villes les plus accessibles de la Rive-Nord, sans renoncer à un cadre de vie résidentiel paisible.`,
      `Les rues bordées d'arbres matures, les anciennes maisons de villégiature et les nouveaux développements riverains donnent à la ville un caractère unique — entre patrimoine et modernité.`,
      `Avec son accès direct à la plage municipale, ses quais publics et son parc linéaire, Deux-Montagnes attire les familles qui veulent vivre la villégiature au quotidien.`
    ],
    qualityIntro: 'Deux-Montagnes mise sur le REM, la proximité du lac et un cadre résidentiel patrimonial soigné.',
    qualityCards: [
      { icon: 'transit', title: 'REM (terminus)', text: 'Gare terminus du Réseau express métropolitain — 30 min jusqu\'au centre-ville de Montréal, sans bouchon.', value: '30 min Mtl' },
      { icon: 'park', title: 'Lac des Deux Montagnes', text: 'Accès direct au lac : plage municipale, quais publics, marina et parc linéaire de 6 km.', value: '6 km riverain' },
      { icon: 'commerce', title: 'Vie de quartier', text: 'Restos, cafés, boutiques locales et services concentrés autour du chemin Oka et du quartier de la gare.', value: 'À pied' },
      { icon: 'sport', title: 'Sports nautiques', text: 'Voile, planche à voile, kayak, paddle. La ville est un point d\'ancrage pour les activités nautiques.', value: 'Toute l\'année' }
    ],
    parksIntro: 'Le réseau de parcs de Deux-Montagnes longe le lac et tisse un tracé vert continu à travers la ville.',
    parks: [
      { img: 'parc1.jpg', title: 'Parc Olympia', desc: 'Le grand parc familial : aire de jeux, terrains sportifs et événements municipaux.' },
      { img: 'parc2.jpg', title: 'Parc Central', desc: 'Espace patrimonial bordé d\'arbres centenaires au cœur de la ville.' },
      { img: 'parc3.jpg', title: 'Parc des Récollets', desc: 'Accès au lac, aire de pique-nique et sentier riverain.' },
      { img: 'parc4.jpg', title: 'Parc Édifice Gagné', desc: 'Sentiers, modules et zone gazonnée pour familles.' },
      { img: 'parc5.jpg', title: 'Parc linéaire des berges', desc: 'Promenade de 6 km au bord du lac — incontournable.' }
    ],
    natureExtraImg: '_cole_Polyvalente_Deux-Montagnes.jpg',
    natureExtraAlt: 'École polyvalente Deux-Montagnes',
    transportIntro: 'La gare terminus du REM place Deux-Montagnes parmi les villes les mieux connectées à Montréal.',
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '35 – 50 min', train: '30 min (REM)', dist: '38 km', access: 'A-13 / A-40' },
      { dest: 'Laval (Carrefour)', car: '20 min', train: '20 min (REM)', dist: '18 km', access: 'A-13' },
      { dest: 'Aéroport YUL', car: '25 – 35 min', train: '—', dist: '28 km', access: 'A-13 / A-40' },
      { dest: 'Saint-Eustache', car: '8 min', train: '—', dist: '7 km', access: 'A-640' },
      { dest: 'Oka', car: '15 min', train: '—', dist: '12 km', access: 'Rte 344' }
    ],
    taxKey: 'deuxmontagnes',
    taxCompare: ['deuxmontagnes', 'stemarthe', 'pointecalumet', 'steustache'],
    ctaTagline: 'Nos courtiers connaissent Deux-Montagnes, ses berges et ses quartiers patrimoniaux. Parlons de votre projet.',
    seoKeywords: ['agence immobilière Deux-Montagnes','courtier immobilier Deux-Montagnes','maison à vendre Deux-Montagnes','vivre à Deux-Montagnes','REM Deux-Montagnes','guide Deux-Montagnes 2026']
  },

  lorraine: {
    slug: 'lorraine',
    name: 'Lorraine',
    nameEm: 'Lorraine',
    region: 'Basses-Laurentides',
    brand: 'crystal',
    brandName: 'RE/MAX Crystal',
    brandTagline: 'Votre référence immobilière dans les Basses-Laurentides.',
    centrisRegionSlug: 'laurentides',
    heroImage: 'images/villes/lorraine/lorraine1.jpg',
    heroAlt: 'Vue aérienne de Lorraine',
    introImage: 'images/villes/lorraine/lorraine2.jpg',
    introImageAlt: 'Quartier résidentiel de Lorraine',
    introCaptionTitle: 'Identité forestière',
    introCaptionSub: 'Une ville-jardin pensée comme un parc',
    stats: [
      { value: '9 800+', label: 'Résidents' },
      { value: '95 %', label: 'Couvert végétal' },
      { value: '2', label: 'Écoles primaires' },
      { value: 'Top 5', label: 'Villes prestigieuses QC' }
    ],
    tagline: 'Une ville-parc d\'exception, conçue comme un grand jardin résidentiel.',
    intro: [
      `Lorraine est unique au Québec. Conçue dans les années 1960 comme une ville-jardin, elle préserve un couvert forestier exceptionnel — chaque rue, chaque terrain, chaque sentier respire la nature.`,
      `Ce caractère résidentiel haut de gamme attire une population stable, fidèle et fortement engagée dans sa communauté. Les propriétés se transmettent souvent de génération en génération.`,
      `Avec son centre culturel, ses sentiers boisés et sa proximité de l'autoroute 640, Lorraine offre une qualité de vie rare — confidentielle, naturelle et résolument familiale.`
    ],
    qualityIntro: 'Lorraine se distingue par son urbanisme forestier, son caractère résidentiel exclusif et la qualité de ses installations.',
    qualityCards: [
      { icon: 'park', title: 'Ville-jardin', text: 'Plus de 95 % de couvert végétal. Chaque rue est bordée d\'arbres matures. Aucune zone industrielle.', value: '95 % vert' },
      { icon: 'commerce', title: 'Tranquillité résidentielle', text: 'Aucun feu de circulation. Réseau routier sinueux pensé pour ralentir la circulation locale.', value: 'Zone 30 km/h' },
      { icon: 'sport', title: 'Sentiers & loisirs', text: 'Centre culturel Lorraine, sentiers boisés, terrains sportifs et parc-école.', value: '10+ km sentiers' },
      { icon: 'transit', title: 'Accès Rive-Nord', text: 'Connexion directe à la 640. Train EXO accessible à Sainte-Thérèse en moins de 5 min.', value: '40 min Mtl' }
    ],
    parksIntro: 'À Lorraine, la nature pénètre chaque quartier. Les sentiers et parcs sont littéralement intégrés au tissu résidentiel.',
    parks: [
      { img: 'parc1.jpg', title: 'Parc du Grand-Côteau', desc: 'Sentiers boisés et terrains familiaux au cœur du quartier nord.' },
      { img: 'parc2.jpg', title: 'Parc équestre régional', desc: 'Vaste espace partagé avec Blainville — sentiers et activités équestres.' },
      { img: 'parc3.png', title: 'Parc des Cerfs', desc: 'Aire de jeux et zone boisée à l\'ambiance forestière préservée.' }
    ],
    natureExtraImg: 'share.jpg',
    natureExtraAlt: 'Architecture résidentielle de Lorraine',
    transportIntro: 'Lorraine est idéalement reliée à la Rive-Nord et à Montréal, malgré son caractère résidentiel discret.',
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '35 – 45 min', train: '50 min', dist: '34 km', access: 'A-15 / A-640' },
      { dest: 'Laval (Carrefour)', car: '18 min', train: '—', dist: '16 km', access: 'A-15' },
      { dest: 'Sainte-Thérèse (gare)', car: '5 min', train: 'Direct', dist: '4 km', access: 'A-640' },
      { dest: 'Aéroport YUL', car: '35 min', train: '—', dist: '38 km', access: 'A-15 / A-40' },
      { dest: 'Saint-Jérôme', car: '20 min', train: '—', dist: '22 km', access: 'A-15 Nord' }
    ],
    taxKey: 'lorraine',
    taxCompare: ['lorraine', 'rosemere', 'boisdesfillions', 'stetherese'],
    ctaTagline: 'Nos courtiers connaissent Lorraine — ses rues sinueuses, ses propriétés patrimoniales, son marché confidentiel. Parlons-en.',
    seoKeywords: ['agence immobilière Lorraine','courtier immobilier Lorraine','maison à vendre Lorraine','vivre à Lorraine','ville-jardin Lorraine','guide Lorraine 2026']
  },

  mirabel: {
    slug: 'mirabel',
    name: 'Mirabel',
    nameEm: 'Mirabel',
    region: 'Laurentides',
    brand: 'dici',
    brandName: 'RE/MAX D\'ici',
    brandTagline: 'Votre courtier au cœur des Laurentides.',
    centrisRegionSlug: 'laurentides',
    heroImage: 'images/villes/mirabel/Couverture_1620x675.jpg',
    heroAlt: 'Vue aérienne de Mirabel',
    introImage: 'images/villes/mirabel/Saint-Benoit_photo.jpg',
    introImageAlt: 'Secteur Saint-Benoît à Mirabel',
    introCaptionTitle: 'Secteurs ruraux',
    introCaptionSub: 'La plus grande ville en superficie au Québec',
    stats: [
      { value: '67 000+', label: 'Résidents' },
      { value: '485 km²', label: 'Superficie' },
      { value: '15+', label: 'Écoles primaires' },
      { value: 'A-15 / A-50', label: 'Accès direct' }
    ],
    tagline: 'La plus vaste ville du Québec : entre développement, agriculture et grands espaces.',
    intro: [
      `Mirabel est la plus grande ville en superficie au Québec — 485 km² qui regroupent secteurs urbains, zones agricoles, forêts et parcs industriels. Cette diversité géographique en fait une ville unique, où l'on peut choisir son style de vie.`,
      `Les secteurs Saint-Janvier, Saint-Augustin et Saint-Canut offrent des développements résidentiels modernes prisés par les jeunes familles. Saint-Benoît, Sainte-Scholastique et Saint-Hermas préservent un caractère rural et agricole.`,
      `Avec son accès direct aux autoroutes 15 et 50, ses pôles industriels stratégiques et son taux résidentiel compétitif, Mirabel attire chaque année les acheteurs qui recherchent valeur, espace et accessibilité.`
    ],
    qualityIntro: 'Mirabel offre la rare combinaison de neuf, d\'espace et de prix abordables — avec services modernes.',
    qualityCards: [
      { icon: 'park', title: 'Grands espaces', text: 'Forêts, terres agricoles, parcs régionaux et sentiers — Mirabel respire la nature à grande échelle.', value: '485 km²' },
      { icon: 'commerce', title: 'Développement résidentiel', text: 'De nouveaux quartiers à Saint-Janvier, Saint-Augustin et Saint-Canut. Choix de neuf accessible.', value: 'Neuf actif' },
      { icon: 'sport', title: 'Sport & loisirs', text: 'Aréna, bibliothèques, terrains sportifs et programmation municipale étoffée.', value: 'Réseau étendu' },
      { icon: 'transit', title: 'Connectivité', text: 'Carrefour des autoroutes 15 et 50. Accès rapide à Saint-Jérôme, Blainville et Laval.', value: '40 min Mtl' }
    ],
    parksIntro: 'Mirabel offre un patchwork de parcs urbains et de grands espaces régionaux à explorer en toute saison.',
    parks: [
      { img: 'parc1.jpg', title: 'Parc du Domaine Vert (nord)', desc: 'Continuité du Domaine Vert : sentiers, ski de fond, vélo et activités familiales.' },
      { img: 'parc2.jpg', title: 'Parc du Centre culturel', desc: 'Espace central animé, lieu d\'événements et de rassemblement.' },
      { img: 'parc3.jpg', title: 'Parc régional du Bois-de-Belle-Rivière', desc: 'Grand site nature à proximité — randonnée, vélo et observation.' },
      { img: 'parc4.jpg', title: 'Parc Saint-Augustin', desc: 'Aire familiale, modules et terrains sportifs au cœur du secteur.' },
      { img: 'parc5.jpg', title: 'Sentier des Patriotes', desc: 'Promenade historique reliant plusieurs secteurs ruraux.' }
    ],
    natureExtraImg: 'DVN_photo.jpg',
    natureExtraAlt: 'Domaine Vert Nord, Mirabel',
    transportIntro: 'Carrefour stratégique de la 15 et de la 50, Mirabel reste à moins d\'une heure de Montréal.',
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '45 – 60 min', train: '—', dist: '55 km', access: 'A-15 Sud' },
      { dest: 'Saint-Jérôme', car: '15 min', train: '—', dist: '14 km', access: 'A-15 Nord' },
      { dest: 'Blainville', car: '15 – 20 min', train: '—', dist: '15 km', access: 'A-15' },
      { dest: 'Aéroport YUL', car: '45 min', train: '—', dist: '50 km', access: 'A-15 / A-40' },
      { dest: 'Lachute', car: '25 min', train: '—', dist: '30 km', access: 'A-50' }
    ],
    taxKey: 'mirabel',
    taxCompare: ['mirabel', 'st-janvier', 'stesophie', 'blainville'],
    ctaTagline: 'Nos courtiers connaissent les secteurs de Mirabel — du développement neuf au charme rural. Parlons de votre projet.',
    seoKeywords: ['agence immobilière Mirabel','courtier immobilier Mirabel','maison à vendre Mirabel','vivre à Mirabel','guide Mirabel 2026','Saint-Augustin Mirabel','Saint-Canut']
  },

  oka: {
    slug: 'oka',
    name: 'Oka',
    nameEm: 'Oka',
    region: 'Basses-Laurentides',
    brand: 'crystal',
    brandName: 'RE/MAX Crystal',
    brandTagline: 'Votre référence immobilière dans les Basses-Laurentides.',
    centrisRegionSlug: 'laurentides',
    heroImage: 'images/villes/oka/2021-Loik-Monette-Oka-le-plus-beau-scaled.jpg',
    heroAlt: 'Vue d\'Oka et du lac des Deux Montagnes',
    introImage: 'images/villes/oka/Église_de_l\'Annonciation_d\'Oka_(cropped).jpg',
    introImageAlt: 'Église d\'Oka',
    introCaptionTitle: 'Patrimoine vivant',
    introCaptionSub: 'Entre lac, abbaye et parc national',
    stats: [
      { value: '5 300+', label: 'Résidents' },
      { value: 'Parc national', label: 'Oka à proximité' },
      { value: 'Lac', label: 'des Deux Montagnes' },
      { value: '45 min', label: 'Montréal' }
    ],
    tagline: 'Vivre entre le parc national d\'Oka, l\'abbaye et le lac des Deux Montagnes.',
    intro: [
      `Oka est un joyau patrimonial des Basses-Laurentides. Sa position privilégiée entre le parc national d'Oka, le lac des Deux Montagnes et l'abbaye cistercienne lui confère une identité unique au Québec.`,
      `Les rues riveraines, les anciennes maisons de villégiature et les vergers de pommes définissent l'âme du village. C'est l'endroit idéal pour ceux qui rêvent d'une vie au rythme des saisons, en bord d'eau.`,
      `La plage d'Oka, la Pure Lavande à proximité et l'accès direct au parc national en font une destination prisée — mais Oka reste avant tout un milieu de vie discret, recherché par les amoureux de nature.`
    ],
    qualityIntro: 'Oka offre une qualité de vie exceptionnelle, entre patrimoine, plein air et calme villageois.',
    qualityCards: [
      { icon: 'park', title: 'Parc national d\'Oka', text: 'Plage, sentiers, vélo, ski de fond, camping. Le parc s\'étend juste à la porte du village.', value: 'À la porte' },
      { icon: 'park', title: 'Lac des Deux Montagnes', text: 'Accès direct au lac, marina, sports nautiques et coucher de soleil légendaires.', value: 'Riveraine' },
      { icon: 'commerce', title: 'Patrimoine vivant', text: 'Abbaye cistercienne, vergers, fromageries, marché public. Une vie villageoise authentique.', value: 'Authentique' },
      { icon: 'transit', title: 'Accès via la 344', text: 'À 45 min de Montréal par la 344 et la 640. Tranquille mais pas isolé.', value: '45 min Mtl' }
    ],
    parksIntro: 'À Oka, parcs et nature se confondent. Le parc national d\'Oka définit le paysage et le rythme de vie.',
    parks: [
      { img: 'parc.jpg', title: 'Parc national d\'Oka', desc: 'Plage, sentiers de randonnée, vélo, camping et activités nautiques — un incontournable.' },
      { img: 'parc1.jpg', title: 'Plage municipale', desc: 'Accès au lac des Deux Montagnes pour la baignade et les sports nautiques.' },
      { img: 'parc2.jpg', title: 'Parc Optimiste', desc: 'Espace familial au cœur du village avec modules et terrains sportifs.' },
      { img: 'parc3.jpg', title: 'Sentier du Calvaire', desc: 'Sentier patrimonial menant aux croix du Calvaire — vue panoramique sur le lac.' },
      { img: 'parc4.jpg', title: 'Abbaye et vergers', desc: 'Sentiers ouverts au public dans l\'ancien domaine de l\'abbaye cistercienne.' }
    ],
    natureExtraImg: 'Plage_d\'Oka.jpg',
    natureExtraAlt: 'Plage d\'Oka',
    transportIntro: 'Oka est accessible par la route 344 et la 640 — discrète mais bien reliée à la Rive-Nord.',
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '45 – 55 min', train: '—', dist: '50 km', access: 'A-640 / Rte 344' },
      { dest: 'Saint-Eustache', car: '15 min', train: '—', dist: '14 km', access: 'Rte 344' },
      { dest: 'Deux-Montagnes (REM)', car: '15 min', train: '—', dist: '12 km', access: 'Rte 344' },
      { dest: 'Aéroport YUL', car: '40 min', train: '—', dist: '42 km', access: 'A-13 / A-40' },
      { dest: 'Mirabel', car: '30 min', train: '—', dist: '28 km', access: 'A-15' }
    ],
    taxKey: 'oka',
    taxCompare: ['oka', 'pointecalumet', 'steustache', 'deuxmontagnes'],
    ctaTagline: 'Nos courtiers connaissent Oka — son village, ses berges, son marché distinctif. Parlons-en.',
    seoKeywords: ['agence immobilière Oka','courtier immobilier Oka','maison à vendre Oka','vivre à Oka','parc national Oka','guide Oka 2026']
  },

  pointecalumet: {
    slug: 'pointecalumet',
    name: 'Pointe-Calumet',
    nameEm: 'Pointe-Calumet',
    region: 'Basses-Laurentides',
    brand: 'crystal',
    brandName: 'RE/MAX Crystal',
    brandTagline: 'Votre référence immobilière dans les Basses-Laurentides.',
    centrisRegionSlug: 'laurentides',
    heroImage: 'images/villes/pointecalumet/Digue_-_Sainte-Marthe-sur-le-Lac_-_Vue_aérienne_(1).jpg',
    heroAlt: 'Vue aérienne de Pointe-Calumet',
    introImage: 'images/villes/pointecalumet/super-aqua-club-pointe-calumet.webp',
    introImageAlt: 'Super Aqua Club, Pointe-Calumet',
    introCaptionTitle: 'Ambiance vacances',
    introCaptionSub: 'Une ville d\'eau, d\'été et de loisirs',
    stats: [
      { value: '6 600+', label: 'Résidents' },
      { value: 'Super', label: 'Aqua Club' },
      { value: 'Lac', label: 'des Deux Montagnes' },
      { value: '35 min', label: 'Montréal' }
    ],
    tagline: 'Une petite ville d\'eau, vivante et conviviale, en bord du lac des Deux Montagnes.',
    intro: [
      `Pointe-Calumet est une municipalité riveraine qui cultive son ambiance estivale. Connue pour le Super Aqua Club et ses accès au lac, elle attire les familles qui rêvent de pouvoir marcher jusqu'à la plage.`,
      `Les rues compactes, les chalets devenus résidences permanentes et les développements modernes coexistent — un mélange qui donne à la ville son caractère décontracté et accessible.`,
      `Avec la digue piétonnière de Sainte-Marthe à proximité et la 344 qui longe le lac, Pointe-Calumet offre une qualité de vie villégiature à un prix encore raisonnable.`
    ],
    qualityIntro: 'Pointe-Calumet, c\'est l\'esprit estival au quotidien, avec une vraie vie de quartier.',
    qualityCards: [
      { icon: 'park', title: 'Bord du lac', text: 'Accès au lac des Deux Montagnes, plages publiques et points d\'embarquement nautique.', value: 'Plage' },
      { icon: 'sport', title: 'Super Aqua Club', text: 'Le plus grand parc aquatique du Québec — un point d\'ancrage régional emblématique.', value: 'Régional' },
      { icon: 'commerce', title: 'Vie de village', text: 'Commerces de proximité, restos saisonniers et services essentiels en zone piétonne.', value: 'À pied' },
      { icon: 'transit', title: 'Accès rapide', text: 'À 5 min de la 640 et de Saint-Eustache. Connectivité à la rive-nord et à Montréal.', value: '35 min Mtl' }
    ],
    parksIntro: 'Pointe-Calumet offre un accès direct au lac et une série de petits parcs de quartier.',
    parks: [
      { img: 'parc.jpg', title: 'Parc Édouard-Lacroix', desc: 'Le grand parc municipal avec modules, terrains sportifs et aire de pique-nique.' },
      { img: 'parc2.jpg', title: 'Parc des Berges', desc: 'Accès au lac, sentiers et zone de détente riveraine.' }
    ],
    natureExtraImg: 'media.jpg',
    natureExtraAlt: 'Vue de Pointe-Calumet',
    transportIntro: 'Pointe-Calumet est reliée à la 344 et à 5 min de l\'autoroute 640.',
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '35 – 45 min', train: '—', dist: '40 km', access: 'A-640 / A-13' },
      { dest: 'Saint-Eustache', car: '8 min', train: '—', dist: '7 km', access: 'Rte 344' },
      { dest: 'Deux-Montagnes (REM)', car: '10 min', train: '—', dist: '8 km', access: 'Rte 344' },
      { dest: 'Oka', car: '15 min', train: '—', dist: '13 km', access: 'Rte 344' },
      { dest: 'Aéroport YUL', car: '35 min', train: '—', dist: '32 km', access: 'A-13' }
    ],
    taxKey: 'pointecalumet',
    taxCompare: ['pointecalumet', 'stemarthe', 'oka', 'deuxmontagnes'],
    ctaTagline: 'Nos courtiers connaissent Pointe-Calumet — ses rues, son lac, son ambiance. Parlons de votre projet.',
    seoKeywords: ['agence immobilière Pointe-Calumet','courtier immobilier Pointe-Calumet','maison à vendre Pointe-Calumet','vivre à Pointe-Calumet','guide Pointe-Calumet 2026']
  },

  rosemere: {
    slug: 'rosemere',
    name: 'Rosemère',
    nameEm: 'Rosemère',
    region: 'Basses-Laurentides',
    brand: 'crystal',
    brandName: 'RE/MAX Crystal',
    brandTagline: 'Votre référence immobilière dans les Basses-Laurentides.',
    centrisRegionSlug: 'laurentides',
    heroImage: 'images/villes/rosemere/rosemere1.jpg',
    heroAlt: 'Vue de Rosemère',
    introImage: 'images/villes/rosemere/bibliotheque-h-j-hemens-travaux-de-refection-bibliotheque-municipale-rosemere-133958531938523690.jpg',
    introImageAlt: 'Bibliothèque municipale de Rosemère',
    introCaptionTitle: 'Élégance résidentielle',
    introCaptionSub: 'Une ville prestigieuse aux Basses-Laurentides',
    stats: [
      { value: '14 500+', label: 'Résidents' },
      { value: '25+', label: 'Parcs & espaces verts' },
      { value: '4', label: 'Écoles' },
      { value: 'Top 5', label: 'Villes prestigieuses QC' }
    ],
    tagline: 'L\'élégance résidentielle aux Basses-Laurentides, entre fleurs, golf et rivière des Mille Îles.',
    intro: [
      `Rosemère est l'une des villes les plus prestigieuses des Basses-Laurentides. Reconnue pour son urbanisme soigné, son couvert forestier et ses propriétés haut de gamme, elle attire une clientèle exigeante depuis des décennies.`,
      `Le club de golf, les rues bordées d'arbres centenaires et les propriétés riveraines de la rivière des Mille Îles définissent l'identité de la ville. Chaque quartier respire le soin et le caractère.`,
      `Avec sa bibliothèque réputée, ses sentiers et ses écoles convoitées, Rosemère reste un milieu de vie familial premium — discret, raffiné et solidement ancré dans son histoire.`
    ],
    qualityIntro: 'Rosemère se distingue par son urbanisme arborescent, ses propriétés de prestige et un mode de vie résidentiel cossu.',
    qualityCards: [
      { icon: 'park', title: 'Couvert forestier', text: 'Une des villes les plus arborescentes du Québec. Rues bordées d\'érables matures, parcs intégrés.', value: 'Vert dense' },
      { icon: 'sport', title: 'Golf & loisirs', text: 'Club de golf Rosemère, sentiers riverains, terrains sportifs et programmation culturelle.', value: 'Club privé' },
      { icon: 'commerce', title: 'Quartiers de prestige', text: 'Riviera, Bourbonnière, Hautbois — chacun avec son caractère et ses propriétés signatures.', value: 'Premium' },
      { icon: 'transit', title: 'Connectivité', text: 'Gare EXO sur la ligne Saint-Jérôme. A-640 à proximité. 35 min de Montréal.', value: '35 min Mtl' }
    ],
    parksIntro: 'Le réseau de parcs de Rosemère longe la rivière des Mille Îles et tisse un cadre vert continu.',
    parks: [
      { img: 'parc-charbonneau-rosemere_actu.jpg', title: 'Parc Charbonneau', desc: 'Le grand parc riverain, sentiers et accès à la rivière des Mille Îles.' },
      { img: 'parc1.png', title: 'Parc Bourbonnière', desc: 'Espace familial intégré au quartier, modules et zone gazonnée.' },
      { img: 'parc2.jpg', title: 'Parc des Patriotes', desc: 'Aire de jeux et sentier ombragé prisé par les familles.' },
      { img: 'parc3.jpg', title: 'Parc Pierre-Péladeau', desc: 'Terrains sportifs et espace communautaire au cœur de la ville.' },
      { img: 'parc4.jpg', title: 'Parc des Sapins', desc: 'Zone boisée tranquille, idéale pour la marche et la nature.' }
    ],
    natureExtraImg: 'parc5.jpg',
    natureExtraAlt: 'Parc à Rosemère',
    transportIntro: 'Rosemère est branchée à la Rive-Nord par la 640 et par le train EXO, ligne Saint-Jérôme.',
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '35 – 45 min', train: '45 min', dist: '32 km', access: 'A-15 / A-640' },
      { dest: 'Laval (Carrefour)', car: '15 min', train: '—', dist: '13 km', access: 'A-15' },
      { dest: 'Sainte-Thérèse', car: '5 min', train: '5 min', dist: '4 km', access: 'A-640' },
      { dest: 'Aéroport YUL', car: '35 min', train: '—', dist: '38 km', access: 'A-15 / A-40' },
      { dest: 'Saint-Jérôme', car: '25 min', train: '25 min', dist: '24 km', access: 'A-15 Nord' }
    ],
    taxKey: 'rosemere',
    taxCompare: ['rosemere', 'lorraine', 'blainville', 'stetherese'],
    ctaTagline: 'Nos courtiers connaissent Rosemère et ses quartiers de prestige. Parlons de votre projet immobilier.',
    seoKeywords: ['agence immobilière Rosemère','courtier immobilier Rosemère','maison à vendre Rosemère','vivre à Rosemère','guide Rosemère 2026','propriété de prestige Rosemère']
  },

  'st-janvier': {
    slug: 'st-janvier',
    name: 'Saint-Janvier',
    nameEm: 'Saint-Janvier',
    fullName: 'Saint-Janvier (secteur de Mirabel)',
    region: 'Laurentides',
    brand: 'dici',
    brandName: 'RE/MAX D\'ici',
    brandTagline: 'Votre courtier au cœur des Laurentides.',
    centrisRegionSlug: 'laurentides',
    heroImage: 'images/villes/st-janvier/mirabel1.jpg',
    heroAlt: 'Vue de Saint-Janvier',
    introImage: 'images/villes/st-janvier/Jeux_deau_1080x650.jpg',
    introImageAlt: 'Jeux d\'eau, Saint-Janvier',
    introCaptionTitle: 'Pôle de vie de Mirabel',
    introCaptionSub: 'Le secteur le plus dynamique',
    stats: [
      { value: '20 000+', label: 'Résidents (secteur)' },
      { value: 'A-15', label: 'Accès direct' },
      { value: 'École sec.', label: 'Mirabel' },
      { value: '45 min', label: 'Montréal' }
    ],
    tagline: 'Le pôle vivant de Mirabel : développement résidentiel, services et accessibilité.',
    intro: [
      `Saint-Janvier est le secteur le plus dynamique de Mirabel. C'est ici que se concentrent les écoles, les commerces, l'aréna et la majorité des nouveaux projets résidentiels.`,
      `Les développements neufs y abondent — maisons familiales, jumelés, condos — à des prix encore compétitifs comparativement aux villes plus au sud. Le secteur attire jeunes familles et primo-acheteurs.`,
      `Avec son accès direct à l'autoroute 15 et sa proximité de Blainville et de Saint-Jérôme, Saint-Janvier offre l'équilibre rare entre prix, services et accessibilité.`
    ],
    qualityIntro: 'Saint-Janvier offre des quartiers neufs, des services modernes et une connectivité solide.',
    qualityCards: [
      { icon: 'park', title: 'Parcs récents', text: 'De nombreux parcs intégrés aux nouveaux quartiers — jeux d\'eau, modules, terrains sportifs.', value: 'Modernes' },
      { icon: 'commerce', title: 'Services concentrés', text: 'Le pôle commercial de Mirabel : épiceries, restos, pharmacies, services médicaux et bancaires.', value: 'Tout sur place' },
      { icon: 'sport', title: 'Aréna & loisirs', text: 'Aréna municipal, complexe sportif et programmation jeunesse étoffée.', value: 'Familial' },
      { icon: 'transit', title: 'Accès A-15', text: 'Sortie autoroutière directe. À 10 min de Blainville, 15 min de Saint-Jérôme.', value: '45 min Mtl' }
    ],
    parksIntro: 'Saint-Janvier mise sur des parcs récents et bien intégrés aux nouveaux développements.',
    parks: [
      { img: 'parc1.JPG', title: 'Parc du Domaine', desc: 'Grand parc familial avec modules récents et terrains sportifs.' },
      { img: 'parc2.webp', title: 'Parc des Cèdres', desc: 'Sentiers et aire de jeux dans un cadre boisé.' },
      { img: 'parc3.jpg', title: 'Parc Saint-Janvier', desc: 'Espace central, jeux d\'eau et événements de quartier.' },
      { img: 'parc4.jpg', title: 'Parc du Lac', desc: 'Petit plan d\'eau et zone détente.' }
    ],
    natureExtraImg: 'Jeux_deau_1080x650.jpg',
    natureExtraAlt: 'Jeux d\'eau à Saint-Janvier',
    transportIntro: 'Saint-Janvier est branché directement à l\'autoroute 15.',
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '45 – 55 min', train: '—', dist: '50 km', access: 'A-15 Sud' },
      { dest: 'Saint-Jérôme', car: '15 min', train: '—', dist: '12 km', access: 'A-15 Nord' },
      { dest: 'Blainville', car: '10 – 15 min', train: '—', dist: '12 km', access: 'A-15' },
      { dest: 'Mirabel (centre)', car: '5 min', train: '—', dist: '4 km', access: 'Local' },
      { dest: 'Aéroport YUL', car: '40 – 50 min', train: '—', dist: '48 km', access: 'A-15 / A-40' }
    ],
    taxKey: 'st-janvier',
    taxCompare: ['st-janvier', 'mirabel', 'stesophie', 'blainville'],
    ctaTagline: 'Nos courtiers connaissent Saint-Janvier et tous les développements en cours. Parlons-en.',
    seoKeywords: ['agence immobilière Saint-Janvier','courtier immobilier Saint-Janvier','maison à vendre Saint-Janvier','vivre à Saint-Janvier','guide Saint-Janvier 2026','Mirabel Saint-Janvier']
  },

  steannedesplaines: {
    slug: 'steannedesplaines',
    name: 'Sainte-Anne-des-Plaines',
    nameEm: 'Sainte-Anne-des-Plaines',
    region: 'Basses-Laurentides',
    brand: 'crystal',
    brandName: 'RE/MAX Crystal',
    brandTagline: 'Votre référence immobilière dans les Basses-Laurentides.',
    centrisRegionSlug: 'laurentides',
    heroImage: 'images/villes/steannedesplaines/territoire-eglise-champs-sadp.png',
    heroAlt: 'Vue aérienne de Sainte-Anne-des-Plaines',
    introImage: 'images/villes/steannedesplaines/hotel-de-ville-ete-2022.jpg',
    introImageAlt: 'Hôtel de ville de Sainte-Anne-des-Plaines',
    introCaptionTitle: 'Caractère rural',
    introCaptionSub: 'Une ville qui a gardé son âme',
    stats: [
      { value: '15 800+', label: 'Résidents' },
      { value: '20+', label: 'Parcs & espaces verts' },
      { value: '3', label: 'Écoles primaires' },
      { value: 'A-640', label: 'Accès rapide' }
    ],
    tagline: 'Un caractère rural préservé, à 30 min de Montréal et de Laval.',
    intro: [
      `Sainte-Anne-des-Plaines a su préserver son âme rurale tout en se développant. Ses champs, vergers et zones agricoles font partie intégrante du paysage municipal.`,
      `Le noyau villageois autour de l'église et de la rue Principale conserve un caractère patrimonial fort. Les nouveaux quartiers s'intègrent dans ce tissu sans le dénaturer.`,
      `Avec son accès rapide à la 640 et à Terrebonne, la ville attire les acheteurs qui veulent l'espace, le calme et la proximité métropolitaine — tout en gardant un budget raisonnable.`
    ],
    qualityIntro: 'Sainte-Anne-des-Plaines, c\'est l\'équilibre rare entre caractère rural et services modernes.',
    qualityCards: [
      { icon: 'park', title: 'Espaces ruraux', text: 'Vergers, champs, sentiers et zones boisées. La nature fait partie du quotidien.', value: 'Vaste' },
      { icon: 'commerce', title: 'Vie villageoise', text: 'Centre-ville patrimonial, commerces de proximité et marché public saisonnier.', value: 'À pied' },
      { icon: 'sport', title: 'Sports & loisirs', text: 'Aréna, complexe sportif, sentiers cyclables et programmation jeunesse active.', value: 'Familial' },
      { icon: 'transit', title: 'Accès A-640', text: 'À 10 min de Terrebonne, 30 min de Laval et de Montréal par la 640.', value: '30 min Mtl' }
    ],
    parksIntro: 'Le réseau de parcs de Sainte-Anne-des-Plaines mêle aires familiales et grands espaces ruraux.',
    parks: [
      { img: 'parc1.jpg', title: 'Parc du Centenaire', desc: 'Le grand parc familial : jeux d\'eau, terrains sportifs et événements municipaux.' },
      { img: 'parc2.jpg', title: 'Parc des Patriotes', desc: 'Sentiers boisés et zone gazonnée prisée par les familles.' },
      { img: 'parc3.jpg', title: 'Parc Bonneville', desc: 'Aire de jeux et terrain de soccer au cœur du quartier.' },
      { img: 'parc4.jpg', title: 'Parc des Sapins', desc: 'Zone forestière préservée pour la marche et la détente.' },
      { img: 'parc5.jpg', title: 'Parc rural', desc: 'Espace ouvert près des terres agricoles — pique-nique et observation.' }
    ],
    natureExtraImg: 'Ancien_couvent_de_Sainte-Anne-des-Plaines_03.JPG',
    natureExtraAlt: 'Ancien couvent de Sainte-Anne-des-Plaines',
    transportIntro: 'Sainte-Anne-des-Plaines est branchée à la 640 — accès rapide à Terrebonne, Laval et Montréal.',
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '35 – 45 min', train: '—', dist: '38 km', access: 'A-640 / A-15' },
      { dest: 'Terrebonne', car: '10 min', train: '—', dist: '10 km', access: 'A-640' },
      { dest: 'Laval', car: '20 min', train: '—', dist: '20 km', access: 'A-640' },
      { dest: 'Blainville', car: '15 min', train: '—', dist: '12 km', access: 'A-640' },
      { dest: 'Aéroport YUL', car: '40 min', train: '—', dist: '42 km', access: 'A-15 / A-40' }
    ],
    taxKey: 'steannedesplaines',
    taxCompare: ['steannedesplaines', 'blainville', 'boisbriand', 'stetherese'],
    ctaTagline: 'Nos courtiers connaissent Sainte-Anne-des-Plaines — son village, ses champs, ses nouveaux quartiers. Parlons-en.',
    seoKeywords: ['agence immobilière Sainte-Anne-des-Plaines','courtier immobilier Sainte-Anne-des-Plaines','maison à vendre Sainte-Anne-des-Plaines','vivre à Sainte-Anne-des-Plaines','guide Sainte-Anne-des-Plaines 2026']
  },

  stemarthe: {
    slug: 'stemarthe',
    name: 'Sainte-Marthe-sur-le-Lac',
    nameEm: 'Sainte-Marthe-sur-le-Lac',
    region: 'Basses-Laurentides',
    brand: 'crystal',
    brandName: 'RE/MAX Crystal',
    brandTagline: 'Votre référence immobilière dans les Basses-Laurentides.',
    centrisRegionSlug: 'laurentides',
    heroImage: 'images/villes/stemarthe/Sainte-Marthe-sur-le-Lac_-_Vue_a_rienne__1_.jpg',
    heroAlt: 'Vue aérienne de Sainte-Marthe-sur-le-Lac',
    introImage: 'images/villes/stemarthe/Digue_-_Sainte-Marthe-sur-le-Lac_-_Vue_a_rienne__1_.jpg',
    introImageAlt: 'Digue de Sainte-Marthe-sur-le-Lac',
    introCaptionTitle: 'Ville en pleine croissance',
    introCaptionSub: 'Bordée par la nouvelle digue',
    stats: [
      { value: '21 800+', label: 'Résidents' },
      { value: 'Digue', label: '7 km riverains' },
      { value: 'REM', label: 'à proximité' },
      { value: '35 min', label: 'Montréal' }
    ],
    tagline: 'Une ville en pleine transformation, au bord du lac et bientôt branchée au REM.',
    intro: [
      `Sainte-Marthe-sur-le-Lac connaît l'une des croissances démographiques les plus fortes des Basses-Laurentides. Sa position riveraine sur le lac des Deux Montagnes et la nouvelle digue piétonne en font une destination prisée.`,
      `La ville a investi massivement dans la requalification de ses berges depuis 2019. Le résultat : un parcours piéton-cycliste de plus de 7 km le long du lac, devenu un repère pour toute la région.`,
      `Avec la proximité de la station du REM (Deux-Montagnes), l'accès à l'autoroute 640 et un marché résidentiel actif, Sainte-Marthe attire jeunes familles et acheteurs en quête d'air et de lumière.`
    ],
    qualityIntro: 'Sainte-Marthe combine bord du lac, nouvelle digue, parcs récents et marché résidentiel dynamique.',
    qualityCards: [
      { icon: 'park', title: 'Digue & berges', text: 'Plus de 7 km de promenade piétonne et cyclable le long du lac. Le nouveau cœur de la ville.', value: '7 km' },
      { icon: 'park', title: 'Lac des Deux Montagnes', text: 'Plages, marina et points d\'accès nautiques à proximité directe des quartiers résidentiels.', value: 'Riveraine' },
      { icon: 'commerce', title: 'Services modernes', text: 'Centres commerciaux, restos, services médicaux et écoles récentes ou agrandies.', value: 'Modernes' },
      { icon: 'transit', title: 'REM proche', text: 'Gare REM de Deux-Montagnes à 10 min. Accès rapide à Montréal sans voiture.', value: '35 min Mtl' }
    ],
    parksIntro: 'Sainte-Marthe-sur-le-Lac mise sur ses berges et sur un réseau de parcs intégrés aux quartiers.',
    parks: [
      { img: 'parc1.jpg', title: 'Promenade de la Digue', desc: 'Parcours phare de 7 km au bord du lac — piéton, cycliste, panoramique.' },
      { img: 'parc2.jpg', title: 'Parc Riviera', desc: 'Aire familiale au cœur du quartier riverain.' },
      { img: 'parc3.jpg', title: 'Parc des Anges', desc: 'Modules récents, terrains sportifs et zone de détente.' },
      { img: 'parc4.jpg', title: 'Parc Belisle', desc: 'Espace ombragé et aire de jeux pour familles.' },
      { img: 'parc5.jpg', title: 'Parc des Voiles', desc: 'Accès direct au lac, point d\'embarquement nautique.' }
    ],
    natureExtraImg: 'Lac_des_Deux_Montagnes_-_Sainte-Marthe-sur-le-Lac.jpg',
    natureExtraAlt: 'Lac des Deux Montagnes',
    transportIntro: 'Sainte-Marthe est branchée à la 640 et à la gare REM voisine de Deux-Montagnes.',
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '35 – 45 min', train: '30 min (REM)', dist: '36 km', access: 'A-640 / REM' },
      { dest: 'Saint-Eustache', car: '8 min', train: '—', dist: '7 km', access: 'A-640' },
      { dest: 'Deux-Montagnes (REM)', car: '10 min', train: '—', dist: '8 km', access: 'Rte 344' },
      { dest: 'Aéroport YUL', car: '30 min', train: '—', dist: '32 km', access: 'A-13' },
      { dest: 'Oka', car: '15 min', train: '—', dist: '13 km', access: 'Rte 344' }
    ],
    taxKey: 'stemarthe',
    taxCompare: ['stemarthe', 'deuxmontagnes', 'pointecalumet', 'steustache'],
    ctaTagline: 'Nos courtiers connaissent Sainte-Marthe-sur-le-Lac, ses berges et ses développements récents. Parlons de votre projet.',
    seoKeywords: ['agence immobilière Sainte-Marthe-sur-le-Lac','courtier immobilier Sainte-Marthe-sur-le-Lac','maison à vendre Sainte-Marthe-sur-le-Lac','vivre à Sainte-Marthe-sur-le-Lac','digue Sainte-Marthe','guide Sainte-Marthe 2026']
  },

  stesophie: {
    slug: 'stesophie',
    name: 'Sainte-Sophie',
    nameEm: 'Sainte-Sophie',
    region: 'Laurentides',
    brand: 'dici',
    brandName: 'RE/MAX D\'ici',
    brandTagline: 'Votre courtier au cœur des Laurentides.',
    centrisRegionSlug: 'laurentides',
    heroImage: 'images/villes/stesophie/Sainte-Sophie.jpg',
    heroAlt: 'Vue de Sainte-Sophie',
    introImage: 'images/villes/stesophie/Église_de_Sainte-Sophie,_Laurentides.jpg',
    introImageAlt: 'Église de Sainte-Sophie',
    introCaptionTitle: 'Nature et patrimoine',
    introCaptionSub: '',
    stats: [
      { value: '17 200+', label: 'Résidents' },
      { value: '128 km²', label: 'Superficie' },
      { value: 'Forêts', label: 'et lacs' },
      { value: '55 min', label: 'Montréal' }
    ],
    tagline: 'Espaces verts, lacs et développements neufs au nord des Laurentides.',
    intro: [
      `Sainte-Sophie est l'une des municipalités les plus étendues des Laurentides. Forêts, lacs et terrains résidentiels y cohabitent — un milieu de vie pensé pour ceux qui cherchent l'espace.`,
      `La ville connaît une croissance soutenue depuis une décennie. Les nouveaux développements attirent des jeunes familles qui veulent profiter de la nature sans s'éloigner trop des grands axes.`,
      `Avec son accès à la 158, à la 117 et à proximité immédiate de Saint-Jérôme, Sainte-Sophie offre l'équilibre entre village, nature et services régionaux.`
    ],
    qualityIntro: 'Sainte-Sophie offre l\'espace, les lacs et un marché résidentiel encore très accessible.',
    qualityCards: [
      { icon: 'park', title: 'Forêts et lacs', text: 'De nombreux plans d\'eau, sentiers et zones boisées intégrés aux quartiers résidentiels.', value: 'Multiples' },
      { icon: 'commerce', title: 'Services à proximité', text: 'Tous les services régionaux à Saint-Jérôme. Commerces de proximité au cœur de la ville.', value: '10 min' },
      { icon: 'sport', title: 'Plein air', text: 'Sentiers récréatifs, vélo, motoneige, pêche. Le quotidien est tourné vers la nature.', value: 'Toute l\'année' },
      { icon: 'transit', title: 'Accès routier', text: 'Connexion à la 158 et à la 117. Saint-Jérôme à 10 min, Mirabel à 15 min.', value: '55 min Mtl' }
    ],
    parksIntro: 'Le territoire de Sainte-Sophie offre un mélange unique de parcs municipaux et de grands espaces naturels.',
    parks: [
      { img: 'parc1.jpg', title: 'Parc municipal', desc: 'Le grand parc familial : modules, terrains sportifs, espace événementiel.' },
      { img: 'parc2.jpg', title: 'Sentier des Lacs', desc: 'Réseau pédestre intégré aux secteurs résidentiels nord.' },
      { img: 'parc3.jpg', title: 'Parc des Pins', desc: 'Aire de jeux familiale et zone gazonnée.' },
      { img: 'parc4.jpg', title: 'Parc rural', desc: 'Grand espace ouvert près des forêts municipales.' }
    ],
    natureExtraImg: 'img_0debca237a889d51fcb751c07c1ade98.png',
    natureExtraAlt: 'Paysage de Sainte-Sophie',
    transportIntro: 'Sainte-Sophie est connectée à la 158 et à la 117, avec Saint-Jérôme à proximité immédiate.',
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '55 – 70 min', train: '—', dist: '60 km', access: 'A-15 Sud' },
      { dest: 'Saint-Jérôme', car: '10 min', train: '—', dist: '8 km', access: 'Rte 158' },
      { dest: 'Mirabel (Saint-Janvier)', car: '15 min', train: '—', dist: '14 km', access: 'A-15' },
      { dest: 'Blainville', car: '25 min', train: '—', dist: '22 km', access: 'A-15' },
      { dest: 'Mont-Tremblant', car: '1h00', train: '—', dist: '85 km', access: 'A-15 / R-117' }
    ],
    taxKey: 'stesophie',
    taxCompare: ['stesophie', 'mirabel', 'st-janvier', 'steannedesplaines'],
    ctaTagline: 'Nos courtiers connaissent Sainte-Sophie — ses lacs, ses forêts, ses nouveaux quartiers. Parlons-en.',
    seoKeywords: ['agence immobilière Sainte-Sophie','courtier immobilier Sainte-Sophie','maison à vendre Sainte-Sophie','vivre à Sainte-Sophie','guide Sainte-Sophie 2026']
  },

  stetherese: {
    slug: 'stetherese',
    name: 'Sainte-Thérèse',
    nameEm: 'Sainte-Thérèse',
    region: 'Basses-Laurentides',
    brand: 'crystal',
    brandName: 'RE/MAX Crystal',
    brandTagline: 'Votre référence immobilière dans les Basses-Laurentides.',
    centrisRegionSlug: 'laurentides',
    heroImage: 'images/villes/stetherese/Village-VST-d34f2a1762ebdc1f8a3c032e4f48b60e.jpg',
    heroAlt: 'Vieux-Sainte-Thérèse',
    introImage: 'images/villes/stetherese/Horloge_entete-bf8e7db1792a5a844cfb09ac8d031852.jpg',
    introImageAlt: 'Tour de l\'horloge, Sainte-Thérèse',
    introCaptionTitle: 'Vieux-Sainte-Thérèse',
    introCaptionSub: 'Cœur historique et culturel',
    stats: [
      { value: '27 100+', label: 'Résidents' },
      { value: 'EXO', label: 'Gare de train' },
      { value: '6+', label: 'Écoles' },
      { value: '30 min', label: 'Montréal' }
    ],
    tagline: 'Un cœur historique et culturel vibrant, parfaitement connecté à Montréal.',
    intro: [
      `Sainte-Thérèse est le pôle culturel des Basses-Laurentides. Le Vieux-Sainte-Thérèse, la Place du Village et le Cégep Lionel-Groulx en font une ville à la fois patrimoniale, jeune et animée.`,
      `Sa gare de train EXO est l'un des grands atouts de la ville : 30 minutes jusqu'au centre-ville de Montréal, sans bouchon. C'est rare et précieux sur la Rive-Nord.`,
      `Le mélange de propriétés patrimoniales, de condos modernes et de quartiers familiaux donne à Sainte-Thérèse un caractère unique — vivant, accessible et solidement ancré dans son histoire.`
    ],
    qualityIntro: 'Sainte-Thérèse offre la rare combinaison de patrimoine, culture, transport en commun et vie urbaine de quartier.',
    qualityCards: [
      { icon: 'park', title: 'Vieux-Sainte-Thérèse', text: 'Cœur patrimonial vivant : Place du Village, terrasses, boutiques, programmation culturelle.', value: 'Marche' },
      { icon: 'transit', title: 'Train EXO', text: 'Gare sur la ligne Saint-Jérôme — 30 min jusqu\'au centre-ville de Montréal.', value: '30 min Mtl' },
      { icon: 'commerce', title: 'Vie urbaine', text: 'Restos, cafés, théâtres, cinémas, bibliothèque moderne. La culture est partout.', value: 'Urbaine' },
      { icon: 'sport', title: 'Cégep & jeunesse', text: 'Cégep Lionel-Groulx, complexes sportifs et programmation étudiante dynamique.', value: 'Animée' }
    ],
    parksIntro: 'Sainte-Thérèse propose un réseau de parcs urbains et de squares qui structurent les quartiers patrimoniaux.',
    parks: [
      { img: 'parc1.jpg', title: 'Parc Lionel-Bertrand', desc: 'Le grand parc familial : modules, terrains sportifs et événements.' },
      { img: 'parc2.jpg', title: 'Parc Richelieu', desc: 'Aire de jeux et zone gazonnée intégrée au quartier résidentiel.' },
      { img: 'parc3.jpg', title: 'Parc de la Gare', desc: 'Espace urbain animé près de la station EXO.' },
      { img: 'parc4.jpg', title: 'Parc Ducharme', desc: 'Sentiers ombragés et aire de pique-nique familiale.' },
      { img: 'parc5.jpg', title: 'Place du Village', desc: 'Le cœur patrimonial de la ville — événements, marché public et animation.' }
    ],
    natureExtraImg: 'showcase-map-cta.jpg',
    natureExtraAlt: 'Sainte-Thérèse — quartier patrimonial',
    transportIntro: 'Sainte-Thérèse est l\'une des villes les mieux desservies par le transport collectif sur la Rive-Nord.',
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '30 – 40 min', train: '30 min', dist: '30 km', access: 'A-15 / A-640' },
      { dest: 'Laval (Carrefour)', car: '15 min', train: '—', dist: '13 km', access: 'A-15' },
      { dest: 'Blainville', car: '5 min', train: '5 min', dist: '5 km', access: 'A-640' },
      { dest: 'Saint-Jérôme', car: '20 min', train: '20 min', dist: '20 km', access: 'A-15 Nord' },
      { dest: 'Aéroport YUL', car: '30 min', train: '—', dist: '34 km', access: 'A-15 / A-40' }
    ],
    taxKey: 'stetherese',
    taxCompare: ['stetherese', 'blainville', 'rosemere', 'boisbriand'],
    ctaTagline: 'Nos courtiers connaissent Sainte-Thérèse, son Vieux-Village et ses quartiers patrimoniaux. Parlons-en.',
    seoKeywords: ['agence immobilière Sainte-Thérèse','courtier immobilier Sainte-Thérèse','maison à vendre Sainte-Thérèse','vivre à Sainte-Thérèse','Vieux-Sainte-Thérèse','guide Sainte-Thérèse 2026']
  },

  steustache: {
    slug: 'steustache',
    name: 'Saint-Eustache',
    nameEm: 'Saint-Eustache',
    region: 'Basses-Laurentides',
    brand: 'crystal',
    brandName: 'RE/MAX Crystal',
    brandTagline: 'Votre référence immobilière dans les Basses-Laurentides.',
    centrisRegionSlug: 'laurentides',
    heroImage: 'images/villes/steustache/Saint-Eustache_-_Vue_aérienne_(2).jpg',
    heroAlt: 'Vue aérienne de Saint-Eustache',
    introImage: 'images/villes/steustache/Mairie_de_Saint-Eustache_3.jpg',
    introImageAlt: 'Mairie de Saint-Eustache',
    introCaptionTitle: 'Cœur du nord-ouest',
    introCaptionSub: 'Pôle régional historique',
    stats: [
      { value: '46 200+', label: 'Résidents' },
      { value: 'Patriotes', label: 'Patrimoine 1837' },
      { value: '12+', label: 'Écoles' },
      { value: '30 min', label: 'Montréal' }
    ],
    tagline: 'Pôle régional du nord-ouest, riche d\'histoire, de services et de nature.',
    intro: [
      `Saint-Eustache est le pôle régional du nord-ouest de Montréal. Avec plus de 46 000 résidents, elle combine la vie urbaine, le patrimoine historique et la proximité du lac des Deux Montagnes.`,
      `La bataille des Patriotes de 1837 marque encore aujourd'hui l'identité de la ville. Le Vieux-Saint-Eustache, l'église patrimoniale et le monument des Patriotes forment un cœur historique vivant et fréquenté.`,
      `Avec son accès direct à l'autoroute 13, ses zones commerciales (Plaza Saint-Eustache, Carrefour) et ses nombreux parcs, la ville offre tous les services d'une grande agglomération à 30 min de Montréal.`
    ],
    qualityIntro: 'Saint-Eustache offre l\'éventail complet d\'une ville régionale : services, patrimoine, nature et accès rapide.',
    qualityCards: [
      { icon: 'park', title: 'Patrimoine vivant', text: 'Vieux-Saint-Eustache, église patrimoniale, monument des Patriotes. Une ville qui assume son histoire.', value: '1837' },
      { icon: 'commerce', title: 'Pôle commercial', text: 'Plaza Saint-Eustache, Carrefour, restos et services médicaux régionaux complets.', value: 'Régional' },
      { icon: 'sport', title: 'Sports & loisirs', text: 'Aréna, complexe aquatique, théâtre, bibliothèque moderne. Programmation très riche.', value: 'Multiple' },
      { icon: 'transit', title: 'A-13 direct', text: 'Connexion directe à l\'autoroute 13. 30 min de Montréal, aéroport YUL en 25 min.', value: '30 min Mtl' }
    ],
    parksIntro: 'Saint-Eustache propose un grand réseau de parcs — du parc rivière au sentier patriote.',
    parks: [
      { img: 'parc1.jpg', title: 'Parc de la Rivière du Chêne', desc: 'Le grand parc nature : sentiers, ponts, observation de la faune.' },
      { img: 'parc2.jpg', title: 'Parc Lavallée', desc: 'Aire familiale centrale avec modules et terrains sportifs.' },
      { img: 'parc3.jpg', title: 'Parc des Patriotes', desc: 'Espace patrimonial relié à la bataille de 1837.' }
    ],
    natureExtraImg: 'Saint-Eustache-Laurentides-Vv-4.jpg.webp',
    natureExtraAlt: 'Vue urbaine de Saint-Eustache',
    transportIntro: 'Saint-Eustache jouit d\'une accessibilité optimale : A-13, A-640 et proximité du REM (Deux-Montagnes).',
    transportTable: [
      { dest: 'Centre-ville de Montréal', car: '30 – 40 min', train: '40 min (REM via DM)', dist: '32 km', access: 'A-13 / A-40' },
      { dest: 'Aéroport YUL', car: '25 min', train: '—', dist: '26 km', access: 'A-13' },
      { dest: 'Laval (Carrefour)', car: '15 min', train: '—', dist: '14 km', access: 'A-640' },
      { dest: 'Deux-Montagnes (REM)', car: '8 min', train: '—', dist: '7 km', access: 'A-640' },
      { dest: 'Mirabel', car: '20 min', train: '—', dist: '20 km', access: 'A-13 / A-50' }
    ],
    taxKey: 'steustache',
    taxCompare: ['steustache', 'deuxmontagnes', 'boisbriand', 'stemarthe'],
    ctaTagline: 'Nos courtiers connaissent Saint-Eustache — son Vieux-Village, ses quartiers, ses opportunités. Parlons-en.',
    seoKeywords: ['agence immobilière Saint-Eustache','courtier immobilier Saint-Eustache','maison à vendre Saint-Eustache','vivre à Saint-Eustache','Vieux-Saint-Eustache','guide Saint-Eustache 2026']
  }

};
