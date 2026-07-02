/* Fin del Mundo Propiedades — lógica del sitio (demo, sin backend) */

/* Iconos SVG inline (reemplazan emojis) usados en contenido generado por JS. */
const ICONS = {
  pin: '<svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  ruler: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
  bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 18v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6"/><path d="M2 18h20"/><path d="M4 12V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"/></svg>',
  droplet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
  car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11"/><rect x="2" y="11" width="20" height="7" rx="2"/><circle cx="7" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>'
};

document.addEventListener('DOMContentLoaded', () => {
  initPropertyDetail();
  initMenu();
  initReveal();
  initWaFloat();
  initWaLinks();
  initHeroSearch();
  initFeaturedGrid();
  initCatalog();
  initOwnersForm();
  initContactForm();
  initAlertForm();
});

/* ---------- Helpers ---------- */

function formatPrice(precio, moneda) {
  const num = precio.toLocaleString('es-AR');
  return moneda === 'USD' ? `USD ${num}` : `$ ${num}`;
}

function specsResumen(p) {
  const partes = [];
  if (p.ambientes) partes.push(`${p.ambientes} amb.`);
  if (p.m2Totales) partes.push(`${p.m2Totales} m²`);
  if (p.dormitorios) partes.push(`${p.dormitorios} dorm.`);
  return partes.join(' · ');
}

function waLink(p) {
  const url = window.location.origin + window.location.pathname.replace(/[^/]+$/, '') + `propiedad.html?id=${p.id}`;
  const msg = `Hola! Me interesa la propiedad "${p.titulo}" (ID: ${p.id}) - ${url}`;
  return `https://wa.me/${AGENCIA.whatsapp}?text=${encodeURIComponent(msg)}`;
}

/* Construye una URL de Unsplash con el ancho justo para cada contexto
   y negociación automática de formato (WebP/AVIF vía Accept header). */
function img(url, width, quality = 70) {
  return `${url}?w=${width}&q=${quality}&auto=format&fit=crop`;
}

/* ---------- Menú mobile ---------- */

function initMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

/* ---------- Reveal on scroll ----------
   Un solo observer para todo el sitio. initReveal() puede llamarse varias
   veces (por ejemplo después de inyectar tarjetas por JS): la clase
   .reveal-bound evita observar dos veces el mismo elemento. */

let revealObserver = null;

function initReveal(scope = document) {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }
  scope.querySelectorAll('.reveal:not(.reveal-bound)').forEach(el => {
    el.classList.add('reveal-bound');
    revealObserver.observe(el);
  });
}

/* ---------- WhatsApp flotante ---------- */

function initWaFloat() {
  const btn = document.querySelector('.wa-float');
  if (!btn) return;
  const msg = `Hola! Estoy viendo ${AGENCIA.nombre} y quería consultar por una propiedad.`;
  btn.href = `https://wa.me/${AGENCIA.whatsapp}?text=${encodeURIComponent(msg)}`;
}

/* Enlaces genéricos de WhatsApp fuera de la ficha de propiedad (footer, contacto).
   En propiedad.html, initPropertyDetail() sobreescribe estos mismos elementos
   con el mensaje específico de la propiedad. */
function initWaLinks() {
  const msg = `Hola! Estoy viendo ${AGENCIA.nombre} y quería hacer una consulta.`;
  const link = `https://wa.me/${AGENCIA.whatsapp}?text=${encodeURIComponent(msg)}`;
  document.querySelectorAll('.js-wa-link').forEach(a => a.href = link);
}

/* ---------- Buscador Home (autocompletar + tabs) ---------- */

