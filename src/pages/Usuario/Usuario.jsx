import { useState } from 'react'
import './Usuario.css'

export function Usuario() {
  const [usuario, setUsuario] = useState({
    nombre: 'Nicolas Moreno Zapata',
    celular: '+573145502380',
    email: 'NicolasMorenoP@gmail.com',
    direccionActual: 'Cr43 # 25 bb 31',
    tarjetaEnUso: '1112345567889'
  })

  const [pedido] = useState({
    numero: '#345',
    estados: {
      confirmado: true,
      preparado: true,
      enviado: true,
      enReparto: true,
      entregado: true
    },
    direccion: 'Cr43 # 25 bb31',
    pais: 'Colombia',
    ciudad: 'Medellin'
  })

  const [mostrarModalDatos, setMostrarModalDatos] = useState(false)
  const [mostrarModalContrasena, setMostrarModalContrasena] = useState(false)
  const [mostrarModalDireccion, setMostrarModalDireccion] = useState(false)
  const [mostrarModalTarjeta, setMostrarModalTarjeta] = useState(false)

  const [datosTemp, setDatosTemp] = useState({})

  const abrirModalDatos = () => {
    setDatosTemp({ ...usuario })
    setMostrarModalDatos(true)
  }

  const guardarDatos = () => {
    setUsuario({ ...datosTemp })
    setMostrarModalDatos(false)
  }

  return (
    <div className="paginaUsuario">
      <div className="contenedorUsuario">
        {/* Columna izquierda - Información del usuario */}
        <div className="columnaIzquierda">
          <div className="tarjetaUsuario">
            <div className="imagenUsuario">
              <div className="avatarPlaceholder">
                <span className="iniciales">
                  {usuario.nombre.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </span>
              </div>
            </div>

            <h1 className="nombreUsuario">{usuario.nombre}</h1>

            <div className="infoContacto">
              <div className="itemContacto">
                <span className="labelContacto">Celular</span>
                <span className="valorContacto">{usuario.celular}</span>
              </div>
              <div className="itemContacto">
                <span className="emailContacto">{usuario.email}</span>
              </div>
            </div>

            <div className="botonesAccion">
              <button className="botonSecundario" onClick={abrirModalDatos}>
                Cambiar Datos
              </button>
              <button className="botonSecundario" onClick={() => setMostrarModalContrasena(true)}>
                Cambiar Contraseña
              </button>
            </div>

            <div className="seccionDireccion">
              <div className="headerSeccion">
                <span className="labelSeccion">Direcion actual</span>
                <span className="valorSeccion">{usuario.direccionActual}</span>
              </div>
              <div className="botonesSeccion">
                <button className="botonSecundario" onClick={() => setMostrarModalDireccion(true)}>
                  Agregar Direccion
                </button>
                <button className="botonBorrar">Borrar</button>
              </div>
            </div>

            <div className="seccionTarjeta">
              <div className="headerSeccion">
                <span className="labelSeccion">Tarjeta en uso</span>
                <span className="valorSeccion">{usuario.tarjetaEnUso}</span>
              </div>
              <div className="botonesSeccion">
                <button className="botonSecundario" onClick={() => setMostrarModalTarjeta(true)}>
                  Agregar tarjeta
                </button>
                <button className="botonBorrar">Borrar</button>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha - Estado del pedido */}
        <div className="columnaDerecha">
          <div className="tarjetaPedido">
            <h2 className="tituloPedido">Tu pedido</h2>
            <div className="numeroPedido">
              <span className="labelPedido">Num de Pedido</span>
              <span className="valorPedido">{pedido.numero}</span>
            </div>

            <div className="estadosPedido">
              <div className="itemEstado">
                <span className={`checkEstado ${pedido.estados.confirmado ? 'activo' : ''}`}>
                  {pedido.estados.confirmado && '✓'}
                </span>
                <span className="labelEstado">Confirmado</span>
              </div>
              <div className="itemEstado">
                <span className={`checkEstado ${pedido.estados.preparado ? 'activo' : ''}`}>
                  {pedido.estados.preparado && '✓'}
                </span>
                <span className="labelEstado">Preparado</span>
              </div>
              <div className="itemEstado">
                <span className={`checkEstado ${pedido.estados.enviado ? 'activo' : ''}`}>
                  {pedido.estados.enviado && '✓'}
                </span>
                <span className="labelEstado">Enviado</span>
              </div>
              <div className="itemEstado">
                <span className={`checkEstado ${pedido.estados.enReparto ? 'activo' : ''}`}>
                  {pedido.estados.enReparto && '✓'}
                </span>
                <span className="labelEstado">En reparto</span>
              </div>
              <div className="itemEstado">
                <span className={`checkEstado ${pedido.estados.entregado ? 'activo' : ''}`}>
                  {pedido.estados.entregado && '✓'}
                </span>
                <span className="labelEstado">Entregado</span>
              </div>
            </div>

            <div className="direccionPedido">
              <span className="labelDireccion">Direcion</span>
              <span className="valorDireccion">{pedido.direccion}</span>
              <div className="ubicacion">
                <span>{pedido.pais}</span>
                <span>{pedido.ciudad}</span>
              </div>
            </div>

            <div className="selectorPedido">
              <label className="labelSelector">Pedido</label>
              <select className="selectPedido">
                <option value={pedido.numero}>{pedido.numero}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Cambiar Datos */}
      {mostrarModalDatos && (
        <div className="modalOverlay" onClick={() => setMostrarModalDatos(false)}>
          <div className="modalContenido" onClick={(e) => e.stopPropagation()}>
            <h3>Cambiar Datos</h3>
            <div className="formGroup">
              <label>Nombre Completo</label>
              <input
                type="text"
                value={datosTemp.nombre || ''}
                onChange={(e) => setDatosTemp({ ...datosTemp, nombre: e.target.value })}
              />
            </div>
            <div className="formGroup">
              <label>Celular</label>
              <input
                type="text"
                value={datosTemp.celular || ''}
                onChange={(e) => setDatosTemp({ ...datosTemp, celular: e.target.value })}
              />
            </div>
            <div className="formGroup">
              <label>Email</label>
              <input
                type="email"
                value={datosTemp.email || ''}
                onChange={(e) => setDatosTemp({ ...datosTemp, email: e.target.value })}
              />
            </div>
            <div className="botonesModal">
              <button className="botonGuardar" onClick={guardarDatos}>Guardar</button>
              <button className="botonCancelar" onClick={() => setMostrarModalDatos(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Cambiar Contraseña */}
      {mostrarModalContrasena && (
        <div className="modalOverlay" onClick={() => setMostrarModalContrasena(false)}>
          <div className="modalContenido" onClick={(e) => e.stopPropagation()}>
            <h3>Cambiar Contraseña</h3>
            <div className="formGroup">
              <label>Contraseña Actual</label>
              <input type="password" />
            </div>
            <div className="formGroup">
              <label>Nueva Contraseña</label>
              <input type="password" />
            </div>
            <div className="formGroup">
              <label>Confirmar Contraseña</label>
              <input type="password" />
            </div>
            <div className="botonesModal">
              <button className="botonGuardar">Guardar</button>
              <button className="botonCancelar" onClick={() => setMostrarModalContrasena(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Agregar Dirección */}
      {mostrarModalDireccion && (
        <div className="modalOverlay" onClick={() => setMostrarModalDireccion(false)}>
          <div className="modalContenido" onClick={(e) => e.stopPropagation()}>
            <h3>Agregar Dirección</h3>
            <div className="formGroup">
              <label>Dirección</label>
              <input type="text" placeholder="Ej: Cr43 # 25 bb 31" />
            </div>
            <div className="formGroup">
              <label>Ciudad</label>
              <input type="text" />
            </div>
            <div className="formGroup">
              <label>País</label>
              <input type="text" />
            </div>
            <div className="botonesModal">
              <button className="botonGuardar">Guardar</button>
              <button className="botonCancelar" onClick={() => setMostrarModalDireccion(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Agregar Tarjeta */}
      {mostrarModalTarjeta && (
        <div className="modalOverlay" onClick={() => setMostrarModalTarjeta(false)}>
          <div className="modalContenido" onClick={(e) => e.stopPropagation()}>
            <h3>Agregar Tarjeta</h3>
            <div className="formGroup">
              <label>Número de Tarjeta</label>
              <input type="text" placeholder="1234 5678 9012 3456" maxLength="16" />
            </div>
            <div className="formGroup">
              <label>Nombre en la Tarjeta</label>
              <input type="text" />
            </div>
            <div className="formRow">
              <div className="formGroup">
                <label>Fecha de Expiración</label>
                <input type="text" placeholder="MM/AA" />
              </div>
              <div className="formGroup">
                <label>CVV</label>
                <input type="text" placeholder="123" maxLength="3" />
              </div>
            </div>
            <div className="botonesModal">
              <button className="botonGuardar">Guardar</button>
              <button className="botonCancelar" onClick={() => setMostrarModalTarjeta(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
