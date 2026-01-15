import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { useLanguage } from '../contexts/LanguageContext';
import { Badge } from './ui/badge';
import { CheckCircle2 } from 'lucide-react';

interface ProjectDetailDialogProps {
  projectId: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  tags: string[];
}

// Project features stored separately since they're arrays
const projectFeatures: Record<number, string[]> = {
  1: [
    'Multi-tenant architecture with isolated databases',
    'Custom domain support for each vendor',
    'Zero-downtime deployment pipelines',
    'CI/CD automation for seamless releases',
    'High-availability APIs for web and mobile',
    'Scalable infrastructure handling high traffic'
  ],
  2: [
    'Centralized wallet management system',
    'Multi-currency support',
    'Real-time balance reconciliation',
    'Comprehensive audit logging',
    'Concurrency-safe transaction processing',
    'Distributed service integration'
  ],
  3: [
    'Dynamic pricing based on customer needs',
    'Flexible transportation for various items',
    'Intuitive driver-customer interface',
    'Real-time tracking and updates',
    'Seamless delivery experience',
    'Mobile-first design'
  ],
  4: [
    'Smart service provider distribution',
    'Availability-based assignment',
    'Distance optimization algorithms',
    'Cost-effective service delivery',
    'Studio content management',
    'Electronic service delivery'
  ],
  5: [
    'Multi-merchant unified platform',
    'Smart product selection algorithms',
    'Price and preference-based recommendations',
    'Nearby store detection',
    'Rating and popularity integration',
    'Easy and affordable delivery services'
  ],
  6: [
    'Club subscription management',
    'Sponsorship services',
    'Club membership system',
    'Sports tracking and analytics',
    'Scheduling services',
    'Follower engagement features'
  ],
  7: [
    'Vision affairs management for children',
    'Employee management system',
    'Parent and family management',
    'Scheduled issue tracking',
    'Vision appointment scheduling',
    'Dual platform (web and mobile app)'
  ],
  8: [
    'Administrative task management',
    'Accounting system integration',
    'Employee-controlled interface',
    'Order and service management',
    'Financial tracking',
    'Multi-venue support'
  ],
  9: [
    'Custom habit creation',
    'System-nominated habits',
    'Progress tracking and monitoring',
    'Achievement notifications',
    'Task reminders',
    'Progress analytics'
  ],
  10: [
    'Interactive virtual games',
    'Language and literature teaching',
    'Progress monitoring system',
    'Guardian notification system',
    'Multi-child management',
    'Engaging educational content'
  ],
};

export const ProjectDetailDialog: React.FC<ProjectDetailDialogProps> = ({
  projectId,
  open,
  onOpenChange,
  title,
  description,
  tags,
}) => {
  const { t } = useLanguage();

  // Get detailed information for each project
  const getProjectDetails = (id: number) => {
    const overviewKey = `projects.p${id}.detail.overview`;
    const overview = t(overviewKey) || description;
    const features = projectFeatures[id] || [];
    
    return { overview, features };
  };

  const projectDetails = getProjectDetails(projectId);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] bg-clip-text text-transparent">
            {title}
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Overview Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-full"></span>
              {t('projects.detail.overview')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {projectDetails.overview}
            </p>
          </div>

          {/* Key Features Section */}
          {projectDetails.features.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-full"></span>
                {t('projects.detail.features')}
              </h3>
              <ul className="space-y-2">
                {projectDetails.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--gradient-from)] mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-full"></span>
              {t('projects.detail.tech')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[var(--gradient-from)] hover:via-[var(--gradient-via)] hover:to-[var(--gradient-to)] hover:text-white transition-all"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
