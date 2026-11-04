# DESIGN.md — RE/MAX Crystal

Système tiré (move 01, Pull) de trois publications sociales de l'agence (rappel de changement d'heure, bienvenue à une courtière, statistiques de juin 2026) et du site agence.remaxcrystal.com. Les photos des publications ne font pas partie du système : seules la mise en page, la couleur et la typo comptent.

Fichiers :
- `tokens.css` : toutes les valeurs, à coller ou à lier.
- `index.html` : spécimen (palette, typo, composants) et les trois gabarits de publication 4:5 reconstruits.

---

## Brand & voice

- **Pour qui :** propriétaires et acheteurs des Basses-Laurentides, et les courtiers de l'agence eux-mêmes.
- **En 3 mots :** franc, local, solide.
- **Signature :** « Une région · Une équipe · Des résultats ». Elle ferme les publications, toujours en capitales, avec des points médians.
- **Ton :** phrases courtes, un fait par publication. On annonce (« On recule l'heure! »), on accueille (« Bienvenue »), on montre un chiffre. Pas de superlatifs, pas d'emoji, pas de tirets cadratins. Français du Québec correct, vouvoiement dans les textes au public.

## Colour

| Rôle | Nom | Hex | Usage |
|---|---|---|---|
| Fond | Crème | `#FAF9F0` | Fond de toutes les publications et des pages. Jamais de blanc pur. |
| Identité | Marine | `#1C315E` | Bandeaux, pied de publication, barre de donnée principale, boutons. |
| Titres | Encre | `#151A2E` | Titres d'affiche sur crème. |
| Donnée | Rouge RE/MAX | `#EF2525` | Une seule donnée mise en avant par visuel (la première barre). Jamais en fond de grande surface, jamais pour du texte courant. |
| Structure | Brume | `#E0E3E8` | Pistes des barres, filets, lignes de grille, bordures. |
| Texte | Ardoise | `#3D4555` | Texte courant. |
| Texte discret | Gris note | `#656571` | Notes de bas, mentions légales, légendes. |
| Lien (web) | Bleu Crystal | `#3578C4` | Liens et focus sur le site seulement. |

Règle de dosage : crème partout, marine pour encadrer, rouge pour pointer. Sur un visuel, le rouge occupe moins de 10 % de la surface.

## Typography

| Rôle | Police | Graisse | Traitement |
|---|---|---|---|
| Affiche | **Anton** | 400 (c'est déjà un noir) | Capitales, interlettrage `-0.005em`, interligne `0.92`. Titres et chiffres. |
| Sous-titre | **Montserrat** | 600 | Capitales, interlettrage `0.04em`. Nom d'une personne, date, libellé d'une donnée, signature. |
| Texte | **Montserrat** | 400 / 500 | Casse normale, interligne `1.5`, centré dans les publications, aligné à gauche sur le web. |

Anton et Montserrat sont les équivalents libres (Google Fonts) les plus proches des polices des publications. Si l'agence fournit ses fichiers de police d'origine, ils remplacent ces deux familles sans rien changer d'autre.

Échelle (publication 1080 × 1350) : affiche 150 px · chiffre de donnée 110 px · sous-titre 40 px · texte 38 px · signature 30 px · note 17 px.
Échelle web (fluide) : voir `--fs-*` dans `tokens.css`, tout en `clamp()`.
Longueur de ligne : 28 à 34 caractères dans une publication, 65 ch max sur le web.

Le site actuel utilise Raleway et Open Sans. Le système documente Anton + Montserrat comme direction; on ne touche pas au site en ligne sans une décision de Vincent.

## Spacing & layout

- Unité : 8 px. Publications : marges latérales 96 px (≈ 9 % de la largeur), titre à 25 % de la hauteur.
- Beaucoup d'air au-dessus du titre : le haut de la publication respire, la photo ou la donnée occupe le bas.
- Web : conteneur 1160 px, gouttière 24 px, sections de 96 à 128 px.

## Layout & grid

- **Grille :** publications sur une grille de 12 colonnes à marges de 96 px; tout est centré sur l'axe vertical, sauf la languette du logo (coin inférieur droit).
- **Archétype :** affiche en deux temps. Haut : message (titre + une phrase). Bas : preuve (photo, barres de données). Le pied marine porte la signature.
- **Page de courtier (web)** : grille de 12 colonnes, layout à rail collant. Chaque chapitre : titre en Anton dans un rail à gauche (4 colonnes, `position: sticky`), contenu à droite (colonnes 6 à 12). Hero en split sobre (texte 7 colonnes, portrait 4 colonnes), nom sur une ligne, photo assise sur un socle marine décalé de 20 px, puis une bande de faits marine pleine largeur. Rayons : 4 px pour les boutons et la photo, 6 px pour les blocs. Aucune pilule sur le web. Ton corporatif : sur le web, Anton reste au service des titres (max 4,4 rem pour le nom, 2,6 rem pour les sections), jamais en affiche géante. Chapitres crème séparés par un filet encre de 3 px; bandes marine (engagements, contact) et brume (témoignages) pour rythmer. Gabarit : `courtiers/genevieve-marchand.html`.
- **Photos de villes** : chaque guide de ville a une photo principale (hero), répertoriée dans `data/courtiers-config.js` (`VILLES[].photo`). C'est la seule image de ville admise sur le site : panorama pleine largeur sur les pages de courtiers, vignette dans les cartes de villes, fond possible d'une bande. Toujours la vraie photo du guide, jamais une photo de stock, jamais de texte posé dessus sans bandeau marine.
- Interdits : titre aligné à gauche dans une publication, plus de deux niveaux de texte sous le titre, texte posé sur une photo sans bandeau marine.

## Shape & elevation

- **Barres de donnée :** pilule pleine (`999px`), posée sur une piste Brume légèrement plus longue.
- **Bandeau :** rectangle marine, rayon 18 px, centré, posé sur la photo.
- **Languette du logo :** carte crème (ou marine pour un visuel à pied marine), seul le coin haut gauche est arrondi (28 px), collée au coin inférieur droit.
- **Boutons web :** rectangle, rayon 4 px. Les pilules restent réservées aux barres de donnée des publications.
- **Ombre :** une seule, et seulement sur la barre de donnée qui chevauche une autre (léger décalage vers le bas). Jamais d'ombre sur les cartes, jamais de dégradé, jamais de flou.

## Motion

- Web seulement. Une transition de couleur de 200 ms. Les barres de donnée peuvent se remplir une fois à l'apparition (transform `scaleX`, 700 ms, `cubic-bezier(0.16, 1, 0.3, 1)`), puis plus rien ne bouge.
- `prefers-reduced-motion` : aucune animation.

## Components

1. **Titre d'affiche** : Anton, Encre, centré, une ou deux lignes, se termine souvent par un point d'exclamation quand c'est une annonce.
2. **Bandeau nom** : bandeau marine; en haut, le nom en Montserrat 600 capitales; en dessous, le mot d'affiche en Anton crème.
3. **Barre de donnée** : pilule; chiffre en Anton à gauche, libellé en Montserrat capitales à droite, astérisque si une note de source existe. La première barre en rouge, les suivantes en marine.
4. **Note de source** : Montserrat 500, capitales, Gris note, 17 px, juste au-dessus du pied. Obligatoire dès qu'il y a un chiffre.
5. **Pied signature** : bande marine pleine largeur, signature en crème.
6. **Languette logo** : voir Shape.
7. **Bouton web** : rectangle marine (rayon 4 px), texte crème Montserrat 600; survol : Encre; focus : anneau Bleu Crystal 2 px décalé de 3 px.
8. **Bande de faits (web)** : bloc marine plein, trois cellules séparées par un filet crème à 20 %, chiffre en Anton et libellé en capitales; un filet rouge de 36 px sous le premier chiffre. Remplace les pilules sur les pages.

## Bans

- Blanc pur `#fff` et noir pur `#000`.
- Rouge en grand aplat, en texte courant ou sur plus d'une donnée par visuel.
- Dégradés, ombres portées douces sous les cartes, verre dépoli, textures.
- Titres en casse normale ou en italique dans une publication.
- Mots isolés mis en couleur dans un titre.
- Photo sans traitement de lisibilité quand du texte la recouvre : toujours le bandeau marine.
- Chiffre sans note de source.
- Tirets cadratins dans les textes.
- Le logo hors de sa languette ou déformé.

**Test anti-slop :** quelqu'un pourrait-il deviner ces couleurs à partir du seul secteur « courtage immobilier »? Le marine oui, mais la combinaison crème + marine + rouge de donnée, l'affiche condensée et la languette du logo sont propres à Crystal. À garder tels quels.
