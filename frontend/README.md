# CD.Live Frontend - React

Frontend de la tienda CD.Live construido con React 18 y Vite.

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 16+ instalado
- npm o yarn

### Instalación

```bash
# Navegar a la carpeta frontend
cd frontend

# Instalar dependencias
npm install
```

### Ejecución en Desarrollo

```bash
npm run dev
```

La aplicación se abrirá en http://localhost:3000

### Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Vista Previa del Build

```bash
npm run preview
```

Esto inicia un servidor local para previsualizar el build de producción.

### Ejecutar Tests

```bash
npm run test
```

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── pages/           # Páginas de la aplicación
│   │   ├── Home.jsx     # Página principal con lista de items
│   │   ├── About.jsx    # Página acerca de
│   │   └── NotFound.jsx # Página 404
│   ├── App.jsx          # Componente principal con rutas
│   ├── main.jsx         # Punto de entrada de React
│   └── styles.css       # Estilos globales
├── index.html           # Template HTML
├── vite.config.js       # Configuración de Vite
└── package.json         # Dependencias y scripts
```

## 🛠️ Tecnologías Utilizadas

- **React 18** - Librería de UI
- **React Router DOM** - Enrutamiento
- **Axios** - Cliente HTTP para llamadas a API
- **Vite** - Build tool y dev server
- **Vitest** - Framework de testing
- **Testing Library** - Utilidades para testing de React

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza el build de producción
- `npm run test` - Ejecuta los tests

## 🔗 Rutas Disponibles

- `/` - Página principal (Home)
- `/about` - Acerca de CD.Live
- Cualquier otra ruta muestra la página 404

## 📡 API Integration

La aplicación está configurada para hacer llamadas a `/api/items`. 
Ejemplo de uso en `src/pages/Home.jsx`:

```javascript
const response = await axios.get('/api/items')
```

Para desarrollo local, puedes configurar un proxy en `vite.config.js` si el backend corre en un puerto diferente.

## 🎨 Personalización

Los estilos globales están en `src/styles.css`. Puedes modificarlos según las necesidades del proyecto.

## 📦 Próximos Pasos

Ver `migration-plan.md` para el plan completo de migración de las páginas existentes.
