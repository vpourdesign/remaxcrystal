/* ============================================================
   SYNC FORMULAIRE D'ICI
   Le formulaire courtier et la fonction de réception existent en une
   seule source, ici dans remaxcrystal/. Ce script en écrit la copie
   pour le site D'ici (../remaxdici), qui a son propre projet Vercel.
     courtier-formulaire.html  → ../remaxdici/courtier-formulaire.html
     api/fiche.mjs             → ../remaxdici/api/fiche.mjs (AGENCE = dici)
   La config de marque D'ici reste dans ../remaxdici/data/courtiers-config.js.

   Usage : node sync-formulaire-dici.mjs   (après toute modif du formulaire
   ou de api/fiche.mjs)
   ============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DICI = path.join(ROOT, '..', 'remaxdici');

const AVERTISSEMENT = '<!-- ⚙ COPIE générée par remaxcrystal/sync-formulaire-dici.mjs. Éditer la source dans remaxcrystal/. -->\n';

const html = fs.readFileSync(path.join(ROOT, 'courtier-formulaire.html'), 'utf8');
fs.writeFileSync(path.join(DICI, 'courtier-formulaire.html'), html.replace(/^<!DOCTYPE html>\n?/i, m => m + AVERTISSEMENT));

const CRYSTAL = "const AGENCE = { id: 'crystal', nom: 'RE/MAX Crystal', dossier: 'remaxcrystal' };";
const DICI_AG = "const AGENCE = { id: 'dici', nom: \"RE/MAX D'ici\", dossier: 'remaxdici' };";
const api = fs.readFileSync(path.join(ROOT, 'api/fiche.mjs'), 'utf8');
if (!api.includes(CRYSTAL)) throw new Error('api/fiche.mjs : ligne AGENCE introuvable, copie annulée.');
fs.mkdirSync(path.join(DICI, 'api'), { recursive: true });
fs.writeFileSync(path.join(DICI, 'api/fiche.mjs'),
  '/* ⚙ COPIE générée par remaxcrystal/sync-formulaire-dici.mjs. Éditer la source dans remaxcrystal/. */\n' + api.replace(CRYSTAL, DICI_AG));

for (const f of ['data/courtiers-config.js', 'brand_assets/diciblanc.png']) {
  if (!fs.existsSync(path.join(DICI, f))) console.warn(`⚠ ../remaxdici/${f} manquant.`);
}
console.log('✓ Formulaire et api/fiche.mjs copiés dans ../remaxdici.');
