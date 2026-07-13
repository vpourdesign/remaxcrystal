/* ============================================================
   Tests du moteur du Guide de prompting IA
   Exécution :  node --test remaxcrystal/tests/
   (ou depuis remaxcrystal/ :  node --test tests/)
   ============================================================ */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const engine = require('../data/prompt-engine.js');
const templates = require('../data/prompt-templates.js');

const {
  validateTemplates, buildPrompt, computeScore,
  selectClarifications, adaptForTool, getConseils,
  richesseTexte, SEUIL_CLARIFICATION, MAX_CLARIFICATIONS
} = engine;

/* ────────────── Modèle minimal pour les tests unitaires ────────────── */
const modele = {
  id: 'test-modele',
  titre: 'Test',
  description: 'Modèle de test',
  questions: [
    { id: 'type', label: 'Type?', type: 'choix', options: ['A', 'B'], obligatoire: true, poidsScore: 40 },
    { id: 'details', label: 'Détails?', type: 'texte_long', obligatoire: false, poidsScore: 40 }
  ],
  clarifications: [
    { questionId: 'quartier', label: 'Quartier?', type: 'texte', poidsScore: 15 },
    { questionId: 'prix', label: 'Prix?', type: 'texte', poidsScore: 5 }
  ],
  template: 'Propriété : {{type}}.{{#si details}} Détails : {{details}}.{{/si}}{{#si quartier}} Quartier : {{quartier}}.{{/si}}{{#non details}} (aucun détail fourni){{/non}}',
  formatSortie: 'Un paragraphe.',
  exempleSortie: 'Exemple de sortie.',
  conseils: ['Conseil du modèle.']
};

/* ══════════════ buildPrompt ══════════════ */

test('buildPrompt : interpole les variables répondues', () => {
  const p = buildPrompt(modele, { type: 'Condo', details: 'Grande cour arrière ensoleillée' });
  assert.match(p, /Propriété : Condo\./);
  assert.match(p, /Détails : Grande cour arrière ensoleillée\./);
});

test('buildPrompt : évite les doubles ponctuations en fin de phrase', () => {
  const p = buildPrompt(modele, { type: 'Condo.', details: 'Cour arrière intime.' });
  assert.doesNotMatch(p, /\.\./);
});

