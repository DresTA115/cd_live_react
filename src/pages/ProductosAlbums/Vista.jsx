import './Vista.css'
import { useLocation, Link } from 'react-router-dom'
import { PresentacionAlbums } from '../../components/PresentacionAlbums/PresentacionAlbums'
import { Albums } from '../Albums/Albums'

export function Vista() {
  const location = useLocation()
  const Albums = location.state

  if (!Albums) {
    return (
      <div className="errorContainer">
        <p>No hay datos disponibles</p>
        <Link to="/Albums">Volver a Albums</Link>
      </div>
    )
  }

  return (
    <div className="paginaProducto">
          <h1>Detalle del Producto</h1>  
        
      <PresentacionProducto producto={Albums} />
      <Link to="/Albums" className="volverLink">Volver a Albums</Link>
    </div>
  )
}