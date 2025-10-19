import { useEffect, useMemo, useState } from 'react'
import { instrumentos } from '@data/instrumentos'

import './InstrumentosMasVendidos.css'

function formatearPrecio(valor) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(valor)
}

export function InstrumentosMasVendidos() {
  const [limite, setLimite] = useState(() => obtenerLimite())

  useEffect(() => {
    function manejarResize() {
      setLimite(obtenerLimite())
    }

    window.addEventListener('resize', manejarResize)
    return () => window.removeEventListener('resize', manejarResize)
  }, [])

  const lista = useMemo(
    () => instrumentos.filter((item) => item.masComprado).slice(0, limite),
    [limite],
  )

  return (
    <section className="productosMasVendidos">
      <h2>Instrumentos más Vendidos</h2>
      <div className="contenedor-vendidos">
        {lista.map((instrumento) => (
          <article key={instrumento.nombre} className="card">
            <img src={instrumento.imagen} alt={instrumento.nombre} />
            <div className="card-body">
              <h3>{instrumento.nombre}</h3>
              <p>{instrumento.descripcion}</p>
              <span className="precio">{formatearPrecio(instrumento.precio)}</span>
              <button type="button" className="btn-comprar">
                Comprar
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function obtenerLimite() {
  if (typeof window === 'undefined') {
    return 4
  }
  return window.innerWidth <= 768 ? 3 : 4
}
