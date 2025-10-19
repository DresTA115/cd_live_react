import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import './MainLayout.css'

export function MainLayout({ children, onOpenLogin }) {
  return (
    <div className="layout">
      <Header onOpenLogin={onOpenLogin} />
      <main className="layout__content">{children}</main>
      <Footer />
    </div>
  )
}
