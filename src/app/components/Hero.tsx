import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl w-full">
        <div className="relative">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-from)]/10 via-[var(--gradient-via)]/10 to-[var(--gradient-to)]/10 rounded-3xl blur-3xl" />
          
          {/* Glassmorphism Card */}
          <div className="relative backdrop-blur-xl bg-card/30 border border-border/50 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="text-center max-w-4xl mx-auto">
              {/* Name */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] bg-clip-text text-transparent">
                {t('hero.name')}
              </h1>

              {/* Title */}
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6">
                {t('hero.title')}
              </p>

              {/* Tagline */}
              <p className="text-lg sm:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
                {t('hero.tagline')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] text-white hover:opacity-90 transition-opacity rounded-xl"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                  {t('hero.cta.contact')}
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-2"
                  onClick={() => scrollToSection('projects')}
                >
                  {t('hero.cta.projects')}
                  <ArrowRight className="w-5 h-5 ltr:ml-2 rtl:mr-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
