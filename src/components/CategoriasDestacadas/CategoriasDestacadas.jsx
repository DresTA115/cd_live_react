import { Link } from 'react-router-dom'
import categoriasData from '@data/categoriasInicio.json'
import { obtenerAsset } from '@data/obtenerAsset'

import './CategoriasDestacadas.css'

const categoriasInicio = categoriasData.map((categoria) => ({
  ...categoria,
  imagen: obtenerAsset(categoria.imagen, { optional: true }) || categoria.imagen,
}))

export function CategoriasDestacadas() {
  return (
    <section className="productos">
      <h2>Productos</h2>
      <div className="contenedorProductos">
        {categoriasInicio.map((categoria) => (
          <Link key={categoria.titulo} to={categoria.ruta} className="producto">
            <img src={categoria.imagen} alt={categoria.titulo} />
            <p>{categoria.titulo}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
