# Guide de prompting IA — documentation technique

Outil interactif qui aide un courtier immobilier a preparer une consigne claire
pour ChatGPT, Claude, Gemini ou Perplexity, via un parcours conversationnel
sans jargon. 100 % cote client, aucun backend.

## Fichiers

| Fichier | Rôle |
|---|---|
| `outil-prompt.html` | La page complète : interface conversationnelle, machine à états (réducteur), rendu |
| `data/prompt-templates.js` | Les modèles (objectifs) — **un seul fichier à éditer pour ajouter un modèle** |
| `data/prompt-engine.js` | Moteur en fonctions pures : interpolation, score, clarifications, adaptation par outil, validation |
| `tests/prompt-engine.test.mjs` | Tests unitaires du moteur (`node --test`) |
| `docs/AJOUTER-UN-MODELE.md` | Guide pas-à-pas non technique pour ajouter un modèle |
| `DESIGN.md` | Cadre de grille et de layout retenu pour l'outil |

## Choix d'architecture

Le site RE/MAX Crystal est un site statique (pages HTML autonomes + `data/*.js`),
sans build. L'outil suit donc le même patron plutôt qu'un module Vite/React :

- **Zéro dépendance, zéro build** : la page se dépose sur l'hébergement telle quelle.
- **Machine à états** : un réducteur pur (`reduire(etat, action)`) + `dispatch()`,
  équivalent vanille de `useReducer`. L'interface est reconstruite à partir de
  l'état à chaque action (source de vérité unique), ce qui rend le « retour en
  arrière sans perdre ses réponses » trivial.
- **Toute la logique métier vit dans `data/prompt-engine.js`** (fonctions pures,
  documentées JSDoc, testées sous Node sans navigateur).
- **Validation des modèles au chargement** (équivalent zod sans dépendance) :
  un modèle invalide est ignoré avec un message d'erreur précis en console,
  jamais une page cassée.

## Moteur (`PromptEngine`)

- `validateTemplates(templates)` → `{ valides, erreurs }`
- `buildPrompt(template, reponses)` → interpolation `{{var}}`,
  blocs conditionnels `{{#si x}}...{{/si}}` et `{{#non x}}...{{/non}}`
- `computeScore(template, reponses)` → score normalise sur 100.
  Les questions principales sont ramenees sur 100, puis les clarifications
  ajoutent un bonus pouvant faire monter la note jusqu'a 100.
  Choix repondu = plein poids; texte libre progressif :
  < 10 caracteres → 30 % · 10-40 → 70 % · > 40 → 100 %
- `selectClarifications(template, reponses)` → max 3 questions jamais posées,
  non répondues, triées par poids décroissant (seuil de déclenchement : score < 70)
- `adaptForTool(outil, template, reponses)` → prompt final adapté
  (ChatGPT : format explicite · Claude : contexte d'abord · Gemini : concis +
  exemple · Perplexity : sources récentes · Autre : générique robuste)
- `getConseils(outil, template, niveau)` → 3 conseils maximum, adaptes a
  l'outil, au modele choisi et au niveau d'aisance

## Parcours et interface

- Mise en page en grille 12 colonnes avec panneau d'accompagnement sticky
  a gauche et parcours conversationnel a droite
- Filtre automatique des modeles selon l'outil choisi
- Mode "Modifier mes reponses" : changer l'outil, le niveau, l'objectif
  ou une reponse sans recycler un ancien contexte par erreur
- Alerte de confidentialite visible avant la saisie

## Suivi analytique (optionnel)

Définir un gestionnaire global avant ou après le chargement de la page :

```html
<script>
  window.onPromptToolEvent = function (nom, donnees) {
    gtag('event', nom, donnees); // ou dataLayer.push(...)
  };
</script>
```

Événements émis : `outil_choisi`, `niveau_choisi`, `modele_choisi`,
`question_repondue`, `question_passee`, `clarifications_proposees`,
`clarification_repondue`, `clarification_passee`, `prompt_genere`,
`prompt_copie`, `recommence`.

## Tests

```bash
cd remaxcrystal
node --test tests/prompt-engine.test.mjs
```

## Accessibilité

Navigation clavier complete (boutons natifs, `focus-visible` marque), log de
conversation non relu en boucle, zone de statut dediee pour la question courante
et la copie, focus renvoye vers le premier champ utile, erreurs inline pour les
champs requis, `prefers-reduced-motion` respecte, utilisable de 360 px au grand ecran.
