import { ExternalLink, Github, FileText, Sparkles, Rocket, Zap } from 'lucide-react';
import React, { useState } from 'react';

// Simple emoji renderer using Unicode conversion (no external dependencies)
const EmojiRenderer = ({ emoji, fallbackIcon, className, style }: { 
  emoji?: string; 
  fallbackIcon?: React.ReactNode; 
  className?: string; 
  style?: React.CSSProperties 
}) => {
  if (!emoji) {
    return fallbackIcon ? <span className={className} style={style}>{fallbackIcon}</span> : null;
  }

  // Convert emoji to Unicode codepoint for CDN URL
  const getEmojiCodepoint = (emoji: string) => {
    return Array.from(emoji)
      .map(char => char.codePointAt(0)?.toString(16).padStart(4, '0'))
      .join('-')
      .toLowerCase();
  };

  const codepoint = getEmojiCodepoint(emoji);
  const emojiUrl = `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codepoint}.svg`;

  const [imageError, setImageError] = useState(false);

  if (imageError && fallbackIcon) {
    return <span className={className} style={style}>{fallbackIcon}</span>;
  }

  return (
    <img
      src={emojiUrl}
      alt="emoji"
      className={className}
      style={{ 
        display: 'inline-block', 
        width: '1em', 
        height: '1em', 
        verticalAlign: '-0.125em',
        ...style 
      }}
      onError={() => setImageError(true)}
    />
  );
};

const Projects = () => {
  const projects = [
      {
      id: 1,
      emoji: "🏥",
      title: "MediTrack Pro",
      description: "Comprehensive Flutter app for Ayurvedic healthcare facilities managing inventory, preparation logs, and recipes with real-time stock alerts and audit trails.",
      tech: ["Flutter", "Firebase", "Cloud Firestore", "Firebase Auth"],
      color: "from-green-600 to-purple-700",
      size: "large",
      github: "",
      demo: "https://www.notion.so/MediTrack-Pro-Hospital-Management-System-25644141124380378dc9f375f1fed7cb",
      fallbackIcon: <span className="w-6 h-6 text-green-400">🏥</span>
    },
    {
      id: 2,
      emoji: "📝",
      title: "Notes App", 
      description: "Easy, secure note-taking app with Google and GitHub OAuth authentication. Organize and manage your notes effortlessly.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Google OAuth", "Github OAuth"],
      color: "from-purple-500 to-pink-400",
      size: "medium",
      github: "https://github.com/chitranshuajmera0000/Notes-App",
      demo: "https://notes-app-six-sable-89.vercel.app/",
      fallbackIcon: <FileText className="w-6 h-6 text-purple-400" />
    },
    {
      id: 3,
      emoji: "✨",
      title: "ShareIt Nebula",
      description: "Blogging platform so modern, it makes other sites jealous! Content creation that's simply stellar.",
      tech: ["React (Vite)", "Hono", "Prisma", "NeonDB", "Cloudflare Workers", "Cloudinary", "JWT"],
      color: "from-purple-500 to-pink-400",
      size: "large",
      github: "https://github.com/chitranshuajmera0000/ShareIt",
      demo: "https://share-it-nine.vercel.app/",
      fallbackIcon: <Sparkles className="w-6 h-6 text-purple-400" />
    },
    {
      id: 4,
      emoji: "🚀",
      title: "QuickPay Command",
      description: "Digital payment platform that's out of this world! Money transfers so smooth, they're practically weightless.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Zod", "Bcrypt"],
      color: "from-blue-500 to-cyan-400",
      size: "large",
      github: "https://github.com/chitranshuajmera0000/QuickPay/",
      demo: "https://quick-pay-lac.vercel.app/",
      fallbackIcon: <Rocket className="w-6 h-6 text-blue-400" />
    },
    {
      id: 5,
      emoji: "⚡",
      title: "Code Universe",
      description: "Full-stack development showcase that pushes the boundaries of what's possible in the browser!",
      tech: ["TypeScript", "React.js", "Node.js", "Tailwind CSS"],
      color: "from-orange-400 to-red-500",
      size: "medium",
      github: "https://github.com/chitranshuajmera0000/Portfolio",
      demo: "",
      fallbackIcon: <Zap className="w-6 h-6 text-orange-400" />
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      {/* Minimal background blurs only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/3 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 mb-6 tracking-tight">
            Digital <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">Playground</span>
          </h2>
          <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400 max-w-2xl mx-auto mb-4 flex flex-wrap items-center gap-2 justify-center">
            <span className="block order-2 md:order-1">Projects that have traveled across the digital cosmos</span>
            <span className="flex-shrink-0 flex items-center order-1 md:order-2">
              <EmojiRenderer 
                emoji="🛸" 
                fallbackIcon={<Rocket className="text-3xl md:text-4xl text-cyan-400" />}
                className="text-3xl md:text-4xl align-middle" 
                style={{ marginBottom: '-0.15em' }} 
              />
            </span>
          </p>
          <div className="flex justify-center space-x-2">
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full animate-pulse"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse delay-300"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/40 via-gray-800/30 to-slate-900/60 backdrop-blur-sm border border-gray-600/30 hover:border-cyan-400/60 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Enhanced animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-500 flex items-center gap-2">
                    <EmojiRenderer 
                      emoji={project.emoji} 
                      fallbackIcon={project.fallbackIcon}
                      className="w-6 h-6" 
                    />
                    {project.title}
                  </h3>

                  {project.github ? (
                    <a
                      href={project.github}
                      className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View on GitHub"
                    >
                      <Github className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors duration-300" />
                    </a>
                  ) : null}
                </div>

                <p className="text-gray-300 group-hover:text-gray-200 text-lg mb-6 leading-relaxed transition-colors duration-300">
                  {project.description}
                </p>

                <div className="space-y-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-slate-700/50 to-gray-800/50 text-cyan-300 rounded-full border border-cyan-400/30 backdrop-blur-sm hover:border-cyan-400/60 hover:bg-gradient-to-r hover:from-cyan-900/30 hover:to-blue-900/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.demo}
                    className="inline-flex items-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all duration-300 group-hover:translate-x-1 font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
