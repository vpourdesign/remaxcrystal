# Ajouter un modèle au Guide de prompting IA

**Temps requis : environ 5 minutes. Aucune connaissance en programmation nécessaire.**

Le Guide de prompting (`outil-prompt.html`) propose des « objectifs » aux courtiers :
annonce, courriel, vidéo, etc. Chaque objectif est un **modèle** rangé dans un seul
fichier : `data/prompt-templates.js`. Pour ajouter un objectif, on ajoute un modèle
dans ce fichier. C'est tout — la page le détecte automatiquement.

---

## Étape 1 — Ouvrir le fichier

Ouvrez `remaxcrystal/data/prompt-templates.js` dans n'importe quel éditeur de texte
(TextEdit, VS Code, Notepad...).

## Étape 2 — Copier un modèle existant

Repérez un bloc complet qui commence par `{` et finit par `},` — par exemple tout le
bloc `annonce-vente-residentielle`. Copiez-le au complet et collez-le **juste avant**
la ligne `];` à la fin de la liste. N'oubliez pas la virgule après le `}` du bloc
précédent.

## Étape 3 — Remplir les champs

| Champ | Ce que c'est | Exemple |
|---|---|---|
| `id` | Identifiant unique, en minuscules avec des tirets | `"lettre-remerciement-client"` |
| `titre` | Le nom affiché sur la carte | `"Lettre de remerciement"` |
| `description` | Une phrase qui explique l'objectif | `"Remercier un client après la transaction"` |
| `icone` | Une icône parmi : `maison`, `courriel`, `video`, `reseaux`, `negociation`, `prospection` | `"courriel"` |
| `outils` | Les outils compatibles avec ce modèle | `["chatgpt", "claude", "gemini"]` |
| `questions` | Les questions posées au courtier (5 à 8 idéalement) | voir ci-dessous |
| `clarifications` | 2 ou 3 questions bonus posées seulement si les réponses manquent de détails | voir ci-dessous |
| `template` | Le texte du prompt, avec les réponses insérées entre `{{ }}` | voir ci-dessous |
| `explication` | 3 puces max : pourquoi ce prompt fonctionne | |
| `conseils` | 2 ou 3 conseils d'utilisation | |
| `formatSortie` | Le format de réponse à demander à l'IA | `"Une lettre de 150 mots"` |
| `exempleSortie` | Un mini exemple du résultat attendu | |

### Une question, c'est ceci :

```js
{
  id: 'nom_client',                          // identifiant unique DANS ce modèle
  label: 'Quel est le nom du client?',       // la question affichée
  type: 'texte',                             // 'choix' | 'texte' | 'texte_long'
  obligatoire: false,                        // true = impossible de la passer
  poidsScore: 12,                            // son importance dans la jauge (voir plus bas)
  placeholder: 'Ex. : la famille Bélanger'   // l'exemple grisé dans le champ
}
```

Pour une question à choix, ajoutez `options: ['Choix A', 'Choix B', 'Choix C']`.
Les `id` doivent utiliser seulement des lettres, chiffres, traits d'union ou
traits de soulignement.

### Une clarification, c'est presque pareil :

```js
{
  questionId: 'occasion',                    // identifiant (différent des questions!)
  label: 'Quelle était l’occasion exacte?',   // ⚠︎ utilisez l’apostrophe courbe (’) dans le texte
  type: 'texte',
  poidsScore: 8,
  placeholder: 'Ex. : la vente de leur première maison'
}
```

### Le template : insérer les réponses

- `{{nom_client}}` → remplacé par la réponse du courtier.
- `{{#si occasion}} L'occasion : {{occasion}}.{{/si}}` → toute la portion entre
  `{{#si ...}}` et `{{/si}}` disparaît si la question n'a pas été répondue.

## Étape 4 — Les poids (la jauge de puissance)

Visez environ **80 points** pour les questions principales et **20 points** pour
les clarifications. Les questions sont normalisees sur 100; les clarifications
ajoutent ensuite un bonus. Donnez plus de points aux questions qui changent
vraiment le resultat (faits concrets), moins aux preferences de style.
Si les reponses principales sont trop legeres, l'outil pose automatiquement
les clarifications.

## Étape 5 — Sauvegarder et vérifier

1. Sauvegardez le fichier.
2. Ouvrez (ou rechargez) `outil-prompt.html` dans votre navigateur.
3. Votre nouveau modèle apparaît à l'étape « Que voulez-vous créer aujourd'hui? ».

**En cas d'erreur** (champ oublie, `id` en double, outil inconnu, variable du
template non definie...), le modele est simplement ignore et un message precis
s'affiche dans la console du navigateur
(clic droit → Inspecter → Console). Les autres modèles continuent de fonctionner.

## Vérification automatique (optionnel, pour les développeurs)

```bash
cd remaxcrystal
node --test tests/prompt-engine.test.mjs
```

Les tests confirment que tous les modèles sont valides et que les prompts
s'assemblent sans résidu.
