import React, { useState } from 'react';
import {
  MessageCircle,
  PhoneCall,
  ArrowUpRight,
  CheckCircle2,
  X
} from 'lucide-react';
import { BRAND_DATA } from '../data/portfolioData';

export const FinalCTA: React.FC = () => {
  const [showCallModal, setShowCallModal] = useState(false);

  const callWhatsAppMsg = encodeURIComponent(
    "Hola Juliana, me gustaría coordinar una llamada breve de 15 minutos para revisar las necesidades de mi negocio."
  );

  const callWhatsAppUrl = `${BRAND_DATA.links.whatsapp}?text=${callWhatsAppMsg}`;

  return (
    <section
      id="contacto"
      className="
        py-28 sm:py-36
        bg-[#0B1F3A]
        border-t border-[#17365F]
        relative
        overflow-hidden
      "
    >

      {/* Background Accent Lighting */}
      <div className="
        absolute
        bottom-[-120px]
        left-1/2
        -translate-x-1/2
        w-[900px]
        h-[420px]
        bg-[#004AAD]/35
        rounded-full
        blur-[150px]
        pointer-events-none
      " />

      <div className="
        absolute
        top-[-180px]
        right-[-120px]
        w-[400px]
        h-[400px]
        bg-[#8BB8F5]/10
        rounded-full
        blur-[120px]
        pointer-events-none
      " />

      <div className="
        max-w-5xl
        mx-auto
        px-4 sm:px-6 lg:px-8
        text-center
        relative
        z-10
      ">

        {/* Subtitle Badge */}
        <div className="
          inline-flex
          items-center
          space-x-2
          px-3.5 py-1.5
          rounded-full
          border border-[#6FA4E8]/30
          bg-white/5
          text-[#BFD8FF]
          text-xs
          font-mono
          font-bold
          tracking-widest
          uppercase
          mb-8
          backdrop-blur-sm
        ">

          <span className="
            w-2 h-2
            rounded-full
            bg-[#6FA4E8]
            animate-ping
          "></span>

          <span>DISPONIBILIDAD PARA NUEVOS PROYECTOS</span>

        </div>

        {/* Main Title */}
        <h2 className="
          font-display
          font-black
          text-4xl
          sm:text-6xl
          md:text-7xl
          lg:text-8xl
          text-white
          tracking-tighter
          uppercase
          leading-[0.92]
          mb-6
        ">

          ¿QUÉ PODRÍAMOS <br />

          <span className="
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-white
            via-[#DDEBFF]
            to-[#72A8EE]
          ">
            MEJORAR EN TU NEGOCIO?
          </span>

        </h2>

        {/* Little Text */}
        <p className="
          text-lg
          sm:text-xl
          md:text-2xl
          text-[#B8C8DC]
          font-light
          max-w-xl
          mx-auto
          mb-12
        ">
          Cuéntame qué tienes en mente.
        </p>

        {/* Action Buttons */}
        <div className="
          flex
          flex-col
          sm:flex-row
          items-center
          justify-center
          gap-4
          max-w-md
          mx-auto
        ">

          {/* Main CTA: WhatsApp */}
          <a
            href={BRAND_DATA.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full
              sm:w-auto
              flex-1
              inline-flex
              items-center
              justify-center
              space-x-3
              px-8 py-4
              rounded-2xl
              text-sm
              font-bold
              uppercase
              tracking-wider
              bg-[#004AAD]
              hover:bg-[#1465C7]
              text-white
              transition-all duration-200
              shadow-xl
              shadow-[#004AAD]/30
              hover:shadow-[#004AAD]/50
              hover:-translate-y-0.5
              border border-[#6FA4E8]/30
            "
          >

            <MessageCircle className="w-5 h-5" />

            <span>HABLEMOS POR WHATSAPP</span>

          </a>

          {/* Secondary CTA */}
          <button
            onClick={() => setShowCallModal(true)}
            className="
              w-full
              sm:w-auto
              inline-flex
              items-center
              justify-center
              space-x-2
              px-8 py-4
              rounded-2xl
              text-sm
              font-bold
              uppercase
              tracking-wider
              bg-white/5
              hover:bg-white/10
              text-white
              border border-white/15
              hover:border-[#6FA4E8]/40
              transition-all duration-200
              hover:-translate-y-0.5
              backdrop-blur-sm
            "
          >

            <PhoneCall className="w-4 h-4 text-[#9EC5FF]" />

            <span>AGENDAR LLAMADA</span>

          </button>

        </div>

        {/* Micro Guarantee */}
        <p className="
          mt-8
          text-xs
          font-mono
          text-[#8FA6C1]
        ">
          Respuesta directa • Sin intermediarios • Enfoque 100% práctico
        </p>

      </div>

      {/* Agendar Llamada Modal */}
      {showCallModal && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            p-4
            bg-[#071528]/80
            backdrop-blur-md
            animate-in
            fade-in
          "
          onClick={() => setShowCallModal(false)}
        >

          <div
            className="
              relative
              w-full
              max-w-md
              bg-white
              p-6 sm:p-8
              rounded-3xl
              border border-[#D8E4F2]
              shadow-[0_30px_80px_rgba(7,21,40,0.35)]
            "
            onClick={(e) => e.stopPropagation()}
          >

            <div className="
              flex
              items-center
              justify-between
              pb-4
              border-b border-[#E5EDF6]
              mb-6
            ">

              <div className="flex items-center space-x-2">

                <div className="
                  p-2
                  rounded-xl
                  bg-[#EEF5FF]
                ">
                  <PhoneCall className="w-5 h-5 text-[#004AAD]" />
                </div>

                <h3 className="
                  font-display
                  font-bold
                  text-lg
                  text-[#0B1F3A]
                  uppercase
                ">
                  Agendar una Llamada
                </h3>

              </div>

              <button
                onClick={() => setShowCallModal(false)}
                className="
                  p-1
                  rounded-lg
                  text-[#7B8EA6]
                  hover:text-[#0B1F3A]
                  hover:bg-[#EEF5FF]
                  transition-colors
                "
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>

            </div>

            <p className="
              text-sm
              text-[#506782]
              font-light
              mb-6
              leading-relaxed
            ">
              Para coordinar el horario más conveniente según tu disponibilidad,
              escríbeme directamente por WhatsApp con el asunto de tu llamada:
            </p>

            <div className="
              space-y-3
              mb-6
              bg-[#F5F9FF]
              p-4
              rounded-xl
              border border-[#D8E4F2]
              text-xs
              text-[#435A75]
            ">

              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#004AAD] flex-shrink-0" />
                <span>Sesión de 15 minutos sin compromiso</span>
              </div>

              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#004AAD] flex-shrink-0" />
                <span>Revisión de tu presencia digital o procesos</span>
              </div>

              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#004AAD] flex-shrink-0" />
                <span>Definición de próximos pasos viables</span>
              </div>

            </div>

            <a
              href={callWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full
                inline-flex
                items-center
                justify-center
                space-x-2
                py-3.5 px-6
                rounded-xl
                bg-[#004AAD]
                text-white
                font-bold
                text-xs
                uppercase
                tracking-wider
                hover:bg-[#003A88]
                transition-all
                shadow-lg
                shadow-[#004AAD]/20
              "
            >

              <span>COORDINAR POR WHATSAPP</span>

              <ArrowUpRight className="w-4 h-4" />

            </a>

          </div>

        </div>
      )}

    </section>
  );
};