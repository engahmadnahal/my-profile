import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  ar: {
    // Navigation
    'nav.about': 'عن أحمد',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'تواصل',
    
    // Hero
    'hero.name': 'أحمد أحمد',
    'hero.title': 'مهندس Backend • بناء SaaS • خبير Laravel',
    'hero.tagline': 'بناء منصات قابلة للتوسع، أنظمة الدفع، ومحركات الأتمتة.',
    'hero.cta.contact': 'تواصل معي',
    'hero.cta.projects': 'عرض المشاريع',
    
    // About
    'about.title': 'عن أحمد',
    'about.description': 'مع أكثر من 4 سنوات من الخبرة في تطوير منصات SaaS والأنظمة المعقدة، أتخصص في بناء حلول قابلة للتوسع تساعد الشركات الناشئة والشركات على النمو. أعمل من الشرق الأوسط مع عملاء من جميع أنحاء العالم، مع التركيز على بناء أنظمة نظيفة وآمنة وسهلة الصيانة.',
    'about.stat1.value': '٤+',
    'about.stat1.label': 'سنوات الخبرة',
    'about.stat2.value': '٥٠+',
    'about.stat2.label': 'مشروع مكتمل',
    'about.stat3.value': '٢٠+',
    'about.stat3.label': 'منصة مبنية',
    'about.stat4.value': '٣٠+',
    'about.stat4.label': 'عميل',
    
    // What I Build
    'build.title': 'ماذا أبني',
    'build.saas': 'منصات SaaS',
    'build.saas.desc': 'أنظمة متعددة المستأجرين قابلة للتوسع مع الفوترة والاشتراكات',
    'build.marketplace': 'أسواق متعددة البائعين',
    'build.marketplace.desc': 'منصات تجارة إلكترونية كاملة مع إدارة البائعين',
    'build.payment': 'بوابات الدفع والمحافظ',
    'build.payment.desc': 'أنظمة دفع آمنة وتكاملات',
    'build.lms': 'منصات LMS والدورات',
    'build.lms.desc': 'أنظمة إدارة التعلم وإنشاء الدورات',
    'build.bots': 'روبوتات الأتمتة والتكاملات',
    'build.bots.desc': 'سير عمل مخصص وتكاملات API',
    'build.api': 'APIs والخدمات الصغيرة',
    'build.api.desc': 'RESTful APIs وبنية الخدمات الصغيرة',
    
    // Skills
    'skills.title': 'المهارات الأساسية',
    
    // Projects
    'projects.title': 'مشاريع مختارة',
    'projects.view': 'عرض التفاصيل',
    'projects.p1.title': 'نظام إدارة SaaS',
    'projects.p1.desc': 'نظام SaaS متعدد المستأجرين كامل مع الفوترة والتحليلات والتكامل مع API',
    'projects.p2.title': 'سوق متعدد البائعين',
    'projects.p2.desc': 'منصة تجارة إلكترونية مع لوحات تحكم البائعين ومعالجة الدفع وإدارة المخزون',
    'projects.p3.title': 'منصة الدفع والمحفظة',
    'projects.p3.desc': 'نظام محفظة رقمية آمن مع تحويلات متعددة العملات وبوابة دفع',
    'projects.p4.title': 'منصة LMS',
    'projects.p4.desc': 'نظام إدارة التعلم الكامل مع إنشاء الدورات والتقدم والشهادات',
    'projects.p5.title': 'محرك الأتمتة',
    'projects.p5.desc': 'أداة أتمتة مخصصة مع سير عمل وتكاملات وجدولة',
    'projects.p6.title': 'منصة API',
    'projects.p6.desc': 'بنية API قابلة للتوسع مع التوثيق والتحكم في الإصدارات ومراقبة معدل الاستخدام',
    
    // Process
    'process.title': 'عملية العمل',
    'process.step1': 'الفكرة',
    'process.step2': 'التخطيط',
    'process.step3': 'البنية',
    'process.step4': 'التطوير',
    'process.step5': 'الاختبار',
    'process.step6': 'الإطلاق',
    'process.step7': 'الدعم',
    
    // Why Work With Me
    'why.title': 'لماذا العمل معي',
    'why.card1.title': 'بنية نظيفة وقابلة للتوسع',
    'why.card1.desc': 'كود نظيف ومنظم يسهل صيانته وتوسيعه',
    'why.card2.title': 'دعم طويل الأمد',
    'why.card2.desc': 'لست هنا فقط للبناء - أنا هنا للبقاء والدعم',
    'why.card3.title': 'تسليم سريع',
    'why.card3.desc': 'تطوير فعال مع الحفاظ على الجودة والأفضل الممارسات',
    'why.card4.title': 'كود آمن وقابل للصيانة',
    'why.card4.desc': 'تركيز قوي على الأمان وأفضل الممارسات',
    'why.card5.title': 'تواصل ودي مع المؤسسين',
    'why.card5.desc': 'أفهم احتياجات الشركات الناشئة وأتحدث لغتك',
    
    // Testimonials
    'testimonials.title': 'شهادات العملاء',
    'testimonials.t1.text': 'أحمد بنى لنا نظام SaaS كامل من الصفر. كوده نظيف، والبنية قوية، والأهم من ذلك - يفهم احتياجات الأعمال.',
    'testimonials.t1.author': 'محمد الصالح',
    'testimonials.t1.role': 'مؤسس TechStartup',
    'testimonials.t2.text': 'عمل رائع في بناء منصة الدفع الخاصة بنا. تسليم سريع، تواصل ممتاز، ودعم مستمر.',
    'testimonials.t2.author': 'سارة عبدالله',
    'testimonials.t2.role': 'CTO في PayFlow',
    'testimonials.t3.text': 'مهندس Backend موهوب يهتم حقًا بجودة الكود والنتيجة النهائية. موصى به بشدة!',
    'testimonials.t3.author': 'خالد حسن',
    'testimonials.t3.role': 'مدير المنتج في LearnHub',
    
    // Contact
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'لنبني منصتك.',
    'contact.whatsapp': 'واتساب',
    'contact.email': 'بريد إلكتروني',
    'contact.linkedin': 'لينكد إن',
    
    // Footer
    'footer.rights': '© 2026 أحمد أحمد. جميع الحقوق محفوظة.',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.name': 'Ahmad Ahmad',
    'hero.title': 'Backend Architect • SaaS Builder • Laravel Expert',
    'hero.tagline': 'Building scalable platforms, payment systems, and automation engines.',
    'hero.cta.contact': 'Contact Me',
    'hero.cta.projects': 'View Projects',
    
    // About
    'about.title': 'About Me',
    'about.description': 'With 4+ years of experience building SaaS platforms and complex systems, I specialize in creating scalable solutions that help startups and businesses grow. Based in the Middle East and working with clients worldwide, I focus on building clean, secure, and maintainable systems.',
    'about.stat1.value': '4+',
    'about.stat1.label': 'Years Experience',
    'about.stat2.value': '50+',
    'about.stat2.label': 'Completed Projects',
    'about.stat3.value': '20+',
    'about.stat3.label': 'Platforms Built',
    'about.stat4.value': '30+',
    'about.stat4.label': 'Clients',
    
    // What I Build
    'build.title': 'What I Build',
    'build.saas': 'SaaS Platforms',
    'build.saas.desc': 'Scalable multi-tenant systems with billing & subscriptions',
    'build.marketplace': 'Multi-Vendor Marketplaces',
    'build.marketplace.desc': 'Full e-commerce platforms with vendor management',
    'build.payment': 'Payment Gateways & Wallets',
    'build.payment.desc': 'Secure payment systems and integrations',
    'build.lms': 'LMS & Course Platforms',
    'build.lms.desc': 'Learning management systems and course creation',
    'build.bots': 'Automation Bots & Integrations',
    'build.bots.desc': 'Custom workflows and API integrations',
    'build.api': 'APIs & Microservices',
    'build.api.desc': 'RESTful APIs and microservices architecture',
    
    // Skills
    'skills.title': 'Core Skills',
    
    // Projects
    'projects.title': 'Selected Projects',
    'projects.view': 'View Details',
    'projects.p1.title': 'SaaS Management System',
    'projects.p1.desc': 'Full-featured multi-tenant SaaS system with billing, analytics, and API integration',
    'projects.p2.title': 'Multi-Vendor Marketplace',
    'projects.p2.desc': 'E-commerce platform with vendor dashboards, payment processing, and inventory management',
    'projects.p3.title': 'Payment & Wallet Platform',
    'projects.p3.desc': 'Secure digital wallet system with multi-currency transfers and payment gateway',
    'projects.p4.title': 'LMS Platform',
    'projects.p4.desc': 'Complete learning management system with course creation, progress tracking, and certificates',
    'projects.p5.title': 'Automation Engine',
    'projects.p5.desc': 'Custom automation tool with workflows, integrations, and scheduling',
    'projects.p6.title': 'API Platform',
    'projects.p6.desc': 'Scalable API architecture with documentation, versioning, and rate limiting',
    
    // Process
    'process.title': 'My Process',
    'process.step1': 'Idea',
    'process.step2': 'Planning',
    'process.step3': 'Architecture',
    'process.step4': 'Development',
    'process.step5': 'Testing',
    'process.step6': 'Launch',
    'process.step7': 'Support',
    
    // Why Work With Me
    'why.title': 'Why Work With Me',
    'why.card1.title': 'Clean Scalable Architecture',
    'why.card1.desc': 'Well-organized code that\'s easy to maintain and extend',
    'why.card2.title': 'Long-term Support',
    'why.card2.desc': 'I\'m not just here to build - I\'m here to stay and support',
    'why.card3.title': 'Fast Delivery',
    'why.card3.desc': 'Efficient development while maintaining quality and best practices',
    'why.card4.title': 'Secure & Maintainable Code',
    'why.card4.desc': 'Strong focus on security and best practices',
    'why.card5.title': 'Founder-friendly Communication',
    'why.card5.desc': 'I understand startup needs and speak your language',
    
    // Testimonials
    'testimonials.title': 'Client Testimonials',
    'testimonials.t1.text': 'Ahmad built our entire SaaS system from scratch. His code is clean, architecture is solid, and most importantly - he understands business needs.',
    'testimonials.t1.author': 'Mohammed Al-Saleh',
    'testimonials.t1.role': 'Founder at TechStartup',
    'testimonials.t2.text': 'Outstanding work on our payment platform. Quick delivery, excellent communication, and ongoing support.',
    'testimonials.t2.author': 'Sarah Abdullah',
    'testimonials.t2.role': 'CTO at PayFlow',
    'testimonials.t3.text': 'A talented backend engineer who truly cares about code quality and the end result. Highly recommended!',
    'testimonials.t3.author': 'Khaled Hassan',
    'testimonials.t3.role': 'Product Manager at LearnHub',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s build your platform.',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    
    // Footer
    'footer.rights': '© 2026 Ahmad Ahmad. All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
