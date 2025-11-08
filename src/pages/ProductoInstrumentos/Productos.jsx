import './Productos.css'
import { useLocation, Link } from 'react-router-dom'
import { PresentacionProducto } from '../../components/PresentacionProducto/PresentacionProducto'
import instrumentos from '../../api/instrumentos.json'
import { BottonComprar } from '@components/common/BottonComprar/BottonComprar'



export function Productos() {
  const location = useLocation()
  const producto = location.state
  
  // Función para formatear precios
  const formatearPrecio = (valor) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(valor)
  }

  if (!producto) {
    return (
      <div className="errorContainer">
        <p>No hay datos disponibles</p>
        <Link to="/instrumentos">Volver</Link>
      </div>
    )
  }

  // 🔹 Filtramos productos similares (misma categoría, diferente nombre)
  const productosSimilares = instrumentos
    .filter(
      (item) =>
        item.categoria === producto.categoria && item.nombre !== producto.nombre
    )
    .slice(0, 4) // mostramos solo 4

  return (
    <div className="paginaProducto">
      <h1>Detalle del Producto</h1>

      <PresentacionProducto producto={producto} />

      <h2 className="similares">Productos similares</h2>

      {/* 🔹 Contenedor de tarjetas similares */}

      <div className="contenedorSimilares">
        {productosSimilares.map((item, index) => (
          <div className="tarjetaSimilares" key={index}>
            <img
              src={item.imagen}
              alt={item.nombre}
              className="imagenSimilares"
            />
            <h3 className='nombreSimilares'>{item.nombre}</h3>
            <p className='descripcionSimilares'>{item.descripcion}</p>
            <p className="precio">{formatearPrecio(item.precio)}</p>
            <BottonComprar onClick={(e) => manejarAgregarAlCarrito(e, instrumento)} />
          </div>
        ))}
      </div>

      <Link to="/albums" className="volverLink">
        Volver
      </Link>
    </div>
  )
}