const galeriaImagenes = [
  '/images/sol-ciudades.jpg',
  '/images/sol-residencial.jpg',
  '/images/sol-industria.jpg',
  '/images/sol-comercio.jpg',
  '/images/sol-transporte.jpg',
  '/images/sol-turismo.jpg',
]

export default function SolucionesGaleria() {
  return (
    <section className="w-full py-10 md:py-16 px-6 bg-[#141E4B]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {galeriaImagenes.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Galería ${i + 1}`}
            className="w-full object-cover h-[160px] md:h-[325px] rounded-[16px] md:rounded-[23px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          />
        ))}
      </div>
    </section>
  )
}
