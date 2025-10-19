import { useCallback, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import '@styles/global.css'
import '@styles/header.css'

import { MainLayout } from './layout/MainLayout/MainLayout'
import { ModalLogin } from '@components/modals/ModalLogin'
import { ModalRegistro } from '@components/modals/ModalRegistro'
import { ModalTarjeta } from '@components/modals/ModalTarjeta'
import { Inicio } from '@pages/Inicio'
import { Albums } from '@pages/Albums'
import { Instrumentos } from '@pages/Instrumentos'
import { Marcos } from '@pages/Marcos'
import { Buscador } from '@pages/Buscador/Buscador'

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
      <MainLayout onOpenLogin={abrirLogin}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/instrumentos" element={<Instrumentos />} />
          <Route path="/marcos" element={<Marcos />} />
          <Route path="/buscar" element={<Buscador />} />
        </Routes>
      </MainLayout>

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
