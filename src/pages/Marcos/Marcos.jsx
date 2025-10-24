import { useMemo, useState } from 'react'

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

  const [colorMarco, setColorMarco] = useState('negro')
  const [tamano, setTamano] = useState('mediano')
  const [albumSeleccionadoId, setAlbumSeleccionadoId] = useState(() => (albums[0] ? crearIdAlbum(albums[0]) : ''))

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

  const manejarSeleccionAlbum = (valor) => {
    setAlbumSeleccionadoId(valor)
  }

  const albumSeleccionado = useMemo(
    () => albums.find((item) => crearIdAlbum(item) === albumSeleccionadoId) ?? null,
    [albums, albumSeleccionadoId],
  )

  const opcionesAlbum = useMemo(
    () =>
      albums.map((item) => ({
        id: crearIdAlbum(item),
        etiqueta: `${item.artista} - ${item.album}`,
      })),
    [albums],
  )

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
          <h3>Selecciona un álbum</h3>
          <select
            className="album-select"
            value={albumSeleccionadoId}
            onChange={(event) => manejarSeleccionAlbum(event.target.value)}
          >
            {opcionesAlbum.map((opcion) => (
              <option key={opcion.id} value={opcion.id}>
                {opcion.etiqueta}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Marcos