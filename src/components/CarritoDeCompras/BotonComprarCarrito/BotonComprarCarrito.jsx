import './BotonComprarCarrito.css';

const BotonComprarCarrito = ({ onClick, disabled = false }) => {
  return (
    <button 
      className="btn-comprar-carrito" 
      onClick={onClick}
      disabled={disabled}
    >
      Comprar
    </button>
  );
};

export default BotonComprarCarrito;
