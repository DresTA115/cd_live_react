import { useEffect, useState } from 'react'
import { obtenerAsset } from '@datos/obtenerAsset'

const videoFondo = obtenerAsset('video/308104_medium.mp4')

export function ModalLogin({ abierto, onCerrar, onIrRegistro }) {
  const [correo, setCorreo] = useState('')
  const [clave, setClave] = useState('')

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

  function manejarEnvio(evento) {
    evento.preventDefault()
    alert('Iniciando sesión...')
    setCorreo('')
    setClave('')
    onCerrar()
  }

  return (
    <div className="LoginCuenta Active" onClick={onCerrar}>
      <div className="LoginContenedor" onClick={(evento) => evento.stopPropagation()}>
        <button type="button" className="LoginClose" onClick={onCerrar}>
          X
        </button>
        <div className="LoginIzquierda">
          <video src={videoFondo} autoPlay muted loop />
        </div>
        <div className="LoginDerecha">
          <form className="LoginForm" onSubmit={manejarEnvio}>
            <h3>INICIAR SESIÓN</h3>
            <input
              type="email"
              placeholder="EMAIL"
              required
              value={correo}
              onChange={(evento) => setCorreo(evento.target.value)}
            />
            <input
              type="password"
              placeholder="CLAVE"
              required
              value={clave}
              onChange={(evento) => setClave(evento.target.value)}
            />
            <button type="submit">INGRESAR</button>

            <p className="Continuar">O continúa con</p>
            <div className="Social">
              <i className="fa-brands fa-google" />
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-apple" />
            </div>
            <p className="Registro">¿NO TIENES UNA CUENTA?</p>
            <button type="button" className="BotonRegistro" onClick={onIrRegistro}>
              CREAR CUENTA
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
