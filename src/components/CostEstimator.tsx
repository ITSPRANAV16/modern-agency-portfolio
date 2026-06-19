import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Check, ArrowRight, Lightbulb, ChevronRight } from 'lucide-react';
import toast from 'react-hot-toast';

const APP_TYPES = [
  { id: 'landing', label: 'Landing Page', basePrice: 6666 },
  { id: 'web', label: 'Web Application', basePrice: 9999 },
  { id: 'mobile', label: 'Mobile App', basePrice: 20000 },
];

const DESIGN_OPTIONS = [
  { id: 'template', label: 'Template Based', multiplier: 1 },
  { id: 'custom', label: 'Custom Design', multiplier: 1.5 },
  { id: 'premium', label: 'Premium Branding', multiplier: 2.5 },
];

const ADDONS = [
  { id: 'auth', label: 'User Login & Profiles', price: 15000 },
  { id: 'payments', label: 'Payment Gateway', price: 24000 },
  { id: 'dashboard', label: 'Admin Dashboard', price: 36000 },
  { id: 'api', label: 'Third-party APIs', price: 18000 },
  { id: 'seo', label: 'Advanced SEO', price: 12000 },
];

const QUIZ_QUESTIONS = [
  {
    question: "What is the primary goal of your project?",
    options: [
      { text: "Launch a new tech startup or SaaS platform", recommendedType: 'web', recommendedDesign: 'premium', addons: ['auth', 'payments'] },
      { text: "Automate internal business processes or tools", recommendedType: 'web', recommendedDesign: 'template', addons: ['dashboard', 'auth'] },
      { text: "Establish an online presence to generate leads", recommendedType: 'landing', recommendedDesign: 'custom', addons: ['seo'] },
    ]
  },
  {
    question: "How important is a unique, standout visual brand?",
    options: [
      { text: "Critical - we need a world-class premium brand identity", recommendedDesign: 'premium' },
      { text: "Important - but standard custom design patterns are fine", recommendedDesign: 'custom' },
      { text: "Functionality is priority - we just need it clean & usable", recommendedDesign: 'template' },
    ]
  },
  {
    question: "Are there any complex technical integrations needed?",
    options: [
      { text: "Yes, we need third-party APIs and payment gateways", addons: ['api', 'payments'] },
      { text: "Just user accounts and a basic admin dashboard", addons: ['auth', 'dashboard'] },
      { text: "No, mostly standard standalone informational features", addons: [] },
    ]
  }
];

