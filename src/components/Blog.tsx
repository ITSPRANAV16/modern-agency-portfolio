import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: '1',
    title: '5 Essential GST Tips for Small Businesses in 2024',
    excerpt: 'Navigate the complexities of goods and services tax with our comprehensive guide designed specifically for growing software businesses and agencies.',
    category: 'GST Tips',
    date: 'Oct 12, 2024',
    author: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Architecting for Real-Time Software Scalability',
    excerpt: 'Learn how to handle high concurrent user traffic by leveraging microservices, Redis caching, and dynamic load balancing strategies.',
    category: 'Software Scalability',
    date: 'Sep 28, 2024',
    author: 'Rahul Verma',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Automating Tax Invoicing in Your SaaS Product',
    excerpt: 'Step-by-step tutorial on integrating automated tax calculation APIs and generating compliant PDF invoices for your global customer base.',
    category: 'GST Tips',
    date: 'Sep 15, 2024',
    author: 'Amit Patel',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Optimizing Database Queries for Faster Load Times',
    excerpt: 'Discover why your application is slowing down and how indexing, query optimization, and connection pooling can save your infrastructure.',
    category: 'Software Scalability',
    date: 'Aug 30, 2024',
    author: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    title: 'The Future of Cross-Platform Mobile Development',
    excerpt: 'Comparing React Native, Flutter, and native development in terms of performance, scalability, and code maintainability for complex applications.',
    category: 'Engineering Insights',
    date: 'Aug 12, 2024',
    author: 'Neha Gupta',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800',
  }
];

const CATEGORIES = ['All', 'Software Scalability', 'GST Tips', 'Engineering Insights'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="py-32 bg-slate-50 relative z-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="w-8 h-px bg-blue-600"></span>
            <span className="text-blue-600 font-mono text-sm uppercase tracking-widest font-bold">Latest Insights</span>
            <span className="w-8 h-px bg-blue-600"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-8"
          >
            Thoughts on <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600">Tech & Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-slate-600 leading-relaxed"
          >
            Explore our articles on building scalable software, managing agency growth, and navigating technical challenges.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 flex flex-col"
              >
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1.5">
                      <Tag className="w-3 h-3 text-blue-600" />
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <a href={`#blog-${post.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors mt-auto group/btn">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
