import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Instrumentos } from './pages/Instrumentos/Instrumentos'
import { Productos } from './pages/ProductoInstrumentos/productos'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Instrumentos />} />
        <Route path="/instrumentos" element={<Instrumentos />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  )
}