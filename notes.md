# Notes — REMAX Crystal

## 🔍 Précisions

- [2026-07-13] **Ne pas pousser (git push) le projet pages courtiers tant qu'il n'est pas final.** Le système formulaire + générateur (courtier-formulaire.html, courtiers/, build-courtiers.mjs) reste local : la page fred-et-max.html contient des données de test (courriel vinilavoie@gmail.com, témoignages placeholder) et la démo Geneviève Marchand est fictive. Vincent donnera le GO.

## ✅ À faire (backlog général)

### Suite à l'audit de la cliente (reçu 2026-08-10) — guides des villes Crystal + D'ici

**À corriger (défauts réels, vérifiés dans nos fichiers) :**
- [ ] Liens morts `href="#"` : 8 par page × 29 pages (colonnes footer « Outils » et « Contact ») + 1 CTA « Voir les propriétés à [Ville] » sur chaque guide + « Évaluation gratuite » sur les 2 accueils. ~270 liens qui ne mènent nulle part.
- [ ] `politique-confidentialite.html` et `conditions-utilisation.html` n'existent pas → 404 depuis le footer de 15 pages Crystal. (Déjà noté au 2026-06-15, toujours ouvert.)
- [ ] Footer D'ici : aucun lien légal ni mention « Franchisé indépendant et autonome de RE/MAX Québec » (Crystal les a). Asymétrie entre les deux sites.
- [x] [2026-08-10] **6** images cassées dans `guide-blainville.html` corrigées (et non 5 : `stetherese2.jpg` avait échappé au premier scan). La galerie « Parcs » pointait vers des photos de Lorraine, Boisbriand, Rosemère et Sainte-Thérèse — remplacées par les vraies photos Blainville (`images/villes/blainville/parc1…parc5.jpg`, photos officielles de la Ville, filigrane Blainville) + `blainville1.jpg` pour l'intro. Alts réécrits d'après le contenu réel de chaque photo.
  - ⚠️ Reste à trancher : la légende de l'image d'intro dit « Le Vieux-Blainville — Un quartier en pleine revitalisation » alors que la photo est l'Hôtel de Ville. Même incohérence dans `blainvilletest.html`. Copie à ajuster, décision de Vincent.
