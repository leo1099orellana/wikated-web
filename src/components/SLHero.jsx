export default function SLHero() {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: '441px' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-smart-lights.jpg')" }}
      />
      <div
        className="absolute inset-0 bg-[#030C40] opacity-[0.36]"
      />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-white font-bold text-[64px] leading-[75px]">
          Smart Lights
        </h1>
        <p className="text-white font-semibold text-[24px] mt-3">
          La plataforma que pone su red lumínica bajo control
        </p>
      </div>
    </section>
  )
}
