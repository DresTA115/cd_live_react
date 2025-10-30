import { Albums } from '../pages/Albums/Albums'
import './PresentacionAlbums.css'
import { BottonComprar } from '@components/common/BottonComprar/BottonComprar'
import { AlbumsFilters } from '../AlbumsFilters/AlbumsFilters'

export function PresentacionAlbums({ Vista }) {
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

 /*  return (
    <div className="contenedorPresentacion">
      {/* Primera tarjeta: Imagen y precio }
      <article className="tarjetaProducto">
        {Albums.imagen && (
          <img 
            src={producto.imagen} 
            alt={producto.nombre} 
            className="imagenProducto" 
          />
        )}
      </article>

      {/* Segunda tarjeta: Nombre y detalle }
      <article className="tarjetaProducto">
        <h2 className='nombre'>{Albums.nombre}</h2>
        <p className="descripcionProducto">
          {Albums.detalle}
        </p>
        <div className="precioProducto">
          {formatearPrecio(Albums.precio)}
          <div><BottonComprar /></div>
        </div>
      </article>
    </div> 
  )*/
return (
        <section className="productosMasVendidos">
      <h2>Instrumentos más Vendidos</h2>
      <div className="productGrid">
        {lista.map((album) => (
          <Link
            key={album.nombre}
            to="/productos"
            state={album}
            className="productLink"
          >
            <ProductCard
              imageSrc={album.imagen}
              imageAlt={album.nombre}
            >
              <h3>{album.nombre}</h3>
              <p>{album.descripcion}</p>
              <span className="precio">{formatearPrecio(album.precio)}</span>
              <BottonComprar />
            </ProductCard>
          </Link>
        ))}
      </div>
    </section>
)
} 
