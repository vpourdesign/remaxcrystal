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
    taxRates: { house: 0.322, condo: 0.322 },
    fixedFees: 292,
    poolFee: 0,
    source: 'Ville de Mirabel, Prévisions budgétaires 2026',
    sourceUrl: 'https://mirabel.ca/taxation',
    note: 'Taux 1-2 logements : 0,267 $ général + 0,050 $ dette + ~0,005 $ Infracenne. Tarif fixe : eau 292 $/logement. Nouveau rôle 2026-2028. Taxes de secteur possibles selon l\'adresse.'
  },
  oka: {
    name: 'Oka',
    mutation: [[62900, 0.005], [315000, 0.01], [630100, 0.015], [1260300, 0.02], [Infinity, 0.03]],
    taxRates: { house: 0.605, condo: 0.605 },
    fixedFees: 280,
    poolFee: 0,
    source: 'Municipalité d\'Oka, Règlement de taxation 2026-299',
    sourceUrl: 'https://municipalite.oka.qc.ca/citoyen/compte-de-taxes/',
    note: 'Taux et tarif d\'eau 2025 — le règlement 2026-299 (nouveau rôle 2026-2028) est à valider. Mutation : barème spécial Oka (règl. 2018-195).'
  },
  pointecalumet: {
    name: 'Pointe-Calumet',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.82, condo: 0.82 },
    fixedFees: 254,
    poolFee: 0,
    source: 'Municipalité de Pointe-Calumet, page Taxation',
    sourceUrl: 'https://www.pointe-calumet.ca/services-aux-citoyens/finances/taxation/',
    note: 'Taux 2026 non publié en ligne — estimation NON VÉRIFIÉE, à confirmer auprès de la municipalité (450 473-5930). Tarif eaux usées 254 $ (2025).'
  },
  'st-janvier': {
    name: 'Saint-Janvier (Mirabel)',
    mutation: [[62900, 0.005], [315000, 0.01], [500000, 0.015], [Infinity, 0.03]],
    taxRates: { house: 0.322, condo: 0.322 },
    fixedFees: 292,
    poolFee: 0,
    source: 'Ville de Mirabel, Prévisions budgétaires 2026 (secteur Saint-Janvier)',
    sourceUrl: 'https://mirabel.ca/taxation',
    note: 'Saint-Janvier est un secteur de Mirabel — mêmes taux 2026 (0,317 $ + Infracenne) et tarif d\'eau 292 $. Taxes de secteur possibles selon l\'adresse.'
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
  }
};
