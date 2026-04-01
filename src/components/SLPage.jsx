import SLHero from './SLHero'
import SLDescripcion from './SLDescripcion'
import SLCaracteristicas from './SLCaracteristicas'
import Contacto from './Contacto'

export default function SLPage() {
  return (
    <div className="w-full bg-[#030C40] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <SLHero />
      <SLDescripcion />
      <SLCaracteristicas />
      <Contacto />
    </div>
  )
}
