import React from 'react';
import { ArrowDown, ArrowUpRight, Cpu, Video, TrendingUp, Layers } from 'lucide-react';
import { BRAND_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-white bg-grid-pattern"
    >
      {/* Subtle blue glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#004AAD]/8 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute -top-32 right-10 w-[400px] h-[400px] bg-[#EAF3FF]/70 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Massive Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">

            {/* Tag / Microcopy Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#0B1F3A]/10 bg-[#F5F9FF] backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-[#004AAD] animate-pulse"></span>

              <span className="font-mono text-xs font-semibold text-[#0B1F3A] tracking-wider uppercase">
                {BRAND_DATA.badge}
              </span>

              <span className="text-[#0B1F3A]/25 text-xs">|</span>

              <span className="text-xs text-[#52657D] font-medium">
                DISPONIBLE PARA PROYECTOS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.92] text-[#0B1F3A] mb-6 uppercase">

              <span className="block text-[#0B1F3A]">
                DIGITAL.
              </span>

              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0B1F3A] via-[#004AAD] to-[#5BA7FF]">
                CONTENIDO.
              </span>

              <span className="block text-[#0B1F3A] flex items-center gap-3">
                SISTEMAS
                <span className="text-[#004AAD]">.</span>
              </span>

            </h1>

            {/* Concise Value Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-[#52657D] font-light max-w-xl mb-10 leading-snug">
              {BRAND_DATA.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">

              <a
                href="#proyectos"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-[#004AAD] text-white hover:bg-[#003A88] transition-all duration-200 shadow-lg shadow-[#004AAD]/20 hover:-translate-y-0.5"
              >
                <span>VER PROYECTOS</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={BRAND_DATA.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-white text-[#0B1F3A] hover:bg-[#F5F9FF] transition-all duration-200 border border-[#0B1F3A]/15 hover:border-[#004AAD]/40 shadow-sm hover:-translate-y-0.5"
              >
                <span>HABLEMOS</span>
                <ArrowUpRight className="w-4 h-4 text-[#004AAD]" />
              </a>

            </div>

            {/* Minimalist Metrics Badges */}
            <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-[#0B1F3A]/10 w-full max-w-md">

              <div>
                <span className="font-display font-bold text-2xl sm:text-3xl text-[#0B1F3A] block">
                  +247K
                </span>

                <span className="text-xs text-[#52657D] tracking-wide uppercase font-medium">
                  Vistas Reel Viral
                </span>
              </div>

              <div>
                <span className="font-display font-bold text-2xl sm:text-3xl text-[#0B1F3A] block">
                  100%
                </span>

                <span className="text-xs text-[#52657D] tracking-wide uppercase font-medium">
                  Trabajo Real
                </span>
              </div>

              <div>
                <span className="font-display font-bold text-2xl sm:text-3xl text-[#004AAD] block">
                  n8n + App
                </span>

                <span className="text-xs text-[#52657D] tracking-wide uppercase font-medium">
                  Sistemas Vivos
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Dynamic Editorial Tech Composition */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">

            <div className="relative w-full max-w-[460px] aspect-square sm:aspect-[4/5] flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-[#0B1F3A]/10 bg-gradient-to-br from-white via-[#F5F9FF] to-[#EAF3FF] backdrop-blur-xl shadow-2xl shadow-[#0B1F3A]/10 overflow-hidden group">

              {/* Top Bar of Composition */}
              <div className="flex items-center justify-between border-b border-[#0B1F3A]/10 pb-4">

                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#C7D8EC]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#8FB7DF]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#004AAD]"></div>
                </div>

                <div className="font-mono text-xs text-[#52657D] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#004AAD] animate-ping"></span>
                  <span>ECOSISTEMA ACTIVO</span>
                </div>

              </div>

              {/* Central Floating Modules */}
              <div className="space-y-4 my-auto py-4">

                {/* Module 1: Contenido & Video */}
                <div className="p-4 rounded-2xl bg-white border border-[#0B1F3A]/8 hover:border-[#004AAD]/40 transition-all duration-300 transform hover:-translate-x-1 shadow-lg shadow-[#0B1F3A]/5">

                  <div className="flex items-center justify-between mb-2">

                    <div className="flex items-center space-x-3">

                      <div className="p-2 rounded-lg bg-[#EAF3FF] text-[#004AAD]">
                        <Video className="w-4 h-4 text-[#004AAD]" />
                      </div>

                      <span className="font-display font-semibold text-sm text-[#0B1F3A]">
                        PRODUCCIÓN AUDIOVISUAL
                      </span>

                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5F9FF] text-[#52657D] border border-[#0B1F3A]/5">
                      ESTRATEGIA
                    </span>

                  </div>

                  <p className="text-xs text-[#52657D] leading-relaxed">
                    Piezas rítmicas con gancho visual, optimizadas para retención y conversación comercial.
                  </p>

                </div>

                {/* Module 2: Sistemas & Automatización */}
                <div className="p-4 rounded-2xl bg-white border border-[#0B1F3A]/8 hover:border-[#004AAD]/40 transition-all duration-300 transform hover:translate-x-1 shadow-lg shadow-[#0B1F3A]/5 relative">

                  <div className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full bg-[#004AAD] text-[10px] font-bold tracking-wider uppercase text-white shadow-sm">
                    DIFERENCIAL
                  </div>

                  <div className="flex items-center justify-between mb-2">

                    <div className="flex items-center space-x-3">

                      <div className="p-2 rounded-lg bg-[#EAF3FF] text-[#004AAD]">
                        <Cpu className="w-4 h-4 text-[#004AAD]" />
                      </div>

                      <span className="font-display font-semibold text-sm text-[#0B1F3A]">
                        AUTOMATIZACIÓN & APPS
                      </span>

                    </div>

                  </div>

                  <p className="text-xs text-[#52657D] leading-relaxed">
                    Sistemas propios en n8n y apps para eliminar fricción en reservas, ventas y clientes.
                  </p>

                </div>

                {/* Module 3: Operación de Negocio */}
                <div className="p-4 rounded-2xl bg-white border border-[#0B1F3A]/8 hover:border-[#004AAD]/40 transition-all duration-300 shadow-lg shadow-[#0B1F3A]/5">

                  <div className="flex items-center justify-between mb-2">

                    <div className="flex items-center space-x-3">

                      <div className="p-2 rounded-lg bg-[#EAF3FF] text-[#004AAD]">
                        <TrendingUp className="w-4 h-4 text-[#004AAD]" />
                      </div>

                      <span className="font-display font-semibold text-sm text-[#0B1F3A]">
                        VISIÓN DE NEGOCIO
                      </span>

                    </div>

                    <span className="text-[10px] font-mono text-[#52657D]">
                      OPERACIÓN REAL
                    </span>

                  </div>

                  <p className="text-xs text-[#52657D] leading-relaxed">
                    Entendimiento de caja, pedidos, inventario y atención directa para vender con intención.
                  </p>

                </div>

              </div>

              {/* Bottom Editorial Bar */}
              <div className="pt-4 border-t border-[#0B1F3A]/10 flex items-center justify-between text-xs text-[#52657D] font-mono">

                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#004AAD]" />
                  <span>ESTRATEGIA + PROCESOS</span>
                </span>

                <span className="text-[#52657D]">
                  julianabv.social
                </span>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
