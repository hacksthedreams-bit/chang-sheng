/* ═══════════════════════════════════════════════════════
   CHANG SHENG 昌盛酒家 — MAIN JS
   IIFE + window.__BRAND__ pattern
   ═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Brand config ── */
  window.__BRAND__ = {
    name: 'Chang Sheng 昌盛酒家',
    phone: '56954663415',
    address: 'Av. Francia N° 406, Batuco'
  };

  /* ── Product Catalog ── */
  var PRODUCTS = [
    {id:"a01",catId:"aperitivos",name:"Arrollado Primavera (2 und)",price:3500,desc:"Crujientes rollitos rellenos de verduras y carne",emoji:"🥟"},
    {id:"a02",catId:"aperitivos",name:"Arrollado de Camarón (2 und)",price:4500,desc:"Rollitos de masa fina con relleno de camarón",emoji:"🦐"},
    {id:"a03",catId:"aperitivos",name:"Wantán Frito (6 und)",price:4000,desc:"Masa crujiente rellena de carne de cerdo",emoji:"🥟"},
    {id:"a04",catId:"aperitivos",name:"Empanada China (2 und)",price:3800,desc:"Masa sellada al vapor con relleno de carne y verduras",emoji:"🥟"},
    {id:"a05",catId:"aperitivos",name:"Costillar Cantonés (entrada)",price:7500,desc:"Costillas de cerdo glaseadas en salsa cantonesa",emoji:"🍖"},

    {id:"s01",catId:"sopas",name:"Sopa Wantán",price:6400,desc:"Caldo con wantán de carne, verduras y ciboulette",emoji:"🍜"},
    {id:"s02",catId:"sopas",name:"Sopa Hanchow",price:6400,desc:"Sopa espesa con pollo, champiñones y brotes de soya",emoji:"🍜"},
    {id:"s03",catId:"sopas",name:"Sopa de Mariscos",price:7500,desc:"Caldo con camarones, calamares y verduras frescas",emoji:"🦐"},
    {id:"s04",catId:"sopas",name:"Sopa de Pollo con Choclo",price:5500,desc:"Cremosa sopa de pollo con maíz tierno",emoji:"🌽"},

    {id:"r01",catId:"arroz",name:"Arroz Chaumin",price:5500,desc:"Arroz frito con verduras salteadas y salsa de soya",emoji:"🍚"},
    {id:"r02",catId:"arroz",name:"Arroz con Pollo",price:7500,desc:"Arroz frito con trozos de pollo y verduras",emoji:"🍗"},
    {id:"r03",catId:"arroz",name:"Arroz con Cerdo",price:7500,desc:"Arroz frito con cerdo y cebollín",emoji:"🥩"},
    {id:"r04",catId:"arroz",name:"Arroz con Camarón",price:9000,desc:"Arroz frito con camarones y huevo",emoji:"🦐"},
    {id:"r05",catId:"arroz",name:"Arroz Tres Delicias",price:7000,desc:"Arroz frito con pollo, cerdo, camarón y verduras",emoji:"🍚"},
    {id:"r06",catId:"arroz",name:"Arroz con Carne",price:8000,desc:"Arroz salteado con carne de vacuno y verduras",emoji:"🥩"},

    {id:"ch01",catId:"chaumin",name:"Chaumin de Pollo",price:10000,desc:"Fideos salteados al wok con pollo y verduras",emoji:"🍝"},
    {id:"ch02",catId:"chaumin",name:"Chaumin de Carne",price:10500,desc:"Fideos salteados con carne de vacuno y brotes",emoji:"🍝"},
    {id:"ch03",catId:"chaumin",name:"Chaumin de Camarón",price:11500,desc:"Fideos salteados con camarones y vegetales",emoji:"🦐"},
    {id:"ch04",catId:"chaumin",name:"Chaumin Especial",price:12000,desc:"Fideos con pollo, cerdo, camarón y verduras mixtas",emoji:"🍝"},
    {id:"ch05",catId:"chaumin",name:"Chaumin de Verduras",price:8000,desc:"Fideos vegetarianos con verduras de estación",emoji:"🥬",badges:["vegetariano"]},

    {id:"p01",catId:"pollo",name:"Pollo con Almendras",price:9500,desc:"Pollo salteado con almendras tostadas y salsa de ostra",emoji:"🍗"},
    {id:"p02",catId:"pollo",name:"Pollo Mongoliano",price:10000,desc:"Pollo salteado con verduras en salsa mongoliana",emoji:"🍗"},
    {id:"p03",catId:"pollo",name:"Pollo con Champiñones",price:9500,desc:"Trozos de pollo salteados con champiñones y salsa de soya",emoji:"🍄"},
    {id:"p04",catId:"pollo",name:"Pollo Camarón Mongoliano",price:13500,desc:"Pollo y camarones en salsa mongoliana",emoji:"🔥",badges:["picante"]},
    {id:"p05",catId:"pollo",name:"Pollo Salsa de Ostra",price:9500,desc:"Pollo salteado en aromática salsa de ostras",emoji:"🍗"},
    {id:"p06",catId:"pollo",name:"Pollo con Verduras",price:9000,desc:"Pollo salteado con mix de verduras al wok",emoji:"🥗"},

    {id:"ce01",catId:"cerdo",name:"Cerdo Mongoliano",price:10000,desc:"Cerdo salteado con verduras en salsa mongoliana",emoji:"🥩"},
    {id:"ce02",catId:"cerdo",name:"Costillar Cantonés",price:10500,desc:"Costillas de cerdo glaseadas estilo cantón",emoji:"🍖"},
    {id:"ce03",catId:"cerdo",name:"Cerdo con Champiñones",price:9500,desc:"Cerdo salteado con champiñones y bambú",emoji:"🍄"},
    {id:"ce04",catId:"cerdo",name:"Chancho Salsa de Ostras",price:9500,desc:"Cerdo tierno en salsa de ostras y jengibre",emoji:"🥩"},
    {id:"ce05",catId:"cerdo",name:"Cerdo con Piña",price:9000,desc:"Cerdo salteado con piña fresca y pimentón",emoji:"🍍"},

    {id:"cv01",catId:"carne",name:"Carne Mongoliana",price:12000,desc:"Carne de vacuno salteada en salsa mongoliana con verduras",emoji:"🔥",badges:["picante"]},
    {id:"cv02",catId:"carne",name:"Carne con Champiñones",price:12000,desc:"Carne salteada con champiñones y brotes de soya",emoji:"🍄"},
    {id:"cv03",catId:"carne",name:"Carne Salsa de Ostras",price:11500,desc:"Carne tierna en salsa de ostras con cebollín",emoji:"🥘"},
    {id:"cv04",catId:"carne",name:"Carne con Brócoli",price:11500,desc:"Carne salteada con brócoli fresco y jengibre",emoji:"🥦"},
    {id:"cv05",catId:"carne",name:"Carne con Pimentón",price:11500,desc:"Carne al wok con pimentones y cebolla",emoji:"🫑"},
    {id:"cv06",catId:"carne",name:"Carne Pimienta Negra",price:12000,desc:"Carne salteada en salsa de pimienta negra",emoji:"🔥",badges:["picante"]},

    {id:"cs01",catId:"chapsui",name:"Chapsui de Pollo",price:8500,desc:"Verduras salteadas al wok con pollo y salsa de soya",emoji:"🥗"},
    {id:"cs02",catId:"chapsui",name:"Chapsui de Carne",price:9500,desc:"Verduras salteadas con carne de vacuno",emoji:"🥗"},
    {id:"cs03",catId:"chapsui",name:"Chapsui de Cerdo",price:9000,desc:"Verduras salteadas con cerdo tierno",emoji:"🥗"},
    {id:"cs04",catId:"chapsui",name:"Chapsui de Camarón",price:11000,desc:"Verduras salteadas con camarones frescos",emoji:"🦐"},
    {id:"cs05",catId:"chapsui",name:"Chapsui Especial",price:12000,desc:"Mix de carnes y mariscos con verduras al wok",emoji:"⭐"},
    {id:"cs06",catId:"chapsui",name:"Chapsui de Verduras",price:7500,desc:"Variedad de verduras frescas salteadas al wok",emoji:"🥬",badges:["vegetariano"]},

    {id:"dd01",catId:"dragon",name:"Diente de Dragón Pollo",price:10000,desc:"Fideos de arroz salteados con pollo y verduras",emoji:"🐉"},
    {id:"dd02",catId:"dragon",name:"Diente de Dragón Carne",price:11000,desc:"Fideos de arroz salteados con carne y brotes",emoji:"🐉"},
    {id:"dd03",catId:"dragon",name:"Diente de Dragón Camarón",price:12000,desc:"Fideos de arroz salteados con camarones",emoji:"🦐"},
    {id:"dd04",catId:"dragon",name:"Diente de Dragón Mixto",price:12500,desc:"Fideos de arroz con pollo, cerdo y camarón",emoji:"⭐"},

    {id:"pm01",catId:"mariscos",name:"Camarón Mongoliano",price:14000,desc:"Camarones salteados en salsa mongoliana",emoji:"🦐",badges:["picante"]},
    {id:"pm02",catId:"mariscos",name:"Camarón Salsa de Ostras",price:13500,desc:"Camarones en aromática salsa de ostras",emoji:"🦐"},
    {id:"pm03",catId:"mariscos",name:"Pescado Frito Cantonés",price:13000,desc:"Pescado entero frito con salsa agridulce",emoji:"🐟"},
    {id:"pm04",catId:"mariscos",name:"Parrillada China",price:17000,desc:"Bandeja de mariscos y carnes al estilo chino",emoji:"🔥"},
    {id:"pm05",catId:"mariscos",name:"Copa de Oro",price:11500,desc:"Mezcla de mariscos y carne en copa de masa frita",emoji:"🏆"},

    {id:"ag01",catId:"agridulce",name:"Pollo Agridulce",price:9500,desc:"Pollo apanado en salsa agridulce con pimentones",emoji:"🍯"},
    {id:"ag02",catId:"agridulce",name:"Cerdo Agridulce",price:9000,desc:"Cerdo apanado en salsa agridulce con piña",emoji:"🍍"},
    {id:"ag03",catId:"agridulce",name:"Camarón Agridulce",price:12500,desc:"Camarones apanados en salsa agridulce",emoji:"🦐"},
    {id:"ag04",catId:"agridulce",name:"Pescado Agridulce",price:12000,desc:"Trozos de pescado en salsa agridulce crujiente",emoji:"🐟"},

    {id:"v01",catId:"vegetariano",name:"Tofu Mongoliano",price:8000,desc:"Tofu firme salteado en salsa mongoliana con verduras",emoji:"🥬",badges:["vegetariano"]},
    {id:"v02",catId:"vegetariano",name:"Arroz Chaumin Vegetariano",price:6000,desc:"Arroz frito con verduras de estación y huevo",emoji:"🍚",badges:["vegetariano"]},
    {id:"v03",catId:"vegetariano",name:"Verduras Salsa de Ostras",price:7000,desc:"Mix de verduras frescas en salsa de ostras",emoji:"🥦",badges:["vegetariano"]},
    {id:"v04",catId:"vegetariano",name:"Chaumin de Verduras",price:8000,desc:"Fideos salteados con vegetales de estación",emoji:"🍝",badges:["vegetariano"]},

    {id:"mo01",catId:"oferta",name:"Colación Chapsui de Pollo",price:7600,desc:"Chapsui de pollo + arroz + bebida",emoji:"🏷️"},
    {id:"mo02",catId:"oferta",name:"Colación Carne Mongoliana",price:8800,desc:"Carne mongoliana + arroz + bebida",emoji:"🏷️"},
    {id:"mo03",catId:"oferta",name:"Colación Mixto Mongoliano",price:8800,desc:"Mix mongoliano + arroz + bebida",emoji:"🏷️"},
    {id:"mo04",catId:"oferta",name:"Colación Costillar Cantonés",price:7350,desc:"Costillar cantonés + arroz + bebida",emoji:"🏷️"},
    {id:"mo05",catId:"oferta",name:"Colación D. Dragón Pollo",price:7800,desc:"Diente de dragón de pollo + arroz + bebida",emoji:"🏷️"},
    {id:"mo06",catId:"oferta",name:"Colación Chapsui Verduras",price:6500,desc:"Chapsui vegetariano + arroz + bebida",emoji:"🥬",badges:["vegetariano"]},

    {id:"b01",catId:"bebidas",name:"Bebida en Lata",price:1500,desc:"Coca-Cola, Fanta, Sprite",emoji:"🥤"},
    {id:"b02",catId:"bebidas",name:"Bebida 1.5L",price:2500,desc:"Coca-Cola, Fanta, Sprite familiar",emoji:"🥤"},
    {id:"b03",catId:"bebidas",name:"Agua Mineral",price:1500,desc:"Con o sin gas, 500ml",emoji:"💧"},
    {id:"b04",catId:"bebidas",name:"Jugo Natural",price:2500,desc:"Naranja, piña o limón",emoji:"🧃"},
    {id:"b05",catId:"bebidas",name:"Cerveza",price:2500,desc:"Cristal, Escudo o Kunstmann",emoji:"🍺"},
    {id:"b06",catId:"bebidas",name:"Té Chino",price:2000,desc:"Té verde o jasmine, servido caliente",emoji:"🍵"}
  ];

  /* ── Category definitions ── */
  var CATEGORIES = [
    {id:"aperitivos",name:"Aperitivos",eyebrow:"Para comenzar",desc:"Entradas crujientes y sabrosas para abrir el apetito."},
    {id:"sopas",name:"Sopas",eyebrow:"Reconfortantes",desc:"Caldos y sopas preparados con ingredientes frescos."},
    {id:"arroz",name:"Arroz",eyebrow:"Salteado al wok",desc:"Arroz frito al estilo chino con distintas proteínas."},
    {id:"chaumin",name:"Chaumin",eyebrow:"Fideos al wok",desc:"Fideos salteados con verduras y la proteína que elijas."},
    {id:"pollo",name:"Pollo",eyebrow:"Del wok a tu mesa",desc:"Preparaciones de pollo salteadas al wok."},
    {id:"cerdo",name:"Cerdo",eyebrow:"Sabor intenso",desc:"Cortes de cerdo preparados con técnicas orientales."},
    {id:"carne",name:"Carne",eyebrow:"Vacuno al wok",desc:"Carne de vacuno salteada con salsas y verduras frescas."},
    {id:"chapsui",name:"Chapsui",eyebrow:"Verduras salteadas",desc:"Verduras frescas al wok con tu proteína favorita."},
    {id:"dragon",name:"Diente de Dragón",eyebrow:"Fideos de arroz",desc:"Fideos de arroz salteados estilo chino."},
    {id:"mariscos",name:"Mariscos",eyebrow:"Del mar al wok",desc:"Camarones, pescado y mariscos al estilo oriental."},
    {id:"agridulce",name:"Agridulce",eyebrow:"Sabor clásico",desc:"El inconfundible sabor agridulce de la cocina china."},
    {id:"vegetariano",name:"Vegetariano",eyebrow:"Base vegetal",desc:"Preparaciones con verduras y tofu para quienes prefieren opciones sin carne."},
    {id:"oferta",name:"Colaciones",eyebrow:"Menú del día",desc:"Combinaciones con arroz y bebida a precio especial."},
    {id:"bebidas",name:"Bebidas",eyebrow:"Para acompañar",desc:"Refrescos, jugos y bebidas para tu mesa."}
  ];

  /* ── Miniaturas de categoría (compartidas con el nav de "Explora nuestros sabores") ── */
  var CATEGORY_THUMBS = {
    aperitivos: 'assets/img/categorias/aperitivos.webp',
    sopas: 'assets/img/categorias/sopas.webp',
    arroz: 'assets/img/categorias/arroz.webp',
    chaumin: 'assets/img/categorias/chaumin.webp',
    pollo: 'assets/img/categorias/pollo.webp',
    cerdo: 'assets/img/categorias/cerdo.webp',
    carne: 'assets/img/categorias/carne.webp',
    chapsui: 'assets/img/categorias/chapsui.webp',
    dragon: 'assets/img/categorias/diente-de-dragon.webp',
    mariscos: 'assets/img/categorias/mariscos.webp',
    agridulce: 'assets/img/categorias/agridulce.webp',
    vegetariano: 'assets/img/categorias/vegetariano.webp',
    oferta: 'assets/img/categorias/colaciones.webp',
    bebidas: 'assets/img/categorias/bebidas.webp'
  };

  /* ── State ── */
  var cart = [];
  var orderId = '';
  var cartNotes = '';
  var lastFocusedElement = null;

  /* ── DOM Helpers ── */
  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return document.querySelectorAll(s); };

  function safe(fn) {
    try { fn(); } catch (e) { console.warn('[CS]', e); }
  }

  function fmtPrice(p) {
    var s = String(p);
    return s.length > 3 ? '$' + s.slice(0, -3) + '.' + s.slice(-3) : '$' + s;
  }

  function escHtml(s) {
    return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function cleanText(value, maxLength) {
    return String(value || '')
      .replace(/[\x00-\x1f]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, maxLength || 500);
  }

  function chileParts(date) {
    var parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Santiago',
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hour12: false
    }).formatToParts(date || new Date());
    var result = {};
    parts.forEach(function (part) { result[part.type] = part.value; });
    if (result.hour === '24') result.hour = '00';
    return result;
  }

  function formatChileDateTime(date) {
    var p = chileParts(date);
    return p.day + '/' + p.month + '/' + p.year + ' ' + p.hour + ':' + p.minute;
  }

  function chileDateISO() {
    var p = chileParts(new Date());
    return p.year + '-' + p.month + '-' + p.day;
  }

  function formatDateForMessage(value) {
    var parts = String(value || '').split('-');
    return parts.length === 3 ? parts[2] + '/' + parts[1] + '/' + parts[0] : cleanText(value, 20);
  }

  function createOrderId() {
    var p = chileParts(new Date());
    return 'WEB-' + p.year + p.month + p.day + '-' + p.hour + p.minute + '-' + String(Math.floor(Math.random() * 900) + 100);
  }

  function createReservationId() {
    var p = chileParts(new Date());
    return 'RES-' + p.year + p.month + p.day + '-' + p.hour + p.minute + '-' + String(Math.floor(Math.random() * 900) + 100);
  }

  /* ═══ RENDER MENU SECTIONS ═══ */
  function renderMenu() {
    var container = $('#menu-sections');
    if (!container) return;
    var html = '';
    var isFirst = true;
    var dividerHTML = '<div class="menu-divider" aria-hidden="true">'
      + '<span class="menu-divider__line"></span>'
      + '<span class="menu-divider__mark"></span>'
      + '<span class="menu-divider__text">Auténtica cocina cantonesa</span>'
      + '<span class="menu-divider__mark"></span>'
      + '<span class="menu-divider__line"></span>'
      + '</div>';

    CATEGORIES.forEach(function (cat) {
      var prods = PRODUCTS.filter(function (p) { return p.catId === cat.id; });
      if (!prods.length) return;

      if (!isFirst) html += dividerHTML;
      isFirst = false;

      html += '<section class="menu-section" id="' + cat.id + '" aria-labelledby="heading-' + cat.id + '">';
      html += '<div class="section-head">';
      html += '<span class="eyebrow"><span class="eyebrow__text">' + cat.eyebrow + '</span><span class="eyebrow__line" aria-hidden="true"></span></span>';
      html += '<h3 id="heading-' + cat.id + '">' + cat.name + '</h3>';
      html += '<p>' + cat.desc + '</p>';
      html += '</div>';
      html += '<div class="product-grid">';

      prods.forEach(function (p) {
        html += '<article class="product-card">';
        html += '<div class="product-card__body">';
        html += '<div class="product-card__top">';
        html += '<h4>' + escHtml(p.name) + '</h4>';
        html += '<span class="product-card__price">' + fmtPrice(p.price) + '</span>';
        html += '</div>';
        if (p.desc) html += '<p class="product-card__desc">' + escHtml(p.desc) + '</p>';
        html += '<div class="product-card__foot"><div class="product-card__badges">';

        var badgeMap = {vegetariano:'Vegetariano',picante:'Picante'};
        (p.badges || []).forEach(function (b) {
          html += '<span class="badge badge--' + b + '">' + (badgeMap[b] || b) + '</span> ';
        });

        html += '</div>';
        html += '<button class="add-btn" type="button" data-add="' + escHtml(p.id) + '" data-name="' + escHtml(p.name) + '" data-price="' + p.price + '" aria-label="Agregar ' + escHtml(p.name) + '">';
        html += '<svg class="add-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>';
        html += '<span class="add-btn__label">Agregar</span>';
        html += '</button>';
        html += '</div></div></article>';
      });

      html += '</div></section>';
    });

    container.innerHTML = html;

    container.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-add]');
      if (!btn) return;
      addToCart(btn.dataset.add, btn.dataset.name, parseInt(btn.dataset.price));
      var label = btn.querySelector('.add-btn__label');
      btn.classList.add('added');
      if (label) label.textContent = 'Agregado';
      setTimeout(function () {
        btn.classList.remove('added');
        if (label) label.textContent = 'Agregar';
      }, 1200);
    });
  }

  /* ═══ RENDER "¿QUÉ SE TE ANTOJA HOY?" CATEGORY INDEX ═══ */
  function renderAntojos() {
    var container = $('#antojos-grid');
    if (!container) return;
    var html = '';

    CATEGORIES.forEach(function (cat) {
      var count = PRODUCTS.filter(function (p) { return p.catId === cat.id; }).length;
      if (!count) return;
      var thumb = CATEGORY_THUMBS[cat.id];
      html += '<a href="#' + cat.id + '" class="antojo-card reveal-up" data-cat="' + cat.id + '">';
      html += '<img class="antojo-card__bg" src="' + thumb + '" alt="" loading="lazy" width="640" height="640">';
      html += '<span class="antojo-card__overlay" aria-hidden="true"></span>';
      html += '<span class="antojo-card__text">';
      html += '<span class="antojo-card__name">' + escHtml(cat.name) + '</span>';
      html += '<span class="antojo-card__meta"><span class="antojo-card__count">' + count + (count === 1 ? ' plato' : ' platos') + '</span>';
      html += '<span class="antojo-card__arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></span>';
      html += '</span>';
      html += '</a>';
    });

    container.innerHTML = html;
  }

  /* ═══ CART LOGIC ═══ */
  function cartTotal() { return cart.reduce(function (s, i) { return s + i.price * i.qty; }, 0); }
  function cartCount() { return cart.reduce(function (s, i) { return s + i.qty; }, 0); }

  function saveCart() {
    try { sessionStorage.setItem('cs_cart', JSON.stringify(cart)); } catch (e) {}
  }

  function loadCart() {
    try {
      var s = sessionStorage.getItem('cs_cart');
      if (s) cart = JSON.parse(s);
    } catch (e) { cart = []; }
  }

  function addToCart(id, name, price) {
    if (!orderId) orderId = createOrderId();
    var existing = cart.find(function (c) { return c.id === id; });
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ id: id, name: name, price: price, qty: 1 });
    }
    saveCart();
    updateCartUI();
    showToast(name + ' agregado');
  }

  function removeFromCart(id) {
    cart = cart.filter(function (c) { return c.id !== id; });
    saveCart();
    updateCartUI();
    renderCart();
  }

  function updateQty(id, delta) {
    var item = cart.find(function (c) { return c.id === id; });
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) { removeFromCart(id); return; }
    saveCart();
    updateCartUI();
    renderCart();
  }

  function updateCartUI() {
    var count = cartCount();
    var total = cartTotal();
    var fabCount = $('#fab-count');
    var fabTotal = $('#fab-total');
    var fabCart = $('#fab-cart');
    if (fabCount) fabCount.textContent = count;
    if (fabTotal) fabTotal.textContent = fmtPrice(total);
    if (fabCart) fabCart.classList.toggle('visible', count > 0);
  }

  /* ═══ RENDER CART ═══ */
  function renderCart() {
    var cartBody = $('#cart-body');
    var cartFooter = $('#cart-footer');
    if (!cartBody) return;

    if (cart.length === 0) {
      orderId = '';
      cartBody.innerHTML = '<div class="cart-empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg><p>Tu pedido está vacío</p><p style="font-size:.85rem;margin-top:.5rem;color:var(--text-3)">Agrega platos desde nuestra carta</p></div>';
      if (cartFooter) cartFooter.classList.add('is-hidden');
      return;
    }

    var html = '<ul class="cart-list">';
    cart.forEach(function (item) {
      html += '<li class="cart-item">';
      html += '<div class="cart-item__main"><div>';
      html += '<div class="cart-item__name">' + escHtml(item.name) + '</div>';
      html += '</div><div class="cart-item__price">' + fmtPrice(item.price * item.qty) + '</div></div>';
      html += '<div class="cart-item__controls">';
      html += '<div class="qty-control">';
      html += '<button type="button" class="qty-btn" data-qty-id="' + escHtml(item.id) + '" data-qty-delta="-1" aria-label="Restar una unidad de ' + escHtml(item.name) + '">−</button>';
      html += '<span class="qty-val">' + item.qty + '</span>';
      html += '<button type="button" class="qty-btn" data-qty-id="' + escHtml(item.id) + '" data-qty-delta="1" aria-label="Sumar una unidad de ' + escHtml(item.name) + '">+</button>';
      html += '</div>';
      html += '<button type="button" class="cart-remove" data-remove-id="' + escHtml(item.id) + '" aria-label="Eliminar ' + escHtml(item.name) + '">Eliminar</button>';
      html += '</div></li>';
    });
    html += '</ul>';

    // Notes
    html += '<div class="notes-field"><label for="cart-notes">Observaciones opcionales</label>';
    html += '<textarea id="cart-notes" placeholder="Ej.: sin cebolla, delivery a..." maxlength="400">' + escHtml(cartNotes) + '</textarea></div>';

    // Totals
    var total = cartTotal();
    html += '<div class="totals" id="cart-totals">';
    html += '<div class="total-grand"><span>Total estimado</span><strong id="grand-total">' + fmtPrice(total) + '</strong></div>';
    html += '</div>';

    cartBody.innerHTML = html;
    if (cartFooter) cartFooter.classList.remove('is-hidden');

    // Wire cart events
    $$('[data-qty-id]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        updateQty(btn.dataset.qtyId, parseInt(btn.dataset.qtyDelta));
      });
    });
    $$('[data-remove-id]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        removeFromCart(btn.dataset.removeId);
      });
    });
    var notes = $('#cart-notes');
    if (notes) notes.addEventListener('input', function () { cartNotes = notes.value; updateWaLink(); });

    updateWaLink();
  }

  function updateWaLink() {
    var lines = ['[PEDIDO_WEB]', '🧾 *NUEVO PEDIDO WEB*', '*' + window.__BRAND__.name + '*'];
    if (!orderId) orderId = createOrderId();
    lines.push('ID: ' + orderId);
    lines.push('ORIGEN: PAGINA_WEB');
    lines.push('FECHA_CHILE: ' + formatChileDateTime(new Date()));
    lines.push('\n*PRODUCTOS*');
    cart.forEach(function (item, i) {
      var line = (i + 1) + '. ' + item.qty + ' × ' + item.name + ' — ' + fmtPrice(item.price * item.qty);
      lines.push(line);
    });
    var total = cartTotal();
    lines.push('\n*RESUMEN*');
    lines.push('*TOTAL ESTIMADO: ' + fmtPrice(total) + '*');
    if (cartNotes.trim()) {
      lines.push('\n*OBSERVACIONES*');
      lines.push(cartNotes.trim());
    }
    lines.push('\nESTADO: PENDIENTE_CONFIRMACION');
    lines.push('Quedo atento/a a la confirmación del restaurante.');
    lines.push('[/PEDIDO_WEB]');
    var text = encodeURIComponent(lines.join('\n'));
    var cartWaBtn = $('#cart-wa-btn');
    if (cartWaBtn) {
      cartWaBtn.href = 'https://wa.me/' + window.__BRAND__.phone + '?text=' + text;
    }
  }

  /* ═══ RESERVATIONS ═══ */
  function buildReservationUrl(data) {
    var lines = [
      '[RESERVA_WEB]',
      '📅 *NUEVA SOLICITUD DE RESERVA*',
      '*' + window.__BRAND__.name + '*',
      'ID: ' + createReservationId(),
      'ORIGEN: PAGINA_WEB',
      'ENVIADA_CHILE: ' + formatChileDateTime(new Date()),
      '',
      '*DATOS DE LA RESERVA*',
      'NOMBRE: ' + data.name,
      'WHATSAPP: ' + data.phone,
      'PERSONAS: ' + data.guests,
      'FECHA_SOLICITADA: ' + formatDateForMessage(data.date),
      'HORA_SOLICITADA: ' + data.time,
      'OCASION: ' + data.eventType
    ];
    if (data.notes) {
      lines.push('OBSERVACIONES: ' + data.notes);
    }
    lines.push('', 'ESTADO: PENDIENTE_CONFIRMACION');
    lines.push('Nota: la solicitud queda sujeta a disponibilidad y confirmación del restaurante.');
    lines.push('[/RESERVA_WEB]');
    return 'https://wa.me/' + window.__BRAND__.phone + '?text=' + encodeURIComponent(lines.join('\n'));
  }

  function initReservations() {
    var form = $('#reservation-form');
    if (!form) return;
    var dateInput = $('#reservation-date');
    var phoneInput = $('#reservation-phone');
    var feedback = $('#reservation-feedback');
    if (dateInput) dateInput.min = chileDateISO();

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (phoneInput) {
        phoneInput.setCustomValidity('');
        var phoneDigits = phoneInput.value.replace(/\D/g, '');
        if (phoneDigits.length < 8 || phoneDigits.length > 15) {
          phoneInput.setCustomValidity('Ingresa un número de WhatsApp válido.');
        }
      }
      if (!form.checkValidity()) {
        form.reportValidity();
        if (feedback) feedback.textContent = 'Revisa los campos marcados para continuar.';
        return;
      }

      var data = {
        name: cleanText($('#reservation-name').value, 80),
        phone: cleanText($('#reservation-phone').value, 20),
        guests: cleanText($('#reservation-guests').value, 3),
        date: cleanText($('#reservation-date').value, 10),
        time: cleanText($('#reservation-time').value, 5),
        eventType: cleanText($('#reservation-type').value, 80),
        notes: cleanText($('#reservation-notes').value, 500)
      };
      var url = buildReservationUrl(data);
      if (feedback) feedback.textContent = 'Solicitud preparada. WhatsApp se abrirá para enviarla al restaurante.';
      var opened = window.open(url, '_blank', 'noopener,noreferrer');
      if (!opened) window.location.assign(url);
    });

    form.addEventListener('input', function (event) {
      if (event.target === phoneInput && phoneInput) phoneInput.setCustomValidity('');
      if (feedback) feedback.textContent = '';
    });
  }

  /* ═══ SHEET OPEN/CLOSE ═══ */
  function hasOpenSheet() {
    return !!document.querySelector('.bottom-sheet.open');
  }

  function openSheet(sheet) {
    var overlay = $('#overlay');
    if (!sheet) return;
    lastFocusedElement = document.activeElement;
    if (overlay) overlay.classList.add('open');
    if (overlay) overlay.setAttribute('aria-hidden', 'false');
    sheet.classList.add('open');
    sheet.setAttribute('aria-hidden', 'false');
    sheet.removeAttribute('inert');
    document.body.style.overflow = 'hidden';
    var closeButton = sheet.querySelector('.bs-close');
    if (closeButton) setTimeout(function () { closeButton.focus(); }, 0);
  }

  function closeSheet(sheet) {
    var overlay = $('#overlay');
    if (sheet) {
      sheet.classList.remove('open');
      sheet.setAttribute('aria-hidden', 'true');
      sheet.setAttribute('inert', '');
    }
    if (!hasOpenSheet()) {
      if (overlay) {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
      }
      document.body.style.overflow = '';
      if (lastFocusedElement && document.contains(lastFocusedElement) && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
      lastFocusedElement = null;
    }
  }

  /* ═══ SEARCH ═══ */
  function handleSearch() {
    var input = $('#menu-search');
    if (!input) return;
    var q = input.value.toLowerCase().trim();
    var sections = $$('#menu-sections .menu-section');
    var totalVisible = 0;

    sections.forEach(function (sec) {
      var cards = sec.querySelectorAll('.product-card');
      var sectionVisible = 0;
      cards.forEach(function (card) {
        var text = card.textContent.toLowerCase();
        var match = !q || text.indexOf(q) > -1;
        card.style.display = match ? '' : 'none';
        if (match) sectionVisible++;
      });
      sec.style.display = sectionVisible > 0 ? '' : 'none';
      totalVisible += sectionVisible;
    });

    var resultCount = $('#result-count');
    if (resultCount) {
      resultCount.textContent = q ? totalVisible + ' resultado' + (totalVisible !== 1 ? 's' : '') : '';
    }
  }

  /* ═══ TOAST ═══ */
  var toastTimeout;
  function showToast(msg) {
    var toast = $('#toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () { toast.classList.remove('show'); }, 2200);
  }

  /* ═══ CATEGORY NAVIGATION ═══ */
  function initCategoryNav() {
    var links = $$('.cat-link');
    var catNavWrap = $('#cat-nav-wrap');

    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById(link.dataset.cat);
        if (target && catNavWrap) {
          var offset = catNavWrap.offsetHeight + 12;
          window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
        }
      });
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          links.forEach(function (l) { l.classList.toggle('active', l.dataset.cat === id); });
          var activeLink = document.querySelector('.cat-link[data-cat="' + id + '"]');
          if (activeLink) activeLink.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

    $$('#menu-sections .menu-section').forEach(function (sec) { observer.observe(sec); });

    window.addEventListener('scroll', function () {
      if (catNavWrap) catNavWrap.classList.toggle('scrolled', window.scrollY > 300);
    }, { passive: true });
  }

  /* ═══ SPLASH ═══ */
  function initSplash() {
    var splash = $('#splash');
    if (!splash) return;
    var dismiss = function () { splash.classList.add('done'); };
    setTimeout(dismiss, 2200);
    setTimeout(dismiss, 6000);
  }

  /* ═══ HAMBURGER ═══ */
  function initHamburger() {
    var hamburger = $('#hamburger');
    var mobileNav = $('#mobile-nav');
    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', function () {
      var open = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
      hamburger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      mobileNav.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.body.style.overflow = open ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Abrir menú');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  /* ═══ SCROLL PROGRESS ═══ */
  function initScrollProgress() {
    var bar = $('#scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = pct + '%';
    }, { passive: true });
  }

  /* ═══ CUSTOM CURSOR ═══ */
  function initCursor() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
    var outer = $('#cursor-outer');
    var inner = $('#cursor-inner');
    if (!outer || !inner) return;
    var moved = false;

    document.addEventListener('mousemove', function (e) {
      if (!moved) { document.body.classList.add('cursor-visible'); moved = true; }
      outer.style.left = e.clientX + 'px';
      outer.style.top = e.clientY + 'px';
      inner.style.left = e.clientX + 'px';
      inner.style.top = e.clientY + 'px';
    }, { passive: true });

    $$('.magnetic').forEach(function (el) {
      el.addEventListener('mouseover', function () {
        outer.style.width = '56px';
        outer.style.height = '56px';
        outer.style.margin = '-28px 0 0 -28px';
      });
      el.addEventListener('mouseout', function () {
        outer.style.width = '40px';
        outer.style.height = '40px';
        outer.style.margin = '-20px 0 0 -20px';
      });
    });
  }

  /* ═══ REVEAL ON SCROLL ═══ */
  function initReveal() {
    var reveals = $$('.reveal-up');
    if (!reveals.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    reveals.forEach(function (el) { observer.observe(el); });

    setTimeout(function () {
      reveals.forEach(function (el) { el.classList.add('visible'); });
    }, 6000);
  }

  /* ═══ ANIMATED COUNTERS ═══ */
  function initCounters() {
    var counters = $$('.counter');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.dataset.target);
          var duration = 2000;
          var startTime = null;

          function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var val = Math.floor(progress * target);
            el.textContent = val;
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = target;
          }

          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.05 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  /* ═══ FOOTER YEAR ═══ */
  function initFooterYear() {
    var el = $('#footer-year');
    if (!el) return;
    var year = chileParts(new Date()).year;
    el.innerHTML = '&copy; ' + year + ' Chang Sheng 昌盛酒家 — Todos los derechos reservados.';
  }

  /* ═══ OPEN STATUS ═══ */
  function initOpenStatus() {
    var statusEl = $('#open-status');
    if (!statusEl) return;

    var now = new Date();
    var chile = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Santiago', hour: '2-digit', minute: '2-digit', hour12: false
    }).formatToParts(now);
    var part = {};
    chile.forEach(function (item) { part[item.type] = item.value; });
    var hour = part.hour === '24' ? 0 : parseInt(part.hour, 10);
    var min = parseInt(part.minute, 10);
    var timeNum = hour * 60 + min;

    var openTime = 11 * 60 + 30;
    var closeTime = 22 * 60 + 30;
    var isOpen = timeNum >= openTime && timeNum < closeTime;

    statusEl.className = 'hours-card__status ' + (isOpen ? 'open' : 'closed');
    statusEl.textContent = isOpen ? 'Abierto ahora' : 'Cerrado — Abrimos a las 11:30';
  }

  /* ═══ GSAP ANIMATIONS ═══ */
  function initGSAP() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    safe(function () {
      gsap.from('.hero__visual img', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power2.out'
      });
    });

  }

  /* ═══ INIT ═══ */
  function init() {
    loadCart();
    safe(initSplash);
    safe(initHamburger);
    safe(initScrollProgress);
    safe(initCursor);
    safe(renderMenu);
    safe(renderAntojos);
    safe(initCategoryNav);
    safe(initFooterYear);
    safe(initReveal);
    safe(initCounters);
    safe(initOpenStatus);
    safe(initReservations);

    safe(function () {
      var fabCart = $('#fab-cart');
      if (fabCart) fabCart.addEventListener('click', function () { renderCart(); openSheet($('#cart-sheet')); });
      var cartClose = $('#cart-close');
      if (cartClose) cartClose.addEventListener('click', function () { closeSheet($('#cart-sheet')); });
      var overlay = $('#overlay');
      if (overlay) overlay.addEventListener('click', function () { closeSheet($('#cart-sheet')); });
      document.addEventListener('keydown', function (event) {
        var activeSheet = document.querySelector('.bottom-sheet.open');
        if (activeSheet && event.key === 'Tab') {
          var focusables = Array.from(activeSheet.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled])'));
          if (focusables.length) {
            var first = focusables[0];
            var last = focusables[focusables.length - 1];
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first.focus();
            }
          }
        }
        if (event.key === 'Escape') {
          closeSheet($('#cart-sheet'));
          var hamburger = $('#hamburger');
          if (hamburger && hamburger.classList.contains('open')) hamburger.click();
        }
      });
      var searchInput = $('#menu-search');
      if (searchInput) searchInput.addEventListener('input', handleSearch);
      var searchBtn = $('#search-btn');
      if (searchBtn) searchBtn.addEventListener('click', function () {
        handleSearch();
        if (searchInput) searchInput.focus();
      });
    });

    updateCartUI();

    setTimeout(function () { safe(initGSAP); }, 300);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
