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

return (
        <section className="productosMasVendidos">
      <h2>Albums más Vendidos</h2>
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
