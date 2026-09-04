import React from 'react';
import { ArrowUpRight, Check, Sparkles, Rocket, TrendingUp, Cpu } from 'lucide-react';
import { SERVICES_DATA, BRAND_DATA } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const getServiceIcon = (index: number) => {
    if (index === 0) return Rocket;
    if (index === 1) return TrendingUp;
    return Cpu;
  };

  return (
    <section
      id="servicios"
      className="py-24 sm:py-32 bg-white border-t border-[#D8E4F2] relative overflow-hidden"
    >

      {/* Background decorative elements */}
      <div className="absolute top-20 right-[-120px] w-[400px] h-[400px] rounded-full bg-[#EEF5FF] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-100px] w-[350px] h-[350px] rounded-full bg-[#F5F9FF] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">

          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-[#004AAD] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUCIONES & CAPACIDADES</span>
          </div>

          <h2 className="
            font-display font-black
            text-4xl sm:text-5xl md:text-6xl
            text-[#0B1F3A]
            tracking-tight uppercase
            leading-tight mb-4
          ">
            ¿QUÉ PODEMOS HACER?
          </h2>

          <p className="text-base sm:text-lg text-[#5B6F89] font-light leading-relaxed">
            Estructuras de trabajo diseñadas para responder a la etapa actual de tu negocio.
          </p>

        </div>

        {/* 3 Services Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

          {SERVICES_DATA.map((service, index) => {

            const Icon = getServiceIcon(index);
            const isFeatured = index === 1;

            const whatsappMsg = encodeURIComponent(
              `Hola Juliana, me interesa el servicio ${service.number} — ${service.title} para mi negocio.`
            );

            const serviceUrl = `${BRAND_DATA.links.whatsapp}?text=${whatsappMsg}`;

            return (
              <div
                key={service.number}
                className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 ${
                  isFeatured
                    ? `
                      border-2 border-[#004AAD]
                      bg-gradient-to-b from-[#F5F9FF] to-[#E8F1FF]
                      shadow-[0_20px_55px_rgba(0,74,173,0.14)]
                    `
                    : `
                      border border-[#D8E4F2]
                      bg-white
                      hover:border-[#004AAD]/40
                      hover:shadow-[0_20px_50px_rgba(11,31,58,0.09)]
                    `
                }`}
              >

                {isFeatured && (
                  <>
                    {/* Featured accent */}
                    <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-[#004AAD]" />

                    <div className="
                      absolute -top-3.5 left-8
                      px-3 py-1 rounded-full
                      bg-[#004AAD]
                      text-[10px]
                      font-mono font-bold
                      text-white
                      uppercase
                      tracking-wider
                      shadow-md shadow-[#004AAD]/20
                    ">
                      MÁS SOLICITADO
                    </div>
                  </>
                )}

                <div>

                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-8">

                    <span className="
                      font-mono text-sm font-bold
                      text-[#8AA0BA]
                      group-hover:text-[#004AAD]
                      transition-colors
                    ">
                      {service.number}
                    </span>

                    <div className={`
                      p-3 rounded-2xl transition-all duration-300
                      ${
                        isFeatured
                          ? 'bg-[#004AAD] text-white shadow-lg shadow-[#004AAD]/20'
                          : 'bg-[#EEF5FF] text-[#004AAD] group-hover:bg-[#004AAD] group-hover:text-white'
                      }
                    `}>
                      <Icon className="w-5 h-5" />
                    </div>

                  </div>

                  <h3 className="
                    font-display font-bold
                    text-2xl sm:text-3xl
                    text-[#0B1F3A]
                    tracking-tight uppercase
                    mb-2
                  ">
                    {service.title}
                  </h3>

                  <p className="
                    text-sm font-medium
                    text-[#004AAD]
                    mb-8
                    font-mono
                  ">
                    {service.tagline}
                  </p>

                  {/* Feature List */}
                  <div className="
                    space-y-3
                    pt-6
                    border-t border-[#D8E4F2]
                    mb-8
                  ">

                    <span className="
                      text-[11px]
                      font-mono
                      text-[#7B8EA6]
                      uppercase
                      block
                      mb-2
                    ">
                      Incluye:
                    </span>

                    {service.features.map((feature, fIdx) => (

                      <div
                        key={fIdx}
                        className="flex items-center space-x-3 text-sm text-[#435A75]"
                      >

                        <div className="
                          w-4 h-4
                          rounded-full
                          bg-[#DDEBFF]
                          flex items-center justify-center
                          flex-shrink-0
                        ">
                          <Check className="w-2.5 h-2.5 text-[#004AAD]" />
                        </div>

                        <span>{feature}</span>

                      </div>

                    ))}

                  </div>

                </div>

                {/* Service Card CTA */}
                <a
                  href={serviceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-full
                    inline-flex items-center justify-center
                    space-x-2
                    py-3.5 px-6
                    rounded-xl
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    transition-all duration-200
                    hover:-translate-y-0.5
                    ${
                      isFeatured
                        ? `
                          bg-[#004AAD]
                          hover:bg-[#003A88]
                          text-white
                          shadow-lg shadow-[#004AAD]/20
                        `
                        : `
                          bg-[#0B1F3A]
                          hover:bg-[#004AAD]
                          text-white
                        `
                    }
                  `}
                >
                  <span>CONSULTAR PLAN</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

              </div>
            );
          })}

        </div>

        {/* Custom Solution Footer Card */}
        <div className="
          mt-10
          p-6 sm:p-8
          rounded-2xl
          border border-[#D8E4F2]
          bg-[#F5F9FF]
          flex flex-col sm:flex-row
          items-center justify-between
          gap-4
          hover:border-[#004AAD]/30
          transition-colors
        ">

          <div className="text-center sm:text-left">

            <h4 className="
              font-display font-bold
              text-lg sm:text-xl
              text-[#0B1F3A]
            ">
              ¿Necesitas algo diferente?
            </h4>

            <p className="
              text-xs sm:text-sm
              text-[#5B6F89]
              font-light
            ">
              Proyectos especiales, consultorías a medida o integración de sistemas dedicados.
            </p>

          </div>

          <a
            href={`${BRAND_DATA.links.whatsapp}?text=${encodeURIComponent("Hola Juliana, busco una solución personalizada para mi negocio.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center
              space-x-2
              px-6 py-3
              rounded-xl
              bg-[#0B1F3A]
              text-white
              hover:bg-[#004AAD]
              font-mono
              text-xs
              font-bold
              uppercase
              tracking-wider
              transition-all
              hover:-translate-y-0.5
            "
          >
            <span>SOLUCIÓN PERSONALIZADA</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

        </div>

      </div>
    </section>
  );
};