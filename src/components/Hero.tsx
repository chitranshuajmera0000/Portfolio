import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Rocket, Globe, Zap, Building, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  
  const titles = [
    "Code Astronaut",
    "Digital Space Explorer", 
    "Cosmic Code Creator",
    "Full-Stack Space Pioneer",
    "Stellar Software Engineer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Minimal background blurs only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/3 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <Sparkles 
              size={12 + Math.random() * 8} 
              className="text-cyan-300/40" 
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="space-y-8">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6 leading-tight tracking-tight">
              <div className="block relative h-40 md:h-52 overflow-hidden">
                {titles.map((title, index) => (
                  <span
                    key={title}
                    className={`absolute top-0 left-0 w-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent transition-all duration-1000 transform text-center ${
                      index === currentTitle
                        ? 'translate-y-0 opacity-100'
                        : index < currentTitle
                        ? '-translate-y-full opacity-0'
                        : 'translate-y-full opacity-0'
                    }`}
                  >
                    {title}
                  </span>
                ))}
              </div>
            </h1>
            
            {/* Dynamic subtitle that matches the current title */}
            <div className="text-center mb-4">
              <p className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400 transition-all duration-1000 flex items-center justify-center gap-2">
                {currentTitle === 0 && (
                  <>
                    <Rocket className="w-5 h-5 text-cyan-400" />
                    <span>Navigating the digital cosmos with code</span>
                  </>
                )}
                {currentTitle === 1 && (
                  <>
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span>Discovering new frontiers in web development</span>
                  </>
                )}
                {currentTitle === 2 && (
                  <>
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <span>Crafting stellar digital experiences</span>
                  </>
                )}
                {currentTitle === 3 && (
                  <>
                    <Building className="w-5 h-5 text-emerald-400" />
                    <span>Building complete digital ecosystems</span>
                  </>
                )}
                {currentTitle === 4 && (
                  <>
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span>Engineering solutions at light speed</span>
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-300">
            <p className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              Launching ideas into orbit • Building stellar user experiences • Debugging at light speed
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Houston, we have solutions! 🚀</span>
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-600 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={scrollToAbout}
                className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                🚀 Begin Mission
                <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
              
              <a 
                href="#contact"
                className="group bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/40 border border-emerald-400/20"
              >
                ⭐ Make Contact
                <Sparkles className="inline-block ml-2 w-5 h-5 group-hover:rotate-45 transition-transform duration-300 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;