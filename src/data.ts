import { 
  Monitor, Globe, Smartphone, Receipt, 
  Package, Palette, Cloud, Wrench,
  CheckCircle, Clock, Headset, Globe2,
  Code2, Database, LayoutTemplate, Server, 
  Smartphone as PhoneIcon, PenTool, Layout
} from 'lucide-react';
import React from 'react';

export const SERVICES = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'Tailored software solutions from small-scale utilities to enterprise-grade systems.',
    icon: Monitor,
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Static, dynamic, and powerful e-commerce platforms designed to convert.',
    icon: Globe,
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences for iOS and Android.',
    icon: Smartphone,
  },
  {
    id: 'billing-gst',
    title: 'Billing & GST Software',
    description: 'Maharashtra SME targeted intuitive solutions for hassle-free GST billing.',
    icon: Receipt,
  },
  {
    id: 'inventory',
    title: 'Stock & Inventory Management',
    description: 'Robust systems to track, manage, and optimize your supply chain.',
    icon: Package,
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'User-centric interfaces that blend aesthetic appeal with seamless functionality.',
    icon: Palette,
  },
  {
    id: 'cloud',
    title: 'Cloud & Hosting Solutions',
    description: 'Secure, scalable, and high-performance cloud infrastructure services.',
    icon: Cloud,
  },
  {
    id: 'consulting',
    title: 'IT Consulting & Support',
    description: 'Expert guidance to navigate technical challenges and scale operations.',
    icon: Wrench,
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Affordable Pricing',
    description: 'Cost-effective solutions optimized for small to medium businesses.',
    icon: CheckCircle,
  },
  {
    title: 'Local Support',
    description: 'Maharashtra-based team providing immediate, contextual assistance.',
    icon: Headset,
  },
  {
    title: 'Fast Delivery',
    description: 'Agile development with transparent, milestone-based payments.',
    icon: Clock,
  },
  {
    title: 'Regional Language Support',
    description: 'Dedicated client communication in Marathi, Hindi, and English.',
    icon: Globe2,
  },
];

