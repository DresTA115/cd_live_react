import './PresentacionDetalle.css'
import { BottonComprar } from '@components/common/BottonComprar/BottonComprar'
import { useCarrito } from '../../../context/useCarrito'
import { obtenerAsset } from '../../../data/obtenerAsset'

export function PresentacionDetalle({ producto, tipo = 'instrumento' }) {
  const { agregarAlCarrito, abrirCarrito } = useCarrito()

  if (!producto) {
    return (
      <div className={`contenedorPresentacion ${tipo}`}>
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

  const manejarAgregarAlCarrito = (evento) => {
    if (evento) {
      evento.preventDefault?.()
      evento.stopPropagation?.()
    }

    let productoCarrito

    if (tipo === 'album') {
      productoCarrito = {
        id: `${producto.album}-${producto.artista}-${producto.categoria}`,
        titulo: producto.album,
        artista: producto.artista,
        precio: formatearPrecio(producto.precio),
        imagen: producto.imagen,
        categoria: producto.categoria,
      }
    } else {
      // tipo === 'instrumento'
      productoCarrito = {
        id: `${producto.nombre}-${producto.descripcion || producto.detalle}`,
        titulo: producto.nombre,
        artista: producto.descripcion || producto.detalle || '',
        precio: formatearPrecio(producto.precio),
        imagen: producto.imagen,
        categoria: producto.categoria,
      }
    }
    
    agregarAlCarrito(productoCarrito)
    abrirCarrito()
  }

  // Renderizado para álbumes
  if (tipo === 'album') {
    return (
      <div className="contenedorPresentacion album">
        <article className="tarjetaProducto">
          <div className="imagenProducto">
            <img src={obtenerAsset(producto.imagen)} alt={producto.album} />
          </div>
          <div className="detallesProducto">
            <h2>{producto.album}</h2>
            <p className="descripcion">{producto.artista}</p>
            <p className="precio">{formatearPrecio(producto.precio)}</p>
            <p className="categoria">Categoría: {producto.categoria}</p>
            <BottonComprar onClick={manejarAgregarAlCarrito} />
          </div>
        </article>
      </div>
    )
  }

  // Renderizado para instrumentos (layout de 2 tarjetas)
  return (
    <div className="contenedorPresentacion instrumento">
      {/* Primera tarjeta: Imagen */}
      <article className="tarjetaProducto">
        {producto.imagen && (
          <img 
            src={obtenerAsset(producto.imagen)} 
            alt={producto.nombre} 
            className="imagenProducto" 
          />
        )}
      </article>

      {/* Segunda tarjeta: Detalles */}
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
