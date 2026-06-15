# Stratégie — Guides de villes RE/MAX Crystal / RE/MAX D'ici

Document de référence pour le déploiement des 26 guides de villes et l'automatisation des données trimestrielles.

---

## 1. Portée — 26 villes

### RE/MAX Crystal (14 villes) — Basses-Laurentides
À compléter selon le territoire réel. Liste de travail :

1. Blainville
2. Sainte-Thérèse
3. Lorraine
4. Rosemère
5. Boisbriand
6. Bois-des-Filion
7. _(à confirmer)_
8. _(à confirmer)_
9. _(à confirmer)_
10. _(à confirmer)_
11. _(à confirmer)_
12. _(à confirmer)_
13. _(à confirmer)_
14. _(à confirmer)_

### RE/MAX D'ici (12 villes)
1. _(à confirmer)_
2. _(à confirmer)_
3. _(à confirmer)_
4. _(à confirmer)_
5. _(à confirmer)_
6. _(à confirmer)_
7. _(à confirmer)_
8. _(à confirmer)_
9. _(à confirmer)_
10. _(à confirmer)_
11. _(à confirmer)_
12. _(à confirmer)_

> **TODO Vincent** : remplir les 8 villes Crystal manquantes et les 12 villes D'ici, avec leur URL Centris exacte.

---

## 2. Architecture des pages

Chaque ville a sa propre page `guide-<slug>.html` (ex. `guide-blainville.html`).

**Sections standard** :
- Hero
- Table des matières
- Outils (calculatrices)
- 01 — Intro
- 02 — Qualité de vie
- **03 — Marché immobilier** ← données automatisées (voir section 4)
- 04 — Écoles
- 05 — Événements
- 06 — Parcs
- 07 — Transport
- CTA contact + footer

Toutes les pages partagent le même système visuel (variables CSS, topbar, typographie).

---

## 3. Source des statistiques — Centris

Chaque ville a une page de statistiques Centris au format :

```
https://www.centris.ca/fr/outils/statistiques-immobilieres/<region>/<ville-slug>
```

Exemple Blainville : <https://www.centris.ca/fr/outils/statistiques-immobilieres/laurentides/blainville>

### Champs utilisés (tableau « Total résidentiel »)
| Champ Centris            | Clé interne     | Format          |
|--------------------------|-----------------|-----------------|
| Ventes                   | `ventes`        | nombre          |
| Nouvelles inscriptions   | `inscriptions`  | nombre          |
| Inscriptions en vigueur  | `envigueur`     | nombre          |
| Volume (en milliers $)   | `volume`        | nombre (k$)     |

Chaque champ a **4 valeurs** : valeur du trimestre, variation %, cumul 4 derniers trimestres, variation % du cumul.

> On ne stocke **que** ces données dans le système automatisé. Les autres données affichées dans les guides (prix médians par quartier, répartition par type, etc.) doivent venir d'une source vérifiable ou être retirées.

---

## 4. Automatisation des mises à jour trimestrielles

### Fichier unique : `data/market-stats.js`

Toutes les statistiques des 26 villes sont centralisées dans `data/market-stats.js`. C'est un objet JavaScript chargé en `<script>` par toutes les pages de villes.

### Workflow trimestriel (4× par an)

1. Centris publie les stats du trimestre (généralement mi-trimestre suivant).
2. Pour chaque ville, ouvrir l'URL Centris listée dans `market-stats.js` → onglet « Total résidentiel ».
3. Mettre à jour les 4 valeurs × 4 champs dans `data/market-stats.js` pour la ville concernée.
4. Mettre à jour le bloc `meta` :
   - `quarter` : ex. `"T1 2026"`
   - `updated` : date ISO
   - `cumulPeriod` : ex. `"T2 2025 – T1 2026"`
5. Aucune modification HTML requise. Toutes les 26 pages affichent automatiquement les nouvelles valeurs.

### Rendu automatique
Le script `data/market-render.js` (chargé après `market-stats.js`) :
- lit l'attribut `data-city="<slug>"` de la section 03 ;
- injecte les valeurs dans les éléments portant un `data-stat="<champ>.<propriete>"` ;
- applique automatiquement la flèche ↑ / ↓ / — et la couleur selon le signe ;
- formate les nombres en français (espaces de milliers, suffixe « k $ » pour le volume).

### Piste future — scraping automatisé
Quand les 26 villes seront en place, on pourra écrire un petit script Node (`scripts/fetch-centris.mjs`) qui :
- lit la liste des villes + URLs ;
- scrape chaque page Centris ;
- régénère `data/market-stats.js` automatiquement.

Pour l'instant, mise à jour manuelle = OK (10 min × 4 fois par an).

---

## 5. Conventions

- **Slugs** : minuscules, sans accents, tirets (`sainte-therese`, `bois-des-filion`).
- **Brand** : chaque ville est étiquetée `crystal` ou `dici` dans `market-stats.js` pour permettre des filtres futurs.
- **Variations** : nombre signé (ex. `-5` pour −5 %, `0` pour stable, `28` pour +28 %).
- **Volume** : stocké en milliers de dollars (comme Centris). Affiché en M$ ou k$ selon l'échelle.

---

## 6. Prochaines étapes

- [ ] Confirmer la liste finale des 26 villes + URLs Centris
- [ ] Dupliquer `guide-blainville.html` → 25 autres guides
- [ ] Remplir `data/market-stats.js` avec les données T1 2026 pour les 26 villes
- [ ] Lien de chaque carte de ville (index.html) vers son guide
- [ ] Vérifier la cohérence visuelle des sections 03 sur les 26 pages
- [ ] Programmer un rappel calendrier 4× par an pour la mise à jour Centris
