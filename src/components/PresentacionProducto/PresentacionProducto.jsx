import './PresentacionProducto.css'
import { BottonComprar } from '@components/common/BottonComprar/BottonComprar'
import { useCarrito } from '../../context/useCarrito'

export function PresentacionProducto({ producto }) {
  const { agregarAlCarrito, abrirCarrito } = useCarrito()

  if (!producto) {
    return (
      <div className="contenedorPresentacion">
        <article className="tarjetaProducto">
          <p>No hay datos disponibles.</p>
        </article>
      </div>
    )
  }

  const formatearPrecio = (valor) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(valor)
  }

  const manejarAgregarAlCarrito = () => {
    const productoCarrito = {
      id: `${producto.nombre}-${producto.descripcion || producto.detalle}`,
      titulo: producto.nombre,
      artista: producto.descripcion || producto.detalle || '',
      precio: formatearPrecio(producto.precio),
      imagen: producto.imagen,
      categoria: producto.categoria,
    }
    
    agregarAlCarrito(productoCarrito)
    abrirCarrito()
  }

  return (
    <div className="contenedorPresentacion">
      {/* Primera tarjeta: Imagen y precio */}
      <article className="tarjetaProducto">
        {producto.imagen && (
          <img 
            src={producto.imagen} 
            alt={producto.nombre} 
            className="imagenProducto" 
          />
        )}
      </article>

      {/* Segunda tarjeta: Nombre y detalle */}
      <article className="tarjetaProducto">
        <h2 className='nombre'>{producto.nombre}</h2>
        <p className="descripcionProducto">
          {producto.detalle}
        </p>
        <div className="precioProducto">
          {formatearPrecio(producto.precio)}
          <div><BottonComprar onClick={manejarAgregarAlCarrito} /></div>
        </div>
      </article>
    </div>
  )
}