import { NavLink, Link } from 'react-router-dom'

const logoPrincipal = new URL('../../assets/img/logo/logo1.png', import.meta.url).href

export function Header({ onAbrirLogin }) {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logoPrincipal} alt="CD.Live" />
        <span className="brand-text">CD.Live</span>
      </Link>

      <nav className="menuPrincipal" aria-label="Navegación principal">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'enlaceMenu active' : 'enlaceMenu')}>
          Inicio
        </NavLink>
        <NavLink to="/instrumentos" className={({ isActive }) => (isActive ? 'enlaceMenu active' : 'enlaceMenu')}>
          Instrumentos
        </NavLink>
        <NavLink to="/albums" className={({ isActive }) => (isActive ? 'enlaceMenu active' : 'enlaceMenu')}>
          Álbums
        </NavLink>
        <NavLink to="/marcos" className={({ isActive }) => (isActive ? 'enlaceMenu active' : 'enlaceMenu')}>
          Marcos
        </NavLink>
      </nav>

      <section className="Buscador">
        <button type="submit" className="buscar" aria-label="Buscar">
          <span className="material-symbols-outlined">search</span>
        </button>
        <input placeholder="Buscar..." className="cajaBusqueda" />
        <button type="button" className="explorar" aria-label="Explorar">
          <span className="material-symbols-outlined">album</span>
        </button>
      </section>

      <nav className="UsuarioCarrito" aria-label="Acciones de usuario">
  <button type="button" className="Cuenta" onClick={onAbrirLogin} aria-label="Abrir inicio de sesión">
          <span className="material-symbols-outlined">person</span>
        </button>
        <button type="button" className="carrito" aria-label="Ver carrito">
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
      </nav>
    </header>
  )
}
