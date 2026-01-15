import React from 'react';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/engahmadnahal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ahmadnahal/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ahmadghssannahal@gmail.com', label: 'Email' },
    { icon: MessageCircle, href: 'https://wa.me/972592146780', label: 'WhatsApp' },
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-gradient-to-r hover:from-[var(--gradient-from)] hover:via-[var(--gradient-via)] hover:to-[var(--gradient-to)] flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};
