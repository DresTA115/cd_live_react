import './Productos.css'
import { useEffect } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { PresentacionDetalle } from '@components/common/PresentacionDetalle'
import instrumentos from '../../api/instrumentos.json'
import { BottonComprar } from '@components/common/BottonComprar/BottonComprar'
import { obtenerAsset } from '../../data/obtenerAsset'
import { useCarrito } from '../../context/useCarrito'



export function Productos() {
  const location = useLocation()
  const navigate = useNavigate()
  const { agregarAlCarrito, abrirCarrito } = useCarrito()
  const producto = location.state

  // Scroll al inicio cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  // Función para formatear precios
  const formatearPrecio = (valor) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(valor)
  }

  // Función para navegar a otro producto
  const manejarClickProducto = (item) => {
    navigate('/productos', { state: item })
    window.scrollTo(0, 0) // Scroll al inicio de la página
  }

  // Función para agregar al carrito
  const manejarAgregarAlCarrito = (e, item) => {
    e.stopPropagation() // Evita que se active el clic en la tarjeta
    
    const productoCarrito = {
      id: `${item.nombre}-${item.descripcion}`,
      titulo: item.nombre,
      artista: item.descripcion || '',
      precio: formatearPrecio(item.precio),
      imagen: item.imagen,
      categoria: item.categoria,
    }
    
    agregarAlCarrito(productoCarrito)
    abrirCarrito()
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

      <PresentacionDetalle producto={producto} tipo="instrumento" />

      <h2 className="similares">Productos similares</h2>

      {/* 🔹 Contenedor de tarjetas similares */}

      <div className="contenedorSimilares">
        {productosSimilares.map((item, index) => (
          <div 
            className="tarjetaSimilares" 
            key={index}
            onClick={() => manejarClickProducto(item)}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={obtenerAsset(item.imagen)}
              alt={item.nombre}
              className="imagenSimilares"
            />
            <h3 className='nombreSimilares'>{item.nombre}</h3>
            <p className='descripcionSimilares'>{item.descripcion}</p>
            <p className="precio">{formatearPrecio(item.precio)}</p>
            <BottonComprar 
              onClick={(e) => manejarAgregarAlCarrito(e, item)} 
            />
          </div>
        ))}
      </div>

      <Link to="/instrumentos" className="volverLink">
        Volver a Intrumentos
      </Link>
    </div>
  )
}