test('buildPrompt : retire les blocs {{#si}} non répondus', () => {
  const p = buildPrompt(modele, { type: 'Condo' });
  assert.doesNotMatch(p, /Détails/);
  assert.doesNotMatch(p, /\{\{/, 'aucune moustache résiduelle');
});

test('buildPrompt : conserve le bloc {{#non}} quand la variable est absente', () => {
  const sans = buildPrompt(modele, { type: 'Condo' });
  assert.match(sans, /aucun détail fourni/);
  const avec = buildPrompt(modele, { type: 'Condo', details: 'Cour arrière très intime' });
  assert.doesNotMatch(avec, /aucun détail fourni/);
});

test('buildPrompt : une réponse faite d’espaces compte comme vide', () => {
  const p = buildPrompt(modele, { type: 'Condo', details: '    ' });
  assert.doesNotMatch(p, /Détails/);
});

test('buildPrompt : les 6 modèles livrés ne laissent aucune moustache résiduelle', () => {
  for (const t of templates) {
    const vide = buildPrompt(t, {});
    assert.doesNotMatch(vide, /\{\{|\}\}/, `modèle ${t.id} sans réponses`);
    const toutes = {};
    for (const q of t.questions) toutes[q.id] = q.type === 'choix' ? q.options[0] : 'Réponse détaillée de test avec beaucoup de contexte pertinent.';
    for (const c of (t.clarifications || [])) toutes[c.questionId] = 'Réponse de clarification détaillée.';
    const plein = buildPrompt(t, toutes);
    assert.doesNotMatch(plein, /\{\{|\}\}/, `modèle ${t.id} avec toutes les réponses`);
  }
});

/* ══════════════ richesseTexte / computeScore ══════════════ */

test('richesseTexte : paliers 30 % / 70 % / 100 %', () => {
  assert.equal(richesseTexte(''), 0);
  assert.equal(richesseTexte('123456789'), 0.3);
  assert.equal(richesseTexte('1234567890'), 0.7);
  assert.equal(richesseTexte('1234567890123456789012345678901234567890'), 0.7);
  assert.equal(richesseTexte('12345678901234567890123456789012345678901'), 1);
});

test('computeScore : 0 sans réponses, 100 avec tout de répondu richement', () => {
  assert.equal(computeScore(modele, {}).score, 0);
  const s = computeScore(modele, {
    type: 'A',
    details: 'une réponse très détaillée qui dépasse largement quarante caractères',
    quartier: 'une réponse très détaillée qui dépasse largement quarante caractères',
    prix: 'une réponse très détaillée qui dépasse largement quarante caractères'
  });
  assert.equal(s.score, 100);
});

test('computeScore : un choix répondu donne le plein poids', () => {
  const s = computeScore(modele, { type: 'A' });
  assert.equal(s.score, 50);
});

test('computeScore : le texte mince rapporte 30 % de son poids', () => {
  const s = computeScore(modele, { type: 'A', details: 'petit' });
  assert.equal(s.score, 65);
});

test('computeScore : répondre aux clarifications fait monter le score', () => {
  const avant = computeScore(modele, { type: 'A', details: 'petit' }).score;
  const apres = computeScore(modele, { type: 'A', details: 'petit', quartier: 'Blainville, secteur Fontainebleau' }).score;
  assert.ok(apres > avant, `${apres} > ${avant}`);
});

test('computeScore : un modèle peut tomber exactement sur le seuil de clarification', () => {
  const modeleSeuil = {
    ...modele,
    questions: [
      { id: 'a', label: 'A?', type: 'choix', options: ['oui', 'non'], obligatoire: true, poidsScore: 70 },
      { id: 'b', label: 'B?', type: 'choix', options: ['oui', 'non'], obligatoire: true, poidsScore: 30 }
    ],
    clarifications: []
  };
  assert.equal(computeScore(modeleSeuil, { a: 'oui' }).score, 70);
});

test('computeScore : les 6 modèles livrés atteignent ≥ 70 avec des réponses complètes et riches', () => {
  for (const t of templates) {
    const rep = {};
    for (const q of t.questions) rep[q.id] = q.type === 'choix' ? q.options[0] : 'Réponse détaillée de test avec beaucoup de contexte pertinent et précis.';
    const { score } = computeScore(t, rep);
    assert.ok(score >= SEUIL_CLARIFICATION, `modèle ${t.id} : ${score} < ${SEUIL_CLARIFICATION}`);
  }
});

/* ══════════════ selectClarifications ══════════════ */

test('selectClarifications : uniquement les non-répondues, triées par poids, max 3', () => {
  const c1 = selectClarifications(modele, {});
  assert.deepEqual(c1.map(c => c.questionId), ['quartier', 'prix']);
  const c2 = selectClarifications(modele, { quartier: 'Rosemère' });
  assert.deepEqual(c2.map(c => c.questionId), ['prix']);
  const gros = {
    ...modele,
    clarifications: [
      { questionId: 'a', label: 'A?', poidsScore: 1 },
      { questionId: 'b', label: 'B?', poidsScore: 9 },
      { questionId: 'c', label: 'C?', poidsScore: 5 },
      { questionId: 'd', label: 'D?', poidsScore: 7 }
    ]
  };
  const c3 = selectClarifications(gros, {});
  assert.equal(c3.length, MAX_CLARIFICATIONS);
  assert.deepEqual(c3.map(c => c.questionId), ['b', 'd', 'c']);
});

/* ══════════════ adaptForTool ══════════════ */

test('adaptForTool : chaque outil produit une variante distincte contenant le prompt de base', () => {
  const rep = { type: 'A', details: 'Une belle grande cour arrière très ensoleillée' };
  const base = buildPrompt(modele, rep);
  const sorties = ['chatgpt', 'claude', 'gemini', 'perplexity', 'autre'].map(o => adaptForTool(o, modele, rep));
  for (const s of sorties) assert.ok(s.startsWith(base), 'contient le prompt de base en premier');
  assert.equal(new Set(sorties).size, 5, 'les 5 variantes sont différentes');
});

test('adaptForTool : perplexity demande des sources, gemini donne un exemple', () => {
  const rep = { type: 'A' };
  assert.match(adaptForTool('perplexity', modele, rep), /sources récentes/);
  assert.match(adaptForTool('gemini', modele, rep), /Exemple du style attendu/);
});

test('adaptForTool : un outil inconnu retombe sur la version générique', () => {
  const rep = { type: 'A' };
  assert.equal(adaptForTool('inconnu', modele, rep), adaptForTool('autre', modele, rep));
});

/* ══════════════ getConseils ══════════════ */

test('getConseils : conseils de l’outil + du modèle, maximum 3', () => {
  const c = getConseils('chatgpt', modele, 'avance');
  assert.ok(c.length >= 2 && c.length <= 3);
  assert.match(c[0], /ChatGPT/);
  assert.ok(c.includes('Conseil du modèle.'));
});

test('getConseils : le niveau change réellement le dernier conseil', () => {
  const debutant = getConseils('chatgpt', modele, 'debutant');
  const avance = getConseils('chatgpt', modele, 'avance');
  assert.notDeepEqual(debutant, avance);
});

/* ══════════════ validateTemplates ══════════════ */

test('validateTemplates : les 6 modèles livrés sont valides', () => {
  const { valides, erreurs } = validateTemplates(templates);
  assert.deepEqual(erreurs, []);
  assert.equal(valides.length, 6);
});

test('validateTemplates : messages clairs pour id manquant, id dupliqué et poids invalide', () => {
  const casse = [
    { titre: 'Sans id', description: 'x', categorie: 'courriel', icone: 'courriel', outils: ['chatgpt'], template: 'x', questions: [{ id: 'q', label: 'Q?', type: 'texte', poidsScore: 10 }] },
    { id: 'dup', titre: 'A', description: 'x', categorie: 'courriel', icone: 'courriel', outils: ['chatgpt'], template: 'x', questions: [{ id: 'q', label: 'Q?', type: 'texte', poidsScore: 10 }] },
    { id: 'dup', titre: 'B', description: 'x', categorie: 'courriel', icone: 'courriel', outils: ['chatgpt'], template: 'x', questions: [{ id: 'q', label: 'Q?', type: 'texte', poidsScore: 10 }] },
    { id: 'poids', titre: 'C', description: 'x', categorie: 'courriel', icone: 'courriel', outils: ['chatgpt'], template: 'x', questions: [{ id: 'q', label: 'Q?', type: 'choix', options: ['A', 'B'], poidsScore: 0 }] }
  ];
  const { valides, erreurs } = validateTemplates(casse);
  assert.equal(valides.length, 1);
  assert.ok(erreurs.some(e => e.includes('« id » manquant')));
  assert.ok(erreurs.some(e => e.includes('id dupliqué')));
  assert.ok(erreurs.some(e => e.includes('poidsScore')));
});

test('validateTemplates : rejette une question à choix sans options', () => {
  const { valides, erreurs } = validateTemplates([
    { id: 'x', titre: 'X', description: 'x', template: 'x', questions: [{ id: 'q', label: 'Q?', type: 'choix', poidsScore: 10 }] }
  ]);
  assert.equal(valides.length, 0);
  assert.ok(erreurs.some(e => e.includes('2 options')));
});

test('validateTemplates : rejette un outil inconnu, une variable absente et une balise mal fermée', () => {
  const { valides, erreurs } = validateTemplates([
    {
      id: 'outil-invalide',
      titre: 'X',
      description: 'x',
      categorie: 'courriel',
      icone: 'courriel',
      outils: ['chatgpt', 'inconnu'],
      questions: [{ id: 'q', label: 'Q?', type: 'texte', obligatoire: true, poidsScore: 10 }],
      template: 'Bonjour {{q}}',
      conseils: ['Conseil']
    },
    {
      id: 'variable-absente',
      titre: 'Y',
      description: 'x',
      categorie: 'courriel',
      icone: 'courriel',
      outils: ['chatgpt'],
      questions: [{ id: 'q', label: 'Q?', type: 'texte', obligatoire: true, poidsScore: 10 }],
      template: 'Bonjour {{nom_client}}',
      conseils: ['Conseil']
    },
    {
      id: 'balise-mal-fermee',
      titre: 'Z',
      description: 'x',
      categorie: 'courriel',
      icone: 'courriel',
      outils: ['chatgpt'],
      questions: [{ id: 'q', label: 'Q?', type: 'texte', obligatoire: true, poidsScore: 10 }],
      template: 'Bonjour {{#si q}}test',
      conseils: ['Conseil']
    }
  ]);
  assert.equal(valides.length, 0);
  assert.ok(erreurs.some(e => e.includes('outil « inconnu » inconnu')));
  assert.ok(erreurs.some(e => e.includes('aucune question ou clarification correspondante')));
  assert.ok(erreurs.some(e => e.includes('balise incomplète ou mal fermée')));
});
