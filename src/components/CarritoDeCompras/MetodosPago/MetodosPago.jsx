import { useState } from 'react';
import './MetodosPago.css';

const MetodosPago = ({ onSeleccionarMetodo }) => {
  const [expandido, setExpandido] = useState(false);
  const [metodoSeleccionado, setMetodoSeleccionado] = useState(0);

  // Métodos de pago previamente registrados
  const metodosPago = [
    {
      id: 0,
      tipo: 'tarjeta',
      nombre: 'Tarjeta de Crédito',
      numero: '**** **** **** 1234',
      titular: 'JUAN PÉREZ',
      vencimiento: '12/25',
      icono: 'credit_card',
      marca: 'Visa'
    },
    {
      id: 1,
      tipo: 'tarjeta',
      nombre: 'Tarjeta de Débito',
      numero: '**** **** **** 5678',
      titular: 'JUAN PÉREZ',
      vencimiento: '08/26',
      icono: 'credit_card',
      marca: 'Mastercard'
    },
    {
      id: 2,
      tipo: 'efectivo',
      nombre: 'Efectivo',
      descripcion: 'Pago contra entrega',
      icono: 'payments'
    },
    {
      id: 3,
      tipo: 'transferencia',
      nombre: 'Transferencia Bancaria',
      descripcion: 'Banco: Bancolombia - Cuenta: ***1234',
      icono: 'account_balance'
    },
    {
      id: 4,
      tipo: 'billetera',
      nombre: 'Nequi',
      descripcion: 'Número: 300 123 4567',
      icono: 'phone_android'
    }
  ];

  const handleSeleccionarMetodo = (index) => {
    setMetodoSeleccionado(index);
    setExpandido(false);
    if (onSeleccionarMetodo) {
      onSeleccionarMetodo(metodosPago[index]);
    }
  };

  const metodoActual = metodosPago[metodoSeleccionado];

  return (
    <div className="metodos-pago-container">
      <div className="metodos-pago-header">
        <h3>Método de Pago</h3>
      
        <button 
          className="btn-editar-metodo" 
          onClick={() => setExpandido(!expandido)}
          aria-label="Editar método de pago"
        >
          <span className="material-symbols-outlined">
            {expandido ? 'expand_less' : 'edit'}
          </span>
        </button>
  </div>
      
      {/* Tarjeta seleccionada */}
      <div className="tarjeta-seleccionada">
        {metodoActual.tipo === 'tarjeta' ? (
          <div className="tarjeta-credito">
            <div className="tarjeta-header">
              <span className="material-symbols-outlined">{metodoActual.icono}</span>
              <span className="tarjeta-marca">{metodoActual.marca}</span>
            </div>
            <div className="tarjeta-numero">{metodoActual.numero}</div>
            <div className="tarjeta-info">
              <div className="tarjeta-titular">{metodoActual.titular}</div>
              <div className="tarjeta-vencimiento">{metodoActual.vencimiento}</div>
            </div>
          </div>
        ) : (
          <div className="metodo-alternativo">
            <span className="material-symbols-outlined">{metodoActual.icono}</span>
            <div className="metodo-info">
              <div className="metodo-nombre">{metodoActual.nombre}</div>
              <div className="metodo-descripcion">{metodoActual.descripcion}</div>
            </div>
          </div>
        )}
        
      
      </div>

      {/* Lista expandida de métodos */}
      {expandido && (
        <div className="metodos-lista">
          {metodosPago.map((metodo, index) => (
            <div
              key={metodo.id}
              className={`metodo-item ${index === metodoSeleccionado ? 'activo' : ''}`}
              onClick={() => handleSeleccionarMetodo(index)}
            >
              <span className="material-symbols-outlined metodo-icono">
                {metodo.icono}
              </span>
              <div className="metodo-detalles">
                <div className="metodo-titulo">
                  {metodo.tipo === 'tarjeta' ? (
                    <>
                      {metodo.nombre} - {metodo.numero}
                      <span className="metodo-marca-small">{metodo.marca}</span>
                    </>
                  ) : (
                    metodo.nombre
                  )}
                </div>
                {metodo.descripcion && (
                  <div className="metodo-subtitulo">{metodo.descripcion}</div>
                )}
                {metodo.vencimiento && (
                  <div className="metodo-subtitulo">Vence: {metodo.vencimiento}</div>
                )}
              </div>
              {index === metodoSeleccionado && (
                <span className="material-symbols-outlined metodo-check">check_circle</span>
              )}
            </div>
          ))}
          
          {/* Botón agregar nuevo método de pago */}
          <button className="btn-agregar-metodo" onClick={() => alert('Función para agregar nuevo método de pago')}>
            <span className="material-symbols-outlined">add_circle</span>
            <span>Agregar nuevo método de pago</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default MetodosPago;
