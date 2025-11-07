import './CartItem.css';

const CartItem = ({ item, onIncrementar, onDecrementar, onEliminar }) => {
  const formatearPrecio = (precio) => {
    // Si ya es un string formateado, retornarlo
    if (typeof precio === 'string') return precio;
    
    // Si es número, formatearlo
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(precio);
  };

  return (
    <div className="producto-carrito">
      <div className="producto-imagen-container">
        <img src={item.imagen} alt={item.titulo} />
      </div>
      <div className="producto-info">
        <h3>{item.titulo}</h3>
        <p className="producto-descripcion">{item.artista || item.descripcion}</p>
        <p className="producto-precio">{formatearPrecio(item.precio)}</p>
      </div>
      <div className="producto-controles">
        <div className="cantidad-controles">
          <button onClick={() => onDecrementar(item.id)}>−</button>
          <span>{item.cantidad}</span>
          <button onClick={() => onIncrementar(item.id)}>+</button>
        </div>
        <button 
          className="btn-eliminar" 
          onClick={() => onEliminar(item.id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default CartItem;
