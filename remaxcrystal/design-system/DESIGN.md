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
| Donnée | Rouge RE/MAX | `#EF2525` | Une seule donnée mise en avant par visuel (la première barre). Sur la page courtier (web), aussi en touches : filet de 36 × 3 px sous chaque titre de section, guillemets des témoignages (demande de la cliente, 2026-11-11). Jamais en fond de grande surface, jamais pour du texte courant. |
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
| Texte | **Montserrat** | 400 / 500 | Casse normale, interligne `1.5`, centré dans les publications, justifié avec césure sur le web (aligné à gauche sous 480 px), demande de la cliente du 2026-11-11. |

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
- **Page de courtier (web)** : grille de 12 colonnes, layout à rail collant. Chaque chapitre : titre en Anton dans un rail à gauche (4 colonnes, `position: sticky`), contenu à droite (colonnes 6 à 12). Hero en split sobre (texte 7 colonnes, portrait 4 colonnes), nom sur une ligne, photo assise sur un socle marine décalé de 20 px, puis une bande de faits marine pleine largeur. Rayons : 4 px pour les boutons et la photo, 6 px pour les blocs. Aucune pilule sur le web. Ton corporatif : sur le web, Anton reste au service des titres (max 4,4 rem pour le nom, 2,6 rem pour les sections), jamais en affiche géante. Chapitres crème séparés par un filet encre de 3 px; bandes marine (engagements, contact) et brume (témoignages) pour rythmer. Montgolfière RE/MAX (`brand_assets/ballon-240.webp`, tirée de `digital_ballon.png`) posée sur le coin haut gauche du portrait, et en petit devant la signature du pied. Gabarit : `courtiers/genevieve-marchand.html`.
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

---

## Guides de villes (web)

Un entre-deux : la retenue des pages de courtiers, la chaleur et l'utilité des guides. Le résultat doit se lire comme un guide de magazine régional tenu par l'agence. Vaut pour les 15 guides Crystal (`guide-*.html`) et les 12 guides D'ici (`../remaxdici/guide-dici-*.html`).

Fichiers :
- `guide.css` : la feuille source unique, avec un bloc de tokens par marque (`@tokens crystal`, `@tokens dici`) et une partie commune.
- `../refonte-guides.mjs` : le script qui transforme un guide et y colle le style.

