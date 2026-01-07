import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t('testimonials.t1.text'),
      author: t('testimonials.t1.author'),
      role: t('testimonials.t1.role'),
    },
    {
      text: t('testimonials.t2.text'),
      author: t('testimonials.t2.author'),
      role: t('testimonials.t2.role'),
    },
    {
      text: t('testimonials.t3.text'),
      author: t('testimonials.t3.author'),
      role: t('testimonials.t3.role'),
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] bg-clip-text text-transparent">
            {t('testimonials.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-card/50 border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all relative"
            >
              <Quote className="w-10 h-10 text-[var(--gradient-from)] opacity-20 absolute top-4 ltr:right-4 rtl:left-4" />
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
