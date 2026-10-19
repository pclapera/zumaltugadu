// @ts-nocheck
// =============================================================
//  L'ESPIGOULE — Fichier de contenu
//  Modifiez CE fichier pour mettre à jour le site.
//  espigoule.html se met à jour automatiquement.
// =============================================================


// ─── INVENTAIRE DES IMAGES ──────────────────────────────────
// Toutes les images présentes dans le projet.
// Chaque image est nommée ici UNE SEULE FOIS.
// Pour changer une image, modifiez uniquement son chemin ci-dessous.
//
// ✅ = image actuellement utilisée sur le site
// 💤 = image disponible mais pas encore utilisée
//
// FORMAT RECOMMANDÉ — légende de lecture :
//   Ratio   = proportion largeur:hauteur (ex. 16:9 = paysage large)
//   Min px  = dimensions minimales pour un rendu net sur grand écran
//   Sujet   = ce qui doit être visible au centre (le recadrage se fait
//             automatiquement sur les bords, pas au centre)
//
// Formats de fichier conseillés : .webp (meilleur compromis qualité/poids)
//   ou .jpg. Éviter .png pour les photos (fichiers trop lourds).
//   Le format .HEIC (iPhone) n'est pas supporté par les navigateurs web :
//   convertir en .jpg avant d'utiliser.

const IMG = {

  // ── Héro (fond plein écran) ────────────────────────────────
  // Ratio : 16:9 ou plus large  |  Min : 1920 x 1080 px
  // Sujet : scène emblématique centrée (piscine, extérieur, vue)
  // La partie haute et basse est partiellement masquée par le texte.
  piscine: "images/piscine.webp",

  // ── Section présentation - grande photo ───────────────────
  // Ratio : 4:3 (paysage)  |  Min : 900 x 675 px
  // Sujet : extérieur du gîte, terrasse ou jardin
  terrasse: "images/terrasse.png",

  // ── Section présentation - petite vignette carrée ─────────
  // Ratio : 1:1 (carré)  |  Min : 500 x 500 px
  // Sujet : détail intérieur (salon, cuisine, coin cosy)
  // Les bords latéraux ou haut/bas seront rognés.
  salon: "images/salon.jpg",

  // ── Galerie - photos intérieur ────────────────────────────
  // Ratio : 4:3 (paysage)  |  Min : 900 x 675 px
  // Sujet : pièce entière, cadrage horizontal de préférence
  cuisine:  "images/cuisine.png",
  chambre1: "images/chambre_1.webp",
  chambre2: "images/chambre_2.webp",
  chambre3: "images/chambre_3.jpg",

  // ── Section territoire - photo du village ─────────────────
  // Ratio : 4:3 (paysage)  |  Min : 900 x 675 px
  // Sujet : vue panoramique d'Aiguèze ou des gorges, centré
  aigueze: "aigueze-vue-depuis-lardeche.webp",

  // ── Photos disponibles non utilisées ──────────────────────
  // 💤 Pourraient servir dans les cartes activités ou une future galerie
  baignade:      "baignade ardèche.webp",
  baignade2:     "baignade ardèche_1.jpg",
  grotteChauvet: "grotte-Chauvet-2-Ardeche.jpg",
  canoe:         "Nous_canoé_ardèche.JPG",
  // patrimoine: "Patrimoine_village.HEIC",  ← HEIC non supporté, convertir en .jpg

  // ── Vignettes des cartes activités ────────────────────────
  // Ratio : ~4:1 (très large, très peu haut)  |  Min : 800 x 200 px
  // Le rendu dans la carte fait 100 px de haut sur toute la largeur.
  // Choisir une photo avec le sujet principal bien centré verticalement.
  // Une photo paysage normale convient : seule la bande centrale est visible.
  vignBaignade:  "vignettes/baignade ardèche.webp",
  vignGrotte:    "vignettes/grotte-Chauvet-2-Ardeche.jpg",
  vignCanoe:     "vignettes/Nous_canoé_ardèche.JPG",
  vignPatrimoine:"vignettes/Patrimoine_village.jpg",
  vignVignoble:  "vignettes/vignoble.jpg",
  vignRandonnee: "vignettes/le-rocher-de-castelviel.jpg",
};


// =============================================================
//  CONTENU DU SITE
// =============================================================

