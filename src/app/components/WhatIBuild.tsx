import React from 'react';
import { Cloud, ShoppingCart, CreditCard, GraduationCap, Bot, Boxes } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const WhatIBuild: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Cloud,
      title: t('build.saas'),
      description: t('build.saas.desc'),
    },
    {
      icon: ShoppingCart,
      title: t('build.marketplace'),
      description: t('build.marketplace.desc'),
    },
    {
      icon: CreditCard,
      title: t('build.payment'),
      description: t('build.payment.desc'),
    },
    {
      icon: GraduationCap,
      title: t('build.lms'),
      description: t('build.lms.desc'),
    },
    {
      icon: Bot,
      title: t('build.bots'),
      description: t('build.bots.desc'),
    },
    {
      icon: Boxes,
      title: t('build.api'),
      description: t('build.api.desc'),
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] bg-clip-text text-transparent">
            {t('build.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="backdrop-blur-lg bg-card/50 border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all hover:scale-105 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
