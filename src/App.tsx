import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsGallery } from './components/ProjectsGallery';
import { SystemsSection } from './components/SystemsSection';
import { ServicesSection } from './components/ServicesSection';
import { WhySection } from './components/WhySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white text-[#0B1F3A] selection:bg-[#004AAD] selection:text-white relative">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Flow: IMPACTO → EXPLORACIÓN → EVIDENCIA → CONFIANZA → CONTACTO */}
      <main>
        {/* 01. Impacto */}
        <Hero />

        {/* 02. Evidencia & Trabajo Real */}
        <ProjectsGallery />

        {/* 03. Diferencial Clave: App Propia + Automatizaciones */}
        <SystemsSection />

        {/* 04. Servicios & Capacidades */}
        <ServicesSection />

        {/* 05. Diferenciadores: Por qué julianabv.social (Quick Proof Point) */}
        <WhySection />

        {/* 06. Testimonios & Formulario con Moderación */}
        <TestimonialsSection />

        {/* 07. Cierre & Conversión */}
        <FinalCTA />
      </main>

      {/* 08. Footer */}
      <Footer />
    </div>
  );
}

export default App;