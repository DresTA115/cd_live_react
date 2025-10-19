import { useCallback, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import '@css/global.css'
import '@css/header.css'

import { Header } from '@componentes/layout/Header'
import { Footer } from '@componentes/layout/Footer'
import { ModalLogin } from '@componentes/modales/ModalLogin'
import { ModalRegistro } from '@componentes/modales/ModalRegistro'
import { ModalTarjeta } from '@componentes/modales/ModalTarjeta'
import { Inicio } from '@paginas/Inicio'
import { Albums } from '@paginas/Albums'
import { Instrumentos } from '@paginas/Instrumentos'
import { Marcos } from '@paginas/Marcos'

export function App() {
  const [loginAbierto, setLoginAbierto] = useState(false)
  const [registroAbierto, setRegistroAbierto] = useState(false)
  const [tarjetaAbierta, setTarjetaAbierta] = useState(false)

  const cerrarModales = useCallback(() => {
    setLoginAbierto(false)
    setRegistroAbierto(false)
    setTarjetaAbierta(false)
  }, [])

  const abrirLogin = useCallback(() => {
    setLoginAbierto(true)
    setRegistroAbierto(false)
    setTarjetaAbierta(false)
  }, [])

  const abrirRegistro = useCallback(() => {
    setRegistroAbierto(true)
    setLoginAbierto(false)
    setTarjetaAbierta(false)
  }, [])

  const mostrarTarjeta = useCallback(() => {
    setRegistroAbierto(false)
    setLoginAbierto(false)
    setTarjetaAbierta(true)
  }, [])

  return (
    <BrowserRouter>
      <div className="aplicacion">
  <Header onAbrirLogin={abrirLogin} />
        <main className="contenidoPrincipal">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/instrumentos" element={<Instrumentos />} />
            <Route path="/marcos" element={<Marcos />} />
          </Routes>
        </main>
  <Footer />
      </div>

      <ModalLogin abierto={loginAbierto} onCerrar={cerrarModales} onIrRegistro={abrirRegistro} />
      <ModalRegistro
        abierto={registroAbierto}
        onCerrar={cerrarModales}
        onIrLogin={abrirLogin}
        onRegistroExitoso={mostrarTarjeta}
      />
      <ModalTarjeta abierto={tarjetaAbierta} onCerrar={cerrarModales} />
    </BrowserRouter>
  )
}
