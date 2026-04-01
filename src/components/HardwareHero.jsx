export default function SLHero() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden h-[441px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hardware-hero-app.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#030C40] opacity-[0.36]" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-white font-bold text-[64px] leading-[75px]">
          Hardware
        </h1>
        <p className="text-white font-semibold text-2xl mt-3">
          Tecnologia robusta para soluciones inteligentes
        </p>
      </div>
    </section>
  )
}