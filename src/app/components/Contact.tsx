import React from 'react';
import { Mail, MessageCircle, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: MessageCircle,
      label: t('contact.whatsapp'),
      value: '+972592146780',
      href: 'https://wa.me/972592146780',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'ahmadghssannahal@gmail.com',
      href: 'mailto:ahmadghssannahal@gmail.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ahmadnahal/',
      color: 'from-[#0077B5] to-[#00A0DC]',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-lg bg-card/50 border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all hover:scale-105 group text-center"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{method.label}</h3>
                <p className="text-sm text-muted-foreground">{method.value}</p>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] text-white hover:opacity-90 transition-opacity rounded-xl"
            asChild
          >
            <a href="mailto:ahmadghssannahal@gmail.com">
              <Mail className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
              {t('hero.cta.contact')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
