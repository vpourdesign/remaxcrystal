# Notes — REMAX Crystal

## ✅ À faire (backlog général)

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
