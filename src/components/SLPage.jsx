import SLHero from './SLHero'
import SLDescripcion from './SLDescripcion'
import SLCaracteristicas from './SLCaracteristicas'
import CTASection from './CTASection'

export default function SLPage() {
  return (
    <div className="w-full bg-[#030C40]">
      <SLHero />
      <SLDescripcion />
      <SLCaracteristicas />
      <CTASection />
    </div>
  )
}
