import React from 'react';
import { Blocks, Clock, Zap, Shield, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const WhyWorkWithMe: React.FC = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Blocks,
      title: t('why.card1.title'),
      description: t('why.card1.desc'),
    },
    {
      icon: Clock,
      title: t('why.card2.title'),
      description: t('why.card2.desc'),
    },
    {
      icon: Zap,
      title: t('why.card3.title'),
      description: t('why.card3.desc'),
    },
    {
      icon: Shield,
      title: t('why.card4.title'),
      description: t('why.card4.desc'),
    },
    {
      icon: Users,
      title: t('why.card5.title'),
      description: t('why.card5.desc'),
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] bg-clip-text text-transparent">
            {t('why.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="backdrop-blur-lg bg-card/50 border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all hover:scale-105 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
