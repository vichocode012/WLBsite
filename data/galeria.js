/* ============================================================
   GALERIA — la lista de imagenes del sitio.

   ESTE ES EL ARCHIVO QUE EDITAS PARA AGREGAR IMAGENES.
   No necesitas tocar index.html nunca.

   Cada imagen es una linea entre llaves { }, asi:

       { img: "img/nombre.jpg", titulo: "Lo que dice debajo", seccion: "work-drawings" },

   - img     -> donde esta el archivo. Sube la imagen a la carpeta img/
                y escribe aqui el mismo nombre.
   - titulo  -> el texto que aparece debajo de la imagen.
   - seccion -> en que parte del sitio aparece. Las opciones son:
                  "revival-concepts"  -> Revival ZRO / pestaña Concepts
                  "revival-sprites"   -> Revival ZRO / pestaña Sprites
                  "work-drawings"     -> My Work / Drawings
                  "work-3d"           -> My Work / 3D
                  "work-other"        -> My Work / Other

   REGLAS: cada linea termina en coma. El texto va entre comillas.
   Si algo deja de cargar, casi siempre es una coma o una comilla que falta.
   ============================================================ */

const GALERIA = [

  /* ---------- Revival ZRO / Concepts ---------- */
  { img: "img/charon_early.jpg",      titulo: "Charon — early concept",   seccion: "revival-concepts" },
  { img: "img/seph_early.jpg",        titulo: "Seph — early concept",     seccion: "revival-concepts" },
  { img: "img/redesign_sketches.jpg", titulo: "Redesign sketches",        seccion: "revival-concepts" },
  { img: "img/chordeva_ref.jpg",      titulo: "Chordeva — final ref",     seccion: "revival-concepts" },
  { img: "img/freya_model.jpg",       titulo: "Freya — model + concept",  seccion: "revival-concepts" },
  { img: "img/seph_model.jpg",        titulo: "Seph — model + concept",   seccion: "revival-concepts" },
  { img: "img/charon_model.jpg",      titulo: "Charon — model + concept", seccion: "revival-concepts" },

  /* ---------- Revival ZRO / Sprites ---------- */
  { img: "img/walk_chordeva.jpg", titulo: "Chordeva", seccion: "revival-sprites" },
  { img: "img/walk_charon.jpg",   titulo: "Charon",   seccion: "revival-sprites" },
  { img: "img/walk_seph.jpg",     titulo: "Seph",     seccion: "revival-sprites" },
  { img: "img/walk_freya.jpg",    titulo: "Freya",    seccion: "revival-sprites" },

  /* ---------- My Work / Drawings ---------- */
  { img: "img/aethyx.jpg",   titulo: "Aethyx — OC / character design", seccion: "work-drawings" },
  { img: "img/edn_logo.jpg", titulo: "EDN — logo",                     seccion: "work-drawings" },
  { img: "img/wlb_logo.jpg", titulo: "WLB — logo",                     seccion: "work-drawings" },

  /* ---------- My Work / 3D ----------
     Todavia vacio. Cuando subas un render de Blender, copia una linea
     de arriba, cambia el nombre del archivo y pon seccion: "work-3d"
  */

  /* ---------- My Work / Other ----------
     Igual que arriba, con seccion: "work-other"
  */

];
