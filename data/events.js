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
    updated: "2026-06-11",
    source: "Sites municipaux officiels"
  },

  cities: {
    blainville: [
      {
        day: "13", month: "Juin",
        category: "Communauté",
        title: "Fête du voisinage",
        desc: "Célébrations de quartier partout en ville les 13 et 14 juin. Activités familiales, musique et BBQ entre voisins.",
        sortDate: "2026-06-13", expires: "2026-06-14",
        url: "https://blainville.ca/evenements/"
      },
      {
        day: "14", month: "Juin",
        category: "Culture",
        title: "Exposition extérieure — Tracés de voyage",
        desc: "Exposition en plein air le long de la piste cyclable près de l'hôtel de ville. Derniers jours pour la découvrir.",
        sortDate: "2026-06-14", expires: "2026-06-14",
        url: "https://blainville.ca/evenements/"
      },
      {
        day: "28", month: "Juin",
        category: "Culture",
        title: "Exposition — Symphonie de couleurs et de lumière",
        desc: "Les œuvres de Suzanne Voisard à la bibliothèque Paul-Mercier, jusqu'au 28 juin.",
        sortDate: "2026-06-28", expires: "2026-06-28",
        url: "https://blainville.ca/evenements/"
      },
      {
        day: "11", month: "Oct",
        category: "Histoire",
        title: "Exposition — Un village et ses obus : le Plan Bouchard",
        desc: "L'histoire du Plan Bouchard (1941-1945) au micromusée, les week-ends de 13 h à 16 h, jusqu'au 11 octobre.",
        sortDate: "2026-10-11", expires: "2026-10-11",
        url: "https://blainville.ca/evenements/"
      }
    ],

    stetherese: [
      {
        day: "17", month: "Juin",
        category: "Vie municipale",
        title: "Consultation — Projet résidentiel au 156, rue Turgeon",
        desc: "Séance de consultation publique à l'hôtel de ville, 18 h.",
        sortDate: "2026-06-17", expires: "2026-06-17",
        url: "https://www.sainte-therese.ca/evenements"
      },
      {
        day: "20", month: "Juin",
        category: "Sport",
        title: "Ouverture de la piscine Richelieu",
        desc: "Lancement de la saison estivale, de midi à 18 h.",
        sortDate: "2026-06-20", expires: "2026-06-20",
        url: "https://www.sainte-therese.ca/evenements"
      },
      {
        day: "24", month: "Juin",
        category: "Festival",
        title: "Fête nationale du Québec",
        desc: "Célébrations dans plusieurs parcs de 11 h à 16 h, spectacle Break Syndical au stationnement de l'hôtel de ville en soirée.",
        sortDate: "2026-06-24", expires: "2026-06-24",
        url: "https://www.sainte-therese.ca/evenements"
      },
      {
        day: "24", month: "Juin",
        category: "Culture",
        title: "Concert d'orgue — Église Sainte-Thérèse-d'Avila",
        desc: "Conférence sur l'orgue à 15 h suivie du concert.",
        sortDate: "2026-06-24", expires: "2026-06-24",
        url: "https://www.sainte-therese.ca/evenements"
      },
      {
        day: "29", month: "Juin",
        category: "Sport",
        title: "Essentrics au parc Richelieu",
        desc: "Séance d'étirements en plein air, 9 h à 10 h.",
        sortDate: "2026-06-29", expires: "2026-06-29",
        url: "https://www.sainte-therese.ca/evenements"
      }
    ],

    boisbriand: [],
    boisdesfillions: [],
    deuxmontagnes: [],
    lorraine: [],
    mirabel: [],
    oka: [],
    pointecalumet: [],
    rosemere: [],
    stjanvier: [],
    steannedesplaines: [],
    stemarthe: [],
    stesophie: [],
    steustache: []
  }
};
