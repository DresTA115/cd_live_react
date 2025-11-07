import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import './Instrumentos.css'

import instrumentosData from '@api/instrumentos.json'
import { obtenerAsset } from '@data/obtenerAsset'
import { BottonComprar } from '@components/common/BottonComprar/BottonComprar'
import { ProductCard } from '@components/common/ProductCard/ProductCard'
import { CategoriasInstrumentos } from '@components/CategoriasInstrumentos/CategoriasInstrumentos'
import { useCarrito } from '../../context/useCarrito'

const instrumentos = instrumentosData.map((instrumento) => ({
  ...instrumento,
  imagen: obtenerAsset(instrumento.imagen, { optional: true }) || instrumento.imagen,
}))

const categorias = [
  { id: 'cuerda', nombre: 'Cuerda', imagen: obtenerAsset('img/instrumentos/LogoCuerda.png') },
  { id: 'viento', nombre: 'Viento', imagen: obtenerAsset('img/instrumentos/LogoViento.png') },
  { id: 'percusion', nombre: 'Percusión', imagen: obtenerAsset('img/instrumentos/LogoPercusion.png') },
  { id: 'electricos', nombre: 'Electrónicos', imagen: obtenerAsset('img/instrumentos/LogoElectricos.png') },
]

function formatearPrecio(valor) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(valor)
}

export function Instrumentos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null)
  const { agregarAlCarrito, abrirCarrito } = useCarrito()

  const manejarSeleccionCategoria = (id) => {
    setCategoriaSeleccionada((actual) => (actual === id ? null : id))
  }

  const listaFiltrada = useMemo(() => {
    if (!categoriaSeleccionada) {
      return instrumentos
    }
    return instrumentos.filter((item) => {
      if (Array.isArray(item.categoria)) {
        return item.categoria.includes(categoriaSeleccionada)
      }
      return item.categoria === categoriaSeleccionada
    })
  }, [categoriaSeleccionada])

  const manejarAgregarAlCarrito = (evento, instrumento) => {
    evento.preventDefault()
    evento.stopPropagation()
    
    const productoCarrito = {
      id: `${instrumento.nombre}-${instrumento.descripcion}`,
      titulo: instrumento.nombre,
      artista: instrumento.descripcion,
      precio: formatearPrecio(instrumento.precio),
      imagen: instrumento.imagen,
      categoria: instrumento.categoria,
    }
    
    agregarAlCarrito(productoCarrito)
    abrirCarrito()
  }

  return (
    <div className="paginaInstrumentos">
      <CategoriasInstrumentos
        categorias={categorias}
        categoriaSeleccionada={categoriaSeleccionada}
        onSeleccionarCategoria={manejarSeleccionCategoria}
      />

      <div className="titulo">
        <h2>Productos</h2>
      </div>

      <section className="Instrumentos">
        <div className="productGrid">
          {listaFiltrada.map((instrumento) => (
            <Link
              key={`${instrumento.nombre}-${instrumento.descripcion}`}
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
                <BottonComprar onClick={(e) => manejarAgregarAlCarrito(e, instrumento)} />
              </ProductCard>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
