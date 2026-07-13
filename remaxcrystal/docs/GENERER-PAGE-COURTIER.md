# GÉNÉRER UNE PAGE COURTIER — Prompt réutilisable

**Usage :** colle ce fichier au complet dans Claude Code, suivi du JSON du courtier
(`data/courtiers/{slug}.json`, produit par `courtier-formulaire.html`).
Une génération = une page complète, prête à publier.

---

## PROMPT (copier à partir d'ici)

Tu vas générer la page d'un courtier RE/MAX Crystal à partir du JSON fourni à la fin de ce message. Suis exactement ce qui suit.

### 0. Contexte du repo

- Site 100 % statique, dossier `remaxcrystal/`. La page va dans `remaxcrystal/courtiers/{slug}.html` (le `slug` est dans le JSON — URL stable : on ne la change **jamais**, même si le courtier élargit son territoire).
- **Gabarit visuel de référence : `courtiers/genevieve-marchand.html`.** Reprends sa structure HTML/CSS (tokens Crystal : Raleway + Open Sans, navy `#1e3350`, bleu `#3578c4`, or `#c4a245`), mais **réécris 100 % du contenu texte** (voir règles anti-duplication).
- Domaine : `https://agence.remaxcrystal.com`. Chemins relatifs depuis `courtiers/` : `../brand_assets/…`, `../guide-*.html`.
- Les guides de villes existants sont listés dans `data/courtiers-config.js` (`VILLES` : nom → fichier guide). Le NAP des bureaux y est aussi (`BUREAUX`) — utilise-le tel quel, sans le modifier.
- Après génération, lance `node build-courtiers.mjs` : il régénère le hub `/courtiers/`, le sitemap, le maillage guides→courtiers, valide le SEO et **détecte les phrases dupliquées entre pages** (le build échoue s'il y en a).

### 1. Structure de la page (ordre de base — à varier, voir 4)

1. **Topbar + fil d'Ariane visible** : Accueil → Nos courtiers → {Nom}.
2. **Hero** : portrait, nom, titre OACIQ exact + numéro de permis, ville principale dans le H1, CTA principal (selon `contact.ctaPrincipal` : évaluation / appel / courriel), téléphone cliquable (`tel:`), 3 chips de faits chiffrés.
3. **Paragraphe d'entité (crucial GEO)** — dans le hero, juste sous le titre. Première phrase qui dit **qui, quoi, où, depuis quand** : « {Nom} est {titre exact} chez RE/MAX Crystal, actif à {Ville} et ses environs depuis {année}. » **Varie la formulation à chaque courtier**, mais reste factuel, en une phrase citable telle quelle par une IA. Ajoute 1-2 phrases de faits (transactions, ancrage local).
4. **Bio réécrite** : 600-900 mots uniques, rédigés à partir de la matière brute (`contenuBrut.presentation`, `contenuBrut.momentMarquant`, `territoire.lienTerritoire`). Ton professionnel-chaleureux, français québécois. L'anecdote (`momentMarquant`) va dans un encadré distinct.
5. **Section territoire** : la ville principale domine (~70 % du contenu géo). Intègre naturellement les 2 villes secondaires. Utilise les `territoire.faitsLocaux` du courtier — c'est SA lecture du marché, pas une description générique de la ville. **Liens internes vers les guides** des 3 villes (`../guide-*.html`), ville principale étiquetée « Ville principale ».
6. **Services** : liste structurée `<ul>` (vendeurs / acheteurs selon `clientele`), jamais un mur de texte.
7. **Plus-values** : 3 cartes numérotées, reprenant `plusValues` (reformulées, pas copiées-collées).
8. **Témoignages** : réels seulement (ceux du JSON avec `consentement: true`), avec nom + ville. Aucun témoignage inventé, jamais.
9. **FAQ** : accordéon `<details>/<summary>`, 3-5 Q/R **réécrites** depuis `contenuBrut.faq`. Chaque réponse doit être **autonome et compréhensible hors contexte** (nomme le courtier ou la ville dans la réponse — citabilité IA).
10. **Inscriptions** : lien vers `preuveSociale.liens.centris` (bouton), s'il existe.
11. **CTA final + coordonnées complètes** : NAP identique partout (page, JSON-LD, fiche Google) — cellulaire, courriel, bureau d'attache (adresse exacte de `contact.bureau`), permis OACIQ.

### 2. SEO technique (obligatoire)

- **URL** : `courtiers/{slug}.html` — stable pour toujours.
- **Title** : `{Nom} | Courtier immobilier à {Ville principale} – RE/MAX Crystal`, **≤ 60 caractères**. Si trop long : retire « – RE/MAX Crystal », puis « à » → adapte. Vérifie le compte.
- **Meta description** : unique, **150-160 caractères**, avec ville principale + un différenciateur concret du courtier.
- **H1 unique** : `{Nom}, courtier immobilier à {Ville principale}`.
- **Canonical** : `https://agence.remaxcrystal.com/courtiers/{slug}.html`. `robots` : `index, follow` (une vraie page n'est jamais en noindex).
- **Open Graph + twitter:card** complets (og:type profile, image = portrait).
- **JSON-LD `@graph`** :
  - `RealEstateAgent` : name, jobTitle (titre OACIQ exact), identifier (permis OACIQ), image, url, telephone (`+1-XXX-XXX-XXXX`), email, address (NAP du bureau d'attache, tel quel), `areaServed` (les 3 villes max), `knowsLanguage` (codes : fr, en…), `memberOf` RE/MAX Crystal, `sameAs` (liens fournis seulement).
  - Équipe (`identite.type === "equipe"`) : `RealEstateAgent` pour l'équipe + un nœud `Person` par membre (avec `worksFor`).
  - `FAQPage` avec les mêmes Q/R que l'accordéon.
  - `BreadcrumbList` : Accueil → Nos courtiers → {Nom}.
  - **Jamais de `Review`/`AggregateRating` inventé** — uniquement les témoignages réels du JSON (avec consentement).
- **Images** : WebP si disponible, `loading="lazy"` (sauf portrait hero : `fetchpriority="high"` + `width`/`height`), alt `{Nom}, courtier immobilier à {Ville}`, noms de fichiers en slug (`images/courtiers/{slug}/portrait.jpg` — chemins déjà dans le JSON).
- **Maillage** : liens sortants vers les 3 guides de villes + le hub `index.html` (topbar, fil d'Ariane, footer). Le retour (guides → page courtier) et le sitemap sont gérés par `build-courtiers.mjs`.

### 3. GEO (visibilité IA)

- Paragraphe d'entité en ouverture (voir 1.3).
- **Faits chiffrés et vérifiables mis en avant** : années d'expérience (calculées depuis `anneeDebut`), transactions, territoires, délais promis. Les IA citent des faits, pas des slogans.
- Réponses FAQ autoportantes (relisibles hors page sans perdre leur sens).
- **Cohérence NAP absolue** : mêmes téléphone/adresse/courriel dans la page, le schema et la fiche Google du courtier.
- Aucune phrase creuse : « passionné d'immobilier depuis toujours », « à l'écoute de vos besoins », « service clé en main », « votre satisfaction est ma priorité » sont **bannies**.

### 4. Anti-duplication (non négociable)

- **Interdiction de réutiliser des tournures de phrases d'une autre page courtier.** Le gabarit visuel est commun ; la rédaction repart de zéro depuis la matière brute de CE courtier. Avant d'écrire, relis les pages existantes dans `courtiers/` pour savoir ce qu'il faut éviter.
- **Varie l'ordre des sections 4 à 9** d'une page à l'autre quand le contenu s'y prête (ex. : un courtier à forte preuve sociale → témoignages avant le territoire ; un courtier hyper-local → territoire juste après le hero).
- Varie aussi : la formulation du paragraphe d'entité, les titres de sections (`s-title`), les eyebrows, le texte des CTA.
- **Auto-vérification finale** : pour chaque phrase complète de la page, demande-toi si elle pourrait apparaître telle quelle sur la page d'un autre courtier. Si oui, réécris-la. Puis lance `node build-courtiers.mjs` — le détecteur de duplication doit afficher 0.

### 5. Look & qualité

- Palette et composants du gabarit Crystal (pas de rouge RE/MAX dominant — le site utilise navy/bleu/or).
- Responsive 360 px → desktop. Accessibilité AA : contrastes, `aria-label` sur les navs, `prefers-reduced-motion` respecté (déjà dans le gabarit).
- Core Web Vitals : pas de JS superflu (seul l'IntersectionObserver du gabarit), images dimensionnées, une seule police-family par rôle.

### 6. Après la génération

1. `node build-courtiers.mjs` → corrige tout ⚠/✗ signalé (title trop long, duplication…).
2. Ajoute la photo réelle dans `images/courtiers/{slug}/` si le JSON contient un `dataUrl` (le décoder) ou si elle a été fournie à part ; sinon garde le placeholder et signale-le.
3. Vérifie le JSON-LD au https://search.google.com/test/rich-results (mentionne-le dans ton résumé).
4. Présente un résumé : title (avec compte de caractères), meta description (compte), ordre des sections choisi et pourquoi, faits chiffrés mis en avant.

### JSON du courtier

```json
[COLLER ICI LE CONTENU DE data/courtiers/{slug}.json]
```
