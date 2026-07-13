/* ============================================================
   PROMPT ENGINE — Moteur du Guide de prompting IA
   Fonctions pures, sans dépendance, testables avec `node --test`.
   Utilisé par outil-prompt.html avec data/prompt-templates.js.

   API :
     validateTemplates(templates)              → { valides, erreurs }
     buildPrompt(template, reponses)           → string
     computeScore(template, reponses)          → { score, poidsTotal, poidsObtenu }
     selectClarifications(template, reponses)  → [clarification, ...] (max 3)
     adaptForTool(outil, template, reponses)   → string (prompt final)
     getConseils(outil, template, niveau)      → [string, ...] (max 4)
     TOOLS                                     → métadonnées des outils IA
   ============================================================ */

(function (root) {
  'use strict';

  /* ────────────────────────────────────────────
     Métadonnées des outils IA supportés
     ──────────────────────────────────────────── */
  var TOOLS = {
    chatgpt:    { id: 'chatgpt',    nom: 'ChatGPT',    url: 'https://chatgpt.com' },
    claude:     { id: 'claude',     nom: 'Claude',     url: 'https://claude.ai' },
    gemini:     { id: 'gemini',     nom: 'Gemini',     url: 'https://gemini.google.com' },
    perplexity: { id: 'perplexity', nom: 'Perplexity', url: 'https://www.perplexity.ai' },
    autre:      { id: 'autre',      nom: 'Autre outil', url: null }
  };

  var SEUIL_CLARIFICATION = 70;
  var MAX_CLARIFICATIONS = 3;
  var TYPES_VALIDES = ['choix', 'texte', 'texte_long'];
  var ID_REGEX = /^[A-Za-z0-9_-]+$/;

  /**
   * Une réponse est considérée comme fournie si elle contient
   * au moins un caractère non blanc.
   * @param {*} valeur
   * @returns {boolean}
   */
  function estRepondu(valeur) {
    return typeof valeur === 'string' && valeur.trim().length > 0;
  }

  function estNombrePositif(valeur) {
    return typeof valeur === 'number' && isFinite(valeur) && valeur > 0;
  }

  function tableauTexteNonVide(valeur) {
    return Array.isArray(valeur) && valeur.every(function (item) { return estRepondu(item); });
  }

  function idsDansTemplate(texte) {
    var ids = [];
    var regex = /\{\{(?:#si\s+|#non\s+)?([\w-]+)\}\}/g;
    var match;
    while ((match = regex.exec(texte || ''))) ids.push(match[1]);
    return ids;
  }

  /* ────────────────────────────────────────────
     Validation des modèles (équivalent zod, sans dépendance)
     ──────────────────────────────────────────── */

  /**
   * Valide une liste de modèles. Retourne les modèles valides et des
   * messages d'erreur clairs pour les modèles rejetés.
   * @param {Array<object>} templates
   * @returns {{ valides: Array<object>, erreurs: Array<string> }}
   */
  function validateTemplates(templates) {
    var valides = [];
    var erreurs = [];
    var idsVus = {};

    if (!Array.isArray(templates)) {
      return { valides: [], erreurs: ['La liste des modèles doit être un tableau.'] };
    }

    templates.forEach(function (t, index) {
      var ref = (t && t.id) ? '« ' + t.id + ' »' : 'à la position ' + (index + 1);
      var pb = [];

      if (!t || typeof t !== 'object') {
        erreurs.push('Modèle ' + ref + ' : format invalide (objet attendu).');
        return;
      }
      if (!estRepondu(t.id)) pb.push('champ « id » manquant');
      else if (!ID_REGEX.test(t.id)) pb.push('champ « id » invalide (lettres, chiffres, tirets bas ou traits d’union seulement)');
      if (t.id && idsVus[t.id]) pb.push('id dupliqué (déjà utilisé par un autre modèle)');
      if (!estRepondu(t.titre)) pb.push('champ « titre » manquant');
      if (!estRepondu(t.description)) pb.push('champ « description » manquant');
      if (!estRepondu(t.template)) pb.push('champ « template » manquant');
      if (!estRepondu(t.categorie)) pb.push('champ « categorie » manquant');
      if (!estRepondu(t.icone)) pb.push('champ « icone » manquant');
      if (!Array.isArray(t.outils) || t.outils.length === 0) {
        pb.push('au moins un outil est requis dans « outils »');
      } else {
        var outilsVus = {};
        t.outils.forEach(function (outil) {
          if (!TOOLS[outil]) pb.push('outil « ' + outil + ' » inconnu');
          else if (outilsVus[outil]) pb.push('outil « ' + outil + ' » dupliqué');
          else outilsVus[outil] = true;
        });
      }
      if (t.explication !== undefined && !tableauTexteNonVide(t.explication)) {
        pb.push('« explication » doit être un tableau de textes non vides');
      }
      if (t.conseils !== undefined && !tableauTexteNonVide(t.conseils)) {
        pb.push('« conseils » doit être un tableau de textes non vides');
      }
      if (t.formatSortie !== undefined && !estRepondu(t.formatSortie)) {
        pb.push('« formatSortie » doit être un texte non vide');
      }
      if (t.exempleSortie !== undefined && !estRepondu(t.exempleSortie)) {
        pb.push('« exempleSortie » doit être un texte non vide');
      }
      if (!Array.isArray(t.questions) || t.questions.length === 0) {
        pb.push('au moins une question est requise dans « questions »');
      } else {
        var qIds = {};
        var clarifIds = {};
        t.questions.forEach(function (q, qi) {
          var qRef = (q && q.id) ? '« ' + q.id + ' »' : '#' + (qi + 1);
          if (!q || !estRepondu(q.id)) pb.push('question ' + qRef + ' : champ « id » manquant');
          else if (!ID_REGEX.test(q.id)) pb.push('question ' + qRef + ' : « id » invalide');
          else if (qIds[q.id]) pb.push('question ' + qRef + ' : id dupliqué dans ce modèle');
          else qIds[q.id] = true;
          if (!q || !estRepondu(q.label)) pb.push('question ' + qRef + ' : champ « label » manquant');
          if (!q || TYPES_VALIDES.indexOf(q.type) === -1) {
            pb.push('question ' + qRef + ' : « type » doit être choix, texte ou texte_long');
          }
          if (q && q.type === 'choix') {
            if (!Array.isArray(q.options) || q.options.length < 2) {
              pb.push('question ' + qRef + ' : une question à choix doit offrir au moins 2 options');
            } else {
              var optionsVues = {};
              q.options.forEach(function (opt) {
                if (!estRepondu(opt)) pb.push('question ' + qRef + ' : chaque option doit être un texte non vide');
                else if (optionsVues[opt]) pb.push('question ' + qRef + ' : options dupliquées');
                else optionsVues[opt] = true;
              });
            }
          }
          if (q && q.obligatoire !== undefined && typeof q.obligatoire !== 'boolean') {
            pb.push('question ' + qRef + ' : « obligatoire » doit être vrai ou faux');
          }
          if (!q || !estNombrePositif(q.poidsScore)) {
            pb.push('question ' + qRef + ' : « poidsScore » doit être un nombre positif');
          }
        });
        if (t.clarifications !== undefined && !Array.isArray(t.clarifications)) {
          pb.push('« clarifications » doit être un tableau');
        }
        if (Array.isArray(t.clarifications)) {
          t.clarifications.forEach(function (c, ci) {
            var cRef = (c && c.questionId) ? '« ' + c.questionId + ' »' : '#' + (ci + 1);
            if (!c || !estRepondu(c.questionId)) pb.push('clarification ' + cRef + ' : champ « questionId » manquant');
            else if (!ID_REGEX.test(c.questionId)) pb.push('clarification ' + cRef + ' : « questionId » invalide');
            else if (qIds[c.questionId]) pb.push('clarification ' + cRef + ' : entre en conflit avec une question du même id');
            else if (clarifIds[c.questionId]) pb.push('clarification ' + cRef + ' : id dupliqué dans les clarifications');
            else clarifIds[c.questionId] = true;
            if (!c || !estRepondu(c.label)) pb.push('clarification ' + cRef + ' : champ « label » manquant');
            if (!c || TYPES_VALIDES.indexOf(c.type || 'texte') === -1) {
              pb.push('clarification ' + cRef + ' : « type » doit être choix, texte ou texte_long');
            }
            if (c && (c.type || 'texte') === 'choix') {
              if (!Array.isArray(c.options) || c.options.length < 2) {
                pb.push('clarification ' + cRef + ' : une clarification à choix doit offrir au moins 2 options');
              }
            }
            if (!c || !estNombrePositif(c.poidsScore)) {
              pb.push('clarification ' + cRef + ' : « poidsScore » doit être un nombre positif');
            }
          });
        }

        idsDansTemplate(t.template).forEach(function (id) {
          if (!qIds[id] && !clarifIds[id]) {
            pb.push('le template référence « ' + id + ' », mais aucune question ou clarification correspondante n’existe');
          }
        });
        var nbSi = (String(t.template || '').match(/\{\{#si\s+[\w-]+\}\}/g) || []).length;
        var nbFinSi = (String(t.template || '').match(/\{\{\/si\}\}/g) || []).length;
        var nbNon = (String(t.template || '').match(/\{\{#non\s+[\w-]+\}\}/g) || []).length;
        var nbFinNon = (String(t.template || '').match(/\{\{\/non\}\}/g) || []).length;
        if (nbSi !== nbFinSi || nbNon !== nbFinNon) {
          pb.push('le template contient une balise incomplète ou mal fermée');
        }
        if (/\{\{|\}\}/.test(
          String(t.template || '')
            .replace(/\{\{#si\s+[\w-]+\}\}/g, '')
            .replace(/\{\{#non\s+[\w-]+\}\}/g, '')
            .replace(/\{\{\/si\}\}/g, '')
            .replace(/\{\{\/non\}\}/g, '')
            .replace(/\{\{[\w-]+\}\}/g, '')
        )) {
          pb.push('le template contient une balise incomplète ou mal fermée');
        }
      }

      if (pb.length > 0) {
        erreurs.push('Modèle ' + ref + ' ignoré : ' + pb.join(' · ') + '.');
      } else {
        idsVus[t.id] = true;
        valides.push(t);
      }
    });

    return { valides: valides, erreurs: erreurs };
  }

  /* ────────────────────────────────────────────
     Construction du prompt (interpolation)
     ──────────────────────────────────────────── */

  /**
   * Interpole un gabarit avec les réponses fournies.
   * Supporte :
   *   {{variable}}                  → remplacée par la réponse (vide sinon)
   *   {{#si x}}...{{/si}}           → bloc conservé seulement si x est répondu
   *   {{#non x}}...{{/non}}         → bloc conservé seulement si x N'EST PAS répondu
   * Les blocs ne sont pas imbriquables (inutile pour ces modèles).
   * @param {object} template — modèle validé
   * @param {Object<string,string>} reponses — id de question → réponse
   * @returns {string} prompt de base, espaces superflus nettoyés
   */
  function buildPrompt(template, reponses) {
    var texte = String(template.template || '');
    var rep = reponses || {};

    texte = texte.replace(/\{\{#si\s+([\w-]+)\}\}([\s\S]*?)\{\{\/si\}\}/g, function (_, id, bloc) {
      return estRepondu(rep[id]) ? bloc : '';
    });
    texte = texte.replace(/\{\{#non\s+([\w-]+)\}\}([\s\S]*?)\{\{\/non\}\}/g, function (_, id, bloc) {
      return estRepondu(rep[id]) ? '' : bloc;
    });
    texte = texte.replace(/\{\{([\w-]+)\}\}/g, function (_, id) {
      return estRepondu(rep[id]) ? rep[id].trim() : '';
    });

    /* Nettoyage : espaces doublés et lignes vides laissés par des blocs retirés
       (on garde l'espace simple avant « : », typographie française oblige) */
    texte = texte
      .replace(/[ \t]{2,}/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .replace(/([.!?])\.(?=\s|$)/g, '$1')
      .trim();

    return texte;
  }

  /* ────────────────────────────────────────────
     Score de qualité
     ──────────────────────────────────────────── */

  /**
   * Fraction du poids accordée à une réponse texte selon sa richesse.
   * Moins de 10 caractères → 30 % · 10 à 40 → 70 % · plus de 40 → 100 %.
   * @param {string} valeur
   * @returns {number} 0, 0.3, 0.7 ou 1
   */
  function richesseTexte(valeur) {
    if (!estRepondu(valeur)) return 0;
    var n = valeur.trim().length;
    if (n < 10) return 0.3;
    if (n <= 40) return 0.7;
    return 1;
  }

  /**
   * Fraction du poids obtenue pour une question selon son type.
   * Question à choix répondue → plein poids. Texte libre → progressif.
   * @param {object} question — { type }
   * @param {string} valeur
   * @returns {number} entre 0 et 1
   */
  function fractionPoids(question, valeur) {
    if (!estRepondu(valeur)) return 0;
    if (question.type === 'choix') return 1;
    return richesseTexte(valeur);
  }

  /**
   * Calcule le score de qualité du prompt, normalisé sur 100.
   * La base inclut les questions ET les clarifications : répondre aux
   * clarifications fait donc monter la jauge.
   * @param {object} template
   * @param {Object<string,string>} reponses
   * @returns {{ score: number, poidsTotal: number, poidsObtenu: number }}
   */
  function computeScore(template, reponses) {
    var rep = reponses || {};
    var totalQuestions = 0;
    var obtenuQuestions = 0;
    var totalClarifs = 0;
    var obtenuClarifs = 0;

    (template.questions || []).forEach(function (q) {
      totalQuestions += q.poidsScore;
      obtenuQuestions += q.poidsScore * fractionPoids(q, rep[q.id]);
    });
    (template.clarifications || []).forEach(function (c) {
      totalClarifs += c.poidsScore;
      obtenuClarifs += c.poidsScore * fractionPoids({ type: c.type || 'texte' }, rep[c.questionId]);
    });

    var base = totalQuestions > 0 ? (obtenuQuestions / totalQuestions) * 100 : 0;
    var bonusClarifs = totalClarifs > 0 ? (obtenuClarifs / totalClarifs) * 20 : 0;
    var score = Math.round(Math.min(100, base + bonusClarifs));

    return {
      score: score,
      poidsTotal: 100,
      poidsObtenu: score,
      scoreBase: Math.round(base),
      bonusClarifications: Math.round(bonusClarifs)
    };
  }

  /* ────────────────────────────────────────────
     Sélection des clarifications
     ──────────────────────────────────────────── */

  /**
   * Sélectionne au plus 3 questions de clarification : uniquement des
   * questions jamais posées (la banque « clarifications » du modèle),
   * non répondues, triées par poids décroissant.
   * @param {object} template
   * @param {Object<string,string>} reponses
   * @returns {Array<object>} clarifications à poser
   */
  function selectClarifications(template, reponses) {
    var rep = reponses || {};
    return (template.clarifications || [])
      .filter(function (c) { return !estRepondu(rep[c.questionId]); })
      .sort(function (a, b) { return b.poidsScore - a.poidsScore; })
      .slice(0, MAX_CLARIFICATIONS);
  }

  /* ────────────────────────────────────────────
     Adaptation du prompt selon l'outil IA
     ──────────────────────────────────────────── */

  /**
   * Adapte le prompt de base à l'outil IA choisi. Fonction pure :
   * même entrée → même sortie.
   * @param {string} outil — 'chatgpt' | 'claude' | 'gemini' | 'perplexity' | 'autre'
   * @param {object} template
   * @param {Object<string,string>} reponses
   * @returns {string} prompt final prêt à copier
   */
  function adaptForTool(outil, template, reponses) {
    var base = buildPrompt(template, reponses);
    var format = estRepondu(template.formatSortie) ? template.formatSortie : null;
    var exemple = estRepondu(template.exempleSortie) ? template.exempleSortie : null;
    var blocs = [base];

    switch (outil) {
      case 'chatgpt':
        if (format) blocs.push('Format de sortie attendu : ' + format);
        blocs.push('Avant de rédiger, si une information essentielle te manque, pose-moi une seule question, puis attends ma réponse.');
        break;

      case 'claude':
        if (format) blocs.push('Format de sortie attendu : ' + format);
        blocs.push('Utilise tout le contexte fourni ci-dessus avant de rédiger. Si un détail important manque, indique ton hypothèse entre parenthèses plutôt que d’inventer.');
        break;

      case 'gemini':
        if (format) blocs.push('Format de sortie attendu : ' + format);
        if (exemple) blocs.push('Exemple du style attendu : ' + exemple);
        blocs.push('Va droit au but : livre directement le résultat demandé, sans introduction ni résumé.');
        break;

      case 'perplexity':
        if (format) blocs.push('Format de sortie attendu : ' + format);
        blocs.push('Si tu utilises des données de marché ou des faits, appuie-toi sur des sources récentes (moins de 12 mois) et cite-les clairement. Ne cite aucune donnée que tu ne peux pas sourcer.');
        break;

      default: /* autre */
        if (format) blocs.push('Format de sortie attendu : ' + format);
        blocs.push('Si une information essentielle te manque, dis-le clairement au lieu d’inventer.');
        break;
    }

    return blocs.join('\n\n');
  }

  /* ────────────────────────────────────────────
     Conseils d'utilisation
     ──────────────────────────────────────────── */

  var CONSEILS_OUTIL = {
    chatgpt: [
      'Dans ChatGPT, collez le prompt tel quel, puis répondez à ses questions s’il en pose : c’est bon signe.',
      'Ajoutez vos photos si l’outil vous le propose : il peut s’en inspirer pour la description.'
    ],
    claude: [
      'Dans Claude, collez tout le texte d’un seul coup : il travaille mieux avec le contexte complet.',
      'Pas tout à fait satisfait? Écrivez simplement « Propose une version plus courte » ou « plus chaleureuse ».'
    ],
    gemini: [
      'Dans Gemini, collez le prompt tel quel; si la réponse est trop générale, ajoutez « Sois plus précis ».',
      'Gemini propose souvent plusieurs brouillons : comparez-les avant de choisir.'
    ],
    perplexity: [
      'Perplexity cite ses sources : vérifiez-les avant de reprendre un chiffre ou une donnée de marché.',
      'Idéal pour les questions de marché; pour du texte créatif, ChatGPT ou Claude font souvent mieux.'
    ],
    autre: [
      'Collez le prompt au complet dans votre outil, en un seul message.',
      'Si le résultat déçoit, ne recommencez pas à zéro : répondez « Améliore ce point précis » et précisez lequel.'
    ]
  };

  var CONSEILS_NIVEAU = {
    debutant: 'Commencez avec la première version, puis ajustez seulement un point à la fois pour voir ce qui améliore vraiment le texte.',
    intermediaire: 'Quand le résultat est presque bon, demandez une deuxième version plus courte ou plus directe plutôt que de tout refaire.',
    avance: 'Testez deux formulations du même mandat avec des faits différents : vous verrez vite quel angle performe le mieux.'
  };

  /**
   * Assemble les conseils d'utilisation : conseils propres à l'outil,
   * puis conseils du modèle, maximum 4 puces.
   * @param {string} outil
   * @param {object} template
   * @param {string} [niveau] — 'debutant' | 'intermediaire' | 'avance'
   * @returns {Array<string>}
   */
  function getConseils(outil, template, niveau) {
    var conseilsOutil = CONSEILS_OUTIL[outil] || CONSEILS_OUTIL.autre;
    var conseils = [];
    var niveauTexte = CONSEILS_NIVEAU[niveau];
    var sources = [
      conseilsOutil.slice(0, 1),
      (template.conseils || []).slice(0, 1),
      niveauTexte ? [niveauTexte] : [],
      conseilsOutil.slice(1),
      (template.conseils || []).slice(1)
    ];

    sources.forEach(function (liste) {
      liste.forEach(function (item) {
        if (estRepondu(item) && conseils.indexOf(item) === -1 && conseils.length < 3) {
          conseils.push(item);
        }
      });
    });

    return conseils.slice(0, 3);
  }

  /* ────────────────────────────────────────────
     Export navigateur + Node (tests)
     ──────────────────────────────────────────── */
  var api = {
    TOOLS: TOOLS,
    SEUIL_CLARIFICATION: SEUIL_CLARIFICATION,
    MAX_CLARIFICATIONS: MAX_CLARIFICATIONS,
    estRepondu: estRepondu,
    validateTemplates: validateTemplates,
    buildPrompt: buildPrompt,
    richesseTexte: richesseTexte,
    computeScore: computeScore,
    selectClarifications: selectClarifications,
    adaptForTool: adaptForTool,
    getConseils: getConseils
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.PromptEngine = api;
  }
})(typeof window !== 'undefined' ? window : null);
