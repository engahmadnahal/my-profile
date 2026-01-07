import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.p1.title'),
      description: t('projects.p1.desc'),
      tags: ['Laravel', 'MySQL', 'Stripe', 'Multi-tenancy'],
    },
    {
      title: t('projects.p2.title'),
      description: t('projects.p2.desc'),
      tags: ['Laravel', 'Next.js', 'PostgreSQL', 'Redis'],
    },
    {
      title: t('projects.p3.title'),
      description: t('projects.p3.desc'),
      tags: ['Laravel', 'Payment APIs', 'Security', 'WebSockets'],
    },
    {
      title: t('projects.p4.title'),
      description: t('projects.p4.desc'),
      tags: ['Laravel', 'Next.js', 'Video Streaming', 'Certificates'],
    },
    {
      title: t('projects.p5.title'),
      description: t('projects.p5.desc'),
      tags: ['Laravel', 'Queues', 'Cron', 'API Integration'],
    },
    {
      title: t('projects.p6.title'),
      description: t('projects.p6.desc'),
      tags: ['Laravel', 'REST API', 'OAuth', 'Documentation'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] bg-clip-text text-transparent">
            {t('projects.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-card/50 border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all group"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-3 py-1 rounded-lg bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="w-full group-hover:bg-gradient-to-r group-hover:from-[var(--gradient-from)] group-hover:via-[var(--gradient-via)] group-hover:to-[var(--gradient-to)] group-hover:text-white transition-all"
              >
                {t('projects.view')}
                <ExternalLink className="w-4 h-4 ltr:ml-2 rtl:mr-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
