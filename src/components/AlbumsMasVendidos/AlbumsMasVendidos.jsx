import { useEffect, useMemo, useState } from 'react'
import { albums } from '@data/albums'
import { BottonComprar } from '@components/common/BottonComprar/BottonComprar'
import { ProductCard } from '@components/common/ProductCard/ProductCard'

import './AlbumsMasVendidos.css'

function formatearPrecio(valor) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(valor)
}

export function AlbumsMasVendidos() {
  const [limite, setLimite] = useState(() => obtenerLimite())

  useEffect(() => {
    function manejarResize() {
      setLimite(obtenerLimite())
    }

    window.addEventListener('resize', manejarResize)
    return () => window.removeEventListener('resize', manejarResize)
  }, [])

  const lista = useMemo(
    () => albums.filter((item) => item.masVendido).slice(0, limite),
    [limite],
  )

  return (
    <section className="albumsMasVendidos">
      <h2>Álbums más Vendidos</h2>
  <div className="contenedor-vendidos productGrid">
        {lista.map((album) => (
          <ProductCard
            key={album.album}
            imageSrc={album.imagen}
            imageAlt={album.album}
          >
            <h3>{album.artista}</h3>
            <p>
              <strong>Álbum:</strong> {album.album}
            </p>
            <p>
              <strong>Formato:</strong> {album.formato}
            </p>
            <span className="precio">{formatearPrecio(album.precio)}</span>
            <BottonComprar />
          </ProductCard>
        ))}
      </div>
    </section>
  )
}

function obtenerLimite() {
  if (typeof window === 'undefined') {
    return 4
  }
  return window.innerWidth <= 768 ? 3 : 4
}
