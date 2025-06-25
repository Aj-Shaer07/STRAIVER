import { useEffect, useRef, useState } from 'react';
import '../App.css';
import { Navbar } from '../components/ui/navbar.tsx';
import Particles from '../blocks/Backgrounds/Particles/Particles';
import { BoxReveal } from '../components/magicui/box-reveal.tsx';
import { Card, CardTitle, CardDescription } from './ui/card.tsx';

function App() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const pricingPlans = [
    {
      title: "Free",
      subtitle: "Perfect to get started with DSA",
      price: "₹0/month",
      features: [
        "100+ DSA problems",
        "AI-powered hints",
        "Access to blogs"
      ],
      highlight: false
    },
    {
      title: "Basic",
      subtitle: "Level up your DSA journey",
      price: "₹499/month",
      features: [
        "All Free features",
        "500+ topic-wise problems",
        "Intermediate AI explanations",
        "Practice strolls & stats"
      ],
      highlight: false
    },
    {
      title: "Premium",
      subtitle: "Ace interviews with AI by your side",
      price: "₹999/month",
      features: [
        "All Basic features",
        "2000+ curated problems",
        "Personalized AI tutor",
        "Interview prep kits",
        "Real-time performance analytics"
      ],
      highlight: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const sectionIndex = sectionRefs.current.findIndex(
            section => section === entry.target
          );
          if (sectionIndex !== -1) {
            setVisibleSections(prev => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(sectionIndex);
              }
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -20% 0px'
      }
    );

    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const setSectionRef = (el: HTMLElement | null, index: number) => {
    sectionRefs.current[index] = el;
  };

  return (
    <div className="relative">
      {/* Background Particles */}
      <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none bg-black">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={60}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={80}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />

        {/* Welcome Section */}
        <section 
          ref={el => setSectionRef(el, 0)}
          className={`w-screen h-screen flex items-center justify-center transition-all duration-1000 transform ${
            visibleSections.has(0) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <BoxReveal>
            <div className="text-center px-4 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-24 w-32 md:h-36 md:w-48"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Welcome to Str-aver
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-200 mt-6">
                Your go-to platform for learning DSA
              </p>
            </div>
          </BoxReveal>
        </section>

        {/* Key Message Section */}
        <section
          ref={el => setSectionRef(el, 1)}
          className={`w-screen min-h-screen flex items-center justify-center py-20 transition-all duration-1000 transform ${
            visibleSections.has(1) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-full max-w-4xl mx-4 p-8 md:p-12 rounded-xl bg-black/70 backdrop-blur-sm border border-gray-700">
            <div className="space-y-8">
              <h2 className={`text-3xl md:text-4xl font-bold text-white mb-8 text-center transition-all duration-1000 delay-300 transform ${
                visibleSections.has(1) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}>
                Transform Your Coding Skills
              </h2>
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-gray-200">
                {[
                  "Elevate your coding skills by mastering Data Structures and Algorithms",
                  "Gain confidence and solve problems efficiently", 
                  "Stand out in interviews with strong problem-solving abilities",
                  "Start your journey and unlock endless software development opportunities!"
                ].map((text, index) => (
                  <p key={index} className={`flex items-start transition-all duration-700 transform ${
                    visibleSections.has(1) 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-5'
                  }`} style={{ transitionDelay: `${600 + index * 200}ms` }}>
                    <span className="text-purple-400 mr-3">•</span>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section
          ref={el => setSectionRef(el, 2)}
          className={`w-screen min-h-screen flex items-center justify-center py-20 transition-all duration-1000 transform ${
            visibleSections.has(2) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-full max-w-6xl px-4">
            <div className={`text-center mb-16 transition-all duration-1000 delay-300 transform ${
              visibleSections.has(2) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-5'
            }`}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                AverseWithAI
              </h2>
              <h3 className="text-xl md:text-2xl text-gray-300">
                Choose Your Plan
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`${plan.highlight ? 'border-purple-500 bg-gray-900/70' : 'border-gray-700 bg-black/70'} h-full p-6 transition-all duration-1000 transform hover:scale-[1.12] ${
                    visibleSections.has(2) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                      POPULAR
                    </div>
                  )}
                  
                  <CardTitle className="text-2xl md:text-3xl mb-3 text-white">
                    {plan.title}
                  </CardTitle>
                  <CardDescription className="text-lg md:text-xl text-gray-300 mb-6">
                    {plan.subtitle}
                  </CardDescription>
                  
                  <div className="my-8">
                    <span className="text-3xl md:text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full py-3 rounded-lg font-bold ${
                      plan.highlight 
                        ? 'bg-purple-600 hover:bg-purple-700' 
                        : 'bg-gray-800 hover:bg-gray-700'
                    } text-white transition-colors`}
                  >
                    Get Started
                  </button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section
          ref={el => setSectionRef(el, 3)}
          className={`w-screen min-h-screen flex items-center justify-center py-20 transition-all duration-1000 transform ${
            visibleSections.has(3) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-full max-w-4xl mx-4 p-8 md:p-12 rounded-xl bg-black/70 backdrop-blur-sm border border-gray-700">
            <div className="space-y-8 text-center">
              <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-1000 delay-300 transform ${
                visibleSections.has(3) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}>
                Continue Your Learning Journey
              </h2>
              <p className={`text-xl md:text-2xl text-gray-200 transition-all duration-1000 delay-500 transform ${
                visibleSections.has(3) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}>
                Here are a few course recommendations for you to get started with DSA
              </p>
              <p className={`text-xl md:text-2xl text-gray-200 transition-all duration-1000 delay-700 transform ${
                visibleSections.has(3) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}>
                Don't forget to check out the problem-solving section for hands-on practice!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;