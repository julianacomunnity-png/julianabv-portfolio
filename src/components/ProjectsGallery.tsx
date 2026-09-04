import React, { useState } from 'react';
import { ArrowUpRight, Eye, Globe } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="proyectos"
      className="py-24 sm:py-32 bg-white border-t border-[#0B1F3A]/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#0B1F3A]/10">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#004AAD] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#004AAD]"></span>
              <span>PORTFOLIO SELECCIONADO</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#0B1F3A] tracking-tight uppercase">
              TRABAJOS REALIZADOS.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <span className="text-[#52657D] font-mono text-xs uppercase tracking-wider">
              EVIDENCIA VISUAL
            </span>

            <span className="text-[#0B1F3A]/20">/</span>

            <span className="text-[#0B1F3A] font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EAF3FF]">
              TRABAJO REAL
            </span>
          </div>
        </div>

        {/* Editorial Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS_DATA.map((project, index) => {
            const isWide = index === 0 || index === 4;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden border border-[#0B1F3A]/10 bg-white transition-all duration-500 hover:border-[#004AAD]/50 hover:shadow-2xl hover:shadow-[#0B1F3A]/10 flex flex-col ${
                  isWide
                    ? 'md:col-span-2 lg:col-span-2'
                    : 'md:col-span-1 lg:col-span-1'
                }`}
              >

                {/* Visual Media Container */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F5F9FF]">

                  {/* Case A: Dedicated multi-website gallery */}
                  {project.previewWebsites ? (
                    <div className="w-full h-full grid grid-cols-2 gap-1.5 p-2 bg-[#F5F9FF] group-hover:scale-[1.02] transition-transform duration-500">

                      {project.previewWebsites.map((site, sIdx) => (
                        <div
                          key={sIdx}
                          className="relative rounded-lg overflow-hidden bg-white border border-[#0B1F3A]/10 flex flex-col group/site"
                        >
                          <img
                            src={site.image}
                            alt={site.name}
                            className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 transition-opacity"
                          />

                          <div className="absolute bottom-0 inset-x-0 bg-[#0B1F3A]/90 backdrop-blur-sm px-2 py-1 flex items-center justify-between border-t border-white/10">
                            <span className="text-[10px] font-mono font-medium text-white truncate">
                              {site.name}
                            </span>

                            <Globe className="w-2.5 h-2.5 text-[#5BA7FF] flex-shrink-0 ml-1" />
                          </div>
                        </div>
                      ))}

                    </div>
                  ) : project.previewVideo ? (

                    /* Case B: Video preview */
                    <video
                      src={project.previewVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                  ) : (

                    /* Case C: Static cover */
                    <img
                      src={project.previewImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                  )}

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">

                    <span className="font-mono text-xs font-bold text-white px-2.5 py-1 rounded-md bg-[#0B1F3A]/90 backdrop-blur-md border border-white/15">
                      {project.number}
                    </span>

                    <span className="font-mono text-[11px] font-semibold text-white px-3 py-1 rounded-full bg-[#0B1F3A]/90 backdrop-blur-md border border-white/15 uppercase tracking-wider">
                      {project.category}
                    </span>

                  </div>

                  {/* Subtle Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none" />

                  {/* Hover Center Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">

                    <div className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[#004AAD] text-white font-mono text-xs font-bold tracking-wider uppercase shadow-xl">
                      <Eye className="w-3.5 h-3.5" />

                      <span>
                        {project.previewWebsites
                          ? 'VER PROYECTO COMPLETO'
                          : 'EXPLORAR TRABAJO'}
                      </span>
                    </div>

                  </div>

                </div>

                {/* Bottom Card Meta */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white">

                  <div>
                    <div className="flex items-center justify-between mb-2">

                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B1F3A] group-hover:text-[#004AAD] transition-colors tracking-tight">
                        {project.title}
                      </h3>

                      <div className="w-8 h-8 rounded-full border border-[#0B1F3A]/10 flex items-center justify-center text-[#52657D] group-hover:text-white group-hover:border-[#004AAD] group-hover:bg-[#004AAD] transition-all flex-shrink-0 ml-3">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>

                    </div>

                    <p className="text-xs sm:text-sm text-[#52657D] line-clamp-2 mb-4 leading-relaxed font-light">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Footer tags */}
                  <div className="pt-4 border-t border-[#0B1F3A]/8 flex items-center justify-between">

                    <div className="flex items-center space-x-2">
                      <span className="text-[11px] font-mono text-[#7A8CA3]">
                        Rol:
                      </span>

                      <span className="text-xs font-medium text-[#0B1F3A]">
                        {project.role}
                      </span>
                    </div>

                    <div className="flex gap-1.5">
                      {project.tags.slice(0, 2).map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5F9FF] border border-[#0B1F3A]/8 text-[#52657D]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};