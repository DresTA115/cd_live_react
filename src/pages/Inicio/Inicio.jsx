import './Inicio.css'

import { VideoDestacado } from '@components/VideoDestacado/VideoDestacado'
import { CategoriasDestacadas } from '@components/CategoriasDestacadas/CategoriasDestacadas'
import { InstrumentosMasVendidos } from '@components/InstrumentosMasVendidos/InstrumentosMasVendidos'
import { CarruselArtistas } from '@components/CarruselArtistas/CarruselArtistas'
import { AlbumsMasVendidos } from '@components/AlbumsMasVendidos/AlbumsMasVendidos'

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
