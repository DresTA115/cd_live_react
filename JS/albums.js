/* ===========================
 💿 LISTA DE ÁLBUMS
=========================== */
const Albums = [
  { artista: "Bad Bunny", album: "Un Verano Sin Ti", categoria: "Vinilo", formato: "Vinilo", precio: 120000, imagen: "/SRC/IMG/Vinilos/X100PRE.jpg", masVendido: true },
  { artista: "Peso Pluma", album: "Génesis", categoria: "Vinilo", formato: "Vinilo", precio: 95000, imagen: "/SRC/IMG/Vinilos/genesis2.png", masVendido: true },
  { artista: "Radiohead", album: "OK Computer", categoria: "Vinilo", formato: "Vinilo", precio: 135000, imagen: "/SRC/IMG/Vinilos/OKComputer.png", masVendido: false },
  { artista: "Duki", album: "Ameri", categoria: "Vinilo", formato: "Vinilo", precio: 110000, imagen: "/SRC/IMG/Vinilos/ameri.png", masVendido: true },
  { artista: "Doja Cat", album: "Hot Pink", categoria: "Vinilo", formato: "Vinilo", precio: 125000, imagen: "/SRC/IMG/Vinilos/HotPink.png", masVendido: false },
  { artista: "Gorillaz", album: "Plastic Beach", categoria: "Vinilo", formato: "Vinilo", precio: 99000, imagen: "/SRC/IMG/Vinilos/plastibeach.png", masVendido: true },
  { artista: "Nanpa Básico", album: "Unicornio Negro", categoria: "CD", formato: "CD", precio: 85000, imagen: "/SRC/IMG/CD/unicornio.png", masVendido: true },
  { artista: "BMTH", album: "Thats The Spirit", categoria: "Vinilo", formato: "Vinilo", precio: 105000, imagen: "/SRC/IMG/Vinilos/ThatsTheSpirit.png", masVendido: false },
  { artista: "Tupac",imgArtista:"", album: "All Eyez on Me", categoria: "Cassette", formato: "Vinilo", precio: 98000, imagen: "/SRC/IMG/Vinilos/AllEyezOnMe.png", masVendido: true }
];

/* ===========================
 ⚙️ FUNCIÓN PARA RENDERIZAR TARJETAS
=========================== */
function renderAlbums(lista, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  contenedor.innerHTML = "";

  lista.forEach(album => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${album.imagen}" alt="${album.album}">
      <div class="card-body">
        <h3>${album.artista}</h3>
        <p><strong>Álbum:</strong> ${album.album}</p>
        <p><strong>Formato:</strong> ${album.formato}</p>
        <span class="precio">$${album.precio.toLocaleString("es-CO")}</span>
        <button class="btn-comprar">COMPRAR</button>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

/* ===========================
 💿 INICIALIZACIÓN GENERAL
=========================== */
document.addEventListener("DOMContentLoaded", () => {
  const contenedorAlbums = document.getElementById("lista-albums");
  const contenedorMasVendidos = document.getElementById("lista-albums-masvendidos");

  // ====== Página completa (albums.html) ======
  if (contenedorAlbums) {
    renderAlbums(Albums, "lista-albums");

    const botonesCategoria = document.querySelectorAll(".producto");
    botonesCategoria.forEach(boton => {
      boton.addEventListener("click", () => {
        const categoria = boton.dataset.categoria;
        const filtrados = categoria === "todos" ? Albums : Albums.filter(a => a.categoria === categoria);
        renderAlbums(filtrados, "lista-albums");
      });
    });
  }

  // ====== Index (solo los más vendidos) ======
  if (contenedorMasVendidos) {
    const masVendidos = Albums.filter(a => a.masVendido);
    let limite = window.innerWidth <= 768 ? 3 : 4;
    renderAlbums(masVendidos.slice(0, limite), "lista-albums-masvendidos");

    window.addEventListener("resize", () => {
      const nuevoLimite = window.innerWidth <= 768 ? 3 : 4;
      renderAlbums(masVendidos.slice(0, nuevoLimite), "lista-albums-masvendidos");
    });
  }});
