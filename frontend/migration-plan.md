# Plan de Migración a React

Este documento describe el plan para migrar la aplicación CD.Live existente a React.

## 📋 Estado Actual

La aplicación actual está construida con HTML, CSS y JavaScript vanilla:
- Páginas HTML estáticas en la carpeta `HTML/`
- Estilos CSS en la carpeta `CSS/`
- Lógica JavaScript en la carpeta `JS/`
- Assets (imágenes, videos) en la carpeta `SRC/`

## 🎯 Objetivo

Migrar toda la funcionalidad existente a una aplicación React moderna con:
- Componentes reutilizables
- Enrutamiento con React Router
- Estado manejado con hooks de React
- Llamadas a API con Axios
- Build optimizado con Vite

## 📝 Checklist de Migración

### Fase 1: Estructura Base ✅
- [x] Crear estructura de carpeta frontend/
- [x] Configurar Vite + React
- [x] Configurar React Router
- [x] Crear páginas de ejemplo (Home, About, NotFound)
- [x] Configurar estilos básicos

### Fase 2: Componentes Comunes
- [ ] Migrar Header (desde index.html)
  - [ ] Logo y navegación
  - [ ] Barra de búsqueda
  - [ ] Login/Registro modal
  - [ ] Carrito de compras
- [ ] Migrar Footer (desde index.html)
- [ ] Crear componente de tarjeta de producto
- [ ] Crear componente de carrusel de artistas

### Fase 3: Páginas Principales

#### Página Principal (index.html)
- [ ] Sección de video hero
- [ ] Sección de productos (Instrumentos, Álbumes, Marcos)
- [ ] Instrumentos más vendidos (usar datos de JS/Instrumentos.js)
- [ ] Artistas destacados (carrusel)
- [ ] Álbumes más vendidos (usar datos de JS/albums.js)

#### Página de Instrumentos (HTML/Instrumentos.html)
- [ ] Lista de instrumentos
- [ ] Filtros y búsqueda
- [ ] Detalles de instrumento
- [ ] Funcionalidad de "agregar al carrito"

#### Página de Álbumes (HTML/albums.html)
- [ ] Lista de álbumes
- [ ] Filtros por artista/género
- [ ] Visualización de álbumes
- [ ] Funcionalidad de "agregar al carrito"

#### Página de Marcos (HTML/marcos.html)
- [ ] Catálogo de marcos para vinilos
- [ ] Detalles de productos
- [ ] Funcionalidad de compra

#### Páginas de Artistas
- [ ] Radiohead (HTML/radiohead.html)
- [ ] Tyler The Creator (HTML/tyler the creator.html)
- [ ] Hot Pink (HTML/hot pink.html)

### Fase 4: Funcionalidades JavaScript

#### Autenticación (JS/LoginYRegistro.js)
- [ ] Modal de Login
- [ ] Modal de Registro
- [ ] Validación de formularios
- [ ] Integración con backend (si existe)

#### Tarjeta de Crédito (JS/RegistroTarjeta.js)
- [ ] Modal de registro de tarjeta
- [ ] Validación de campos
- [ ] Formato de número de tarjeta

#### Lógica de Productos
- [ ] Cargar instrumentos (JS/Instrumentos.js)
- [ ] Cargar álbumes (JS/albums.js)
- [ ] Filtros de álbumes (JS/filtroAlbums.js)
- [ ] Lógica del carrito de compras
- [ ] Gestión del estado global (Context API o Redux)

### Fase 5: Estilos

#### Migrar CSS a módulos o styled-components
- [ ] global.css → estilos globales base
- [ ] header.css → componente Header
- [ ] index.css → página Home
- [ ] albums.css → página Álbumes
- [ ] albumsMasVendidos.css → componente AlbumsMasVendidos
- [ ] Instrumentos.css → página Instrumentos
- [ ] intrumentosMasVendidos.css → componente InstrumentosMasVendidos
- [ ] marcos.css → página Marcos
- [ ] barraSeleccion.css → componente de navegación
- [ ] FifiltroAlbums.css → componente de filtros

