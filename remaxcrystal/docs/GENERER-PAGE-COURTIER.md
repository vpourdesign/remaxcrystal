# GÉNÉRER UNE PAGE COURTIER — Prompt réutilisable

**Usage :** colle ce fichier au complet dans Claude Code, suivi du JSON du courtier
(`data/courtiers/{slug}.json`, produit par `courtier-formulaire.html`).
Une génération = une page complète, prête à publier.

---

## PROMPT (copier à partir d'ici)

Tu vas générer la page d'un courtier RE/MAX Crystal à partir du JSON fourni à la fin de ce message. Suis exactement ce qui suit.

### 0. Contexte du repo

**Deux sites, même méthode.** Le champ `agence` du JSON dit lequel :

| `agence` | Dossier du site | Domaine | Marque, région | Logo (depuis `courtiers/`) |
|---|---|---|---|---|
| `crystal` (ou absent) | `remaxcrystal/` | `https://agence.remaxcrystal.com` | RE/MAX Crystal, Basses-Laurentides | `../brand_assets/Crystal-long-blanc-crystal.png` |
| `dici` | `remaxdici/` | `https://agence.remaxdici.com` | RE/MAX D'ici, Lanaudière | `../brand_assets/diciblanc.png` |

Dans tout ce qui suit, remplace `remaxcrystal/`, le domaine, « RE/MAX Crystal » (`memberOf`, footer, textes) et le logo par ceux de l'agence de la fiche. Les villes, guides et bureaux viennent de `<dossier>/data/courtiers-config.js`. Pour D'ici, le gabarit visuel reste `remaxcrystal/courtiers/genevieve-marchand.html` (mêmes tokens, les deux sites partagent la charte RE/MAX); on change seulement la marque, le logo, les liens et le NAP.

- Site 100 % statique, dossier `remaxcrystal/`. La page va dans `remaxcrystal/courtiers/{slug}.html` (le `slug` est dans le JSON — URL stable : on ne la change **jamais**, même si le courtier élargit son territoire).
- **Gabarit visuel de référence : `courtiers/genevieve-marchand.html`.** Reprends **tel quel** son `<style>` et sa structure HTML (design system `design-system/DESIGN.md` : Anton + Montserrat, crème `#FAF9F0`, marine `#1C315E`, encre `#151A2E`, rouge `#EF2525` pour une seule donnée, brume `#E0E3E8`; grille 12 colonnes, titres de section dans un rail collant à gauche), mais **réécris 100 % du contenu texte** (voir règles anti-duplication). Ne modifie pas le CSS d'une page à l'autre : seules les classes existantes servent. Retire le bandeau `.demo` et passe `robots` à `index, follow`.
- Domaine : `https://agence.remaxcrystal.com`. Chemins relatifs depuis `courtiers/` : `../brand_assets/…`, `../guide-*.html`.
- Les guides de villes existants sont listés dans `data/courtiers-config.js` (`VILLES` : nom → fichier guide). Le NAP des bureaux y est aussi (`BUREAUX`) — utilise-le tel quel, sans le modifier.
- Après génération, lance `node remaxcrystal/build-courtiers.mjs` (Crystal) ou `node remaxcrystal/build-courtiers.mjs --site remaxdici` (D'ici) : il régénère le hub `/courtiers/`, le sitemap, le maillage guides→courtiers, valide le SEO et **détecte les phrases dupliquées entre pages** (le build échoue s'il y en a).

### 1. Structure de la page (ordre de base — à varier, voir 4)