export default function CostEstimator() {
  const [selectedType, setSelectedType] = useState(APP_TYPES[1]);
  const [selectedDesign, setSelectedDesign] = useState(DESIGN_OPTIONS[1]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(0);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const handleQuizAnswer = (option: any) => {
    if (option.recommendedType) {
      const type = APP_TYPES.find(t => t.id === option.recommendedType);
      if (type) setSelectedType(type);
    }
    if (option.recommendedDesign) {
      const design = DESIGN_OPTIONS.find(d => d.id === option.recommendedDesign);
      if (design) setSelectedDesign(design);
    }
    if (option.addons) {
      setSelectedAddons(prev => Array.from(new Set([...prev, ...option.addons])));
    }

    if (quizStep < QUIZ_QUESTIONS.length - 1) {
      setQuizStep(prev => prev + 1);
    } else {
      setShowQuiz(false);
      setQuizStep(0);
      toast.success("Estimate tailored based on your quiz answers!");
    }
  };

  const calculateTotal = () => {
    let total = selectedType.basePrice * selectedDesign.multiplier;
    const addonsTotal = ADDONS.filter(a => selectedAddons.includes(a.id)).reduce((sum, item) => sum + item.price, 0);
    return total + addonsTotal;
  };

  return (
    <section id="estimator" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Calculator className="w-5 h-5 text-blue-600" />
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Cost Estimator</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-6">
            Get an Instant Project Estimate
          </h3>
          <p className="text-lg text-slate-500 mb-8">
            Select your requirements to see a rough estimate for your project. This helps us understand your needs before we talk.
          </p>

          {!showQuiz && (
            <button
              onClick={() => {
                setShowQuiz(true);
                setQuizStep(0);
                setSelectedAddons([]); // reset to base before quiz
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-100 text-blue-600 hover:bg-blue-50 hover:border-blue-200 rounded-xl font-bold transition-all shadow-sm group"
            >
              <Lightbulb className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Not sure what you need? Take our Scope Quiz
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </motion.div>

        <AnimatePresence mode="wait">
          {showQuiz && (
            <motion.div 
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: 'auto', scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              className="max-w-2xl mx-auto mb-16 overflow-hidden"
            >
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-500"
                    style={{ width: `${((quizStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>
                
                <div className="mb-8">
                  <span className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2 block">
                    Question {quizStep + 1} of {QUIZ_QUESTIONS.length}
                  </span>
                  <h4 className="text-2xl font-black text-slate-900">
                    {QUIZ_QUESTIONS[quizStep].question}
                  </h4>
                </div>

                <div className="space-y-3">
                  {QUIZ_QUESTIONS[quizStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuizAnswer(option)}
                      className="w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-blue-600 hover:bg-blue-50/50 transition-all group flex items-center justify-between"
                    >
                      <span className="font-bold text-slate-700 group-hover:text-blue-900">{option.text}</span>
                      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="lg:col-span-2 space-y-8">
            {/* App Type */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="text-xl font-bold text-slate-900 mb-4">1. Project Type</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {APP_TYPES.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${selectedType.id === type.id ? 'border-blue-600 bg-blue-50/50' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
                  >
                    <div className="font-bold text-slate-900">{type.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Design Needs */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="text-xl font-bold text-slate-900 mb-4">2. Design Requirements</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {DESIGN_OPTIONS.map(design => (
                  <button
                    key={design.id}
                    onClick={() => setSelectedDesign(design)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${selectedDesign.id === design.id ? 'border-blue-600 bg-blue-50/50' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
                  >
                    <div className="font-bold text-slate-900">{design.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Addons */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="text-xl font-bold text-slate-900 mb-4">3. Extra Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ADDONS.map(addon => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-xl border-2 flex items-center justify-between transition-all ${isSelected ? 'border-blue-600 bg-blue-50/50' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
                    >
                      <span className="font-bold text-slate-900">{addon.label}</span>
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-transparent'}`}>
                        <Check className="w-4 h-4" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sticky Total Panel */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900 rounded-3xl p-8 text-white sticky top-24 shadow-2xl shadow-slate-900/20">
              <h4 className="text-xl font-bold mb-8 text-slate-300">Estimated Total</h4>
              <div className="text-5xl font-black mb-8 flex items-start gap-1">
                <span className="text-2xl mt-1 text-slate-400">₹</span>
                {calculateTotal().toLocaleString('en-IN')}
              </div>
              
              <ul className="space-y-3 mb-8 text-sm text-slate-400">
                <li className="flex justify-between">
                  <span>{selectedType.label}</span>
                  <span className="text-slate-300">₹{selectedType.basePrice.toLocaleString('en-IN')}</span>
                </li>
                <li className="flex justify-between border-b border-slate-700/50 pb-3">
                  <span>{selectedDesign.label}</span>
                  <span className="text-slate-300">x{selectedDesign.multiplier}</span>
                </li>
                {selectedAddons.map(id => {
                  const addon = ADDONS.find(a => a.id === id)!;
                  return (
                    <li key={id} className="flex justify-between">
                      <span>{addon.label}</span>
                      <span className="text-slate-300">₹{addon.price.toLocaleString('en-IN')}</span>
                    </li>
                  );
                })}
              </ul>

              <button 
                onClick={() => {
                  toast.success('Your estimate has been prepared! Let\'s build it together.');
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
              >
                Discuss Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-center text-slate-500 mt-4">
                *This estimate is not final. The final project estimate will be provided by our team after discussing your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