function initHeroSearch() {
  const form = document.getElementById('hero-search-form');
  if (!form) return;

  const tabs = form.querySelectorAll('.hero-search-tabs button');
  const opInput = form.querySelector('input[name="operacion"]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      opInput.value = tab.dataset.op;
    });
  });

  const zonaInput = form.querySelector('#hero-zona');
  const list = form.querySelector('#hero-autocomplete');
  const barrios = [...new Set(PROPIEDADES.map(p => p.barrio))];

  zonaInput.addEventListener('input', () => {
    const q = zonaInput.value.trim().toLowerCase();
    list.innerHTML = '';
    if (!q) { list.classList.remove('open'); return; }
    const matches = barrios.filter(b => b.toLowerCase().includes(q));
    if (!matches.length) {
      list.innerHTML = `<li class="ac-empty">Sin coincidencias — probá con otro barrio</li>`;
    } else {
      matches.forEach(b => {
        const count = PROPIEDADES.filter(p => p.barrio === b).length;
        const li = document.createElement('li');
        li.innerHTML = `<span>${ICONS.pin} ${b}</span><small>${count} propiedades</small>`;
        li.addEventListener('click', () => { zonaInput.value = b; list.classList.remove('open'); });
        list.appendChild(li);
      });
    }
    list.classList.add('open');
  });

  document.addEventListener('click', (e) => {
    if (!form.contains(e.target)) list.classList.remove('open');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (opInput.value) params.set('operacion', opInput.value);
    if (zonaInput.value) params.set('zona', zonaInput.value);
    const tipo = form.querySelector('select[name="tipo"]').value;
    if (tipo) params.set('tipo', tipo);
    window.location.href = `propiedades.html?${params.toString()}`;
  });
}

/* ---------- Grid de destacadas (Home) ---------- */

function initFeaturedGrid() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  const destacadas = PROPIEDADES.filter(p => p.destacada);
  grid.innerHTML = destacadas.map(cardPropHTML).join('');
  bindFavButtons(grid);
  initReveal();
}

/* Tarjeta de propiedad con "stretched link": un único <a> semántico dentro
   del título (accesible, un solo destino por tarjeta) extendido con ::after
   a toda la superficie de la card vía CSS. Evita anidar el botón de favorito
   dentro de un <a> (HTML inválido) y habilita el fav-btn sin JS extra. */
function cardPropHTML(p) {
  const src = img(p.imagenes[0], 640);
  const srcset = `${img(p.imagenes[0], 480)} 480w, ${img(p.imagenes[0], 640)} 640w, ${img(p.imagenes[0], 960)} 960w`;
  return `
  <article class="card-prop reveal">
    <div class="card-prop-media">
      <img src="${src}" srcset="${srcset}" sizes="(max-width: 640px) 92vw, (max-width: 980px) 45vw, 300px" alt="${p.titulo}" loading="lazy" decoding="async" width="640" height="480">
      <span class="badge ${p.operacion === 'alquiler' ? 'badge--alquiler' : ''}">${p.operacion === 'venta' ? 'Venta' : 'Alquiler'}</span>
      <button type="button" class="fav-btn" data-fav="${p.id}" aria-label="Guardar en favoritos">♡</button>
    </div>
    <div class="card-prop-body">
      <div class="card-prop-price">${formatPrice(p.precio, p.moneda)}${p.operacion === 'alquiler' ? '<small> /mes</small>' : ''}</div>
      <h3 class="card-prop-title"><a class="card-prop-link" href="propiedad.html?id=${p.id}">${p.titulo}</a></h3>
      <div class="card-prop-loc">${ICONS.pin} ${p.barrio}, Ushuaia</div>
      <div class="card-prop-specs">
        <span>${specsResumen(p)}</span>
      </div>
    </div>
  </article>`;
}

function bindFavButtons(scope) {
  scope.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
    });
  });
}

/* ---------- Catálogo con filtros ---------- */

