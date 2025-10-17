/* ===========================
 🎵 LISTA DE INSTRUMENTOS
=========================== */
const Instrumentos = [
  { nombre: "Taylor", descripcion: "214ce Walnut / Spruce", precio: 5900000, imagen: "/SRC/IMG/Intrumentos/Taylor.png", categoria: "cuerda", tipo: "guitarra", compras: 152, masComprado: true },
  { nombre: "DZ Strad Violín", descripcion: "Modelo 500", precio: 13800000, imagen: "/SRC/IMG/Intrumentos/DZStradViolín.png", categoria: "cuerda", tipo: "violín", compras: 90, masComprado: false },
  { nombre: "Cordoba", descripcion: "C1M Clásica", precio: 750000, imagen: "/SRC/IMG/Intrumentos/Cordoba.png", categoria: "cuerda", tipo: "guitarra", compras: 120, masComprado: true },
  { nombre: "Yamaha", descripcion: "YFL-SV250BR", precio: 6600000, imagen: "/SRC/IMG/Intrumentos/YamahaYFL.png", categoria: "viento", tipo: "flauta", compras: 75, masComprado: false },
  { nombre: "Satin Turquoise", descripcion: "SE CE-24 Standard", precio: 2800000, imagen: "/SRC/IMG/Intrumentos/Satin Turquoise.png", categoria: "electricos", tipo: "guitarra electrica", compras: 85, masComprado: false },
  { nombre: "Ibanez", descripcion: "AEG70 Vintage", precio: 1880000, imagen: "/SRC/IMG/Intrumentos/Ibanez.png", categoria: "cuerda", tipo: "guitarra", compras: 132, masComprado: true },
  { nombre: "Cremona", descripcion: "SV-500 4/4", precio: 1950000, imagen: "/SRC/IMG/Intrumentos/Cremona.png", categoria: "cuerda", tipo: "violín", compras: 68, masComprado: false },
  { nombre: "Yamaha", descripcion: "C40", precio: 580000, imagen: "/SRC/IMG/Intrumentos/YamahaC40.png", categoria: "cuerda", tipo: "guitarra", compras: 145, masComprado: true },
  { nombre: "Yamaha", descripcion: "CX40", precio: 930000, imagen: "/SRC/IMG/Intrumentos/YamahaC40.png", categoria: "electricos", tipo: "guitarra eléctrica", compras: 170, masComprado: true },
  { nombre: "Ukelele Diamond Head", descripcion: "DU-200C", precio: 244350, imagen: "/SRC/IMG/Intrumentos/UkeleleDiamondHead.png", categoria: "cuerda", tipo: "ukelele", compras: 95, masComprado: false },
  { nombre: "Yamaha YFL-222", descripcion: "Flauta traversa de estudiante en plata niquelada", precio: 1890000, imagen: "/SRC/IMG/Intrumentos/YamahaYFL-222.png", categoria: "viento", tipo: "flauta traversa", compras: 120, masComprado: true },
  { nombre: "Selmer AS400", descripcion: "Saxofón alto lacado dorado profesional", precio: 5200000, imagen: "/SRC/IMG/Intrumentos/SelmerAS400.png", categoria: "viento", tipo: "saxofón alto", compras: 96, masComprado: false },
  { nombre: "Buffet Crampon E11", descripcion: "Clarinete en Sib con cuerpo de granadilla", precio: 3150000, imagen: "/SRC/IMG/Intrumentos/BuffetCrampon E11.png", categoria: "viento", tipo: "clarinete", compras: 87, masComprado: false },
  { nombre: "Bach TR300H2", descripcion: "Trompeta en Si bemol con acabado lacado", precio: 2760000, imagen: "/SRC/IMG/Intrumentos/Bach TR300H2.png", categoria: "viento", tipo: "trompeta", compras: 132, masComprado: true },
  { nombre: "Hohner Marine Band 1896", descripcion: "Armónica diatónica clásica en C (Do)", precio: 340000, imagen: "/SRC/IMG/Intrumentos/HohnerMarineBand.png", categoria: "viento", tipo: "armónica", compras: 211, masComprado: true },
  { nombre: "Jupiter JAS1100", descripcion: "Saxofón alto intermedio con estuche rígido", precio: 4750000, imagen: "/SRC/IMG/Intrumentos/Jupite JAS1100.png", categoria: "viento", tipo: "saxofón alto", compras: 104, masComprado: false },
  { nombre: "Yamaha YCL-255", descripcion: "Clarinete para principiantes en resina ABS", precio: 2680000, imagen: "/SRC/IMG/Intrumentos/YamahaYCL-255.png", categoria: "viento", tipo: "clarinete", compras: 118, masComprado: true },
  { nombre: "Conn 88H Symphony", descripcion: "Trombón tenor profesional con campana de cobre", precio: 8200000, imagen: "/SRC/IMG/Intrumentos/Conn 88HSymphony.png", categoria: "viento", tipo: "trombón", compras: 61, masComprado: false },
  { nombre: "Yamaha YAS-280", descripcion: "Saxofón alto de estudiante en acabado dorado", precio: 5100000, imagen: "/SRC/IMG/Intrumentos/YamahaYAS-280.png", categoria: "viento", tipo: "saxofón alto", compras: 127, masComprado: true },
  { nombre: "Eastman EFL-221", descripcion: "Flauta traversa de cuerpo plateado", precio: 1150000, imagen: "/SRC/IMG/Intrumentos/EastmanEFL-221.png", categoria: "viento", tipo: "flauta traversa", compras: 77, masComprado: false },
  { nombre: "Pearl Export EXX725S", descripcion: "Batería acústica de 5 piezas con platillos Sabian SBR", precio: 4980000, imagen: "/SRC/IMG/Intrumentos/PearlExportEXX725S.png", categoria: "percusion", tipo: "batería acústica", compras: 112, masComprado: true },
  { nombre: "Yamaha Stage Custom Birch", descripcion: "Batería profesional de abedul natural", precio: 7100000, imagen: "/SRC/IMG/Intrumentos/YamahaStageCustomBirch.png", categoria: "percusion", tipo: "batería acústica", compras: 78, masComprado: false },
  { nombre: "Roland TD-07KV", descripcion: "Batería electrónica compacta con módulos V-Drums", precio: 8200000, imagen: "/SRC/IMG/Intrumentos/YamahaStage.png", categoria: ["electricos", "percusion"], tipo: "batería electrónica", compras: 126, masComprado: true },
  {nombre: "Meinl Percussion Headliner Cajon",descripcion: "Cajón peruano de madera de abedul",precio: 650000,imagen: "/SRC/IMG/Intrumentos/MeinlHeadlinerCajon.png",categoria: "percusion",tipo: "cajón",compras: 138,masComprado: true},
  {nombre: "LP Aspire Conga Set",descripcion: "Set de congas de madera natural con herrajes cromados",precio: 2190000,imagen: "/SRC/IMG/Intrumentos/LPAspireCongaSet.png",categoria: "percusion",tipo: "conga",compras: 71,masComprado: false},
  {nombre: "Remo Ambassador Coated",descripcion: "Parche para caja de 14 pulgadas texturizado",precio: 165000,imagen: "/SRC/IMG/Intrumentos/RemoAmbassadorCoated.png",categoria: "percusion",tipo: "parche",compras: 102,masComprado: true},
  {nombre: "Vic Firth 5A American Classic",descripcion: "Baquetas de madera de nogal clásico",precio: 95000,imagen: "/SRC/IMG/Intrumentos/VicFirth5A.png",categoria: "percusion",tipo: "baquetas",compras: 247,masComprado: true},
  {nombre: "Meinl HCS Crash 16",descripcion: "Platillo crash de 16 pulgadas en latón HCS",precio: 390000,imagen: "/SRC/IMG/Intrumentos/MeinlHCSCrash16.png",categoria: "percusion",tipo: "platillo crash",compras: 115, masComprado: false},
  {nombre: "Toca Percussion Synergy Bongos",descripcion: "Bongos de 6 y 7 pulgadas con herrajes negros",precio: 520000,imagen: "/SRC/IMG/Intrumentos/TocaSynergyBongos.png",categoria: "percusion",tipo: "bongó",compras: 142,masComprado: true},
  { nombre: "Latin Percussion LP231A",descripcion: "Agogo doble de acero cromado con baqueta",precio: 185000,imagen: "/SRC/IMG/Intrumentos/LP231AAgogo.png",categoria: "percusion",tipo: "agogo",compras: 65,masComprado: false},
  {nombre: "LP Cowbell LP204A",descripcion: "Cowbell negra de acero de 8 pulgadas",precio: 195000,imagen: "/SRC/IMG/Intrumentos/LPCowbellLP204A.png",categoria: "percusion",tipo: "campana",compras: 156,masComprado: true}
];