export const PORTFOLIO = [
  {
    id: 'feedback-management-system',
    title: 'Feedback Management System',
    category: 'Education Tech',
    problem: 'Manual feedback collection causing paperwork overhead and delayed analysis.',
    solution: 'A digital platform streamlining feedback collection, secure login, faculty reports, and an analytics dashboard.',
    tech: ['Flutter', 'Docker'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'quiz-management-system',
    title: 'College Quiz Competition Management',
    category: 'Event Management',
    problem: 'Inefficient manual registration, tracking, and scoring for college-level quiz events.',
    solution: 'Complete software for online registration, team management, live scoring, and automated event result generation.',
    tech: ['PHP', 'MySQL', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'babypulse',
    title: 'BabyPulse',
    category: 'Health Tech',
    problem: 'Parents and pediatricians need a unified platform to track newborn health metrics, vaccinations, and growth milestones.',
    solution: 'A secure web application for digital health records, featuring intelligent vaccination reminders and visual growth analytics.',
    tech: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800',
  }
];

export const PRICING = [
  {
    tier: 'Basic',
    price: '₹9,999',
    description: 'Perfect for small shops & individual portfolios.',
    features: ['5 Page Website', 'Mobile Responsive', 'Basic SEO Setup', 'Contact Form', '1 Month Free Support'],
    popular: false,
  },
  {
    tier: 'Standard',
    price: '₹24,999',
    description: 'Ideal for growing businesses & dynamic sites.',
    features: ['Dynamic Website', 'Admin Dashboard', 'Billing / GST Module', 'Advanced SEO', '3 Months Free Support'],
    popular: true,
  },
  {
    tier: 'Premium',
    price: 'Custom',
    description: 'Enterprise Apps & Custom Portals.',
    features: ['Custom Web/Mobile App', 'Cloud Scalability', 'Advanced Inventory', 'Payment Gateway Integration', '1 Year Free Maintenance'],
    popular: false,
  }
];

export const SERVICE_MATRIX = [
  { feature: 'Core Setup', basic: 'Yes', standard: 'Yes', premium: 'Yes' },
  { feature: 'Responsive Design', basic: 'Yes', standard: 'Yes', premium: 'Yes' },
  { feature: 'SEO Optimization', basic: 'Basic', standard: 'Advanced', premium: 'Comprehensive' },
  { feature: 'Content Management (CMS)', basic: 'No', standard: 'Yes', premium: 'Custom Built' },
  { feature: 'Database Integration', basic: 'No', standard: 'Yes', premium: 'Advanced/Scalable' },
  { feature: 'User Authentication', basic: 'No', standard: 'Basic (Admin)', premium: 'Multi-role / OAuth' },
  { feature: 'API Integrations', basic: 'No', standard: 'Standard', premium: 'Complex & Custom' },
  { feature: 'Support & Maintenance', basic: '1 Month', standard: '3 Months', premium: '1 Year+' },
];

export const TEAM = [
  {
    name: 'Pranav Patil',
    role: 'Co-Founder & Solutions Director',
    description: 'Leading strategic technical initiatives, architecting robust cloud infrastructure, and delivering scalable enterprise solutions.',
    image: '/profil1.png',
    links: { linkedin: '#', github: '#' }
  },
  {
    name: 'Harsh Mali',
    role: 'Co-Founder & Technical Director',
    description: 'Architecting scalable solutions and leading full-stack development.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    links: { linkedin: '#', github: '#' }
  },
  {
    name: 'Shubham Karande',
    role: 'Co-Founder & Design Director',
    description: 'Crafting pixel-perfect designs and ensuring flawless user experiences.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    links: { linkedin: '#', github: '#' }
  }
];

export const TECH_STACK = [
  { name: 'React', icon: Code2 },
  { name: 'Node.js', icon: Server },
  { name: 'PHP', icon: Code2 },
  { name: 'MySQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'Firebase', icon: Cloud },
  { name: 'Flutter', icon: PhoneIcon },
  { name: 'Figma', icon: PenTool },
];

export const STATS = [
  { label: 'Projects Completed', value: 3, suffix: '+' },
  { label: 'Happy Clients', value: 2, suffix: '+' },
  { label: 'Technologies Mastered', value: 12, suffix: '+' },
  { label: 'Support Response', value: 24, suffix: ' hrs', prefix: '< ' },
];

export const BLOGS = [
  {
    title: 'Why Every Maharashtra SME Needs GST Software',
    date: 'Oct 12, 2023',
    snippet: 'Discover how automated GST billing can save hours of manual data entry and prevent compliance penalties.'
  },
  {
    title: 'Inventory Secrets for Small Retail Shops',
    date: 'Nov 05, 2023',
    snippet: 'Learn 5 simple strategies to avoid overstocking and keep your capital flowing efficiently.'
  }
];

export const FAQS = [
  {
    question: 'What is your typical delivery time for a new project?',
    answer: 'Delivery times vary depending on the complexity of the project. A standard business website usually takes 1-2 weeks, while complex full-stack applications or custom software may take 4-8 weeks. We always provide a clear timeline before starting.'
  },
  {
    question: 'Do you offer post-delivery maintenance and support?',
    answer: 'Yes! All our packages include a complimentary support period. After that, we offer affordable maintenance contracts to keep your software secure, up-to-date, and running smoothly.'
  },
  {
    question: 'How do your payment milestones work?',
    answer: 'We typically structure payments in three milestones: 30% upfront to kick off the project, 40% upon approval of the initial design/prototype, and the final 30% after strict QA testing and right before the final launch.'
  },
  {
    question: 'Which technologies do you use for development?',
    answer: 'We use modern, scalable tech stacks including React, Node.js, PHP, MongoDB, and MySQL for web development. For mobile apps, we specialize in Flutter for fast, cross-platform delivery.'
  },
  {
    question: 'Are there any hidden costs in your pricing?',
    answer: 'No, we believe in complete transparency. Our quotes cover everything discussed in the proposal. Third-party costs like domain names, hosting, or premium API services will be clearly communicated upfront.'
  }
];

export const PROCESS = [
  {
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, target audience, and technical requirements.'
  },
  {
    title: 'UI/UX Design',
    description: 'Our design team crafts intuitive, pixel-perfect prototypes ensuring a flawless user experience.'
  },
  {
    title: 'Agile Development',
    description: 'We build your product using modern tech stacks, keeping you updated with frequent milestones.'
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing prevents bugs and ensures the software runs smoothly under all conditions.'
  },
  {
    title: 'Deployment & Support',
    description: 'We launch your product securely and provide ongoing maintenance to keep it updated.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Dr. Principal',
    role: 'Nanasaheb Mahadik Polytechnic Institute',
    feedback: 'Delta Devs transformed how we manage college events. The Quiz Competition and Feedback systems are robust, intuitive, and saved us hundreds of administrative hours.',
    rating: 5
  },
  {
    name: 'Rahul Deshmukh',
    role: 'Retail Business Owner',
    feedback: 'Developing our GST billing platform with Delta Devs was a breeze. They understood our exact pain points and delivered a cloud solution that scaled our operations effortlessly.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Startup Founder',
    feedback: 'From the initial design phases to the final deployment, the team was highly professional. They do not just write code; they essentially partner with you to refine your business logic.',
    rating: 5
  }
];
