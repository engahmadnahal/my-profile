import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Badge } from './ui/badge';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    'Laravel',
    'Next.js',
    'Flutter',
    'MySQL',
    'Redis',
    'REST APIs',
    'System Design',
    'Payment Integrations',
    'Multi-Tenancy',
    'Cloud Basics',
    'DevOps Basics',
    'PostgreSQL',
    'Docker',
    'Git',
    'Stripe',
    'WebSockets',
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] bg-clip-text text-transparent">
            {t('skills.title')}
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-base px-6 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[var(--gradient-from)] hover:via-[var(--gradient-via)] hover:to-[var(--gradient-to)] hover:text-white transition-all cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