- [ ] `guide-blainville.html` n'a jamais reçu la passe SEO : pas de canonical, pas d'`og:`/`twitter:`, pas de `keywords`, ancien format de `<title>`. Les 14 autres guides Crystal l'ont.
- [ ] Les deux `index.html` (Crystal et D'ici) : zéro balise Open Graph et zéro canonical. Partage Facebook = aucun aperçu, sur un compte d'agence immobilière.
- [ ] `og:image` en chemin relatif partout → ne fonctionne pas au partage. Passer en URL absolue.
- [ ] Format de téléphone incohérent (même point que la cliente) : guides = `450-430-4207`, accueils = `450 430-4207`. Choisir `450 430-4207` partout (affichage) et garder `tel:4504304207`.
- [ ] `450 941-1234` pour le bureau Sainte-Anne-des-Plaines (`remaxcrystal/index.html`) — ressemble à un numéro placeholder, **à valider avec Mehdi**.
- [ ] Apostrophes droites (`'`) partout au lieu des courbes (`’`) — ~350 à 500 par page. Uniformiser.
- [ ] Aucun `robots.txt` sur les deux sites ; aucun `sitemap.xml` pour D'ici.
- [ ] `sitemap.xml` Crystal contient `courtiers/fred-et-max.html` (page de données de test) — à retirer avant tout déploiement.
- [ ] Doublon SEO potentiel : `guide-mirabel.html` et `guide-st-janvier.html` (Saint-Janvier est un secteur de Mirabel). Vérifier la cannibalisation.

**Footer retravaillé [2026-08-10] — 29 pages (15 guides Crystal + accueil, 12 guides D'ici + accueil) :**
- [x] Logo aligné sur le texte de la colonne. Les boîtes DOM étaient déjà à la même position : le décalage venait de la transparence intégrée aux PNG (`Crystal-long-blanc-crystal.png` 83/1500 = 5,53 % ; `diciblanc.png` 124/1600 = 7,75 %). Compensé en CSS via `--footer-logo-h` + `margin-inline-start` négatif proportionnel (−0,314 × hauteur pour Crystal, −0,296 pour D'ici). Écart résiduel mesuré : 0,03px et 0,01px.
- [x] Padding du footer élargi : `clamp(28px, 7vw, 76px)` au lieu du `clamp(20px, 6vw, 48px)` global.
- [x] Ballon RE/MAX du bas de la colonne de gauche retiré (27 pages ; les 2 accueils ne l'avaient pas).
- [x] Textes des menus grossis : liens 0,82 → 0,9rem, titres de colonne 0,72 → 0,78rem.
- ⚠️ **Conformité RE/MAX** : ce ballon avait été ajouté le 2026-06-15 au titre des normes de la bannière (voir plus bas). Le ballon du topbar reste en place sur toutes les pages, donc la marque RE/MAX demeure présente — mais si les normes exigent le ballon *en pied de page*, il faudra le remettre. À valider avec Mehdi.
- ⚠️ Le footer est maintenant en retrait de ~28px de plus que les sections au-dessus (76px vs 48px), les deux utilisant `.container`. Voulu, mais si l'alignement vertical avec le contenu au-dessus est préférable, il faut plutôt élargir le padding global.
- Script : `fix_footer.py` (scratchpad de session, idempotent, `--apply` pour écrire). `blainvilletest.html` et `outil-prompt.html` volontairement exclus (fichier de test et outil interne).

**Ajouts demandés par la cliente — reportés, on n'ajoute rien pour l'instant :**
- [ ] Preuves sociales : avis Google, nombre de transactions, nombre de courtiers, années d'existence, prix remportés.
- [ ] Photos bureaux / équipe / événements / implication communautaire.
- [ ] Vidéo de présentation Mehdi et Denis.
- [ ] Section « Pourquoi choisir RE/MAX Crystal / D'ici? », valeurs, histoire de l'agence.
- [ ] Contenu SEO additionnel : FAQ, blogue, guides vendeurs et acheteurs (lead magnets).

**Ne s'applique pas à nous :** le bug « Votre message a été envoyé avec succès » affiché sans soumission, les incohérences 250 / 300 courtiers et 5 emplacements, la faute « en tout confiance », « près 40 ans », « au coeur », « support » → « soutien », « qu'a lieu » → « qu'a eu lieu », les libellés de boutons courtiers et les formats de courriel. Tout ça vient des sites plateforme `agence.remaxcrystal.com` / `agence.remaxdici.com` (RE/MAX Québec), pas de nos guides. Aucune de ces chaînes n'existe dans notre code.

- [ ] Enhance Google Photo
- [ ] Map attraits
- [ ] PDF generator
- [ ] Photo propriété et / ou photo courtier dans le logo Remax
- [ ] Déploiement guide villes + soumission
- [ ] Générateur de taxes de bienvenue
- [ ] Calculatrice hypothécaire
- [ ] Comparatif de taxes municipales - prix maison = calcul des taxes
- [ ] Hugo Bouchard, Intellicloud
- [x] Accueil (index.html) — section « Notre présence sur les réseaux sociaux » ajoutée sous l'avantage (grille masonry 12 reels, autoplay) — déposer les vidéos dans `images/reels/` (reel-01…reel-12.mp4)
- [x] [2026-06-15] Normes REMAX appliquées aux 27 `guide-*.html` (transposé du site Brunelle, sans toucher au look) : ballon REMAX dans topbar, adresse bureau + ballon dans footer, mention « Franchisé indépendant et autonome de RE/MAX Québec », liens Politique de confidentialité / Conditions d'utilisation, crédit vpourdesign, JSON-LD RealEstateAgent. Détection auto Crystal (Sainte-Thérèse, 228 boul. du Curé-Labelle) vs D'ici (Terrebonne, 550 ch. du Coteau) via le `<title>`. Script : `_apply-remax-norms.py`. Backup : `_backup-pre-remax-norms-2026-06-15/`.
  - ⚠️ Adresse D'ici Terrebonne (550 ch. du Coteau, J6W 5J7, 450 471-4111) — **à valider avec Mehdi** : c'est la principale, mais ils ont aussi un bureau Repentigny (411 rue Notre-Dame).
  - ⚠️ Pages stub `guide-dici-*.html` (12 fichiers, noindex, « Contenu en préparation ») : seulement ballon + JSON-LD ajoutés. Quand on développera le vrai contenu, repasser le script.
  - À faire : créer `politique-confidentialite.html` + `conditions-utilisation.html` (footer pointe vers ces fichiers).

---

## 📝 Notes client

### API eZmax — Dashboards de données (ajouté 2026-06-12)

Le client veut utiliser l'API eZmax pour bâtir des dashboards de ventes, trésorerie et performance.

**Références**
- GitHub : https://github.com/eZmaxinc/eZmax-API
- Doc complète : https://ezmaxinc.github.io/eZmax-API/docs/full/ezmax.v1.3.html
- **Doc partielle RemaxQC** : https://ezmaxinc.github.io/eZmax-API/docs/partial/remaxqc/ezmax.v1.3.html
- OpenAPI spec JSON : https://ezmaxinc.github.io/eZmax-API/specs/ezmax.v1.3.json
- Contact support API : support-api@ezmax.ca

---

#### 🏷️ Endpoints RemaxQC (doc partielle officielle)
Seuls 4 groupes sont documentés dans la section RemaxQC — c'est probablement ce que eZmax expose au client :

| Objet | Endpoint | Usage |
|-------|----------|-------|
| Franchisebroker | `GET /2/object/franchisebroker/getAutocomplete` | Liste des courtiers franchise pour filtres |
| Franchiseoffice | `GET /2/object/franchiseoffice/getAutocomplete` | Liste des bureaux franchise |
| Franchisereferalincome | `POST /1/object/franchisereferalincome` | Créer un revenu de référence franchise |
| Period | `GET /2/object/period/getAutocomplete` | Périodes (filtres temporels sur les rapports) |

#### 🏢 Agents & courtiers (performance individuelle)
- `GET /1/object/agent/getList` — date d'embauche/départ, type de permis (résidentiel/commercial/hypothèque), département, statut actif, numéro de bannière, FINTRAC
- `GET /1/object/broker/getList` — mêmes données pour courtiers
- Exportable XLSX, filtrable par 30+ champs

#### 💰 Finance & trésorerie
- `GET /2/object/bankaccount/getAutocomplete` — comptes bancaires
- `GET /1/object/billingentityinternal/getList` — entités de facturation internes (bureaux) → commissions
- `GET /2/object/billingentityexternal` — entités externes (clients) → comptes débiteurs
- Permissions clés : `FinancialsReports_APReport` (comptes payables), `FinancialsReports_ARReport` (comptes receivables)

#### 📊 Rapports pré-générés (voie principale)
- `GET /1/module/report/getReportFromCache/{sReportgroupCacheID}` — récupère des rapports déjà calculés par eZmax en JSON, PDF, XLSX ou HTML. **C'est probablement le meilleur point d'entrée pour les dashboards financiers** — eZmax génère les rapports, on consomme le JSON.

---

#### ❓ À confirmer avec eZmax
Les endpoints pour transactions, commissions, listings et propriétés ne sont pas dans la doc publique RemaxQC. Demander à support-api@ezmax.ca les objets disponibles : `Transaction`, `Commission`, `Contrat`, `Listing`.

---

#### Plan dashboards suggéré

| Dashboard | Source probable |
|-----------|----------------|
| Performance agents | `/agent/getList` + rapport cache |
| Trésorerie / AP-AR | `/billingentityinternal` + permissions FinancialsReports |
| Revenus franchise | `/franchisereferalincome` |
| Vue par période | `/period/getAutocomplete` comme filtre |
| Commissions | À confirmer — rapport cache ou endpoint dédié |

**Stack recommandé :** React + Vite + TypeScript (aligné projet actuel), appels API côté serveur pour protéger la clé, Recharts pour les graphiques.

---

---

### 🔍 Contexte important — message de la responsable eZmax (2026-06-12)

> L'API est en phase d'ouverture progressive — **nombre de routes limité pour l'instant**, de nouvelles routes ajoutées au fil du temps.

**Tarification :**
- Accès API de base : **gratuit** pour l'instant
- Envoi de dossiers eZsign par API : **tarifé** → https://www.ezsign.com/fr/api
- Futur : modèle freemium (base gratuite + forfait payant pour gros volumes) — **sera communiqué avant application**

**Support technique :**
- Pas de support personnalisé inclus dans l'accès gratuit
- Si on veut du support/accompagnement de leur équipe dev : **Programme de programmeurs autorisés — 500 $/an**
  - Donne accès au support technique de leur équipe
  - Inclusion dans leur liste de programmeurs préautorisés
  - Contact : support-api@ezmax.ca pour adhésion

**Implication pour le projet :**
- Pas besoin du programme payant si on se débrouille avec la doc
- À considérer si on a des questions d'intégration complexes (commissions, transactions, etc.)
- Les routes disponibles sont limitées → valider en amont que les données nécessaires aux dashboards sont accessibles avant de s'engager

---

## ✅ À faire (eZmax dashboards)

- [ ] Confirmer avec le client quels dashboards sont prioritaires (ventes? trésorerie? performance?)
- [ ] Obtenir les credentials API eZmax (clé + URL d'environnement du client)
- [ ] Envoyer les questions à eZmax → voir `EZMAX-QUESTIONS.md`
- [ ] Décider si on adhère au programme programmeurs autorisés (500 $/an) ou si la doc suffit
- [ ] Définir si dashboards embarqués dans le site REMAX Crystal ou app séparée

---

## 📝 Projet — Moteur SEO/GEO courtiers (ajouté 2026-06-13)

**Objectif client (Vincent → RE/MAX Crystal) :** outiller les courtiers de la bannière pour qu'ils sortent tous mieux en **SEO** (recherche classique) et **GEO** (réponses générées par l'IA : ChatGPT, Google AI Overviews, Perplexity, Gemini) selon les **villes qu'ils desservent**. But final : créer une **distance notable** entre les courtiers RE/MAX Crystal et toutes les autres bannières sur le même territoire.

### Idée maîtresse
Deux couches qui se renforcent :
1. **Socle agence** — le site propulse RE/MAX Crystal comme entité locale (déjà en bonne partie en place).
2. **Multiplicateur courtiers** — chaque courtier devient une **entité locale différenciée**, interconnectée au graphe de l'agence. Le levier n'est pas « un courtier qui sort mieux » mais un **maillage agence ↔ courtiers ↔ villes ↔ outils** qu'aucune bannière concurrente n'a.

### Le piège à éviter — homogénéité (souligné par Vincent)
On ne peut pas niveler tous les courtiers, et **cloner la même page par courtier = contenu dupliqué → pénalisé + allure spam**. Le cœur de l'outil doit être un **moteur de différenciation** : page unique par courtier × ville, fabriquée à partir de ce qui est *réellement vrai* de chaque courtier (villes desservies, nb d'inscriptions, spécialités, types de transaction dans `courtiers.js`) croisé avec les données autoritatives de la ville (`cities.js`, `market-stats.js`, `tax-data.js`). Courtiers plus actifs → pages plus riches ; moins actifs → page minimale mais unique. **On orchestre, on ne nivelle pas.**

### État des lieux (audit rapide de l'archi existante)
- ✅ 15 guides de ville avec title/description/OG/Twitter, **canonical**, et **JSON-LD** (`RealEstateAgent`, `Place`, `AdministrativeArea`, `FAQPage`/Q&A, `BreadcrumbList`). Générés via `build-cities.mjs` depuis le template `guide-blainville.html` + `data/cities.js` + `data/tax-data.js`.
- ✅ `courtiers.js` : ~30 courtiers avec villes[], types, transaction, proprietes, **listings par ville**. Mais utilisés seulement dans l'outil de jumelage modal — **aucune page/empreinte indexable individuelle.**
- ✅ Données marché (Centris) `market-stats.js` + rendu auto `market-render.js` ; taxes ; événements.
- ⚠️ **Trous techniques** : pas de `sitemap.xml`, pas de `robots.txt`, `hreflang fr-CA` à vérifier ; **le template Blainville n'a PAS le JSON-LD** que les 14 autres guides ont (à corriger).

### Composantes pressenties du moteur
1. **Pages courtier × ville** générées (`courtier-<slug>.html` et/ou par ville), même pipeline que `build-cities.mjs`.
2. **Couche schema/GEO** : `Person` (courtier) → `worksFor` → `RealEstateAgent` (RE/MAX Crystal) → `areaServed` (les villes) ; FAQ calquée sur les questions posées aux IA (« meilleur courtier à X », « taxe de bienvenue à Y »).
3. **Maillage interne** : guide ville ↔ courtiers de cette ville ↔ pages courtier ↔ calculatrices.
4. **Moteur de différenciation** (anti-duplication) : variation de gabarits + données réelles → chaque page unique ; richesse proportionnelle à l'activité du courtier.
5. **Assets autoritatifs** : calculatrices locales comme aimants à liens/citations ; sitemap, robots, cohérence NAP / Google Business Profile par courtier.
6. **Gouvernance (plus tard)** : tableau de bord des pages courtier × ville (existence, fraîcheur, ranking).

### Phases proposées
- **P1 — Socle technique** : combler trous (sitemap, robots, JSON-LD Blainville, audit canonical/hreflang).
- **P2 — Couche entité courtier** : schema `Person`, pages courtier, maillage interne.
- **P3 — GEO + différenciation** : FAQ calquée IA, moteur anti-homogénéité, contenu question→réponse.
- **P4 — Mesure + automatisation** : KPIs, regénération depuis les data files, rafraîchissement Centris trimestriel (déjà conçu dans STRATEGIE.md).

### Décisions de cadrage (13 juin 2026)
- Présentation client = **pitch décisionnel complet** (vision + phases + ROI, sans chiffrage précis).
- Public = **Mehdi / direction de l'agence**.
- Livrable : `presentation-seo-geo-courtiers.html`, même système visuel que le site.

### RE/MAX D'ici — territoire (recherche 2026-06-13)
Même propriété que Crystal : **Mehdi Jamal + Denis Gauthier** (acquise 2022). Fondée 1983 sous « RE/MAX des Mille-Îles », renommée D'ici en 2017. **160+ courtiers**, 2 bureaux : **Terrebonne** (550 ch. du Coteau) + **Repentigny** (411 rue Notre-Dame). Territoire = couronne nord-est / Lanaudière sud-ouest (MRC Les Moulins + L'Assomption).
⚠️ Le menu « municipalités » de remaxdici.com = liste Centris province-wide, **pas** leur territoire. Liste candidate à confirmer avec Mehdi (12) : Terrebonne, Mascouche, Repentigny, Charlemagne, L'Assomption, L'Épiphanie, Saint-Sulpice, Lavaltrie, Saint-Roch-de-l'Achigan, Saint-Lin–Laurentides, Saint-Jacques, Joliette. Extensions possibles : St-Charles-Borromée, Notre-Dame-des-Prairies, Rawdon, Saint-Calixte.

### Questions ouvertes / à confirmer
- [ ] Structure d'URL des pages courtier : une page par courtier, ou page courtier × ville? (impact sur volume de pages et risque de duplication)
- [ ] Données réelles dispo par courtier au-delà de `courtiers.js` (avis Google, ventes réelles, GBP)?
- [ ] Qui maintient le contenu différenciant à long terme (agence vs V pour Design)?
- [ ] Consentement des courtiers à figurer/être optimisés individuellement.
