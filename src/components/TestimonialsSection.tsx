import React, { useState, useEffect } from 'react';
import {
  MessageSquareQuote,
  Star,
  CheckCircle2,
  Send,
  X,
  Shield,
  Lock,
  Settings
} from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  email: string;
  content: string;
  rating: number;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

const STORAGE_KEY = 'julianabv_testimonials_v1';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setTestimonials(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Error reading testimonials from localStorage', e);
    }
  }, []);

  const saveTestimonials = (updated: Testimonial[]) => {
    setTestimonials(updated);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Error saving testimonials', e);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Por favor ingresa tu nombre.');
      return;
    }

    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setErrorMessage('Por favor ingresa un correo electrónico válido.');
      return;
    }

    if (!content.trim() || content.trim().length < 10) {
      setErrorMessage('Por favor ingresa tu testimonio (mínimo 10 caracteres).');
      return;
    }

    setIsSubmitting(true);

    const newTestimonial: Testimonial = {
      id: 't-' + Date.now(),
      name: name.trim(),
      email: email.trim(),
      content: content.trim(),
      rating,
      date: new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      status: 'pending'
    };

    setTimeout(() => {
      const updated = [newTestimonial, ...testimonials];

      saveTestimonials(updated);
      setIsSubmitting(false);
      setIsSuccess(true);

      setName('');
      setEmail('');
      setContent('');
      setRating(5);
    }, 400);
  };

  const handleModerate = (
    id: string,
    newStatus: 'approved' | 'rejected'
  ) => {
    const updated = testimonials.map(t =>
      t.id === id ? { ...t, status: newStatus } : t
    );

    saveTestimonials(updated);
  };

  const handleDelete = (id: string) => {
    const updated = testimonials.filter(t => t.id !== id);
    saveTestimonials(updated);
  };

  const approvedTestimonials = testimonials.filter(
    t => t.status === 'approved'
  );

  const pendingCount = testimonials.filter(
    t => t.status === 'pending'
  ).length;

  return (
    <section
      id="testimonios"
      className="py-20 sm:py-28 bg-white border-t border-[#0B1F3A]/10 relative"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-[#0B1F3A]/10">

          <div>

            <div className="flex items-center space-x-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#004AAD] mb-2">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>EXPERIENCIA & FEEDBACK</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#0B1F3A] tracking-tight uppercase">
              TESTIMONIOS & CASOS.
            </h2>

          </div>

          <div className="mt-4 sm:mt-0 flex items-center space-x-3">

            <button
              onClick={() => {
                setIsFormOpen(true);
                setIsSuccess(false);
                setErrorMessage('');
              }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#004AAD] text-white hover:bg-[#003A88] transition-all shadow-md shadow-[#004AAD]/20"
            >
              <span>DEJAR TESTIMONIO</span>
            </button>

            {testimonials.length > 0 && (
              <button
                onClick={() => setIsAdminOpen(true)}
                className="p-2 rounded-full bg-[#F5F9FF] border border-[#0B1F3A]/10 text-[#52657D] hover:text-[#004AAD] hover:border-[#004AAD]/30 transition-all relative"
                title="Panel de moderación"
              >
                <Settings className="w-3.5 h-3.5" />

                {pendingCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#004AAD] text-[9px] font-bold text-white flex items-center justify-center">
                    {pendingCount}
                  </span>
                )}

              </button>
            )}

          </div>
        </div>

        {/* Public View */}
        {approvedTestimonials.length === 0 ? (

          <div className="p-8 sm:p-12 rounded-3xl border border-[#0B1F3A]/10 bg-gradient-to-r from-white via-[#F5F9FF] to-[#EAF3FF] flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">

            <div className="max-w-xl">

              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EAF3FF] text-[#004AAD] text-xs font-mono font-medium mb-4 border border-[#004AAD]/20">
                <Shield className="w-3.5 h-3.5" />
                <span>OPINIONES 100% REALES</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0B1F3A] mb-2 uppercase">
                ¿TRABAJAMOS JUNTOS?
              </h3>

              <p className="text-sm text-[#52657D] font-light leading-relaxed mb-4">
                Comparte tu experiencia. No publico reseñas simuladas ni calificaciones automáticas; cada testimonio es enviado por clientes y colaboradores reales.
              </p>

              <div className="flex items-center space-x-2 text-xs font-mono text-[#52657D]">
                <span>GESTIÓN</span>
                <span>•</span>
                <span>CONTENIDO</span>
                <span>•</span>
                <span>SISTEMAS</span>
              </div>

            </div>

            <div>

              <button
                onClick={() => {
                  setIsFormOpen(true);
                  setIsSuccess(false);
                  setErrorMessage('');
                }}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#004AAD] text-white hover:bg-[#003A88] transition-all shadow-xl shadow-[#004AAD]/20 hover:-translate-y-0.5"
              >
                <span>DEJAR TESTIMONIO</span>
              </button>

            </div>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {approvedTestimonials.map((t) => (

              <div
                key={t.id}
                className="p-6 rounded-2xl border border-[#0B1F3A]/10 bg-white flex flex-col justify-between hover:border-[#004AAD]/40 hover:shadow-lg hover:shadow-[#0B1F3A]/5 transition-all"
              >

                <div>

                  {t.rating && (
                    <div className="flex space-x-1 mb-4 text-amber-400">

                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}

                    </div>
                  )}

                  <p className="text-sm text-[#52657D] italic mb-6 leading-relaxed font-light">
                    "{t.content}"
                  </p>

                </div>

                <div className="pt-4 border-t border-[#0B1F3A]/8 flex items-center justify-between">

                  <div>

                    <h4 className="text-sm font-bold text-[#0B1F3A] uppercase font-display tracking-tight">
                      {t.name}
                    </h4>

                    <span className="text-[10px] font-mono text-[#7A8CA3]">
                      Cliente verificado • {t.date}
                    </span>

                  </div>

                  <CheckCircle2 className="w-4 h-4 text-[#004AAD]" />

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

      {/* Testimonial Submission Form Modal */}
      {isFormOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F3A]/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setIsFormOpen(false)}
        >

          <div
            className="relative w-full max-w-lg bg-white p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex items-center justify-between pb-4 border-b border-[#0B1F3A]/10 mb-6">

              <div className="flex items-center space-x-2">
                <MessageSquareQuote className="w-5 h-5 text-[#004AAD]" />

                <h3 className="font-display font-bold text-lg text-[#0B1F3A] uppercase">
                  Compartir mi experiencia
                </h3>
              </div>

              <button
                onClick={() => setIsFormOpen(false)}
                className="p-1 rounded-lg text-[#52657D] hover:text-[#0B1F3A] hover:bg-[#F5F9FF]"
              >
                <X className="w-5 h-5" />
              </button>

            </div>

            {isSuccess ? (

              <div className="py-8 text-center space-y-4">

                <div className="w-12 h-12 rounded-full bg-[#EAF3FF] text-[#004AAD] flex items-center justify-center mx-auto border border-[#004AAD]/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <h4 className="font-display font-bold text-xl text-[#0B1F3A]">
                  Gracias por compartir tu experiencia.
                </h4>

                <p className="text-xs text-[#52657D] max-w-sm mx-auto leading-relaxed">
                  Tu testimonio ha sido registrado en estado{' '}
                  <span className="font-mono text-[#004AAD]">
                    pendiente
                  </span>{' '}
                  y se publicará tras su revisión.
                </p>

                <button
                  onClick={() => setIsFormOpen(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#0B1F3A] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#16345C]"
                >
                  Cerrar
                </button>

              </div>

            ) : (

              <form onSubmit={handleSubmit} className="space-y-4">

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium">
                    {errorMessage}
                  </div>
                )}

                <div>

                  <label className="block text-xs font-mono uppercase text-[#52657D] mb-1.5">
                    Nombre completo <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F9FF] border border-[#0B1F3A]/10 text-[#0B1F3A] placeholder:text-[#7A8CA3] text-sm focus:outline-none focus:border-[#004AAD] transition-colors"
                  />

                </div>

                <div>

                  <label className="block text-xs font-mono uppercase text-[#52657D] mb-1.5 flex items-center justify-between">

                    <span>
                      Correo electrónico{' '}
                      <span className="text-red-500">*</span>
                    </span>

                    <span className="text-[10px] text-[#7A8CA3] flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      Privado, no será público
                    </span>

                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F9FF] border border-[#0B1F3A]/10 text-[#0B1F3A] placeholder:text-[#7A8CA3] text-sm focus:outline-none focus:border-[#004AAD] transition-colors"
                  />

                </div>

                <div>

                  <label className="block text-xs font-mono uppercase text-[#52657D] mb-1.5">
                    Valoración
                  </label>

                  <div className="flex items-center space-x-2">

                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 text-[#C7D8EC] hover:text-amber-400 focus:outline-none transition-colors"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            star <= rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-[#C7D8EC]'
                          }`}
                        />
                      </button>
                    ))}

                    <span className="text-xs font-mono text-[#52657D] ml-2">
                      {rating} de 5 estrellas
                    </span>

                  </div>

                </div>

                <div>

                  <label className="block text-xs font-mono uppercase text-[#52657D] mb-1.5">
                    Testimonio <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={4}
                    placeholder="Describe tu experiencia colaborando con julianabv.social..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F9FF] border border-[#0B1F3A]/10 text-[#0B1F3A] placeholder:text-[#7A8CA3] text-sm focus:outline-none focus:border-[#004AAD] transition-colors"
                  />

                </div>

                <div className="pt-2">

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-[#004AAD] hover:bg-[#003A88] text-white font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-50 shadow-lg shadow-[#004AAD]/20"
                  >
                    <Send className="w-4 h-4" />

                    <span>
                      {isSubmitting
                        ? 'ENVIANDO...'
                        : 'ENVIAR TESTIMONIO'}
                    </span>

                  </button>

                </div>

              </form>

            )}

          </div>

        </div>
      )}

      {/* Moderation Admin Modal */}
      {isAdminOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F3A]/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setIsAdminOpen(false)}
        >

          <div
            className="relative w-full max-w-2xl bg-white p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex items-center justify-between pb-4 border-b border-[#0B1F3A]/10 mb-4">

              <div className="flex items-center space-x-2">

                <Settings className="w-5 h-5 text-[#004AAD]" />

                <h3 className="font-display font-bold text-lg text-[#0B1F3A] uppercase">
                  Moderación de Testimonios ({testimonials.length})
                </h3>

              </div>

              <button
                onClick={() => setIsAdminOpen(false)}
                className="p-1 rounded-lg text-[#52657D] hover:text-[#0B1F3A] hover:bg-[#F5F9FF]"
              >
                <X className="w-5 h-5" />
              </button>

            </div>

            <div className="overflow-y-auto space-y-3 flex-1 pr-1">

              {testimonials.length === 0 ? (

                <p className="text-xs text-[#52657D] py-6 text-center">
                  No hay testimonios recibidos.
                </p>

              ) : (

                testimonials.map((t) => (

                  <div
                    key={t.id}
                    className="p-4 rounded-xl bg-[#F5F9FF] border border-[#0B1F3A]/10 flex flex-col gap-2"
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <span className="text-sm font-bold text-[#0B1F3A] mr-2">
                          {t.name}
                        </span>

                        <span className="text-xs font-mono text-[#52657D]">
                          {t.email}
                        </span>

                      </div>

                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold ${
                          t.status === 'approved'
                            ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                            : t.status === 'rejected'
                            ? 'bg-red-50 text-red-600 border border-red-200'
                            : 'bg-amber-50 text-amber-600 border border-amber-200'
                        }`}
                      >
                        {t.status}
                      </span>

                    </div>

                    <p className="text-xs text-[#52657D] italic">
                      "{t.content}"
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-[#0B1F3A]/8 text-xs">

                      <span className="text-[10px] font-mono text-[#52657D]">
                        {t.date} • {t.rating}★
                      </span>

                      <div className="flex items-center space-x-2">

                        {t.status !== 'approved' && (
                          <button
                            onClick={() =>
                              handleModerate(t.id, 'approved')
                            }
                            className="px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold"
                          >
                            Aprobar
                          </button>
                        )}

                        {t.status !== 'rejected' && (
                          <button
                            onClick={() =>
                              handleModerate(t.id, 'rejected')
                            }
                            className="px-2.5 py-1 rounded bg-[#0B1F3A] hover:bg-[#16345C] text-white text-[11px]"
                          >
                            Rechazar
                          </button>
                        )}

                        <button
                          onClick={() => handleDelete(t.id)}
                          className="px-2 py-1 rounded text-red-500 hover:text-red-600 text-[11px]"
                        >
                          Eliminar
                        </button>

                      </div>

                    </div>

                  </div>

                ))

              )}

            </div>

          </div>

        </div>
      )}

    </section>
  );
};