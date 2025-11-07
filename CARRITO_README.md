# Carrito de Compras - CD Live React

## Características Implementadas ✅

### 1. **Contexto Global (CarritoContext)**
- Gestión centralizada del estado del carrito usando React Context API
- Persistencia en localStorage
- Funciones para agregar, eliminar y actualizar productos
- Cálculos automáticos de descuentos, envío, impuestos e IVA

### 2. **Componente CarritoDeCompras**
- **Modal overlay** con diseño dark theme
- **Lista de productos** con:
  - Imagen del producto
  - Nombre y descripción
  - Precio formateado
  - Controles de cantidad (+/-)
  - Botón de eliminación
- **Scrollbar personalizado** para listas largas
- **Panel lateral** con:
  - Resumen de compra (Descuento, Subtotal, Envío, Impuestos, IVA, Total)
  - Tiempo estimado de entrega
  - Selector de tipo de entrega (Regular/Rápida)
  - Formulario de destino (ciudad, calle, código postal)
  - Botón de compra destacado

### 3. **Integración con Header**
- Icono de carrito con **badge numérico** mostrando cantidad total de productos
- Click en el carrito abre el modal
- Badge rojo (#ff4444) con borde para destacar

### 4. **Integración con ProductCard**
- Botón "Comprar" en cada producto (Albums e Instrumentos)
- Al hacer click:
  - Agrega el producto al carrito
  - Abre automáticamente el modal del carrito
  - Previene la navegación al detalle del producto

### 5. **Estilos Personalizados**
- **Tema oscuro** (#1a1a1a, #0d0d0d)
- **Bordes blancos** en cards de productos (rgba(255, 255, 255, 0.8))
- **Botón rojo** de compra (#ff4444) con hover y efectos
- **Responsive** para móviles (grid cambia a 1 columna)
- **Animaciones suaves** en hover y transiciones

## Estructura de Archivos

```
src/
├── context/
│   └── CarritoContext.jsx          # Contexto global del carrito
├── components/
│   └── CarritoDeCompras/
│       ├── CarritoDeCompras.jsx    # Componente modal del carrito
│       ├── CarritoDeCompras.css    # Estilos del carrito
│       └── index.jsx               # Exportación
├── layout/
│   ├── Header/
│   │   ├── Header.jsx              # Icono carrito + badge
│   │   └── Header.css              # Estilos badge
│   └── MainLayout/
│       └── MainLayout.jsx          # Incluye CarritoDeCompras
├── pages/
│   ├── Albums/
│   │   └── Albums.jsx              # Integración con carrito
│   └── Instrumentos/
│       └── Instrumentos.jsx        # Integración con carrito
└── App.jsx                         # CarritoProvider wrapper
```

## Uso

### 1. Agregar Productos al Carrito

```jsx
import { useCarrito } from '../../context/CarritoContext'

const { agregarAlCarrito, abrirCarrito } = useCarrito()

const manejarAgregarAlCarrito = (producto) => {
  const productoCarrito = {
    id: producto.id,
    titulo: producto.nombre,
    artista: producto.descripcion,
    precio: formatearPrecio(producto.precio),
    imagen: producto.imagen,
    categoria: producto.categoria,
  }
  
  agregarAlCarrito(productoCarrito)
  abrirCarrito()
}
```

### 2. Mostrar Contador en Header

```jsx
import { useCarrito } from '../../context/CarritoContext'

const { abrirCarrito, obtenerCantidadTotal } = useCarrito()
const cantidadCarrito = obtenerCantidadTotal()

<button onClick={abrirCarrito}>
  <span>shopping_cart</span>
  {cantidadCarrito > 0 && <span className="carrito-badge">{cantidadCarrito}</span>}
</button>
```

### 3. Funciones Disponibles del Contexto

- `agregarAlCarrito(producto)` - Agrega producto o incrementa cantidad
- `eliminarDelCarrito(productoId)` - Elimina producto del carrito
- `incrementarCantidad(productoId)` - +1 a la cantidad
- `decrementarCantidad(productoId)` - -1 a la cantidad (mínimo 1)
- `vaciarCarrito()` - Limpia todo el carrito
- `obtenerTotal()` - Retorna precio total
- `obtenerCantidadTotal()` - Retorna suma de cantidades
- `abrirCarrito()` - Abre el modal
- `cerrarCarrito()` - Cierra el modal

## Cálculos Automáticos

- **Descuento:** 0% (configurable en `calcularDescuento`)
- **Envío:** $60,000 (gratis para compras > $200,000)
- **Impuestos:** 5% del subtotal
- **IVA:** 19% del subtotal
- **Total:** Subtotal - Descuento + Envío + Impuestos + IVA

## Personalización

### Cambiar Ciudades Disponibles

En `CarritoDeCompras.jsx`:

```jsx
<select value={destino.ciudad}>
  <option value="Medellín - Colombia">Medellín - Colombia</option>
  <option value="Bogotá - Colombia">Bogotá - Colombia</option>
  <option value="Cali - Colombia">Cali - Colombia</option>
  {/* Agregar más ciudades aquí */}
</select>
```

### Modificar Cálculo de Descuentos

En `CarritoContext.jsx`:

```jsx
const calcularDescuento = () => {
  // Ejemplo: 10% de descuento para compras > $500,000
  if (subtotal > 500000) return subtotal * 0.1
  return 0
}
```

### Cambiar Colores del Tema

En `CarritoDeCompras.css`:

```css
.carrito-container {
  background: linear-gradient(145deg, #1a1a1a, #0d0d0d); /* Fondo oscuro */
}

.btn-comprar {
  background: #ff4444; /* Botón rojo */
}

.producto-carrito {
  border: 2px solid rgba(255, 255, 255, 0.8); /* Bordes blancos */
}
```

## Próximas Mejoras

- [ ] Integración con API de pago (Stripe, PayPal, etc.)
- [ ] Validación de stock
- [ ] Códigos de descuento
- [ ] Historial de compras
- [ ] Wishlist/Favoritos
- [ ] Comparación de productos
- [ ] Cálculo de envío por ubicación real
- [ ] Notificaciones toast al agregar productos
- [ ] Animaciones de entrada/salida del modal

## Notas Técnicas

- El carrito persiste en `localStorage` con la clave `'carrito'`
- Los precios se formatean con `Intl.NumberFormat` para formato colombiano (COP)
- El modal usa `position: fixed` con overlay para bloquear la interfaz
- Los eventos de click se manejan con `preventDefault()` y `stopPropagation()` para evitar navegación
- El componente es responsive con breakpoint en 768px
