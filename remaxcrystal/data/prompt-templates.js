/* ============================================================
   PROMPT TEMPLATES — Modèles du Guide de prompting IA
   Utilisé par outil-prompt.html (via data/prompt-engine.js)

   ➕ AJOUTER UN MODÈLE : copiez un bloc complet { ... } ci-dessous,
   collez-le à la fin de la liste, changez son "id" et remplissez
   les champs. Aucun autre fichier à modifier.
   Guide détaillé : docs/AJOUTER-UN-MODELE.md
   ============================================================ */

(function (root) {
  'use strict';

  var PROMPT_TEMPLATES = [

    /* ──────────────────────────────────────────────
       1. ANNONCE DE VENTE RÉSIDENTIELLE
       ────────────────────────────────────────────── */
    {
      id: 'annonce-vente-residentielle',
      categorie: 'annonce',
      titre: 'Annonce immobilière',
      description: 'Rédiger une annonce accrocheuse pour une nouvelle inscription',
      icone: 'maison',
      outils: ['chatgpt', 'claude', 'gemini', 'perplexity', 'autre'],
      questions: [
        {
          id: 'type_propriete',
          label: 'Quel type de propriété mettez-vous en vente?',
          type: 'choix',
          options: ['Maison unifamiliale', 'Condo', 'Plex (2 à 5 logements)', 'Maison de ville', 'Terrain'],
          obligatoire: true,
          poidsScore: 14,
          aide: 'Le type de propriété change complètement le ton et les arguments de l’annonce.'
        },
        {
          id: 'quartier_ville',
          label: 'Dans quelle ville ou quel quartier se trouve la propriété?',
          type: 'texte',
          obligatoire: false,
          poidsScore: 12,
          placeholder: 'Ex. : Blainville, secteur Fontainebleau'
        },
        {
          id: 'caracteristiques',
          label: 'Combien de chambres et de salles de bain?',
          type: 'texte',
          obligatoire: false,
          poidsScore: 10,
          placeholder: 'Ex. : 3 chambres, 2 salles de bain, garage double'
        },
        {
          id: 'points_forts',
          label: 'Nommez 2 ou 3 points forts de la propriété',
          type: 'texte_long',
          obligatoire: false,
          poidsScore: 20,
          placeholder: 'Ex. : cour arrière intime, cuisine rénovée en 2024, à 5 minutes du train de banlieue',
          aide: 'Plus vous êtes précis, plus l’annonce sera vendeuse.'
        },
        {
          id: 'public_cible',
          label: 'Quel type de besoin ou de mode de vie cette propriété sert-elle bien?',
          type: 'choix',
          options: ['Premier achat', 'Recherche d’espace et de cour', 'Mode de vie pratique et sans entretien', 'Projet avec revenu locatif ou multigénérationnel', 'Investissement', 'Je préfère rester large'],
          obligatoire: true,
          poidsScore: 10
        },
        {
          id: 'ton',
          label: 'Quel ton souhaitez-vous pour l’annonce?',
          type: 'choix',
          options: ['Chaleureux et familial', 'Professionnel et sobre', 'Haut de gamme', 'Dynamique'],
          obligatoire: true,
          poidsScore: 8
        },
        {
          id: 'longueur',
          label: 'Quelle longueur préférez-vous?',
          type: 'choix',
          options: ['Courte (environ 100 mots)', 'Moyenne (environ 200 mots)', 'Détaillée (300 mots et plus)'],
          obligatoire: true,
          poidsScore: 6
        }
      ],
      clarifications: [
        {
          questionId: 'renovations_recentes',
          label: 'Y a-t-il eu des rénovations ou des améliorations récentes?',
          type: 'texte',
          poidsScore: 8,
          placeholder: 'Ex. : toiture 2023, thermopompe murale, salle de bain refaite'
        },
        {
          questionId: 'proximite',
          label: 'Qu’est-ce qui se trouve à distance de marche? (école, parc, commerces, transport)',
          type: 'texte',
          poidsScore: 7,
          placeholder: 'Ex. : école primaire, parc, gare de train de banlieue'
        },
        {
          questionId: 'inclusions',
          label: 'Y a-t-il des inclusions qui valent la peine d’être mentionnées?',
          type: 'texte',
          poidsScore: 5,
          placeholder: 'Ex. : électroménagers, spa, cabanon'
        }
      ],
      template: 'Tu es un rédacteur immobilier d’expérience au Québec. Tu écris en français québécois naturel, sans clichés ni superlatifs exagérés.\n\nContexte : je suis courtier immobilier et je mets en vente une propriété de type {{type_propriete}}{{#si quartier_ville}}, située à {{quartier_ville}}{{/si}}.{{#si caracteristiques}} Caractéristiques principales : {{caracteristiques}}.{{/si}}{{#si points_forts}} Points forts à mettre en valeur : {{points_forts}}.{{/si}}{{#si renovations_recentes}} Rénovations et améliorations récentes : {{renovations_recentes}}.{{/si}}{{#si proximite}} À proximité : {{proximite}}.{{/si}}{{#si inclusions}} Inclusions : {{inclusions}}.{{/si}}\n\nTâche : rédige une annonce immobilière de longueur {{longueur}}, avec un ton {{ton}}, pensée pour rejoindre ce besoin ou ce mode de vie : {{public_cible}}.\n\nContraintes : aucune mention discriminatoire (famille idéale, type de voisinage, âge, origine, etc.), aucune affirmation invérifiable (« la plus belle rue »), pas de point d’exclamation à répétition. Mets les points forts concrets en avant plutôt que des généralités.',
      formatSortie: 'Un titre accrocheur (maximum 10 mots), puis le texte de l’annonce en 2 ou 3 paragraphes courts.',
      exempleSortie: 'Titre : « Plain-pied rénové à deux pas de la gare » suivi de 2 paragraphes qui décrivent la propriété.',
      explication: [
        'Le prompt donne un rôle précis à l’IA (rédacteur immobilier québécois), ce qui améliore immédiatement la qualité du texte.',
        'Vos points forts concrets guident l’IA vers ce qui vend vraiment la propriété, au lieu de généralités.',
        'Le ton, la longueur et le profil d’acheteur cadrent le résultat : moins de retouches à faire ensuite.'
      ],
      conseils: [
        'Relisez toujours l’annonce avant de la publier : l’IA ne connaît pas les règles de l’OACIQ ni les particularités de votre inscription.',
        'Demandez 2 ou 3 variantes en ajoutant « Propose-moi 3 versions différentes » à la fin.'
      ]
    },

    /* ──────────────────────────────────────────────
       2. COURRIEL DE SUIVI APRÈS VISITE
       ────────────────────────────────────────────── */
    {
      id: 'courriel-suivi-acheteur',
      categorie: 'courriel',
      titre: 'Courriel de suivi',
      description: 'Relancer un acheteur après une visite, sans avoir l’air insistant',
      icone: 'courriel',
      outils: ['chatgpt', 'claude', 'gemini', 'perplexity', 'autre'],
      questions: [
        {
          id: 'prenom_client',
          label: 'Quel est le prénom du client?',
          type: 'texte',
          obligatoire: false,
          poidsScore: 8,
          placeholder: 'Ex. : Marie-Ève'
        },
        {
          id: 'propriete_visitee',
          label: 'Quelle propriété a été visitée?',
          type: 'texte',
          obligatoire: false,
          poidsScore: 12,
          placeholder: 'Ex. : le condo 4 1/2 sur la rue Turgeon à Sainte-Thérèse'
        },
        {
          id: 'reaction',
          label: 'Comment le client a-t-il réagi pendant la visite?',
          type: 'choix',
          options: ['Très intéressé', 'Intéressé mais hésitant', 'Tiède', 'Difficile à lire'],
          obligatoire: true,
          poidsScore: 14,
          aide: 'La réaction du client change complètement l’angle du courriel.'
        },
        {
          id: 'points_apprecies',
          label: 'Qu’est-ce que le client a semblé apprécier ou moins aimer?',
          type: 'texte_long',
          obligatoire: false,
          poidsScore: 18,
          placeholder: 'Ex. : a adoré la cour et la luminosité, trouvait la cuisine un peu datée'
        },
        {
          id: 'objectif_courriel',
          label: 'Quel est l’objectif de ce courriel?',
          type: 'choix',
          options: ['Obtenir une réponse rapide', 'Proposer une deuxième visite', 'Présenter d’autres propriétés', 'Simplement garder le contact'],
          obligatoire: true,
          poidsScore: 14
        },
        {
          id: 'delai',
          label: 'Combien de temps s’est écoulé depuis la visite?',
          type: 'choix',
          options: ['Moins de 24 heures', '2 ou 3 jours', 'Une semaine ou plus'],
          obligatoire: true,
          poidsScore: 6
        },
        {
          id: 'ton',
          label: 'Quel ton voulez-vous donner au courriel?',
          type: 'choix',
          options: ['Amical', 'Professionnel', 'Un mélange des deux'],
          obligatoire: true,
          poidsScore: 8
        }
      ],
      clarifications: [
        {
          questionId: 'objection',
          label: 'Le client a-t-il exprimé une hésitation ou une objection précise?',
          type: 'texte',
          poidsScore: 8,
          placeholder: 'Ex. : trouvait le prix un peu élevé pour le secteur'
        },
        {
          questionId: 'autres_proprietes',
          label: 'Avez-vous une ou deux autres propriétés en tête à lui proposer?',
          type: 'texte',
          poidsScore: 7,
          placeholder: 'Ex. : un plain-pied semblable à Rosemère, un peu moins cher'
        },
        {
          questionId: 'urgence',
          label: 'Y a-t-il un élément de contexte à mentionner? (autres visites prévues, offre attendue...)',
          type: 'texte',
          poidsScore: 5,
          placeholder: 'Ex. : deux autres visites sont prévues cette semaine'
        }
      ],
      template: 'Tu es un courtier immobilier québécois reconnu pour ses suivis clients efficaces et humains. Tu écris des courriels courts qui obtiennent des réponses.\n\nContexte : {{#si prenom_client}}mon client se prénomme {{prenom_client}}. {{/si}}Cette personne a visité {{#si propriete_visitee}}{{propriete_visitee}}{{/si}}{{#non propriete_visitee}}une propriété avec moi{{/non}} il y a {{delai}}. Sa réaction pendant la visite : {{reaction}}.{{#si points_apprecies}} Ce que j’ai observé : {{points_apprecies}}.{{/si}}{{#si objection}} Hésitation exprimée : {{objection}}.{{/si}}{{#si autres_proprietes}} Autres propriétés que je pourrais lui proposer : {{autres_proprietes}}.{{/si}}{{#si urgence}} Contexte à savoir : {{urgence}}.{{/si}}\n\nTâche : rédige un courriel de suivi dont l’objectif est : {{objectif_courriel}}. Ton souhaité : {{ton}}. Le courriel doit faire moins de 150 mots, se terminer par une question simple qui invite à répondre, et ne jamais mettre de pression.\n\nContraintes : pas de formules creuses (« j’espère que ce courriel vous trouve bien »), pas de ton vendeur insistant, vouvoiement.',
      formatSortie: 'Un objet de courriel court (maximum 8 mots), puis le corps du courriel prêt à envoyer.',
      exempleSortie: 'Objet : « Vos impressions sur la rue Turgeon? » suivi d’un courriel de 4 à 6 phrases.',
      explication: [
        'La réaction observée du client permet à l’IA d’adapter l’angle : on ne relance pas un client hésitant comme un client conquis.',
        'La limite de 150 mots et la question finale forcent un courriel qui se lit vite et appelle une réponse.',
        'Les contraintes éliminent les formules génériques qui font « courriel automatique ».'
      ],
      conseils: [
        'Personnalisez toujours la première phrase avec un détail réel de la visite : c’est ce qui fait la différence.',
        'Si le courriel semble trop long, demandez « Raccourcis-le de moitié » : le résultat est souvent meilleur.'
      ]
    },

    /* ──────────────────────────────────────────────
       3. SCRIPT VIDÉO DE VISITE GUIDÉE
       ────────────────────────────────────────────── */
    {
      id: 'script-video-visite',
      categorie: 'video',
      titre: 'Script vidéo',
      description: 'Écrire un script de visite guidée pour Reels, TikTok ou YouTube',
      icone: 'video',
      outils: ['chatgpt', 'claude', 'gemini', 'perplexity', 'autre'],
      questions: [
        {
          id: 'plateforme',
          label: 'Sur quelle plateforme la vidéo sera-t-elle publiée?',
          type: 'choix',
          options: ['Instagram Reels', 'TikTok', 'YouTube', 'Facebook'],
          obligatoire: true,
          poidsScore: 12,
          aide: 'Chaque plateforme a son rythme : TikTok démarre plus vite, YouTube laisse plus de place.'
        },
        {
          id: 'duree',
          label: 'Quelle durée visez-vous?',
          type: 'choix',
          options: ['Environ 30 secondes', 'Environ 60 secondes', '90 secondes et plus'],
          obligatoire: true,
          poidsScore: 10
        },
        {
          id: 'propriete',
          label: 'Décrivez la propriété en une phrase',
          type: 'texte',
          obligatoire: false,
          poidsScore: 12,
          placeholder: 'Ex. : cottage 4 chambres avec piscine creusée à Rosemère, 649 000 $'
        },
        {
          id: 'moments_forts',
          label: 'Quels sont les 2 ou 3 moments « wow » à montrer dans la vidéo?',
          type: 'texte_long',
          obligatoire: false,
          poidsScore: 20,
          placeholder: 'Ex. : l’entrée avec plafond cathédrale, la cuisine avec îlot de 10 pieds, la cour avec piscine'
        },
        {
          id: 'style',
          label: 'Quel style de vidéo vous ressemble?',
          type: 'choix',
          options: ['Énergique', 'Calme et élégant', 'Informatif', 'Avec une touche d’humour'],
          obligatoire: true,
          poidsScore: 10
        },
        {
          id: 'appel_action',
          label: 'Que voulez-vous que les gens fassent à la fin?',
          type: 'choix',
          options: ['Réserver une visite', 'M’écrire en privé', 'Visiter mon site web', 'S’abonner à mon compte'],
          obligatoire: true,
          poidsScore: 10
        },
        {
          id: 'presence_camera',
          label: 'Comment serez-vous présent dans la vidéo?',
          type: 'choix',
          options: ['Je parle face à la caméra', 'Voix hors champ sur des images', 'Texte à l’écran seulement'],
          obligatoire: true,
          poidsScore: 6
        }
      ],
      clarifications: [
        {
          questionId: 'quartier',
          label: 'Dans quel quartier ou quelle ville se trouve la propriété?',
          type: 'texte',
          poidsScore: 8,
          placeholder: 'Ex. : Lorraine, secteur des Chênes'
        },
        {
          questionId: 'prix_affiche',
          label: 'Voulez-vous mentionner le prix dans la vidéo? Si oui, lequel?',
          type: 'texte',
          poidsScore: 6,
          placeholder: 'Ex. : oui, 649 000 $ — ou non, pas de prix'
        },
        {
          questionId: 'public',
          label: 'À qui s’adresse surtout cette vidéo?',
          type: 'texte',
          poidsScore: 6,
          placeholder: 'Ex. : jeunes familles qui quittent Montréal pour la Rive-Nord'
        }
      ],
      template: 'Tu es un scénariste spécialisé en vidéos immobilières courtes pour les réseaux sociaux au Québec. Tu connais les codes de {{plateforme}} : accroche dans les 3 premières secondes, phrases courtes, rythme soutenu.\n\nContexte : je suis courtier immobilier et je tourne une vidéo de visite guidée.{{#si propriete}} La propriété : {{propriete}}.{{/si}}{{#si quartier}} Elle se trouve à {{quartier}}.{{/si}}{{#si moments_forts}} Les moments forts à montrer : {{moments_forts}}.{{/si}}{{#si prix_affiche}} Au sujet du prix : {{prix_affiche}}.{{/si}}{{#si public}} Public visé : {{public}}.{{/si}} Format de présence : {{presence_camera}}.\n\nTâche : écris un script de vidéo d’une durée de {{duree}}, dans un style {{style}}, qui se termine par cet appel à l’action : {{appel_action}}.\n\nContraintes : une accroche forte dans les 3 premières secondes (jamais « bienvenue dans cette magnifique propriété »), du français québécois parlé et naturel, des phrases qu’on peut dire à voix haute sans s’essouffler.',
      formatSortie: 'Un tableau simple : pour chaque segment, le moment (0-3 s, 3-10 s, etc.), ce qu’on voit à l’écran, et le texte à dire ou à afficher.',
      exempleSortie: '« 0-3 s — Plan de la façade — "Trois détails qui changent complètement l’impression qu’on a de cette propriété." »',
      explication: [
        'Préciser la plateforme et la durée force un script au bon rythme, au lieu d’un texte générique à découper.',
        'Vos moments « wow » deviennent la colonne vertébrale de la vidéo : l’IA construit le récit autour d’eux.',
        'L’interdiction des accroches clichées donne des ouvertures qui arrêtent le défilement.'
      ],
      conseils: [
        'Lisez le script à voix haute une fois avant de tourner : coupez tout ce qui ne se dit pas naturellement.',
        'Demandez ensuite « Propose-moi 3 accroches différentes pour les 3 premières secondes » et choisissez la meilleure.'
      ]
    },

    /* ──────────────────────────────────────────────
       4. POST NOUVELLE INSCRIPTION (RÉSEAUX SOCIAUX)
       ────────────────────────────────────────────── */
    {
      id: 'post-nouvelle-inscription',
      categorie: 'reseaux',
      titre: 'Post réseaux sociaux',
      description: 'Annoncer une nouvelle inscription sur Facebook ou Instagram',
      icone: 'reseaux',
      outils: ['chatgpt', 'claude', 'gemini', 'perplexity', 'autre'],
      questions: [
        {
          id: 'plateforme',
          label: 'Où le post sera-t-il publié?',
          type: 'choix',
          options: ['Facebook', 'Instagram', 'LinkedIn', 'Facebook et Instagram'],
          obligatoire: true,
          poidsScore: 10
        },
        {
          id: 'propriete',
          label: 'Décrivez la propriété en une phrase',
          type: 'texte',
          obligatoire: false,
          poidsScore: 12,
          placeholder: 'Ex. : jumelé 3 chambres avec garage à Saint-Eustache'
        },
        {
          id: 'prix',
          label: 'Souhaitez-vous afficher le prix dans le post? Si oui, indiquez-le.',
          type: 'texte',
          obligatoire: true,
          poidsScore: 8,
          placeholder: 'Ex. : oui, 649 000 $ — ou non, garder le prix pour les curieux'
        },
        {
          id: 'points_forts',
          label: 'Nommez 2 ou 3 éléments qui vont accrocher l’œil',
          type: 'texte_long',
          obligatoire: false,
          poidsScore: 20,
          placeholder: 'Ex. : cour sans voisins arrière, sous-sol aménagé, 5 minutes de l’autoroute 640'
        },
        {
          id: 'public_cible',
          label: 'Quel type de besoin ou de mode de vie voulez-vous rejoindre avec ce post?',
          type: 'choix',
          options: ['Premier achat', 'Recherche d’espace et de cour', 'Mode de vie pratique et sans entretien', 'Investissement', 'Audience locale large'],
          obligatoire: true,
          poidsScore: 10
        },
        {
          id: 'emojis',
          label: 'Aimez-vous les émojis dans vos publications?',
          type: 'choix',
          options: ['Oui, quelques-uns bien placés', 'Non, je préfère un style sobre'],
          obligatoire: true,
          poidsScore: 6
        },
        {
          id: 'objectif',
          label: 'Quel est l’objectif principal de ce post?',
          type: 'choix',
          options: ['Générer des demandes de visite', 'Faire connaître l’inscription rapidement', 'Montrer mon expertise du secteur'],
          obligatoire: true,
          poidsScore: 14
        }
      ],
      clarifications: [
        {
          questionId: 'quartier',
          label: 'Dans quel quartier ou quelle ville se trouve la propriété?',
          type: 'texte',
          poidsScore: 8,
          placeholder: 'Ex. : Deux-Montagnes, près de la gare'
        },
        {
          questionId: 'visite_libre',
          label: 'Y a-t-il une visite libre prévue? Si oui, quand?',
          type: 'texte',
          poidsScore: 7,
          placeholder: 'Ex. : dimanche de 14 h à 16 h'
        },
        {
          questionId: 'histoire',
          label: 'Y a-t-il une petite histoire derrière cette propriété? (première inscription, vendeur attachant...)',
          type: 'texte',
          poidsScore: 5,
          placeholder: 'Ex. : la même famille y habite depuis 32 ans'
        }
      ],
      template: 'Tu es un spécialiste des réseaux sociaux pour courtiers immobiliers au Québec. Tu écris des posts qui génèrent des commentaires et des messages privés, pas juste des « j’aime ».\n\nContexte : je publie une nouvelle inscription sur {{plateforme}}.{{#si propriete}} La propriété : {{propriete}}.{{/si}}{{#si quartier}} Emplacement : {{quartier}}.{{/si}}{{#si points_forts}} Éléments accrocheurs : {{points_forts}}.{{/si}} Affichage du prix : {{prix}}.{{#si visite_libre}} Visite libre : {{visite_libre}}.{{/si}}{{#si histoire}} Détail humain à exploiter : {{histoire}}.{{/si}}\n\nTâche : rédige le texte du post pour rejoindre ce besoin ou ce mode de vie : {{public_cible}}. Objectif : {{objectif}}. Style d’émojis : {{emojis}}.\n\nContraintes : la première ligne doit donner envie de cliquer sur « voir plus », maximum 120 mots, terminer par une invitation claire à passer à l’action (commenter, écrire en privé ou réserver une visite), français québécois naturel. Décris un usage, un rythme de vie ou un avantage concret, jamais une catégorie protégée. Pas de « NOUVELLE INSCRIPTION!!! » en majuscules.',
      formatSortie: 'Le texte du post prêt à copier, puis une ligne séparée avec 4 ou 5 mots-clics pertinents.',
      exempleSortie: 'Un post de 4 à 6 lignes qui commence par une phrase intrigante, suivi de « #immobilier #rivenord... ».',
      explication: [
        'La première ligne est traitée comme une accroche : c’est elle qui décide si les gens lisent la suite.',
        'L’objectif du post (visites, notoriété, expertise) change l’appel à l’action final.',
        'La limite de 120 mots respecte la réalité des réseaux : les posts courts performent mieux.'
      ],
      conseils: [
        'Publiez avec vos meilleures photos : le texte accroche, mais c’est l’image qui arrête le pouce.',
        'Répondez vite aux premiers commentaires : ça augmente la portée du post.'
      ]
    },

    /* ──────────────────────────────────────────────
       5. PRÉPARATION DE NÉGOCIATION D'OFFRE
       ────────────────────────────────────────────── */
    {
      id: 'preparation-negociation-offre',
      categorie: 'negociation',
      titre: 'Préparation de négociation',
      description: 'Bâtir un argumentaire et des scénarios de contre-offre',
      icone: 'negociation',
      outils: ['chatgpt', 'claude', 'gemini', 'perplexity', 'autre'],
      questions: [
        {
          id: 'role',
          label: 'Dans cette négociation, vous représentez...',
          type: 'choix',
          options: ['Le vendeur', 'L’acheteur'],
          obligatoire: true,
          poidsScore: 14,
          aide: 'Toute la stratégie change selon le côté de la table où vous êtes.'
        },
        {
          id: 'ecart',
          label: 'Quel est l’écart entre le prix demandé et l’offre sur la table?',
          type: 'texte',
          obligatoire: true,
          poidsScore: 12,
          placeholder: 'Ex. : prix demandé 549 000 $, offre reçue à 520 000 $'
        },
        {
          id: 'conditions',
          label: 'Quelles sont les conditions de l’offre? (inspection, financement, date d’occupation...)',
          type: 'texte_long',
          obligatoire: true,
          poidsScore: 16,
          placeholder: 'Ex. : conditionnelle à l’inspection et au financement, occupation souhaitée le 1er septembre'
        },
        {
          id: 'contexte_marche',
          label: 'Comment décririez-vous le marché actuel dans ce secteur?',
          type: 'choix',
          options: ['Marché de vendeurs (ça part vite)', 'Marché équilibré', 'Marché d’acheteurs (ça prend du temps)', 'Je ne suis pas certain'],
          obligatoire: true,
          poidsScore: 12
        },
        {
          id: 'motivation',
          label: 'Que savez-vous de la motivation de l’autre partie?',
          type: 'texte_long',
          obligatoire: false,
          poidsScore: 16,
          placeholder: 'Ex. : les vendeurs ont déjà acheté ailleurs, ils sont pressés de conclure'
        },
        {
          id: 'limite',
          label: 'Quelle est la limite ou la priorité de votre client?',
          type: 'texte',
          obligatoire: true,
          poidsScore: 10,
          placeholder: 'Ex. : ne veut pas descendre sous 535 000 $, mais flexible sur la date'
        }
      ],
      clarifications: [
        {
          questionId: 'comparables',
          label: 'Avez-vous des ventes comparables récentes en tête?',
          type: 'texte',
          poidsScore: 8,
          placeholder: 'Ex. : deux maisons semblables vendues 540 000 $ et 552 000 $ dans les 3 derniers mois'
        },
        {
          questionId: 'echeance',
          label: 'Y a-t-il une contrainte de temps d’un côté ou de l’autre?',
          type: 'texte',
          poidsScore: 7,
          placeholder: 'Ex. : l’offre expire vendredi 17 h'
        },
        {
          questionId: 'historique',
          label: 'Y a-t-il déjà eu des offres ou des contre-offres sur cette propriété?',
          type: 'texte',
          poidsScore: 5,
          placeholder: 'Ex. : une première offre à 510 000 $ a été refusée il y a deux semaines'
        }
      ],
      template: 'Tu es un stratège en négociation immobilière qui connaît bien le marché résidentiel québécois et la pratique du courtage au Québec.\n\nContexte : je suis courtier et je représente {{role}} dans une négociation en cours.{{#si ecart}} Situation de prix : {{ecart}}.{{/si}}{{#si conditions}} Conditions de l’offre : {{conditions}}.{{/si}} État du marché local : {{contexte_marche}}.{{#si motivation}} Ce que je sais de l’autre partie : {{motivation}}.{{/si}}{{#si limite}} Limite ou priorité de mon client : {{limite}}.{{/si}}{{#si comparables}} Ventes comparables récentes : {{comparables}}.{{/si}}{{#si echeance}} Contrainte de temps : {{echeance}}.{{/si}}{{#si historique}} Historique des offres : {{historique}}.{{/si}}\n\nTâche : prépare-moi pour cette négociation. Je veux : 1) les 3 arguments les plus solides pour ma position, avec la façon de les formuler; 2) les 2 objections les plus probables de l’autre partie et comment y répondre; 3) trois scénarios de contre-offre (prudent, équilibré, audacieux) avec les avantages et les risques de chacun.\n\nContraintes : reste réaliste et nuancé, appuie-toi seulement sur les informations fournies, et rappelle-moi ce que je devrais vérifier avant la rencontre. Aucune promesse de résultat.',
      formatSortie: 'Trois sections numérotées : Arguments, Objections et réponses, Scénarios de contre-offre. Phrases courtes, prêtes à dire à voix haute.',
      exempleSortie: '« Argument 1 — Les comparables : deux ventes récentes soutiennent un prix au-dessus de 540 000 $... »',
      explication: [
        'L’IA raisonne à partir de votre situation réelle (écart, conditions, motivation) au lieu de conseils génériques de négociation.',
        'Les trois scénarios de contre-offre vous donnent des options à présenter à votre client, pas une seule recommandation rigide.',
        'La demande de nuance et de vérifications évite les réponses trop confiantes.'
      ],
      conseils: [
        'L’IA prépare, mais ne négocie pas : validez chaque chiffre avec vos comparables et votre connaissance du dossier.',
        'Refaites l’exercice après chaque contre-offre : le contexte change, les arguments aussi.'
      ]
    },

    /* ──────────────────────────────────────────────
       6. COURRIEL DE PROSPECTION VENDEUR
       ────────────────────────────────────────────── */
    {
      id: 'courriel-prospection-vendeur',
      categorie: 'courriel',
      titre: 'Courriel de prospection',
      description: 'Approcher un vendeur potentiel avec un message qui se démarque',
      icone: 'prospection',
      outils: ['chatgpt', 'claude', 'gemini', 'perplexity', 'autre'],
      questions: [
        {
          id: 'source_contact',
          label: 'D’où vient ce contact?',
          type: 'choix',
          options: ['Référence d’un client', 'Voisin d’une propriété que j’ai vendue', 'Demande d’évaluation en ligne', 'Ancien client', 'Contact sans lien préalable'],
          obligatoire: true,
          poidsScore: 14,
          aide: 'La provenance du contact détermine le niveau de familiarité du message.'
        },
        {
          id: 'secteur',
          label: 'Dans quel secteur se trouve sa propriété?',
          type: 'texte',
          obligatoire: true,
          poidsScore: 12,
          placeholder: 'Ex. : Boisbriand, secteur du Faubourg'
        },
        {
          id: 'accroche',
          label: 'Pourquoi est-ce un bon moment pour vendre dans ce secteur?',
          type: 'texte_long',
          obligatoire: true,
          poidsScore: 18,
          placeholder: 'Ex. : j’ai vendu une maison semblable sur sa rue en 9 jours, la demande est forte pour ce type de propriété',
          aide: 'C’est votre meilleur argument : un fait concret vaut mieux que « le marché est bon ».'
        },
        {
          id: 'offre',
          label: 'Que proposez-vous concrètement dans ce courriel?',
          type: 'choix',
          options: ['Une évaluation gratuite de sa propriété', 'Une analyse de marché de son secteur', 'Une rencontre sans engagement'],
          obligatoire: true,
          poidsScore: 14
        },
        {
          id: 'ton',
          label: 'Quel ton vous ressemble?',
          type: 'choix',
          options: ['Chaleureux et de proximité', 'Professionnel et posé', 'Direct et concis'],
          obligatoire: true,
          poidsScore: 8
        },
        {
          id: 'signature',
          label: 'Comment signez-vous vos courriels?',
          type: 'texte',
          obligatoire: false,
          poidsScore: 8,
          placeholder: 'Ex. : Julie Tremblay, courtière immobilière résidentielle, RE/MAX Crystal'
        },
        {
          id: 'longueur',
          label: 'Quelle longueur préférez-vous?',
          type: 'choix',
          options: ['Court (moins de 120 mots)', 'Moyen (environ 200 mots)'],
          obligatoire: true,
          poidsScore: 6
        }
      ],
      clarifications: [
        {
          questionId: 'vente_recente',
          label: 'Avez-vous une vente récente précise à mentionner? (rue, délai, résultat)',
          type: 'texte',
          poidsScore: 8,
          placeholder: 'Ex. : le 245 rue des Érables, vendu en 12 jours au-dessus du prix demandé'
        },
        {
          questionId: 'lien_personnel',
          label: 'Avez-vous un lien ou un point commun avec cette personne?',
          type: 'texte',
          poidsScore: 7,
          placeholder: 'Ex. : nos enfants fréquentent la même école'
        },
        {
          questionId: 'suivi_prevu',
          label: 'Comment prévoyez-vous faire le suivi après ce courriel?',
          type: 'texte',
          poidsScore: 5,
          placeholder: 'Ex. : un appel la semaine prochaine s’il n’a pas répondu'
        }
      ],
      template: 'Tu es un courtier immobilier québécois qui excelle en prospection écrite : tes courriels sont courts, personnalisés et jamais insistants.\n\nContexte : j’approche un propriétaire qui pourrait vendre. Provenance du contact : {{source_contact}}.{{#si secteur}} Sa propriété se trouve à {{secteur}}.{{/si}}{{#si accroche}} Mon meilleur argument pour ce moment-ci : {{accroche}}.{{/si}}{{#si vente_recente}} Vente récente à mentionner : {{vente_recente}}.{{/si}}{{#si lien_personnel}} Lien personnel : {{lien_personnel}}.{{/si}}\n\nTâche : rédige un courriel de prospection de longueur {{longueur}}, avec un ton {{ton}}, qui propose : {{offre}}. Le courriel doit partir d’un fait concret lié à son secteur (jamais d’un discours sur moi), montrer ce qu’il y gagne, et se terminer par une invitation simple, facile à accepter.{{#si signature}} Signature à utiliser : {{signature}}.{{/si}}{{#si suivi_prevu}} Note : je prévois ce suivi ensuite : {{suivi_prevu}} — le courriel ne doit pas l’annoncer, mais rester cohérent avec ça.{{/si}}\n\nContraintes : vouvoiement, aucune pression (« le marché n’attendra pas »), aucune promesse de prix, pas de majuscules criardes. La personne doit sentir que le courriel a été écrit pour elle.',
      formatSortie: 'Un objet de courriel qui donne envie d’ouvrir (maximum 8 mots), puis le corps du courriel prêt à envoyer.',
      exempleSortie: 'Objet : « Votre voisin de la rue des Érables » suivi d’un courriel court centré sur le secteur du destinataire.',
      explication: [
        'Le courriel s’ouvre sur un fait qui concerne le destinataire (son secteur, sa rue), pas sur votre CV : c’est ce qui le distingue des sollicitations habituelles.',
        'La provenance du contact ajuste automatiquement le niveau de familiarité du message.',
        'Une seule proposition claire et facile à accepter augmente les chances de réponse.'
      ],
      conseils: [
        'Envoyez ce courriel individuellement, jamais en envoi de masse : la personnalisation est tout son intérêt.',
        'Vérifiez que votre approche respecte les règles de sollicitation en vigueur (OACIQ et Loi canadienne anti-pourriel).'
      ]
    }

  ];

  /* Export navigateur + Node (tests) */
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = PROMPT_TEMPLATES;
  }
  if (root) {
    root.PROMPT_TEMPLATES = PROMPT_TEMPLATES;
  }
})(typeof window !== 'undefined' ? window : null);
