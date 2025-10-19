import { obtenerAsset } from './obtenerAsset'

const asset = (ruta) => obtenerAsset(ruta)

export const artistasDestacados = [
  { nombre: "Bad Bunny", imagen: asset('img/artistas/badbuuny.jpg') },
  { nombre: "Peso Pluma", imagen: asset('img/artistas/PesoPlumajpg.jpg') },
  { nombre: "Radiohead", imagen: asset('img/artistas/RadioHead.jpg') },
  { nombre: "Duki", imagen: asset('img/artistas/Duki.jpg') },
  { nombre: "Doja Cat", imagen: asset('img/artistas/DojaCat.jpg') },
  { nombre: "Gorillaz", imagen: asset('img/artistas/Gorillaz.jpg') },
  { nombre: "Nanpa B\u00E1sico", imagen: asset('img/artistas/nampa.jpg') },
  { nombre: "Bring Me The Horizon", imagen: asset('img/artistas/BMTH.jpg') },
  { nombre: "Tupac", imagen: asset('img/artistas/TUPAC.jpg') },
]
