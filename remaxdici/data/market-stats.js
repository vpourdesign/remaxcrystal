/* ============================================================
   MARKET STATS — RE/MAX D'ici · Lanaudière
   ------------------------------------------------------------
   Source : Centris — Statistiques immobilières, onglet
   « Total résidentiel » (par municipalité, T2 2026).
   Mise à jour : chaque trimestre après publication Centris.
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
    terrebonne: {
      name: "Terrebonne", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/terrebonne-terrebonne",
      residential: {
        ventes:       { q: 214,    qVar: -26, cumul: 744,    cumulVar: -10 },
        inscriptions: { q: 285,    qVar: -16, cumul: 998,    cumulVar: -8  },
        envigueur:    { q: 212,    qVar: 0,   cumul: 183,    cumulVar: -8  },
        volume:       { q: 136380, qVar: -18, cumul: 455757, cumulVar: -4  }
      }
    },
    mascouche: {
      name: "Mascouche", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/mascouche",
      residential: {
        ventes:       { q: 214,    qVar: -18, cumul: 787,    cumulVar: -2 },
        inscriptions: { q: 317,    qVar: 15,  cumul: 1110,   cumulVar: 15 },
        envigueur:    { q: 215,    qVar: 25,  cumul: 187,    cumulVar: 14 },
        volume:       { q: 124849, qVar: -11, cumul: 446751, cumulVar: 5  }
      }
    },
    repentigny: {
      name: "Repentigny", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/repentigny-repentigny",
      residential: {
        ventes:       { q: 257,    qVar: 3,  cumul: 830,    cumulVar: 2  },
        inscriptions: { q: 348,    qVar: 21, cumul: 1168,   cumulVar: 13 },
        envigueur:    { q: 244,    qVar: 32, cumul: 201,    cumulVar: 9  },
        volume:       { q: 137933, qVar: 1,  cumul: 472248, cumulVar: 10 }
      }
    },
    charlemagne: {
      name: "Charlemagne", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/charlemagne",
      residential: {
        // Petite municipalité — Centris supprime plusieurs variations (« ** » → null)
        ventes:       { q: 23,   qVar: null, cumul: 94,    cumulVar: 18   },
        inscriptions: { q: 34,   qVar: 17,   cumul: 124,   cumulVar: 21   },
        envigueur:    { q: 32,   qVar: 45,   cumul: 22,    cumulVar: null },
        volume:       { q: null, qVar: null, cumul: 45819, cumulVar: 36   }
      }
    },
    lassomption: {
      name: "L'Assomption", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/l-assomption",
      residential: {
        ventes:       { q: 87,    qVar: -11, cumul: 290,    cumulVar: -8 },
        inscriptions: { q: 117,   qVar: 15,  cumul: 413,    cumulVar: 2  },
        envigueur:    { q: 108,   qVar: 20,  cumul: 85,     cumulVar: 3  },
        volume:       { q: 49487, qVar: -1,  cumul: 162821, cumulVar: 4  }
      }
    },
    lepiphanie: {
      name: "L'Épiphanie", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/l-epiphanie",
      residential: {
        // Petite municipalité — une variation « ** » (null)
        ventes:       { q: 31,    qVar: -13, cumul: 99,    cumulVar: -17  },
        inscriptions: { q: 44,    qVar: -12, cumul: 140,   cumulVar: -4   },
        envigueur:    { q: 33,    qVar: 10,  cumul: 28,    cumulVar: null },
        volume:       { q: 16707, qVar: 0,   cumul: 49940, cumulVar: -13  }
      }
    },
    saintsulpice: {
      name: "Saint-Sulpice", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/saint-sulpice",
      residential: {
        // Petite municipalité — plusieurs variations « ** » (null)
        ventes:       { q: 19,   qVar: null, cumul: 62,    cumulVar: 14   },
        inscriptions: { q: 22,   qVar: null, cumul: 95,    cumulVar: 23   },
        envigueur:    { q: 16,   qVar: null, cumul: 18,    cumulVar: null },
        volume:       { q: null, qVar: null, cumul: 31082, cumulVar: 32   }
      }
    },
    lavaltrie: {
      name: "Lavaltrie", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/lavaltrie",
      residential: {
        ventes:       { q: 52,    qVar: -14, cumul: 207,    cumulVar: -11 },
        inscriptions: { q: 76,    qVar: 26,  cumul: 291,    cumulVar: 9   },
        envigueur:    { q: 54,    qVar: 31,  cumul: 47,     cumulVar: 2   },
        volume:       { q: 27055, qVar: -14, cumul: 106204, cumulVar: -4  }
      }
    },
    saintrochachigan: {
      name: "Saint-Roch-de-l'Achigan", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/saint-roch-de-l-achigan",
      residential: {
        // Petite municipalité — plusieurs variations « ** » (null)
        ventes:       { q: 23,   qVar: null, cumul: 56,    cumulVar: 27   },
        inscriptions: { q: 24,   qVar: null, cumul: 81,    cumulVar: 52   },
        envigueur:    { q: 18,   qVar: null, cumul: 15,    cumulVar: null },
        volume:       { q: null, qVar: null, cumul: 33745, cumulVar: 58   }
      }
    },
    saintlin: {
      name: "Saint-Lin–Laurentides", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/saint-lin-laurentides",
      residential: {
        ventes:       { q: 123,   qVar: -5, cumul: 418,    cumulVar: -5 },
        inscriptions: { q: 140,   qVar: 0,  cumul: 549,    cumulVar: 4  },
        envigueur:    { q: 109,   qVar: 22, cumul: 99,     cumulVar: -1 },
        volume:       { q: 61127, qVar: -7, cumul: 202352, cumulVar: -6 }
      }
    },
    stjacques: {
      name: "Saint-Jacques", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/saint-jacques",
      residential: {
        // Petite municipalité — plusieurs variations « ** » (null)
        ventes:       { q: 9,    qVar: null, cumul: 55,    cumulVar: 27   },
        inscriptions: { q: 24,   qVar: null, cumul: 81,    cumulVar: 10   },
        envigueur:    { q: 24,   qVar: null, cumul: 20,    cumulVar: null },
        volume:       { q: null, qVar: null, cumul: 27204, cumulVar: 40   }
      }
    },
    joliette: {
      name: "Joliette", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/joliette",
      residential: {
        ventes:       { q: 59,    qVar: 22, cumul: 207,   cumulVar: 5  },
        inscriptions: { q: 75,    qVar: 15, cumul: 272,   cumulVar: 16 },
        envigueur:    { q: 67,    qVar: 52, cumul: 55,    cumulVar: 10 },
        volume:       { q: 26985, qVar: 27, cumul: 95514, cumulVar: 16 }
      }
    }
  }
};
