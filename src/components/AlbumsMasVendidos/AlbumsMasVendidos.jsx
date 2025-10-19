import { useEffect, useMemo, useState } from 'react'
import { albums } from '@data/albums'
import { BottonComprar } from '@components/common/BottonComprar/BottonComprar'

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
      <div className="contenedor-vendidos">
        {lista.map((album) => (
          <article key={album.album} className="card">
            <img src={album.imagen} alt={album.album} />
            <div className="card-body">
              <h3>{album.artista}</h3>
              <p>
                <strong>Álbum:</strong> {album.album}
              </p>
              <p>
                <strong>Formato:</strong> {album.formato}
              </p>
              <span className="precio">{formatearPrecio(album.precio)}</span>
              <BottonComprar />
            </div>
          </article>
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
