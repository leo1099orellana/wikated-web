import SolucionesHero from './SolucionesHero'
import SolucionesDescripcion from './SolucionesDescripcion'
import SolucionesGaleria from './SolucionesGaleria'
import SolucionesAplicaciones from './SolucionesAplicaciones'
import CTASection from './CTASection'

export default function SolucionesPage() {
  return (
    <div className="w-full bg-[#030C40]">
      <SolucionesHero />
      <SolucionesDescripcion />
      <SolucionesGaleria />
      <SolucionesAplicaciones />
      <CTASection />
    </div>
  )
}
