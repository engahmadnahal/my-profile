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
    'hero.name': 'Ahmad Al Nahal',
    'hero.title': 'Senior Backend Engineer • SaaS Systems Architect • Laravel Expert',
    'hero.tagline': 'Building scalable multi-tenant SaaS platforms, financial transaction engines, and high-traffic systems.',
    'hero.cta.contact': 'Contact Me',
    'hero.cta.projects': 'View Projects',
    
    // About
    'about.title': 'About Me',
    'about.description': 'Senior Backend Engineer & SaaS Systems Architect with 4+ years of experience building and scaling multi-tenant SaaS platforms and transactional financial systems. Led backend architecture and a development team for a large-scale multi-vendor e-commerce platform similar to Shopify/Salla, handling high-traffic workloads with zero-downtime deployment strategies. Designed and implemented custom digital wallet and financial transaction engines, ensuring data consistency, concurrency safety, and auditability across distributed services.',
    'about.stat1.value': '4+',
    'about.stat1.label': 'Years Experience',
    'about.stat2.value': '8+',
    'about.stat2.label': 'Major Projects',
    'about.stat3.value': '100+',
    'about.stat3.label': 'Vendor Stores',
    'about.stat4.value': '3',
    'about.stat4.label': 'Companies',
    
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
    'projects.p1.title': 'Konin Cloud - Multi-Tenant E-commerce SaaS',
    'projects.p1.desc': 'Large-scale multi-tenant e-commerce SaaS platform similar to Shopify/Salla, supporting hundreds of vendor stores with isolated databases and custom domains. Implemented zero-downtime deployment pipelines and CI/CD automation.',
    'projects.p2.title': 'Digital Wallet & Financial Transaction Engine',
    'projects.p2.desc': 'Centralized digital wallet and financial transaction engine handling deposits, transfers, balance reconciliation, and audit logging across distributed services with data integrity and concurrency safety.',
    'projects.p3.title': 'Wasla Platform',
    'projects.p3.desc': 'Groundbreaking mobile application for flexible transportation solutions with dynamic pricing based on customer needs. Features an intuitive interface connecting drivers with customers for seamless delivery experience.',
    'projects.p4.title': 'Photome Platform',
    'projects.p4.desc': 'Photography company platform with smart distribution system for service providers based on availability, closest delivery distance, cost optimization, and multiple factors for efficient service delivery.',
    'projects.p5.title': 'Qaren Multi-Merchant E-commerce',
    'projects.p5.desc': 'Multi-merchant e-commerce platform with smart product selection based on prices, customer preferences, nearby stores, ratings, and multiple factors. Features easy and affordable delivery services.',
    'projects.p6.title': 'Liga Sports Platform',
    'projects.p6.desc': 'Sports platform providing subscription and sponsorship services for sports clubs, club membership, sports tracking, and scheduling services for followers and customers.',
    'projects.p7.title': 'Shamal Platform',
    'projects.p7.desc': 'Family social platform providing management services for Tawafuq Association in Saudi Arabia, specializing in managing vision affairs for children, employees, parents, scheduled issues, vision appointment scheduling, and many services. Contains an application and platform for employees.',
    'projects.p8.title': 'Al-Bayan Application',
    'projects.p8.desc': 'Administrative and accounting application for cafes, restaurants, and hotels, managing many tasks. Worked on the application part controlled by the presenting employee.',
    'projects.p9.title': 'Habits Platform',
    'projects.p9.desc': 'Platform for managing user habits, where users add habits they want to adhere to, and habits nominated by the system. Progress is monitored, users are notified of achievements, and reminded of scheduled tasks.',
    'projects.p10.title': 'Loghaty Platform',
    'projects.p10.desc': 'Platform for teaching children through interactive, flexible and non-boring education. Contains virtual games that children interact with, includes teaching their own language and literature, monitoring progress and notifying the student\'s guardian of the child\'s progress and all their children.',
    
    // Project Details
    'projects.detail.title': 'Project Details',
    'projects.detail.overview': 'Overview',
    'projects.detail.features': 'Key Features',
    'projects.detail.tech': 'Technologies Used',
    'projects.detail.close': 'Close',
    
    // Project 1 Details
    'projects.p1.detail.overview': 'Led backend architecture and core system design for a large-scale multi-tenant e-commerce SaaS platform similar to Shopify/Salla. The platform supports hundreds of vendor stores with isolated databases and custom domains, ensuring complete data separation and brand independence for each vendor.',
    
    // Project 2 Details
    'projects.p2.detail.overview': 'Designed and implemented a centralized digital wallet and financial transaction engine that handles deposits, transfers, balance reconciliation, and comprehensive audit logging across distributed services. The system ensures data consistency, concurrency safety, and full auditability for all financial operations.',
    
    // Project 3 Details
    'projects.p3.detail.overview': 'Developed a groundbreaking mobile application that introduces a unique concept in digitizing daily logistics. Unlike traditional delivery services, Wasla offers flexible transportation solutions for a wide range of items and load types, each priced dynamically based on the customer\'s specific needs.',
    
    // Project 4 Details
    'projects.p4.detail.overview': 'Built a comprehensive platform for a photography company that manages studio content, interconnects services, and provides photography and printing services electronically. The system features a smart distribution mechanism for service providers that optimizes assignments based on multiple factors.',
    
    // Project 5 Details
    'projects.p5.detail.overview': 'Created a multi-merchant e-commerce platform where all merchants operate within a unified platform. The system facilitates the buying and shopping process with smart product selection algorithms that consider multiple factors including prices, customer preferences, nearby stores, ratings, and popularity.',
    
    // Project 6 Details
    'projects.p6.detail.overview': 'Developed a comprehensive sports platform that provides subscription and sponsorship services for sports clubs, club membership management, and various options for users and customers. The platform includes sports tracking and scheduling services for followers.',
    
    // Project 7 Details
    'projects.p7.detail.overview': 'Built a family social platform providing comprehensive management services for Tawafuq Association operating in Saudi Arabia. The platform specializes in managing vision affairs for children, employees, parents of children\'s families, scheduled issues, and vision appointment scheduling.',
    
    // Project 8 Details
    'projects.p8.detail.overview': 'Developed an administrative and accounting application specifically designed for cafes, restaurants, and hotels. The system manages numerous operational tasks, with a focus on the application component controlled by presenting employees.',
    
    // Project 9 Details
    'projects.p9.detail.overview': 'Created a habit management platform where users can add habits they want to adhere to, as well as habits nominated by the system. The platform monitors progress, notifies users of achievements, and sends reminders for scheduled tasks.',
    
    // Project 10 Details
    'projects.p10.detail.overview': 'Built an educational platform for teaching children through interactive, flexible, and engaging methods. The platform contains virtual games that children interact with, teaching their own language and literature, with progress monitoring and guardian notifications.',
    
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
    'footer.rights': '© 2026 Ahmad Al Nahal. All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

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