function initCatalog() {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const state = {
    operacion: params.get('operacion') || '',
    tipo: params.get('tipo') || '',
    zona: params.get('zona') || '',
    precioMax: '',
    ambientes: '',
    dormitorios: '',
    cocheras: '',
    amenities: []
  };

  const els = {
    operacion: document.getElementById('f-operacion'),
    tipo: document.getElementById('f-tipo'),
    zona: document.getElementById('f-zona'),
    precioMax: document.getElementById('f-precio-max'),
    ambientes: document.getElementById('f-ambientes'),
    dormitorios: document.getElementById('f-dormitorios'),
    cocheras: document.getElementById('f-cocheras'),
    amenityChips: document.querySelectorAll('.chip-check input'),
    reset: document.getElementById('f-reset'),
    activeChips: document.getElementById('active-chips'),
    count: document.getElementById('results-count')
  };

  if (els.operacion) els.operacion.value = state.operacion;
  if (els.zona) els.zona.value = state.zona;
  if (els.tipo) els.tipo.value = state.tipo;

  function readState() {
    state.operacion = els.operacion.value;
    state.tipo = els.tipo.value;
    state.zona = els.zona.value;
    state.precioMax = els.precioMax.value;
    state.ambientes = els.ambientes.value;
    state.dormitorios = els.dormitorios.value;
    state.cocheras = els.cocheras.value;
    state.amenities = [...els.amenityChips].filter(c => c.checked).map(c => c.value);
  }

  function applyFilters() {
    readState();
    let result = PROPIEDADES.slice();

    if (state.operacion) result = result.filter(p => p.operacion === state.operacion);
    if (state.tipo) result = result.filter(p => p.tipo === state.tipo);
    if (state.zona) result = result.filter(p => p.barrio.toLowerCase().includes(state.zona.toLowerCase()));
    if (state.precioMax) result = result.filter(p => p.precio <= Number(state.precioMax));
    if (state.ambientes) result = result.filter(p => p.ambientes >= Number(state.ambientes));
    if (state.dormitorios) result = result.filter(p => p.dormitorios >= Number(state.dormitorios));
    if (state.cocheras) result = result.filter(p => p.cocheras >= Number(state.cocheras));
    if (state.amenities.length) result = result.filter(p => state.amenities.every(a => p.amenities.includes(a)));

    renderGrid(result);
    renderChips();
    syncUrl();
  }

  function renderGrid(list) {
    els.count.innerHTML = `<span>${list.length}</span> propiedades encontradas`;
    if (!list.length) {
      grid.innerHTML = `<div class="empty-state"><h3>No encontramos propiedades con estos filtros</h3><p>Probá ampliar el rango de precio o sacar alguna comodidad del filtro.</p></div>`;
      return;
    }
    grid.innerHTML = list.map(cardPropHTML).join('');
    bindFavButtons(grid);
    initReveal();
  }

  function renderChips() {
    const chips = [];
    if (state.operacion) chips.push({ label: state.operacion === 'venta' ? 'Venta' : 'Alquiler', clear: () => { els.operacion.value = ''; } });
    if (state.tipo) chips.push({ label: els.tipo.options[els.tipo.selectedIndex].text, clear: () => { els.tipo.value = ''; } });
    if (state.zona) chips.push({ label: state.zona, clear: () => { els.zona.value = ''; } });
    if (state.precioMax) chips.push({ label: `Hasta ${Number(state.precioMax).toLocaleString('es-AR')}`, clear: () => { els.precioMax.value = ''; } });
    if (state.ambientes) chips.push({ label: `${state.ambientes}+ ambientes`, clear: () => { els.ambientes.value = ''; } });
    if (state.dormitorios) chips.push({ label: `${state.dormitorios}+ dormitorios`, clear: () => { els.dormitorios.value = ''; } });
    if (state.cocheras) chips.push({ label: `${state.cocheras}+ cocheras`, clear: () => { els.cocheras.value = ''; } });
    state.amenities.forEach(a => {
      chips.push({ label: a, clear: () => { [...els.amenityChips].find(c => c.value === a).checked = false; } });
    });

    els.activeChips.innerHTML = chips.map((c, i) => `<span class="active-chip">${c.label} <button type="button" data-i="${i}">✕</button></span>`).join('');
    els.activeChips.querySelectorAll('button').forEach((btn, i) => {
      btn.addEventListener('click', () => { chips[i].clear(); applyFilters(); });
    });
  }

  function syncUrl() {
    const p = new URLSearchParams();
    if (state.operacion) p.set('operacion', state.operacion);
    if (state.tipo) p.set('tipo', state.tipo);
    if (state.zona) p.set('zona', state.zona);
    history.replaceState(null, '', `${window.location.pathname}?${p.toString()}`);
  }

  [els.operacion, els.tipo, els.zona, els.precioMax, els.ambientes, els.dormitorios, els.cocheras].forEach(el => {
    el.addEventListener('input', applyFilters);
    el.addEventListener('change', applyFilters);
  });
  els.amenityChips.forEach(chip => {
    chip.addEventListener('change', () => {
      chip.closest('.chip-check').classList.toggle('checked', chip.checked);
      applyFilters();
    });
  });
  els.reset.addEventListener('click', () => {
    els.operacion.value = ''; els.tipo.value = ''; els.zona.value = '';
    els.precioMax.value = ''; els.ambientes.value = ''; els.dormitorios.value = ''; els.cocheras.value = '';
    els.amenityChips.forEach(c => { c.checked = false; c.closest('.chip-check').classList.remove('checked'); });
    applyFilters();
  });

  applyFilters();
}

