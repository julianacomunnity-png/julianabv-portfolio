import React from 'react';
import { Compass, Lightbulb, Cpu, Briefcase, CheckCircle2 } from 'lucide-react';

export const WhySection: React.FC = () => {
  const pillars = [
    {
      title: "ESTRATEGIA",
      sub: "Dirección comercial",
      desc: "Contenido pensado para captar clientes y generar consultas reales.",
      icon: Compass
    },
    {
      title: "CREATIVIDAD",
      sub: "Retención y ritmo",
      desc: "Ganchos visuales que capturan la atención en los primeros 3 segundos.",
      icon: Lightbulb
    },
    {
      title: "TECNOLOGÍA",
      sub: "Automatización",
      desc: "Flujos en n8n y software propio para simplificar procesos repetitivos.",
      icon: Cpu
    },
    {
      title: "VISIÓN DE NEGOCIO",
      sub: "Operación real",
      desc: "Comprensión de ventas, caja y atención directa desde dentro de la marca.",
      icon: Briefcase
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F5F9FF] border-t border-[#D8E4F2] relative overflow-hidden">

      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#DDEBFF]/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#EEF5FF] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#D8E4F2]">

          <div>
            <div className="flex items-center space-x-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#004AAD] mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004AAD] animate-pulse"></span>
              <span>DIFERENCIAL CLAVE</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#0B1F3A] tracking-tight uppercase">
              POR QUÉ TRABAJAR CONMIGO.
            </h2>
          </div>

          <p className="mt-2 sm:mt-0 text-xs sm:text-sm text-[#5B6F89] font-light">
            Ejecución directa • Sin intermediarios • Alta densidad
          </p>
        </div>

        {/* 4 Compact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {pillars.map((p, idx) => {
            const Icon = p.icon;

            return (
              <div
                key={idx}
                className="
                  relative p-5 rounded-2xl
                  border border-[#D8E4F2]
                  bg-white
                  hover:border-[#004AAD]/50
                  hover:-translate-y-1
                  hover:shadow-[0_18px_45px_rgba(11,31,58,0.10)]
                  transition-all duration-300
                  flex flex-col justify-between
                  group
                  overflow-hidden
                "
              >

                {/* Hover accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#004AAD] to-[#8BB8F5] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>

                  <div className="flex items-center justify-between mb-3">

                    <div className="
                      p-2 rounded-xl
                      bg-[#EEF5FF]
                      text-[#5B6F89]
                      group-hover:bg-[#004AAD]
                      group-hover:text-white
                      transition-all duration-300
                    ">
                      <Icon className="w-4 h-4" />
                    </div>

                    <span className="
                      font-mono text-[10px] font-bold
                      text-[#9AAEC5]
                      group-hover:text-[#004AAD]
                      transition-colors
                    ">
                      0{idx + 1}
                    </span>

                  </div>

                  <h3 className="
                    font-display font-bold
                    text-base sm:text-lg
                    text-[#0B1F3A]
                    group-hover:text-[#004AAD]
                    uppercase tracking-tight
                    mb-0.5
                    transition-colors
                  ">
                    {p.title}
                  </h3>

                  <span className="text-[11px] font-mono text-[#004AAD] block mb-2">
                    {p.sub}
                  </span>

                  <p className="text-xs text-[#5B6F89] font-light leading-relaxed">
                    {p.desc}
                  </p>

                </div>

                <div className="
                  pt-3 mt-4
                  border-t border-[#E5EDF6]
                  flex items-center justify-between
                ">
                  <span className="text-[9px] font-mono uppercase text-[#7B8EA6]">
                    ENFOQUE REAL
                  </span>

                  <CheckCircle2 className="
                    w-3.5 h-3.5
                    text-[#004AAD]
                    group-hover:scale-110
                    transition-transform
                  " />
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};