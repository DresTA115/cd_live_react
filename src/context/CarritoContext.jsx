import { useState, useEffect } from 'react';
import { CarritoContext } from './CarritoContextDefinition';

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find((item) => item.id === producto.id);
      
      if (productoExistente) {
        return prevCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      
      return [...prevCarrito, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== productoId));
  };

  const actualizarCantidad = (productoId, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      eliminarDelCarrito(productoId);
      return;
    }
    
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === productoId
          ? { ...item, cantidad: nuevaCantidad }
          : item
      )
    );
  };

  const incrementarCantidad = (productoId) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === productoId
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  const decrementarCantidad = (productoId) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === productoId
          ? { ...item, cantidad: Math.max(1, item.cantidad - 1) }
          : item
      )
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const obtenerTotal = () => {
    return carrito.reduce((total, item) => {
      // Si el precio es un número, usarlo directamente; si es string, parsearlo
      const precio = typeof item.precio === 'number' 
        ? item.precio 
        : parseFloat(item.precio.replace(/[$,.]/g, ''));
      return total + (precio * item.cantidad);
    }, 0);
  };

  const obtenerCantidadTotal = () => {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };

  const calcularDescuento = () => {
    // Descuento del 0% por defecto, puedes modificar esta lógica
    return 0;
  };

  const calcularEnvio = (subtotal) => {
    // Envío gratis para compras mayores a $200,000
    return subtotal >= 200000 ? 0 : 60000;
  };

  const calcularImpuestos = (subtotal) => {
    // Impuestos del 5%
    return subtotal * 0.05;
  };

  const calcularIVA = (subtotal) => {
    // IVA del 19%
    return subtotal * 0.19;
  };

  const abrirCarrito = () => setCarritoAbierto(true);
  const cerrarCarrito = () => setCarritoAbierto(false);

  const value = {
    carrito,
    carritoAbierto,
    agregarAlCarrito,
    eliminarDelCarrito,
    actualizarCantidad,
    incrementarCantidad,
    decrementarCantidad,
    vaciarCarrito,
    obtenerTotal,
    obtenerCantidadTotal,
    calcularDescuento,
    calcularEnvio,
    calcularImpuestos,
    calcularIVA,
    abrirCarrito,
    cerrarCarrito,
  };

  return (
    <CarritoContext.Provider value={value}>
      {children}
    </CarritoContext.Provider>
  );
}
