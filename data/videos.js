/* ============================================================
   VIDEOS — la lista de videos de YouTube del sitio.

   Para agregar uno, copia una linea y cambia los datos:

       { id: "AbCdEfGh123", titulo: "Como se llama", desc: "que es", seccion: "revival" },

   - id      -> el codigo del video de YouTube. Esta en la URL, despues de "v=".
                Ejemplo: youtube.com/watch?v=NJiSk1VszkE  ->  el id es NJiSk1VszkE
   - titulo  -> nombre corto que aparece arriba.
   - desc    -> tu descripcion, la que aparece debajo.
   - seccion -> "revival", "animation" o "college".

   Los de seccion "revival" tambien aparecen dentro de Revival ZRO / Videos.
   El orden de esta lista es el orden en que se muestran.
   ============================================================ */

const VIDEOS = [

  /* ---------- REVIVAL ---------- */
  { id: "qeQSV0oGwg8", titulo: "First prototype",
    desc: "one of the first prototypes of revival.", seccion: "revival" },

  { id: "TsKL8l5vPag", titulo: "Revival — first hand-made version",
    desc: "first version of revival that was hand made. no ai used.", seccion: "revival" },

  { id: "eVnpL4zpv9Q", titulo: "Revival Arcade — the one that worked",
    desc: "best example of the first revival. has almost everything i wanted revival to be.", seccion: "revival" },

  { id: "pV-NMsIgZhM", titulo: "Hook sword — first weapon",
    desc: "showcase of the first weapon chordeva was going to have, the hook sword. built with godot state charts. sprites made by me.", seccion: "revival" },

  { id: "zJ2wq0q8vrM", titulo: "Blender models into Godot",
    desc: "the first time i uploaded blender models to godot, with help from deepseek and trae.", seccion: "revival" },

  { id: "NJiSk1VszkE", titulo: "Revival ZRO — first version",
    desc: "the first version of revival zro. at the time i just asked trae to add more and more stuff, i didn't know what i wanted. the idea to make revival a cube game appeared one day and i just asked for it without planning much. shows the first animations for the 4 characters, some models and sprites, and mostly the main ideas and style for revival:zro — my current project.", seccion: "revival" },

  { id: "PpNCGepOFeg", titulo: "Cutscene storyboard",
    desc: "a small, rough storyboard for a revival:zro cutscene that i forgot about because i focused too much on character models and college.", seccion: "revival" },

  /* ---------- ANIMATION ---------- */
  { id: "Q64oVjE40hQ", titulo: "First animation ever",
    desc: "my first animation ever, made in clip studio paint.", seccion: "animation" },

  { id: "Zx_dxrqifGw", titulo: "Give me a drink bartender",
    desc: "animation inspired by \"give me a drink bartender\".", seccion: "animation" },

  { id: "bxtcTES4yuA", titulo: "Recent animation",
    desc: "one of the most recent animations i made — for a college assignment.", seccion: "animation" },

  { id: "kNHdQnwy2cc", titulo: "Food stop motion",
    desc: "short animation for college. we were meant to use pieces of food for a stop motion. we used a phone app and i drew on top of it in clip studio paint. there was meant to be a story but i just rawdogged the animation.", seccion: "animation" },

  /* ---------- COLLEGE ---------- */
  { id: "bzrOM-ceeO4", titulo: "Small Godot project",
    desc: "super brief and simple godot project for college.", seccion: "college" },

  { id: "Wd6tiLcUdwI", titulo: "First character model",
    desc: "the first model i made, with a mixamo animation. very bad, but it was my very first character model.", seccion: "college" },

  { id: "ggV6shDSNPI", titulo: "Skateboarding lamp",
    desc: "a blender animation with a lamp doing skateboard tricks. also for college.", seccion: "college" },

  { id: "W0X0I02TE4g", titulo: "Fire effect exam",
    desc: "an exam where i had to make a fire effect from one picture, inside godot with the gpu particles node, and then show the values i used.", seccion: "college" },

];
