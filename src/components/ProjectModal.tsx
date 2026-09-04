import React, { useState, useEffect } from 'react';
import {
  X,
  Play,
  Volume2,
  VolumeX,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { BRAND_DATA } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  useEffect(() => {
    setActiveMediaIndex(0);
  }, [project]);

  if (!project) return null;

  const currentMedia =
    project.gallery[activeMediaIndex] || project.gallery[0];

  const isColombiaVideo =
    project.id === 'colombia-cocktails' &&
    currentMedia.type === 'video';

  const whatsappMessage = encodeURIComponent(
    `Hola Juliana, vi tu proyecto de "${project.title}" en tu portfolio y me gustaría conversar sobre una solución similar para mi negocio.`
  );

  const whatsappUrl = `${BRAND_DATA.links.whatsapp}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#071528]/75 backdrop-blur-xl animate-in fade-in duration-200">

      {/* Click outside backdrop */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      <div className="relative w-full max-w-5xl max-h-[92vh] bg-white border border-[#D8E4F2] rounded-2xl sm:rounded-3xl shadow-[0_30px_100px_rgba(7,21,40,0.30)] overflow-hidden flex flex-col z-10">

        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-[#D8E4F2] bg-[#F8FBFF]">

          <div className="flex items-center space-x-3 min-w-0">

            <span className="font-mono text-sm sm:text-base font-bold text-[#004AAD] px-2.5 py-0.5 rounded-lg bg-[#EEF5FF] border border-[#D8E4F2] flex-shrink-0">
              {project.number}
            </span>

            <div className="min-w-0">
              <h2 className="font-display font-bold text-lg sm:text-2xl text-[#0B1F3A] tracking-tight truncate">
                {project.title}
              </h2>

              <p className="text-xs text-[#6B7F98] font-mono tracking-wider uppercase">
                {project.category}
              </p>
            </div>

          </div>

          <div className="flex items-center space-x-3 ml-3">

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#004AAD] hover:bg-[#003A88] text-white transition-all hover:-translate-y-0.5 shadow-md shadow-[#004AAD]/20"
            >
              <span>CONSULTAR PROYECTO</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#6B7F98] hover:text-[#0B1F3A] hover:bg-[#EEF5FF] transition-colors focus:outline-none"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>

          </div>

        </div>

        {/* Modal Content Scrollable Area */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6 max-h-[calc(92vh-90px)]">

          {/* Main Media Showcase */}
          <div className="relative rounded-2xl overflow-hidden bg-[#F5F9FF] border border-[#D8E4F2] aspect-video max-h-[440px] flex items-center justify-center group">

            {currentMedia.type === 'video' ? (

              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">

                <video
                  key={currentMedia.src}
                  src={currentMedia.src}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className={`w-full h-full ${
                    isColombiaVideo
                      ? 'object-cover scale-[1.28] -translate-y-4'
                      : 'object-contain'
                  } max-h-[440px]`}
                />

                {/* Video Floating Controls */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-[#0B1F3A]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 z-20 shadow-lg">

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1.5 rounded-full text-white hover:text-[#9EC5FF] transition-colors"
                    title={isMuted ? 'Activar audio' : 'Silenciar'}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-[#72A8EE]" />
                    )}
                  </button>

                </div>

              </div>

            ) : (

              <img
                src={currentMedia.src}
                alt={currentMedia.caption}
                className="w-full h-full object-contain max-h-[440px]"
              />

            )}

            {/* Media Caption Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B1F3A]/95 via-[#0B1F3A]/65 to-transparent p-4 pt-10 text-xs sm:text-sm text-white font-medium z-10">
              {currentMedia.caption}
            </div>

            {/* Navigation Arrows */}
            {project.gallery.length > 1 && (
              <>

                <button
                  onClick={() =>
                    setActiveMediaIndex((prev) =>
                      prev === 0
                        ? project.gallery.length - 1
                        : prev - 1
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0B1F3A]/75 hover:bg-[#004AAD] text-white border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-105 z-20 shadow-lg"
                  aria-label="Anterior elemento"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() =>
                    setActiveMediaIndex((prev) =>
                      prev === project.gallery.length - 1
                        ? 0
                        : prev + 1
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0B1F3A]/75 hover:bg-[#004AAD] text-white border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-105 z-20 shadow-lg"
                  aria-label="Siguiente elemento"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

              </>
            )}

          </div>

          {/* Gallery Thumbnails */}
          {project.gallery.length > 1 && (
            <div className="pt-1">

              <div className="flex items-center justify-between mb-2">

                <span className="text-[11px] font-mono text-[#6B7F98] uppercase tracking-wider">
                  Galería del proyecto ({project.gallery.length} piezas)
                </span>

                <span className="text-[10px] font-mono text-[#8AA0BA]">
                  Click para previsualizar
                </span>

              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5 sm:gap-3">

                {project.gallery.map((item, idx) => (

                  <button
                    key={idx}
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${
                      activeMediaIndex === idx
                        ? 'border-[#004AAD] scale-105 shadow-lg shadow-[#004AAD]/25 ring-1 ring-[#004AAD]'
                        : 'border-[#D8E4F2] opacity-70 hover:opacity-100 hover:border-[#8BB8F5]'
                    }`}
                    title={item.caption}
                  >

                    {item.type === 'video' ? (

                      <div className="w-full h-full bg-[#EEF5FF] flex items-center justify-center relative">

                        <video
                          src={item.src}
                          className="w-full h-full object-cover pointer-events-none"
                          muted
                        />

                        <div className="absolute inset-0 bg-[#0B1F3A]/35 flex items-center justify-center">

                          <div className="p-1.5 rounded-full bg-white/90 shadow-md">
                            <Play className="w-3 h-3 text-[#004AAD] fill-[#004AAD]/80" />
                          </div>

                        </div>

                      </div>

                    ) : (

                      <img
                        src={item.src}
                        alt={item.caption}
                        className="w-full h-full object-cover object-top"
                      />

                    )}

                  </button>

                ))}

              </div>

            </div>
          )}

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#D8E4F2]">

            {/* Column 1: Context & Role */}
            <div className="space-y-4">

              <div>
                <span className="text-xs font-mono uppercase text-[#7B8EA6] block mb-1">
                  Rol Ejecutado
                </span>

                <span className="text-sm font-semibold text-[#0B1F3A] px-3 py-1 rounded-lg bg-[#EEF5FF] border border-[#D8E4F2] inline-block">
                  {project.role}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-[#7B8EA6] block mb-1">
                  Enfoque Real
                </span>

                <p className="text-sm text-[#506782] leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>

            </div>

            {/* Column 2: Highlights / Evidence */}
            <div>

              <span className="text-xs font-mono uppercase text-[#7B8EA6] block mb-2">
                Evidencia & Trabajo
              </span>

              <ul className="space-y-2">

                {project.highlights.map((highlight, idx) => (

                  <li
                    key={idx}
                    className="flex items-start space-x-2 text-xs sm:text-sm text-[#506782]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#004AAD] mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>

                ))}

              </ul>

            </div>

            {/* Column 3: Tags & Conversion */}
            <div className="flex flex-col justify-between space-y-4 bg-[#F5F9FF] p-5 rounded-2xl border border-[#D8E4F2] hover:border-[#004AAD]/30 transition-colors">

              <div>

                <span className="text-xs font-mono uppercase text-[#7B8EA6] block mb-2">
                  Habilidades Clave
                </span>

                <div className="flex flex-wrap gap-1.5">

                  {project.tags.map((tag, idx) => (

                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-1 rounded-lg bg-white border border-[#D8E4F2] text-[#506782] hover:border-[#004AAD]/40 hover:text-[#004AAD] transition-colors"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#004AAD] hover:bg-[#003A88] text-white transition-all shadow-lg shadow-[#004AAD]/20 hover:-translate-y-0.5"
              >
                <span>CONSULTAR POR ESTE TRABAJO</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};