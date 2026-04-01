const aplicaciones = [
  {
    id: 1,
    titulo: 'Iluminación para Ciudades y Municipios',
    descripcion: 'Smart Lights permite al municipio reducir hasta un 60% el gasto en energía y poner toda la red de alumbrado desde una sola plataforma. El sistema detecta fallas en tiempo real, realiza encendidos automáticos y reduce el costo de mantenimiento.',
    bullets: ['Municipios', 'Comunas', 'Cooperativas eléctricas'],
    imagen: '/images/sol-app-ciudades.jpg',
    imagenIzquierda: true,
    gap: 'gap-[59px]',
    imgWidth: 'w-[626px]', imgHeight: 'h-[417px]', imgRadius: 'rounded-[27px]',
  },
  {
    id: 2,
    titulo: 'Iluminación para Conjuntos Residenciales',
    descripcion: 'Brindamos ahorro, control y seguridad. Smart Lights registra el consumo interno y reporta el ahorro y las fallas sobre la zona. Cada punto que se apaga o se ilumina tiene un registro real que le puede brindar garantía total del buen servicio de la red.',
    bullets: ['Countries', 'Barrios cerrados', 'Estaciones lineales'],
    imagen: '/images/sol-app-residencial.jpg',
    imagenIzquierda: false,
    gap: 'gap-[49px]',
    imgWidth: 'w-[625px]', imgHeight: 'h-[417px]', imgRadius: 'rounded-[26px]',
  },
  {
    id: 3,
    titulo: 'Iluminación para Industria y Logística',
    descripcion: 'En industria, cada punto es tu cuenta. Smart Lights reduce el consumo en zonas productivas, mejora el control del sistema y forma estadísticas base sobre el consumo de áreas de trabajo.',
    bullets: ['Parques industriales', 'Fábricas', 'Minería y Petróleo', 'Playones logísticos'],
    imagen: '/images/sol-app-industria.jpg',
    imagenIzquierda: true,
    gap: 'gap-[59px]',
    imgWidth: 'w-[627px]', imgHeight: 'h-[418px]', imgRadius: 'rounded-[31px]',
  },
  {
    id: 4,
    titulo: 'Iluminación para Comercio y Servicios',
    descripcion: 'Smart Lights se adapta al tipo de espacio comercial al máximo nivel de control. Nuestro servicio garantiza calidad, eficiencia y confort para los clientes de los locales.',
    bullets: ['Shoppings', 'Centros comerciales', 'Estaciones de servicio'],
    imagen: '/images/sol-app-comercio.jpg',
    imagenIzquierda: false,
    gap: 'gap-[59px]',
    imgWidth: 'w-[627px]', imgHeight: 'h-[418px]', imgRadius: 'rounded-[35px]',
  },
  {
    id: 5,
    titulo: 'Iluminación para Transporte y Movilidad',
    descripcion: 'Infraestructura vial que nunca falla. Smart Lights monitorea las vías y gestiona automáticamente los niveles de energía, brindando mayor seguridad en escenarios de mayor flujo.',
    bullets: ['Autopistas', 'Aeropuertos', 'Puertos', 'Terminales de buses', 'Estaciones de tren'],
    imagen: '/images/sol-app-transporte.jpg',
    imagenIzquierda: true,
    gap: 'gap-[59px]',
    imgWidth: 'w-[627px]', imgHeight: 'h-[416px]', imgRadius: 'rounded-[32px]',
  },
  {
    id: 6,
    titulo: 'Iluminación para Turismo y Deporte',
    descripcion: 'Iluminación de alta calidad para escenarios deportivos y turísticos. Smart Lights adapta los niveles según el evento, garantizando visibilidad óptima y reduciendo el consumo en momentos de menor actividad.',
    bullets: ['Estadios', 'Canchas', 'Espacios turísticos', 'Monumentos'],
    imagen: '/images/sol-app-turismo.jpg',
    imagenIzquierda: false,
    gap: 'gap-[59px]',
    imgWidth: 'w-[629px]', imgHeight: 'h-[417px]', imgRadius: 'rounded-[33px]',
  },
]

export default function SolucionesAplicaciones() {
  return (
    <section className="w-full bg-[#172555]">
      {aplicaciones.map((item) => (
        <div key={item.id} className="w-full py-16">
          <div
            className={`max-w-6xl mx-auto px-6 flex items-center ${item.gap} ${
              item.imagenIzquierda ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div className="flex-shrink-0">
              <img
                src={item.imagen}
                alt={item.titulo}
                className={`object-cover shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ${item.imgWidth} ${item.imgHeight} ${item.imgRadius}`}
              />
            </div>
            <div className="flex flex-col w-[386px] gap-[28px]">
              <h3 className="text-white font-bold text-[30px] leading-[35px]">
                {item.titulo}
              </h3>
              <p className="text-white font-normal text-base leading-[170%]">
                {item.descripcion}
              </p>
              <ul className="flex flex-col gap-2">
                {item.bullets.map((b) => (
                  <li key={b} className="text-white text-base font-normal">
                    • {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}