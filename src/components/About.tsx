import React from 'react';
import { Code, Rocket, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and efficiency in every project"
    },
    {
      icon: Heart,
      title: "User Experience",
      description: "Creating intuitive interfaces that users love to interact with"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Staying ahead with the latest technologies and best practices"
    }
  ];

  return (
    <section id="about" className="relative py-20 px-6">
      {/* Minimal background blurs only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/3 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6 tracking-tight">
            Meet <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent animate-pulse">Chitranshu</span>
          </h2>
          <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 max-w-2xl mx-auto mb-4">
            ⚡ Full Stack Developer • Code Astronaut • Digital Innovator
          </p>
          <div className="flex justify-center space-x-2">
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse delay-300"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Text Content */}
          <div className="flex-1">
            <div className="bg-gradient-to-br from-white/5 via-blue-500/5 to-purple-500/5 backdrop-blur-sm border border-gradient-to-r border-cyan-500/20 rounded-3xl p-8 shadow-2xl h-full flex flex-col justify-center">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 mb-5">
                  <span className="text-cyan-400 font-bold text-xl">⭐</span> Plot twist: I don't just turn coffee into code—I fuel starships with 
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"> JavaScript</span> and chart new galaxies with 
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> TypeScript</span>! As a 
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> digital space explorer</span>, my mission isn't just to build websites, but to launch 
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"> interstellar experiences</span> that make users exclaim "Wow!" With 1+ light-years of full-stack adventure under my belt, I specialize in crafting efficient, scalable apps that travel at warp speed.
                </p>
                
                <p className="text-base leading-relaxed font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mb-5">
                  <span className="text-purple-400 font-bold text-xl">⚡</span> Fluent in 
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> TypeScript</span>, I dream in 
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> React</span> nebulae, and engineer with 
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600"> Next.js</span>—assembling UIs straighter than a photon's path. My cosmic toolkit also includes 
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500"> Python</span> for decoding data constellations and crafting APIs that break the sound barrier.
                </p>

                <p className="text-base leading-relaxed font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mb-5">
                  <span className="text-yellow-400 font-bold text-xl">🚀</span> Currently, I'm charting my course at MS Ramaiah Institute of Technology with a stellar 
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"> 9.40/10.00 CGPA</span>—learning, exploring, and pushing my technical spacecraft to new frontiers. From designing entire digital universes to mastering scalable architectures, my codebase is cleaner than an airlocked hull.
                </p>

                <p className="text-base leading-relaxed font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
                  <span className="text-pink-400 font-bold text-xl">✨</span> Ready to collaborate with like-minded explorers and build the next cosmic marvel? Let's launch something extraordinary together!
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-3 h-full">
              {[
                {
                  icon: Code,
                  title: "✨ Clean Code Wizard",
                  description: "Turning spaghetti code into gourmet digital cuisine with precision",
                  gradient: "from-emerald-400 to-cyan-500",
                  bgGradient: "from-emerald-500/10 to-cyan-500/10"
                },
                {
                  icon: Rocket,
                  title: "✨ Performance Ninja", 
                  description: "Making websites load faster than your morning coffee brews in space",
                  gradient: "from-orange-400 to-red-500",
                  bgGradient: "from-orange-500/10 to-red-500/10"
                },
                {
                  icon: Heart,
                  title: "✨ UX Whisperer",
                  description: "Creating interfaces so intuitive, they read minds across galaxies",
                  gradient: "from-pink-400 to-purple-500",
                  bgGradient: "from-pink-500/10 to-purple-500/10"
                },
                {
                  icon: Zap,
                  title: "✨ Innovation Catalyst",
                  description: "Turning 'impossible' into 'just shipped it' at warp speed",
                  gradient: "from-yellow-400 to-orange-500",
                  bgGradient: "from-yellow-500/10 to-orange-500/10"
                },
                {
                  icon: Code,
                  title: "✨ Full-Stack Architect",
                  description: "Building end-to-end solutions from database to deployment seamlessly",
                  gradient: "from-blue-400 to-indigo-500",
                  bgGradient: "from-blue-500/10 to-indigo-500/10"
                },
                {
                  icon: Rocket,
                  title: "✨ Problem Solver",
                  description: "Debugging the universe one pixel at a time with cosmic precision",
                  gradient: "from-teal-400 to-green-500",
                  bgGradient: "from-teal-500/10 to-green-500/10"
                },
                {
                  icon: Heart,
                  title: "✨ API Architect",
                  description: "Designing REST APIs that communicate across star systems flawlessly",
                  gradient: "from-indigo-400 to-purple-500",
                  bgGradient: "from-indigo-500/10 to-purple-500/10"
                },
                {
                  icon: Zap,
                  title: "✨ Database Wizard",
                  description: "Crafting data structures that store information at light speed",
                  gradient: "from-violet-400 to-pink-500",
                  bgGradient: "from-violet-500/10 to-pink-500/10"
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`bg-gradient-to-br ${feature.bgGradient} backdrop-blur-lg border border-white/10 rounded-2xl p-4 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group shadow-2xl hover:shadow-cyan-500/20 flex flex-col justify-between h-full`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mb-3">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow flex flex-col justify-center">
                      <h3 className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient} font-bold text-sm mb-2 group-hover:scale-105 transition-transform duration-300 leading-tight`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-xs leading-relaxed font-medium group-hover:text-gray-200 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;