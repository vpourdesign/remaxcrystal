/* ============================================================
   MARKET STATS — Source unique pour les guides de villes
   ------------------------------------------------------------
   Mise à jour : chaque trimestre, après publication Centris.
   1. Mettre à jour le bloc `meta` (quarter, updated, cumulPeriod).
   2. Pour chaque ville, mettre à jour les 4 champs résidentiels.
   Source : https://www.centris.ca/fr/outils/statistiques-immobilieres/<region>/<ville>
   Onglet « Total résidentiel ».
   ============================================================ */

window.MARKET_STATS = {
  meta: {
    quarter: "T1 2026",
    quarterLabel: "1ᵉʳ trimestre 2026",
    cumulPeriod: "Cumul 4 derniers trimestres",
    updated: "2026-05-13",
    sourceLabel: "Centris — Statistiques immobilières",
    sourceBaseUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres"
  },

  cities: {
    // ====== RE/MAX CRYSTAL — Basses-Laurentides ======
    blainville: {
      name: "Blainville",
      region: "Laurentides",
      brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/blainville",
      residential: {
        ventes:       { q: 204,    qVar: -5, cumul: 839,    cumulVar: 0  },
        inscriptions: { q: 386,    qVar: 28, cumul: 1262,   cumulVar: 18 },
        envigueur:    { q: 248,    qVar: 29, cumul: 226,    cumulVar: 6  },
        volume:       { q: 154091, qVar: -5, cumul: 631984, cumulVar: 1  }
      }
    },

    // À mettre à jour T1 2026 — placeholders
    boisbriand: {
      name: "Boisbriand", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/boisbriand",
      residential: {
        ventes:       { q: 49,    qVar: -40, cumul: 310,    cumulVar: 16  },
        inscriptions: { q: 122,   qVar: -6,  cumul: 404,    cumulVar: 4   },
        envigueur:    { q: 76,    qVar: -24, cumul: 72,     cumulVar: -16 },
        volume:       { q: 28650, qVar: -41, cumul: 181331, cumulVar: 14  }
      }
    },
    boisdesfillions: {
      name: "Bois-des-Filion", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/bois-des-filion",
      residential: {
        ventes:       { q: 48,    qVar: 11,  cumul: 181,   cumulVar: 21 },
        inscriptions: { q: 60,    qVar: -3,  cumul: 208,   cumulVar: 1  },
        envigueur:    { q: 32,    qVar: -20, cumul: 36,    cumulVar: -5 },
        volume:       { q: 25315, qVar: 14,  cumul: 97996, cumulVar: 37 }
      }
    },
    deuxmontagnes: {
      name: "Deux-Montagnes", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/deux-montagnes",
      residential: {
        ventes:       { q: 63,    qVar: 21, cumul: 209,    cumulVar: 6  },
        inscriptions: { q: 102,   qVar: 36, cumul: 280,    cumulVar: 14 },
        envigueur:    { q: 59,    qVar: 25, cumul: 47,     cumulVar: -6 },
        volume:       { q: 33018, qVar: 19, cumul: 113210, cumulVar: 18 }
      }
    },
    lorraine: {
      name: "Lorraine", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/lorraine",
      residential: {
        ventes:       { q: 31,    qVar: 6,   cumul: 123,    cumulVar: -6  },
        inscriptions: { q: 52,    qVar: -16, cumul: 162,    cumulVar: -13 },
        envigueur:    { q: 31,    qVar: -18, cumul: 35,     cumulVar: -2  },
        volume:       { q: 27613, qVar: 31,  cumul: 109554, cumulVar: 2   }
      }
    },
    oka: {
      name: "Oka", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/oka",
      residential: {
        // Données partielles — Centris indique « ** » (volume de transactions insuffisant) pour plusieurs variations trimestrielles
        ventes:       { q: 14, qVar: 0, cumul: 54,    cumulVar: 1   },
        inscriptions: { q: 18, qVar: 0, cumul: 76,    cumulVar: -25 },
        envigueur:    { q: 21, qVar: 0, cumul: 25,    cumulVar: 0   },
        volume:       { q: 0,  qVar: 0, cumul: 31810, cumulVar: -2  }
      }
    },
    pointecalumet: {
      name: "Pointe-Calumet", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/pointe-calumet",
      residential: {
        // Données partielles — Centris indique « ** » (volume de transactions insuffisant) pour certaines variations
        ventes:       { q: 28, qVar: 0, cumul: 101,   cumulVar: 4  },
        inscriptions: { q: 47, qVar: 9, cumul: 139,   cumulVar: -9 },
        envigueur:    { q: 32, qVar: -5, cumul: 28,   cumulVar: 0  },
        volume:       { q: 0,  qVar: 0, cumul: 43176, cumulVar: 12 }
      }
    },
    rosemere: {
      name: "Rosemère", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/rosemere",
      residential: {
        ventes:       { q: 41,    qVar: -19, cumul: 186,    cumulVar: 1  },
        inscriptions: { q: 82,    qVar: 0,   cumul: 301,    cumulVar: 12 },
        envigueur:    { q: 70,    qVar: -5,  cumul: 63,     cumulVar: -7 },
        volume:       { q: 37744, qVar: 0,   cumul: 167991, cumulVar: 21 }
      }
    },
    steannedesplaines: {
      name: "Sainte-Anne-des-Plaines", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/sainte-anne-des-plaines",
      residential: {
        ventes:       { q: 50,    qVar: -13, cumul: 173,   cumulVar: -21 },
        inscriptions: { q: 72,    qVar: 20,  cumul: 237,   cumulVar: -7  },
        envigueur:    { q: 53,    qVar: 17,  cumul: 46,    cumulVar: -14 },
        volume:       { q: 26341, qVar: -5,  cumul: 89304, cumulVar: -13 }
      }
    },
    stemarthe: {
      name: "Sainte-Marthe-sur-le-Lac", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/sainte-marthe-sur-le-lac",
      residential: {
        ventes:       { q: 90,    qVar: -5,  cumul: 345,    cumulVar: 1   },
        inscriptions: { q: 149,   qVar: -5,  cumul: 456,    cumulVar: -2  },
        envigueur:    { q: 83,    qVar: -10, cumul: 75,     cumulVar: -15 },
        volume:       { q: 48092, qVar: -8,  cumul: 183997, cumulVar: 6   }
      }
    },
    stetherese: {
      name: "Sainte-Thérèse", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/sainte-therese",
      residential: {
        ventes:       { q: 102,   qVar: 8,  cumul: 370,    cumulVar: 7   },
        inscriptions: { q: 146,   qVar: 10, cumul: 467,    cumulVar: 0   },
        envigueur:    { q: 82,    qVar: -8, cumul: 72,     cumulVar: -20 },
        volume:       { q: 56173, qVar: 13, cumul: 196602, cumulVar: 14  }
      }
    },
    steustache: {
      name: "Saint-Eustache", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/saint-eustache",
      residential: {
        ventes:       { q: 143,   qVar: -12, cumul: 557,    cumulVar: 2 },
        inscriptions: { q: 236,   qVar: -4,  cumul: 760,    cumulVar: 9 },
        envigueur:    { q: 134,   qVar: 2,   cumul: 125,    cumulVar: 0 },
        volume:       { q: 79185, qVar: -9,  cumul: 305999, cumulVar: 9 }
      }
    },

    // ====== RE/MAX D'ICI — Laurentides nord ======
    mirabel: {
      name: "Mirabel", region: "Laurentides", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/mirabel",
      residential: {
        ventes:       { q: 245,    qVar: -12, cumul: 939,    cumulVar: 1  },
        inscriptions: { q: 467,    qVar: 16,  cumul: 1424,   cumulVar: 8  },
        envigueur:    { q: 305,    qVar: 11,  cumul: 278,    cumulVar: -2 },
        volume:       { q: 154682, qVar: -7,  cumul: 577784, cumulVar: 6  }
      }
    },
    "st-janvier": {
      name: "Saint-Janvier (Mirabel)", region: "Laurentides", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/mirabel",
      residential: {
        // Pas de page Centris dédiée pour Saint-Janvier — données reflètent Mirabel (secteur englobant)
        ventes:       { q: 245,    qVar: -12, cumul: 939,    cumulVar: 1  },
        inscriptions: { q: 467,    qVar: 16,  cumul: 1424,   cumulVar: 8  },
        envigueur:    { q: 305,    qVar: 11,  cumul: 278,    cumulVar: -2 },
        volume:       { q: 154682, qVar: -7,  cumul: 577784, cumulVar: 6  }
      }
    },
    stesophie: {
      name: "Sainte-Sophie", region: "Laurentides", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/sainte-sophie",
      residential: {
        ventes:       { q: 69,    qVar: -4, cumul: 286,    cumulVar: 0   },
        inscriptions: { q: 122,   qVar: 0,  cumul: 379,    cumulVar: -5  },
        envigueur:    { q: 67,    qVar: -9, cumul: 64,     cumulVar: -11 },
        volume:       { q: 36085, qVar: 2,  cumul: 146894, cumulVar: 7   }
      }
    }
  }
};