const CONFIG = {

  // ─── SITE ───────────────────────────────────────────────────
  nom: "L'Espigoule",
  meta: {
    titre:       "L'Espigoule - Gîte à Aiguèze",
    description: "Gîte de caractère L'Espigoule à Aiguèze, l'un des Plus Beaux Villages de France. Séjour au coeur des Gorges de l'Ardèche, Gard, Occitanie.",
  },

  // ─── HÉRO ───────────────────────────────────────────────────
  hero: {
    accroche:  "Gîte de caractère · Aiguèze · Gard",
    titre:     "L'Espigoule",
    sousTitre: "Une maison de pierre aux portes de la réserve naturelle des Gorges de l'Ardèche, perchée sur les falaises, entre vignoble AOC Côtes du Rhône et garrigue provençale.",
    image:     IMG.piscine,
  },

  // ─── PRÉSENTATION ───────────────────────────────────────────
  presentation: {
    titre:   "Un havre de pierre",
    titreEm: "et de garrigue",
    // HTML autorisé ici pour les balises <strong>
    texte: "L'Espigoule est un gîte de caractère niché à Aiguèze, membre des <strong>Plus Beaux Villages de France</strong>, perché sur une falaise à la croisée de la vallée du Rhône et de la Provence. Ruelles pavées, façades en vieilles pierres, panorama jusqu'au Mont Ventoux - et à deux pas, la rivière pour une pause fraîcheur.",
    imageMain:   { src: IMG.terrasse, alt: "Terrasse de L'Espigoule" },
    imageAccent: { src: IMG.salon,    alt: "Salon de L'Espigoule" },
    infos: [
      { icone: "🏠",  label: "Surface",       valeur: "90 m²" },
      { icone: "👥",  label: "Capacité",       valeur: "6 personnes" },
      { icone: "🛏",  label: "Chambres",       valeur: "3 chambres" },
      { icone: "🏊",  label: "Piscine",        valeur: "Privée" },
      { icone: "❄️", label: "Climatisation",  valeur: "Toutes pièces" },
    ],
  },

  // ─── GALERIE ────────────────────────────────────────────────
  // Ajoutez ou retirez des photos ici — elles apparaissent dans
  // la grille ET dans la visionneuse (lightbox) automatiquement.
  // La première photo est affichée en grand dans la grille.
  // Utilisez les noms de IMG.xxx définis plus haut.
  galerie: [
    { src: IMG.piscine,   legende: "Piscine privée" },
    { src: IMG.terrasse,  legende: "Terrasse" },
    { src: IMG.salon,     legende: "Salon" },
    { src: IMG.cuisine,   legende: "Cuisine" },
    { src: IMG.chambre1,  legende: "Chambre 1" },
    { src: IMG.chambre2,  legende: "Chambre 2" },
    { src: IMG.chambre3,  legende: "Chambre 3" },
    // Pour ajouter une photo de baignade :
    // { src: IMG.baignade, legende: "Baignade dans l'Ardèche" },
  ],

  // ─── ÉQUIPEMENTS ────────────────────────────────────────────
  equipements: [
    {
      icone: "🍽",
      titre: "Cuisine & vie",
      liste: [
        "Cuisine équipée",
        "Lave-vaisselle",
        "Réfrigérateur et congélateur",
        "Lave-linge et sèche-linge",
        "Salon avec canapés",
        "Télévision",
        "Wi-Fi haut débit",
      ],
    },
    {
      icone: "🛏",
      titre: "Chambres & bains",
      liste: [
        "3 chambres climatisées",
        "Literie de qualité",
        "Linge de lit fourni",
        "2 salles de bain",
        "Serviettes incluses",
        "Produits de toilette",
      ],
    },
    {
      icone: "🌿",
      titre: "Extérieur",
      liste: [
        "Piscine privée chauffée",
        "Terrasse ombragée",
        "Salon de jardin",
        "Barbecue",
        "Jardin clos",
        "Parking privé",
        "Terrain de pétanque",
      ],
    },
  ],

  // ─── TERRITOIRE ─────────────────────────────────────────────
  territoire: {
    titre:   "Au coeur d'un",
    titreEm: "territoire d'exception",
    // HTML autorisé ici pour les balises <strong>
    texte: "Aiguèze est perché sur une falaise aux portes de la réserve naturelle des Gorges de l'Ardèche, membre de l'association <strong>Les Plus Beaux Villages de France</strong> depuis 2005 - premier village du Gard à obtenir ce label. Vignoble AOC Côtes du Rhône, patrimoine médiéval et rivière fraîche : tout est là.",
    image: {
      src:     IMG.aigueze,
      alt:     "Vue d'Aiguèze depuis l'Ardèche",
      legende: "Aiguèze · Vue depuis l'Ardèche",
    },
    chiffres: [
      { valeur: "212",            label: "habitants · authenticité préservée" },
      { valeur: "2005",           label: "labellisé Plus Beau Village de France" },
      { valeur: "XI<sup>e</sup>", label: "siècle · forteresse médiévale" },
    ],
    pointsInteret: [
      {
        distance: "sur place",
        nom:  "Chemin de ronde « Le Castelas »",
        desc: "Promenade le long des anciennes fortifications - tour sarrasine, donjon médiéval - avec panorama sur les Gorges de l'Ardèche et le Mont Ventoux. Éclairé la nuit.",
      },
      {
        distance: "sur place",
        nom:  "Place du Jeu de Paume",
        desc: "Place ombragée de platanes - terrasses, boules, marché estival chaque jeudi matin (miel, olives, vins AOC Côtes du Rhône)",
      },
      {
        distance: "sur place",
        nom:  "Église Saint-Roch & village",
        desc: "Clocher, fresque et plafond peint - ruelles pavées en vieilles pierres et « Facéties d'Aiguezois », clins d'oeil humoristiques cachés dans le village",
      },
      {
        distance: "à pied",
        nom:  "Domaine de l'Amandier",
        desc: "Dégustation de vins AOC Côtes du Rhône dans un moulin à huile du XVI<sup>e</sup> siècle avec sa meule d'origine",
      },
      {
        distance: "à pied",
        nom:  "Rocher de Castelviel",
        desc: "Randonnée à travers garrigue et sentiers boisés jusqu'à un panorama exceptionnel sur les Gorges de l'Ardèche",
      },
      {
        distance: "30 km",
        nom:  "Grotte Chauvet - Pont d'Arc",
        desc: "Réplique de la grotte ornée la plus ancienne du monde (Patrimoine UNESCO)",
      },
      {
        distance: "45 km",
        nom:  "Pont du Gard",
        desc: "Aqueduc romain du I<sup>er</sup> siècle, chef-d'oeuvre de l'ingénierie antique (Patrimoine UNESCO)",
      },
    ],
  },

  // ─── ACTIVITÉS ──────────────────────────────────────────────
  activites: [
    {
      icone:   "🛶",
      couleur: "linear-gradient(135deg, #1a6b8a 0%, #0d4a63 100%)",
      image:   IMG.vignCanoe,
      titre:   "Canoë-kayak",
      desc: "L'activité phare des Gorges de l'Ardèche. Plusieurs parcours selon votre envie : une demi-journée en famille (5 km ludiques) ou la grande traversée de 32 km sur deux jours avec bivouac en pleine nature. La descente se termine à Saint-Martin-d'Ardèche, à quelques kilomètres d'Aiguèze.",
      tags: ["Famille", "Dès 7 ans", "Demi-journée ou 2 jours"],
    },
    {
      icone:   "🥾",
      couleur: "linear-gradient(135deg, #2d7a4a 0%, #1a5230 100%)",
      image:   IMG.vignRandonnee,
      titre:   "Randonnée",
      desc: "Les sentiers des crêtes offrent des panoramas saisissants sur les gorges. Depuis Aiguèze, la balade jusqu'au rocher de Castelviel traverse garrigue et forêt méditerranéenne. La route panoramique longe les belvédères - accès libre et gratuit - pour des vues à couper le souffle sur les méandres de l'Ardèche.",
      tags: ["Tous niveaux", "Belvédères gratuits", "Garrigue"],
    },
    {
      icone:   "🏊",
      couleur: "linear-gradient(135deg, #4a8ab5 0%, #2a5f80 100%)",
      image:   IMG.vignBaignade,
      titre:   "Plage du Grain de Sel",
      // HTML autorisé dans desc
      desc: "Face aux falaises d'Aiguèze, côté Saint-Martin-d'Ardèche, accessible à pied en 15 minutes depuis le village. Plage de sable et galets ombragée par de grands arbres, avec tables de pique-nique. Labellisée <strong>Pavillon Bleu</strong> (qualité des eaux, accueil, environnement), surveillée chaque jour en juillet-août de 13h à 19h. Accès gratuit, parking payant. Ouverte toute l'année.",
      tags: ["Pavillon Bleu", "15 min à pied", "Accès gratuit", "Surveillée juil.-août", "PMR accessible"],
    },
    {
      icone:   "🍷",
      couleur: "linear-gradient(135deg, #8a6a2d 0%, #5c4415 100%)",
      image:   IMG.vignVignoble,
      titre:   "Vignoble & dégustation",
      // HTML autorisé dans desc
      desc: "Le territoire est classé AOC Côtes du Rhône. Le Domaine de l'Amandier, au pied d'Aiguèze, propose des dégustations dans un moulin à huile du XVI<sup>e</sup> siècle avec sa meule d'origine. Une belle introduction aux vins de la région.",
      tags: ["AOC Côtes du Rhône", "Sur place", "XVI<sup>e</sup> siècle"],
    },
    {
      icone:   "🗿",
      couleur: "linear-gradient(135deg, #6a3d8a 0%, #45265c 100%)",
      image:   IMG.vignGrotte,
      titre:   "Grottes préhistoriques",
      desc: "La Grotte Chauvet 2 - Pont d'Arc (30 km) est la réplique de la grotte ornée la plus ancienne du monde, classée au Patrimoine mondial de l'UNESCO. L'Aven d'Orgnac, grand site de France, offre un spectacle souterrain féerique.",
      tags: ["UNESCO", "30 km", "Incontournable"],
    },
    {
      icone:   "🏛",
      couleur: "linear-gradient(135deg, #8a4a2d 0%, #5c2d15 100%)",
      image:   IMG.vignPatrimoine,
      titre:   "Patrimoine & villages",
      // HTML autorisé dans desc
      desc: "Le Gard compte quatre villages des Plus Beaux Villages de France accessibles en une journée : Aiguèze, Montclus, La Roque-sur-Cèze et Lussan. Et à 45 km, le Pont du Gard, aqueduc romain du I<sup>er</sup> siècle, lui aussi classé UNESCO.",
      tags: ["4 Beaux Villages", "Pont du Gard", "45 km"],
    },
  ],

  // ─── CONTACT ────────────────────────────────────────────────
  contact: {
    adresse:       "Aiguèze\n30760 Gard, Occitanie",
    telephone:     "+33 6 00 00 00 00",
    email:         "contact@lespigoule.fr",
    sejourMinimum: "1 semaine en haute saison\nWeek-end possible hors saison",
    acces:         "~20 min depuis la sortie autoroute\nBollène (A7) ou Pont-Saint-Esprit\nParking 2 voitures sur place",
    animaux:       "Non acceptés",
  },

  // ─── MENTIONS LÉGALES & RGPD ────────────────────────────────
  // Remplissez les champs ci-dessous avec vos informations réelles.
  // Ces informations sont affichées dans le pied de page du site.
  // Elles sont obligatoires pour tout site collectant des données
  // personnelles (formulaire de contact) en vertu du RGPD et de
  // la loi française (Loi pour la Confiance dans l'Économie Numérique).
  legal: {

    // Propriétaire du site et responsable du traitement des données
    // (votre prénom, nom ou raison sociale)
    proprietaire: "L'Espigoule",

    // Adresse complète du responsable
    adresse: "Aiguèze, 30760 Gard",

    // Adresse email de contact pour les droits RGPD
    emailRgpd: "contact@lespigoule.fr",

    // Hébergeur du site (à renseigner une fois le site mis en ligne)
    // Exemples : "OVHcloud - 2 rue Kellermann, 59100 Roubaix"
    //            "Infomaniak Network SA - Rue Eugène-Marziano 25, 1227 Genève"
    //            "GitHub Pages - GitHub Inc., 88 Colin P. Kelly Jr. St., San Francisco"
    hebergeur: "A renseigner apres mise en ligne",

    // Annee de creation du site (pour le copyright)
    anneeCreation: 2026,
  },
};
