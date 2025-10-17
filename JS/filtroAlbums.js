/* =======================================================
 🎚️ FILTROS COMBINADOS — CD.Live (ÁLBUMS)
======================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("lista-albums");
  if (!contenedor) return;

  // 🎵 Estado global de filtros combinables
  const estadoFiltros = {
    categoria: null,
    edicion: null,
    filtro: null,
    ordenPrecio: null
  };

  // 🔄 Aplica los filtros activos combinados
  function aplicarFiltros() {
    let filtrados = [...Albums];

    if (estadoFiltros.categoria && estadoFiltros.categoria !== "todos") {
      filtrados = filtrados.filter(a => 
        a.categoria.toLowerCase() === estadoFiltros.categoria.toLowerCase()
      );
    }

    if (estadoFiltros.edicion) {
      filtrados = filtrados.filter(a => a.edicion === estadoFiltros.edicion);
    }

    if (estadoFiltros.filtro === "Promocion") {
      filtrados = filtrados.filter(a => a.promocion);
    }

    if (estadoFiltros.filtro === "Preventa") {
      filtrados = filtrados.filter(a => a.preventa);
    }

    if (estadoFiltros.ordenPrecio === "asc") {
      filtrados.sort((a, b) => a.precio - b.precio);
    } else if (estadoFiltros.ordenPrecio === "desc") {
      filtrados.sort((a, b) => b.precio - a.precio);
    }

    renderAlbums(filtrados, "lista-albums");
  }

  // 🧠 Actualiza el estado y aplica filtros
  function actualizarEstado(tipo, valor) {
    if (estadoFiltros[tipo] === valor) {
      // Si se hace clic en el mismo valor → se desactiva
      estadoFiltros[tipo] = null;
    } else {
      estadoFiltros[tipo] = valor;
    }
    aplicarFiltros();
  }

  /* -------------------------
   💿 DIVS DE CATEGORÍA (Vinilo, CD, Cassette)
  -------------------------- */
  const divsCategoria = document.querySelectorAll(".producto[data-categoria]");
  divsCategoria.forEach(div => {
    div.addEventListener("click", () => {
      const esActivo = div.classList.contains("activo");

      // Quitar todos los activos
      divsCategoria.forEach(d => d.classList.remove("activo"));

      if (!esActivo) {
        div.classList.add("activo");
        actualizarEstado("categoria", div.dataset.categoria);
      } else {
        actualizarEstado("categoria", null);
      }
    });
  });

  /* -------------------------
   🏷️ FILTROS DE PROMOCIÓN Y PREVENTA
  -------------------------- */
  const botonesFiltro = document.querySelectorAll(".boton-filtro[data-filtro]");
  botonesFiltro.forEach(btn => {
    btn.addEventListener("click", () => {
      const esActivo = btn.classList.contains("activo");

      botonesFiltro.forEach(b => b.classList.remove("activo"));

      if (!esActivo) {
        btn.classList.add("activo");
        actualizarEstado("filtro", btn.dataset.filtro);
      } else {
        actualizarEstado("filtro", null);
      }
    });
  });

  /* -------------------------
   🧱 MENÚ DESPLEGABLE — EDICIÓN
  -------------------------- */
  const botonEdicion = document.querySelector(".boton-desplegable");
  const menuEdicion = document.querySelector(".menu-desplegable");

  if (botonEdicion && menuEdicion) {
    botonEdicion.addEventListener("click", (e) => {
      e.stopPropagation();
      menuEdicion.classList.toggle("mostrar");
    });

    document.addEventListener("click", (e) => {
      if (!menuEdicion.contains(e.target) && !botonEdicion.contains(e.target)) {
        menuEdicion.classList.remove("mostrar");
      }
    });

    const opcionesEdicion = menuEdicion.querySelectorAll("button[data-edicion]");
    opcionesEdicion.forEach(btn => {
      btn.addEventListener("click", () => {
        const valor = btn.dataset.edicion;
        const mismo = estadoFiltros.edicion === valor;

        if (mismo) {
          actualizarEstado("edicion", null);
          botonEdicion.classList.remove("activo");
        } else {
          actualizarEstado("edicion", valor);
          botonEdicion.classList.add("activo");
        }

        menuEdicion.classList.remove("mostrar");
      });
    });
  }

  /* -------------------------
   💰 MENÚ DESPLEGABLE — PRECIO
  -------------------------- */
  const botonPrecio = document.querySelector(".boton-desplegable-precio");
  const menuPrecio = document.querySelector(".menu-desplegable-precio");

  if (botonPrecio && menuPrecio) {
    botonPrecio.addEventListener("click", (e) => {
      e.stopPropagation();
      menuPrecio.classList.toggle("mostrar");
    });

    document.addEventListener("click", (e) => {
      if (!menuPrecio.contains(e.target) && !botonPrecio.contains(e.target)) {
        menuPrecio.classList.remove("mostrar");
      }
    });

    const opcionesPrecio = menuPrecio.querySelectorAll("button[data-precio]");
    opcionesPrecio.forEach(btn => {
      btn.addEventListener("click", () => {
        const valor = btn.dataset.precio;
        const mismo = estadoFiltros.ordenPrecio === valor;

        if (mismo) {
          actualizarEstado("ordenPrecio", null);
          botonPrecio.classList.remove("activo");
        } else {
          actualizarEstado("ordenPrecio", valor);
          botonPrecio.classList.add("activo");
        }

        menuPrecio.classList.remove("mostrar");
      });
    });
  }
});


