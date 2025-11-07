import './ResumenCompra.css';

const ResumenCompra = ({ 
  descuento, 
  subtotal, 
  envio, 
  impuestos, 
  iva, 
  total,
  formatearPrecio 
}) => {
  return (
    <div className="resumen-compra">
      <h3>Resumen de Compra</h3>
      <div className="resumen-linea">
        <span>Descuento</span>
        <span>{formatearPrecio(descuento)}</span>
      </div>
      <div className="resumen-linea">
        <span>Subtotal</span>
        <span>{formatearPrecio(subtotal)}</span>
      </div>
      <div className="resumen-linea">
        <span>Envío</span>
        <span>{formatearPrecio(envio)}</span>
      </div>
      <div className="resumen-linea">
        <span>Impuestos</span>
        <span>{formatearPrecio(impuestos)}</span>
      </div>
      <div className="resumen-linea">
        <span>Iva</span>
        <span>{formatearPrecio(iva)}</span>
      </div>
      <div className="resumen-linea total">
        <span>Total</span>
        <span>{formatearPrecio(total)}</span>
      </div>
    </div>
  );
};

export default ResumenCompra;
