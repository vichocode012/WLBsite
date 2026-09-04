/* ============================================================
   WLB — logica del sitio
   Casi nunca vas a necesitar tocar este archivo.
   Para agregar imagenes edita data/galeria.js
   Para agregar videos edita data/videos.js
   Para editar la wiki edita js/wiki-data.js
   ============================================================ */
(function(){
  'use strict';

  /* ---------- cursor de cruz ---------- */
  var cur = document.getElementById('cur');
  document.addEventListener('mousemove', function(e){
    cur.style.left = e.clientX + 'px';
    cur.style.top  = e.clientY + 'px';
  });
  /* en pantallas tactiles no hay cursor: devolvemos el normal */
  if (window.matchMedia && window.matchMedia('(hover: none)').matches){
    cur.style.display = 'none';
    document.body.style.cursor = 'auto';
  }

  /* ---------- boton de movimiento ---------- */
  var mot = document.getElementById('mot');
  function setMotion(off){
    document.body.classList.toggle('stop', off);
    mot.textContent = 'MOTION: ' + (off ? 'OFF' : 'ON');
    mot.classList.toggle('off', off);
    try { localStorage.setItem('wlb-motion', off ? 'off' : 'on'); } catch(e){}
  }
  mot.addEventListener('click', function(){
    setMotion(!document.body.classList.contains('stop'));
  });
  var saved = null;
  try { saved = localStorage.getItem('wlb-motion'); } catch(e){}
  if (saved === 'off') setMotion(true);
  else if (saved === null && window.matchMedia
           && window.matchMedia('(prefers-reduced-motion: reduce)').matches) setMotion(true);

  /* ---------- navegacion entre paginas ---------- */
  function go(id){
    var pages = document.querySelectorAll('.page');
    for (var i=0;i<pages.length;i++) pages[i].classList.remove('on');
    var target = document.getElementById(id);
    if (target) target.classList.add('on');
    window.scrollTo(0,0);
  }
  document.addEventListener('click', function(e){
    var b = e.target.closest('[data-go]');
    if (b) { go(b.getAttribute('data-go')); return; }

    /* pestañas normales */
    var t = e.target.closest('[data-tab]');
    if (t){
      var box = t.closest('.wrap');
      var tbs = box.querySelectorAll('.tb');
      for (var i=0;i<tbs.length;i++) tbs[i].classList.remove('on');
      var tps = box.querySelectorAll('.tp');
      for (var j=0;j<tps.length;j++) tps[j].classList.remove('on');
      t.classList.add('on');
      var pane = document.getElementById(t.getAttribute('data-tab'));
      if (pane) pane.classList.add('on');
      return;
    }

    /* ficha de personaje -> abre la wiki en ese personaje */
    var c = e.target.closest('[data-wiki]');
    if (c){ go('p-wiki'); loadChar(c.getAttribute('data-wiki')); return; }

    /* cambiar de personaje dentro de la wiki */
    var s = e.target.closest('[data-char]');
    if (s){ loadChar(s.getAttribute('data-char')); return; }

    /* pestañas de la wiki */
    var w = e.target.closest('[data-wtab]');
    if (w){
      var wts = document.querySelectorAll('#wtabs .tb');
      for (var k=0;k<wts.length;k++) wts[k].classList.remove('on');
      w.classList.add('on');
      renderWiki(currentChar, w.getAttribute('data-wtab'));
    }
  });

  /* ---------- galerias (data/galeria.js) ---------- */
  function renderGalleries(){
    var boxes = document.querySelectorAll('[data-gallery]');
    for (var i=0;i<boxes.length;i++){
      var box  = boxes[i];
      var name = box.getAttribute('data-gallery');
      var html = '';
      for (var j=0;j<GALERIA.length;j++){
        var it = GALERIA[j];
        if (it.seccion !== name) continue;
        html += '<div class="gc">'
              +   '<img src="' + it.img + '" alt="' + it.titulo + '" loading="lazy">'
              +   '<div class="lb">' + it.titulo + '</div>'
              + '</div>';
      }
      box.innerHTML = html || '<p class="t">nothing here yet.</p>';
    }
  }

  /* ---------- videos (data/videos.js) ---------- */
  function renderVideos(){
    var boxes = document.querySelectorAll('[data-videos]');
    for (var i=0;i<boxes.length;i++){
      var box  = boxes[i];
      var name = box.getAttribute('data-videos');
      var html = '';
      for (var j=0;j<VIDEOS.length;j++){
        var v = VIDEOS[j];
        if (v.seccion !== name) continue;
        html += '<div class="vc">'
              +   '<div class="fr"><iframe src="https://www.youtube-nocookie.com/embed/' + v.id + '"'
              +     ' title="' + v.titulo + '" loading="lazy" allowfullscreen'
              +     ' allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>'
              +   '<div class="ti">' + v.titulo + '</div>'
              +   '<div class="de">' + v.desc + '</div>'
              + '</div>';
      }
      box.innerHTML = html || '<p class="t">nothing here yet.</p>';
    }
  }

  /* ---------- wiki ---------- */
  var currentChar = 'chordeva';

  function rows(list){
    var h = '<table>';
    for (var i=0;i<list.length;i++){
      h += '<tr><td>' + list[i][0] + '</td><td>' + list[i][1] + '</td></tr>';
    }
    return h + '</table>';
  }

  function renderWiki(key, tab){
    var d = WIKI[key];
    if (!d) return;
    document.getElementById('wbody').innerHTML = rows(d[tab] || d.look);
  }

  function loadChar(key){
    var d = WIKI[key];
    if (!d) return;
    currentChar = key;

    var root = document.getElementById('wiki');
    root.style.setProperty('--char', d.color);
    document.getElementById('wrole').textContent = d.rol;

    var chips = '';
    for (var i=0;i<d.chips.length;i++) chips += '<span class="chip">' + d.chips[i] + '</span>';
    document.getElementById('wchips').innerHTML = chips;

    var url = 'url("img/logos/' + key + '.png")';
    ['wl1','wl2','wl3'].forEach(function(id){
      var el = document.getElementById(id);
      el.style.webkitMaskImage = url;
      el.style.maskImage = url;
    });

    var sws = document.querySelectorAll('.sw');
    for (var j=0;j<sws.length;j++){
      sws[j].classList.toggle('on', sws[j].getAttribute('data-char') === key);
    }

    /* volver siempre a la primera pestaña */
    var wts = document.querySelectorAll('#wtabs .tb');
    for (var k=0;k<wts.length;k++) wts[k].classList.toggle('on', k === 0);
    renderWiki(key, 'look');
  }

  /* ---------- arranque ---------- */
  renderGalleries();
  renderVideos();
  loadChar('chordeva');

})();
