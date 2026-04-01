import SolucionesHero from './SolucionesHero'
import SolucionesDescripcion from './SolucionesDescripcion'
import SolucionesGaleria from './SolucionesGaleria'
import SolucionesAplicaciones from './SolucionesAplicaciones'
import Contacto from './Contacto'

export default function SmartLightsPage() {
  return (
    <div className="w-full bg-[#030C40] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <SolucionesHero />
      <SolucionesDescripcion />
      <SolucionesGaleria />
      <SolucionesAplicaciones />
      <Contacto />
    </div>
  )
}