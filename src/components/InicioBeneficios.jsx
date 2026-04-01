import { Link } from 'react-router-dom'

export default function Beneficios() {
  return (
    <section className="py-16 px-6" style={{ background: 'linear-gradient(180deg, #030C40 0%, #172555 100%)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-[60%]">
          <img
            src="/images/beneficios.jpg"
            alt="Ciudad inteligente con IoT"
            className="w-full rounded-2xl shadow-2xl object-cover aspect-[16/10]"
          />
        </div>

        <div className="w-full md:w-[40%] text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Beneficios
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
            Menos fallas, menos costos, más control. Nuestro sistema detecta
            anomalías antes de que se conviertan en problemas, reduce el gasto
            energético y permite a los operadores actuar desde cualquier lugar,
            en tiempo real.
          </p>
          <Link
            to="/beneficios"
            className="inline-block bg-[#0F1B3D] border border-white text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#01051c] transition-colors duration-200"
          >
            Conocer más
          </Link>
        </div>
      </div>
    </section>
  )
}
