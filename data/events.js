/* ============================================================
   CITY EVENTS — Source unique pour les guides de villes
   ------------------------------------------------------------
   Mise à jour AUTOMATIQUE : voir data/EVENTS-UPDATE.md
   (agent hebdomadaire qui lit les calendriers municipaux).

   Schéma par événement :
     day      : jour affiché dans la pastille (string)
     month    : mois affiché, abrégé FR ("Juin", "Juil", "Déc")
     category : étiquette ("Festival", "Culture", "Sport"…)
     title    : nom de l'événement
     desc     : 1-2 phrases
     sortDate : ISO, sert au tri ("2026-06-13")
     expires  : ISO, dernier jour de validité — l'événement
                disparaît automatiquement après cette date
     url      : lien officiel (optionnel)

   Le renderer (events-render.js) filtre les événements expirés,
   trie par sortDate et affiche les 6 prochains.
   ============================================================ */

window.CITY_EVENTS = {
  meta: {
    updated: "2026-06-15",
    source: "Sites municipaux officiels"
  },

  cities: {
    blainville: [
      {
        day: "28", month: "Juin",
        category: "Culture",
        title: "Exposition — Symphonie de couleurs et de lumière",
        desc: "Les œuvres de Suzanne Voisard à la salle François-Cantin de la bibliothèque Paul-Mercier. Selon l'horaire de la bibliothèque.",
        sortDate: "2026-05-09", expires: "2026-06-28",
        url: "https://blainville.ca/evenements/exposition-symphonie-de-couleurs-et-de-lumiere-de-suzanne-voisard"
      },
      {
        day: "11", month: "Oct",
        category: "Histoire",
        title: "Exposition — Un village et ses obus : le Plan Bouchard",
        desc: "L'histoire militaire de Blainville durant la Seconde Guerre mondiale retracée au Micromusée du Plan Bouchard, les week-ends de 13 h à 16 h.",
        sortDate: "2026-05-16", expires: "2026-10-11",
        url: "https://blainville.ca/evenements/exposition-un-village-et-ses-obus-le-plan-bouchard-1941-1945"
      },
      {
        day: "30", month: "Août",
        category: "Culture",
        title: "Exposition — Ressemble à personne",
        desc: "Exposition jeunesse en art contemporain au Centre d'exposition de Blainville, avec ateliers créatifs libres (dessin et collage) jusqu'au 30 août.",
        sortDate: "2026-06-10", expires: "2026-08-30",
        url: "https://blainville.ca/evenements/exposition-ressemble-personne-une-expo-jeunesse-en-art-actuel"
      },
      {
        day: "10", month: "Sept",
        category: "Culture",
        title: "Une journée, une ville, un spectacle",
        desc: "Plus de 50 activités, spectacles et événements artistiques gratuits dans les parcs et places publiques de Blainville et des villes de la MRC Thérèse-De Blainville.",
        sortDate: "2026-06-26", expires: "2026-09-10",
        url: "https://blainville.ca/evenements/"
      },
      {
        day: "10", month: "Sept",
        category: "Marché",
        title: "Marché public de Blainville",
        desc: "Chaque jeudi de 15 h à 19 h au stationnement La Zone (1020, rue de la Mairie) : fruits et légumes de saison, pâtisseries, produits locaux et artisanat.",
        sortDate: "2026-07-09", expires: "2026-09-10",
        url: "https://blainville.ca/actualites/marche-public-votre-rendez-vous-estival-ne-pas-manquer-blainville-1"
      },
      {
        day: "22", month: "Août",
        category: "Festival",
        title: "Blainville en fête — 39e édition",
        desc: "Grande fête communautaire gratuite au Parc équestre avec Matt Lang en soirée, animation familiale, jeux gonflables, leçon de line dance et spectacle laser.",
        sortDate: "2026-08-22", expires: "2026-08-22",
        url: "https://blainville.ca/evenements/blainville-en-fete"
      },
      {
        day: "25", month: "Oct",
        category: "Culture",
        title: "Spectacle jeunesse — Les (in)séparables",
        desc: "Spectacle de théâtre jeunesse présenté par Odyscène au centre communautaire de Blainville, à 11 h.",
        sortDate: "2026-10-25", expires: "2026-10-25",
        url: "https://blainville.ca/evenements/spectacle-les-separables"
      },
      {
        day: "13", month: "Déc",
        category: "Culture",
        title: "Spectacle — Jazz-Noisette",
        desc: "Spectacle musical festif pour les familles présenté au centre communautaire dans le cadre de la programmation Odyscène, à 11 h.",
        sortDate: "2026-12-13", expires: "2026-12-13",
        url: "https://blainville.ca/evenements/spectacle-jazz-noisette"
      }
    ],

    stetherese: [
      {
        day: "17", month: "Juin",
        category: "Vie municipale",
        title: "Consultation — Projet résidentiel 156, rue Turgeon",
        desc: "Séance de consultation publique à l'hôtel de ville à 18 h concernant un projet de développement résidentiel.",
        sortDate: "2026-06-17", expires: "2026-06-17",
        url: "https://www.sainte-therese.ca/evenements"
      },
      {
        day: "20", month: "Juin",
        category: "Sport",
        title: "Ouverture de la piscine Richelieu",
        desc: "Lancement officiel de la saison estivale à la piscine Richelieu, de 12 h à 18 h.",
        sortDate: "2026-06-20", expires: "2026-06-20",
        url: "https://www.sainte-therese.ca/evenements"
      },
      {
        day: "24", month: "Juin",
        category: "Fêtes",
        title: "Fête nationale — Break Syndical",
        desc: "Grand spectacle de la Fête nationale avec Break Syndical au stationnement de l'hôtel de ville dès 17 h. Animation jeunesse en pré-spectacle. Entrée gratuite.",
        sortDate: "2026-06-24", expires: "2026-06-24",
        url: "https://www.sainte-therese.ca/evenements"
      },
      {
        day: "24", month: "Juin",
        category: "Culture",
        title: "Concert d'orgue — Église Sainte-Thérèse-d'Avila",
        desc: "Conférence sur l'instrument à 15 h et 16 h 30, suivie d'un concert d'orgue à 15 h 30 dans l'église historique.",
        sortDate: "2026-06-24", expires: "2026-06-24",
        url: "https://www.sainte-therese.ca/evenements"
      },
      {
        day: "30", month: "Juin",
        category: "Culture",
        title: "Spectacle en plein air — Damien Robitaille",
        desc: "Concert gratuit au stationnement de l'hôtel de ville à 19 h 30, dans le cadre de la série Vivez l'été en musique.",
        sortDate: "2026-06-30", expires: "2026-06-30",
        url: "https://www.sainte-therese.ca/evenements"
      },
      {
        day: "21", month: "Juil",
        category: "Festival",
        title: "Vivez l'été en musique — Juillet",
        desc: "Concerts gratuits en plein air les 7, 14 et 21 juillet à 19 h 30 : Mathieu Grégoire, Annie Blanchard, Cuts Like a Knife.",
        sortDate: "2026-07-07", expires: "2026-07-21",
        url: "https://www.sainte-therese.ca/evenements"
      },
      {
        day: "18", month: "Août",
        category: "Festival",
        title: "Vivez l'été en musique — Juillet/Août",
        desc: "Suite des concerts gratuits avec Yordan & The Cuban Martinez Show (28 juil.), Jordan Officer, Sarahmée et Mélissa Bédard (18 août).",
        sortDate: "2026-07-28", expires: "2026-08-18",
        url: "https://www.sainte-therese.ca/evenements"
      },
      {
        day: "12", month: "Sept",
        category: "Festival",
        title: "Festival Music 4 Cancer",
        desc: "Festival punk-rock caritatif du 10 au 12 septembre, alliant musique et solidarité dans la lutte contre le cancer.",
        sortDate: "2026-09-10", expires: "2026-09-12",
        url: "https://www.sainte-therese.ca/evenements"
      }
    ],

    boisbriand: [
      {
        day: "23", month: "Juin",
        category: "Fêtes",
        title: "Festivités de la Fête nationale",
        desc: "Grande célébration au Parc René-Lévesque à partir de 17 h 30 avec animation, jeux gonflables, spectacle des Fils du Diable et feux d'artifice. Navette gratuite.",
        sortDate: "2026-06-23", expires: "2026-06-23",
        url: "https://www.ville.boisbriand.qc.ca/evenements/activite-culturelle/festivites-de-la-fete-nationale"
      },
      {
        day: "23", month: "Juin",
        category: "Sport",
        title: "Tournoi amical de hockey de rue Guy-Lafleur",
        desc: "Tournoi de hockey de rue en hommage à Guy Lafleur au Parc René-Lévesque à partir de 17 h, en parallèle des festivités de la Fête nationale.",
        sortDate: "2026-06-23", expires: "2026-06-23",
        url: "https://www.ville.boisbriand.qc.ca/evenements/activite-de-loisirs/tournoi-amical-de-hockey-de-rue-guy-lafleur"
      },
      {
        day: "3", month: "Juil",
        category: "Communauté",
        title: "Soirée spéciale SK8",
        desc: "Soirée skate au Parc Jean-Jacques-Rousseau de 18 h à 21 h, ouverte aux jeunes amateurs de planche à roulettes de tous niveaux.",
        sortDate: "2026-07-03", expires: "2026-07-03",
        url: "https://www.ville.boisbriand.qc.ca/evenements/activite-de-loisirs/soiree-speciale-sk8-1"
      },
      {
        day: "8", month: "Juil",
        category: "Festival",
        title: "Festival Un air d'ici et d'ailleurs",
        desc: "Festival musical de 3 jours au Parc Claude-Jasmin (6-8 juillet) avec six artistes aux styles variés, deux spectacles par soir à 19 h 15 et 20 h 45.",
        sortDate: "2026-07-06", expires: "2026-07-08",
        url: "https://www.ville.boisbriand.qc.ca/evenements/activite-culturelle/festival-un-air-dici-et-dailleurs"
      },
      {
        day: "9", month: "Juil",
        category: "Communauté",
        title: "Sortie à la carte — Parc Oméga",
        desc: "Sortie familiale organisée par la ville au Parc Oméga, départ et retour au Centre récréatif de 9 h à 16 h.",
        sortDate: "2026-07-09", expires: "2026-07-09",
        url: "https://www.ville.boisbriand.qc.ca/evenements/sortie-en-famille/sortie-a-la-carte-parc-omega"
      },
      {
        day: "10", month: "Août",
        category: "Culture",
        title: "Série Beaux lundis — Spectacles au Parc Claude-Jasmin",
        desc: "Cinq spectacles gratuits chaque lundi soir du 13 juillet au 10 août à 19 h 15. Annie Villeneuve lance la programmation.",
        sortDate: "2026-07-13", expires: "2026-08-10",
        url: "https://www.ville.boisbriand.qc.ca/evenements/beaux-lundis/annie-villeneuve"
      },
      {
        day: "16", month: "Juil",
        category: "Culture",
        title: "Cinéma sur l'eau",
        desc: "Projection cinéma en plein air à la piscine du Parc Pellerin à partir de 20 h. Une expérience unique pour toute la famille sous les étoiles.",
        sortDate: "2026-07-16", expires: "2026-07-16",
        url: "https://www.ville.boisbriand.qc.ca/evenements/sortie-en-famille/cinema-sur-leau"
      },
      {
        day: "16", month: "Juil",
        category: "Culture",
        title: "Concert en plein air — Claricordes",
        desc: "Concert gratuit au Parc des Francs-Bourgeois de 19 h à 19 h 50 dans le cadre de la programmation culturelle estivale.",
        sortDate: "2026-07-16", expires: "2026-07-16",
        url: "https://www.ville.boisbriand.qc.ca/evenements/activite-culturelle/concert-en-plein-air-claricordes"
      }
    ],

    boisdesfillions: [
      {
        day: "24", month: "Juin",
        category: "Fêtes",
        title: "Fête nationale du Québec",
        desc: "Célébration familiale à partir de 15 h avec jeux gonflables, maquillage, soccer bulle et spectacles en soirée au 30, montée Gagnon.",
        sortDate: "2026-06-24", expires: "2026-06-24",
        url: "https://ville.bois-des-filion.qc.ca"
      },
      {
        day: "10", month: "Sept",
        category: "Festival",
        title: "Une journée, une ville, un spectacle",
        desc: "Spectacles et événements culturels gratuits en plein air dans le cadre de la programmation régionale de la MRC Thérèse-De Blainville, du 26 juin au 10 septembre.",
        sortDate: "2026-06-26", expires: "2026-09-10",
        url: "https://ville.bois-des-filion.qc.ca"
      },
      {
        day: "14", month: "Sept",
        category: "Culture",
        title: "La Tournée festive — Petit Théâtre du Nord",
        desc: "Spectacle théâtral itinérant dans les sept villes de la MRC Thérèse-De Blainville, alliant histoires et chansons sur l'histoire régionale.",
        sortDate: "2026-09-06", expires: "2026-09-14",
        url: "https://ville.bois-des-filion.qc.ca"
      },
      {
        day: "13", month: "Sept",
        category: "Communauté",
        title: "Fête de la famille",
        desc: "Grande fête familiale gratuite au Parc Riverain de 10 h 30 à 15 h 30, avec animations, jeux et activités pour tous les âges.",
        sortDate: "2026-09-13", expires: "2026-09-13",
        url: "https://ville.bois-des-filion.qc.ca"
      },
      {
        day: "23", month: "Nov",
        category: "Marché",
        title: "Marché de Noël de Bois-des-Filion",
        desc: "Marché de Noël au Chalet des citoyens (30, montée Gagnon), samedi de 9 h à 17 h et dimanche de 10 h à 15 h. Artisans locaux et produits régionaux.",
        sortDate: "2026-11-22", expires: "2026-11-23",
        url: "https://ville.bois-des-filion.qc.ca"
      }
    ],

    deuxmontagnes: [
      {
        day: "1", month: "Oct",
        category: "Communauté",
        title: "Concours photo — Calendrier 2027 : Évasions quotidiennes",
        desc: "Concours photographique ouvert à tous jusqu'au 1er octobre. Les meilleures photos seront publiées dans le calendrier municipal 2027 de Deux-Montagnes.",
        sortDate: "2026-06-15", expires: "2026-10-01",
        url: "https://www.ville.deux-montagnes.qc.ca/evenements/vie-communautaire/concours-photo-calendrier-2027-evasions-quotidiennes-a-deux-montagnes"
      },
      {
        day: "16", month: "Juin",
        category: "Culture",
        title: "Atelier de céramique — Techniques de grattage",
        desc: "Atelier pratique de céramique pour adultes à la salle Annette-Savoie (bibliothèque) de 18 h à 20 h.",
        sortDate: "2026-06-16", expires: "2026-06-16",
        url: "https://www.ville.deux-montagnes.qc.ca/evenements/ateliers-et-conferences/atelier-de-ceramique-techniques-de-grattage"
      },
      {
        day: "17", month: "Juin",
        category: "Culture",
        title: "L'heure du conte — Les métiers",
        desc: "Heure du conte à la bibliothèque pour enfants de 3 à 6 ans (18 h 30 à 19 h 15), sur le thème des métiers.",
        sortDate: "2026-06-17", expires: "2026-06-17",
        url: "https://www.ville.deux-montagnes.qc.ca/evenements/bibliotheque/lheure-du-conte-les-metiers-2025-06-18"
      },
      {
        day: "18", month: "Juin",
        category: "Vie municipale",
        title: "Séance du conseil municipal",
        desc: "Séance publique du conseil municipal à l'Hôtel de ville à 19 h, ouverte à tous les citoyens.",
        sortDate: "2026-06-18", expires: "2026-06-18",
        url: "https://www.ville.deux-montagnes.qc.ca/evenements/seances-publiques/seance-du-conseil-2025-06-12"
      },
      {
        day: "28", month: "Juin",
        category: "Communauté",
        title: "Atelier — Bulles géantes",
        desc: "Activité familiale en plein air pour tous les âges dans un parc de Deux-Montagnes, de 9 h à 12 h.",
        sortDate: "2026-06-28", expires: "2026-06-28",
        url: "https://www.ville.deux-montagnes.qc.ca/evenements/culture-et-divertissement/atelier-bulles-geantes"
      },
      {
        day: "30", month: "Juin",
        category: "Culture",
        title: "Atelier — Dessine-moi un légume",
        desc: "Atelier créatif pour enfants de 3 à 7 ans de 10 h 30 à 11 h 30, autour du jardin et des légumes.",
        sortDate: "2026-06-30", expires: "2026-06-30",
        url: "https://www.ville.deux-montagnes.qc.ca/evenements/ateliers-et-conferences/atelier-dessine-moi-un-legume"
      },
      {
        day: "2", month: "Juil",
        category: "Culture",
        title: "Atelier d'écriture — Plume et parasol",
        desc: "Atelier d'écriture créative pour adultes à la bibliothèque de 13 h 30 à 15 h, dans une ambiance estivale décontractée.",
        sortDate: "2026-07-02", expires: "2026-07-02",
        url: "https://www.ville.deux-montagnes.qc.ca/evenements/bibliotheque/atelier-decriture-plume-et-parasol-2026-07-02"
      },
      {
        day: "16", month: "Août",
        category: "Sport",
        title: "Activités sportives gratuites dans les parcs",
        desc: "Série d'activités sportives gratuites dans les parcs du 6 juillet au 16 août. Initiation à divers sports pour tous les âges.",
        sortDate: "2026-07-06", expires: "2026-08-16",
        url: "https://www.ville.deux-montagnes.qc.ca/evenements/activites-sportives/activites-sportives-gratuites-dans-un-parc-pres-de-chez-vous"
      }
    ],

    lorraine: [
      {
        day: "23", month: "Juin",
        category: "Fêtes",
        title: "Fête nationale du Québec à Lorraine",
        desc: "Grande célébration au Parc Lorraine avec zone famille, jeux gonflables, spectacle de cirque jeunesse et concert de Rick Hughes. Entrée gratuite.",
        sortDate: "2026-06-23", expires: "2026-06-23",
        url: "https://lorraine.ca/evenements/grands-evenements/fete-nationale-du-quebec"
      },
      {
        day: "23", month: "Juin",
        category: "Communauté",
        title: "Jamboree sportif des ados",
        desc: "Journée sportive pour les adolescents au Parc Lorraine de 13 h à 16 h. Inscription requise.",
        sortDate: "2026-06-23", expires: "2026-06-23",
        url: "https://lorraine.ca/evenements/Ados/jamboree-sportif-des-ados"
      },
      {
        day: "27", month: "Juin",
        category: "Sport",
        title: "Samedi animé à la piscine",
        desc: "Soirée animée à la piscine municipale Albert-Clément de 18 h à 20 h. Une activité estivale populaire pour toute la famille.",
        sortDate: "2026-06-27", expires: "2026-06-27",
        url: "https://lorraine.ca/evenements/piscine/samedi-anime-a-la-piscine"
      },
      {
        day: "29", month: "Août",
        category: "Festival",
        title: "Fête de la famille — Thème Western",
        desc: "Grande fête familiale gratuite au Parc Lorraine sur le thème du Western, de 10 h à 22 h avec animations, jeux gonflables et spectacles en soirée.",
        sortDate: "2026-08-29", expires: "2026-08-29",
        url: "https://lorraine.ca/evenements/grands-evenements/fete-de-la-famille"
      },
      {
        day: "27", month: "Sept",
        category: "Culture",
        title: "Journées de la culture — 30e édition",
        desc: "Trois jours d'activités culturelles gratuites à Lorraine : visites guidées, contes, musique et ateliers artistiques dans le cadre de l'événement provincial.",
        sortDate: "2026-09-25", expires: "2026-09-27",
        url: "https://lorraine.ca/loisirs-et-culture/culture-et-evenements/journees-de-la-culture"
      }
    ],

    mirabel: [
      {
        day: "23", month: "Juin",
        category: "Fêtes",
        title: "Fête nationale à Mirabel",
        desc: "Célébration à la Place publique Jean-Bouchard avec zone famille, spectacles de Katrine Sansregret et Salebarbes, et feux d'artifice. De 16 h à 23 h.",
        sortDate: "2026-06-23", expires: "2026-06-23",
        url: "https://mirabel.ca/evenements/fete-nationale-a-mirabel-2"
      },
      {
        day: "28", month: "Juin",
        category: "Festival",
        title: "Le Grand PoutineFest — Mirabel",
        desc: "Festival gastronomique dédié à la poutine au complexe Val-d'Espoir, avec spectacles de La Chicane et Éric Lapointe. Du 26 au 28 juin.",
        sortDate: "2026-06-26", expires: "2026-06-28",
        url: "https://legrandpoutinefest.ca/en/pages/mirabel"
      },
      {
        day: "11", month: "Juil",
        category: "Festival",
        title: "Festival Nord-de-Rire 2026",
        desc: "Festival d'humour au Complexe Val-d'Espoir avec galas, scène extérieure et spectacles de Laurent Paquin, Les Denis Drolet et Billy Tellier. Du 9 au 11 juillet.",
        sortDate: "2026-07-09", expires: "2026-07-11",
        url: "https://www.festivalnordderire.ca"
      },
      {
        day: "27", month: "Sept",
        category: "Festival",
        title: "Festival Bière des Bois de Mirabel",
        desc: "Festival brassicole au Parc régional Bois-de-Belle-Rivière : microbrasseries, concours de bières à l'érable, danse country et activités familiales. Les 26 et 27 septembre.",
        sortDate: "2026-09-26", expires: "2026-09-27",
        url: "https://mirabel.ca/evenements/festival-biere-des-bois-de-mirabel"
      },
      {
        day: "24", month: "Oct",
        category: "Marché",
        title: "Marché d'Halloween de Mirabel",
        desc: "Marché d'artisans d'Halloween avec kiosques intérieurs et extérieurs, produits originaux et ambiance festive d'automne. Le 24 octobre de 11 h à 21 h.",
        sortDate: "2026-10-24", expires: "2026-10-24",
        url: "https://www.tourismemirabel.com/marche-dhalloween"
      }
    ],

    stjanvier: [
      {
        day: "20", month: "Juin",
        category: "Sport",
        title: "Journée Opti-Roule",
        desc: "Journée sportive au Skatepark de Saint-Janvier de 11 h à 14 h, dédiée aux sports de roues : planche à roulettes, trottinette et vélo BMX.",
        sortDate: "2026-06-20", expires: "2026-06-20",
        url: "https://www.mirabel.ca/evenements/journee-opti-roule"
      },
      {
        day: "20", month: "Juin",
        category: "Communauté",
        title: "Vente de garage communautaire",
        desc: "Grande vente de garage au Parc Jacques-Beauchamp de 8 h à 16 h. Occasion idéale de trouver des aubaines entre voisins.",
        sortDate: "2026-06-20", expires: "2026-06-20",
        url: "https://www.mirabel.ca/evenements/vente-de-garage-communautaire"
      },
      {
        day: "28", month: "Juin",
        category: "Festival",
        title: "Le Grand PoutineFest — Saint-Janvier",
        desc: "Festival gastronomique dédié à la poutine au complexe Val-d'Espoir, avec spectacles de La Chicane et Éric Lapointe. Du 26 au 28 juin.",
        sortDate: "2026-06-26", expires: "2026-06-28",
        url: "https://legrandpoutinefest.ca/en/pages/mirabel"
      },
      {
        day: "11", month: "Juil",
        category: "Festival",
        title: "Festival Nord-de-Rire 2026",
        desc: "Festival d'humour au Complexe Val-d'Espoir avec galas, scène extérieure et spectacles de Laurent Paquin et Les Denis Drolet. Du 9 au 11 juillet.",
        sortDate: "2026-07-09", expires: "2026-07-11",
        url: "https://www.festivalnordderire.ca"
      },
      {
        day: "27", month: "Sept",
        category: "Festival",
        title: "Festival Bière des Bois de Mirabel",
        desc: "Festival brassicole au Parc Bois-de-Belle-Rivière avec microbrasseries locales, concours de bières à l'érable et danse country. Les 26 et 27 septembre.",
        sortDate: "2026-09-26", expires: "2026-09-27",
        url: "https://mirabel.ca/evenements/festival-biere-des-bois-de-mirabel"
      }
    ],

    oka: [
      {
        day: "24", month: "Juin",
        category: "Fêtes",
        title: "Festivités de la Fête nationale",
        desc: "Célébrations les 23 et 24 juin avec animations familiales, spectacles de musique québécoise et feux d'artifice.",
        sortDate: "2026-06-23", expires: "2026-06-24",
        url: "https://municipalite.oka.qc.ca/events/festivites-de-la-fete-nationale-du-quebec-2/"
      },
      {
        day: "6", month: "Sept",
        category: "Marché",
        title: "Marché antique d'Oka — 4e édition",
        desc: "Foire d'antiquités dans le cœur du village de 10 h 30 à 16 h 30 : meubles anciens, bijoux, œuvres d'art et trésors de seconde main.",
        sortDate: "2026-09-06", expires: "2026-09-06",
        url: "https://municipalite.oka.qc.ca/decouvrir/marche-antique-oka/"
      },
      {
        day: "27", month: "Sept",
        category: "Culture",
        title: "Journées de la culture à Oka",
        desc: "Activités culturelles gratuites organisées par des artistes et organismes locaux lors des Journées de la culture provinciales (25-27 septembre).",
        sortDate: "2026-09-25", expires: "2026-09-27",
        url: "https://municipalite.oka.qc.ca/evenements/"
      },
      {
        day: "31", month: "Oct",
        category: "Communauté",
        title: "Halloween de quartier d'Oka",
        desc: "Célébration d'Halloween avec sentier thématique, concours de décorations, maison hantée et heure du conte pour les enfants.",
        sortDate: "2026-10-31", expires: "2026-10-31",
        url: "https://municipalite.oka.qc.ca/evenements/"
      },
      {
        day: "30", month: "Nov",
        category: "Marché",
        title: "Marché de Noël de l'Abbaye d'Oka",
        desc: "Marché de Noël à l'Abbaye réunissant exposants, chocolats artisanaux, bijoux, œuvres d'art et spécialités des moines. Fin de semaine festive.",
        sortDate: "2026-11-28", expires: "2026-11-30",
        url: "https://municipalite.oka.qc.ca/events/marche-noel-abbaye-oka-2024-2/"
      },
      {
        day: "15", month: "Déc",
        category: "Communauté",
        title: "Guignolée d'Oka",
        desc: "Collecte de dons organisée par la municipalité pour venir en aide aux familles défavorisées de la région durant le temps des Fêtes.",
        sortDate: "2026-12-05", expires: "2026-12-15",
        url: "https://municipalite.oka.qc.ca/evenements/"
      },
      {
        day: "20", month: "Déc",
        category: "Fêtes",
        title: "Défilé de Noël d'Oka",
        desc: "Défilé festif dans les rues d'Oka avec le père Noël, la mère Noël et des lutins. Tradition annuelle le 3e dimanche de décembre.",
        sortDate: "2026-12-20", expires: "2026-12-20",
        url: "https://municipalite.oka.qc.ca/evenements/"
      }
    ],

    pointecalumet: [
      {
        day: "30", month: "Août",
        category: "Sport",
        title: "Super Aqua Club — Saison estivale",
        desc: "Le plus grand parc aquatique du Québec est ouvert de juin à septembre avec plus de 46 attractions. Résidents de Pointe-Calumet : rabais de 40 % disponible.",
        sortDate: "2026-06-13", expires: "2026-08-30",
        url: "https://superaquaclub.com/en/visit/schedule-weather/"
      },
      {
        day: "24", month: "Juin",
        category: "Festival",
        title: "Oskar Med K au BeachClub",
        desc: "Soirée électro au Beach Club de Pointe-Calumet, la plage familiale qui se transforme en salle de spectacle pour l'été.",
        sortDate: "2026-06-24", expires: "2026-06-24",
        url: "https://pointe-calumet.ca"
      },
      {
        day: "1", month: "Juil",
        category: "Festival",
        title: "The Chainsmokers au BeachClub",
        desc: "Le duo électro américain The Chainsmokers en concert au BeachClub de Pointe-Calumet, pour une soirée festive au bord de l'eau.",
        sortDate: "2026-07-01", expires: "2026-07-01",
        url: "https://pointe-calumet.ca"
      },
      {
        day: "5", month: "Juil",
        category: "Festival",
        title: "Snoop Dogg au BeachClub",
        desc: "La légende du rap Snoop Dogg en concert au BeachClub de Pointe-Calumet, dans un cadre unique au bord du lac des Deux Montagnes.",
        sortDate: "2026-07-05", expires: "2026-07-05",
        url: "https://pointe-calumet.ca"
      },
      {
        day: "11", month: "Juil",
        category: "Festival",
        title: "Arcángel & Lunay au BeachClub",
        desc: "Soirée reggaeton 18+ avec Arcángel et Lunay au BeachClub, le lieu incontournable de l'été sur la Rive-Nord.",
        sortDate: "2026-07-11", expires: "2026-07-11",
        url: "https://pointe-calumet.ca"
      },
      {
        day: "16", month: "Août",
        category: "Festival",
        title: "Sean Paul au BeachClub",
        desc: "L'artiste jamaïcain Sean Paul en concert 18+ au BeachClub pour une soirée pop et dancehall sur la plage.",
        sortDate: "2026-08-16", expires: "2026-08-16",
        url: "https://pointe-calumet.ca"
      }
    ],

    rosemere: [
      {
        day: "16", month: "Juin",
        category: "Culture",
        title: "Blanc sur Blanc — 3e édition",
        desc: "Événement culturel extérieur au Parc des Pionniers avec ateliers interactifs, souper blanc, expositions et musique d'ambiance. Organisé par le Regroupement des artistes de Rosemère.",
        sortDate: "2026-06-14", expires: "2026-06-16",
        url: "https://www.ville.rosemere.qc.ca/du-14-au-16-juin-a-rosemere---3e-edition-de-l---evenement-culturel-blanc-sur-blanc/"
      },
      {
        day: "12", month: "Août",
        category: "Culture",
        title: "Concerts d'été — Saison 2026",
        desc: "Série de concerts musicaux en plein air les mercredis soirs à 19 h 30 sur le parterre extérieur du Service des loisirs, gratuits pour tous.",
        sortDate: "2026-06-29", expires: "2026-08-12",
        url: "https://www.ville.rosemere.qc.ca/concert-ete/"
      },
      {
        day: "13", month: "Août",
        category: "Culture",
        title: "Spectacle familial — Mario a un incroyable talent",
        desc: "Spectacle familial mêlant cirque et magie le samedi matin à 10 h 30 au parterre extérieur du Service des loisirs. Entrée gratuite.",
        sortDate: "2026-08-13", expires: "2026-08-13",
        url: "https://www.ville.rosemere.qc.ca/spectacle-familial-du-13-aout---mario-a-un-incroyable-talent/"
      },
      {
        day: "27", month: "Sept",
        category: "Culture",
        title: "Journées de la culture à Rosemère",
        desc: "Activités culturelles gratuites : tournoi de jeux vidéo, initiation à la céramique, clubs d'échecs et d'histoire, dans le cadre de l'événement provincial.",
        sortDate: "2026-09-26", expires: "2026-09-27",
        url: "https://www.ville.rosemere.qc.ca/journees-de-la-culture--programmation-dactivites-a-rosemere/"
      },
      {
        day: "11", month: "Déc",
        category: "Marché",
        title: "Marché de Noël Etsy Laurentides",
        desc: "Marché de Noël artisanal au Centre communautaire Memorial, organisé avec Etsy Laurentides. Artisans locaux et produits faits à la main.",
        sortDate: "2026-12-11", expires: "2026-12-11",
        url: "https://www.ville.rosemere.qc.ca/marche-de-noel-7/"
      }
    ],

    steannedesplaines: [
      {
        day: "19", month: "Juin",
        category: "Communauté",
        title: "Soirée festive au Parc de la Meunerie-Rivest",
        desc: "Soirée gratuite avec jeux d'adresse, musique d'ambiance, feu de camp, spectacle d'humour à 20 h et performance de feu.",
        sortDate: "2026-06-19", expires: "2026-06-19",
        url: "https://www.villesadp.ca/fr/evenements/loisirs-et-culture/soiree-festive-2"
      },
      {
        day: "20", month: "Juin",
        category: "Sport",
        title: "Courses de chevaux",
        desc: "Journée de courses de chevaux au 151, rang Lepage de Sainte-Anne-des-Plaines, une tradition estivale unique dans la région.",
        sortDate: "2026-06-20", expires: "2026-06-20",
        url: "https://www.villesadp.ca/fr/evenements/loisirs-et-culture/courses-de-chevaux-2026-06-20"
      },
      {
        day: "24", month: "Juin",
        category: "Fêtes",
        title: "Fête nationale du Québec 2026",
        desc: "Célébration gratuite au Parc des Saisons de 13 h à 22 h : jeux gonflables, spectacle hommage à Bob Bissonnette et feux d'artifice à 21 h 30.",
        sortDate: "2026-06-24", expires: "2026-06-24",
        url: "https://www.villesadp.ca/fr/evenements/loisirs-et-culture/fete-nationale-2026"
      },
      {
        day: "3", month: "Juil",
        category: "Culture",
        title: "Vendredis musicaux — Laurence Jalbert",
        desc: "Premier concert de la série des Vendredis musicaux gratuits au Parc Neuville avec la grande dame de la chanson québécoise Laurence Jalbert.",
        sortDate: "2026-07-03", expires: "2026-07-03",
        url: "https://www.villesadp.ca/fr/evenements/loisirs-et-culture/vendredis-musicaux-laurence-jalbert"
      },
      {
        day: "13", month: "Sept",
        category: "Communauté",
        title: "Fête des citoyens",
        desc: "Grande fête communautaire gratuite au Parc des Saisons de 13 h à 21 h 30 : jeux gonflables, ateliers d'art, maïs offert, spectacle musical et feux d'artifice.",
        sortDate: "2026-09-13", expires: "2026-09-13",
        url: "https://www.villesadp.ca/evenements/loisirs-et-culture/fete-des-citoyens-1"
      },
      {
        day: "29", month: "Nov",
        category: "Marché",
        title: "Salon du Cadeau",
        desc: "Salon d'artisanat annuel réunissant plus de 40 artisans au Centre Jean-Guy-Cardinal, de 10 h à 16 h. L'événement idéal pour magasiner des cadeaux faits main.",
        sortDate: "2026-11-28", expires: "2026-11-29",
        url: "https://www.villesadp.ca/loisirs-et-culture/evenements-et-activites/salon-du-cadeau"
      }
    ],

    stemarthe: [
      {
        day: "24", month: "Juin",
        category: "Fêtes",
        title: "Fête nationale du Québec",
        desc: "Célébration gratuite au stationnement de l'église dès 14 h avec animations, structures gonflables, spectacles de Gab Robert, Émile Bilodeau et Leloup et ses fourmis. Feux d'artifice à 22 h.",
        sortDate: "2026-06-24", expires: "2026-06-24",
        url: "https://vsmsll.ca/evenements/evenement/fete-nationale-2026-06-24"
      },
      {
        day: "2", month: "Juil",
        category: "Culture",
        title: "Heure du conte en pyjama au grand air",
        desc: "Soirée conte en plein air au Jardin collectif Le Colibri pour les enfants de 3 ans et plus à 18 h 30. Une activité familiale charmante en nature.",
        sortDate: "2026-07-02", expires: "2026-07-02",
        url: "https://vsmsll.ca/evenements/activite/heure-du-conte-en-pyjama-au-grand-air-2026-07-02"
      },
      {
        day: "8", month: "Juil",
        category: "Sport",
        title: "Danse en ligne pour tous",
        desc: "Activité de danse en ligne gratuite dans le stationnement du centre communautaire de 19 h à 20 h 30. Venez bouger et socialiser avec les voisins!",
        sortDate: "2026-07-08", expires: "2026-07-08",
        url: "https://vsmsll.ca/evenements/activite/danse-en-ligne-pour-tous"
      },
      {
        day: "9", month: "Juil",
        category: "Culture",
        title: "The Breakfast Club — Hommage aux années 80",
        desc: "Spectacle hommage aux années 80 à la Plage de la Sablière de 19 h à 20 h 30. Amenez votre chaise et votre glacière pour une soirée nostalgique au bord de l'eau.",
        sortDate: "2026-07-09", expires: "2026-07-09",
        url: "https://vsmsll.ca/evenements/spectacle/the-breakfast-club-hommage-aux-annees-80"
      },
      {
        day: "13", month: "Août",
        category: "Communauté",
        title: "Fête de la famille",
        desc: "Grande fête familiale gratuite au Parc Municipal avec jeux gonflables, tour d'escalade, manèges et la chanteuse jeunesse Annie Brocoli en spectacle.",
        sortDate: "2026-08-13", expires: "2026-08-13",
        url: "https://vsmsll.ca/evenements"
      },
      {
        day: "7", month: "Déc",
        category: "Marché",
        title: "Petit marché de Noël",
        desc: "Marché de Noël artisanal au Centre communautaire de 9 h à 15 h, avec artisans locaux et ambiance festive.",
        sortDate: "2026-12-07", expires: "2026-12-07",
        url: "https://vsmsll.ca/evenements"
      }
    ],

    stesophie: [
      {
        day: "22", month: "Juin",
        category: "Culture",
        title: "Soirée country",
        desc: "Soirée country gratuite à la Halte municipale dès 18 h, réservée aux 16 ans et plus. Musique, ambiance festive et danse au programme.",
        sortDate: "2026-06-22", expires: "2026-06-22",
        url: "https://www.stesophie.ca/evenements/activites/soiree-country"
      },
      {
        day: "24", month: "Juin",
        category: "Fêtes",
        title: "Fête nationale",
        desc: "Célébration de la Fête nationale au Parc Sophie-Masson de 17 h à 22 h, avec spectacles, animations et ambiance festive pour toute la famille.",
        sortDate: "2026-06-24", expires: "2026-06-24",
        url: "https://www.stesophie.ca/evenements/evenement-municipaux/fete-nationale-1"
      },
      {
        day: "9", month: "Juil",
        category: "Sport",
        title: "Tournoi de golf annuel",
        desc: "Tournoi de golf organisé par la municipalité au Club de golf le Grand Duc. Une journée sportive et conviviale pour les amateurs.",
        sortDate: "2026-07-09", expires: "2026-07-09",
        url: "https://www.stesophie.ca/evenements/activites/evenement-tournoi-de-golf-2026"
      },
      {
        day: "11", month: "Juil",
        category: "Communauté",
        title: "Mini Monde en Fête 2026",
        desc: "Événement municipal gratuit pour les tout-petits (0-5 ans) à la Halte municipale de 9 h à 13 h, avec jeux, animations et activités adaptées.",
        sortDate: "2026-07-11", expires: "2026-07-11",
        url: "https://www.stesophie.ca/evenements/evenement-municipaux/mini-monde-en-fete-2026"
      },
      {
        day: "23", month: "Août",
        category: "Communauté",
        title: "Famili-Fête de Sainte-Sophie",
        desc: "Grande fête familiale gratuite à la Halte municipale de 10 h à 16 h : jeux gonflables, maquillage, trampoline, canon à mousse et zone bébés (0-5 ans).",
        sortDate: "2026-08-23", expires: "2026-08-23",
        url: "https://www.stesophie.ca/evenements/activites/la-famili-fete-de-sainte-sophie"
      },
      {
        day: "23", month: "Nov",
        category: "Marché",
        title: "Marché de Noël de Sainte-Sophie",
        desc: "Marché de Noël au Pavillon Lionel-Renaud avec plus de 50 exposants artisans, rencontre avec le Père Noël, chasse aux lutins et tirage de prix. Entrée gratuite.",
        sortDate: "2026-11-22", expires: "2026-11-23",
        url: "https://www.stesophie.ca/evenements/organismes/marche-de-noel-de-sainte-sophie-1"
      }
    ],

    steustache: [
      {
        day: "24", month: "Juin",
        category: "Fêtes",
        title: "Fête nationale du Québec",
        desc: "Deux jours de festivités gratuites aux Jardins du manoir Globensky : spectacles (Lendemain de veille, KJT), animations, mini-hockey et feux d'artifice le 23 juin à 21 h 45.",
        sortDate: "2026-06-23", expires: "2026-06-24",
        url: "https://www.saint-eustache.ca/evenements/fetes-et-festivals/fete-nationale-du-quebec"
      },
      {
        day: "28", month: "Juin",
        category: "Histoire",
        title: "Journées des moulins 2026",
        desc: "Visites guidées gratuites du Moulin Légaré avec activités pour enfants et conférence sur l'histoire des moulins de la région par l'historien Kevin Lajoie.",
        sortDate: "2026-06-26", expires: "2026-06-28",
        url: "https://www.vieuxsainteustache.com/evenements/"
      },
      {
        day: "10", month: "Juil",
        category: "Culture",
        title: "La Grande Tablée du Marché",
        desc: "Soirée gourmande en plein air rue Saint-Eustache avec plus de 20 kiosques de restaurateurs locaux, 400 places assises, musique live et animation. Entrée gratuite.",
        sortDate: "2026-07-10", expires: "2026-07-10",
        url: "https://www.saint-eustache.ca/evenements/marches-publics/la-grande-tablee-du-marche-draft"
      },
      {
        day: "11", month: "Juil",
        category: "Festival",
        title: "Festival Découvertes interculturelles",
        desc: "Festival multiculturel sur la Promenade Paul-Sauvé de 15 h à 21 h 45, célébrant la diversité culturelle avec spectacles, animations et activités inclusives.",
        sortDate: "2026-07-11", expires: "2026-07-11",
        url: "https://www.saint-eustache.ca/loisirs-culture-et-vie-communautaire/activites-et-evenements/festivals-et-evenements"
      },
      {
        day: "19", month: "Août",
        category: "Culture",
        title: "Les Mercredis sur la promenade",
        desc: "Concerts gratuits en plein air sur la Promenade Paul-Sauvé tous les mercredis de 19 h à 20 h 30, avec Damien Robitaille, Vince Lemire, Gabriel Fredette et Classe Moyenne.",
        sortDate: "2026-07-22", expires: "2026-08-19",
        url: "https://www.saint-eustache.ca/evenements/spectacles"
      },
      {
        day: "20", month: "Sept",
        category: "Festival",
        title: "Festival de la galette — 41e édition",
        desc: "Festival patrimonial emblématique dans le Vieux-Saint-Eustache avec gastronomie traditionnelle, musique live, artisans et parade des reconstituteurs historiques. Entrée gratuite.",
        sortDate: "2026-09-19", expires: "2026-09-20",
        url: "https://www.vieuxsainteustache.com/attrait/festival-de-la-galette-de-st-eustache/"
      },
      {
        day: "26", month: "Sept",
        category: "Marché",
        title: "La Grande Tablée automnale",
        desc: "Soirée gourmande place du Village de 16 h à 20 h avec plus de 20 restaurateurs et producteurs locaux, animation musicale et activités pour enfants. Gratuit.",
        sortDate: "2026-09-26", expires: "2026-09-26",
        url: "https://www.saint-eustache.ca/evenements/marches-publics/la-grande-tablee-automnale"
      }
    ]
  }
};
