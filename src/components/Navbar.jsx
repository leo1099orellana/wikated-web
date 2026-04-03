import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Smart Lights', href: '/smart-lights' },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Hardware', href: '/hardware' },
  { label: 'Beneficios', href: '/beneficios' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#172555]">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[67px]">
        <Link to="/" className="flex flex-col items-center gap-1.5">
          <img src="/images/logo-kiwatec.png" alt="Kiwatec" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={`text-[16px] transition-colors ${
                  location.pathname === link.href
                    ? 'text-white font-bold'
                    : 'text-gray-300 font-medium hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburguesa */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Menú mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[#172555] border-t border-white/20">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-[16px] py-2 transition-colors ${
                    location.pathname === link.href
                      ? 'text-white font-bold'
                      : 'text-gray-300 font-medium hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
