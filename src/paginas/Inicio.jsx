import '@css/index.css'
import '@css/albummasvendidos.css'
import '@css/instrumentosmasvendidos.css'

import { VideoDestacado } from '@componentes/VideoDestacado'
import { CategoriasDestacadas } from '@componentes/CategoriasDestacadas'
import { InstrumentosMasVendidos } from '@componentes/InstrumentosMasVendidos'
import { CarruselArtistas } from '@componentes/CarruselArtistas'
import { AlbumsMasVendidos } from '@componentes/AlbumsMasVendidos'

export function Inicio() {
  return (
    <>
      <VideoDestacado />
      <CategoriasDestacadas />
      <InstrumentosMasVendidos />
      <CarruselArtistas />
      <AlbumsMasVendidos />
    </>
  )
}
