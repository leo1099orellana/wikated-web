const aplicaciones = [
  {
    id: 1,
    titulo: 'Iluminación para Ciudades y Municipios',
    descripcion: 'Smart Lights permite al municipio reducir hasta un 60% el gasto en energía y poner toda la red de alumbrado desde una sola plataforma.',
    bullets: ['Municipios', 'Comunas', 'Cooperativas eléctricas'],
    imagen: '/images/sol-app-ciudades.jpg',
    imagenIzquierda: true,
  },
  {
    id: 2,
    titulo: 'Iluminación para Conjuntos Residenciales',
    descripcion: 'Brindamos ahorro, control y seguridad. Smart Lights registra el consumo interno y reporta el ahorro y las fallas sobre la zona.',
    bullets: ['Countries', 'Barrios cerrados', 'Estaciones lineales'],
    imagen: '/images/sol-app-residencial.jpg',
    imagenIzquierda: false,
  },
  {
    id: 3,
    titulo: 'Iluminación para Industria y Logística',
    descripcion: 'En industria, cada punto es tu cuenta. Smart Lights reduce el consumo en zonas productivas y mejora el control del sistema.',
    bullets: ['Parques industriales', 'Fábricas', 'Minería y Petróleo', 'Playones logísticos'],
    imagen: '/images/sol-app-industria.jpg',
    imagenIzquierda: true,
  },
  {
    id: 4,
    titulo: 'Iluminación para Comercio y Servicios',
    descripcion: 'Smart Lights se adapta al tipo de espacio comercial al máximo nivel de control.',
    bullets: ['Shoppings', 'Centros comerciales', 'Estaciones de servicio'],
    imagen: '/images/sol-app-comercio.jpg',
    imagenIzquierda: false,
  },
  {
    id: 5,
    titulo: 'Iluminación para Transporte y Movilidad',
    descripcion: 'Infraestructura vial que nunca falla. Smart Lights monitorea las vías y gestiona automáticamente los niveles de energía.',
    bullets: ['Autopistas', 'Aeropuertos', 'Puertos', 'Terminales de buses'],
    imagen: '/images/sol-app-transporte.jpg',
    imagenIzquierda: true,
  },
  {
    id: 6,
    titulo: 'Iluminación para Turismo y Deporte',
    descripcion: 'Iluminación de alta calidad para escenarios deportivos y turísticos.',
    bullets: ['Estadios', 'Canchas', 'Espacios turísticos', 'Monumentos'],
    imagen: '/images/sol-app-turismo.jpg',
    imagenIzquierda: false,
  },
]

export default function SolucionesAplicaciones() {
  return (
    <section className="w-full bg-[#172555]">
      {aplicaciones.map((item) => (
        <div key={item.id} className="w-full py-10 md:py-16 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">

            {/* Mobile: siempre apilado. Desktop: lado a lado */}
            <div className="block md:hidden">
              <h3 className="text-white font-bold text-[22px] leading-tight mb-4">{item.titulo}</h3>
              <p className="text-white font-normal text-sm leading-[170%] mb-4">{item.descripcion}</p>
              <ul className="flex flex-col gap-2 mb-6">
                {item.bullets.map((b) => (
                  <li key={b} className="text-white text-sm">• {b}</li>
                ))}
              </ul>
              <img src={item.imagen} alt={item.titulo} className="w-full object-cover h-[220px] rounded-[23px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
            </div>

            {/* Desktop */}
            <div className={`hidden md:flex items-center gap-[59px] ${item.imagenIzquierda ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="flex-1">
                <img src={item.imagen} alt={item.titulo} className="w-full object-cover h-[417px] rounded-[23px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
              </div>
              <div className="w-[386px] flex-shrink-0 flex flex-col gap-[28px]">
                <h3 className="text-white font-bold text-[30px] leading-[35px]">{item.titulo}</h3>
                <p className="text-white font-normal text-base leading-[170%]">{item.descripcion}</p>
                <ul className="flex flex-col gap-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="text-white text-base">• {b}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      ))}
    </section>
  )
}
