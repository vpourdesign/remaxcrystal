/* ============================================================
   TAX DATA — Données fiscales 2026 pour les 15 villes
   ------------------------------------------------------------
   Format par ville :
     mutation   : tranches [[seuil, taux], ...] (droit de mutation)
     taxRates   : taux résidentiels par 100 $ d'évaluation
     fixedFees  : tarifs fixes annuels connus
     poolFee    : tarif piscine résidentielle (si applicable)
     source     : référence textuelle
     sourceUrl  : URL officielle
     note       : précision méthodologique
   Seuils provinciaux 2026 par défaut :
     [[62 900, 0.005], [315 000, 0.01], [500 000, 0.015], [Inf, 0.03]]
   ============================================================ */
window.TAX_DATA = {
  blainville: {
    name: 'Blainville',
    mutation: [[62900, 0.005], [315000, 0.01], [750000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.466, condo: 0.503 },
    fixedFees: 435,
    poolFee: 50,
    source: 'Ville de Blainville, Taxes et évaluation 2026',
    sourceUrl: 'https://blainville.ca/ville/administration-municipale/taxes-et-evaluation',
    note: 'Inclut les tarifications résidentielles publiées : matières résiduelles et assainissement des eaux.'
  },
  stetherese: {
    name: 'Sainte-Thérèse',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.456, condo: 0.455 },
    fixedFees: 903,
    poolFee: 0,
    source: 'Ville de Sainte-Thérèse, Taxes, évaluation et droit de mutation 2026',
    sourceUrl: 'https://www.sainte-therese.ca/services/services-aux-citoyens/taxes-evaluation-et-droit-de-mutation',
    note: 'Inclut transport en commun, fonds infrastructures, eau potable, assainissement et matières résiduelles.'
  },
  rosemere: {
    name: 'Rosemère',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.4975, condo: 0.4975 },
    fixedFees: 0,
    poolFee: 0,
    source: 'Ville de Rosemère, Règlement 1016 — taxation 2026',
    sourceUrl: 'https://www.ville.rosemere.qc.ca/taxation-et-tarification/',
    note: 'Addition du taux résiduel, du transport collectif et de la taxe spéciale d\'infrastructures.'
  },
  lorraine: {
    name: 'Lorraine',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.526, condo: 0.5532 },
    fixedFees: 496,
    poolFee: 0,
    source: 'Ville de Lorraine, Dépliant de taxes 2026',
    sourceUrl: 'https://lorraine.ca/storage/app/media/Documents/2026_DepliantTaxes_WEB.pdf',
    note: 'Tarifs fixes : matières résiduelles 260 $ (base 12 levées) + Forêt du Grand Coteau 56 $ + eau potable 180 $ (base). Excédents eau/levées facturés au volume.'
  },
  boisbriand: {
    name: 'Boisbriand',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [800000, 0.025], [Infinity, 0.03]],
    taxRates: { house: 0.5113, condo: 0.5113 },
    fixedFees: 502,
    poolFee: 0,
    source: 'Ville de Boisbriand, Dossier sommaire Budget 2026',
    sourceUrl: 'https://www.ville.boisbriand.qc.ca/storage/app/media/ville/administration-municipale/budget-et-etats-financiers/2026/Dossier-sommaire-final-2026.pdf',
    note: 'Taux 2026 du nouveau rôle (incl. taxe transport ARTM 0,0181 $). Tarifs fixes : eau et assainissement 262 $ + matières résiduelles 240 $. Mutation : 2,5 % de 500 000 $ à 800 000 $, 3 % au-delà.'
  },
  boisdesfillions: {
    name: 'Bois-des-Filion',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.4848, condo: 0.4848 },
    fixedFees: 944,
    poolFee: 45,
    source: 'Ville de Bois-des-Filion, Dépliant « Comprendre le compte de taxes 2026 »',
    sourceUrl: 'https://villebdf.ca/wp-content/uploads/2026/02/BDF_DEPLIANT_TAXES2026.www_.pdf',
    note: 'Tarifs fixes par logement : eau 308 $ + égouts 242 $ + matières résiduelles 319 $ + fonds infrastructures 75 $. Taxes de secteur possibles selon l\'adresse.'
  },
  deuxmontagnes: {
    name: 'Deux-Montagnes',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.5838, condo: 0.5838 },
    fixedFees: 722,
    poolFee: 35,
    source: 'Ville de Deux-Montagnes, Dépliant taxes 2026',
    sourceUrl: 'https://www.ville.deux-montagnes.qc.ca/storage/app/media/ville-de-deux-montagnes/administration-et-finances/taxes-et-evaluation-fonciere/hr_ville-dm_depliant-taxes_26.pdf',
    note: 'Taux 0,5735 $ (1-5 log.) + 0,0103 $ usine d\'eau. Tarifs fixes : matières résiduelles 160 $ + eaux usées 163 $ + eau 189 $ + transport 85 $ + déneigement 125 $. Piscine : 25 $ hors-terre / 35 $ creusée.'
  },
  mirabel: {
    name: 'Mirabel',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.317, condo: 0.317 },
    fixedFees: 292,
    poolFee: 0,
    source: 'Ville de Mirabel, Prévisions budgétaires 2026 (Annexe 1)',
    sourceUrl: 'https://mirabel.ca/taxation',
    note: 'Taux 1-2 logements : 0,267 $ général + 0,050 $ foncière spéciale (dette) = 0,317 $. Tarif fixe : eau 292 $/logement. Nouveau rôle 2026-2028. Taxes de secteur possibles selon l\'adresse.'
  },
  oka: {
    name: 'Oka',
    hideMunicipalTax: true, // taux 2026 (règl. 2026-299) non vérifiable en ligne — taxes municipales retirées de la page
    mutation: [[62900, 0.005], [315000, 0.01], [630100, 0.015], [1260300, 0.02], [Infinity, 0.03]],
    taxRates: { house: 0.605, condo: 0.605 },
    fixedFees: 280,
    poolFee: 0,
    source: 'Municipalité d\'Oka, Droit de mutation (règl. 2018-195)',
    sourceUrl: 'https://municipalite.oka.qc.ca/citoyen/droit-de-mutation-oka/',
    note: 'Barème spécial Oka (règlement 2018-195) : 1,5 % jusqu\'à 630 100 $, 2 % jusqu\'à 1 260 300 $, 3 % au-delà. Confirmé sur la page officielle (janvier 2026).'
  },
  pointecalumet: {
    name: 'Pointe-Calumet',
    hideMunicipalTax: true, // taux 2026 non publié (nouveau rôle 2026-2028) — taxes municipales retirées de la page
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.82, condo: 0.82 },
    fixedFees: 254,
    poolFee: 0,
    source: 'Municipalité de Pointe-Calumet, page Taxation',
    sourceUrl: 'https://www.pointe-calumet.ca/services-aux-citoyens/finances/taxation/',
    note: 'Tranche de 3 % au-delà de 500 000 $ à confirmer auprès de la municipalité (450 473-5930).'
  },
  'st-janvier': {
    name: 'Saint-Janvier (Mirabel)',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.317, condo: 0.317 },
    fixedFees: 292,
    poolFee: 0,
    source: 'Ville de Mirabel, Prévisions budgétaires 2026 (secteur Saint-Janvier)',
    sourceUrl: 'https://mirabel.ca/taxation',
    note: 'Saint-Janvier est un secteur de Mirabel — même taux 2026 (0,267 $ général + 0,050 $ dette = 0,317 $) et tarif d\'eau 292 $. Taxes de secteur possibles selon l\'adresse.'
  },
  steannedesplaines: {
    name: 'Sainte-Anne-des-Plaines',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.6174, condo: 0.6174 },
    fixedFees: 646,
    poolFee: 0,
    source: 'Ville de Sainte-Anne-des-Plaines, Dépliant taxes 2026',
    sourceUrl: 'https://www.villesadp.ca/ma-ville/administration/taxes-et-evaluation-fonciere',
    note: 'Taux 0,5889 $ + 0,0285 $ transport en commun. Tarifs fixes (secteur desservi) : eau 227 $ + assainissement 151 $ + matières résiduelles 268 $. Non desservi : fosse septique 93 $.'
  },
  stemarthe: {
    name: 'Sainte-Marthe-sur-le-Lac',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.4891, condo: 0.4891 },
    fixedFees: 633,
    poolFee: 0,
    source: 'Ville de Sainte-Marthe-sur-le-Lac, Présentation budgétaire 2026',
    sourceUrl: 'https://vsmsll.ca/ville/administration-et-finances/taxes-et-evaluation-fonciere',
    note: 'Taux 0,4791 $ + 0,01 $ taxe environnement. Tarifs fixes : eau 220 $ + ordures 205 $ + égouts 130 $ + transport 78 $.'
  },
  stesophie: {
    name: 'Sainte-Sophie',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.434, condo: 0.434 },
    fixedFees: 0,
    poolFee: 0,
    source: 'Municipalité de Sainte-Sophie, page Finances 2026',
    sourceUrl: 'https://www.stesophie.ca/municipalite/administration-et-finances/finances',
    note: 'Taux de base 2026 (nouveau rôle 2026-2028, valeur moyenne +58 %). Aucun tarif fixe résidentiel publié.'
  },
  steustache: {
    name: 'Saint-Eustache',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.4404, condo: 0.4404 },
    fixedFees: 888,
    poolFee: 0,
    source: 'Ville de Saint-Eustache, Compte de taxes 2026',
    sourceUrl: 'https://www.saint-eustache.ca/taxes-permis-et-reglements/taxes-et-evaluation-fonciere/compte-de-taxes',
    note: 'Taux 0,4260 $ + contributions patrimoine 0,0072 $ et environnement 0,0072 $. Tarifs fixes : eau 209 $ + égouts 225 $ + déchets 226 $ + transport 228 $ (1re unité).'
  },

  /* ===== RE/MAX D'ici — 12 villes de Lanaudière (taxes 2026) =====
     Recherche vérifiée sur les documents officiels 2026 de chaque
     municipalité (règlements de taxation / dépliants budgétaires). */
  terrebonne: {
    name: 'Terrebonne',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.6892, condo: 0.6892 },
    fixedFees: 386,
    poolFee: 50,
    source: 'Ville de Terrebonne, Règlement 2528 — taxes et tarifs 2026',
    sourceUrl: 'https://terrebonne.ca/wp-content/uploads/2026/04/R2528-taux-taxes-tarifs-compensations-2026.pdf',
    note: 'Taux combiné : foncière générale 0,6417 $ + infrastructures (eau) 0,0350 $ + Fonds bleu 0,0125 $. Tarifs fixes : eau 240 $ + assainissement 146 $ (la compensation matières résiduelles 185 $ ne s\'applique qu\'au-delà du 1er logement). Piscine 50 $. Droit de mutation : 3 % au-delà de 500 000 $.'
  },
  mascouche: {
    name: 'Mascouche',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.6299, condo: 0.6150 },
    fixedFees: 494,
    source: 'Ville de Mascouche, Taxes 2026 (Règlement 1349)',
    sourceUrl: 'https://mascouche.ca/ville/administration/taxes-1',
    poolFee: 25,
    note: 'Taux combiné : foncière générale 0,3244 $ + assainissement, dossiers régionaux, infrastructures, logement social, service de la dette et transport en commun. Tarifs fixes : eau 264 $ + égout 62 $ + ordures 168 $. Piscine 25 $. Droit de mutation : 3 % au-delà de 500 000 $.'
  },
  repentigny: {
    name: 'Repentigny',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.5739, condo: 0.5739 },
    fixedFees: 484,
    poolFee: 0,
    source: 'Ville de Repentigny, Taxes municipales 2026',
    sourceUrl: 'https://repentigny.ca/services/citoyens/taxes-evaluation-fonciere/taxes-municipales',
    note: 'Taux combiné : foncière générale 0,4190 $ + service de la dette 0,1123 $ + transport ARTM 0,0426 $. Tarifs fixes : matières résiduelles 170 $ + eaux usées 165 $ + réseau routier 149 $ (l\'eau est facturée à la consommation). Droit de mutation : 3 % au-delà de 500 000 $ (confirmé, repentigny.ca).'
  },
  charlemagne: {
    name: 'Charlemagne',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.6514, condo: 0.6514 },
    fixedFees: 999,
    poolFee: 0,
    source: 'Ville de Charlemagne, Budget et taxation 2026',
    sourceUrl: 'https://www.charlemagne.ca/la-ville/administration/taxation-et-role-devaluation-fonciere',
    note: 'Taux résiduel 0,6514 $. Tarifs fixes par logement (coûts directs) : eau 187 $ + égouts 226 $ + matières résiduelles 124 $ + transport collectif 163 $ + sécurité publique 299 $ = 999 $. Droit de mutation : 3 % au-delà de 500 000 $.'
  },
  lassomption: {
    name: "L'Assomption",
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.5896, condo: 0.5896 },
    fixedFees: 709,
    poolFee: 0,
    source: "Ville de L'Assomption, Compte de taxes 2026",
    sourceUrl: 'https://www.ville.lassomption.qc.ca/droits-mutation/',
    note: 'Taux d\'une propriété desservie : base résiduelle 0,5353 $ + entretien des égouts 0,0337 $ + assainissement 0,0206 $. Tarifs fixes : eau (sans compteur) 319 $ + entretien aqueduc 123 $ + ordures et compost 242 $ + contribution climat 25 $. Droit de mutation : 3 % au-delà de 500 000 $.'
  },
  lepiphanie: {
    name: "L'Épiphanie",
    mutation: [[62900, 0.005], [315000, 0.01], [596510, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.5351, condo: 0.5351 },
    fixedFees: 720,
    poolFee: 0,
    source: "Ville de L'Épiphanie, Budget 2026",
    sourceUrl: 'https://www.lepiphanie.ca/taxes-municipales',
    note: 'Taux foncier total : générale 0,4819 $ + service de la dette 0,0532 $. Tarifs fixes (propriétés desservies) : eau potable 375 $ + eaux usées 175 $ + matières résiduelles 170 $. Droit de mutation : 3 % au-delà de 596 510 $ (seuil 1,5 % prolongé).'
  },
  saintsulpice: {
    name: 'Saint-Sulpice',
    mutation: [[62900, 0.005], [315000, 0.01], [Infinity, 0.015]],
    taxRates: { house: 0.4954, condo: 0.4954 },
    fixedFees: 196,
    poolFee: 0,
    source: 'Municipalité de Saint-Sulpice, Règlement 325-2026 (prélevé 2026)',
    sourceUrl: 'https://www.municipalitesaintsulpice.com/services-municipaux/direction-generale-saint-sulpice',
    note: 'Taux général 0,4954 $ (inclut sécurité publique, CMM et transport en commun ; +0,0137 $ pour les propriétés raccordées à l\'égout). Tarifs fixes : entretien aqueduc 30 $ + matières résiduelles 166 $ (l\'eau est facturée au compteur). Droit de mutation : barème provincial standard.'
  },
  lavaltrie: {
    name: 'Lavaltrie',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.6398, condo: 0.6398 },
    fixedFees: 745,
    poolFee: 0,
    source: 'Ville de Lavaltrie, Taux de taxation 2026 (Règlement 366-2025)',
    sourceUrl: 'https://www.ville.lavaltrie.qc.ca/services-citoyens/taxes-et-evaluation/rubriques/taux-de-taxation',
    note: 'Taux total : base résidentielle 0,5322 $ + service de la dette 0,1076 $. Tarifs fixes résidentiels : eau potable 279 $ + eaux usées 201 $ + matières résiduelles 265 $. Droit de mutation : 3 % au-delà de 500 000 $ (barème 2026, ville.lavaltrie.qc.ca).'
  },
  saintrochachigan: {
    name: "Saint-Roch-de-l'Achigan",
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.5114, condo: 0.5114 },
    fixedFees: 825,
    poolFee: 90,
    source: "Municipalité de Saint-Roch-de-l'Achigan, Dépliant Budget 2026",
    sourceUrl: 'https://sra.quebec/taxation',
    note: 'Taux résidentiel 2026 confirmé : 0,2854 $ générale + 0,0508 $ MRC + 0,0790 $ incendie + 0,0962 $ SQ = 0,5114 $. Tarifs fixes 2026 (desservi, sans compteur) : égout 347 $ + aqueduc 323 $ + matières résiduelles 155 $. Piscine/spa 2 000 L+ : 90 $. Droit de mutation : 3 % au-delà de 500 000 $ (confirmé).'
  },
  saintlin: {
    name: 'Saint-Lin–Laurentides',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.5833, condo: 0.5833 },
    fixedFees: 828,
    poolFee: 0,
    source: 'Ville de Saint-Lin–Laurentides, Règlement 847-2026 (taxation 2026)',
    sourceUrl: 'https://www.saint-lin-laurentides.com/decouvrir/administration-et-finances/taxes-et-role-devaluation-fonciere',
    note: 'Taux résidentiel combiné : foncière générale 0,3494 $ + 2 taxes spéciales MRC + sécurité publique/incendie 0,0665 $ + service de police 0,1031 $. Tarifs fixes : eau potable 253 $ + eaux usées 324 $ + matières résiduelles 250 $. Droit de mutation : 3 % au-delà de 500 000 $.'
  },
  saintjacques: {
    name: 'Saint-Jacques',
    mutation: [[62900, 0.005], [315000, 0.01], [Infinity, 0.015]],
    taxRates: { house: 0.555, condo: 0.555 },
    fixedFees: 540,
    poolFee: 100,
    source: 'Municipalité de Saint-Jacques, Règlement 018-2025 (taxation 2026)',
    sourceUrl: 'https://www.st-jacques.org/municipalite/administration/taxes-et-evaluation-fonciere',
    note: 'Taux de base (catégorie résiduelle) 0,555 $ — les taxes spéciales d\'emprunt varient par secteur. Tarifs fixes : aqueduc 170 $ + égout 240 $ + matières résiduelles 130 $. Piscine 100 $. Droit de mutation : barème provincial standard (aucun règlement bonifié repéré).'
  },
  joliette: {
    name: 'Joliette',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.549, condo: 0.549 },
    fixedFees: 376,
    poolFee: 0,
    source: 'Ville de Joliette, Taux de taxation 2026',
    sourceUrl: 'https://www.joliette.ca/storage/app/media/la-ville/administration-et-finances/taxes-et-evaluation/taux-taxation-2026.pdf',
    note: 'Taux résidentiel 0,549 $ (baisse vs 2025 reflétant le nouveau rôle, +45 % d\'évaluation moyenne). Tarifs fixes par logement : eau 154 $ + assainissement 77 $ + matières résiduelles 145 $. Droit de mutation : 3 % au-delà de 500 000 $ (confirmé, joliette.ca — seuils inférieurs indexés 2026).'
  }
};
