document.addEventListener("DOMContentLoaded", () => {
  // ====== LOGIN ======
  const BtnCuenta = document.querySelector('.Cuenta');
  const LoginCuenta = document.getElementById('LoginCuenta');
  const LoginContenedor = document.querySelector('.LoginContenedor');
  const LoginClose = document.getElementById('LoginClose');
  const BotonRegistro = document.getElementById('BotonRegistro');
  const LoginForm = document.getElementById('LoginForm');

  // ====== REGISTRO ======
  const RegistroCuenta = document.getElementById('RegistroCuenta');
  const RegistroContenedor = document.querySelector('.RegistroContenedor');
  const RegistroClose = document.getElementById('RegistroClose');
  const RegistroBack = document.getElementById('RegistroBack');
  const RegistroForm = document.getElementById('RegistroForm');

  // ====== TARJETA ======
  const TarjetaCuenta = document.getElementById('TarjetaCuenta');

  // ====== ABRIR LOGIN ======
  BtnCuenta?.addEventListener('click', () => {
    LoginCuenta.classList.add('Active');
  });

  // ====== CERRAR LOGIN (X) ======
  LoginClose?.addEventListener('click', () => {
    LoginCuenta.classList.remove('Active');
  });

  // ====== LOGIN → REGISTRO ======
  BotonRegistro?.addEventListener('click', (e) => {
    e.preventDefault();
    LoginCuenta.classList.remove('Active');
    RegistroCuenta.classList.add('Active');
  });

  // ====== REGISTRO → LOGIN (flecha ←) ======
  RegistroBack?.addEventListener('click', (e) => {
    e.stopPropagation();
    RegistroCuenta.classList.remove('Active');
    LoginCuenta.classList.add('Active');
  });

  // ====== CERRAR REGISTRO (X) ======
  RegistroClose?.addEventListener('click', () => {
    RegistroCuenta.classList.remove('Active');
  });

  // ====== CLIC FUERA DE LOGIN ======
  document.addEventListener('click', (e) => {
    if (
      LoginCuenta.classList.contains('Active') &&
      !LoginContenedor.contains(e.target) &&
      !BtnCuenta.contains(e.target)
    ) {
      LoginCuenta.classList.remove('Active');
    }
  });

  // ====== CLIC FUERA DE REGISTRO ======
  document.addEventListener('click', (e) => {
    if (
      RegistroCuenta.classList.contains('Active') &&
      !RegistroContenedor.contains(e.target) &&
      !BotonRegistro.contains(e.target)
    ) {
      RegistroCuenta.classList.remove('Active');
    }
  });

  // ====== FORMULARIO LOGIN ======
  LoginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Iniciando sesión...");
  });

  // ====== FORMULARIO REGISTRO ======
  RegistroForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Cierra los modales actuales
    RegistroCuenta.classList.remove('Active');
    LoginCuenta.classList.remove('Active');

    // Abre automáticamente el modal de tarjeta
    if (TarjetaCuenta) {
      setTimeout(() => {
        TarjetaCuenta.classList.add('Active');
      }, 300); // pequeña pausa visual
    } else {
      console.error("⚠️ No se encontró el modal TarjetaCuenta");
    }
  });
});
