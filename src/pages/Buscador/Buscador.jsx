import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { albums } from '@data/albums'
import { instrumentos } from '@data/instrumentos'
import { BottonComprar } from '@components/common/BottonComprar/BottonComprar'
import { ProductCard } from '@components/common/ProductCard/ProductCard'

import './Buscador.css'

const precioFormato = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
})

function normalizarTexto(valor) {
  return valor
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
}

function crearEntradaAlbum(album) {
  return {
    id: `album-${album.album}-${album.artista}`,
    tipo: 'Álbum',
    titulo: album.album,
    descripcion: album.artista,
    detalle: album.formato,
    precio: album.precio,
    imagen: album.imagen,
    enlace: '/albums',
  }
}

function crearEntradaInstrumento(instrumento) {
  return {
    id: `instrumento-${instrumento.nombre}-${instrumento.descripcion}`,
    tipo: 'Instrumento',
    titulo: instrumento.nombre,
    descripcion: instrumento.descripcion,
    detalle: instrumento.tipo,
    precio: instrumento.precio,
    imagen: instrumento.imagen,
    enlace: '/instrumentos',
  }
}

export function Buscador() {
  const location = useLocation()
  const navigate = useNavigate()
  const parametros = useMemo(() => new URLSearchParams(location.search), [location.search])
  const termino = parametros.get('q')?.trim() ?? ''

  const resultados = useMemo(() => {
    if (!termino) {
      return []
    }

    const terminoNormalizado = normalizarTexto(termino)

    const coincidencias = []

    albums.forEach((album) => {
      const campos = [album.album, album.artista, album.categoria, album.formato]
      const coincide = campos.some((campo) => campo && normalizarTexto(String(campo)).includes(terminoNormalizado))

      if (coincide) {
        coincidencias.push(crearEntradaAlbum(album))
      }
    })

    instrumentos.forEach((instrumento) => {
      const categorias = Array.isArray(instrumento.categoria) ? instrumento.categoria : [instrumento.categoria]
      const campos = [instrumento.nombre, instrumento.descripcion, instrumento.tipo, ...categorias]
      const coincide = campos.some((campo) => campo && normalizarTexto(String(campo)).includes(terminoNormalizado))

      if (coincide) {
        coincidencias.push(crearEntradaInstrumento(instrumento))
      }
    })

    return coincidencias.sort((a, b) => a.titulo.localeCompare(b.titulo))
  }, [termino])

  const sugerencias = useMemo(() => {
    if (termino) {
      return []
    }

    const destacadosAlbums = albums.filter((album) => album.masVendido).slice(0, 4).map(crearEntradaAlbum)
    const destacadosInstrumentos = instrumentos.filter((item) => item.masComprado).slice(0, 4).map(crearEntradaInstrumento)

    return [...destacadosAlbums, ...destacadosInstrumentos]
  }, [termino])

  const elementos = termino ? resultados : sugerencias
  const hayResultados = elementos.length > 0

  return (
    <section className="searchPage">
      <header className="searchHeader">
        <h1>{termino ? `Resultados para "${termino}"` : 'Explora nuestro catálogo'}</h1>
        <p>
          {termino
            ? hayResultados
              ? 'Selecciona un resultado para continuar explorando.'
              : 'No encontramos coincidencias, intenta con otra palabra clave.'
            : 'Te dejamos algunas sugerencias destacadas mientras decides qué buscar.'}
        </p>
      </header>

      {hayResultados ? (
        <div className="searchResults productGrid">
          {elementos.map((item) => (
            <ProductCard
              key={item.id}
              imageSrc={item.imagen}
              imageAlt={item.titulo}
              className="searchCard"
              bodyClassName="searchBody"
            >
              <span className="searchTag">{item.tipo}</span>
              <h3>{item.titulo}</h3>
              {item.descripcion && <p className="searchDescription">{item.descripcion}</p>}
              <div className="searchMeta">
                {item.detalle && <span className="searchDetail">{item.detalle}</span>}
                {typeof item.precio === 'number' && (
                  <span className="searchPrice">{precioFormato.format(item.precio)}</span>
                )}
              </div>
              <BottonComprar className="searchButton" onClick={() => navigate(item.enlace)}>
                Comprar
              </BottonComprar>
            </ProductCard>
          ))}
        </div>
      ) : (
        <div className="searchEmpty">
          <span className="material-symbols-outlined" aria-hidden="true">
            search
          </span>
          <p>{termino ? 'Ajusta tu búsqueda y vuelve a intentarlo.' : 'Empieza escribiendo algo en la barra superior.'}</p>
        </div>
      )}
    </section>
  )
}
