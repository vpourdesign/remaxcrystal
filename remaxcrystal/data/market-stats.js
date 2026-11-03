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
    quarter: "T3 2026",
    quarterLabel: "3ᵉ trimestre 2026",
    cumulPeriod: "Cumul 4 derniers trimestres",
    updated: "2026-10-07",
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
        ventes:       { q: 185,    qVar: -4,   cumul: 849,    cumulVar: -3   },
        inscriptions: { q: 293,    qVar: -2,   cumul: 1245,   cumulVar: 3    },
        envigueur:    { q: 232,    qVar: 8,    cumul: 242,    cumulVar: 16   },
        volume:       { q: 160974, qVar: 7,    cumul: 675346, cumulVar: 3    }
      }
    },

    boisbriand: {
      name: "Boisbriand", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/boisbriand",
      residential: {
        ventes:       { q: 71,     qVar: -7,   cumul: 238,    cumulVar: -32  },
        inscriptions: { q: 112,    qVar: 31,   cumul: 412,    cumulVar: -5   },
        envigueur:    { q: 93,     qVar: 43,   cumul: 82,     cumulVar: -3   },
        volume:       { q: 46278,  qVar: -3,   cumul: 150564, cumulVar: -26  }
      }
    },
    boisdesfillions: {
      name: "Bois-des-Filion", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/bois-des-filion",
      residential: {
        ventes:       { q: 34,     qVar: -17,  cumul: 166,    cumulVar: -2   },
        inscriptions: { q: 74,     qVar: 19,   cumul: 240,    cumulVar: 9    },
        envigueur:    { q: 55,     qVar: 30,   cumul: 41,     cumulVar: 5    },
        volume:       { q: 16972,  qVar: -25,  cumul: 86882,  cumulVar: -2   }
      }
    },
    deuxmontagnes: {
      name: "Deux-Montagnes", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/deux-montagnes",
      residential: {
        ventes:       { q: 40,     qVar: -2,   cumul: 229,    cumulVar: 19   },
        inscriptions: { q: 74,     qVar: 39,   cumul: 325,    cumulVar: 32   },
        envigueur:    { q: 64,     qVar: 72,   cumul: 56,     cumulVar: 24   },
        volume:       { q: 25806,  qVar: 19,   cumul: 131769, cumulVar: 29   }
      }
    },
    lorraine: {
      name: "Lorraine", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/lorraine",
      residential: {
        // Données partielles : Centris indique « ** » (volume de transactions insuffisant) pour certaines valeurs → null
        ventes:       { q: 21,     qVar: null, cumul: 110,    cumulVar: -19  },
        inscriptions: { q: 39,     qVar: -9,   cumul: 157,    cumulVar: -14  },
        envigueur:    { q: 29,     qVar: null, cumul: 29,     cumulVar: null },
        volume:       { q: null,   qVar: null, cumul: 96508,  cumulVar: -16  }
      }
    },
    oka: {
      name: "Oka", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/oka",
      residential: {
        // Données partielles : Centris indique « ** » (volume de transactions insuffisant) pour certaines valeurs → null
        ventes:       { q: 6,      qVar: null, cumul: 41,     cumulVar: -24  },
        inscriptions: { q: 22,     qVar: null, cumul: 73,     cumulVar: -25  },
        envigueur:    { q: 22,     qVar: null, cumul: 22,     cumulVar: null },
        volume:       { q: null,   qVar: null, cumul: 23481,  cumulVar: -28  }
      }
    },
    pointecalumet: {
      name: "Pointe-Calumet", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/pointe-calumet",
      residential: {
        // Données partielles : Centris indique « ** » (volume de transactions insuffisant) pour certaines valeurs → null
        ventes:       { q: 19,     qVar: null, cumul: 92,     cumulVar: -7   },
        inscriptions: { q: 28,     qVar: null, cumul: 136,    cumulVar: -8   },
        envigueur:    { q: 28,     qVar: null, cumul: 29,     cumulVar: null },
        volume:       { q: null,   qVar: null, cumul: 42640,  cumulVar: 1    }
      }
    },
    rosemere: {
      name: "Rosemère", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/rosemere",
      residential: {
        ventes:       { q: 38,     qVar: -32,  cumul: 176,    cumulVar: -15  },
        inscriptions: { q: 67,     qVar: -6,   cumul: 296,    cumulVar: 3    },
        envigueur:    { q: 70,     qVar: 18,   cumul: 70,     cumulVar: 11   },
        volume:       { q: 33459,  qVar: -36,  cumul: 150531, cumulVar: -13  }
      }
    },
    steannedesplaines: {
      name: "Sainte-Anne-des-Plaines", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/sainte-anne-des-plaines",
      residential: {
        ventes:       { q: 31,     qVar: -20,  cumul: 158,    cumulVar: -19  },
        inscriptions: { q: 58,     qVar: 9,    cumul: 235,    cumulVar: -2   },
        envigueur:    { q: 61,     qVar: 48,   cumul: 54,     cumulVar: 20   },
        volume:       { q: 16478,  qVar: -14,  cumul: 83652,  cumulVar: -13  }
      }
    },
    stemarthe: {
      name: "Sainte-Marthe-sur-le-Lac", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/sainte-marthe-sur-le-lac",
      residential: {
        ventes:       { q: 71,     qVar: 10,   cumul: 350,    cumulVar: 0    },
        inscriptions: { q: 119,    qVar: 4,    cumul: 505,    cumulVar: 6    },
        envigueur:    { q: 96,     qVar: 35,   cumul: 87,     cumulVar: 7    },
        volume:       { q: 39716,  qVar: 16,   cumul: 189057, cumulVar: 0    }
      }
    },
    stetherese: {
      name: "Sainte-Thérèse", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/sainte-therese",
      residential: {
        ventes:       { q: 70,     qVar: -9,   cumul: 341,    cumulVar: -9   },
        inscriptions: { q: 116,    qVar: 12,   cumul: 467,    cumulVar: -2   },
        envigueur:    { q: 89,     qVar: 28,   cumul: 77,     cumulVar: -6   },
        volume:       { q: 44327,  qVar: 10,   cumul: 195771, cumulVar: 0    }
      }
    },
    steustache: {
      name: "Saint-Eustache", region: "Laurentides", brand: "crystal",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/saint-eustache",
      residential: {
        ventes:       { q: 100,    qVar: -13,  cumul: 555,    cumulVar: 0    },
        inscriptions: { q: 179,    qVar: 0,    cumul: 779,    cumulVar: 3    },
        envigueur:    { q: 142,    qVar: 26,   cumul: 136,    cumulVar: 14   },
        volume:       { q: 54697,  qVar: -16,  cumul: 309857, cumulVar: 3    }
      }
    },

    // ====== RE/MAX D'ICI — Laurentides nord ======
    mirabel: {
      name: "Mirabel", region: "Laurentides", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/mirabel",
      residential: {
        ventes:       { q: 173,    qVar: -15,  cumul: 918,    cumulVar: -6   },
        inscriptions: { q: 370,    qVar: 23,   cumul: 1483,   cumulVar: 9    },
        envigueur:    { q: 307,    qVar: 18,   cumul: 293,    cumulVar: 6    },
        volume:       { q: 113490, qVar: -9,   cumul: 587067, cumulVar: 0    }
      }
    },
    "st-janvier": {
      name: "Saint-Janvier (Mirabel)", region: "Laurentides", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/mirabel",
      residential: {
        // Pas de page Centris dédiée pour Saint-Janvier — données reflètent Mirabel (secteur englobant)
        ventes:       { q: 173,    qVar: -15,  cumul: 918,    cumulVar: -6   },
        inscriptions: { q: 370,    qVar: 23,   cumul: 1483,   cumulVar: 9    },
        envigueur:    { q: 307,    qVar: 18,   cumul: 293,    cumulVar: 6    },
        volume:       { q: 113490, qVar: -9,   cumul: 587067, cumulVar: 0    }
      }
    },
    stesophie: {
      name: "Sainte-Sophie", region: "Laurentides", brand: "dici",
      centrisUrl: "https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/sainte-sophie",
      residential: {
        ventes:       { q: 65,     qVar: -2,   cumul: 271,    cumulVar: -8   },
        inscriptions: { q: 104,    qVar: 14,   cumul: 406,    cumulVar: 3    },
        envigueur:    { q: 82,     qVar: 34,   cumul: 72,     cumulVar: 1    },
        volume:       { q: 34348,  qVar: 2,    cumul: 141765, cumulVar: -3   }
      }
    }
  }
};
