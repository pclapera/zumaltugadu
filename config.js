// @ts-nocheck
// =============================================================
//  ZUMALTUGADU - Configuration commune
//  Studio à Bettmeralp (Valais, Suisse)
//
//  Ce fichier contient ce qui ne dépend pas de la langue :
//    - l'inventaire des images (IMG)
//    - la liste des langues proposées (LANGUES)
//
//  Les textes sont dans un fichier par langue :
//    config.fr.js, config.de.js, config.en.js
//  Chaque fichier remplit CONFIGS.<code> avec le même schéma.
//  Les textes marqués "À CONFIRMER" sont à vérifier.
//
//  Pour ajouter une langue :
//    1. copier config.fr.js en config.xx.js et traduire
//    2. l'ajouter dans LANGUES ci-dessous
//    3. ajouter <script src="config.xx.js"></script> dans zumaltugadu.html
// =============================================================


// === LANGUES =================================================
// "code" : identifiant de la langue (clé de CONFIGS)
// "label" : texte affiché dans le menu déroulant
const LANGUES = [
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
];
// Langue principale : utilisée si la langue du navigateur n'est pas proposée
const LANGUE_PAR_DEFAUT = "de";

// Rempli par config.fr.js, config.de.js, config.en.js
const CONFIGS = {};


// === INVENTAIRE DES IMAGES ===================================
// Chaque image est nommée ici UNE SEULE FOIS.
// Pour changer une image, modifiez uniquement son chemin ci-dessous.
//
// Formats conseillés : .webp ou .jpg (poids web : viser < 500 Ko
// par photo, voir todo.txt). Le format .HEIC (iPhone) n'est pas
// supporté par les navigateurs : convertir en .jpg.

const IMG = {

  // -- Héro (fond plein écran) --------------------------------
  // Ratio : 16:9 ou plus large  |  Min : 1920 x 1080 px
  // Chapelle Maria zum Schnee au crépuscule, chaîne des Alpes valaisannes
  hero: "bettmeralp_chapelle.jpg",

  // -- Section présentation - grande photo (4:3) --------------
  // Entrée du studio, banc et terrasse au soleil
  terrasse: "images/terrasse.jpg",

  // -- Section présentation - vignette carrée -----------------
  // Séjour en bois clair
  salon: "images/salon.jpg",

  // -- Galerie - intérieur ------------------------------------
  salon2:   "images/salon_1.jpg",
  cuisine:  "images/cuisine.jpg",

  // -- Galerie - extérieur ------------------------------------
  departSki: "images/depart_ski.jpg",

  // -- Bettmeralp (dossier principal) -------------------------
  villagePistes: "bettmeralp_neige_1.jpg",   // village et remontées, plein soleil
  villageNuit:   "bettmeralp_neige_2.jpg",   // village de nuit depuis le balcon
  cheminNeige:   "bettmeralp_neige.jpg",     // chemin damé au crépuscule (portrait)
};