### Fase 6: Assets y Recursos
- [ ] Mover carpeta SRC/ a frontend/public/ o frontend/src/assets/
- [ ] Optimizar imágenes
- [ ] Configurar lazy loading de imágenes
- [ ] Configurar carga de videos

### Fase 7: Backend y API
- [ ] Definir endpoints de API necesarios
- [ ] Crear servicios de API en frontend (carpeta src/services/)
- [ ] Implementar manejo de errores
- [ ] Implementar loading states
- [ ] Configurar proxy en vite.config.js si es necesario

### Fase 8: Testing
- [ ] Escribir tests unitarios para componentes
- [ ] Tests de integración para flujos principales
- [ ] Tests E2E para funcionalidad crítica

### Fase 9: Optimización
- [ ] Code splitting por rutas
- [ ] Lazy loading de componentes
- [ ] Optimización de bundle size
- [ ] PWA capabilities (opcional)
- [ ] SEO optimization

### Fase 10: Deploy y CI/CD
- [ ] Configurar build de producción
- [ ] Configurar CI/CD pipeline
- [ ] Deploy a servidor/hosting
- [ ] Configurar dominio y SSL

## 📂 Estructura de Carpetas Propuesta

```
frontend/
├── public/                  # Assets estáticos
│   └── SRC/                # Migrado desde raíz
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── common/        # Componentes comunes (Button, Input, etc.)
│   │   ├── layout/        # Header, Footer, Layout
│   │   ├── products/      # Tarjetas de productos, listas
│   │   └── modals/        # Login, Registro, etc.
│   ├── pages/             # Páginas/vistas
│   │   ├── Home.jsx
│   │   ├── Instrumentos.jsx
│   │   ├── Albums.jsx
│   │   ├── Marcos.jsx
│   │   ├── Artists/       # Páginas de artistas
│   │   ├── About.jsx
│   │   └── NotFound.jsx
│   ├── services/          # Servicios de API
│   │   ├── api.js
│   │   ├── products.js
│   │   └── auth.js
│   ├── context/           # Context API para estado global
│   │   ├── CartContext.jsx
│   │   └── AuthContext.jsx
│   ├── hooks/             # Custom hooks
│   ├── utils/             # Utilidades y helpers
│   ├── styles/            # Estilos (CSS modules o styled-components)
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## ⚠️ Consideraciones Importantes

1. **No eliminar archivos originales** - Mantener la aplicación actual funcionando durante la migración
2. **Migración incremental** - Migrar página por página, probando cada una
3. **Compatibilidad con backend** - Asegurar que las llamadas a API sean compatibles
4. **Responsive design** - Mantener o mejorar la responsividad actual
5. **Performance** - No degradar el rendimiento de la aplicación
6. **SEO** - Considerar SSR o pre-rendering si es necesario para SEO

## 🔄 Proceso Recomendado

1. Completar Fase 1 (estructura base) ✅
2. Desarrollar componentes comunes (Header, Footer)
3. Migrar página principal
4. Migrar páginas secundarias una por una
5. Implementar funcionalidades JavaScript
6. Migrar estilos
7. Testing exhaustivo
8. Optimización
9. Deploy

## 📅 Estimación de Tiempo

- Fases 1-2: 1-2 días ✅
- Fases 3-4: 1-2 semanas
- Fases 5-6: 3-5 días
- Fases 7-8: 1 semana
- Fases 9-10: 3-5 días

**Total estimado: 3-4 semanas**

## 🤝 Contribuir

Para contribuir a la migración, seguir estos pasos:
1. Tomar una tarea del checklist
2. Crear una rama feature para la tarea
3. Implementar y probar
4. Hacer pull request
5. Code review
6. Merge a feat/migrate-to-react
