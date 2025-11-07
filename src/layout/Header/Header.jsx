import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import { Logo } from '@components/common/Logo/Logo'
import { useCarrito } from '../../context/useCarrito'
import './Header.css'

export function Header({ onOpenLogin }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [query, setQuery] = useState('')
  const { abrirCarrito, obtenerCantidadTotal } = useCarrito()
  const cantidadCarrito = obtenerCantidadTotal()

  useEffect(() => {
    if (location.pathname !== '/buscar') {
      return
    }

  const params = new URLSearchParams(location.search)
  const value = params.get('termino') ?? ''
    setQuery(value)
  }, [location.pathname, location.search])

  function manejarSubmit(evento) {
    evento.preventDefault()
    const valor = query.trim()

    if (!valor) {
      return
    }

  navigate(`/buscar?termino=${encodeURIComponent(valor)}`)
  }

  function manejarExplorar() {
    navigate('/buscar')
  }

  return (
    <header className="header">
      <Logo />

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

      <form className="Buscador" onSubmit={manejarSubmit} role="search">
        <button type="submit" className="buscar" aria-label="Buscar">
          <span className="material-symbols-outlined">search</span>
        </button>
        <input
          placeholder="Buscar..."
          className="cajaBusqueda"
          value={query}
          onChange={(evento) => setQuery(evento.target.value)}
          name="termino"
          autoComplete="off"
        />
        <button type="button" className="explorar" aria-label="Explorar" onClick={manejarExplorar}>
          <span className="material-symbols-outlined">album</span>
        </button>
      </form>

      <nav className="UsuarioCarrito" aria-label="Acciones de usuario">
        <button type="button" className="Cuenta" onClick={onOpenLogin} aria-label="Abrir inicio de sesión">
          <span className="material-symbols-outlined">person</span>
        </button>
        <button type="button" className="carrito" aria-label="Ver carrito" onClick={abrirCarrito}>
          <span className="material-symbols-outlined">shopping_cart</span>
          {cantidadCarrito > 0 && <span className="carrito-badge">{cantidadCarrito}</span>}
        </button>
      </nav>
    </header>
  )
}
