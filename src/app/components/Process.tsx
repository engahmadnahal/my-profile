import React from 'react';
import { Lightbulb, FileText, Boxes, Code, TestTube, Rocket, Headphones } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Process: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const steps = [
    { icon: Lightbulb, label: t('process.step1') },
    { icon: FileText, label: t('process.step2') },
    { icon: Boxes, label: t('process.step3') },
    { icon: Code, label: t('process.step4') },
    { icon: TestTube, label: t('process.step5') },
    { icon: Rocket, label: t('process.step6') },
    { icon: Headphones, label: t('process.step7') },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] bg-clip-text text-transparent">
            {t('process.title')}
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)]" style={{ transform: 'translateY(-50%)' }} />
            
            <div className="relative grid grid-cols-7 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] flex items-center justify-center mb-4 shadow-lg relative z-10">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm font-medium text-center">{step.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className={`absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] ${isRTL ? 'right-8' : 'left-8'}`} />
            
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] flex items-center justify-center shadow-lg relative z-10 flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-base font-medium">{step.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
