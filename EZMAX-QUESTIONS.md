# Questions pour eZmax — API RemaxQC
**À envoyer à : support-api@ezmax.ca**

---

## 1. Ventes notariées

Est-ce qu'il existe un endpoint ou un rapport accessible via l'API qui expose le nombre de ventes notariées par agence pour une période donnée (ex. : YTD 2026) ?

Si oui :
- Quel est le chemin de l'endpoint ou l'ID du groupe de rapport (`sReportgroupCacheID`) ?
- Quels filtres sont disponibles (par agent, par bureau, par période) ?

Si non : est-ce une route prévue dans les prochaines phases d'ouverture de l'API ?

---

## 2. Transactions / contrats

Est-ce qu'on peut accéder aux données de transactions (offres d'achat, closing dates, prix de vente) via l'API pour le profil RemaxQC ?

---

## 3. Commissions

Est-ce qu'il y a un endpoint qui expose les commissions (brutes, nettes, par agent, par bureau) ?

---

## 4. Rapports disponibles

Quelle est la liste des rapports accessibles via `GET /1/module/report/getReportFromCache/{sReportgroupCacheID}` pour le profil RemaxQC ?

Peut-on avoir la liste des `sReportgroupCacheID` disponibles et ce qu'ils contiennent ?

Nous avons identifié la permission `FinancialsReports_ARReport` dans la spec API — est-ce que le rapport **"Comptes à recevoir vs Rétributions à recevoir"** est accessible via cette route ? Si oui, quel est son `sReportgroupCacheID` ?

---

## 5. Routes à venir

Quelles sont les routes prévues dans les prochaines phases d'ouverture ? Y a-t-il une roadmap ou une liste d'objets API en développement ?

---

## 6. Programme programmeurs autorisés

Si on veut obtenir du soutien technique pour l'intégration (pas seulement la doc), le programme à 500 $/an — est-ce qu'il donne accès à des routes supplémentaires ou c'est uniquement du support humain ?

---

*Contexte : nous développons des dashboards de performance (ventes, trésorerie, agents) pour un bureau RE/MAX client. Nous voulons valider quelles données sont accessibles avant de débuter le développement.*
