import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import { Toaster } from "react-hot-toast";

const Hero = lazy(() => import("./components/Hero"));
const TrustedBy = lazy(() => import("./components/TrustedBy"));
const Stats = lazy(() => import("./components/Stats"));
const Services = lazy(() => import("./components/Services"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs"));
const FAQ = lazy(() => import("./components/FAQ"));
const Process = lazy(() => import("./components/Process"));
const CollegeProjects = lazy(() => import("./components/CollegeProjects"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const TechStack = lazy(() => import("./components/TechStack"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Pricing = lazy(() => import("./components/Pricing"));
const CostEstimator = lazy(() => import("./components/CostEstimator"));
const Team = lazy(() => import("./components/Team"));
const Blog = lazy(() => import("./components/Blog"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[200px] w-full">
    <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

const SectionReveal = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden flex flex-col relative w-full">
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <Helmet>
        <title>Delta Dev's | We Build Software That Scales</title>
        <meta
          name="description"
          content="Delta Dev's is a software development agency based in Maharashtra providing custom software, mobile apps, and GST billing solutions."
        />
        <meta
          name="keywords"
          content="Software Development, Web Development, Mobile Apps, GST Billing Software, Maharashtra, Pune"
        />
        <meta
          property="og:title"
          content="Delta Dev's | Custom Software & Web Development"
        />
        <meta
          property="og:description"
          content="Elevating businesses with premium custom software, mobile apps, and robust GST billing solutions across Maharashtra."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://deltadevs.in" />
      </Helmet>
      <CustomCursor />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col flex-grow"
      >
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
          <SectionReveal>
            <TrustedBy />
          </SectionReveal>
          <SectionReveal>
            <Stats />
          </SectionReveal>
          <SectionReveal>
            <Services />
          </SectionReveal>
          <SectionReveal>
            <WhyChooseUs />
          </SectionReveal>
          <SectionReveal>
            <CollegeProjects />
          </SectionReveal>
          <SectionReveal>
            <Process />
          </SectionReveal>
          <SectionReveal>
            <FAQ />
          </SectionReveal>
          <SectionReveal>
            <Portfolio />
          </SectionReveal>
          <SectionReveal>
            <Testimonials />
          </SectionReveal>
          <SectionReveal>
            <TechStack />
          </SectionReveal>
          <SectionReveal>
            <Pricing />
          </SectionReveal>
          <SectionReveal>
            <CostEstimator />
          </SectionReveal>
          <SectionReveal>
            <Team />
          </SectionReveal>
          <SectionReveal>
            <Blog />
          </SectionReveal>
          <SectionReveal>
            <Contact />
          </SectionReveal>
          <Footer />
        </Suspense>
      </motion.main>
    </div>
  );
}
