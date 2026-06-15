# Mise à jour automatique des événements — Instructions agent

Tâche : mettre à jour `data/events.js` avec les événements à venir
de chaque ville, à partir des calendriers municipaux officiels.

## Procédure

1. Pour chaque ville du tableau ci-dessous, visiter la page d'événements.
   Si l'URL ne répond pas (404, redirection), faire une recherche web
   « calendrier événements ville de <nom> » et utiliser la page officielle.
2. Extraire les événements **à venir dans les 6 prochains mois** (max 8 par ville) :
   titre, date(s), catégorie courte (Festival / Culture / Sport / Marché /
   Communauté / Vie municipale / Histoire / Fêtes), description en 1-2 phrases
   en français, URL de la page.
3. Réécrire le bloc `cities` de `data/events.js` en respectant exactement
   le schéma documenté en tête du fichier :
   - `day` : jour affiché (ex. "13") — pour un événement sur une période,
     utiliser le dernier jour et préciser la période dans `desc`
   - `month` : abrégé FR — Jan, Fév, Mars, Avr, Mai, Juin, Juil, Août, Sept, Oct, Nov, Déc
   - `sortDate` / `expires` : ISO (AAAA-MM-JJ). `expires` = dernier jour de
     l'événement. Les événements expirés sont filtrés automatiquement au rendu.
4. Mettre à jour `meta.updated` avec la date du jour.
5. Valider que le fichier reste du JavaScript valide (`node --check data/events.js`).
6. Ne PAS toucher aux autres fichiers. Si une ville n'a aucun événement
   trouvable, laisser son tableau tel quel (ne pas le vider s'il contient
   des événements encore valides).

## Sources par ville

| Slug              | Ville                      | Page événements (point de départ) |
|-------------------|----------------------------|------------------------------------|
| blainville        | Blainville                 | https://blainville.ca/evenements/ |
| stetherese        | Sainte-Thérèse             | https://www.sainte-therese.ca/evenements |
| boisbriand        | Boisbriand                 | https://www.ville.boisbriand.qc.ca (chercher « calendrier ») |
| boisdesfillions   | Bois-des-Filion            | https://ville.bois-des-filion.qc.ca |
| deuxmontagnes     | Deux-Montagnes             | https://www.ville.deux-montagnes.qc.ca |
| lorraine          | Lorraine                   | https://www.ville.lorraine.qc.ca |
| mirabel           | Mirabel                    | https://www.mirabel.ca |
| stjanvier         | Saint-Janvier (Mirabel)    | même source que Mirabel, secteur Saint-Janvier |
| oka               | Oka                        | https://municipalite.oka.qc.ca |
| pointecalumet     | Pointe-Calumet             | https://pointe-calumet.ca |
| rosemere          | Rosemère                   | https://www.ville.rosemere.qc.ca |
| steannedesplaines | Sainte-Anne-des-Plaines    | https://www.villesadp.ca |
| stemarthe         | Sainte-Marthe-sur-le-Lac   | https://www.municipalite.sainte-marthe-sur-le-lac.qc.ca |
| stesophie         | Sainte-Sophie              | https://stesophie.ca |
| steustache        | Saint-Eustache             | https://www.saint-eustache.ca |

> Vérifier/corriger ces URLs au premier passage et mettre ce tableau à jour
> si une meilleure source est trouvée (page calendrier directe).

## Intégration dans les pages

Une page affiche les événements d'une ville dès que sa liste porte
l'attribut `data-events-city` et charge les deux scripts :

```html
<div class="events-list" data-events-city="blainville">
  <!-- contenu statique de secours, remplacé automatiquement -->
</div>
...
<script src="data/events.js"></script>
<script src="data/events-render.js"></script>
```
