import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import albumsData from '@api/albums.json'
import { obtenerAsset } from '@data/obtenerAsset'
import { BottonComprar } from '@components/common/BottonComprar/BottonComprar'
import { ProductCard } from '@components/common/ProductCard/ProductCard'
import { useCarrito } from '../../context/useCarrito'

import './AlbumsMasVendidos.css'

const albums = albumsData

function formatearPrecio(valor) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(valor)
}

export function AlbumsMasVendidos() {
  const [limite, setLimite] = useState(() => obtenerLimite())
  const { agregarAlCarrito, abrirCarrito } = useCarrito()

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

  const manejarComprar = (evento, album) => {
    evento.preventDefault()
    evento.stopPropagation()

    const productoCarrito = {
      id: `${album.album}-${album.artista}-${album.categoria}`,
      titulo: album.album,
      artista: album.artista,
      precio: formatearPrecio(album.precio),
      imagen: album.imagen,
      categoria: album.categoria,
    }

    agregarAlCarrito(productoCarrito)
    abrirCarrito()
  }

  return (
    <section className="albumsMasVendidos">
      <h2>Álbums más Vendidos</h2>
      <div className="productGrid">
        {lista.map((album) => (
          <Link
            key={album.album}
            to="/vista-album"
            state={album}
            className="productLink"
          >
            <ProductCard
              imageSrc={obtenerAsset(album.imagen) || album.imagen}
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
              <BottonComprar onClick={(e) => manejarComprar(e, album)} />
            </ProductCard>
          </Link>
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
