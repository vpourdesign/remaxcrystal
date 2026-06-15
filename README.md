# RE/MAX Crystal — Site villes

Site web data-driven présentant les guides de villes des Basses-Laurentides
(RE/MAX Crystal) et de Lanaudière (RE/MAX D'ici).

## Architecture

```
data/cities.js ┐
data/tax-data.js ├─► build-cities.mjs ─► guide-<slug>.html (×14)
data/market-stats.js ┘        ▲ gabarit : guide-blainville.html
data/events.js ───────────────┘
```

- **`index.html`** — page d'accueil : hero, calculatrices (taxe de bienvenue,
  comparateur de taxes A/B, hypothèque), grille des guides de villes, valeur,
  réseaux sociaux, CTA.
- **`guide-<ville>.html`** — guides complets (Basses-Laurentides), générés depuis
  `data/cities.js` via `build-cities.mjs`. Gabarit maître : `guide-blainville.html`.
- **`guide-dici-<ville>.html`** — pages Lanaudière (RE/MAX D'ici), en préparation.

## Build

```bash
node build-cities.mjs   # régénère tous les guide-<slug>.html depuis data/cities.js
```

## Données

| Fichier | Rôle |
|---|---|
| `data/cities.js` | Contenu narratif des 14 guides de villes |
| `data/tax-data.js` | Taux de taxation municipale par ville |
| `data/market-stats.js` + `market-render.js` | Statistiques du marché immobilier |
| `data/events.js` + `events-render.js` | Événements municipaux |

## Médias

Les images web vivent dans `images/villes/`. Les médias source lourds
(`pourlecourtier/`, `nosdirigeants/`, `bureaux/`, vidéos de galas, `node_modules`)
sont exclus du dépôt via `.gitignore` — conservés en local uniquement.
