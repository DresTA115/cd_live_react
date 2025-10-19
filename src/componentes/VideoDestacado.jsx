import { obtenerAsset } from '@datos/obtenerAsset'

const videoDestacado = obtenerAsset('video/VideoVinilo.mp4')

export function VideoDestacado() {
  return (
    <section className="video">
      <video autoPlay muted loop playsInline>
        <source src={videoDestacado} type="video/mp4" />
      </video>
      <div className="BotonVideo">
        <p>Este es tu mensaje</p>
        <button type="button">Haz clic aquí</button>
      </div>
    </section>
  )
}
