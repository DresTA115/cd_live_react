import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="about">
      <h1>Acerca de CD.Live</h1>
      <p>
        CD.Live es tu tienda de música especializada en álbumes, vinilos e instrumentos musicales.
      </p>
      <p>
        Ofrecemos una amplia selección de productos de los artistas más destacados,
        desde clásicos hasta los lanzamientos más recientes.
      </p>
      <h2>Nuestros Productos</h2>
      <ul>
        <li>Álbumes en vinilo</li>
        <li>Instrumentos musicales</li>
        <li>Marcos para vinilos</li>
        <li>Merchandising de artistas</li>
      </ul>
      <Link to="/" className="back-link">← Volver al inicio</Link>
    </div>
  )
}

export default About
