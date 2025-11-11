import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Albums.css'

import albumsData from '@api/albums.json'
import { obtenerAsset } from '@data/obtenerAsset'
import { BottonComprar } from '@components/common/BottonComprar/BottonComprar'
import { ProductCard } from '@components/common/ProductCard/ProductCard'
import { AlbumsFilters } from '@components/AlbumsFilters/AlbumsFilters'
import { CategoriasAlbums } from '@components/CategoriasAlbums/CategoriasAlbums'
import { useCarrito } from '../../context/useCarrito'


const albums = albumsData.map((album) => ({
  ...album,
  imagen: obtenerAsset(album.imagen, { optional: true }) || album.imagen,
}))

const categorias = [
  { id: 'Vinilo', nombre: 'Vinilos', imagen: obtenerAsset('img/logo/LogoVinilo.png') },
  { id: 'Cassette', nombre: 'Cassette', imagen: obtenerAsset('img/logo/logoCassette.png') },
  { id: 'CD', nombre: 'CD', imagen: obtenerAsset('img/logo/logoCD.png') },
]

function formatearPrecio(valor) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(valor)
}

export function Albums() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null)
  const [edicionSeleccionada, setEdicionSeleccionada] = useState(null)
  const [filtroEspecial, setFiltroEspecial] = useState(null)
  const [ordenPrecio, setOrdenPrecio] = useState(null)
  const [menuEdicionVisible, setMenuEdicionVisible] = useState(false)
  const [menuPrecioVisible, setMenuPrecioVisible] = useState(false)

  const { agregarAlCarrito, abrirCarrito } = useCarrito()

  const refEdicion = useRef(null)
  const refPrecio = useRef(null)

  useEffect(() => {
    function cerrarMenus(evento) {
      if (refEdicion.current && !refEdicion.current.contains(evento.target)) {
        setMenuEdicionVisible(false)
      }
      if (refPrecio.current && !refPrecio.current.contains(evento.target)) {
        setMenuPrecioVisible(false)
      }
    }

    document.addEventListener('mousedown', cerrarMenus)
    return () => document.removeEventListener('mousedown', cerrarMenus)
  }, [])

  const listaFiltrada = useMemo(() => {
    let resultado = [...albums]

    if (categoriaSeleccionada) {
      resultado = resultado.filter((item) => item.categoria === categoriaSeleccionada)
    }

    if (edicionSeleccionada) {
      resultado = resultado.filter((item) => item.edicion === edicionSeleccionada)
    }

    if (filtroEspecial === 'Promocion') {
      resultado = resultado.filter((item) => item.promocion)
    } else if (filtroEspecial === 'Preventa') {
      resultado = resultado.filter((item) => item.preventa)
    }

    if (ordenPrecio === 'asc') {
      resultado.sort((a, b) => a.precio - b.precio)
    } else if (ordenPrecio === 'desc') {
      resultado.sort((a, b) => b.precio - a.precio)
    }

    return resultado
  }, [categoriaSeleccionada, edicionSeleccionada, filtroEspecial, ordenPrecio])

  const manejarSeleccionCategoria = (id) => {
    setCategoriaSeleccionada((actual) => (actual === id ? null : id))
  }

  function alternarFiltroEspecial(id) {
    setFiltroEspecial((actual) => (actual === id ? null : id))
  }

  function seleccionarEdicion(valor) {
    setEdicionSeleccionada((actual) => (actual === valor ? null : valor))
    setMenuEdicionVisible(false)
  }

  function seleccionarPrecio(valor) {
    setOrdenPrecio((actual) => (actual === valor ? null : valor))
    setMenuPrecioVisible(false)
  }

  const manejarAgregarAlCarrito = (evento, album) => {
    evento.preventDefault()
    evento.stopPropagation()
    
    const productoCarrito = {
      id: `${album.album}-${album.artista}-${album.categoria}`,
      titulo: album.album,
      artista: album.artista,
      precio: album.precio,
      imagen: album.imagen,
      categoria: album.categoria,
    }
    
    agregarAlCarrito(productoCarrito)
    abrirCarrito()
  }

  return (
    <div className="paginaAlbums">
      <CategoriasAlbums
        categorias={categorias}
        categoriaSeleccionada={categoriaSeleccionada}
        onSeleccionarCategoria={manejarSeleccionCategoria}
      />

      <AlbumsFilters
        refEdicion={refEdicion}
        refPrecio={refPrecio}
        edicionSeleccionada={edicionSeleccionada}
        ordenPrecio={ordenPrecio}
        filtroEspecial={filtroEspecial}
        menuEdicionVisible={menuEdicionVisible}
        menuPrecioVisible={menuPrecioVisible}
        onToggleEdicionMenu={() => setMenuEdicionVisible((visible) => !visible)}
        onTogglePrecioMenu={() => setMenuPrecioVisible((visible) => !visible)}
        onSeleccionarEdicion={seleccionarEdicion}
        onSeleccionarPrecio={seleccionarPrecio}
        onAlternarFiltroEspecial={alternarFiltroEspecial}
      />

      <div className="titulo">
        <h2>Productos</h2>
      </div>

      <section className="Instrumentos">
        <div className="productGrid">
          {listaFiltrada.map((album) => (
            <Link
              key={`${album.album}-${album.artista}-${album.categoria}`}
              to="/vista-album"
              state={album}
              className="productLink"
            >
              <ProductCard
                imageSrc={album.imagen}
                imageAlt={album.album}
              >
                <h3>{album.album}</h3>
                <p>{album.artista}</p>
                <span className="precio">{formatearPrecio(album.precio)}</span>
                <BottonComprar onClick={(e) => manejarAgregarAlCarrito(e, album)} />
              </ProductCard>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
