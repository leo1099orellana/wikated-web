import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Inicio from './components/Inicio'
import SLpage from './components/SLpage'
import SolucionesPage from './components/SolucionesPage'
import HardwarePage from './components/HardwarePage'
import NosotrosPage from './components/NosotrosPage'
import BeneficiosPage from './components/BeneficiosPage'
import ContactoPage from './components/ContactoPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#010A2B]" style={{ fontFamily: 'Raleway, sans-serif' }}>
        <Navbar />
        <div className="pt-[67px]">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/smart-lights" element={<SLpage />} />
            <Route path="/soluciones" element={<SolucionesPage />} />
            <Route path="/hardware" element={<HardwarePage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/beneficios" element={<BeneficiosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton phone="5491100000000" />
      </div>
    </BrowserRouter>
  )
}