/* ---------- Ficha de propiedad ----------
   Se ejecuta primero en el DOMContentLoaded y fija el src de la imagen
   principal como primera operación: es el elemento candidato a LCP de
   esta página, así que su descarga debe arrancar lo antes posible. */

function initPropertyDetail() {
  const root = document.getElementById('prop-detail');
  if (!root) return;

  const id = Number(new URLSearchParams(window.location.search).get('id'));
  const p = PROPIEDADES.find(x => x.id === id) || PROPIEDADES[0];

  const mainImg = document.getElementById('gallery-main-img');
  mainImg.src = img(p.imagenes[0], 1000);
  mainImg.srcset = `${img(p.imagenes[0], 700)} 700w, ${img(p.imagenes[0], 1000)} 1000w, ${img(p.imagenes[0], 1400)} 1400w`;
  mainImg.sizes = '(max-width: 980px) 100vw, 780px';
  mainImg.alt = p.titulo;

  document.title = `${p.titulo} | ${AGENCIA.nombre}`;
  document.getElementById('prop-titulo').textContent = p.titulo;
  document.getElementById('prop-barrio').textContent = `${p.barrio}, Ushuaia`;
  document.getElementById('prop-id').textContent = `ID ${p.id}`;
  document.getElementById('prop-operacion').textContent = p.operacion === 'venta' ? 'Venta' : 'Alquiler';
  document.getElementById('prop-precio').textContent = formatPrice(p.precio, p.moneda) + (p.operacion === 'alquiler' ? ' /mes' : '');
  document.getElementById('prop-precio-sidebar').textContent = formatPrice(p.precio, p.moneda) + (p.operacion === 'alquiler' ? ' /mes' : '');
  document.getElementById('prop-desc').textContent = p.descripcion;
  document.getElementById('prop-breadcrumb').textContent = p.titulo;

  const specs = [
    { icon: ICONS.ruler, val: `${p.m2Totales} m²`, label: 'Superficie total' },
    { icon: ICONS.home, val: `${p.m2Cubiertos} m²`, label: 'Cubiertos' },
    { icon: ICONS.grid, val: p.ambientes || '-', label: 'Ambientes' },
    { icon: ICONS.bed, val: p.dormitorios || '-', label: 'Dormitorios' },
    { icon: ICONS.droplet, val: p.banos || '-', label: 'Baños' },
    { icon: ICONS.car, val: p.cocheras || '0', label: 'Cocheras' },
    { icon: ICONS.calendar, val: p.antiguedad, label: 'Antigüedad' }
  ];
  document.getElementById('prop-specs').innerHTML = specs.map(s => `
    <div class="spec-item"><span class="icon" aria-hidden="true">${s.icon}</span><div><strong>${s.val}</strong><span>${s.label}</span></div></div>
  `).join('');

  document.getElementById('prop-amenities').innerHTML = p.amenities.map(a => `<span>${a}</span>`).join('');

  const thumbsWrap = document.getElementById('gallery-thumbs');
  thumbsWrap.innerHTML = p.imagenes.slice(1, 3).map((image, i) => `
    <div data-idx="${i + 1}"><img src="${img(image, 480)}" alt="${p.titulo} - foto ${i + 2}" loading="lazy" decoding="async" width="480" height="360">${i === 1 && p.imagenes.length > 3 ? `<span class="gallery-more">+${p.imagenes.length - 3} fotos</span>` : ''}</div>
  `).join('');
  root.querySelectorAll('[data-idx]').forEach(el => {
    el.addEventListener('click', () => {
      const idx = Number(el.dataset.idx);
      mainImg.srcset = '';
      mainImg.src = img(p.imagenes[idx], 1000);
    });
  });

  const descBox = document.getElementById('prop-desc');
  const descToggle = document.getElementById('prop-desc-toggle');
  descBox.classList.add('collapsed');
  descToggle.addEventListener('click', () => {
    descBox.classList.toggle('collapsed');
    descToggle.textContent = descBox.classList.contains('collapsed') ? 'Leer más' : 'Leer menos';
  });

  const mapFrame = document.getElementById('prop-map');
  if (mapFrame) {
    mapFrame.src = `https://maps.google.com/maps?q=Ushuaia,${encodeURIComponent(p.barrio)}&z=14&output=embed`;
  }

  const link = waLink(p);
  document.querySelectorAll('.js-wa-link').forEach(a => a.href = link);

  const STOPWORDS = new Set(['de', 'del', 'la', 'los', 'las', 'y']);
  const agentInitials = AGENCIA.nombre.split(' ')
    .filter(w => !STOPWORDS.has(w.toLowerCase()))
    .map(w => w[0])
    .slice(0, 2)
    .join('');
  document.querySelectorAll('.js-agent-initials').forEach(el => el.textContent = agentInitials);

  const miniForm = document.getElementById('mini-contact-form');
  if (miniForm) {
    miniForm.querySelector('textarea').value = `Hola, me interesa la propiedad "${p.titulo}" (ID: ${p.id}). ¿Podrían darme más información?`;
    miniForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showFormSuccess(miniForm, '¡Gracias! Es una demo: en el sitio real este formulario llega directo al mail/CRM de la inmobiliaria.');
    });
  }

  const similarWrap = document.getElementById('similar-grid');
  if (similarWrap) {
    const similares = PROPIEDADES.filter(x => x.id !== p.id && (x.barrio === p.barrio || x.tipo === p.tipo)).slice(0, 3);
    similarWrap.innerHTML = similares.map(cardPropHTML).join('');
    bindFavButtons(similarWrap);
  }

  const mobileBar = document.getElementById('mobile-cta-bar');
  if (mobileBar) mobileBar.querySelector('.js-wa-link').href = link;

  initReveal();
}

/* ---------- Formulario Propietarios ---------- */

function initOwnersForm() {
  const form = document.getElementById('owners-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showFormSuccess(form, '¡Listo! En el sitio real, un tasador se contacta en menos de 24hs. (Formulario de demo — no se envían datos)');
  });
}

/* ---------- Formulario Contacto ---------- */

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showFormSuccess(form, '¡Mensaje enviado! (Formulario de demo — conectar a Formspree o al CRM para producción)');
  });
}

/* ---------- Alertas de búsqueda ---------- */

function initAlertForm() {
  const form = document.getElementById('alert-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showFormSuccess(form, '¡Alerta creada! Te avisaríamos por email ante cada propiedad nueva que matchee tu búsqueda.');
  });
}

function showFormSuccess(form, message) {
  let box = form.querySelector('.form-success');
  if (!box) {
    box = document.createElement('div');
    box.className = 'form-success';
    form.appendChild(box);
  }
  box.textContent = message;
  form.reset();
}
