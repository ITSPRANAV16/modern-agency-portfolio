import React from 'react';
import { motion, useInView } from 'motion/react';
import { STATS } from '../data';

function Counter({ from, to, prefix = '', suffix = '' }: { from: number, to: number, prefix?: string, suffix?: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(from);

  React.useEffect(() => {
    if (isInView) {
      let start = from;
      const end = to;
      const duration = 2000;
      const incrementTime = 30;
      const steps = duration / incrementTime;
      const increment = (end - start) / steps;

      const timer = setInterval(() => {
        start += increment;
        if ((increment > 0 && start >= end) || (increment < 0 && start <= end)) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [from, to, isInView]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#030712] border-b border-white/5 py-24 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-600 mb-3 font-mono tracking-tight">
                <Counter from={0} to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-xs uppercase text-slate-500 font-bold tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
