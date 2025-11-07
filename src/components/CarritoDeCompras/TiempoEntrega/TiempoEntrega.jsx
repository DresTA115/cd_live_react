import './TiempoEntrega.css';

const TiempoEntrega = ({ 
  fechaEntrega, 
  tipoEntrega, 
  onCambiarFecha, 
  onCambiarTipo 
}) => {
  // Función para calcular fecha de entrega según el tipo
  const calcularFechaEntrega = (tipo) => {
    const hoy = new Date();
    const diasSumar = tipo === 'rapida' ? 6 : 15;
    const fechaEntrega = new Date(hoy);
    fechaEntrega.setDate(hoy.getDate() + diasSumar);
    
    // Formatear fecha como "DD/MM/YYYY"
    const dia = String(fechaEntrega.getDate()).padStart(2, '0');
    const mes = String(fechaEntrega.getMonth() + 1).padStart(2, '0');
    const año = fechaEntrega.getFullYear();
    
    return `${dia}/${mes}/${año}`;
  };

  // Manejar cambio de tipo de entrega
  const handleCambiarTipo = (e) => {
    const nuevoTipo = e.target.value;
    onCambiarTipo(e);
    
    // Actualizar automáticamente la fecha según el tipo seleccionado
    const nuevaFecha = calcularFechaEntrega(nuevoTipo);
    onCambiarFecha({ target: { value: nuevaFecha } });
  };

  return (
    <div className="tiempo-entrega">
      <h3>Tiempo estimado de Entrega</h3>
      <div className="fecha-entrega">
        <label>Día de entrega estimado</label>
        <input 
          type="text" 
          value={fechaEntrega}
          readOnly
          className="fecha-readonly"
        />
      </div>
      <div className="tipo-entrega">
        <label className="tipo-entrega-option">
          <input
            type="radio"
            name="tipoEntrega"
            value="regular"
            checked={tipoEntrega === 'regular'}
            onChange={handleCambiarTipo}
          />
          <span className="tipo-entrega-texto">
            <strong>Entrega Regular</strong>
            <small>15 días hábiles</small>
          </span>
        </label>
        <label className="tipo-entrega-option">
          <input
            type="radio"
            name="tipoEntrega"
            value="rapida"
            checked={tipoEntrega === 'rapida'}
            onChange={handleCambiarTipo}
          />
          <span className="tipo-entrega-texto">
            <strong>Entrega Rápida</strong>
            <small>6 días hábiles</small>
          </span>
        </label>
      </div>
    </div>
  );
};

export default TiempoEntrega;
