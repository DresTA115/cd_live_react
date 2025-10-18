import { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true)
        const response = await axios.get('/api/items')
        setItems(response.data)
        setError(null)
      } catch (err) {
        setError('Error al cargar los items: ' + err.message)
        console.error('Error fetching items:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
  }, [])

  return (
    <div className="home">
      <h1>Bienvenido a CD.Live</h1>
      <p>Tu tienda de música en línea</p>

      <section className="items-section">
        <h2>Items Destacados</h2>
        
        {loading && <p className="loading">Cargando items...</p>}
        
        {error && <p className="error">{error}</p>}
        
        {!loading && !error && items.length === 0 && (
          <p className="no-items">No hay items disponibles</p>
        )}
        
        {!loading && !error && items.length > 0 && (
          <ul className="items-list">
            {items.map((item) => (
              <li key={item.id} className="item">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                {item.price && <span className="price">${item.price}</span>}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default Home