1. **Topbar + fil d'Ariane visible** : Accueil → Nos courtiers → {Nom}.
2. **Hero** : titre OACIQ exact + permis en `.label`, H1 en deux parties (`.nom` en Anton, `.role` « courtier immobilier à {Ville} »; ville dans `.insec`), portrait, CTA principal (selon `contact.ctaPrincipal` : évaluation / appel / courriel), téléphone cliquable (`tel:`), et, sous le hero, une **bande de faits** (`dl.faits`, trois `div` avec `dt` libellé et `dd` chiffre) : des faits chiffrés du JSON seulement. Le filet rouge sous le premier chiffre est automatique. Un chiffre approximatif s'écrit avec un « + » après (« 320+ »), jamais avec un tilde.
   Puis la **fiche** (`section.fiche`, 4 repères : secteurs, langues, bureau d'attache, reconnaissances ou permis s'il n'y a pas de reconnaissance).
3. **Paragraphe d'entité (crucial GEO)** — dans le hero, juste sous le titre. Première phrase qui dit **qui, quoi, où, depuis quand** : « {Nom} est {titre exact} chez RE/MAX Crystal, actif à {Ville} et ses environs depuis {année}. » **Varie la formulation à chaque courtier**, mais reste factuel, en une phrase citable telle quelle par une IA. Ajoute 1-2 phrases de faits (transactions, ancrage local).
4. **Bio réécrite** : 600-900 mots uniques, rédigés à partir de la matière brute (`contenuBrut.presentation`, `contenuBrut.momentMarquant`, `territoire.lienTerritoire`). Ton professionnel-chaleureux, français québécois. L'anecdote (`momentMarquant`) va dans un encadré distinct.
5. **Panorama de la ville principale** (`section.panorama`, juste avant le territoire) : la photo principale du guide de la ville, prise dans `data/courtiers-config.js` (`VILLES[].photo`, `photoAlt`, et `photoPortrait` s'il existe), avec un bandeau marine qui nomme la ville et donne une phrase sur le lien du courtier avec elle. Jamais une autre photo, jamais une photo de stock.
6. **Section territoire** : la ville principale domine (~70 % du contenu géo). Intègre naturellement les 2 villes secondaires. Utilise les `territoire.faitsLocaux` du courtier — c'est SA lecture du marché, pas une description générique de la ville. **Liens internes vers les guides** des 3 villes (`../guide-*.html`), ville principale étiquetée « Ville principale ». Les cartes des villes secondaires portent chacune la photo principale de leur guide (`img.ville-photo`, même source `VILLES[].photo`).
7. **Services** : liste structurée `<ul>` (vendeurs / acheteurs selon `clientele`), jamais un mur de texte.
8. **Engagements** (bande marine `.chap.bande.sombre`) : les `plusValues` reformulées, chacune ouverte par son fait clé en Anton (`.chiffre` : « < 2 h », « 48 h », « Inclus »…). Pas de numéros 01/02/03 : ce n'est pas une séquence.
9. **Témoignages** : réels seulement (ceux du JSON avec `consentement: true`), avec nom + ville. Aucun témoignage inventé, jamais.
10. **FAQ** : accordéon `<details>/<summary>`, 3-5 Q/R **réécrites** depuis `contenuBrut.faq`. Chaque réponse doit être **autonome et compréhensible hors contexte** (nomme le courtier ou la ville dans la réponse — citabilité IA).
11. **Inscriptions** : lien vers `preuveSociale.liens.centris` (bouton), s'il existe.
12. **CTA final + coordonnées complètes** : NAP identique partout (page, JSON-LD, fiche Google) — cellulaire, courriel, bureau d'attache (adresse exacte de `contact.bureau`), permis OACIQ.

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

- Palette et composants du design system seulement. Le rouge n'apparaît qu'une fois : la première barre de faits. Chaque section est un `section.chap` avec `.chap-tete` (H2 Anton + une phrase) et `.chap-corps`; entre deux chapitres crème, le filet de 3 px se pose tout seul. Alternance : crème, bande marine (engagements), crème, bande brume (témoignages), crème, contact marine.
- Photos libres et vidéo : décommente les blocs « GABARIT OPTIONNEL » du gabarit (galerie, vidéo) et place-les après le territoire.
- Responsive 360 px → desktop. Accessibilité AA : contrastes, `aria-label` sur les navs, `prefers-reduced-motion` respecté (déjà dans le gabarit).
- Core Web Vitals : aucun JavaScript (le gabarit n'en a pas), images dimensionnées, deux familles de polices seulement (Anton, Montserrat 400/500/600).
- Témoignages : jamais d'étoiles ni de note, le JSON n'en contient pas.

### 6. Après la génération

1. `node build-courtiers.mjs` → corrige tout ⚠/✗ signalé (title trop long, duplication…).
2. Photos : les fiches reçues par le formulaire ont déjà leurs photos dans `<dossier>/images/courtiers/{slug}/` (`portrait.jpg`, `equipe.jpg`, `photo-1.jpg`…, chemins dans `medias`). Utilise-les toutes : portrait dans le hero, photo d'équipe et photos libres dans une galerie ou à côté de la bio. Vidéo (`medias.video`, YouTube ou Vimeo) : intègre-la en `<iframe loading="lazy">` (youtube-nocookie.com pour YouTube) dans sa propre section. Ancienne fiche avec `dataUrl` : décode-la vers ces chemins. Aucune photo : garde le placeholder et signale-le.
3. Vérifie le JSON-LD au https://search.google.com/test/rich-results (mentionne-le dans ton résumé).
4. Présente un résumé : title (avec compte de caractères), meta description (compte), ordre des sections choisi et pourquoi, faits chiffrés mis en avant.

### JSON du courtier

```json
[COLLER ICI LE CONTENU DE data/courtiers/{slug}.json]
```
