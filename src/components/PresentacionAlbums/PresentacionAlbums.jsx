import './PresentacionAlbums.css'
import { BottonComprar } from '@components/common/BottonComprar/BottonComprar'
import { useCarrito } from '../../context/useCarrito'

export function PresentacionAlbums({ Vista }) {
  const { agregarAlCarrito, abrirCarrito } = useCarrito()

  if (!Vista) {
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

  const manejarAgregarAlCarrito = (evento) => {
    evento.preventDefault()
    evento.stopPropagation()
    
    const productoCarrito = {
      id: `${Vista.album}-${Vista.artista}-${Vista.categoria}`,
      titulo: Vista.album,
      artista: Vista.artista,
      precio: Vista.precio,
      imagen: Vista.imagen,
      categoria: Vista.categoria,
    }
    
    agregarAlCarrito(productoCarrito)
    abrirCarrito()
  }

  return (
    <div className="contenedorPresentacion">
      <article className="tarjetaProducto">
        <div className="imagenProducto">
          <img src={Vista.imagen} alt={Vista.album} />
        </div>
        <div className="detallesProducto">
          <h2>{Vista.album}</h2>
          <p className="descripcion">{Vista.artista}</p>
          <p className="precio">{formatearPrecio(Vista.precio)}</p>
          <p className="categoria">Categoría: {Vista.categoria}</p>
          <BottonComprar onClick={manejarAgregarAlCarrito} />
        </div>
      </article>
    </div>
  )
} 
