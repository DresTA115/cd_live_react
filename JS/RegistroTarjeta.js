document.addEventListener("DOMContentLoaded", () => {
  const TarjetaCuenta = document.getElementById("TarjetaCuenta");
  const TarjetaContenedor = document.querySelector(".TarjetaContenedor");
  const TarjetaClose = document.getElementById("TarjetaClose");
  const TarjetaForm = document.getElementById("TarjetaForm");

  // Cerrar modal (X o clic fuera)
  TarjetaClose.addEventListener("click", () => {
    TarjetaCuenta.classList.remove("Active");
  });

  document.addEventListener("click", (e) => {
    if (
      TarjetaCuenta.classList.contains("Active") &&
      !TarjetaContenedor.contains(e.target)
    ) {
      TarjetaCuenta.classList.remove("Active");
    }
  });

  // Validar y guardar tarjeta
  TarjetaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = document.getElementById("NumeroTarjeta").value.trim();
    const titular = document.getElementById("TitularTarjeta").value.trim();
    const fecha = document.getElementById("FechaVencimiento").value.trim();
    const cvv = document.getElementById("CVV").value.trim();

    const regexTarjeta = /^[0-9]{13,19}$/;
    const regexFecha = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const regexCVV = /^[0-9]{3}$/;

    if (!regexTarjeta.test(numero.replace(/\s/g, ""))) {
      alert("⚠️ Número de tarjeta inválido");
      return;
    }
    if (!regexFecha.test(fecha)) {
      alert("⚠️ Fecha inválida (usa MM/AA)");
      return;
    }
    if (!regexCVV.test(cvv)) {
      alert("⚠️ CVV inválido");
      return;
    }

    alert(`✅ Tarjeta registrada correctamente\nTitular: ${titular}`);
    TarjetaCuenta.classList.remove("Active");
    TarjetaForm.reset();
  });
});
