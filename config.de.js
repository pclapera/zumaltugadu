// @ts-nocheck
// =============================================================
//  ZUMALTUGADU - Inhalt auf Deutsch (Hauptsprache)
//  Diese Datei bearbeiten, um die deutschen Texte zu ändern.
//  Gleiches Schema wie config.fr.js und config.en.js.
//  Mit "ZU BESTÄTIGEN" markierte Texte müssen geprüft werden.
// =============================================================

CONFIGS.de = {

  // === TEXTE DER BENUTZEROBERFLÄCHE ==========================
  ui: {
    htmlLang: "de",
    langueLabel: "Sprache",
    navAria: "Hauptnavigation",
    menuAria: "Menü",
    navStudio: "Das Studio",
    navEquipements: "Ausstattung",
    navGalerie: "Galerie",
    navTerritoire: "Umgebung",
    navActivites: "Aktivitäten",
    navReserver: "Buchungsanfrage",
    heroAria: "Willkommen im Zumaltugadu",
    heroReserver: "Anfragen",
    heroDecouvrir: "Entdecken",
    heroDefiler: "Scrollen",
    presLabel: "Das Studio",
    galerieLabel: "Fotos",
    galerieTitre: "Das Studio in <em>Bildern</em>",
    voirEnGrand: "{x} vergrössert ansehen",
    lbAria: "Fotobetrachter",
    lbFermer: "Schliessen",
    lbPrecedent: "Vorheriges Foto",
    lbSuivant: "Nächstes Foto",
    equipLabel: "Komfort &amp; Ausstattung",
    equipTitre: "Alles für <em>einen gemütlichen Aufenthalt</em>",
    terrLabel: "Lage &amp; Entdeckungen",
    activitesLabel: "In der Region",
    activitesTitre: "Aktivitäten für <em>jeden Geschmack</em>",
    contactLabel: "Kontakt aufnehmen",
    contactTitre: "Eine <em>Aufenthaltsanfrage</em> senden",
    contactLead: "Geben Sie Ihre Daten und die Anzahl Personen an. Wir antworten innerhalb von 24 Stunden mit den Verfügbarkeiten und allen Informationen zu Ihrem Aufenthalt.",
    formPrenom: "Vorname",
    formNom: "Nachname",
    formEmail: "E-Mail-Adresse",
    formTelephone: "Telefon",
    formArrivee: "Anreise",
    formDepart: "Abreise",
    formPersonnes: "Anzahl Personen",
    formSelectionner: "Auswählen",
    formPers1: "1 Person",
    formPers2: "2 Personen",
    formPersPlus: "Mehr als 2 (bitte in der Nachricht angeben)",
    formMessage: "Nachricht (optional)",
    formMessagePh: "Fragen, besondere Wünsche...",
    formEnvoyer: "Anfrage senden",
    formSucces: "Ihre Anfrage wurde gesendet. Wir antworten innerhalb von 24 Stunden.",
    infoAdresse: "Adresse",
    infoTelephone: "Telefon",
    infoEmail: "E-Mail",
    infoSejourMin: "Mindestaufenthalt",
    infoAcces: "Anreise",
    infoAnimaux: "Haustiere",
    legalMentions: "Impressum",
    legalResponsable: "Verantwortlich für den Inhalt",
    legalContact: "Kontakt",
    legalHebergement: "Hosting",
    legalDonneesTitre: "Datenschutz (DSG)",
    legalDonneesTexte: "Die im Kontaktformular eingegebenen Angaben (Name, E-Mail, Telefon, Daten) werden ausschliesslich zur Beantwortung Ihrer Aufenthaltsanfrage verwendet. Sie werden weder verkauft noch an Dritte weitergegeben. Gemäss dem Bundesgesetz über den Datenschutz (DSG) haben Sie ein Recht auf Auskunft, Berichtigung und Löschung. Schreiben Sie dazu an {email}.",
    legalPropTitre: "Urheberrecht",
    legalPropTexte: "Texte, Fotografien und grafische Elemente dieser Website sind ausschliessliches Eigentum von {owner} und urheberrechtlich geschützt. Jede Vervielfältigung ohne Genehmigung ist untersagt.",
    legalCopyright: "Alle Rechte vorbehalten",
  },

  // === SITE ==================================================
  nom: "Zumaltugadu",
  meta: {
    titre:       "Zumaltugadu - Studio in Bettmeralp",
    description: "Charmantes Studio im Haus Zumaltugadu in Bettmeralp (Wallis), autofreies Bergdorf am Fusse des Aletschgletschers. Skifahren, Wandern und Alpenpanorama.",
  },

  // === HERO ==================================================
  hero: {
    accroche:  "Charmantes Studio · Bettmeralp · Wallis",
    titre:     "Zumaltugadu",
    sousTitre: "Ein Studio ganz aus Holz im Herzen von Bettmeralp, dem autofreien Dorf der Aletsch Arena: Pisten gleich vor der Tür, Alpenpanorama und himmlische Ruhe.",
    image:     IMG.hero,
  },

  // === PRÄSENTATION ==========================================
  presentation: {
    titre:   "Ein Holzidyll",
    titreEm: "vor der Alpenkulisse",
    // HTML erlaubt für <strong>
    texte: "Das Studio befindet sich im Haus <strong>Zumaltugadu</strong>, im Herzen von Bettmeralp, einem autofreien Walliser Bergdorf. Helle Holztäfer, Parkett, Essecke mit Eckbank und eine voll ausgestattete Küche: Hier legt man die Ski ab und fühlt sich sofort zu Hause. Draussen warten die Pisten, die Winterwege und der Blick auf die Gipfel.",
    imageMain:   { src: IMG.terrasse, alt: "Eingang des Studios Zumaltugadu mit Sitzbank in der Sonne" },
    imageAccent: { src: IMG.salon,    alt: "Wohnbereich des Studios Zumaltugadu" },
    legendePhoto: "Zumaltugadu · Bettmeralp",
    badge:        "Autofrei",
    // ZU BESTÄTIGEN : Fläche, Kapazität und Schlafplätze
    infos: [
      { icone: "🏠",  label: "Fläche",         valeur: "Zu bestätigen" },
      { icone: "👥",  label: "Kapazität",      valeur: "2 Personen (zu bestätigen)" },
      { icone: "🛏",  label: "Schlafplatz",    valeur: "Klappbett" },
      { icone: "🍳",  label: "Küche",          valeur: "Voll ausgestattet" },
      { icone: "⛷",  label: "Pisten",         valeur: "In der Nähe" },
    ],
  },

  // === GALERIE ===============================================
  // Gleiche Reihenfolge und gleiche Bilder wie in den anderen Sprachen.
  galerie: [
    { src: IMG.salon,          legende: "Wohnbereich und Essecke" },
    { src: IMG.salon2,         legende: "Klappbett" },
    { src: IMG.cuisine,        legende: "Voll ausgestattete Küche" },
    { src: IMG.terrasse,       legende: "Eingang und Sitzbank in der Sonne" },
    { src: IMG.departSki,      legende: "Skistart direkt vor dem Haus" },
    { src: IMG.villagePistes,  legende: "Bettmeralp und seine Bergbahnen" },
    { src: IMG.villageNuit,    legende: "Das Dorf bei Nacht" },
    { src: IMG.hero,           legende: "Kapelle Maria zum Schnee" },
  ],

  // === AUSSTATTUNG ===========================================
  // ZU BESTÄTIGEN : jede Zeile mit der tatsächlichen Ausstattung prüfen.
  equipements: [
    {
      icone: "🍽",
      titre: "Küche & Wohnen",
      liste: [
        "Voll ausgestattete Küche",
        "Induktionskochfeld und Backofen",
        "Wasserkocher",
        "Essecke mit Eckbank",
        "Fernseher",
        "WLAN (zu bestätigen)",
      ],
    },
    {
      icone: "🛏",
      titre: "Schlafen & Komfort",
      liste: [
        "Klappbett im grossen Schrank",
        "Holztäfer und Parkettboden",
        "Vorhänge und Bergblick",
        "Bettwäsche (zu bestätigen)",
        "Handtücher (zu bestätigen)",
      ],
    },
    {
      icone: "⛷",
      titre: "Berge & Aussenbereich",
      liste: [
        "Ebenerdiger Eingang",
        "Sitzbank und Platz vor der Tür",
        "Stühle und Tisch im Freien",
        "Skipisten in der Nähe",
        "Skiraum (zu bestätigen)",
      ],
    },
  ],

  // === UMGEBUNG ==============================================
  territoire: {
    titre:   "Am Fusse des",
    titreEm: "Aletschgletschers",
    // HTML erlaubt für <strong>
    texte: "Bettmeralp ist ein <strong>autofreies</strong> Bergdorf auf fast 2000 m Höhe in der Aletsch Arena im Wallis. Man erreicht es mit der Gondelbahn ab Betten. Das Gebiet führt zum Aletschgletscher, dem grössten Gletscher der Alpen und UNESCO-Weltnaturerbe.",
    image: {
      src:     IMG.villagePistes,
      alt:     "Bettmeralp und seine Bergbahnen unter Schnee",
      legende: "Bettmeralp · Chalets und Pisten",
    },
    // ZU BESTÄTIGEN vor der Veröffentlichung
    chiffres: [
      { valeur: "~2000 m",  label: "Höhe des Dorfes" },
      { valeur: "0",        label: "Autos im Dorf" },
      { valeur: "UNESCO",   label: "Region Aletschgletscher" },
    ],
    // ZU BESTÄTIGEN : Distanzen mit dem Ortsplan prüfen
    pointsInteret: [
      {
        distance: "vor Ort",
        nom:  "Kapelle Maria zum Schnee",
        desc: "Kleine weisse Kapelle auf dem Hügel des Dorfes, abends beleuchtet, mit Blick auf die Walliser Gipfel.",
      },
      {
        distance: "zu Fuss",
        nom:  "Pisten und Bergbahnen",
        desc: "Das Skigebiet der Aletsch Arena ist vom Dorf aus erreichbar, wenige Minuten vom Studio entfernt.",
      },
      {
        distance: "zu Fuss",
        nom:  "Geräumte Winterwege",
        desc: "Markierte Wege zum Spazieren und für Schneeschuhwanderungen, ruhig und ohne Verkehr.",
      },
      {
        distance: "Gondelbahn",
        nom:  "Bettmerhorn",
        desc: "Aussichtspunkt auf 2647 m mit Blick auf den Aletschgletscher und die Viertausender der Berner und Walliser Alpen.",
      },
      {
        distance: "Gondelbahn",
        nom:  "Betten und das Rhonetal",
        desc: "Gondelverbindung ins Tal, Ausgangspunkt für die Weiterreise ab Betten und dem Bahnhof.",
      },
    ],
  },

  // === AKTIVITÄTEN ===========================================
  activitesLead: "Die Aletsch Arena bietet einen riesigen Spielplatz gleich beim Studio: Schnee im Winter, Wanderwege und Bergseen im Sommer.",
  activites: [
    {
      icone:   "⛷",
      couleur: "linear-gradient(135deg, #2f5d86 0%, #173a58 100%)",
      image:   IMG.departSki,
      titre:   "Ski & Snowboard",
      desc: "Das Skigebiet der Aletsch Arena erstreckt sich von Bettmeralp über Riederalp bis nach Fiesch. Die Bahnen starten am Dorfrand: Ski anschnallen direkt vor der Tür und zum Aufwärmen zurück ins Studio.",
      tags: ["Ski vor der Tür", "Aletsch Arena", "Alle Niveaus"],
    },
    {
      icone:   "🥾",
      couleur: "linear-gradient(135deg, #3f6f8f 0%, #214761 100%)",
      image:   IMG.cheminNeige,
      titre:   "Schneeschuhe & Spaziergänge",
      desc: "Geräumte Winterwege führen durch das Dorf und den Wald. Ideal für einen Spaziergang in der Dämmerung, zu Fuss oder mit Schneeschuhen, ohne Autos und ohne Lärm.",
      tags: ["Autofrei", "Geräumte Wege", "Ruhe"],
    },
    {
      icone:   "🏔",
      couleur: "linear-gradient(135deg, #4a8ab5 0%, #2a5f80 100%)",
      image:   IMG.villagePistes,
      titre:   "Aletschgletscher",
      desc: "Ab Bettmeralp führt die Gondelbahn aufs Bettmerhorn (2647 m) zu einem Aussichtspunkt auf den grössten Gletscher der Alpen, UNESCO-Weltnaturerbe.",
      tags: ["UNESCO", "Bettmerhorn", "Panorama"],
    },
    {
      icone:   "🌲",
      couleur: "linear-gradient(135deg, #3f7a5a 0%, #1f4a35 100%)",
      image:   IMG.villageNuit,
      titre:   "Sommerwandern",
      // ZU BESTÄTIGEN : Sommerfoto ergänzen, falls vorhanden
      desc: "Im Sommer verbinden Höhenwege die Alpen, Arvenwälder und Bergseen der Region. Ein Wegnetz für alle Niveaus, mit dem Gletscher als Kulisse.",
      tags: ["Sommer", "Bergseen", "Alpen"],
    },
    {
      icone:   "⛪",
      couleur: "linear-gradient(135deg, #5a5f8a 0%, #33365c 100%)",
      image:   IMG.hero,
      titre:   "Kapelle & Dorf",
      desc: "Die Kapelle Maria zum Schnee thront über dem Dorf. Bei Sonnenuntergang wird sie beleuchtet und strahlt vor den Gipfeln: ein einfacher, eindrucksvoller Moment.",
      tags: ["Vor Ort", "Sonnenuntergang", "Foto"],
    },
    {
      icone:   "🌌",
      couleur: "linear-gradient(135deg, #2a3d5a 0%, #121c2c 100%)",
      image:   IMG.villageNuit,
      titre:   "Abende in den Bergen",
      desc: "Bei Einbruch der Nacht beginnt das Dorf zu leuchten. Nach dem Skifahren ein Spaziergang auf beleuchteten Wegen, dann ein Abendessen im Studio mit Blick auf die Berge.",
      tags: ["Ruhe", "Sterne", "Après-Ski"],
    },
  ],

  // === KONTAKT ===============================================
  // ZU BESTÄTIGEN : durch die echten Kontaktdaten ersetzen
  contact: {
    adresse:       "Haus Zumaltugadu\n3992 Bettmeralp, Wallis, Schweiz",
    telephone:     "+41 00 000 00 00",
    email:         "Noch einzutragen",
    sejourMinimum: "Je nach Saison festzulegen",
    acces:         "Autofreies Dorf\nGondelbahn ab Betten (SBB-Bahnhof)\nGepäcktransport einplanen",
    animaux:       "Zu bestätigen",
  },

  // === FOOTER ================================================
  footer: "Charmantes Studio in Bettmeralp (3992) - Wallis, Schweiz",

  // === IMPRESSUM & DATENSCHUTZ ===============================
  // ZU BESTÄTIGEN : mit den echten Angaben ausfüllen.
  legal: {

    // Eigentümer der Website und Verantwortlicher für die Datenbearbeitung
    proprietaire: "Zumaltugadu",

    // Vollständige Adresse des Verantwortlichen
    adresse: "Bettmeralp, 3992 Wallis, Schweiz",

    // E-Mail-Adresse für Auskunftsrechte
    emailRgpd: "Noch einzutragen",

    // Hosting-Anbieter (nach der Veröffentlichung ausfüllen)
    hebergeur: "Nach der Veröffentlichung einzutragen",

    // Erstellungsjahr der Website (für das Copyright)
    anneeCreation: 2026,
  },
};
