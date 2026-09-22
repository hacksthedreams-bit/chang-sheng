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

  /* ── Product Catalog (carta real, vigente en el local) ── */
  var PRODUCTS = [
    {id:"co01",catId:"colaciones",name:"Chapsui de Carne con Arroz",price:7790,desc:"Surtido de verduras con carne, servido con arroz.",emoji:"🍱"},
    {id:"co02",catId:"colaciones",name:"Chapsui de Pollo con Arroz",price:7790,desc:"Surtido de verduras con pollo, servido con arroz.",emoji:"🍱"},
    {id:"co03",catId:"colaciones",name:"Diente de Dragón Carne con Arroz",price:7790,desc:"Fideos de arroz salteados con carne, servidos con arroz.",emoji:"🐉"},
    {id:"co04",catId:"colaciones",name:"Diente de Dragón Pollo con Arroz",price:7790,desc:"Fideos de arroz salteados con pollo, servidos con arroz.",emoji:"🐉"},
    {id:"co05",catId:"colaciones",name:"Carne Mongoliana con Arroz",price:7990,desc:"Carne salteada en salsa mongoliana, servida con arroz.",emoji:"🔥",badges:["picante"]},
    {id:"co06",catId:"colaciones",name:"Pollo Mongoliano con Arroz",price:7990,desc:"Pollo salteado en salsa mongoliana, servido con arroz.",emoji:"🍗",badges:["picante"]},
    {id:"co07",catId:"colaciones",name:"Chapsui de Verdura con Arroz",price:7790,desc:"Verduras salteadas al wok; puede ser con arroz chaufán o blanco.",emoji:"🥬",badges:["vegetariano"]},
    {id:"co08",catId:"colaciones",name:"Carne con Champiñón y Arroz",price:9500,desc:"Carne salteada con champiñones, servida con arroz.",emoji:"🍄"},
    {id:"co09",catId:"colaciones",name:"Pollo con Champiñones y Arroz",price:9500,desc:"Pollo salteado con champiñones, servido con arroz.",emoji:"🍄"},
    {id:"co10",catId:"colaciones",name:"Carne Sola con Arroz",price:9500,desc:"Porción de carne salteada, servida con arroz.",emoji:"🥩"},
    {id:"co11",catId:"colaciones",name:"Pollo Solo con Arroz",price:9500,desc:"Porción de pollo salteado, servida con arroz.",emoji:"🍗"},
    {id:"co12",catId:"colaciones",name:"Chapsui de Carne y Pollo con Arroz",price:8000,desc:"Surtido de verduras con carne y pollo, servido con arroz.",emoji:"🍱"},
    {id:"co13",catId:"colaciones",name:"Carne y Pollo Mongoliana con Arroz",price:8400,desc:"Carne y pollo salteados en salsa mongoliana, servidos con arroz.",emoji:"🔥",badges:["picante"]},
    {id:"co14",catId:"colaciones",name:"Diente de Dragón Carne y Pollo con Arroz",price:8400,desc:"Fideos de arroz salteados con carne y pollo, servidos con arroz.",emoji:"🐉"},
    {id:"co15",catId:"colaciones",name:"Carne Mongoliana con Papas",price:9500,desc:"Carne salteada en salsa mongoliana, servida con papas fritas.",emoji:"🔥",badges:["picante"]},

    {id:"mn01",catId:"combos",name:"Menú para 2 Personas A",price:30490,desc:"1 wantán, 1 chapsui de ave, 1 diente de dragón carne, 2 arroz chaufán.",emoji:"🍽️"},
    {id:"mn02",catId:"combos",name:"Menú para 2 Personas B",price:33090,desc:"1 wantán, 1 chapsui de ave, 1 carne mongoliana, 2 arroz chaufán.",emoji:"🍽️"},
    {id:"mn03",catId:"combos",name:"Menú para 3 Personas",price:51090,desc:"1 wantán frito, 1 arrollado primavera, 1 carne mongoliana, 1 diente de dragón pollo, 3 arroz chaufán.",emoji:"🍽️"},
    {id:"mn04",catId:"combos",name:"Menú para 4 Personas",price:66390,desc:"1 wantán frito, 1 arrollado primavera, 1 carne mongoliana, 1 diente de dragón ave, 1 chapsui de carne, 1 pollo mongoliano, 4 arroz chaufán.",emoji:"🍽️"},
    {id:"mn05",catId:"combos",name:"Menú para 5 Personas",price:78990,desc:"1 wantán frito, 1 arrollado primavera, 1 carne mongoliana, 1 diente de dragón ave, 1 chapsui de carne, 1 pollo mongoliano, 5 arroz.",emoji:"🍽️"},
    {id:"mn06",catId:"combos",name:"Menú para 6 Personas",price:95490,desc:"2 wantán frito, 1 arrollado primavera, 1 carne mongoliana, 1 pollo mongoliano, 1 diente de dragón ave, 1 chapsui de carne, 1 chapsui de pollo, 1 arrollado de marisco, 6 arroz chaufán.",emoji:"🍽️"},
    {id:"mn07",catId:"combos",name:"Menú para 7 Personas",price:109890,desc:"2 wantán frito, 1 arrollado primavera, 1 carne mongoliana, 1 pollo mongoliano, 1 costillar cantonés, 1 diente de dragón ave, 1 chapsui de ave, 1 chapsui de carne, 1 arrollado marisco, 7 arroz chaufán.",emoji:"🍽️"},
    {id:"mn08",catId:"combos",name:"Menú para 8 Personas",price:125990,desc:"2 wantán frito, 2 arrollado primavera, 1 carne mongoliana, 1 pollo mongoliano, 1 costillar cantonés, 1 chapsui especial, 1 diente de dragón ave, 1 chapsui de carne, 1 chapsui de pollo, 1 arrollado marisco, 8 arroz chaufán.",emoji:"🍽️"},
    {id:"mn09",catId:"combos",name:"Menú para 9 Personas",price:156690,desc:"2 wantán frito, 2 arrollado primavera, 1 carne mongoliana, 1 pollo mongoliano, 1 costillar cantonés, 1 chapsui especial, 1 pollo chiten, 1 diente de dragón ave, 1 chapsui de carne, 1 chapsui de ave, 1 arrollado marisco, 9 arroz chaufán.",emoji:"🍽️"},
    {id:"mn10",catId:"combos",name:"Menú para 10 Personas",price:169990,desc:"3 wantán frito, 2 arrollado primavera, 1 carne mongoliana, 1 pollo mongoliano, 1 chapsui especial, 1 diente de dragón ave, 1 costillar cantonés, 1 arrollado marisco, 1 pollo chiten, 1 chapsui de carne, 2 chapsui de ave, 10 arroz.",emoji:"🍽️"},

    {id:"ap01",catId:"aperitivos",name:"Wantán Frito (10 und)",price:4000,desc:"Hojitas de masa frita.",emoji:"🥟"},
    {id:"ap02",catId:"aperitivos",name:"Hojas de Camarón (15 und)",price:5000,desc:"Masa frita con sabor a camarón.",emoji:"🦐"},
    {id:"ap03",catId:"aperitivos",name:"Arrollado Primavera (5 und)",price:5100,desc:"Empanaditas rellenas con carne y verduras.",emoji:"🥟"},
    {id:"ap04",catId:"aperitivos",name:"Camarón Mandarín sin Queso (5 und)",price:7800,desc:"Empanadas rellenas con camarón y cebollín.",emoji:"🦐"},
    {id:"ap05",catId:"aperitivos",name:"Arrollados Jamón y Queso (5 und)",price:5800,desc:"Masa rellena con queso y jamón.",emoji:"🥟"},
    {id:"ap06",catId:"aperitivos",name:"Camarón con Queso (5 und)",price:8100,desc:"Empanadas rellenas con camarón, queso y cebollín.",emoji:"🦐"},
    {id:"ap07",catId:"aperitivos",name:"Copa de Oro (6 und)",price:8900,desc:"Pollo envuelto en masa con camarón.",emoji:"🏆"},
    {id:"ap08",catId:"aperitivos",name:"Hunan (12 und)",price:9900,desc:"Ají relleno de pescado, frito y picante.",emoji:"🌶️",badges:["picante"]},
    {id:"ap09",catId:"aperitivos",name:"Pollo Mandarín sin Queso (5 und)",price:7800,desc:"Empanadas rellenas con pollo y cebollín.",emoji:"🥟"},
    {id:"ap10",catId:"aperitivos",name:"Pollo Mandarín con Queso (5 und)",price:8100,desc:"Empanadas rellenas con pollo, queso y cebollín.",emoji:"🥟"},
    {id:"ap11",catId:"aperitivos",name:"Arrollados de Queso (5 und)",price:5800,desc:"Empanadas rellenas con queso.",emoji:"🥟",badges:["vegetariano"]},
    {id:"ap12",catId:"aperitivos",name:"Papas Fritas",price:5900,desc:"Porción de papas fritas.",emoji:"🍟",badges:["vegetariano"]},

    {id:"so01",catId:"sopas",name:"Sopa Chang Sheng",price:7800,desc:"Tallo de bambú con pollo, camarones, verduras y huevo.",emoji:"🍜"},
    {id:"so02",catId:"sopas",name:"Sopa Ifumin",price:7800,desc:"Sopa con verduras, camarones, ave y tallarines.",emoji:"🍜"},
    {id:"so03",catId:"sopas",name:"Sopa Wantán",price:7800,desc:"Empanaditas de wantán servidas en sopa.",emoji:"🍜"},
    {id:"so04",catId:"sopas",name:"Sopa Wantán Mín",price:7800,desc:"Empanaditas de wantán y tallarines en sopa.",emoji:"🍜"},
    {id:"so05",catId:"sopas",name:"Sopa Hanchow",price:7800,desc:"Sopa de ave con fideos de arroz.",emoji:"🍜"},

    {id:"ar01",catId:"arroz",name:"Arroz Chaufán",price:3500,desc:"Salteado con trocitos de chancho asado, huevo y cebollín.",emoji:"🍚"},
    {id:"ar02",catId:"arroz",name:"Arroz Blanco",price:3500,desc:"Cocido en agua, sin sal.",emoji:"🍚",badges:["vegetariano"]},
    {id:"ar03",catId:"arroz",name:"Arroz Especial",price:9300,desc:"Salteado con chancho, camarones, asado, verduras, huevo y cebollín.",emoji:"🍚"},

    {id:"dr01",catId:"dragon",name:"Diente de Dragón Especial",price:12700,desc:"Salteado con camarones, pollo, carne y cebollín.",emoji:"🐉"},
    {id:"dr02",catId:"dragon",name:"Diente de Dragón Carne",price:9900,desc:"Salteado con carne y cebollín.",emoji:"🐉"},
    {id:"dr03",catId:"dragon",name:"Diente de Dragón Ave",price:9900,desc:"Salteado con pollo y cebollín.",emoji:"🐉"},
    {id:"dr04",catId:"dragon",name:"Diente de Dragón con Camarón",price:18000,desc:"Salteado con camarones y cebollín.",emoji:"🐉"},

    {id:"cs01",catId:"chapsui",name:"Chapsui Especial",price:12700,desc:"Surtido de verduras con pollo, camarones, carne y almendras.",emoji:"⭐"},
    {id:"cs02",catId:"chapsui",name:"Chapsui de Camarón",price:18000,desc:"Surtido de verduras y camarones.",emoji:"🦐"},
    {id:"cs03",catId:"chapsui",name:"Chapsui de Carne",price:9900,desc:"Surtido de verduras y carne.",emoji:"🥗"},
    {id:"cs04",catId:"chapsui",name:"Chapsui de Pollo",price:9900,desc:"Surtido de verduras y pollo.",emoji:"🥗"},
    {id:"cs05",catId:"chapsui",name:"Chapsui de Chancho",price:12000,desc:"Surtido de verduras y chancho.",emoji:"🥗"},
    {id:"cs06",catId:"chapsui",name:"Chapsui de Congrio",price:20000,desc:"Surtido de verduras con congrio.",emoji:"🐟"},
    {id:"cs07",catId:"chapsui",name:"Chapsui de Bambú",price:16000,desc:"Surtido de verduras con bambú.",emoji:"🥬",badges:["vegetariano"]},
    {id:"cs08",catId:"chapsui",name:"Pack Po Choi",price:16000,desc:"Verduras surtidas, algas, champiñones, pollo, camarones, carne y fideos de arroz.",emoji:"🥗"},
    {id:"cs09",catId:"chapsui",name:"Bambú con Algas",price:17000,desc:"Tallo de bambú, algas y cebollín.",emoji:"🥬",badges:["vegetariano"]},
    {id:"cs10",catId:"chapsui",name:"Chapsui de Verduras",price:9900,desc:"Verduras surtidas, algas y champiñones.",emoji:"🥬",badges:["vegetariano"]},

    {id:"po01",catId:"pollo",name:"Pollo Chang Sheng",price:12400,desc:"Tallo de bambú, algas, champiñones, pollo y cebollín.",emoji:"🍗"},
    {id:"po02",catId:"pollo",name:"Pollo Pekín",price:13000,desc:"Pollo asado, trozado con salsa y cebollín.",emoji:"🍗"},
    {id:"po03",catId:"pollo",name:"Pollo Chung San",price:12400,desc:"Pollo, algas, champiñones y cebollín.",emoji:"🍗"},
    {id:"po04",catId:"pollo",name:"Pollo con Champiñones",price:12400,desc:"Pollo, champiñones y cebollín.",emoji:"🍄"},
    {id:"po05",catId:"pollo",name:"Pollo al Vapor",price:12400,desc:"Pollo, algas, champiñón y cebollín, cocido al vapor.",emoji:"🍗"},
    {id:"po06",catId:"pollo",name:"Pollo Tausí",price:12400,desc:"Salteado con salsa especial china y cebollín.",emoji:"🍗"},
    {id:"po07",catId:"pollo",name:"Pollo Chicharrón",price:15000,desc:"Pollo apanado y frito.",emoji:"🍗"},
    {id:"po08",catId:"pollo",name:"Pollo Mongoliano",price:11700,desc:"Salteado con ají y cebollín.",emoji:"🔥",badges:["picante"]},
    {id:"po09",catId:"pollo",name:"Pollo Chiten",price:12500,desc:"Ensalada salteada con pollo y almendras.",emoji:"🍗"},
    {id:"po10",catId:"pollo",name:"Pollo Piña",price:12500,desc:"Pollo asado y apanado con piña y salsa tamarindo.",emoji:"🍍"},
    {id:"po11",catId:"pollo",name:"Parrillada China",price:24500,desc:"Carne, pollo, camarones, champiñones, algas y cebollín.",emoji:"🔥"},
    {id:"po12",catId:"pollo",name:"Pollo Solo",price:22000,desc:"Porción de pollo salteado.",emoji:"🍗"},

    {id:"ce01",catId:"cerdo",name:"Chancho Tausí",price:16000,desc:"Chancho con cebollín y tausí.",emoji:"🥩"},
    {id:"ce02",catId:"cerdo",name:"Chancho Mongoliano",price:16000,desc:"Salteado con ají y cebollín.",emoji:"🔥",badges:["picante"]},
    {id:"ce03",catId:"cerdo",name:"Costillar Cantonés",price:12500,desc:"Apanado, frito y bañado en salsa tamarindo.",emoji:"🍖"},
    {id:"ce04",catId:"cerdo",name:"Chancho Chasiú",price:19000,desc:"Chancho asado con cebollín.",emoji:"🥩"},
    {id:"ce05",catId:"cerdo",name:"Ku Lo Yu",price:12500,desc:"Chancho apanado, agridulce y picante.",emoji:"🔥",badges:["picante"]},

    {id:"ma01",catId:"mariscos",name:"Congrio Shanghái",price:25000,desc:"Apanado, frito, con verduras.",emoji:"🐟"},
    {id:"ma02",catId:"mariscos",name:"Congrio Fuyón",price:26000,desc:"Tortilla de congrio con cebollín.",emoji:"🐟"},
    {id:"ma03",catId:"mariscos",name:"Congrio al Ajo",price:26000,desc:"Salteado con ajo y cebollín.",emoji:"🐟"},
    {id:"ma04",catId:"mariscos",name:"Camarones Yangtzé",price:30000,desc:"Camarones apanados y fritos.",emoji:"🦐"},
    {id:"ma05",catId:"mariscos",name:"Camarones Fuyón",price:30000,desc:"Tortilla de camarones.",emoji:"🦐"},
    {id:"ma06",catId:"mariscos",name:"Camarones Chang Sheng",price:28000,desc:"Salteados con diente de dragón, champiñones, algas y cebollín.",emoji:"🦐"},
    {id:"ma07",catId:"mariscos",name:"Arrollado de Marisco",price:12500,desc:"Panqueque de huevo relleno con pasta de congrio.",emoji:"🐟"},
    {id:"ma08",catId:"mariscos",name:"Marisco Cantonés",price:24000,desc:"Mariscos surtidos con salsa especial china.",emoji:"🦐"},

    {id:"cv01",catId:"carne",name:"Carne al Vapor",price:14000,desc:"Con champiñones y algas, cocida al vapor.",emoji:"🥩"},
    {id:"cv02",catId:"carne",name:"Carne con Chachoi",price:14000,desc:"Con nabo chino y cebollín, picante.",emoji:"🔥",badges:["picante"]},
    {id:"cv03",catId:"carne",name:"Carne Chung San",price:14000,desc:"Con champiñones, algas y cebollín.",emoji:"🥩"},
    {id:"cv04",catId:"carne",name:"Carne al Curry",price:14000,desc:"Salteada con curry y cebollín.",emoji:"🥘"},
    {id:"cv05",catId:"carne",name:"Carne con Champiñones",price:14000,desc:"Salteada con champiñones y cebollín.",emoji:"🍄"},
    {id:"cv06",catId:"carne",name:"Carne Especial",price:24000,desc:"Frita, con champiñones, cebollín, algas y camarones.",emoji:"⭐"},
    {id:"cv07",catId:"carne",name:"Carne Mongoliana",price:12500,desc:"Salteada con ají y cebollín.",emoji:"🔥",badges:["picante"]},
    {id:"cv08",catId:"carne",name:"Carne Sola",price:24000,desc:"Porción de carne salteada.",emoji:"🥩"},
    {id:"cv09",catId:"carne",name:"Carne y Pollo Mongoliana",price:12500,desc:"Carne y pollo salteados con ají y cebollín.",emoji:"🔥",badges:["picante"]},

    {id:"cm01",catId:"chaumin",name:"Chancho Chaumín",price:13000,desc:"Tallarines salteados con verduras surtidas y chancho.",emoji:"🍝"},
    {id:"cm02",catId:"chaumin",name:"Carne Chaumín",price:13000,desc:"Tallarines salteados con verduras surtidas y carne.",emoji:"🍝"},
    {id:"cm03",catId:"chaumin",name:"Pollo Chaumín",price:13000,desc:"Tallarines salteados con verduras surtidas y pollo.",emoji:"🍝"},
    {id:"cm04",catId:"chaumin",name:"Camarón Chaumín",price:22000,desc:"Tallarines salteados con verduras surtidas y camarones.",emoji:"🦐"},
    {id:"cm05",catId:"chaumin",name:"Chaumín Especial",price:22000,desc:"Tallarines salteados con verduras, carne, champiñón, algas, pollo y cebollín.",emoji:"⭐"},

    {id:"su01",catId:"sushi",name:"Pollo Queso Crema",price:7500,desc:"Pollo y palta, rolls envueltos en queso crema (10 und).",emoji:"🍣"},
    {id:"su02",catId:"sushi",name:"Ebi Queso Crema",price:7500,desc:"Camarón y palta, rolls envueltos en queso crema (10 und).",emoji:"🍣"},
    {id:"su03",catId:"sushi",name:"Kanikama Queso Crema",price:7500,desc:"Kanikama y palta, rolls envueltos en queso crema (10 und).",emoji:"🍣"},
    {id:"su04",catId:"sushi",name:"Natural Queso Crema",price:7500,desc:"Pepino, palta y queso, rolls envueltos en queso crema (10 und).",emoji:"🍣",badges:["vegetariano"]},
    {id:"su05",catId:"sushi",name:"Ebi Nori",price:6800,desc:"Camarón y palta, hosomaki envueltos en nori (10 und).",emoji:"🍣"},
    {id:"su06",catId:"sushi",name:"Kanikama Nori",price:6800,desc:"Kanikama y palta, hosomaki envueltos en nori (10 und).",emoji:"🍣"},
    {id:"su07",catId:"sushi",name:"Vegetariano Nori",price:6800,desc:"Pepino y palta, hosomaki envueltos en nori (10 und).",emoji:"🍣",badges:["vegetariano"]},
    {id:"su08",catId:"sushi",name:"Pollo Nori",price:6800,desc:"Pollo y palta, hosomaki envueltos en nori (10 und).",emoji:"🍣"},
    {id:"su09",catId:"sushi",name:"Especial Nori",price:6800,desc:"Pepino, palta, sésamo y queso crema, hosomaki envueltos en nori (10 und).",emoji:"🍣",badges:["vegetariano"]},
    {id:"su10",catId:"sushi",name:"Ebi California",price:6800,desc:"Camarón y palta, rolls california envueltos en sésamo (10 und).",emoji:"🍣"},
    {id:"su11",catId:"sushi",name:"Kani California",price:6800,desc:"Kanikama y palta, rolls california envueltos en sésamo (10 und).",emoji:"🍣"},
    {id:"su12",catId:"sushi",name:"Pollo California",price:6800,desc:"Pollo y palta, rolls california envueltos en sésamo (10 und).",emoji:"🍣"},
    {id:"su13",catId:"sushi",name:"Natural California",price:6800,desc:"Pepino, palta y queso crema, rolls california envueltos en sésamo (10 und).",emoji:"🍣",badges:["vegetariano"]},
    {id:"su14",catId:"sushi",name:"Ebi Crema Tempura",price:7200,desc:"Camarón y queso crema, rolls tempura envueltos en panko (10 und).",emoji:"🍣"},
    {id:"su15",catId:"sushi",name:"Kanikama Crema Tempura",price:7200,desc:"Kanikama y queso crema, rolls tempura envueltos en panko (10 und).",emoji:"🍣"},
    {id:"su16",catId:"sushi",name:"Pollo Crema Tempura",price:7200,desc:"Pollo y queso crema, rolls tempura envueltos en panko (10 und).",emoji:"🍣"},
    {id:"su17",catId:"sushi",name:"Pollo Envuelto en Palta",price:7800,desc:"Pollo y queso crema, rolls envueltos en palta (10 und).",emoji:"🍣"},
    {id:"su18",catId:"sushi",name:"Ebi Envuelto en Palta",price:7800,desc:"Camarón y queso crema, rolls envueltos en palta (10 und).",emoji:"🍣"},
    {id:"su19",catId:"sushi",name:"Kani Envuelto en Palta",price:7800,desc:"Kanikama y queso crema, rolls envueltos en palta (10 und).",emoji:"🍣"},
    {id:"su20",catId:"sushi",name:"Natural Envuelto en Palta",price:7800,desc:"Pepino, palta y queso crema, rolls envueltos en palta (10 und).",emoji:"🍣",badges:["vegetariano"]},

    {id:"gy01",catId:"gyoza",name:"Gyoza de Cerdo y Verdura (10 und)",price:6000,desc:"Empanaditas al vapor rellenas de cerdo y verdura.",emoji:"🥟"},
    {id:"gy02",catId:"gyoza",name:"Gyoza de Cerdo y Choclo (10 und)",price:6000,desc:"Empanaditas al vapor rellenas de cerdo y choclo.",emoji:"🥟"},
    {id:"gy03",catId:"gyoza",name:"Gyoza de Pollo y Verdura (10 und)",price:6000,desc:"Empanaditas al vapor rellenas de pollo y verdura.",emoji:"🥟"},
    {id:"gy04",catId:"gyoza",name:"Gyoza de Cerdo y Apio (10 und)",price:6000,desc:"Empanaditas al vapor rellenas de cerdo y apio.",emoji:"🥟"},
    {id:"gy05",catId:"gyoza",name:"Gyoza de Cerdo y Cebollín (10 und)",price:6000,desc:"Empanaditas al vapor rellenas de cerdo y cebollín.",emoji:"🥟"},
    {id:"gy06",catId:"gyoza",name:"Gyoza de Cerdo y Pimentón (10 und)",price:6000,desc:"Empanaditas al vapor rellenas de cerdo y pimentón.",emoji:"🥟"},

  ];

  /* ── Bebidas: agrupadas por formato, con sabor seleccionable ── */
  var BEBIDA_FORMATS = [
    {id:"lata",catId:"bebidas",name:"Lata",price:2000,emoji:"🥤",flavors:["Coca-Cola Normal","Coca-Cola Zero","Sprite","Fanta"]},
    {id:"1-5l",catId:"bebidas",name:"1.5 L",price:3000,emoji:"🥤",flavors:["Coca-Cola Normal","Coca-Cola Zero"]},
    {id:"2l",catId:"bebidas",name:"2 L",price:3800,emoji:"🥤",flavors:["Coca-Cola Normal","Coca-Cola Zero"]},
    {id:"2-5l",catId:"bebidas",name:"2.5 L",price:4200,emoji:"🥤",flavors:["Coca-Cola Normal","Coca-Cola Zero"]},
    {id:"3l",catId:"bebidas",name:"3 L",price:4800,emoji:"🥤",flavors:["Coca-Cola Normal","Coca-Cola Zero"]}
  ];

  /* ── Category definitions ── */
  var CATEGORIES = [
    {id:"colaciones",name:"Colaciones",eyebrow:"Con arroz incluido",desc:"Platos individuales servidos con arroz, ideales para almuerzo rápido."},
    {id:"combos",name:"Menús para Compartir",eyebrow:"Para grupos y familias",desc:"Combinaciones armadas para 2 a 10 personas, con arroz incluido."},
    {id:"aperitivos",name:"Para el Aperitivo",eyebrow:"Para comenzar",desc:"Entradas crujientes y sabrosas para abrir el apetito."},
    {id:"sopas",name:"Sopas",eyebrow:"Reconfortantes",desc:"Caldos y sopas preparados con ingredientes frescos."},
    {id:"arroz",name:"Arroz",eyebrow:"Salteado al wok",desc:"Arroz frito al estilo chino con distintas preparaciones."},
    {id:"dragon",name:"Diente de Dragón",eyebrow:"Fideos de arroz",desc:"Fideos de arroz salteados estilo chino."},
    {id:"chapsui",name:"Chapsui",eyebrow:"Verduras salteadas",desc:"Verduras frescas al wok con tu proteína favorita."},
    {id:"pollo",name:"Pollos",eyebrow:"Del wok a tu mesa",desc:"Preparaciones de pollo salteadas y fritas al estilo cantonés."},
    {id:"cerdo",name:"Cerdos",eyebrow:"Sabor intenso",desc:"Cortes de cerdo preparados con técnicas orientales."},
    {id:"mariscos",name:"Pescados y Mariscos",eyebrow:"Del mar al wok",desc:"Congrio, camarones y mariscos surtidos al estilo oriental."},
    {id:"carne",name:"Vacunos",eyebrow:"Carne al wok",desc:"Carne de vacuno salteada con salsas y verduras frescas."},
    {id:"chaumin",name:"Chaumín",eyebrow:"Fideos al wok",desc:"Tallarines salteados con verduras y la proteína que elijas."},
    {id:"sushi",name:"Sushi",eyebrow:"Rolls frescos",desc:"Variedad de rolls envueltos en nori, queso crema, sésamo o palta."},
    {id:"gyoza",name:"Gyoza",eyebrow:"Empanaditas al vapor",desc:"Rellenas en distintas combinaciones de cerdo y pollo."},
    {id:"bebidas",name:"Para Beber",eyebrow:"Solo para llevar",desc:"Elige el formato y el sabor para acompañar tu pedido para llevar."}
  ];

  /* ── Miniaturas de categoría (compartidas con el nav de "Explora nuestros sabores") ──
     Solo se listan categorías con fotografía real; combos/sushi/gyoza usan un ícono
     de respaldo en el nav (ver .cat-link__thumb--mark) hasta contar con fotos propias. */
  var CATEGORY_THUMBS = {
    colaciones: 'assets/img/categorias/colaciones.webp',
    aperitivos: 'assets/img/categorias/aperitivos.webp',
    sopas: 'assets/img/categorias/sopas.webp',
    arroz: 'assets/img/categorias/arroz.webp',
    dragon: 'assets/img/categorias/diente-de-dragon.webp',
    chapsui: 'assets/img/categorias/chapsui.webp',
    pollo: 'assets/img/categorias/pollo.webp',
    cerdo: 'assets/img/categorias/cerdo.webp',
    mariscos: 'assets/img/categorias/mariscos.webp',
    carne: 'assets/img/categorias/carne.webp',
    chaumin: 'assets/img/categorias/chaumin.webp',
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
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
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
      var isBebidas = cat.id === 'bebidas';
      var prods = isBebidas ? BEBIDA_FORMATS : PRODUCTS.filter(function (p) { return p.catId === cat.id; });
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

      if (isBebidas) {
        prods.forEach(function (f) {
          var selectId = 'flavor-' + f.id;
          html += '<article class="product-card product-card--format">';
          html += '<div class="product-card__body">';
          html += '<div class="product-card__top">';
          html += '<h4>' + escHtml(f.name) + '</h4>';
          html += '<span class="product-card__price">' + fmtPrice(f.price) + '</span>';
          html += '</div>';
          html += '<div class="format-flavor">';
          html += '<label for="' + selectId + '" class="format-flavor__label">Sabor</label>';
          html += '<select id="' + selectId + '" class="format-flavor__select">';
          f.flavors.forEach(function (flavor) {
            html += '<option value="' + escHtml(flavor) + '">' + escHtml(flavor) + '</option>';
          });
          html += '</select>';
          html += '</div>';
          html += '<div class="product-card__foot"><div class="product-card__badges"></div>';
          html += '<button class="add-btn" type="button" data-add-format data-format-select="' + selectId + '" data-format-label="' + escHtml(f.name) + '" data-format-price="' + f.price + '" aria-label="Agregar bebida ' + escHtml(f.name) + '">';
          html += '<svg class="add-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>';
          html += '<span class="add-btn__label">Agregar</span>';
          html += '</button>';
          html += '</div></div></article>';
        });
      } else {
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
      }

      html += '</div></section>';
    });

    container.innerHTML = html;

    container.addEventListener('click', function (e) {
      var formatBtn = e.target.closest('[data-add-format]');
      if (formatBtn) {
        var select = document.getElementById(formatBtn.dataset.formatSelect);
        var flavor = select ? select.value : '';
        var label = formatBtn.dataset.formatLabel;
        var price = parseInt(formatBtn.dataset.formatPrice);
        var id = 'bev-' + formatBtn.dataset.formatSelect + '-' + flavor;
        var name = flavor + ' — ' + label;
        addToCart(id, name, price);
        var btnLabel = formatBtn.querySelector('.add-btn__label');
        formatBtn.classList.add('added');
        if (btnLabel) btnLabel.textContent = 'Agregado';
        setTimeout(function () {
          formatBtn.classList.remove('added');
          if (btnLabel) btnLabel.textContent = 'Agregar';
        }, 1200);
        return;
      }

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
      var count = cat.id === 'bebidas'
        ? BEBIDA_FORMATS.reduce(function (s, f) { return s + f.flavors.length; }, 0)
        : PRODUCTS.filter(function (p) { return p.catId === cat.id; }).length;
      if (!count) return;
      var thumb = CATEGORY_THUMBS[cat.id];
      if (!thumb) return;
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
    var headerCartCount = $('#header-cart-count');
    if (headerCartCount) {
      headerCartCount.textContent = count;
      headerCartCount.classList.toggle('visible', count > 0);
    }
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
      var heading = sec.querySelector('h3');
      var sectionNameMatch = !!q && !!heading && heading.textContent.toLowerCase().indexOf(q) > -1;
      var cards = sec.querySelectorAll('.product-card');
      var sectionVisible = 0;
      cards.forEach(function (card) {
        var text = card.textContent.toLowerCase();
        var match = !q || sectionNameMatch || text.indexOf(q) > -1;
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
    var catNavScroller = $('#cat-nav');

    function centerLinkHorizontally(link) {
      if (!link || !catNavScroller) return;
      var target = link.offsetLeft + link.offsetWidth / 2 - catNavScroller.clientWidth / 2;
      catNavScroller.scrollTo({ left: target, behavior: 'smooth' });
    }

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
          centerLinkHorizontally(document.querySelector('.cat-link[data-cat="' + id + '"]'));
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
  function updateHoursStatus() {
    var statusEl = $('#open-status');
    var clockEl = $('#live-clock');
    var p = chileParts(new Date());
    var hour = parseInt(p.hour, 10);
    var min = parseInt(p.minute, 10);
    var timeNum = hour * 60 + min;

    if (clockEl) {
      var timeSpan = clockEl.querySelector('.hours-card__clock-time');
      if (timeSpan) timeSpan.textContent = p.hour + ':' + p.minute + ':' + p.second;
    }

    if (statusEl) {
      var openTime = 11 * 60 + 30;
      var closeTime = 22 * 60 + 30;
      var isOpen = timeNum >= openTime && timeNum < closeTime;
      statusEl.className = 'hours-card__status ' + (isOpen ? 'open' : 'closed');
      statusEl.textContent = isOpen ? 'Abierto ahora' : 'Cerrado — Abrimos a las 11:30';
    }
  }

  function initOpenStatus() {
    if (!$('#open-status') && !$('#live-clock')) return;
    updateHoursStatus();
    setInterval(updateHoursStatus, 1000);
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
      var headerCartBtn = $('#header-cart-btn');
      if (headerCartBtn) headerCartBtn.addEventListener('click', function () { renderCart(); openSheet($('#cart-sheet')); });
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
