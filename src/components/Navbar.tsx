import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { BRAND_DATA } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Sistemas', href: '#sistemas' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? `
              bg-white/90
              backdrop-blur-xl
              border-b border-[#D8E4F2]
              py-3.5
              shadow-[0_8px_30px_rgba(11,31,58,0.06)]
            `
            : `
              bg-white/75
              backdrop-blur-sm
              py-5
            `
        }
      `}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between">

          {/* Brand Logo */}
          <a
            href="#inicio"
            className="
              group
              flex items-center
              space-x-2
              text-[#0B1F3A]
              font-display
              font-bold
              text-lg sm:text-xl
              tracking-tight
              transition-all duration-200
            "
          >

            <span className="
              w-2.5 h-2.5
              rounded-full
              bg-[#004AAD]
              group-hover:scale-125
              group-hover:shadow-[0_0_12px_rgba(0,74,173,0.45)]
              transition-all
            "></span>

            <span>
              julianabv
              <span className="text-[#004AAD]">.social</span>
            </span>

          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  text-sm
                  font-medium
                  text-[#506782]
                  hover:text-[#004AAD]
                  transition-colors
                  duration-200
                  relative
                  group
                "
              >
                {link.name}

                <span className="
                  absolute
                  -bottom-1
                  left-0
                  w-0
                  h-[2px]
                  bg-[#004AAD]
                  transition-all
                  duration-200
                  group-hover:w-full
                "></span>

              </a>
            ))}

          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center space-x-4">

            <a
              href={BRAND_DATA.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                space-x-2
                px-5 py-2.5
                rounded-full
                text-xs
                font-semibold
                uppercase
                tracking-wider
                bg-[#004AAD]
                hover:bg-[#003A88]
                text-white
                transition-all duration-200
                shadow-lg shadow-[#004AAD]/20
                hover:shadow-[#004AAD]/35
                hover:-translate-y-0.5
              "
            >
              <span>HABLEMOS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">

            <a
              href={BRAND_DATA.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-2
                rounded-full
                bg-[#004AAD]
                text-white
                shadow-md
                shadow-[#004AAD]/20
              "
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                p-2
                rounded-lg
                text-[#0B1F3A]
                hover:text-[#004AAD]
                hover:bg-[#EEF5FF]
                transition-colors
                focus:outline-none
              "
              aria-label="Alternar menú"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

          </div>

        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="
          md:hidden
          bg-white/95
          backdrop-blur-xl
          border-b border-[#D8E4F2]
          px-6 py-6
          transition-all
          animate-in
          fade-in
          slide-in-from-top-4
          shadow-[0_15px_35px_rgba(11,31,58,0.08)]
        ">

          <nav className="flex flex-col space-y-4">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  text-base
                  font-medium
                  text-[#304A67]
                  hover:text-[#004AAD]
                  py-2
                  border-b border-[#E5EDF6]
                  flex items-center
                  justify-between
                  transition-colors
                "
              >

                <span>{link.name}</span>

                <ArrowUpRight className="w-4 h-4 text-[#8AA0BA]" />

              </a>
            ))}

            <div className="pt-4">

              <a
                href={BRAND_DATA.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="
                  w-full
                  flex items-center
                  justify-center
                  space-x-2
                  px-6 py-3.5
                  rounded-xl
                  bg-[#004AAD]
                  hover:bg-[#003A88]
                  text-white
                  font-semibold
                  text-sm
                  tracking-wider
                  uppercase
                  shadow-lg
                  shadow-[#004AAD]/20
                  transition-all
                "
              >
                <span>HABLEMOS POR WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

            </div>

          </nav>

        </div>
      )}

    </header>
  );
};