/* ===========================
 ⚙️ FUNCIÓN PARA MOSTRAR TARJETAS
=========================== */
function renderInstrumentos(lista, contenedorId, limite = null) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  contenedor.innerHTML = "";

  const items = limite ? lista.slice(0, limite) : lista;

  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}">
      <div class="card-body">
        <h3>${item.nombre}</h3>
        <p>${item.descripcion}</p>
        <span class="precio">$${item.precio.toLocaleString("es-CO")}</span>
        <button class="btn-comprar">COMPRAR</button>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

/* ===========================
 🪕 MOSTRAR EN PÁGINA DE INSTRUMENTOS
=========================== */
document.addEventListener("DOMContentLoaded", () => {
  const contenedorInstrumentos = document.getElementById("lista-Instrumentos");

  if (contenedorInstrumentos) {
    renderInstrumentos(Instrumentos, "lista-Instrumentos");

    // ✅ Filtro por categoría (soporta múltiples)
    document.querySelectorAll(".producto").forEach(producto => {
      producto.addEventListener("click", () => {
        const categoria = producto.dataset.categoria;
        const filtrados = Instrumentos.filter(i =>
          Array.isArray(i.categoria)
            ? i.categoria.includes(categoria)
            : i.categoria === categoria
        );
        renderInstrumentos(filtrados, "lista-Instrumentos");
      });
    });
  }
});


/* ===========================
 🎸 MOSTRAR EN INDEX — MÁS VENDIDOS (ADAPTATIVO con matchMedia)
=========================== */
document.addEventListener("DOMContentLoaded", () => {
  const contenedorIndex = document.getElementById("lista-instrumentos");

  if (contenedorIndex) {
    const masVendidos = Instrumentos.filter(i => i.masComprado);

    // 📱💻 Detectar el tipo de pantalla con media query (idéntico al CSS)
    function obtenerLimite() {
      return window.matchMedia("(max-width: 768px)").matches ? 3 : 4;
    }

    let limiteDeVistas = obtenerLimite();

    // Render inicial
    renderInstrumentos(masVendidos.slice(0, limiteDeVistas), "lista-instrumentos");

    // 🎯 Escucha cambios de media query (automático al girar o redimensionar)
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener("change", () => {
      const nuevoLimite = obtenerLimite();
      if (nuevoLimite !== limiteDeVistas) {
        limiteDeVistas = nuevoLimite;
        renderInstrumentos(masVendidos.slice(0, limiteDeVistas), "lista-instrumentos");
      }
    });
  }
});
