

/* ===========================
 🎠 CARRUSEL DE ARTISTAS DESTACADOS
=========================== */
const contenedorArtistas = document.querySelector(".contenedorArtista");
if (contenedorArtistas) {
  const artistas = document.querySelectorAll(".contenedorArtista .artista");
  const btnIzq = document.querySelector(".btnIsquierda");
  const btnDer = document.querySelector(".btnDerecha");

  let visible = 5;
  let paso = 100 / visible;
  let index = visible;

  const primeros = [...artistas].slice(0, visible).map(a => a.cloneNode(true));
  const ultimos = [...artistas].slice(-visible).map(a => a.cloneNode(true));

  primeros.forEach(a => contenedorArtistas.appendChild(a));
  ultimos.forEach(a => contenedorArtistas.insertBefore(a, contenedorArtistas.firstChild));

  const total = document.querySelectorAll(".contenedorArtista .artista").length;
  contenedorArtistas.style.transform = `translateX(-${index * paso}%)`;

  function moverCarrusel(direccion) {
    index += direccion;
    contenedorArtistas.style.transition = "transform 0.5s ease-in-out";
    contenedorArtistas.style.transform = `translateX(-${index * paso}%)`;

    contenedorArtistas.addEventListener("transitionend", () => {
      if (index >= total - visible) {
        index = visible;
        contenedorArtistas.style.transition = "none";
        contenedorArtistas.style.transform = `translateX(-${index * paso}%)`;
      }
      if (index < visible) {
        index = total - (visible * 2);
        contenedorArtistas.style.transition = "none";
        contenedorArtistas.style.transform = `translateX(-${index * paso}%)`;
      }
    }, { once: true });
  }

  btnDer?.addEventListener("click", () => moverCarrusel(1));
  btnIzq?.addEventListener("click", () => moverCarrusel(-1));
}