**Ce qui vient des pages de courtiers** : les tokens, Anton + Montserrat, les formes plates (rayons 4 px pour l'interface, 6 px pour les blocs et les photos), le filet rouge 36 × 3 px sous H1 et H2, les bandes pleines (marine, brume), le filet encre de 3 px entre deux chapitres crème, le rail collant, les boutons rectangulaires, la transition de couleur de 200 ms.

**Ce qui reste des guides** : la grande photo de la ville en tête, la galerie de vraies photos de parcs, le texte long, le tableau Centris, les tableaux de trajets et de taxes, les calculateurs, le sommaire numéroté, l'ordre des sections.

**Typo** : Anton en capitales pour H1 (`clamp(2.35rem, 5vw, 4.4rem)`) et H2 (`clamp(1.8rem, 2.8vw, 2.6rem)`), jamais plus grand. Chiffre des calculateurs en Anton (`clamp(2.4rem, 4vw, 3.4rem)`). Montserrat 400 / 500 / 600 pour tout le reste. Texte courant `clamp(1rem, 1.05vw, 1.0625rem)`, petit texte `clamp(0.875rem, 0.95vw, 0.9375rem)` : rien sous 14 px. Le portrait est justifié avec césure (aligné à gauche sous 480 px); son premier paragraphe et les chapôs restent alignés à gauche.

**Grille** : 12 colonnes, conteneur 1240 px, gouttière `clamp(16px, 2vw, 28px)`, marge `clamp(16px, 4vw, 48px)`, sections de `clamp(64px, 8vw, 112px)`. Layout magazine : un sujet dominant par section, des empans inégaux qui changent d'une section à l'autre, des photos qui tiennent leur colonne, la hiérarchie par la taille et le filet plutôt que par la boîte.

| Section | Fond | Empans (1440 px) |
|---|---|---|
| Ouverture | photo pleine largeur, puis crème | bandeau du titre 8 col. à cheval sur la photo; chapô 7 + fiche de repères 4 (zones nommées) |
| Sommaire | crème, deux filets brume | 7 entrées sur une ligne (4 par ligne sous 1080 px, 2 sous 680 px) |
| Calculateurs | bande pleine | rail du titre 4 + outil 8; dans l'outil, formulaire 3 / résultat 5 |
| Portrait `#intro` | crème | texte 7 + photo 4, une colonne vide entre les deux (zones nommées `tete`, `texte`, `photo`) |
| Qualité de vie `#qualite` | bande brume | tête 5 + 6; liste éditoriale, une ligne par sujet : titre 4, texte 5, repère 3. Tient avec 4, 5 ou 6 sujets |
| Marché `#marche` | crème | tête 8 + fiche de source 4; tableau Centris 12 |
| Événements `#evenements` | crème, filet encre 3 px au-dessus | texte 6 + bloc-lien 6 |
| Parcs `#parcs` | bande pleine | tête 5 + 6; mosaïque : 7 (deux rangées) + 5 / 5, puis 6 + 6. Avec 4 photos la dernière prend 12, avec 2 photos 7 + 5 |
| Transport `#transport` | crème | rail collant 4 + tableaux 8 |
| Pied de page | encre | marque 4, villes 4 (deux sous-colonnes dès 7 liens), puis Outils 2 + Contact 2, ou Contact 3 seule si « Outils » n'existe pas |

Sous 1080 px les rails passent au-dessus de leur contenu; sous 680 px tout est sur une colonne. Les tableaux défilent à l'horizontale dans `.table-wrap` et `.stats-table-wrap` (première colonne du tableau Centris collante).

**Tokens par marque** (même système, autres valeurs) :

| Rôle | Crystal | D'ici | Source D'ici |
|---|---|---|---|
| `--creme` fond | `#FAF9F0` | `#FAF9F1` | blanc cassé du ballon, `remaxdici/brand_assets/dicinoir.png` |
| `--bande` barre du haut, bandes, bandeaux | `#1C315E` | `#091435` | nuit du ballon |
| `--identite` filets de structure, liens, boutons | `#1C315E` | `#3E5CAA` | bleu du ballon |
| `--encre` titres, pied de page | `#151A2E` | `#091435` | nuit du ballon |
| `--rouge` filet et donnée pointée | `#EF2525` | `#ED2424` | rouge du ballon |
| `--brume` filets fins, bande claire | `#E0E3E8` | `#DFE4F0` | brume Crystal tirée vers le bleu |
| `--ardoise` texte | `#3D4555` | `#39415A` | ardoise Crystal tirée vers le bleu |
| `--gris-note` notes, sur crème seulement | `#656571` | `#5F6579` | idem |
| `--focus` anneau de focus 2 px | `#3578C4` | `#3E5CAA` | bleu du ballon |

Chez Crystal le marine fait à la fois la bande et l'identité. Chez D'ici les deux rôles sont séparés : la nuit pour les bandes (le filet rouge y reste lisible), le bleu du ballon pour les détails. Logos : `Crystal-long-blanc-crystal.webp` et `diciblanc.png` dans la barre du haut et le pied de page. Palette D'ici validée par Vincent le 2026-11-20.

**Mouvement** : transitions de couleur de 200 ms; survol, focus visible (2 px) et état actif sur tout ce qui se clique. Une seule animation : l'entrée du bandeau, du chapô et de la fiche à l'ouverture (560 ms, décalage de 90 ms, `transform` et `opacity`), coupée sous `prefers-reduced-motion`. Pas de GSAP, pas de Lenis, pas de parallaxe.

**Interdits propres aux guides** :
- Dégradés, ombres, flou, grain : `guide.css` n'en contient aucun et le script refuse de générer s'il en trouve.
- Or et émeraude. Les variations du tableau Centris se lisent à la flèche et à la graisse, pas à la couleur.
- Grilles de cartes identiques, bloc « gros chiffre + petit libellé », icône dans une pastille, pilules (les numéros de route sont des étiquettes rectangulaires au filet).
- Texte posé sur une photo : toujours dans un bandeau plein (titre de l'ouverture, légende du portrait).
- `#fff` et `#000`, texte en dégradé, bordure colorée à gauche d'un encadré, `transition: all`, cible tactile sous 44 px, texte sous 14 px.
- Apparitions au défilement, Tailwind (la remise à zéro est dans `guide.css`), Raleway, Open Sans.

**Mode d'emploi de `refonte-guides.mjs`** (Node, sans dépendance) :

```
cd remaxcrystal
node refonte-guides.mjs <entrée.html> <sortie.html> [--marque crystal|dici] [--noindex]
node refonte-guides.mjs --verifier [fichier.html ...]   # transforme en mémoire, n'écrit rien
node refonte-guides.mjs --tous                          # les 27 guides, en place, tout ou rien
```

- La marque se déduit du dossier (`remaxdici/` ou préfixe `guide-dici-`); `--marque` la force. `--noindex` ne sert qu'aux prototypes `*-refonte.html`, que `--tous` ignore.
- Le script remplace tous les blocs `<style>` par un seul `<style id="guide-refonte">`, change le lien Google Fonts, retire Tailwind, GSAP, ScrollTrigger et Lenis ainsi que le JavaScript qui en dépend, enveloppe chaque section dans `.section-tete` et `.section-corps`, et remplace les styles en ligne des tableaux par des classes.
- Il ne touche ni au texte, ni aux `id`, ni au JSON-LD, ni aux balises meta, ni au code des calculateurs : chaque passage le vérifie et s'arrête sinon. Une ancre absente ou en double arrête tout, aucun fichier n'est écrit.
- Il est idempotent : sur un guide déjà refondu, il ne fait que rafraîchir le style depuis `guide.css`. Pour changer le look des 27 guides, on modifie `guide.css` puis on relance `--tous`.
- Avant `--tous` : lancer `--verifier`, lire la liste (elle signale les guides à 1 ou 2 calculateurs), puis vérifier deux ou trois pages en local.

### Accueils (index.html des deux sites)
Même système que les guides : `guide.css` (tokens, barre, menu, titres, ouverture, calculateurs, pied de page) suivi de `accueil.css`, injectés par `refonte-guides.mjs` dans le même bloc `<style id="guide-refonte" data-page="accueil">`. Rien n'est écrit à la main dans les pages.

- **Ouverture** : la photo, le titre sur son bandeau, le chapô, puis le sommaire numéroté des villes sur 12 colonnes (5 par rangée pour 15 villes, 4 pour 12). Il remplace la liste de faits des guides.
- **Calculateurs** : rail de 4 colonnes (titre, texte, liste des trois outils qui ouvrent leur onglet) et outil sur 8 colonnes.
- **Phrase de l'agence** : une phrase en Montserrat 500, les données en 600 encre, le filet rouge au-dessus. Jamais de blocs de chiffres géants.
- **Villes** : une ville vedette sur 8 colonnes et deux rangées, sa légende sur le bandeau; les autres en rangées d'empans variés (4/4/4, 7/5, 5/7, 6/6). La mosaïque est dessinée pour 12 ou 15 villes; le script le signale si le compte change.
- **Courtiers** : bande brume, texte et liste éditoriale sur 6 colonnes, vidéo verticale (4:5) sur 5 colonnes.
- **Bureaux** : photo, adresse, deux actions (téléphone plein, itinéraire en contour). Trois colonnes pour trois bureaux, deux pour deux.
