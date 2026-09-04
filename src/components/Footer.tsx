import React from 'react';
import { ArrowUp, MessageCircle, ExternalLink } from 'lucide-react';
import { BRAND_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="
      bg-[#0B1F3A]
      border-t border-[#17365F]
      py-16
      text-[#AFC0D5]
    ">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Row */}
        <div className="
          flex
          flex-col
          md:flex-row
          items-start
          md:items-center
          justify-between
          gap-8
          pb-12
          border-b border-white/10
        ">

          {/* Brand & Tagline */}
          <div>

            <a
              href="#inicio"
              className="
                font-display
                font-bold
                text-2xl
                text-white
                tracking-tight
                inline-block
                mb-2
                group
              "
            >
              julianabv
              <span className="
                text-[#6FA4E8]
                group-hover:text-white
                transition-colors
              ">
                .social
              </span>
            </a>

            <p className="
              font-mono
              text-xs
              text-[#8FA6C1]
              tracking-wider
              uppercase
            ">
              {BRAND_DATA.coreIdea}
            </p>

          </div>

          {/* Real Social Links */}
          <div className="
            flex
            flex-wrap
            items-center
            gap-4 sm:gap-6
          ">

            <a
              href={BRAND_DATA.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                space-x-2
                px-4 py-2
                rounded-xl
                bg-white/5
                border border-white/10
                text-xs
                font-semibold
                text-[#C7D4E4]
                hover:text-white
                hover:border-[#6FA4E8]/50
                hover:bg-white/10
                transition-all
              "
            >

              <svg
                className="w-4 h-4 text-[#F5A0C7] fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618-6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>

              <span>Instagram</span>

            </a>

            <a
              href={BRAND_DATA.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                space-x-2
                px-4 py-2
                rounded-xl
                bg-white/5
                border border-white/10
                text-xs
                font-semibold
                text-[#C7D4E4]
                hover:text-white
                hover:border-[#6FA4E8]/50
                hover:bg-white/10
                transition-all
              "
            >

              <MessageCircle className="w-4 h-4 text-[#73D9A5]" />

              <span>WhatsApp</span>

            </a>

            <a
              href={BRAND_DATA.links.beacons}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                space-x-2
                px-4 py-2
                rounded-xl
                bg-white/5
                border border-white/10
                text-xs
                font-semibold
                text-[#C7D4E4]
                hover:text-white
                hover:border-[#6FA4E8]/50
                hover:bg-white/10
                transition-all
              "
            >

              <ExternalLink className="w-4 h-4 text-[#6FA4E8]" />

              <span>Beacons</span>

            </a>

          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="
              p-3
              rounded-full
              border border-white/10
              bg-white/5
              text-[#9FB2C8]
              hover:text-white
              hover:border-[#6FA4E8]/50
              hover:bg-[#004AAD]
              transition-all
              flex
              items-center
              justify-center
              group
            "
            aria-label="Volver arriba"
          >

            <ArrowUp className="
              w-4 h-4
              group-hover:-translate-y-0.5
              transition-transform
            " />

          </button>

        </div>

        {/* Bottom copyright */}
        <div className="
          pt-8
          flex
          flex-col
          sm:flex-row
          items-center
          justify-between
          text-xs
          text-[#8197B1]
          font-mono
          gap-4
        ">

          <p>
            © {new Date().getFullYear()} julianabv.social. Todos los derechos reservados.
          </p>

          <p className="flex items-center gap-2">

            <span>Estrategia</span>
            <span>•</span>
            <span>Contenido</span>
            <span>•</span>
            <span>Sistemas</span>

          </p>

        </div>

      </div>

    </footer>
  );
};