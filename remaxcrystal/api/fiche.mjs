/* ============================================================
   /api/fiche — réception du formulaire courtier
   ------------------------------------------------------------
   Reçoit le JSON du formulaire (photos en base64 incluses) et crée,
   dans le repo GitHub, UNE pull request par fiche :
     <DOSSIER>/data/courtiers/<slug>.json      (sans les photos)
     <DOSSIER>/images/courtiers/<slug>/*.jpg   (les photos)
   La PR porte les étiquettes « fiche-courtier » et l'agence.
   La routine quotidienne y ajoute la page; Vincent valide l'aperçu
   Vercel puis fusionne. Rien n'est publié sans cette fusion.

   Variables d'environnement (réglages du projet Vercel) :
     GITHUB_TOKEN  jeton à portée fine, repo vpourdesign/remaxcrystal,
                   droits Contents + Pull requests en écriture
     GITHUB_REPO   (optionnel) défaut « vpourdesign/remaxcrystal »
     GITHUB_BASE   (optionnel) défaut « main »

   Source unique : remaxcrystal/api/fiche.mjs. La copie D'ici est
   écrite par sync-formulaire-dici.mjs (seul AGENCE change).
   ============================================================ */

const AGENCE = { id: 'crystal', nom: 'RE/MAX Crystal', dossier: 'remaxcrystal' };

const REPO = process.env.GITHUB_REPO || 'vpourdesign/remaxcrystal';
const BASE = process.env.GITHUB_BASE || 'main';
const MAX_IMAGE_OCTETS = 2.5 * 1024 * 1024;

export const config = { maxDuration: 30 };

async function gh(method, url, body) {
  const res = await fetch(`https://api.github.com/repos/${REPO}${url}`, {
    method,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'remax-fiche-courtier'
    },
    body: body ? JSON.stringify(body) : undefined
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`GitHub ${method} ${url} → ${res.status} ${data.message || ''}`);
  return data;
}

const texte = (v, max = 5000) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

function imageDepuis(dataUrl) {
  const m = /^data:image\/(jpeg|png|webp);base64,([A-Za-z0-9+/=]+)$/.exec(dataUrl || '');
  if (!m) return null;
  if (m[2].length * 0.75 > MAX_IMAGE_OCTETS) throw new Error('image trop lourde');
  return m[2];
}

/* Sépare la fiche (JSON) de ses photos (fichiers). */
export function preparerFichiers(fiche) {
  const slug = texte(fiche.slug, 80);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) throw new Error('slug invalide');
  if (!texte(fiche.identite && fiche.identite.nomComplet)) throw new Error('nom manquant');
  if (!fiche.medias || fiche.medias.consentement !== true) throw new Error('consentement manquant');

  const base = `${AGENCE.dossier}`;
  const imgDir = `images/courtiers/${slug}`;
  const fichiers = [];
  const medias = fiche.medias;

  const prendre = (obj, nomFichier) => {
    if (!obj) return null;
    const b64 = imageDepuis(obj.dataUrl);
    if (!b64) return null;
    const chemin = `${imgDir}/${nomFichier}`;
    fichiers.push({ path: `${base}/${chemin}`, contenu: b64, encodage: 'base64' });
    return { fichier: chemin, nomOriginal: texte(obj.nomOriginal, 200) };
  };

  medias.dossierCible = imgDir;
  medias.portrait = prendre(medias.portrait, 'portrait.jpg');
  medias.photoEquipe = prendre(medias.photoEquipe, 'equipe.jpg');
  medias.photosLibres = (Array.isArray(medias.photosLibres) ? medias.photosLibres.slice(0, 4) : [])
    .map((p, i) => prendre(p, `photo-${i + 1}.jpg`)).filter(Boolean);

  delete fiche.siteWeb;
  fiche.agence = AGENCE.id;
  fiche.recuLe = new Date().toISOString();

  const json = JSON.stringify(fiche, null, 2) + '\n';
  fichiers.unshift({ path: `${base}/data/courtiers/${slug}.json`, contenu: json, encodage: 'utf-8' });
  return { slug, fichiers };
}

async function creerPullRequest(fiche, slug, fichiers) {
  const ref = await gh('GET', `/git/ref/heads/${BASE}`);
  const baseCommit = await gh('GET', `/git/commits/${ref.object.sha}`);

  const tree = [];
  for (const f of fichiers) {
    const blob = await gh('POST', '/git/blobs', { content: f.contenu, encoding: f.encodage });
    tree.push({ path: f.path, mode: '100644', type: 'blob', sha: blob.sha });
  }
  const newTree = await gh('POST', '/git/trees', { base_tree: baseCommit.tree.sha, tree });

  const nom = fiche.identite.nomComplet;
  const commit = await gh('POST', '/git/commits', {
    message: `Fiche courtier reçue : ${nom} (${AGENCE.nom})`,
    tree: newTree.sha,
    parents: [ref.object.sha]
  });

  const horodatage = new Date().toISOString().replace(/[-:]/g, '').slice(0, 13); // 20261104T1530
  const branche = `fiche/${AGENCE.id}-${slug}-${horodatage}`;
  await gh('POST', '/git/refs', { ref: `refs/heads/${branche}`, sha: commit.sha });

  const t = fiche.territoire || {};
  const nbPhotos = fichiers.length - 1;
  const corps = [
    `**${nom}** · ${AGENCE.nom}`,
    `Ville principale : ${t.villePrincipale || '?'}${(t.villesSecondaires || []).length ? ' · ' + t.villesSecondaires.join(', ') : ''}`,
    `Photos reçues : ${nbPhotos}${fiche.medias.video ? ' · Vidéo : ' + fiche.medias.video : ''}`,
    '',
    '- [ ] Page rédigée par la routine quotidienne',
    '- [ ] Aperçu vérifié par Vincent',
    '',
    'Fusionner cette pull request publie la page. Ne pas fusionner avant d’avoir vu l’aperçu.',
    '',
    '<details><summary>Résumé de la fiche</summary>',
    '',
    texte(fiche.resumeMarkdown, 20000),
    '',
    '</details>'
  ].join('\n');

  const pr = await gh('POST', '/pulls', {
    title: `Fiche courtier : ${nom} (${AGENCE.nom})`,
    head: branche,
    base: BASE,
    body: corps
  });
  await gh('POST', `/issues/${pr.number}/labels`, { labels: ['fiche-courtier', `agence-${AGENCE.id}`, 'page-a-rediger'] });
  return pr.number;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ ok: false }); }

  const fiche = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

  // Piège à robots : un humain ne voit pas ce champ. On répond « OK » sans rien faire.
  if (texte(fiche.siteWeb)) return res.status(200).json({ ok: true });

  let prep;
  try { prep = preparerFichiers(fiche); }
  catch (e) { return res.status(400).json({ ok: false, erreur: e.message }); }

  if (process.env.FICHE_DRY_RUN) {
    return res.status(200).json({ ok: true, dryRun: true, slug: prep.slug, fichiers: prep.fichiers.map(f => f.path) });
  }
  if (!process.env.GITHUB_TOKEN) return res.status(500).json({ ok: false, erreur: 'réception non configurée' });

  try {
    const numero = await creerPullRequest(fiche, prep.slug, prep.fichiers);
    return res.status(200).json({ ok: true, numero });
  } catch (e) {
    console.error('[fiche]', e.message);
    return res.status(502).json({ ok: false, erreur: 'envoi impossible' });
  }
}
