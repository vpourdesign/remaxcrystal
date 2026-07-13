# DESIGN.md

## Layout & grid

- Grille retenue : 12 colonnes.
- Layout retenu : scrollytelling avec panneau sticky a gauche et contenu principal a droite.

Prompt grille retenu :
"Construis cette page sur une grille de 12 colonnes a gouttieres constantes. Aligne tous les blocs sur les colonnes et varie les empans (8/4, 4/4/4, 6/6) section par section - jamais tout en pleine largeur."

Prompt layout retenu :
"Construis une sequence scrollytelling : media sticky a gauche, etapes de texte qui defilent a droite et declenchent les changements (ScrollTrigger/IntersectionObserver). Une idee par etape."

Adaptation locale pour cet outil :
- Le panneau sticky de gauche sert de coach editorial Crystal.
- La zone de droite conserve le parcours conversationnel existant.
- La mise en scene reste legere et CSS-first, sans rebatir le site.
