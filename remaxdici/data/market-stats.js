/* ============================================================
   MARKET STATS — RE/MAX D'ici · Lanaudière
   ------------------------------------------------------------
   Source : Centris — Statistiques immobilières, onglet
   « Total résidentiel » (par municipalité, T3 2026).
   Mise à jour : chaque trimestre après publication Centris.
   Valeurs « null » = donnée « ** » (volume insuffisant) chez
   Centris → affichée « — » dans le tableau.
   ============================================================ */

window.MARKET_STATS = {
  meta: {
    quarter: "T3 2026",
    quarterLabel: "3ᵉ trimestre 2026",
    cumulPeriod: "Cumul 4 derniers trimestres",
    updated: "2026-10-07",
    sourceLabel: "Centris — Statistiques immobilières",
    sourceBaseUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres"
  },

  cities: {
    terrebonne: {
      name: "Terrebonne", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/terrebonne-terrebonne",
      residential: {
        ventes:       { q: 160,    qVar: -16,  cumul: 713,    cumulVar: -17  },
        inscriptions: { q: 259,    qVar: 22,   cumul: 1041,   cumulVar: -2   },
        envigueur:    { q: 201,    qVar: 22,   cumul: 191,    cumulVar: 0    },
        volume:       { q: 101805, qVar: -11,  cumul: 442645, cumulVar: -12  }
      }
    },
    mascouche: {
      name: "Mascouche", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/mascouche",
      residential: {
        ventes:       { q: 168,    qVar: 5,    cumul: 795,    cumulVar: -2   },
        inscriptions: { q: 253,    qVar: 13,   cumul: 1138,   cumulVar: 15   },
        envigueur:    { q: 203,    qVar: 29,   cumul: 198,    cumulVar: 22   },
        volume:       { q: 96537,  qVar: 12,   cumul: 457687, cumulVar: 6    }
      }
    },
    repentigny: {
      name: "Repentigny", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/repentigny-repentigny",
      residential: {
        ventes:       { q: 174,    qVar: -5,   cumul: 819,    cumulVar: -2   },
        inscriptions: { q: 277,    qVar: 9,    cumul: 1189,   cumulVar: 12   },
        envigueur:    { q: 228,    qVar: 39,   cumul: 217,    cumulVar: 21   },
        volume:       { q: 101218, qVar: -4,   cumul: 467243, cumulVar: 3    }
      }
    },
    charlemagne: {
      name: "Charlemagne", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/charlemagne",
      residential: {
        // Données partielles : Centris indique « ** » (volume de transactions insuffisant) pour certaines valeurs → null
        ventes:       { q: 14,     qVar: null, cumul: 78,     cumulVar: -16  },
        inscriptions: { q: 29,     qVar: null, cumul: 120,    cumulVar: 8    },
        envigueur:    { q: 30,     qVar: 76,   cumul: 25,     cumulVar: null },
        volume:       { q: null,   qVar: null, cumul: 38027,  cumulVar: -8   }
      }
    },
    lassomption: {
      name: "L'Assomption", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/l-assomption",
      residential: {
        ventes:       { q: 51,     qVar: -25,  cumul: 273,    cumulVar: -15  },
        inscriptions: { q: 105,    qVar: 26,   cumul: 434,    cumulVar: 7    },
        envigueur:    { q: 107,    qVar: 50,   cumul: 94,     cumulVar: 14   },
        volume:       { q: 28681,  qVar: -26,  cumul: 152562, cumulVar: -7   }
      }
    },
    lepiphanie: {
      name: "L'Épiphanie", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/l-epiphanie",
      residential: {
        // Données partielles : Centris indique « ** » (volume de transactions insuffisant) pour certaines valeurs → null
        ventes:       { q: 34,     qVar: 36,   cumul: 108,    cumulVar: -13  },
        inscriptions: { q: 37,     qVar: 2,    cumul: 139,    cumulVar: -9   },
        envigueur:    { q: 30,     qVar: 15,   cumul: 29,     cumulVar: null },
        volume:       { q: 17248,  qVar: 55,   cumul: 56095,  cumulVar: -5   }
      }
    },
    saintsulpice: {
      name: "Saint-Sulpice", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/saint-sulpice",
      residential: {
        // Données partielles : Centris indique « ** » (volume de transactions insuffisant) pour certaines valeurs → null
        ventes:       { q: 14,     qVar: null, cumul: 61,     cumulVar: 5    },
        inscriptions: { q: 18,     qVar: null, cumul: 83,     cumulVar: -12  },
        envigueur:    { q: 17,     qVar: null, cumul: 18,     cumulVar: null },
        volume:       { q: null,   qVar: null, cumul: 30679,  cumulVar: 12   }
      }
    },
    lavaltrie: {
      name: "Lavaltrie", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/lavaltrie",
      residential: {
        ventes:       { q: 59,     qVar: 31,   cumul: 221,    cumulVar: 1    },
        inscriptions: { q: 84,     qVar: 27,   cumul: 308,    cumulVar: 20   },
        envigueur:    { q: 67,     qVar: 52,   cumul: 52,     cumulVar: 20   },
        volume:       { q: 29777,  qVar: 30,   cumul: 113207, cumulVar: 6    }
      }
    },
    saintrochachigan: {
      name: "Saint-Roch-de-l'Achigan", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/saint-roch-de-l-achigan",
      residential: {
        // Données partielles : Centris indique « ** » (volume de transactions insuffisant) pour certaines valeurs → null
        ventes:       { q: 8,      qVar: null, cumul: 56,     cumulVar: 43   },
        inscriptions: { q: 20,     qVar: null, cumul: 87,     cumulVar: 55   },
        envigueur:    { q: 14,     qVar: null, cumul: 15,     cumulVar: null },
        volume:       { q: null,   qVar: null, cumul: 33617,  cumulVar: 80   }
      }
    },
    saintlin: {
      name: "Saint-Lin–Laurentides", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/saint-lin-laurentides",
      residential: {
        ventes:       { q: 74,     qVar: -20,  cumul: 399,    cumulVar: -10  },
        inscriptions: { q: 114,    qVar: -4,   cumul: 542,    cumulVar: 2    },
        envigueur:    { q: 97,     qVar: 15,   cumul: 102,    cumulVar: 6    },
        volume:       { q: 36510,  qVar: -17,  cumul: 194705, cumulVar: -10  }
      }
    },
    stjacques: {
      name: "Saint-Jacques", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/saint-jacques",
      residential: {
        // Données partielles : Centris indique « ** » (volume de transactions insuffisant) pour certaines valeurs → null
        ventes:       { q: 17,     qVar: null, cumul: 55,     cumulVar: 12   },
        inscriptions: { q: 28,     qVar: null, cumul: 93,     cumulVar: 17   },
        envigueur:    { q: 27,     qVar: null, cumul: 22,     cumulVar: null },
        volume:       { q: null,   qVar: null, cumul: 28485,  cumulVar: 21   }
      }
    },
    joliette: {
      name: "Joliette", region: "Lanaudière", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/lanaudiere/joliette",
      residential: {
        ventes:       { q: 43,     qVar: 2,    cumul: 208,    cumulVar: 8    },
        inscriptions: { q: 78,     qVar: 23,   cumul: 285,    cumulVar: 16   },
        envigueur:    { q: 69,     qVar: 38,   cumul: 59,     cumulVar: 18   },
        volume:       { q: 20838,  qVar: 3,    cumul: 96232,  cumulVar: 16   }
      }
    }
  }
};
