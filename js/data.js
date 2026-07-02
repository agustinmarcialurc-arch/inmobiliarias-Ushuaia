/* Datos de demo — Fin del Mundo Propiedades
   Contenido ficticio para la demostración. Reemplazar por stock real del cliente. */

const AGENCIA = {
  nombre: "Fin del Mundo Propiedades",
  whatsapp: "5492901000000", // DEMO — reemplazar por el WhatsApp real de la inmobiliaria
  telefono: "+54 2901 00-0000", // DEMO
  email: "hola@findelmundopropiedades.com.ar", // DEMO
  direccion: "Av. San Martín 000, Ushuaia, Tierra del Fuego", // DEMO
  matricula: "Matrícula CUCICBA N.º 00000 (dato de ejemplo)", // DEMO
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/"
};

const PROPIEDADES = [
  {
    id: 1001,
    titulo: "Casa de estilo alpino con vista al Canal Beagle",
    operacion: "venta",
    tipo: "casa",
    barrio: "Bahía Encerrada",
    direccionAprox: "Zona Bahía Encerrada, Ushuaia",
    precio: 285000,
    moneda: "USD",
    m2Cubiertos: 180,
    m2Totales: 420,
    ambientes: 6,
    dormitorios: 4,
    banos: 3,
    cocheras: 2,
    antiguedad: "8 años",
    amenities: ["Vista al mar", "Calefacción central", "Chimenea a leña", "Deck exterior", "Apto crédito"],
    destacada: true,
    descripcion: "Casa de dos plantas construida en madera y piedra, pensada para el clima fueguino. Living comedor con ventanales de piso a techo orientados al Canal Beagle, cocina integrada totalmente equipada y suite principal con vestidor. El exterior cuenta con deck de madera y parquización nativa. A 8 minutos en auto del centro de Ushuaia.",
    imagenes: [
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
    ]
  },
  {
    id: 1002,
    titulo: "Departamento 2 ambientes a estrenar en Microcentro",
    operacion: "venta",
    tipo: "departamento",
    barrio: "Centro",
    direccionAprox: "Microcentro, Ushuaia",
    precio: 118000,
    moneda: "USD",
    m2Cubiertos: 52,
    m2Totales: 54,
    ambientes: 2,
    dormitorios: 1,
    banos: 1,
    cocheras: 0,
    antiguedad: "A estrenar",
    amenities: ["Apto crédito", "Balcón", "Amenities del edificio", "Calefacción individual"],
    destacada: true,
    descripcion: "Unidad a estrenar en edificio nuevo a metros de la Av. San Martín. Excelente orientación norte, balcón con vista a la bahía y todos los servicios a pie. Ideal primera vivienda o inversión para alquiler temporario.",
    imagenes: [
      "https://images.unsplash.com/photo-1571508601891-ca5e7a713859",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83"
    ]
  },
  {
    id: 1003,
    titulo: "PH tipo casa con jardín en Barrio Andorra",
    operacion: "alquiler",
    tipo: "ph",
    barrio: "Andorra",
    direccionAprox: "Barrio Andorra, Ushuaia",
    precio: 380000,
    moneda: "ARS",
    m2Cubiertos: 75,
    m2Totales: 110,
    ambientes: 3,
    dormitorios: 2,
    banos: 1,
    cocheras: 1,
    antiguedad: "15 años",
    amenities: ["Jardín", "Parrilla", "Admite mascotas", "Cochera cubierta"],
    destacada: false,
    descripcion: "PH de una planta con entrada independiente, jardín al frente y fondo con parrilla. Zona residencial tranquila con muy buena conectividad al centro. Se entrega con estufa a gas instalada.",
    imagenes: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    ]
  },
  {
    id: 1004,
    titulo: "Departamento moderno 3 ambientes en Kaupen",
    operacion: "venta",
    tipo: "departamento",
    barrio: "Kaupen",
    direccionAprox: "Barrio Kaupen, Ushuaia",
    precio: 165000,
    moneda: "USD",
    m2Cubiertos: 78,
    m2Totales: 82,
    ambientes: 3,
    dormitorios: 2,
    banos: 2,
    cocheras: 1,
    antiguedad: "3 años",
    amenities: ["Apto crédito", "Baulera", "Cochera cubierta", "Vista a la montaña", "Seguridad 24h"],
    destacada: true,
    descripcion: "Departamento en piso alto con vista despejada a las montañas. Dos suites, living comedor amplio con salida a balcón aterrazado y cochera cubierta incluida. Edificio con portería.",
    imagenes: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e"
    ]
  },
  {
    id: 1005,
    titulo: "Cabaña de montaña con vista al Glaciar Martial",
    operacion: "alquiler",
    tipo: "casa",
    barrio: "Solar del Bosque",
    direccionAprox: "Solar del Bosque, Ushuaia",
    precio: 620000,
    moneda: "ARS",
    m2Cubiertos: 95,
    m2Totales: 300,
    ambientes: 4,
    dormitorios: 3,
    banos: 2,
    cocheras: 1,
    antiguedad: "6 años",
    amenities: ["Vista a la montaña", "Chimenea a leña", "Amoblado", "Deck exterior", "Admite mascotas"],
    destacada: true,
    descripcion: "Cabaña de troncos completamente amoblada con vista directa al Glaciar Martial. Entorno de bosque nativo, ideal para quienes buscan tranquilidad sin alejarse del centro (12 minutos en auto).",
    imagenes: [
      "https://images.unsplash.com/photo-1651489000754-1bc96a562520",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
    ]
  },
  {
    id: 1006,
    titulo: "Terreno con vista al canal en Río Pipo",
    operacion: "venta",
    tipo: "terreno",
    barrio: "Río Pipo",
    direccionAprox: "Zona Río Pipo, Ushuaia",
    precio: 95000,
    moneda: "USD",
    m2Cubiertos: 0,
    m2Totales: 600,
    ambientes: 0,
    dormitorios: 0,
    banos: 0,
    cocheras: 0,
    antiguedad: "-",
    amenities: ["Vista al mar", "Apto crédito", "Servicios en esquina"],
    destacada: false,
    descripcion: "Lote de 600 m² en zona de expansión con excelente vista al Canal Beagle. Servicios de agua y luz sobre calle. Ideal para construcción de vivienda unifamiliar o cabañas de renta turística.",
    imagenes: [
      "https://images.unsplash.com/photo-1696551245041-f4879efc95bd",
      "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb"
    ]
  },
  {
    id: 1007,
    titulo: "Monoambiente luminoso frente a la bahía",
    operacion: "alquiler",
    tipo: "departamento",
    barrio: "Centro",
    direccionAprox: "Costanera, Ushuaia",
    precio: 240000,
    moneda: "ARS",
    m2Cubiertos: 32,
    m2Totales: 34,
    ambientes: 1,
    dormitorios: 1,
    banos: 1,
    cocheras: 0,
    antiguedad: "10 años",
    amenities: ["Vista al mar", "Amoblado", "Balcón"],
    destacada: false,
    descripcion: "Monoambiente totalmente amoblado sobre la costanera, a pasos del Museo Marítimo y la zona de restaurantes. Excelente para alquiler permanente o profesional que trabaja en el centro.",
    imagenes: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227"
    ]
  },
  {
    id: 1008,
    titulo: "Casa familiar 4 ambientes en Playa Larga",
    operacion: "venta",
    tipo: "casa",
    barrio: "Playa Larga",
    direccionAprox: "Playa Larga, Ushuaia",
    precio: 210000,
    moneda: "USD",
    m2Cubiertos: 140,
    m2Totales: 350,
    ambientes: 5,
    dormitorios: 3,
    banos: 2,
    cocheras: 2,
    antiguedad: "12 años",
    amenities: ["Apto crédito", "Cochera cubierta", "Parrilla", "Calefacción central", "Admite mascotas"],
    destacada: false,
    descripcion: "Casa de una planta en lote amplio, muy luminosa, con living-comedor integrado a cocina y quincho independiente con parrilla. Zona residencial familiar a 10 minutos del centro.",
    imagenes: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"
    ]
  }
];
