/* ============================================================
   MARKET STATS — Source unique pour les guides de villes
   ------------------------------------------------------------
   Mise à jour : chaque trimestre, après publication Centris.
   1. Mettre à jour le bloc `meta` (quarter, updated, cumulPeriod).
   2. Pour chaque ville, mettre à jour les 4 champs résidentiels.
   Source : https://www.centris.ca/fr/outils/statistiques-immobilieres/<region>/<ville>
   Onglet « Total résidentiel ».
   Valeurs « null » = donnée « ** » (volume insuffisant) chez
   Centris → affichée « — » dans le tableau.
   ============================================================ */

window.MARKET_STATS = {
  meta: {
    quarter: "T2 2026",
    quarterLabel: "2ᵉ trimestre 2026",
    cumulPeriod: "Cumul 4 derniers trimestres",
    updated: "2026-07-15",
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
        ventes:       { q: 262,    qVar: 7,  cumul: 858,    cumulVar: 1  },
        inscriptions: { q: 350,    qVar: 0,  cumul: 1255,   cumulVar: 10 },
        envigueur:    { q: 267,    qVar: 21, cumul: 238,    cumulVar: 15 },
        volume:       { q: 207498, qVar: 18, cumul: 664159, cumulVar: 7  }
      }
    },

    boisbriand: {
      name: "Boisbriand", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/boisbriand",
      residential: {
        ventes:       { q: 62,    qVar: -51, cumul: 244,    cumulVar: -23 },
        inscriptions: { q: 124,   qVar: -7,  cumul: 389,    cumulVar: -8  },
        envigueur:    { q: 108,   qVar: 16,  cumul: 75,     cumulVar: -14 },
        volume:       { q: 40350, qVar: -42, cumul: 152096, cumulVar: -17 }
      }
    },
    boisdesfillions: {
      name: "Bois-des-Filion", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/bois-des-filion",
      residential: {
        ventes:       { q: 44,    qVar: -15, cumul: 173,   cumulVar: 8  },
        inscriptions: { q: 71,    qVar: 39,  cumul: 228,   cumulVar: 14 },
        envigueur:    { q: 42,    qVar: 7,   cumul: 37,    cumulVar: -2 },
        volume:       { q: 22805, qVar: -18, cumul: 92843, cumulVar: 15 }
      }
    },
    deuxmontagnes: {
      name: "Deux-Montagnes", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/deux-montagnes",
      residential: {
        ventes:       { q: 78,    qVar: 36, cumul: 230,    cumulVar: 21 },
        inscriptions: { q: 97,    qVar: 40, cumul: 306,    cumulVar: 24 },
        envigueur:    { q: 59,    qVar: 25, cumul: 50,     cumulVar: 4  },
        volume:       { q: 46091, qVar: 45, cumul: 127566, cumulVar: 30 }
      }
    },
    lorraine: {
      name: "Lorraine", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/lorraine",
      residential: {
        // Petite municipalité — Centris supprime une variation trimestrielle (« ** » → null)
        ventes:       { q: 36,    qVar: -7,   cumul: 120,    cumulVar: -5  },
        inscriptions: { q: 47,    qVar: -2,   cumul: 161,    cumulVar: -10 },
        envigueur:    { q: 29,    qVar: null, cumul: 31,     cumulVar: -18 },
        volume:       { q: 29064, qVar: -15,  cumul: 104300, cumulVar: -3  }
      }
    },
    oka: {
      name: "Oka", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/oka",
      residential: {
        // Données partielles — Centris indique « ** » (volume de transactions insuffisant) pour plusieurs variations trimestrielles
        ventes:       { q: 11,   qVar: null, cumul: 46,    cumulVar: -19 },
        inscriptions: { q: 19,   qVar: null, cumul: 75,    cumulVar: -21 },
        envigueur:    { q: 23,   qVar: null, cumul: 23,    cumulVar: null },
        volume:       { q: null, qVar: null, cumul: 26876, cumulVar: -23 }
      }
    },
    pointecalumet: {
      name: "Pointe-Calumet", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/pointe-calumet",
      residential: {
        // Données partielles — Centris indique « ** » (volume de transactions insuffisant) pour certaines variations
        ventes:       { q: 28,   qVar: null, cumul: 96,    cumulVar: -2  },
        inscriptions: { q: 39,   qVar: 2,    cumul: 138,   cumulVar: -12 },
        envigueur:    { q: 31,   qVar: 0,    cumul: 28,    cumulVar: null },
        volume:       { q: null, qVar: null, cumul: 43498, cumulVar: 10  }
      }
    },
    rosemere: {
      name: "Rosemère", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/rosemere",
      residential: {
        ventes:       { q: 59,    qVar: 15, cumul: 194,    cumulVar: 4  },
        inscriptions: { q: 86,    qVar: 7,  cumul: 304,    cumulVar: 9  },
        envigueur:    { q: 82,    qVar: 30, cumul: 68,     cumulVar: 4  },
        volume:       { q: 47217, qVar: 3,  cumul: 169689, cumulVar: 16 }
      }
    },
    steannedesplaines: {
      name: "Sainte-Anne-des-Plaines", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/sainte-anne-des-plaines",
      residential: {
        ventes:       { q: 44,    qVar: -13, cumul: 166,   cumulVar: -20 },
        inscriptions: { q: 59,    qVar: -10, cumul: 230,   cumulVar: -7  },
        envigueur:    { q: 55,    qVar: 30,  cumul: 49,    cumulVar: 0   },
        volume:       { q: 23340, qVar: -11, cumul: 86345, cumulVar: -17 }
      }
    },
    stemarthe: {
      name: "Sainte-Marthe-sur-le-Lac", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/sainte-marthe-sur-le-lac",
      residential: {
        ventes:       { q: 106,   qVar: 0,  cumul: 344,    cumulVar: -4 },
        inscriptions: { q: 156,   qVar: 40, cumul: 501,    cumulVar: 5  },
        envigueur:    { q: 101,   qVar: 27, cumul: 81,     cumulVar: -4 },
        volume:       { q: 57234, qVar: 1,  cumul: 183761, cumulVar: -2 }
      }
    },
    stetherese: {
      name: "Sainte-Thérèse", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/sainte-therese",
      residential: {
        ventes:       { q: 95,    qVar: -18, cumul: 348,    cumulVar: -3  },
        inscriptions: { q: 123,   qVar: -8,  cumul: 455,    cumulVar: -3  },
        envigueur:    { q: 77,    qVar: 2,   cumul: 72,     cumulVar: -16 },
        volume:       { q: 55629, qVar: -8,  cumul: 191628, cumulVar: 4   }
      }
    },
    steustache: {
      name: "Saint-Eustache", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/saint-eustache",
      residential: {
        ventes:       { q: 180,    qVar: 9,  cumul: 572,    cumulVar: 4  },
        inscriptions: { q: 223,    qVar: 12, cumul: 781,    cumulVar: 9  },
        envigueur:    { q: 144,    qVar: 14, cumul: 129,    cumulVar: 6  },
        volume:       { q: 103395, qVar: 16, cumul: 320793, cumulVar: 11 }
      }
    },

    // ====== RE/MAX D'ICI — Laurentides nord ======
    mirabel: {
      name: "Mirabel", region: "Laurentides", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/mirabel",
      residential: {
        ventes:       { q: 294,    qVar: 5,  cumul: 953,    cumulVar: -1 },
        inscriptions: { q: 413,    qVar: 7,  cumul: 1430,   cumulVar: 5  },
        envigueur:    { q: 313,    qVar: 10, cumul: 283,    cumulVar: 1  },
        volume:       { q: 189849, qVar: 14, cumul: 600641, cumulVar: 4  }
      }
    },
    "st-janvier": {
      name: "Saint-Janvier (Mirabel)", region: "Laurentides", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/mirabel",
      residential: {
        // Pas de page Centris dédiée pour Saint-Janvier — données reflètent Mirabel (secteur englobant)
        ventes:       { q: 294,    qVar: 5,  cumul: 953,    cumulVar: -1 },
        inscriptions: { q: 413,    qVar: 7,  cumul: 1430,   cumulVar: 5  },
        envigueur:    { q: 313,    qVar: 10, cumul: 283,    cumulVar: 1  },
        volume:       { q: 189849, qVar: 14, cumul: 600641, cumulVar: 4  }
      }
    },
    stesophie: {
      name: "Sainte-Sophie", region: "Laurentides", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/sainte-sophie",
      residential: {
        ventes:       { q: 64,    qVar: -16, cumul: 273,    cumulVar: -4 },
        inscriptions: { q: 118,   qVar: 25,  cumul: 400,    cumulVar: 0  },
        envigueur:    { q: 90,    qVar: 18,  cumul: 68,     cumulVar: -6 },
        volume:       { q: 33639, qVar: -15, cumul: 140860, cumulVar: 0  }
      }
    }
  }
};
