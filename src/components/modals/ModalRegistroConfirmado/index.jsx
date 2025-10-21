import { useEffect } from 'react'

import './ModalRegistroConfirmado.css'

export function ModalRegistroConfirmado({ abierto, onCerrar, onVerPerfil }) {
  useEffect(() => {
    if (!abierto) {
      return
    }

    function manejarEscape(evento) {
      if (evento.key === 'Escape') {
        onCerrar()
      }
    }

    document.addEventListener('keydown', manejarEscape)
    return () => document.removeEventListener('keydown', manejarEscape)
  }, [abierto, onCerrar])

  if (!abierto) {
    return null
  }

  function manejarVerPerfil() {
    if (onVerPerfil) {
      onVerPerfil()
    } else {
      onCerrar()
    }
  }

  return (
    <div className="modalRegistroConfirmado-overlay" onClick={onCerrar}>
      <div className="modalRegistroConfirmado-contenedor" onClick={(evento) => evento.stopPropagation()}>
        <button type="button" className="modalRegistroConfirmado-cerrar" onClick={onCerrar} aria-label="Cerrar">
          ×
        </button>

        <div className="modalRegistroConfirmado-icono" aria-hidden="true">
          <span className="material-symbols-outlined">check</span>
        </div>

        <h2 className="modalRegistroConfirmado-titulo">Cuenta Creada</h2>

        <ul className="modalRegistroConfirmado-lista">
          <li className="modalRegistroConfirmado-item">
            <span className="material-symbols-outlined">check_circle</span>
            <span>Completar información de registro</span>
          </li>
          <li className="modalRegistroConfirmado-item">
            <span className="material-symbols-outlined">check_circle</span>
            <span>Registro de tarjeta</span>
          </li>
        </ul>

        <button type="button" className="btnVerPerfil" onClick={manejarVerPerfil}>
          Ver mi perfil
        </button>
      </div>
    </div>
  )
}
