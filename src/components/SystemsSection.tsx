import React, { useState } from 'react';
import {
  Cpu,
  CheckCircle2,
  Maximize2,
  Volume2,
  VolumeX,
  Workflow,
  ArrowUpRight
} from 'lucide-react';
import { SYSTEMS_DATA, BRAND_DATA } from '../data/portfolioData';

export const SystemsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [zoomDiagram, setZoomDiagram] = useState(false);

  return (
    <section
      id="sistemas"
      className="py-24 sm:py-32 bg-[#F5F9FF] border-t border-[#0B1F3A]/10 relative overflow-hidden"
    >

      {/* Background Tech Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#004AAD]/8 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#EAF3FF] rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EAF3FF] border border-[#004AAD]/20 text-[#004AAD] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>EL DIFERENCIAL CLAVE</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#0B1F3A] tracking-tight uppercase leading-[0.95] mb-3">
            {SYSTEMS_DATA.title}
          </h2>

          <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#0B1F3A] via-[#004AAD] to-[#5BA7FF] tracking-tight uppercase mb-4">
            {SYSTEMS_DATA.subtitle}
          </h3>

          <p className="text-lg text-[#52657D] font-light leading-relaxed">
            {SYSTEMS_DATA.description}
          </p>

        </div>

        {/* Two Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Pillar 1 */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-[#0B1F3A]/10 bg-white p-6 sm:p-8 shadow-xl shadow-[#0B1F3A]/5 relative group">

            <div>

              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#0B1F3A]/10">

                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 rounded-full bg-[#004AAD] ring-4 ring-[#004AAD]/10"></span>

                  <h4 className="font-display font-bold text-xl sm:text-2xl text-[#0B1F3A]">
                    {SYSTEMS_DATA.app.title}
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-[#EAF3FF] text-[#004AAD] border border-[#004AAD]/20 uppercase tracking-wider">
                    SOFTWARE PROPIO
                  </span>
                </div>

              </div>

              <p className="text-sm sm:text-base text-[#52657D] mb-6 font-medium">
                {SYSTEMS_DATA.app.tagline}
              </p>

              {/* App Video Showcase */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0B1F3A] border border-[#0B1F3A]/10 aspect-video mb-6 shadow-inner group/video">

                <div className="w-full h-full overflow-hidden flex items-center justify-center">
                  <video
                    id="admin-app-video"
                    src={SYSTEMS_DATA.app.video}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover scale-[1.12] -translate-y-2 origin-top"
                  />
                </div>

                {/* Video HUD overlay */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0B1F3A]/90 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white flex items-center gap-1.5 z-10">
                  <span className="w-2 h-2 rounded-full bg-[#5BA7FF]"></span>
                  <span>SISTEMA EN VIVO</span>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-3 right-3 flex items-center space-x-2 bg-[#0B1F3A]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 z-10">

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1 rounded text-white/70 hover:text-white transition-colors"
                    title={isMuted ? 'Activar audio' : 'Silenciar'}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-[#5BA7FF]" />
                    )}
                  </button>

                </div>

              </div>

              {/* Interactive Categories */}
              <div className="mb-4">

                <span className="text-xs font-mono uppercase text-[#7A8CA3] block mb-2">
                  Módulos de Gestión Integrados:
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">

                  {SYSTEMS_DATA.app.categories.map((cat, idx) => (
                    <button
                      key={cat.name}
                      onClick={() => setActiveCategory(idx)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold text-center transition-all ${
                        activeCategory === idx
                          ? 'bg-[#004AAD] text-white shadow-lg shadow-[#004AAD]/20 border border-[#004AAD]'
                          : 'bg-[#F5F9FF] text-[#52657D] hover:text-[#0B1F3A] hover:bg-[#EAF3FF] border border-[#0B1F3A]/8'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}

                </div>
              </div>

              {/* Active Category Detail */}
              <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#0B1F3A]/8 text-xs text-[#52657D] flex items-center space-x-3">

                <CheckCircle2 className="w-4 h-4 text-[#004AAD] flex-shrink-0" />

                <span>
                  <strong className="text-[#0B1F3A]">
                    {SYSTEMS_DATA.app.categories[activeCategory].name}:
                  </strong>{' '}
                  {SYSTEMS_DATA.app.categories[activeCategory].desc}
                </span>

              </div>

            </div>

            {/* Pillar 1 Footer */}
            <div className="pt-6 mt-6 border-t border-[#0B1F3A]/10 flex flex-wrap items-center justify-between gap-3">

              <div className="flex flex-wrap gap-2">
                {SYSTEMS_DATA.app.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5F9FF] text-[#52657D] border border-[#0B1F3A]/8"
                  >
                    {badge}
                  </span>
                ))}
              </div>

            </div>

          </div>

          {/* Pillar 2 */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-[#0B1F3A]/10 bg-white p-6 sm:p-8 shadow-xl shadow-[#0B1F3A]/5 relative group">

            <div>

              {/* Header Info */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#0B1F3A]/10">

                <div className="flex items-center space-x-3">
                  <Workflow className="w-5 h-5 text-[#004AAD]" />

                  <h4 className="font-display font-bold text-xl sm:text-2xl text-[#0B1F3A]">
                    {SYSTEMS_DATA.automation.title}
                  </h4>
                </div>

              </div>

              <p className="text-sm sm:text-base text-[#52657D] mb-6 font-medium">
                {SYSTEMS_DATA.automation.tagline}
              </p>

              {/* Required Badges */}
              <div className="flex items-center space-x-2 mb-6">

                {SYSTEMS_DATA.automation.badges.map((badge) => (
                  <span
                    key={badge}
                    className="font-mono text-xs font-bold px-3 py-1 rounded-md bg-[#EAF3FF] text-[#004AAD] border border-[#004AAD]/20 tracking-wider uppercase"
                  >
                    {badge}
                  </span>
                ))}

              </div>

              {/* Image Container */}
              <div
                onClick={() => setZoomDiagram(true)}
                className="relative rounded-2xl overflow-hidden bg-white border border-[#0B1F3A]/10 aspect-[4/3] cursor-pointer group/img mb-6 shadow-inner"
              >

                <img
                  src={SYSTEMS_DATA.automation.image}
                  alt="Flujo de automatización n8n para ING Cars"
                  className="w-full h-full object-contain p-2 group-hover/img:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-[#0B1F3A]/35 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">

                  <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white text-[#0B1F3A] font-mono text-xs font-bold uppercase tracking-wider shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>AMPLIAR FLUJO</span>
                  </div>

                </div>

              </div>

              {/* Automation details */}
              <div className="space-y-2.5">

                {SYSTEMS_DATA.automation.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-2.5 text-xs text-[#52657D]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#004AAD] mt-1.5 flex-shrink-0"></span>
                    <span>{detail}</span>
                  </div>
                ))}

              </div>

            </div>

            {/* Pillar 2 Footer */}
            <div className="pt-6 mt-6 border-t border-[#0B1F3A]/10 flex items-center justify-between">

              <span className="font-mono text-xs text-[#52657D]">
                PROCESOS SIN ERRORES HUMANOS
              </span>

              <a
                href={BRAND_DATA.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#004AAD] hover:text-[#003A88] uppercase tracking-wider"
              >
                <span>AUTOMATIZAR MI NEGOCIO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Zoom Diagram Lightbox Modal */}
      {zoomDiagram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F3A]/90 backdrop-blur-xl animate-in fade-in"
          onClick={() => setZoomDiagram(false)}
        >

          <div
            className="relative max-w-6xl w-full max-h-[90vh] bg-white p-4 sm:p-6 rounded-3xl border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex items-center justify-between pb-4 border-b border-[#0B1F3A]/10 mb-4">

              <div className="flex items-center space-x-3">

                <span className="font-mono text-xs text-[#004AAD] font-bold px-2.5 py-0.5 rounded bg-[#EAF3FF]">
                  n8n WORKFLOW
                </span>

                <h5 className="font-display font-bold text-[#0B1F3A] text-lg">
                  Diagrama de Flujo en Producción · ING Cars
                </h5>

              </div>

              <button
                onClick={() => setZoomDiagram(false)}
                className="p-2 text-[#52657D] hover:text-[#0B1F3A] rounded-lg hover:bg-[#F5F9FF]"
              >
                ✕
              </button>

            </div>

            <div className="overflow-auto flex-1 flex items-center justify-center bg-[#F5F9FF] rounded-2xl p-2">
              <img
                src={SYSTEMS_DATA.automation.image}
                alt="Diagrama n8n ampliado"
                className="max-h-[75vh] w-auto object-contain rounded-lg"
              />
            </div>

          </div>

        </div>
      )}

    </section>
  );
};