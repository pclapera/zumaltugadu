// @ts-nocheck
// =============================================================
//  ZUMALTUGADU - Contenu en français
//  Modifiez CE fichier pour mettre à jour les textes français.
//  Même schéma que config.de.js et config.en.js.
// =============================================================

CONFIGS.fr = {

  // === TEXTES DE L'INTERFACE =================================
  ui: {
    htmlLang: "fr",
    langueLabel: "Langue",
    navAria: "Navigation principale",
    menuAria: "Menu",
    navStudio: "Le Studio",
    navEquipements: "Équipements",
    navGalerie: "Galerie",
    navTerritoire: "Territoire",
    navActivites: "Activités",
    navReserver: "Demande de réservation",
    heroAria: "Bienvenue à Zumaltugadu",
    heroReserver: "Réserver",
    heroDecouvrir: "Découvrir",
    heroDefiler: "Défiler",
    presLabel: "Le studio",
    galerieLabel: "Photos",
    galerieTitre: "Le studio en <em>images</em>",
    voirEnGrand: "Voir {x} en grand",
    lbAria: "Visionneuse de photos",
    lbFermer: "Fermer",
    lbPrecedent: "Photo précédente",
    lbSuivant: "Photo suivante",
    equipLabel: "Confort &amp; prestations",
    equipTitre: "Tout pour <em>un séjour au chaud</em>",
    terrLabel: "Situation &amp; découvertes",
    activitesLabel: "Dans la région",
    activitesTitre: "Des activités pour <em>tous les goûts</em>",
    contactLabel: "Prendre contact",
    contactTitre: "Faire une <em>demande de séjour</em>",
    contactLead: "Indiquez vos dates et le nombre de personnes. Nous vous répondrons sous 24 heures avec les disponibilités et toutes les informations pour votre séjour.",
    formPrenom: "Prénom",
    formNom: "Nom",
    formEmail: "Adresse email",
    formTelephone: "Téléphone",
    formArrivee: "Arrivée",
    formDepart: "Départ",
    formPersonnes: "Nombre de personnes",
    formSelectionner: "Sélectionner",
    formPers1: "1 personne",
    formPers2: "2 personnes",
    formPersPlus: "Plus de 2 (à préciser dans le message)",
    formMessage: "Message (optionnel)",
    formMessagePh: "Questions, besoins particuliers...",
    formEnvoyer: "Envoyer ma demande",
    formSucces: "Votre demande a bien été envoyée. Nous vous répondrons sous 24 h.",
    infoAdresse: "Adresse",
    infoTelephone: "Téléphone",
    infoEmail: "Email",
    infoSejourMin: "Séjour minimum",
    infoAcces: "Accès",
    infoAnimaux: "Animaux",
    legalMentions: "Mentions légales",
    legalResponsable: "Responsable de publication",
    legalContact: "Contact",
    legalHebergement: "Hébergement",
    legalDonneesTitre: "Données personnelles (LPD)",
    // {email} est remplacé par l'adresse de contact
    legalDonneesTexte: "Les informations saisies dans le formulaire de contact (nom, email, téléphone, dates) sont utilisées uniquement pour répondre à votre demande de séjour. Elles ne sont ni vendues ni transmises à des tiers. Conformément à la loi fédérale sur la protection des données (LPD), vous disposez d'un droit d'accès, de rectification et de suppression en écrivant à {email}.",
    legalPropTitre: "Propriété intellectuelle",
    // {owner} est remplacé par le propriétaire du site
    legalPropTexte: "Les textes, photographies et éléments graphiques de ce site sont la propriété exclusive de {owner} et sont protégés par le droit d'auteur. Toute reproduction sans autorisation est interdite.",
    legalCopyright: "Tous droits réservés",
  },

  // === SITE ==================================================
  nom: "Zumaltugadu",
  meta: {
    titre:       "Zumaltugadu - Studio à Bettmeralp",
    description: "Studio de charme dans la maison Zumaltugadu à Bettmeralp (Valais), village sans voiture au pied du glacier d'Aletsch. Ski, randonnée et panorama alpin.",
  },

  // === HÉRO ==================================================
  hero: {
    accroche:  "Studio de charme · Bettmeralp · Valais",
    titre:     "Zumaltugadu",
    sousTitre: "Un studio tout en bois au coeur de Bettmeralp, village sans voiture de l'Aletsch Arena : pistes à deux pas, panorama sur les Alpes et calme absolu.",
    image:     IMG.hero,
  },

  // === PRÉSENTATION ==========================================
  presentation: {
    titre:   "Un cocon de bois",
    titreEm: "face aux Alpes",
    // HTML autorisé ici pour les balises <strong>
    texte: "Le studio se trouve dans la maison <strong>Zumaltugadu</strong>, au coeur de Bettmeralp, station sans voiture du Valais. Lambris de bois clair, parquet, coin repas avec banquette d'angle et cuisine équipée : tout est pensé pour poser ses skis et se sentir chez soi. Dehors, les pistes, les sentiers d'hiver et la vue sur les sommets.",
    imageMain:   { src: IMG.terrasse, alt: "Entrée du studio Zumaltugadu et banc au soleil" },
    imageAccent: { src: IMG.salon,    alt: "Séjour du studio Zumaltugadu" },
    legendePhoto: "Zumaltugadu · Bettmeralp",
    badge:        "Sans voiture",
    // À CONFIRMER : surface, capacité et couchages réels
    infos: [
      { icone: "🏠",  label: "Surface",      valeur: "À confirmer" },
      { icone: "👥",  label: "Capacité",     valeur: "2 personnes (à confirmer)" },
      { icone: "🛏",  label: "Couchage",     valeur: "Lit escamotable" },
      { icone: "🍳",  label: "Cuisine",      valeur: "Équipée" },
      { icone: "⛷",  label: "Pistes",       valeur: "À proximité" },
    ],
  },

  // === GALERIE ===============================================
  // Ajoutez ou retirez des photos ici : elles apparaissent dans
  // la grille ET dans la visionneuse (lightbox) automatiquement.
  // La première photo est affichée en grand dans la grille.
  // Garder le même ordre et les mêmes images dans toutes les langues.
  galerie: [
    { src: IMG.salon,          legende: "Séjour et coin repas" },
    { src: IMG.salon2,         legende: "Lit escamotable" },
    { src: IMG.cuisine,        legende: "Cuisine équipée" },
    { src: IMG.terrasse,       legende: "Entrée et banc au soleil" },
    { src: IMG.departSki,      legende: "Départ à ski devant la maison" },
    { src: IMG.villagePistes,  legende: "Bettmeralp et ses remontées" },
    { src: IMG.villageNuit,    legende: "Le village de nuit" },
    { src: IMG.hero,           legende: "Chapelle Maria zum Schnee" },
  ],

  // === ÉQUIPEMENTS ===========================================
  // À CONFIRMER : vérifier chaque ligne avec l'équipement réel.
  equipements: [
    {
      icone: "🍽",
      titre: "Cuisine & vie",
      liste: [
        "Cuisine équipée",
        "Plaque à vitrocéramique et four",
        "Bouilloire",
        "Coin repas avec banquette d'angle",
        "Télévision",
        "Wi-Fi",
      ],
    },
    {
      icone: "🛏",
      titre: "Couchage & confort",
      liste: [
        "Lit escamotable dans la grande armoire",
        "Lambris et parquet en bois",
        "Rideaux et vue sur les montagnes",
        "Linge de lit",
        "Serviettes",
      ],
    },
    {
      icone: "⛷",
      titre: "Montagne & extérieur",
      liste: [
        "Entrée de plain-pied",
        "Banc et terrasse devant la porte",
        "Chaises et table d'extérieur",
        "Pistes de ski à proximité",
        "Local à skis",
        "Départ à ski davant le studio"
      ],
    },
  ],

  // === TERRITOIRE ============================================
  territoire: {
    titre:   "Au pied du",
    titreEm: "glacier d'Aletsch",
    // HTML autorisé ici pour les balises <strong>
    texte: "Bettmeralp est un village de montagne <strong>sans voiture</strong>, perché près de 2000 m d'altitude dans l'Aletsch Arena, en Valais. On y accède en télécabine depuis Betten. Le domaine donne accès au glacier d'Aletsch, le plus grand glacier des Alpes, inscrit au Patrimoine mondial de l'UNESCO.",
    image: {
      src:     IMG.villagePistes,
      alt:     "Bettmeralp et ses remontées mécaniques sous la neige",
      legende: "Bettmeralp · Chalets et pistes",
    },
    // À CONFIRMER avant mise en ligne
    chiffres: [
      { valeur: "~2000 m",  label: "altitude du village" },
      { valeur: "0",        label: "voiture dans le village" },
      { valeur: "UNESCO",   label: "région du glacier d'Aletsch" },
    ],
    // À CONFIRMER : distances à vérifier avec le plan de la station
    pointsInteret: [
      {
        distance: "sur place",
        nom:  "Chapelle Maria zum Schnee",
        desc: "Petite chapelle blanche sur la butte du village, éclairée le soir, avec vue sur les sommets valaisans.",
      },
      {
        distance: "à pied",
        nom:  "Pistes et remontées",
        desc: "Le domaine skiable de l'Aletsch Arena est accessible depuis le village, à quelques minutes du studio.",
      },
      {
        distance: "à pied",
        nom:  "Chemins d'hiver damés",
        desc: "Sentiers balisés pour marcher et se promener en raquettes, au calme, sans circulation.",
      },
      {
        distance: "télécabine",
        nom:  "Bettmerhorn",
        desc: "Belvédère à 2647 m avec vue sur le glacier d'Aletsch et les 4000 m des Alpes bernoises et valaisannes.",
      },
      {
        distance: "télécabine",
        nom:  "Betten et la vallée du Rhône",
        desc: "Liaison par télécabine vers la vallée, point de départ pour rejoindre Betten et la gare.",
      },
    ],
  },

  // === ACTIVITÉS =============================================
  activitesLead: "L'Aletsch Arena offre un terrain de jeu grandeur nature à deux pas du studio : neige en hiver, sentiers et lacs d'altitude en été.",
  activites: [
    {
      icone:   "⛷",
      couleur: "linear-gradient(135deg, #2f5d86 0%, #173a58 100%)",
      image:   IMG.departSki,
      titre:   "Ski & snowboard",
      desc: "Le domaine skiable de l'Aletsch Arena s'étend de Bettmeralp à Riederalp et Fiesch. Les remontées démarrent au bord du village : on chausse les skis devant la porte et on rentre au chaud.",
      tags: ["Ski aux pieds", "Aletsch Arena", "Tous niveaux"],
    },
    {
      icone:   "🥾",
      couleur: "linear-gradient(135deg, #3f6f8f 0%, #214761 100%)",
      image:   IMG.cheminNeige,
      titre:   "Raquettes & balades",
      desc: "Des chemins d'hiver damés serpentent dans le village et la forêt. Parfait pour une promenade au crépuscule, à pied ou en raquettes, sans voiture et sans bruit.",
      tags: ["Sans voiture", "Chemins damés", "Au calme"],
    },
    {
      icone:   "🏔",
      couleur: "linear-gradient(135deg, #4a8ab5 0%, #2a5f80 100%)",
      image:   IMG.villagePistes,
      titre:   "Glacier d'Aletsch",
      desc: "Depuis Bettmeralp, la télécabine du Bettmerhorn (2647 m) mène à un point de vue sur le plus grand glacier des Alpes, classé au Patrimoine mondial de l'UNESCO.",
      tags: ["UNESCO", "Bettmerhorn", "Panorama"],
    },
    {
      icone:   "🌲",
      couleur: "linear-gradient(135deg, #3f7a5a 0%, #1f4a35 100%)",
      image:   IMG.villageNuit,
      titre:   "Randonnée d'été",
      // À CONFIRMER : ajouter une photo d'été si disponible
      desc: "En été, les sentiers d'altitude relient les alpages, les forêts d'aroles et les lacs de la région. Un réseau de balades pour tous les niveaux, avec le glacier en toile de fond.",
      tags: ["Été", "Lacs d'altitude", "Alpages"],
    },
    {
      icone:   "⛪",
      couleur: "linear-gradient(135deg, #5a5f8a 0%, #33365c 100%)",
      image:   IMG.hero,
      titre:   "Chapelle & village",
      desc: "La chapelle Maria zum Schnee domine le village. Au coucher du soleil, elle s'illumine face aux sommets : un moment simple et spectaculaire à ne pas manquer.",
      tags: ["Sur place", "Coucher de soleil", "Photo"],
    },
    {
      icone:   "🌌",
      couleur: "linear-gradient(135deg, #2a3d5a 0%, #121c2c 100%)",
      image:   IMG.villageNuit,
      titre:   "Soirées en montagne",
      desc: "Le village s'illumine à la tombée de la nuit. Après le ski, un retour à pied sur les chemins éclairés, puis un repas dans le studio avec vue sur les montagnes.",
      tags: ["Calme", "Étoiles", "Après-ski"],
    },
  ],

  // === CONTACT ===============================================
  // À CONFIRMER : remplacer les valeurs par les vraies coordonnées
  contact: {
    adresse:       "Maison Zumaltugadu\n3992 Bettmeralp, Valais, Suisse",
    telephone:     "+41 00 000 00 00",
    email:         "À renseigner",
    sejourMinimum: "À définir selon la saison",
    acces:         "Village sans voiture\nTélécabine depuis Betten (gare CFF)\nPortage des bagages à prévoir",
    animaux:       "À confirmer",
  },

  // === FOOTER ================================================
  footer: "Studio de charme à Bettmeralp (3992) - Valais, Suisse",

  // === MENTIONS LÉGALES & PROTECTION DES DONNÉES =============
  // À CONFIRMER : remplir avec les informations réelles.
  legal: {

    // Propriétaire du site et responsable du traitement des données
    proprietaire: "Zumaltugadu",

    // Adresse complète du responsable
    adresse: "Bettmeralp, 3992 Valais, Suisse",

    // Adresse email de contact pour les droits d'accès aux données
    emailRgpd: "À renseigner",

    // Hébergeur du site (à renseigner une fois le site mis en ligne)
    // Exemples : "Infomaniak Network SA - Rue Eugène-Marziano 25, 1227 Genève"
    //            "Hostpoint AG - Neue Jonastrasse 60, 8640 Rapperswil-Jona"
    hebergeur: "À renseigner après mise en ligne",

    // Année de création du site (pour le copyright)
    anneeCreation: 2026,
  },
};
