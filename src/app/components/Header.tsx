import React from 'react';
import { Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

export const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage, t, isRTL } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] bg-clip-text text-transparent">
              {isRTL ? 'أحمد' : 'Ahmad'}
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('about')}
            >
              {t('nav.about')}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('skills')}
            >
              {t('nav.skills')}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('projects')}
            >
              {t('nav.projects')}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              {t('nav.contact')}
            </Button>
          </nav>

          {/* Theme & Language Toggles */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Toggle language</span>
            </Button>

            <span className="text-sm text-muted-foreground hidden sm:inline">
              {language === 'ar' ? 'عربي' : 'EN'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
