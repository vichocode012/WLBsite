# Cómo actualizar la página

Guía para vos, no para nadie más. Lee de arriba a abajo la primera vez.

---

## Qué es cada carpeta

```
index.html              la página. Casi nunca la tocas.
css/style.css           todos los colores, tamaños y animaciones.
js/site.js              la lógica. NO la toques.
js/wiki-data.js         el texto de las fichas de personaje.
data/galeria.js         LA LISTA DE IMÁGENES.  ← esta la editas seguido
data/videos.js          LA LISTA DE VIDEOS.    ← esta también
img/                    las imágenes. Aquí subes los archivos.
fonts/                  las tipografías.
```

Las dos que vas a tocar de verdad son **`data/galeria.js`** y **`data/videos.js`**.

---

## Primera vez: subir todo a internet

Esto se hace **una sola vez**. Después nunca más.

### 1. Crear el repositorio en GitHub

1. Anda a [github.com](https://github.com) y entra a tu cuenta.
2. Arriba a la derecha, botón **+** → **New repository**.
3. Nombre: `wlb-site` (o el que quieras).
4. Déjalo en **Public**. No marques nada más.
5. **Create repository**.

### 2. Subir los archivos

1. En la página que se abre, click en **uploading an existing file**.
2. Arrastra **el contenido** de la carpeta del sitio: `index.html`, y las carpetas `css`, `js`, `data`, `img`, `fonts`.
   
   Importante: arrastra lo que está *dentro* de la carpeta, no la carpeta misma. Si al terminar ves `index.html` en la lista principal, está bien. Si ves una carpeta que hay que abrir para encontrarlo, está mal.
3. Abajo, en el cuadro de texto, escribe cualquier cosa (por ejemplo `primera subida`).
4. **Commit changes**.

### 3. Conectar Netlify

1. Anda a [netlify.com](https://netlify.com) y entra con tu cuenta de GitHub.
2. **Add new site** → **Import an existing project** → **GitHub**.
3. Autoriza si te lo pide, y elige tu repositorio `wlb-site`.
4. Te va a preguntar por *build command* y *publish directory*: **déjalos vacíos**. Este sitio no necesita compilarse.
5. **Deploy**.

En un minuto tienes una URL. Para cambiarle el nombre: **Site configuration** → **Change site name**.

**Desde ahora, cada vez que cambies algo en GitHub, Netlify actualiza la página sola.** No tienes que volver a entrar a Netlify nunca.

---

## Agregar una imagen nueva

Esto es lo que vas a hacer más seguido. Se puede desde el celular.

### 1. Subir el archivo

1. En tu repositorio de GitHub, entra a la carpeta **`img`**.
2. Arriba a la derecha: **Add file** → **Upload files**.
3. Arrastra tu PNG o JPG.
4. **Commit changes**.

Consejo: ponle nombres sin espacios ni tildes. `seph_v2.png` sí, `Seph versión 2.png` no.

### 2. Agregarla a la lista

1. Entra a la carpeta **`data`** y click en **`galeria.js`**.
2. Arriba a la derecha del archivo hay un **lápiz** ✏️. Click.
3. Busca la sección donde quieres que aparezca y agrega una línea:

```js
{ img: "img/seph_v2.png", titulo: "Seph — rediseño", seccion: "work-drawings" },
```

4. **Commit changes**.

Listo. En un minuto está en la página.

### Las secciones disponibles

| escribes en `seccion` | aparece en |
|---|---|
| `revival-concepts` | Revival ZRO → Concepts |
| `revival-sprites`  | Revival ZRO → Sprites |
| `work-drawings`    | My Work → Drawings |
| `work-3d`          | My Work → 3D |
| `work-other`       | My Work → Other |

---

## Agregar un video

1. Copia la URL del video de YouTube: `youtube.com/watch?v=NJiSk1VszkE`
2. El **id** es lo que viene después de `v=` → `NJiSk1VszkE`
3. Edita **`data/videos.js`** y agrega:

```js
{ id: "NJiSk1VszkE", titulo: "Nombre corto", desc: "tu descripción", seccion: "revival" },
```

Secciones: `revival`, `animation`, `college`.

---

## Las tres reglas que hay que respetar

Es lo único que puede romperse.

**1. Cada línea termina en coma.**

```js
{ img: "img/a.png", titulo: "A", seccion: "work-3d" },   ← sí
{ img: "img/a.png", titulo: "A", seccion: "work-3d" }    ← falta la coma
```

**2. El texto siempre entre comillas dobles.**

```js
titulo: "Seph",     ← sí
titulo: Seph,       ← no
```

**3. Si tu texto lleva comillas dentro, ponles una barra invertida.**

```js
desc: "inspired by \"give me a drink bartender\"",
```

Si rompes algo, la sección se ve vacía. **No se pierde nada** — deshaces el cambio en GitHub (History → el cambio → botón de revertir) y vuelve como estaba.

---

## Cambiar textos de personaje

Está todo en **`js/wiki-data.js`**. Cada fila es `["Etiqueta", "Texto"]`. Cambia lo que está entre comillas y ya. Mismas tres reglas de arriba.

---

## Cambiar colores

En **`css/style.css`**, arriba del todo, hay un bloque `:root`. Ahí están todos los colores del sitio con nombre:

```css
--pop:#ff1d1d;      /* el rojo */
--acc:#659489;      /* el verde */
--bone:#f0ecf2;     /* el blanco hueso */
```

Cambias el código de color ahí y cambia en toda la página de una.

**`--tick:2s`** es la velocidad de todo el movimiento. Súbelo para que todo vaya más lento, bájalo para más nervioso.

---

## Ver la página antes de subirla

Doble click en `index.html` y se abre en el navegador. Funciona todo menos algún detalle mínimo. Si se ve bien ahí, se va a ver bien online.

---

## Pendientes que quedaron anotados

- Reemplazar el arte de Seph cuando termines el rediseño (`img/seph_card.jpg`, `img/seph_model.jpg`)
- Llenar `work-3d` y `work-other` con lo de Blender y la universidad
- Agregar el widget de Google Translate
- Los links de Bluesky, Ko-fi, itch.io y YouTube en `index.html` están apuntando a las páginas principales — hay que ponerles tus URLs reales. Búscalos en la sección `<div class="socs">`.

---

## Poner música

1. Consigue tu archivo en **mp3**, ojalá menos de 5 MB.
2. Renómbralo exactamente **`theme.mp3`**
3. Súbelo a la carpeta **`audio/`** en GitHub.

Listo. El reproductor aparece solo debajo del wordmark, con el volumen al 5%.

**Si no subes nada, el reproductor no aparece** — no se rompe nada, simplemente no está.

Una cosa importante: **la música no puede sonar sola al abrir la página.** Todos los navegadores lo bloquean desde hace años, no hay forma de saltárselo. El usuario tiene que darle play. Por eso está el botón ▶ al lado del slider.

Para cambiar el volumen inicial, en `index.html` busca `id="m-vol"` y cambia el `value="5"`.
