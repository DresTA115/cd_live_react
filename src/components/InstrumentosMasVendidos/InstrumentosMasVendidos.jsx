import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import instrumentosData from '@api/instrumentos.json'
import { obtenerAsset } from '@data/obtenerAsset'
import { BottonComprar } from '@components/common/BottonComprar/BottonComprar'
import { ProductCard } from '@components/common/ProductCard/ProductCard'
import { useCarrito } from '../../context/useCarrito'

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

const instrumentos = instrumentosData

export function InstrumentosMasVendidos() {
  const [limite, setLimite] = useState(() => obtenerLimite())
  const { agregarAlCarrito, abrirCarrito } = useCarrito()

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

  const manejarComprar = (evento, instrumento) => {
    evento.preventDefault()
    evento.stopPropagation()

    const productoCarrito = {
      id: `${instrumento.nombre}-${instrumento.descripcion || instrumento.detalle}`,
      titulo: instrumento.nombre,
      artista: instrumento.descripcion || instrumento.detalle || '',
      precio: formatearPrecio(instrumento.precio),
      imagen: instrumento.imagen,
      categoria: instrumento.categoria,
    }

    agregarAlCarrito(productoCarrito)
    abrirCarrito()
  }

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
              imageSrc={obtenerAsset(instrumento.imagen) || instrumento.imagen}
              imageAlt={instrumento.nombre}
            >
              <h3>{instrumento.nombre}</h3>
              <p>{instrumento.descripcion}</p>
              <span className="precio">{formatearPrecio(instrumento.precio)}</span>
              <BottonComprar onClick={(e) => manejarComprar(e, instrumento)} />
            </ProductCard>
          </Link>
        ))}
      </div>
    </section>
  )
}