import './Marcos.css'
import { useState } from "react";

export function Marcos() {
  const [colorMarco, setColorMarco] = useState("negro");
  const [tamano, setTamano] = useState("mediano");
  const [imagenVinilo, setImagenVinilo] = useState(null); // sin imagen inicial

  const colores = [
    { nombre: "Negro", valor: "negro", hex: "#000000" },
    { nombre: "Blanco", valor: "blanco", hex: "#ffffff" },
    { nombre: "Roble", valor: "roble", hex: "#b38b59" },
    { nombre: "Nogal", valor: "nogal", hex: "#6b4f3a" },
  ];

  const tamanos = {
    pequeño: "200px",
    mediano: "300px",
    grande: "400px",
  };

  const manejarCambioImagen = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      const reader = new FileReader();
      reader.onload = () => setImagenVinilo(reader.result);
      reader.readAsDataURL(archivo);
    }
  };

  return (
    <div className="marcos-section">
      <h2 className="titulo">Visualiza tu vinilo en distintos marcos</h2>

      <div className="marco-wrapper">
        <div
          className="marco"
          style={{
            borderColor: colores.find((c) => c.valor === colorMarco).hex,
            width: tamanos[tamano],
            height: tamanos[tamano],
          }}
        >
          {!imagenVinilo ? (
            <label htmlFor="inputImagen" className="upload-label">
              <span className="upload-text">Carga tu vinilo</span>
              <input
                type="file"
                id="inputImagen"
                accept="image/*"
                onChange={manejarCambioImagen}
                style={{ display: "none" }}
              />
            </label>
          ) : (
            <div className="vinilo">
              <img src={imagenVinilo} alt="Vinilo personalizado" />
            </div>
          )}
        </div>
      </div>

      <div className="opciones">
        <div className="colores">
          <h3>Colores del marco</h3>
          <div className="color-picker">
            {colores.map((c) => (
              <button
                key={c.valor}
                className={`color-btn ${
                  colorMarco === c.valor ? "activo" : ""
                }`}
                style={{ backgroundColor: c.hex }}
                onClick={() => setColorMarco(c.valor)}
                aria-label={`Color ${c.nombre}`}
              />
            ))}
          </div>
        </div>

        <div className="tamanos">
          <h3>Tamaño del marco</h3>
          <div className="tamano-picker">
            {Object.keys(tamanos).map((t) => (
              <button
                key={t}
                className={`tamano-btn ${tamano === t ? "activo" : ""}`}
                onClick={() => setTamano(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marcos