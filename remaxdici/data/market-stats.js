/* ============================================================
   MARKET STATS — RE/MAX D'ici · Lanaudière
   ------------------------------------------------------------
   Source : Centris — Statistiques immobilières, onglet
   « Total résidentiel » (par municipalité, T1 2026).
   Mise à jour : chaque trimestre après publication Centris.
   Valeurs « null » = donnée « ** » (volume insuffisant) chez
   Centris → affichée « — » dans le tableau.
   ============================================================ */

window.MARKET_STATS = {
  meta: {
    quarter: "T1 2026",
    quarterLabel: "1ᵉʳ trimestre 2026",
    cumulPeriod: "Cumul 4 derniers trimestres",
    updated: "2026-07-01",
    sourceLabel: "Centris — Statistiques immobilières",
    sourceBaseUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres"
  },

  cities: {
    terrebonne: {
      name: "Terrebonne", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/terrebonne-terrebonne",
      residential: {
        ventes:       { q: 182,    qVar: -13, cumul: 823,    cumulVar: 11 },
        inscriptions: { q: 321,    qVar: 2,   cumul: 1059,   cumulVar: 6  },
        envigueur:    { q: 202,    qVar: 1,   cumul: 183,    cumulVar: -5 },
        volume:       { q: 108212, qVar: -10, cumul: 488809, cumulVar: 17 }
      }
    },
    mascouche: {
      name: "Mascouche", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/mascouche",
      residential: {
        ventes:       { q: 227,    qVar: 9,  cumul: 835,    cumulVar: 10 },
        inscriptions: { q: 352,    qVar: 15, cumul: 1071,   cumulVar: 13 },
        envigueur:    { q: 205,    qVar: 16, cumul: 176,    cumulVar: 6  },
        volume:       { q: 125805, qVar: 13, cumul: 462516, cumulVar: 19 }
      }
    },
    repentigny: {
      name: "Repentigny", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/repentigny-repentigny",
      residential: {
        ventes:       { q: 221,    qVar: 9,  cumul: 822,    cumulVar: -2 },
        inscriptions: { q: 352,    qVar: 26, cumul: 1108,   cumulVar: 6  },
        envigueur:    { q: 216,    qVar: 16, cumul: 185,    cumulVar: -3 },
        volume:       { q: 126654, qVar: 17, cumul: 470679, cumulVar: 7  }
      }
    },
    charlemagne: {
      name: "Charlemagne", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/charlemagne",
      residential: {
        // Petite municipalité — Centris supprime plusieurs variations (« ** » → null)
        ventes:       { q: 16,   qVar: null, cumul: 95,    cumulVar: 20   },
        inscriptions: { q: 32,   qVar: 10,   cumul: 119,   cumulVar: 16   },
        envigueur:    { q: 24,   qVar: null, cumul: 20,    cumulVar: null },
        volume:       { q: null, qVar: null, cumul: 44330, cumulVar: 37   }
      }
    },
    lassomption: {
      name: "L'Assomption", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/l-assomption",
      residential: {
        ventes:       { q: 77,    qVar: -18, cumul: 301,    cumulVar: 0 },
        inscriptions: { q: 144,   qVar: 5,   cumul: 398,    cumulVar: 0 },
        envigueur:    { q: 90,    qVar: -1,  cumul: 81,     cumulVar: 2 },
        volume:       { q: 43686, qVar: -6,  cumul: 163698, cumulVar: 7 }
      }
    },
    lepiphanie: {
      name: "L'Épiphanie", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/l-epiphanie",
      residential: {
        // Petite municipalité — plusieurs variations « ** » (null)
        ventes:       { q: 20,   qVar: null, cumul: 104,   cumulVar: -9   },
        inscriptions: { q: 40,   qVar: 5,    cumul: 147,   cumulVar: 3    },
        envigueur:    { q: 31,   qVar: -3,   cumul: 27,    cumulVar: null },
        volume:       { q: null, qVar: null, cumul: 50063, cumulVar: -7   }
      }
    },
    saintsulpice: {
      name: "Saint-Sulpice", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/saint-sulpice",
      residential: {
        // Petite municipalité — plusieurs variations « ** » (null)
        ventes:       { q: 13,   qVar: null, cumul: 60,    cumulVar: 13   },
        inscriptions: { q: 32,   qVar: 88,   cumul: 101,   cumulVar: 46   },
        envigueur:    { q: 21,   qVar: null, cumul: 19,    cumulVar: null },
        volume:       { q: null, qVar: null, cumul: 29817, cumulVar: 40   }
      }
    },
    lavaltrie: {
      name: "Lavaltrie", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/lavaltrie",
      residential: {
        ventes:       { q: 65,    qVar: 30, cumul: 216,    cumulVar: -8  },
        inscriptions: { q: 97,    qVar: 44, cumul: 277,    cumulVar: -5  },
        envigueur:    { q: 48,    qVar: 11, cumul: 44,     cumulVar: -15 },
        volume:       { q: 33253, qVar: 42, cumul: 110840, cumulVar: 0   }
      }
    },
    saintrochachigan: {
      name: "Saint-Roch-de-l'Achigan", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/saint-roch-de-l-achigan",
      residential: {
        // Petite municipalité — plusieurs variations « ** » (null)
        ventes:       { q: 15,   qVar: null, cumul: 41,    cumulVar: -28  },
        inscriptions: { q: 30,   qVar: 87,   cumul: 69,    cumulVar: 11   },
        envigueur:    { q: 18,   qVar: null, cumul: 13,    cumulVar: null },
        volume:       { q: null, qVar: null, cumul: 23312, cumulVar: -14  }
      }
    },
    saintlin: {
      name: "Saint-Lin–Laurentides", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/saint-lin-laurentides",
      residential: {
        ventes:       { q: 102,   qVar: -16, cumul: 425,    cumulVar: 0  },
        inscriptions: { q: 189,   qVar: 23,  cumul: 552,    cumulVar: 3  },
        envigueur:    { q: 119,   qVar: 13,  cumul: 95,     cumulVar: -9 },
        volume:       { q: 48699, qVar: -19, cumul: 207295, cumulVar: 2  }
      }
    },
    stjacques: {
      name: "Saint-Jacques", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/saint-jacques",
      residential: {
        // Petite municipalité — plusieurs variations « ** » (null)
        ventes:       { q: 12,   qVar: null, cumul: 57,    cumulVar: 16   },
        inscriptions: { q: 25,   qVar: null, cumul: 86,    cumulVar: 36   },
        envigueur:    { q: 20,   qVar: null, cumul: 19,    cumulVar: null },
        volume:       { q: null, qVar: null, cumul: 28281, cumulVar: 21   }
      }
    },
    joliette: {
      name: "Joliette", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/joliette",
      residential: {
        ventes:       { q: 58,    qVar: 3,  cumul: 196,   cumulVar: 1  },
        inscriptions: { q: 89,    qVar: 53, cumul: 263,   cumulVar: 20 },
        envigueur:    { q: 57,    qVar: 18, cumul: 50,    cumulVar: -7 },
        volume:       { q: 28000, qVar: 19, cumul: 89711, cumulVar: 14 }
      }
    }
  }
};
