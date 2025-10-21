import { useEffect, useState } from 'react'

import './ModalTarjeta.css'

const estadoInicial = {
  numero: '',
  titular: '',
  vencimiento: '',
  cvv: '',
}

export function ModalTarjeta({ abierto, onCerrar, onRegistroCompletado }) {
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
    const regexTarjeta = /^[0-9]{13,19}$/
    const regexFecha = /^(0[1-9]|1[0-2])\/[0-9]{2}$/
    const regexCVV = /^[0-9]{3}$/

    const numeroSinEspacios = formulario.numero.replace(/\s/g, '')

    if (!regexTarjeta.test(numeroSinEspacios)) {
      alert('⚠️ Número de tarjeta inválido')
      return
    }

    if (!regexFecha.test(formulario.vencimiento)) {
      alert('⚠️ Fecha inválida (usa MM/AA)')
      return
    }

    if (!regexCVV.test(formulario.cvv)) {
      alert('⚠️ CVV inválido')
      return
    }


    if (typeof onRegistroCompletado === 'function') {
      onRegistroCompletado()
      return
    }

    onCerrar()
  }

  return (
    <div className="TarjetaCuenta Active" onClick={onCerrar}>
      <div className="TarjetaContenedor" onClick={(evento) => evento.stopPropagation()}>
        <button type="button" className="TarjetaClose" onClick={onCerrar}>
          ×
        </button>
        <h3>Registrar Tarjeta</h3>
        <form onSubmit={manejarEnvio}>
          <label htmlFor="NumeroTarjeta">Número de tarjeta</label>
          <input
            id="NumeroTarjeta"
            name="numero"
            type="text"
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            required
            value={formulario.numero}
            onChange={actualizarCampo}
          />

          <label htmlFor="TitularTarjeta">Nombre del titular</label>
          <input
            id="TitularTarjeta"
            name="titular"
            type="text"
            placeholder="Como aparece en la tarjeta"
            required
            value={formulario.titular}
            onChange={actualizarCampo}
          />

          <div className="TarjetaDatosExtra">
            <div>
              <label htmlFor="FechaVencimiento">Vencimiento</label>
              <input
                id="FechaVencimiento"
                name="vencimiento"
                type="text"
                placeholder="MM/AA"
                maxLength={5}
                required
                value={formulario.vencimiento}
                onChange={actualizarCampo}
              />
            </div>
            <div>
              <label htmlFor="CVV">CVV</label>
              <input
                id="CVV"
                name="cvv"
                type="text"
                placeholder="123"
                maxLength={3}
                required
                value={formulario.cvv}
                onChange={actualizarCampo}
              />
            </div>
          </div>

          <button type="submit" className="TarjetaBoton">
            Guardar tarjeta
          </button>
        </form>
      </div>
    </div>
  )
}
