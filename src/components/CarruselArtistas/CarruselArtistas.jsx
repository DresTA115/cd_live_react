import { useEffect, useMemo, useState } from 'react'
import { artistasDestacados } from '@data/artistasDestacados'

import './CarruselArtistas.css'

export function CarruselArtistas() {
  const [indice, setIndice] = useState(0)
  const [cantidad, setCantidad] = useState(() => obtenerCantidad())
  const total = artistasDestacados.length

  useEffect(() => {
    function manejarResize() {
      setCantidad(obtenerCantidad())
    }

    window.addEventListener('resize', manejarResize)
    return () => window.removeEventListener('resize', manejarResize)
  }, [])

  const visibles = useMemo(() => {
    return Array.from({ length: cantidad }, (_, posicion) => {
      const indiceCalculado = (indice + posicion + total) % total
      return artistasDestacados[indiceCalculado]
    })
  }, [indice, cantidad, total])

  function avanzar() {
    setIndice((valor) => (valor + 1) % total)
  }

  function retroceder() {
    setIndice((valor) => (valor - 1 + total) % total)
  }

  return (
    <section className="artistasDestacados">
      <h2>Artistas Destacados</h2>
      <div className="carrucelArtista">
        <button type="button" className="btnIsquierda" onClick={retroceder} aria-label="Artistas anteriores">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>

        <div className="ventanaCarrusel">
          <div className="contenedorArtista">
            {visibles.map((artista) => (
              <div className="artista" key={artista.nombre}>
                <img src={artista.imagen} alt={artista.nombre} />
                <p>{artista.nombre}</p>
              </div>
            ))}
          </div>
        </div>
        <button type="button" className="btnDerecha" onClick={avanzar} aria-label="Artistas siguientes">
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </section>
  )
}

function obtenerCantidad() {
  if (typeof window === 'undefined') {
    return 5
  }
  if (window.innerWidth <= 640) {
    return 2
  }
  if (window.innerWidth <= 1024) {
    return 3
  }
  return 5
}
