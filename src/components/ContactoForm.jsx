export default function ContactoForm() {
  return (
    <section className="w-full bg-[#172555] py-12 md:py-16 px-6">
      <div className="max-w-[1272px] mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">

        {/* Formulario — primero en mobile, segundo en desktop */}
        <div className="flex-1 w-full bg-[#0D1640] rounded-[16px] p-6 md:p-8 order-1 md:order-2">
          <h2 className="text-white font-bold text-[24px] leading-[28px] mb-1 pb-2 border-b border-white/40 w-fit">
            Contáctenos
          </h2>

          <form className="mt-6 flex flex-col gap-4">
            {/* Nombre y Apellido — apilados en mobile, lado a lado en desktop */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-white text-[13px] font-normal">Nombre</label>
                <input
                  type="text"
                  className="w-full h-[38px] bg-white rounded-[4px] px-3 text-[#030C40] text-[14px] outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-white text-[13px] font-normal">Apellido</label>
                <input
                  type="text"
                  className="w-full h-[38px] bg-white rounded-[4px] px-3 text-[#030C40] text-[14px] outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-white text-[13px] font-normal">Email</label>
              <input
                type="email"
                className="w-full h-[38px] bg-white rounded-[4px] px-3 text-[#030C40] text-[14px] outline-none"
              />
            </div>

            {/* Localidad */}
            <div className="flex flex-col gap-1">
              <label className="text-white text-[13px] font-normal">Localidad</label>
              <input
                type="text"
                className="w-full h-[38px] bg-white rounded-[4px] px-3 text-[#030C40] text-[14px] outline-none"
              />
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-1">
              <label className="text-white text-[13px] font-normal">Mensaje</label>
              <textarea
                rows={5}
                className="w-full bg-white rounded-[4px] px-3 py-2 text-[#030C40] text-[14px] outline-none resize-none"
              />
            </div>

            {/* Botón Enviar */}
            <button
              type="submit"
              className="w-full h-[38px] bg-[#030C40] border border-white/60 rounded-[4px] text-white text-[14px] font-semibold hover:bg-[#01051c] transition-colors cursor-pointer mt-1"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Info de contacto — segundo en mobile, primero en desktop */}
        <div className="flex flex-col gap-8 md:gap-10 w-full md:w-[200px] md:flex-shrink-0 md:pt-12 order-2 md:order-1">
          {/* WhatsApp COMENTADO
          <div>
            <p className="text-white font-bold text-[18px] leading-[21px]">WhatsApp</p>
            <p className="text-white font-normal text-[16px] mt-1">+54911-6500-6000</p>
          </div>
          */}

          <div className="text-center md:text-left">
            <p className="text-white font-bold text-[18px] leading-[21px]">Email</p>
            <p className="text-white font-normal text-[16px] mt-1">info@kiwatec.net</p>
          </div>

          {/* Redes sociales COMENTADAS
          <div>
            <p className="text-white font-bold text-[18px] leading-[21px] mb-3">Redes sociales</p>
            <div className="flex gap-3 items-center">
              <a href="#" target="_blank" rel="noreferrer" className="text-white hover:opacity-70 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="text-white hover:opacity-70 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="text-white hover:opacity-70 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </a>
            </div>
          </div>
          */}

        </div>

      </div>
    </section>
  )
}
