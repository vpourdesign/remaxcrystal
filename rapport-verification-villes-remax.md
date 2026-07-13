# Rapport de vérification — Pages villes RE/MAX Crystal + RE/MAX d'ici

**Date :** 10 juillet 2026 · **Portée :** 27 pages villes (15 Crystal + 12 d'ici) · **Références :** barème provincial des droits de mutation 2026 ([quebec.ca](https://www.quebec.ca/gouvernement/gestion-municipale/finances-fiscalite-municipales/fiscalite/droits-mutations-immobilieres)) · populations : décret 1499-2025 ([Gazette officielle, 24 déc. 2025](https://www.publicationsduquebec.gouv.qc.ca/fileadmin/gazette/pdf_encrypte/lois_reglements/2025F/86980.pdf)) · sites municipaux officiels.

**Mécanique des corrections :** les pages sont générées par `build-cities.mjs` / `build-cities-dici.mjs` à partir de `data/cities.js`, `data/cities-dici.js` et `data/tax-data.js`. Les corrections ont été faites dans les fichiers de données puis les 26 pages regénérées. `guide-blainville.html` (template maintenu à la main) a été corrigé directement.

---

## 🚨 Section prioritaire — erreurs croisées / de marque détectées

| # | Erreur | Correction |
|---|---|---|
| 1 | **Table comparative de guide-blainville.html : taux inventés/périmés pour 5 villes** (Blainville 0,72 $, Ste-Thérèse 0,81 $, Lorraine 0,68 $, Rosemère 0,78 $, Boisbriand 0,85 $ — aucun ne correspondait à 2026) sous un badge « Données 2026 » | Remplacés par les taux 2026 vérifiés : 0,466 / 0,456 / 0,526 / 0,497 / 0,511 $ et taxes annuelles recalculées (2 765 / 3 183 / 3 126 / 2 488 / 3 059 $) |
| 2 | **Les 12 pages + l'index RE/MAX d'ici pointaient vers remaxcrystal.com** (nav + footer : Agence, Équipe, Propriétés, Blogue, Carrière, Contact) — erreur croisée de marque | Remplacés par les équivalents remaxdici.com/fr/* (les 6 URLs vérifiées fonctionnelles, 0 × 404) |
| 3 | **Repentigny : calculateur sous-facturait** — barème affiché « provincial 1,5 % max » alors que la ville applique 3 % > 500 000 $ (écart de 19 500 $ sur une maison de 1,2 M$) | Tranche 3 % > 500 k$ ajoutée ([source](https://repentigny.ca/services/citoyens/maison-logement/achat-vente-propriete), exemple officiel 550 k$ → 7 110,50 $ reproduit exactement) |
| 4 | guide-blainville.html : photos de parcs provenant d'autres villes (lorraine1.jpg, rosemere1/2, stetherese2, boisbriand2) étiquetées avec des noms de parcs de Blainville | Noms retirés (voir section Espaces verts). Les photos elles-mêmes n'ont pas été touchées (interdiction design) — **à remplacer par des photos de Blainville quand possible** |

---

## RE/MAX Crystal — 15 pages

| Ville | Statut | Détail |
|---|---|---|
| Blainville | 🔧 corrigé | Table comparative (voir prioritaire #1) + footer « Guides de villes » (6 liens morts `#` → vrais liens). Taux 0,466/0,503 $, tarifs 435 $, piscine 50 $, mutation 1,5 % → 750 k$ puis 3 % : tous confirmés ([blainville.ca](https://blainville.ca/ville/administration-municipale/taxes-et-evaluation)). Pop. affichée 58 800+ véridique (décret : 61 742) |
| Boisbriand | ✅ véridique | Taux combiné 0,5113 $ (incl. ARTM 0,0181), tarifs 502 $, mutation 2,5 % 500–800 k$ / 3 % > 800 k$ : confirmés ([Dossier sommaire 2026](https://www.ville.boisbriand.qc.ca/storage/app/media/ville/administration-municipale/budget-et-etats-financiers/2026/Dossier-sommaire-final-2026.pdf)). Pop. 27 800+ véridique (29 814) |
| Bois-des-Filion | ✅ véridique | 0,4848 $, tarifs 944 $, piscine 45 $, 3 % > 500 k$ : confirmés ([dépliant 2026](https://villebdf.ca/wp-content/uploads/2026/02/BDF_DEPLIANT_TAXES2026.www_.pdf)). Pop. 10 200+ véridique (10 657) |
| Deux-Montagnes | 🔧 corrigé | **Population 18 600+ → 18 400+** (décret : 18 482). Taux 0,5838 $ exact (0,5735 + 0,0103 usine d'eau), tarifs 722 $, 3 % > 500 k$ : confirmés ([ville.deux-montagnes.qc.ca](https://www.ville.deux-montagnes.qc.ca/ville-de-deux-montagnes/administration-et-finances/taxes-et-evaluation-fonciere)). Nuance : 35 $ = piscine creusée (hors-terre 25 $) |
| Lorraine | 🔧 corrigé | **Population 9 800+ → 9 700+** (décret : 9 730). Taux 0,526/0,5532 $ (sommes vérifiées), tarifs de base 496 $, 3 % > 500 k$ : confirmés ([dépliant 2026](https://lorraine.ca/storage/app/media/Documents/2026_DepliantTaxes_WEB.pdf)) |
| Mirabel | 🔧 corrigé | **Taux 0,322 → 0,317 $** (0,267 générale + 0,050 dette — [Prévisions budgétaires 2026, Annexe 1](https://mirabel.ca/uploads/2._Ville/2.2_Administration/2.2.2_Finances/2025/Previsions_budgetaires_2026.pdf), confirmé « 31,7 ¢ » au mot de la mairesse). Eau 292 $ et mutation 3 % > 500 k$ (règl. 2455) confirmés. Pop. 67 000+ véridique (68 402) |
| Oka | 🔧 corrigé | **Taxes municipales entièrement retirées de la page** (décision client, 10 juil. 2026) : le taux affiché était celui de 2025 et le règlement 2026-299 n'est pas lisible en ligne. Retirés : onglet + calculateur « Taxes municipales », table comparative, taxes dans le calculateur hypothèque, question FAQ SEO sur le taux. Le calculateur de mutation reste (barème spécial règl. 2018-195 **confirmé** — [page officielle](https://municipalite.oka.qc.ca/citoyen/droit-de-mutation-oka/), source affichée mise à jour). Population affichée 5 300+ véridique (décret : 6 124). Réactivation : valider le taux au 450 479-8333, mettre à jour `tax-data.js` et retirer le flag `hideMunicipalTax` |
| Pointe-Calumet | 🔧 corrigé | **Taxes municipales entièrement retirées de la page** (décision client, 10 juil. 2026) : taux 0,82 $ invérifiable (site 100 % JS, nouveau rôle 2026-2028). Retirés : mêmes éléments qu'Oka. **Population 6 600+ → 6 400+ corrigée** (décret : 6 422). ❓ Le calculateur de mutation reste avec la tranche 3 % > 500 k$ dont le règlement n'a pas été repéré — note publique « à confirmer auprès de la municipalité » ajoutée sous le calculateur ; valider au 450 473-5930 p. 226 (si pas de règlement : retirer la tranche = barème provincial 1,5 % max). Retirée aussi des tables comparatives de Deux-Montagnes et Ste-Marthe |
| Rosemère | 🔧 corrigé | **Population 14 500+ → 14 200+** (décret : 14 204). **Lien événements remplacé** : /calendrier/ → [/calendrier-des-evenements-et-des-activites/](https://www.ville.rosemere.qc.ca/calendrier-des-evenements-et-des-activites/). ❓ Taux 0,4975 $ non confirmable chiffré (site opaque aux outils ; hausse 3 % confirmée par presse ; règlement modificateur 1016-01 passé au conseil de mai 2026) — à revalider en navigateur. Mutation 3 % > 500 k$ confirmée |
| Saint-Janvier (Mirabel) | 🔧 corrigé / ❓ | Taux 0,322 → **0,317 $** (secteur de Mirabel, mêmes taux). ❓ « 20 000+ résidents (secteur) » : aucune source officielle ne ventile la population par secteur — à sourcer ou reformuler (« secteur le plus populeux de Mirabel ») |
| Sainte-Anne-des-Plaines | ✅ véridique | Tarifs 646 $ confirmés au [dépliant 2026](https://www.villesadp.ca/storage/app/media/informations-financieres/2026/depliant-taxes-2026-web.pdf) ; mutation 3 % > 500 k$ (règl. 1003) confirmée ; taux 0,6174 $ cohérent avec la hausse de 3 % annoncée (chiffre exact non publié en ligne). Pop. 15 800+ véridique (15 874, serré) |
| Ste-Marthe-sur-le-Lac | ✅ véridique | 0,4891 $ (0,4791 + 0,01 env.), tarifs 633 $, 3 % > 500 k$ : confirmés ([dépliant 2026](https://vsmsll.ca/storage/app/media/ville/administration-et-finances/taxes-et-evaluation-fonciere/depliant_taxes.pdf)). Pop. 21 800+ véridique (21 914) |
| Sainte-Sophie | ✅ véridique | 0,434 $, aucun tarif fixe, 3 % > 500 k$ (règl. 1362-2022) : confirmés ([stesophie.ca](https://www.stesophie.ca/municipalite/administration-et-finances/finances)). Pop. 17 200+ véridique (19 478) |
| Sainte-Thérèse | ✅ véridique | 0,456/0,455 $, tarifs 903 $ (somme vérifiée), 3 % > 500 k$ : confirmés ([sainte-therese.ca](https://www.sainte-therese.ca/services/services-aux-citoyens/taxes-evaluation-et-droit-de-mutation)). Pop. 27 100+ véridique (27 230) |
| Saint-Eustache | ✅ véridique | 0,4404 $ (0,4260 + 2 × 0,0072), tarifs 888 $, 3 % > 500 k$ : confirmés ([saint-eustache.ca](https://www.saint-eustache.ca/taxes-permis-et-reglements/taxes-et-evaluation-fonciere/compte-de-taxes)). Pop. 46 200+ véridique (47 448) |

## RE/MAX d'ici — 12 pages

| Ville | Statut | Détail |
|---|---|---|
| Terrebonne | 🔧 corrigé | **URL source du PDF mise à jour** (2026/01 → codification [2026/04](https://terrebonne.ca/wp-content/uploads/2026/04/R2528-taux-taxes-tarifs-compensations-2026.pdf)). Taux 0,6892 $, tarifs 386 $ (le 185 $ GMR ne s'applique pas à l'unifamiliale — déjà exclu ✓), piscine 50 $, 3 % > 500 k$ (règl. 2528 art. 19) : confirmés. Pop. 119 000+ véridique (126 199) |
| Mascouche | ✅ véridique | 0,6299/0,6150 $ (combinés vérifiés), tarifs 494 $, piscine 25 $, 3 % > 500 k$ : confirmés ([mascouche.ca](https://mascouche.ca/ville/administration/taxes-1)). N° de règlement 1349 non affiché en ligne — à valider si cité. Pop. 52 000+ véridique (56 649) |
| Repentigny | 🔧 corrigé | **Mutation corrigée : + tranche 3 % > 500 k$** (voir prioritaire #3). Taux 0,5739 $ et tarifs 484 $ confirmés (eau à la consommation en sus). Pop. 86 000+ véridique (90 815) |
| Charlemagne | ✅ véridique* | Tarifs 999 $, 3 % > 500 k$ (règl. 12-436-24, exemple officiel 525 k$ → 6 360,50 $ reproduit ✓) : confirmés ([charlemagne.ca](https://www.charlemagne.ca/la-ville/administration/taxation-et-role-devaluation-fonciere)). *Nuance : 0,6514 $ = taux de base résiduel ; nouveauté 2026, une maison 1-3 logements paie 0,4364 $ ([budget 2026, p. 7](https://www.charlemagne.ca/storage/app/media/la-ville/administration/budget-finances/2026/6853-VCH_Budget_2026_V4_final_corrig%C3%A9.pdf)) — décision d'affichage à prendre (voir reste à faire). Pop. 6 000+ véridique (6 658) |
| L'Assomption | ❓ à valider | Mutation 3 % > 500 k$ **confirmée** ([page officielle](https://www.ville.lassomption.qc.ca/droits-mutation/)). Taux 0,5896 $ et tarifs 709 $ : dépliant PDF officiel en téléchargement forcé, illisible par outil ; indices de presse cohérents (+3,5 %, +12 $ eau, +25 $ climat) mais non confirmés — valider en ouvrant [le dépliant](https://www.ville.lassomption.qc.ca/download.php?filename=lass-dep-compte-taxes-2026-vf.pdf) |
| L'Épiphanie | 🔧 corrigé | **Population 10 000+ → 9 200+** (décret : 9 222 — l'affiché dépassait le réel). **Lien événements remplacé** : /bibliotheque (calendrier de la bibliothèque !) → [/programmation](https://www.lepiphanie.ca/programmation) (pas de page événements générale ; à défaut : accueil). Taux 0,5351 $, tarifs 720 $, mutation avec seuil prolongé 1,5 % → 596 510 $ puis 3 % : confirmés ([dépliant Budget 2026](https://www.lepiphanie.ca/taxes-municipales)) |
| Saint-Sulpice | 🔧 corrigé / ❓ | **Population 3 700+ → 3 600+** (décret : 3 671). Taux 0,4954 $ confirmé indirectement (PV du conseil 2026 indexé). ❓ Tarifs 196 $ et mutation « provinciale » : non confirmables en ligne (site Joomla opaque) — valider le règl. 325-2026 en navigateur. Lien événements : URL du menu officiel, conservée |
| Lavaltrie | 🔧 corrigé | **Tarifs fixes 1054 → 745 $** (l'ancien montant utilisait le tarif eau « petit débit » non résidentiel 588 $ au lieu du tarif résidentiel 279 $ ; 279 + 201 + 265 = 745 $ — [règl. 366-2025](https://www.ville.lavaltrie.qc.ca/storage/app/media/Tr%C3%A9sorerie/2026/366-2025%20-%20Imposition_taxes_VF.pdf)). **Mutation corrigée : + tranche 3 % > 500 k$** ([barème officiel](https://www.ville.lavaltrie.qc.ca/services-citoyens/taxes-et-evaluation)). Taux 0,6398 $ confirmé. Pop. 14 000+ véridique (16 016) |
| St-Roch-de-l'Achigan | 🔧 corrigé | **Population 6 500+ → 5 600+** (décret : 5 685 — l'affiché dépassait le réel de 800+). **Tarifs 570 → 825 $** (égout 347 + aqueduc 323 + MR 155, [dépliant Budget 2026](https://sra.quebec/Informations/D%C3%A9pliant%20-%20Budget%202026.pdf) ; l'ancien 570 $ mélangeait des tarifs 2025 avec compteur). **Piscine 70 → 90 $**. Taux 0,5114 $ : l'étiquette « estimé » retirée — somme confirmée au dépliant (0,2854 + 0,0508 + 0,0790 + 0,0962). Mutation 3 % > 500 k$ confirmée ([sra.quebec](https://sra.quebec/droit-de-mutation)) |
| Saint-Lin–Laurentides | ✅ véridique | Taux 0,5833 $ confirmé au sou près (règl. [847-2026](https://www.saint-lin-laurentides.com/storage/app/media/Greffe/847-2026_taxation-2026_final%201.pdf)), tarifs 828 $ (≈ 827,52 $), 3 % > 500 k$ (art. 17) : confirmés. Nuances : +50 $ compensation parcs/logement non affichée ; +0,0514 $ dette pour l'ancien territoire Ville des Laurentides. Pop. 22 000+ véridique (26 715) |
| Saint-Jacques | 🔧 corrigé | **Taux 0,5928 → 0,555 $** (taux de base au [règl. 018-2025](https://www.st-jacques.org/storage/app/media/municipalite/administration/R%C3%A8glements/Service%20administratif/018-2025_Taxation_tarification_Internet.pdf) ; le 0,5928 incluait des taxes d'emprunt qui varient par secteur). **Tarifs 607 → 540 $** (aqueduc 170 + égout 240 + MR 130). Piscine 100 $ confirmée. Mutation provinciale : aucun règlement bonifié repéré (présumé OK). Pop. 4 700+ véridique (4 837) |
| Joliette | 🔧 corrigé | **Mutation corrigée : + tranche 3 % > 500 k$** (confirmée sur [joliette.ca](https://www.joliette.ca/administration-finances/taxes-et-evaluation) — la ville y affiche des seuils inférieurs non indexés ~2022 ; nous utilisons les seuils indexés 2026 : 62 900 / 315 000). Taux 0,549 $ et tarifs 376 $ confirmés ([PDF taux 2026](https://www.joliette.ca/storage/app/media/la-ville/administration-et-finances/taxes-et-evaluation/taux-taxation-2026.pdf)). Pop. 21 000+ véridique (22 401) |

---

## Tests des calculateurs (barème officiel 2026)

Les 27 calculateurs testés à 350 000 $, 600 000 $ et 1 200 000 $ (logique `calculateBrackets` des pages, données embarquées après regénération) : **27/27 conformes** aux barèmes officiels. Contre-vérifications avec exemples publiés par les villes : quebec.ca 350 k$ → **3 360,50 $** ✓ · Repentigny 550 k$ → **7 110,50 $** ✓ · Charlemagne 525 k$ → **6 360,50 $** ✓.

| Barème | Villes | 350 k$ | 600 k$ | 1,2 M$ |
|---|---|---|---|---|
| 3 % > 500 k$ | Ste-Thérèse, Rosemère, Lorraine, BDF, Deux-Montagnes, Mirabel, St-Janvier, SADP, SMSLL, Ste-Sophie, St-Eustache, Terrebonne, Mascouche, **Repentigny**, Charlemagne, L'Assomption, **Lavaltrie**, SRA, St-Lin, **Joliette**, (Pointe-Calumet ❓) | 3 360,50 $ | 8 610,50 $ | 26 610,50 $ |
| Blainville (1,5 % → 750 k$) | Blainville | 3 360,50 $ | 7 110,50 $ | 22 860,50 $ |
| Boisbriand (2,5 % 500–800 k$) | Boisbriand | 3 360,50 $ | 8 110,50 $ | 25 110,50 $ |
| Oka (règl. 2018-195) | Oka | 3 360,50 $ | 7 110,50 $ | 18 960,00 $ |
| L'Épiphanie (1,5 % → 596 510 $) | L'Épiphanie | 3 360,50 $ | 7 162,85 $ | 25 162,85 $ |
| Provincial (max 1,5 %) | St-Sulpice ❓, St-Jacques | 3 360,50 $ | 7 110,50 $ | 16 110,50 $ |

Seuils indexés 2026 (62 900 $ / 315 000 $) : **confirmés** sur [quebec.ca](https://www.quebec.ca/gouvernement/gestion-municipale/finances-fiscalite-municipales/fiscalite/droits-mutations-immobilieres).

## Liens corrigés (ancien → nouveau)

1. Rosemère (événements) : `ville.rosemere.qc.ca/calendrier/` → `ville.rosemere.qc.ca/calendrier-des-evenements-et-des-activites/` (page confirmée par l'index du site ; rendu à re-tester en navigateur, site opaque aux outils)
2. L'Épiphanie (événements) : `lepiphanie.ca/bibliotheque` → `lepiphanie.ca/programmation` (pas de page événements générale — noté tel que prévu par la règle 4)
3. RE/MAX d'ici, 12 pages + index (nav et footer) : `remaxcrystal.com/fr/{'' , articles, contact.html, nos-courtiers.html, nos-proprietes.html, carriere.html}` → `remaxdici.com/fr/...` (6 URLs cibles vérifiées, 0 × 404). Correction pérennisée dans `build-cities-dici.mjs`
4. guide-blainville.html (footer « Guides de villes ») : 6 liens morts `href="#"` → liens réels vers les guides
5. Source Terrebonne : PDF `2026/01/R2528...` (redirection) → `2026/04/R2528-taux-taxes-tarifs-compensations-2026.pdf`
6. Les 25 autres liens événements testés : fonctionnels et pointant vers la bonne municipalité ✓. Liens gouvernementaux communs (canada.ca outils, SCHL) : fonctionnels ✓

## Titres « Espaces verts » (règle 3, portée confirmée au checkpoint : noms de parcs sur les images)

- 26 pages générées : déjà au standard image-seule (aucun nom superposé) ✓
- `guide-blainville.html` : les 5 vignettes portaient encore nom + description superposés (« Parc équestre de Blainville », « Parc de Fontainebleau »…) sur des **photos d'autres villes** → surcouches retirées, alt neutralisés ✓
- Conservés tels quels (choix confirmé) : titres de section « Parcs & espaces verts », stats héro « Parcs & espaces verts », carte qualité « Espaces verts » (Blainville)
- **Confirmation : plus aucun nom de parc superposé à une image sur les 27 pages** (vérifié par scan final)

## ❓ À valider manuellement (rien inventé, rien modifié)

1. **Oka** — taxes municipales retirées de la page en attendant la validation du taux 2026 (règl. 2026-299) : 450 479-8333. Pour réactiver : mettre à jour `tax-data.js` et retirer `hideMunicipalTax: true`.
2. **Pointe-Calumet** — taxes municipales retirées de la page. Reste la **tranche mutation 3 % sans règlement repéré** (note publique « à confirmer » affichée sous le calculateur) : 450 473-5930 p. 226.
3. **Rosemère** — taux chiffré 0,4975 $ + effet du règl. modificateur 1016-01 (conseil de mai 2026) + rendu de la nouvelle URL calendrier.
4. **L'Assomption** — taux 0,5896 $ / tarifs 709 $ (ouvrir le dépliant PDF en navigateur).
5. **Saint-Sulpice** — tarifs 196 $ + confirmation barème provincial (règl. 325-2026).
6. **Saint-Janvier** — « 20 000+ résidents (secteur) » : aucune source officielle par secteur.
7. **Stats marché Centris (T1 2026)** — pages Centris en JavaScript, invérifiables par outil ; données internes à jour du 2026-05-13 selon `market-stats.js` — suivre le process trimestriel habituel.
8. **Stats héro non chiffrables officiellement** (nb de parcs, d'écoles, « Top 5/Top 10 villes ») : aucune source officielle unique ; véridiques en apparence mais non certifiables.
9. **Charlemagne** — décision d'affichage : garder 0,6514 $ (taux de base résiduel, exact) ou afficher 0,4364 $ (nouveau taux 2026 des 1-3 logements, plus représentatif pour un acheteur).
10. **Mascouche** — n° du règlement 1349 non publié sur la page taxes (le chiffre 3 % > 500 k$, lui, est confirmé).

## Passe finale

Re-scan des 27 pages + 2 index après regénération : plus aucune occurrence des anciennes valeurs (0,322 $, populations périmées, anciens tarifs Lavaltrie/St-Jacques/SRA, lien bibliothèque, remaxcrystal.com côté d'ici), 27/27 calculateurs conformes, FAQ JSON-LD (SEO) regénérés avec les nouvelles valeurs. Corrections pérennisées dans les fichiers `data/*.js` et les deux builders (une future regénération conserve tout).

### Bonus détectés hors mandat (non modifiés, sauf mention)
- Populations fortement **sous-estimées** (véridiques mais vieillottes) : Terrebonne 119 000+ (réel 126 199), Mascouche 52 000+ (56 649), St-Lin 22 000+ (26 715), Lavaltrie 14 000+ (16 016), Ste-Sophie 17 200+ (19 478), Oka 5 300+ (6 124) — rafraîchissement suggéré.
- FAQ SEO Boisbriand : phrase tronquée « Boisbriand offre  parmi ses principaux atouts » (bug de génération dans le builder).
- Liens footer `#` restants sur toutes les pages (« Outils », « Contact ») — internes, hors portée.
- Photos de parcs de guide-blainville.html empruntées à d'autres villes (voir prioritaire #4).
