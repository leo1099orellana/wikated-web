import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="relative w-full h-[456px] flex items-center justify-center overflow-hidden border border-white/20 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="absolute inset-0 bg-[url('/images/cta-ciudad.jpg')] bg-cover bg-[center_40%]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1F2E61_0%,#07042A_100%)] opacity-[0.45]" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <h2 className="text-white font-bold text-[39px] leading-[51px] mb-6">
          Hagamos la transformación juntos con Iluminación inteligente y eficiente
        </h2>
        <p className="text-white font-medium text-[23px] leading-[31px] mb-8">
          Contáctenos para recibir asesoramiento o más información sobre nuestras soluciones
        </p>
        <Link
          to="/contacto"
          className="inline-flex items-center justify-center w-[190px] h-[40px] bg-[#030C40] hover:bg-[#01051c] text-white text-[16px] font-bold border border-white rounded-[10px] shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] no-underline transition-colors duration-300"
        >
          Contacto
        </Link>
      </div>
    </section>
  )
}
