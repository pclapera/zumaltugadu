// @ts-nocheck
// =============================================================
//  ZUMALTUGADU - English content
//  Edit THIS file to change the English texts.
//  Same schema as config.de.js and config.fr.js.
//  Texts marked "TO CONFIRM" must be checked.
// =============================================================

CONFIGS.en = {

  // === USER INTERFACE TEXTS ==================================
  ui: {
    htmlLang: "en",
    langueLabel: "Language",
    navAria: "Main navigation",
    menuAria: "Menu",
    navStudio: "The Studio",
    navEquipements: "Amenities",
    navGalerie: "Gallery",
    navTerritoire: "Area",
    navActivites: "Activities",
    navReserver: "Booking request",
    heroAria: "Welcome to Zumaltugadu",
    heroReserver: "Book",
    heroDecouvrir: "Discover",
    heroDefiler: "Scroll",
    presLabel: "The studio",
    galerieLabel: "Photos",
    galerieTitre: "The studio in <em>pictures</em>",
    voirEnGrand: "View {x} full size",
    lbAria: "Photo viewer",
    lbFermer: "Close",
    lbPrecedent: "Previous photo",
    lbSuivant: "Next photo",
    equipLabel: "Comfort &amp; amenities",
    equipTitre: "Everything for <em>a cosy stay</em>",
    terrLabel: "Location &amp; discoveries",
    activitesLabel: "In the area",
    activitesTitre: "Activities for <em>every taste</em>",
    contactLabel: "Get in touch",
    contactTitre: "Send a <em>stay request</em>",
    contactLead: "Tell us your dates and the number of guests. We will reply within 24 hours with availability and all the information for your stay.",
    formPrenom: "First name",
    formNom: "Last name",
    formEmail: "Email address",
    formTelephone: "Phone",
    formArrivee: "Arrival",
    formDepart: "Departure",
    formPersonnes: "Number of guests",
    formSelectionner: "Select",
    formPers1: "1 guest",
    formPers2: "2 guests",
    formPersPlus: "More than 2 (please specify in the message)",
    formMessage: "Message (optional)",
    formMessagePh: "Questions, special requests...",
    formEnvoyer: "Send my request",
    formSucces: "Your request has been sent. We will reply within 24 hours.",
    infoAdresse: "Address",
    infoTelephone: "Phone",
    infoEmail: "Email",
    infoSejourMin: "Minimum stay",
    infoAcces: "Getting here",
    infoAnimaux: "Pets",
    legalMentions: "Legal notice",
    legalResponsable: "Publisher",
    legalContact: "Contact",
    legalHebergement: "Hosting",
    legalDonneesTitre: "Personal data (FADP)",
    legalDonneesTexte: "The information entered in the contact form (name, email, phone, dates) is used only to answer your stay request. It is neither sold nor passed on to third parties. Under the Swiss Federal Act on Data Protection (FADP), you have the right to access, correct and delete your data by writing to {email}.",
    legalPropTitre: "Intellectual property",
    legalPropTexte: "The texts, photographs and graphic elements of this website are the exclusive property of {owner} and are protected by copyright. Any reproduction without permission is prohibited.",
    legalCopyright: "All rights reserved",
  },

  // === SITE ==================================================
  nom: "Zumaltugadu",
  meta: {
    titre:       "Zumaltugadu - Studio in Bettmeralp",
    description: "Charming studio in the Zumaltugadu house in Bettmeralp (Valais), a car-free mountain village at the foot of the Aletsch Glacier. Skiing, hiking and Alpine views.",
  },

  // === HERO ==================================================
  hero: {
    accroche:  "Charming studio · Bettmeralp · Valais",
    titre:     "Zumaltugadu",
    sousTitre: "A studio entirely in wood in the heart of Bettmeralp, the car-free village of the Aletsch Arena: slopes a few steps away, Alpine panorama and complete calm.",
    image:     IMG.hero,
  },

  // === PRESENTATION ==========================================
  presentation: {
    titre:   "A wooden retreat",
    titreEm: "facing the Alps",
    // HTML allowed for <strong>
    texte: "The studio is in the <strong>Zumaltugadu</strong> house, in the heart of Bettmeralp, a car-free mountain resort in Valais. Light wood panelling, parquet floor, a dining corner with a corner bench and a fully equipped kitchen: everything is designed to drop your skis and feel at home. Outside: the slopes, the winter trails and views of the peaks.",
    imageMain:   { src: IMG.terrasse, alt: "Entrance of the Zumaltugadu studio with a bench in the sun" },
    imageAccent: { src: IMG.salon,    alt: "Living area of the Zumaltugadu studio" },
    legendePhoto: "Zumaltugadu · Bettmeralp",
    badge:        "Car-free",
    // TO CONFIRM: real surface area, capacity and beds
    infos: [
      { icone: "🏠",  label: "Surface",      valeur: "To be confirmed" },
      { icone: "👥",  label: "Capacity",     valeur: "2 guests (to be confirmed)" },
      { icone: "🛏",  label: "Bed",          valeur: "Wall bed" },
      { icone: "🍳",  label: "Kitchen",      valeur: "Fully equipped" },
      { icone: "⛷",  label: "Slopes",       valeur: "Nearby" },
    ],
  },

  // === GALLERY ===============================================
  // Keep the same order and the same images in all languages.
  galerie: [
    { src: IMG.salon,          legende: "Living and dining area" },
    { src: IMG.salon2,         legende: "Wall bed" },
    { src: IMG.cuisine,        legende: "Fully equipped kitchen" },
    { src: IMG.terrasse,       legende: "Entrance and bench in the sun" },
    { src: IMG.departSki,      legende: "Skiing straight from the house" },
    { src: IMG.villagePistes,  legende: "Bettmeralp and its lifts" },
    { src: IMG.villageNuit,    legende: "The village at night" },
    { src: IMG.hero,           legende: "Maria zum Schnee chapel" },
  ],

  // === AMENITIES =============================================
  // TO CONFIRM: check each line against the real equipment.
  equipements: [
    {
      icone: "🍽",
      titre: "Kitchen & living",
      liste: [
        "Fully equipped kitchen",
        "Induction hob and oven",
        "Kettle",
        "Dining corner with corner bench",
        "Television",
        "Wi-Fi (to be confirmed)",
      ],
    },
    {
      icone: "🛏",
      titre: "Sleeping & comfort",
      liste: [
        "Wall bed in the large wardrobe",
        "Wood panelling and parquet floor",
        "Curtains and mountain views",
        "Bed linen (to be confirmed)",
        "Towels (to be confirmed)",
      ],
    },
    {
      icone: "⛷",
      titre: "Mountain & outdoors",
      liste: [
        "Step-free entrance",
        "Bench and seating area by the door",
        "Outdoor chairs and table",
        "Ski slopes nearby",
        "Ski room (to be confirmed)",
      ],
    },
  ],

  // === AREA ==================================================
  territoire: {
    titre:   "At the foot of the",
    titreEm: "Aletsch Glacier",
    // HTML allowed for <strong>
    texte: "Bettmeralp is a <strong>car-free</strong> mountain village at nearly 2000 m altitude in the Aletsch Arena, Valais. It is reached by cable car from Betten. The area gives access to the Aletsch Glacier, the largest glacier in the Alps and a UNESCO World Heritage site.",
    image: {
      src:     IMG.villagePistes,
      alt:     "Bettmeralp and its lifts under snow",
      legende: "Bettmeralp · Chalets and slopes",
    },
    // TO CONFIRM before publishing
    chiffres: [
      { valeur: "~2000 m",  label: "village altitude" },
      { valeur: "0",        label: "cars in the village" },
      { valeur: "UNESCO",   label: "Aletsch Glacier region" },
    ],
    // TO CONFIRM: check distances against the resort map
    pointsInteret: [
      {
        distance: "on site",
        nom:  "Maria zum Schnee chapel",
        desc: "Small white chapel on the village hill, lit up in the evening, with views of the Valais peaks.",
      },
      {
        distance: "on foot",
        nom:  "Slopes and lifts",
        desc: "The Aletsch Arena ski area is reached from the village, a few minutes from the studio.",
      },
      {
        distance: "on foot",
        nom:  "Cleared winter trails",
        desc: "Marked paths for walking and snowshoeing, quiet and free of traffic.",
      },
      {
        distance: "cable car",
        nom:  "Bettmerhorn",
        desc: "Viewpoint at 2647 m overlooking the Aletsch Glacier and the 4000 m peaks of the Bernese and Valais Alps.",
      },
      {
        distance: "cable car",
        nom:  "Betten and the Rhone valley",
        desc: "Cable car link to the valley, the starting point to reach Betten and the railway station.",
      },
    ],
  },

  // === ACTIVITIES ============================================
  activitesLead: "The Aletsch Arena is a full-size playground a few steps from the studio: snow in winter, trails and mountain lakes in summer.",
  activites: [
    {
      icone:   "⛷",
      couleur: "linear-gradient(135deg, #2f5d86 0%, #173a58 100%)",
      image:   IMG.departSki,
      titre:   "Skiing & snowboarding",
      desc: "The Aletsch Arena ski area stretches from Bettmeralp to Riederalp and Fiesch. The lifts start at the edge of the village: put on your skis at the door and come back in to warm up.",
      tags: ["Ski-in", "Aletsch Arena", "All levels"],
    },
    {
      icone:   "🥾",
      couleur: "linear-gradient(135deg, #3f6f8f 0%, #214761 100%)",
      image:   IMG.cheminNeige,
      titre:   "Snowshoeing & walks",
      desc: "Cleared winter trails wind through the village and the forest. Perfect for a walk at dusk, on foot or with snowshoes, without cars and without noise.",
      tags: ["Car-free", "Cleared trails", "Quiet"],
    },
    {
      icone:   "🏔",
      couleur: "linear-gradient(135deg, #4a8ab5 0%, #2a5f80 100%)",
      image:   IMG.villagePistes,
      titre:   "Aletsch Glacier",
      desc: "From Bettmeralp, the Bettmerhorn cable car (2647 m) leads to a viewpoint over the largest glacier in the Alps, a UNESCO World Heritage site.",
      tags: ["UNESCO", "Bettmerhorn", "Panorama"],
    },
    {
      icone:   "🌲",
      couleur: "linear-gradient(135deg, #3f7a5a 0%, #1f4a35 100%)",
      image:   IMG.villageNuit,
      titre:   "Summer hiking",
      // TO CONFIRM: add a summer photo if available
      desc: "In summer, high-altitude trails link the alpine pastures, stone pine forests and lakes of the region. A network of walks for all levels, with the glacier as a backdrop.",
      tags: ["Summer", "Mountain lakes", "Alpine pastures"],
    },
    {
      icone:   "⛪",
      couleur: "linear-gradient(135deg, #5a5f8a 0%, #33365c 100%)",
      image:   IMG.hero,
      titre:   "Chapel & village",
      desc: "The Maria zum Schnee chapel overlooks the village. At sunset it lights up against the peaks: a simple and spectacular moment not to be missed.",
      tags: ["On site", "Sunset", "Photo"],
    },
    {
      icone:   "🌌",
      couleur: "linear-gradient(135deg, #2a3d5a 0%, #121c2c 100%)",
      image:   IMG.villageNuit,
      titre:   "Mountain evenings",
      desc: "The village lights up as night falls. After skiing, walk home on lit paths, then enjoy a meal in the studio with a view of the mountains.",
      tags: ["Calm", "Stars", "Après-ski"],
    },
  ],

  // === CONTACT ===============================================
  // TO CONFIRM: replace with the real contact details
  contact: {
    adresse:       "Zumaltugadu house\n3992 Bettmeralp, Valais, Switzerland",
    telephone:     "+41 00 000 00 00",
    email:         "To be added",
    sejourMinimum: "To be defined by season",
    acces:         "Car-free village\nCable car from Betten (railway station)\nPlan for carrying your luggage",
    animaux:       "To be confirmed",
  },

  // === FOOTER ================================================
  footer: "Charming studio in Bettmeralp (3992) - Valais, Switzerland",

  // === LEGAL NOTICE & DATA PROTECTION ========================
  // TO CONFIRM: fill in with the real information.
  legal: {

    // Website owner and data controller
    proprietaire: "Zumaltugadu",

    // Full address of the data controller
    adresse: "Bettmeralp, 3992 Valais, Switzerland",

    // Contact email for data access requests
    emailRgpd: "To be added",

    // Hosting provider (fill in once the site is online)
    hebergeur: "To be added once online",

    // Year the site was created (for the copyright)
    anneeCreation: 2026,
  },
};
