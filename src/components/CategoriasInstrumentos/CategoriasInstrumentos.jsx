import './CategoriasInstrumentos.css'

export function CategoriasInstrumentos({ categorias, categoriaSeleccionada, onSeleccionarCategoria }) {
  return (
    <section className="productosDeInstrumentos">
      <div className="titulo">
        <h1>Instrumentos</h1>
      </div>
      <div className="contenedorProductos">
        {categorias.map((categoria) => {
          const estaActiva = categoriaSeleccionada === categoria.id

          return (
            <button
              type="button"
              key={categoria.id}
              className={`producto${estaActiva ? ' activo' : ''}`}
              onClick={() => onSeleccionarCategoria?.(categoria.id)}
            >
              <img src={categoria.imagen} alt={categoria.nombre} />
              <p>{categoria.nombre}</p>
            </button>
          )
        })}
      </div>
    </section>
  )
}
