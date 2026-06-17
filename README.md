# Sites villes — RE/MAX Crystal &amp; RE/MAX D'ici

Deux sites web data-driven présentant des guides de villes :
- **RE/MAX Crystal** — Basses-Laurentides / Rive-Nord (15 villes)
- **RE/MAX D'ici** — Lanaudière (12 villes, guides en préparation)

## Structure

```
.
├── index.html            ← page racine : sélecteur Crystal / D'ici (pour GitHub Pages)
├── remaxcrystal/         ← site RE/MAX Crystal
│   ├── index.html
│   ├── guide-<ville>.html (15 guides Basses-Laurentides)
│   ├── build-cities.mjs   (génère les guides depuis data/cities.js)
│   ├── data/  images/  brand_assets/
│   └── courtier-*.html, courtiers.js
├── remaxdici/            ← site RE/MAX D'ici
│   ├── index.html
│   ├── guide-dici-<ville>.html (12 guides Lanaudière)
│   └── images/ (placeholders)  brand_assets/ (logos dici)
└── 01_strategie … 06_livrables, presentation-client  (dossiers de travail agence)
```

## Pipeline Crystal

```
data/cities.js ┐
data/tax-data.js ├─► build-cities.mjs ─► guide-<slug>.html
data/market-stats.js ┘        ▲ gabarit : guide-blainville.html
data/events.js ───────────────┘
```

```bash
cd remaxcrystal && node build-cities.mjs   # régénère les guides Crystal
```

## RE/MAX D'ici — à compléter

- **Données fiscales** : provisoires dans l'index (objet `cityData`), à remplacer par les vraies valeurs par ville.
- **Images** : placeholders `placehold.co` (hero, cartes, reels, équipe), à remplacer.
- **Guides de ville** : pages `guide-dici-*.html` encore en « Bientôt disponible ».

## Médias

Les médias source lourds (`remaxcrystal/images/pourlecourtier/`, `nosdirigeants/`,
`bureaux/`, vidéos de galas, `node_modules`) sont exclus du dépôt via `.gitignore`
— conservés en local uniquement.
