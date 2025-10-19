import { obtenerAsset } from './obtenerAsset'

const asset = (ruta) => obtenerAsset(ruta)

export const categoriasInicio = [
    {
        ruta: "/instrumentos",
        titulo: "Instrumentos",
        imagen: asset('img/index/instrumentos.png'),
        descripcion: "Encuentra instrumentos de cuerda, viento y percusi\u00F3n",
    },
    {
        ruta: "/albums",
        titulo: "\u00C1lbums",
        imagen: asset('img/index/Vinilos.jpg'),
        descripcion: "Explora vinilos, cassettes y CD de artistas destacados",
    },
    {
        ruta: "/marcos",
        titulo: "Marcos para vinilos",
        imagen: asset('img/index/VinilosMarco.png'),
        descripcion: "Protege y luce tus vinilos favoritos",
    },
]
