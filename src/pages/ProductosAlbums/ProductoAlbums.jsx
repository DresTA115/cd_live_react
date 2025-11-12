import './ProductoAlbums.css'
import { useEffect } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { PresentacionDetalle } from '@components/common/PresentacionDetalle'
import albums from '../../api/albums.json'
import { BottonComprar } from '@components/common/BottonComprar/BottonComprar'
import { obtenerAsset } from '../../data/obtenerAsset'
import { useCarrito } from '../../context/useCarrito'


export function ProductoAlbums() {
  const location = useLocation()
  const navigate = useNavigate()
  const { agregarAlCarrito, abrirCarrito } = useCarrito()
  const album = location.state

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

  // Función para navegar a otro álbum
  const manejarClickAlbum = (item) => {
    navigate('/vista-album', { state: item })
    window.scrollTo(0, 0) // Scroll al inicio de la página
  }

  // Función para agregar al carrito
  const manejarAgregarAlCarrito = (e, item) => {
    e.stopPropagation() // Evita que se active el clic en la tarjeta
    
    const productoCarrito = {
      id: `${item.album}-${item.artista}-${item.categoria}`,
      titulo: item.album,
      artista: item.artista,
      precio: formatearPrecio(item.precio),
      imagen: item.imagen,
      categoria: item.categoria,
    }
    
    agregarAlCarrito(productoCarrito)
    abrirCarrito()
  }

  if (!album) {
    return (
      <div className="errorContainer">
        <p>No hay datos disponibles</p>
        <Link to="/albums">Volver</Link>
      </div>
    )
  }

  // Filtramos álbumes similares (misma categoría, diferente álbum)
  const albumesSimilares = albums
    .filter(
      (item) =>
        item.categoria === album.categoria && item.album !== album.album
    )
    .slice(0, 4) // mostramos solo 4

  return (
    <div className="paginaProducto">
      <h1>Detalle del Álbum</h1>

      <PresentacionDetalle producto={album} tipo="album" />

      <h2 className="similares">Álbumes similares</h2>

      {/* Contenedor de tarjetas similares */}

      <div className="contenedorSimilares">
        {albumesSimilares.map((item, index) => (
          <div 
            className="tarjetaSimilares" 
            key={index}
            onClick={() => manejarClickAlbum(item)}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={obtenerAsset(item.imagen)}
              alt={item.album}
              className="imagenSimilares"
            />
            <h3 className='nombreSimilares'>{item.album}</h3>
            <p className='descripcionSimilares'>{item.artista}</p>
            <p className="precio">{formatearPrecio(item.precio)}</p>
            <BottonComprar 
              onClick={(e) => manejarAgregarAlCarrito(e, item)} 
            />
          </div>
        ))}
      </div>

      <Link to="/albums" className="volverLink">
        Volver a Albums
      </Link>
    </div>
  )
}
