import { useEffect, useState } from 'react'
import { obtenerAsset } from '@data/obtenerAsset'

import './ModalRegistro.css'

const videoFondo = obtenerAsset('video/308104_medium.mp4')

const estadoInicial = {
  nombre: '',
  telefono: '',
  correo: '',
  correoRepetido: '',
  pais: '',
  ciudad: '',
  clave: '',
  claveRepetida: '',
}

export function ModalRegistro({ abierto, onCerrar, onIrLogin, onRegistroExitoso }) {
  const [formulario, setFormulario] = useState(estadoInicial)

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

  function actualizarCampo(evento) {
    const { name, value } = evento.target
    setFormulario((datos) => ({ ...datos, [name]: value }))
  }

  function manejarEnvio(evento) {
    evento.preventDefault()
    if (formulario.correo !== formulario.correoRepetido) {
      alert('⚠️ Los correos deben coincidir')
      return
    }
    if (formulario.clave !== formulario.claveRepetida) {
      alert('⚠️ Las claves deben coincidir')
      return
    }
    setFormulario(estadoInicial)
    onRegistroExitoso()
  }

  return (
    <div className="RegistroCuenta Active" onClick={onCerrar}>
      <div className="RegistroContenedor" onClick={(evento) => evento.stopPropagation()}>
        <div className="RegistroBotones">
          <button type="button" className="RegistroBack" onClick={onIrLogin}>
            <i className="fa-solid fa-arrow-left" />
          </button>
          <button type="button" className="RegistroClose" onClick={onCerrar}>
            X
          </button>
        </div>
        <div className="RegistroIzquierda">
          <video src={videoFondo} autoPlay muted loop />
        </div>

        <div className="RegistroDerecha">
          <form className="RegistroForm" onSubmit={manejarEnvio}>
            <h3>REGISTRO</h3>
            <input name="nombre" type="text" placeholder="NOMBRE COMPLETO" required value={formulario.nombre} onChange={actualizarCampo} />
            <input name="telefono" type="tel" placeholder="CELULAR" required value={formulario.telefono} onChange={actualizarCampo} />
            <input name="correo" type="email" placeholder="EMAIL" required value={formulario.correo} onChange={actualizarCampo} />
            <input
              name="correoRepetido"
              type="email"
              placeholder="REPETIR EMAIL"
              required
              value={formulario.correoRepetido}
              onChange={actualizarCampo}
            />
            <input name="pais" type="text" placeholder="PAÍS" required value={formulario.pais} onChange={actualizarCampo} />
            <input name="ciudad" type="text" placeholder="CIUDAD" required value={formulario.ciudad} onChange={actualizarCampo} />
            <input name="clave" type="password" placeholder="CLAVE" required value={formulario.clave} onChange={actualizarCampo} />
            <input
              name="claveRepetida"
              type="password"
              placeholder="REPETIR CLAVE"
              required
              value={formulario.claveRepetida}
              onChange={actualizarCampo}
            />

            <button type="submit" className="RegistroBoton">
              CREAR CUENTA
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
