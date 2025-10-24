import { useEffect, useMemo, useState } from 'react'

import './Marcos.css'

import albumsData from '@api/albums.json'
import { obtenerAsset } from '@data/obtenerAsset'

export function Marcos() {
  const albums = useMemo(
    () =>
      albumsData.map((album) => {
        const imagenProcesada = obtenerAsset(album.imagen, { optional: true }) || album.imagen

        let imagenAlbumProcesada = ''
        if (album.imagenAlbum) {
          imagenAlbumProcesada = obtenerAsset(album.imagenAlbum, { optional: true }) || album.imagenAlbum
        }

        return {
          ...album,
          imagen: imagenProcesada,
          imagenAlbum: imagenAlbumProcesada,
        }
      }),
    [],
  )

  const crearIdAlbum = (item) => `${item.artista} - ${item.album}`
  const crearEtiquetaAlbum = (item) => `${item.artista} - ${item.album}`

  const [colorMarco, setColorMarco] = useState('negro')
  const [tamano, setTamano] = useState('mediano')
  const [albumSeleccionadoId, setAlbumSeleccionadoId] = useState(() => (albums[0] ? crearIdAlbum(albums[0]) : ''))
  const [busquedaAlbum, setBusquedaAlbum] = useState(() => (albums[0] ? crearEtiquetaAlbum(albums[0]) : ''))

  const colores = [
    { nombre: 'Rojo', valor: 'rojo', hex: '#aa1a1ae2' },
    { nombre: 'Negro', valor: 'negro', hex: '#000000' },
    { nombre: 'Roble', valor: 'roble', hex: '#b38b59' },
    { nombre: 'Nogal', valor: 'nogal', hex: '#6b4f3a' },
  ]

  const tamanos = {
    pequeño: '280px',
    mediano: '340px',
    grande: '420px',
  }

  const seleccionarAlbumPorId = (id) => {
    setAlbumSeleccionadoId(id)
    const encontrado = albums.find((item) => crearIdAlbum(item) === id)
    if (encontrado) {
      setBusquedaAlbum(crearEtiquetaAlbum(encontrado))
    }
  }

  const albumSeleccionado = useMemo(
    () => albums.find((item) => crearIdAlbum(item) === albumSeleccionadoId) ?? null,
    [albums, albumSeleccionadoId],
  )

  useEffect(() => {
    if (albumSeleccionado) {
      setBusquedaAlbum(crearEtiquetaAlbum(albumSeleccionado))
    }
  }, [albumSeleccionado])

  const opcionesAlbum = useMemo(
    () =>
      albums.map((item) => ({
        id: crearIdAlbum(item),
        etiqueta: crearEtiquetaAlbum(item),
      })),
    [albums],
  )

  const resultadosBusqueda = useMemo(() => {
    const termino = busquedaAlbum.trim().toLowerCase()
    if (!termino) {
      return opcionesAlbum
    }

    return opcionesAlbum.filter((opcion) => opcion.etiqueta.toLowerCase().includes(termino))
  }, [busquedaAlbum, opcionesAlbum])

  const sugerenciasVisibles = useMemo(() => resultadosBusqueda.slice(0, 6), [resultadosBusqueda])

  const confirmarBusquedaActual = () => {
    const termino = busquedaAlbum.trim().toLowerCase()
    if (!termino) {
      return
    }

    const coincidenciaExacta = albums.find(
      (item) => crearEtiquetaAlbum(item).toLowerCase() === termino,
    )

    if (coincidenciaExacta) {
      seleccionarAlbumPorId(crearIdAlbum(coincidenciaExacta))
      return
    }

    const coincidenciaParcial = albums.find((item) =>
      crearEtiquetaAlbum(item).toLowerCase().includes(termino),
    )

    if (coincidenciaParcial) {
      seleccionarAlbumPorId(crearIdAlbum(coincidenciaParcial))
    }
  }

  const imagenVinilo = albumSeleccionado?.imagenAlbum || ''
  const nombreAlbumSeleccionado = albumSeleccionado
    ? `${albumSeleccionado.artista} - ${albumSeleccionado.album}`
    : 'Selecciona un álbum'

  return (
    <div className="marcos-section">
      <h2 className="titulo">Visualiza tu vinilo en distintos marcos</h2>

      <div className="marco-wrapper">
        <div
          className="marco"
          style={{
            borderColor: colores.find((c) => c.valor === colorMarco).hex,
            width: tamanos[tamano],
            height: tamanos[tamano],
          }}
        >
          {imagenVinilo ? (
            <div className="vinilo">
              <img src={imagenVinilo} alt={nombreAlbumSeleccionado} />
            </div>
          ) : (
            <div className="vinilo-placeholder">No hay álbum disponible</div>
          )}
        </div>
      </div>

      <div className="opciones">
        <div className="colores">
          <h3>Colores del marco</h3>
          <div className="color-picker">
            {colores.map((c) => (
              <button
                key={c.valor}
                className={`color-btn ${
                  colorMarco === c.valor ? "activo" : ""
                }`}
                style={{ backgroundColor: c.hex }}
                onClick={() => setColorMarco(c.valor)}
                aria-label={`Color ${c.nombre}`}
              />
            ))}
          </div>
        </div>

        <div className="tamanos">
          <h3>Tamaño del marco</h3>
          <div className="tamano-picker">
            {Object.keys(tamanos).map((t) => (
              <button
                key={t}
                className={`tamano-btn ${tamano === t ? "activo" : ""}`}
                onClick={() => setTamano(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="albumes">
          <h3>Busca un álbum</h3>
          <div className="album-search">
            <input
              type="search"
              className="album-searchInput"
              placeholder="Escribe artista o álbum"
              value={busquedaAlbum}
              onChange={(event) => setBusquedaAlbum(event.target.value)}
              onBlur={confirmarBusquedaActual}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault()
                  confirmarBusquedaActual()
                }
              }}
            />
          </div>
          {sugerenciasVisibles.length > 0 ? (
            <ul className="album-searchResults">
              {sugerenciasVisibles.map((opcion) => (
                <li key={opcion.id}>
                  <button
                    type="button"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => seleccionarAlbumPorId(opcion.id)}
                    className={
                      opcion.id === albumSeleccionadoId ? 'resultado-activo' : undefined
                    }
                  >
                    {opcion.etiqueta}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="album-searchEmpty">Sin coincidencias</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Marcos