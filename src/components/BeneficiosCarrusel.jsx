import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const tarjetas = [
  {
    id: 1,
    iconoSrc: '/images/alumbrado1.png',
    bullets: ['Modernizamos el alumbrado público y mejoramos su calidad.'],
  },
  {
    id: 2,
    iconoSrc: '/images/foco.png',
    bullets: ['Reducimos el consumo energético y los costos operativos.'],
  },
  {
    id: 3,
    iconoSrc: '/images/mantenimiento.png',
    bullets: ['Aceleramos los tiempos de reparación y mantenimiento.'],
  },
  {
    id: 4,
    iconoSrc: '/images/carrusel-eco.png',
    bullets: ['Ayudamos a reducir la huella de carbono.'],
  },
  {
    id: 5,
    iconoSrc: '/images/rueda.png',
    bullets: ['Permitimos gestionar toda la red en tiempo real.'],
  },
  {
    id: 6,
    iconoSrc: '/images/escudo.png',
    bullets: ['Contribuimos a mejorar la satisfacción y seguridad.'],
  },
];

export default function BeneficiosCarrusel() {
  return (
    <section className="w-full py-24 bg-[linear-gradient(180deg,#030C40_0%,#172555_86.62%)] overflow-hidden">
      <div className="relative w-full max-w-[1272px] mx-auto overflow-hidden px-16">

        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          className="swiper-prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-30 text-white hover:opacity-70 cursor-pointer"
        >
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
            <path d="M20 4L4 20L20 36" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: ".swiper-prev-btn", nextEl: ".swiper-next-btn" }}
          spaceBetween={24}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          className="w-full !h-[390px]"
        >
          {tarjetas.map((t, index) => (
            <SwiperSlide
              key={index}
              className="!h-[340px] !mt-[25px] [&.swiper-slide-active]:!h-[390px] [&.swiper-slide-active]:!mt-0 transition-[height,margin-top] duration-300"
            >
              <div className="h-full w-full flex flex-col items-center justify-center text-center gap-[14px] px-[40px] bg-gradient-to-b from-[#010729] to-[#182860] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[23px]">
                <img
                  src={t.iconoSrc}
                  alt=""
                  className="w-[72px] h-[60px] object-contain flex-shrink-0"
                />
                <div className="flex flex-col gap-[4px]">
                  {t.bullets.map((b, bIdx) => (
                    <p
                      key={bIdx}
                      className="text-white font-semibold text-[18px] leading-[26px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]"
                    >
                      {b}
                    </p>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          className="swiper-next-btn absolute right-0 top-1/2 -translate-y-1/2 z-30 text-white hover:opacity-70 cursor-pointer"
        >
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
            <path d="M4 4L20 20L4 36" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      </div>
    </section>
  );
}
