import { useCallback, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import '@styles/global.css'
import { Productos } from './pages/ProductoInstrumentos/productos'
import { MainLayout } from './layout/MainLayout/MainLayout'
import { ModalLogin } from '@components/modals/ModalLogin'
import { ModalRegistro } from '@components/modals/ModalRegistro'
import { ModalTarjeta } from '@components/modals/ModalTarjeta'
import { ModalRegistroConfirmado } from '@components/modals/ModalRegistroConfirmado'
import { Inicio } from '@pages/Inicio'
import { Albums } from '@pages/Albums'
import { Instrumentos } from '@pages/Instrumentos'
import { Marcos } from '@pages/Marcos'
import { Buscador } from '@pages/Buscador'

export function App() {
  const [loginAbierto, setLoginAbierto] = useState(false)
  const [registroAbierto, setRegistroAbierto] = useState(false)
  const [tarjetaAbierta, setTarjetaAbierta] = useState(false)
  const [confirmacionRegistroAbierta, setConfirmacionRegistroAbierta] = useState(false)

  const cerrarModales = useCallback(() => {
    setLoginAbierto(false)
    setRegistroAbierto(false)
    setTarjetaAbierta(false)
    setConfirmacionRegistroAbierta(false)
  }, [])

  const abrirLogin = useCallback(() => {
    setLoginAbierto(true)
    setRegistroAbierto(false)
    setTarjetaAbierta(false)
    setConfirmacionRegistroAbierta(false)
  }, [])

  const abrirRegistro = useCallback(() => {
    setRegistroAbierto(true)
    setLoginAbierto(false)
    setTarjetaAbierta(false)
    setConfirmacionRegistroAbierta(false)
  }, [])

  const cerrarConfirmacionRegistro = useCallback(() => {
    setConfirmacionRegistroAbierta(false)
  }, [])

  const mostrarTarjeta = useCallback(() => {
    setConfirmacionRegistroAbierta(false)
    setRegistroAbierto(false)
    setLoginAbierto(false)
    setTarjetaAbierta(true)
  }, [])

  const finalizarRegistroConTarjeta = useCallback(() => {
    setTarjetaAbierta(false)
    setConfirmacionRegistroAbierta(true)
  }, [])

  return (
    <BrowserRouter>
      <MainLayout onOpenLogin={abrirLogin}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/instrumentos" element={<Instrumentos />} />
          <Route path="/marcos" element={<Marcos />} />
          <Route path="/buscar" element={<Buscador />} />
          <Route path="/instrumentos" element={<Instrumentos />} />
          <Route path="/productos" element={<Productos />} /> 
        </Routes>
      </MainLayout>

      <ModalLogin abierto={loginAbierto} onCerrar={cerrarModales} onIrRegistro={abrirRegistro} />
      <ModalRegistro
        abierto={registroAbierto}
        onCerrar={cerrarModales}
        onIrLogin={abrirLogin}
        onRegistroExitoso={mostrarTarjeta}
      />
      <ModalRegistroConfirmado
        abierto={confirmacionRegistroAbierta}
        onCerrar={cerrarConfirmacionRegistro}
        onVerPerfil={cerrarConfirmacionRegistro}
      />
      <ModalTarjeta abierto={tarjetaAbierta} onCerrar={cerrarModales} onRegistroCompletado={finalizarRegistroConTarjeta} />
    </BrowserRouter>
  )
}
