import './productos.css'
import { useLocation, Link } from 'react-router-dom'
import { PresentacionProducto } from '../../components/PresentacionProducto/PresentacionProducto'
import { BottonComprar } from '@components/common/BottonComprar/BottonComprar'
export function Productos() {
  const location = useLocation()
  const producto = location.state

  console.log('Estado recibido:', producto) // Para debuggear

  if (!producto) {
    return (
      <div className="errorContainer">
        <p>No hay datos disponibles</p>
        <Link to="/instrumentos">Volver a Instrumentos</Link>
      </div>
    )
  }

  return (
    <div className="paginaProducto">
          <h1>Detalle del Producto</h1>  
        
      <PresentacionProducto producto={producto} />
      <Link to="/instrumentos" className="volverLink">Volver a Instrumentos</Link>
    </div>
  )
}