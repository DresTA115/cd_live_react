import { useState } from 'react';
import './Destino.css';

const Destino = ({ destino, onCambiarDestino }) => {
  const [modoEdicion, setModoEdicion] = useState(false);

  // Dirección pre-registrada del usuario
  const direccionRegistrada = {
    ciudad: 'Medellín - Colombia',
    calle: 'Calle 23 #45-67',
    detalles: 'Casa - Primer piso'
  };

  return (
    <div className="destino">
      <div className="destino-header">
        <h3>Destino</h3>
        <button 
          className="btn-editar-destino" 
          onClick={() => setModoEdicion(!modoEdicion)}
          aria-label="Editar destino"
        >
          <span className="material-symbols-outlined">
            {modoEdicion ? 'close' : 'edit'}
          </span>
        </button>
      </div>

      {!modoEdicion ? (
        // Vista de solo lectura - Dirección registrada
        <div className="destino-registrado">
          <div className="destino-info">
            <span className="material-symbols-outlined">location_on</span>
            <div className="destino-detalles">
              <p className="destino-ciudad">{direccionRegistrada.ciudad}</p>
              <p className="destino-direccion">{direccionRegistrada.calle}</p>
              <p className="destino-complemento">{direccionRegistrada.detalles}</p>
            </div>
          </div>
        </div>
      ) : (
        // Modo edición
        <div className="destino-edicion">
          <div className="destino-campo">
            <label>Ciudad</label>
            <select 
              value={destino.ciudad || direccionRegistrada.ciudad}
              onChange={(e) => onCambiarDestino({ ...destino, ciudad: e.target.value })}
            >
              <option value="Medellín - Colombia">Medellín - Colombia</option>
              <option value="Bogotá - Colombia">Bogotá - Colombia</option>
              <option value="Cali - Colombia">Cali - Colombia</option>
              <option value="Barranquilla - Colombia">Barranquilla - Colombia</option>
              <option value="Cartagena - Colombia">Cartagena - Colombia</option>
            </select>
          </div>
          <div className="destino-campo">
            <label>Dirección</label>
            <input
              type="text"
              placeholder="Calle #A #23 - 45"
              value={destino.calle || direccionRegistrada.calle}
              onChange={(e) => onCambiarDestino({ ...destino, calle: e.target.value })}
            />
          </div>
          <div className="destino-campo">
            <label>Detalles adicionales</label>
            <input
              type="text"
              placeholder="Casa - Primer piso"
              value={destino.codigoPostal || direccionRegistrada.detalles}
              onChange={(e) => onCambiarDestino({ ...destino, codigoPostal: e.target.value })}
            />
          </div>
          <button 
            className="btn-guardar-destino"
            onClick={() => setModoEdicion(false)}
          >
            Guardar cambios
          </button>
        </div>
      )}
    </div>
  );
};

export default Destino;
