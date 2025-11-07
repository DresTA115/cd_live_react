import '@styles/global.css'

import { RouterApp } from './routes/RouterApp'
import { CarritoProvider } from './context/CarritoContext'

export function App() {
  return (
    <CarritoProvider>
      <RouterApp />
    </CarritoProvider>
  )
}
