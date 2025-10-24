import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import instrumentosData from '@api/instrumentos.json'
import { obtenerAsset } from '@data/obtenerAsset'
import { BottonComprar } from '@components/common/BottonComprar/BottonComprar'
import { ProductCard } from '@components/common/ProductCard/ProductCard'

import './InstrumentosMasVendidos.css'

function formatearPrecio(valor) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(valor)
}

function obtenerLimite() {
  if (typeof window === 'undefined') {
    return 4
  }
  return window.innerWidth <= 768 ? 2 : 4
}

const instrumentos = instrumentosData.map((instrumento) => ({
  ...instrumento,
  imagen: obtenerAsset(instrumento.imagen, { optional: true }) || instrumento.imagen,
}))

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
      <div className="productGrid">
        {lista.map((instrumento) => (
          <Link
            key={instrumento.nombre}
            to="/productos"
            state={instrumento}
            className="productLink"
          >
            <ProductCard
              imageSrc={instrumento.imagen}
              imageAlt={instrumento.nombre}
            >
              <h3>{instrumento.nombre}</h3>
              <p>{instrumento.descripcion}</p>
              <span className="precio">{formatearPrecio(instrumento.precio)}</span>
              <BottonComprar />
            </ProductCard>
          </Link>
        ))}
      </div>
    </section>
  )
}