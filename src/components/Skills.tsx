import React from 'react';

const Skills: React.FC = () => {
  const skillsData = [
    // Core Web Foundations
    { name: 'HTML', level: 99 },
    { name: 'CSS', level: 99 },
    { name: 'JavaScript', level: 99 },
    { name: 'TypeScript', level: 99 },
    
    // Frontend Frameworks & Libraries
    { name: 'React', level: 99 },
    { name: 'Next.js', level: 99 },
    { name: 'Tailwind CSS', level: 99 },
    
    // Backend & APIs
    { name: 'Node.js', level: 99 },
    { name: 'Express.js', level: 99 },
    { name: 'GraphQL', level: 99 },
    
    // Database & ORM
    { name: 'MongoDB', level: 99 },
    { name: 'Prisma', level: 99 },
    
    // Authentication & Deployment
    { name: 'JWT', level: 99 },
    { name: 'Vercel', level: 99 },
  ];

  return (
    <section id="skills" className="relative py-20 px-6 overflow-hidden">
      {/* Minimal background blurs only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/3 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6 tracking-tight">
            Tech <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent animate-pulse">Galaxy</span>
          </h2>
          <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 max-w-2xl mx-auto mb-4">
            <span className="text-cyan-300">🌟 My superpowers mapped across the coding universe</span>
          </p>
          <div className="flex justify-center space-x-2">
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse delay-300"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="bg-gradient-to-br from-white/5 via-blue-500/5 to-purple-500/5 backdrop-blur-sm border border-gradient-to-r border-cyan-500/20 rounded-2xl p-4 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 font-bold mb-2">{skill.name}</div>
              <div className="bg-gradient-to-r from-white/10 via-blue-500/10 to-purple-500/10 rounded-full h-2 overflow-hidden mb-2">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-400 text-sm font-medium">⚡ {skill.level}% Power Level</div>
            </div>
          ))}
        </div>

        {/* Short 1% Philosophy */}
        <div className="text-center mt-12">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-pulse">
            ⚡ That 1%? Pure <span className="text-pink-400">curiosity</span> fuel! 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;