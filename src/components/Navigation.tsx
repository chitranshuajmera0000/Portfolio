import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code2, Briefcase, Mail, Award } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? 'scale-95' : 'scale-100'
      }`}>
        <div className="hidden md:flex items-center space-x-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-2 px-6 py-3 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 group"
              >
                <Icon size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-6 right-6 z-50 md:hidden bg-gradient-to-br from-white/10 via-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-white/20 rounded-full p-3 text-white hover:bg-gradient-to-br hover:from-white/20 hover:via-cyan-500/20 hover:to-blue-500/20 transition-all duration-500 transform hover:scale-110 hover:rotate-3 shadow-2xl hover:shadow-cyan-500/25 ${
          isOpen ? 'rotate-90 scale-110' : ''
        }`}
      >
        <div className="relative">
          {isOpen ? <X size={24} className="animate-spin" /> : <Menu size={24} />}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
        </div>
      </button>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        isOpen ? 'bg-gradient-to-br from-black/60 via-blue-900/20 to-purple-900/20 backdrop-blur-md' : 'bg-transparent pointer-events-none'
      }`}>
        {/* Cosmic Background Elements */}
        {isOpen && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-16 h-16 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-300"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl animate-pulse delay-700"></div>
          </div>
        )}
        
        <div className={`fixed top-20 right-6 bg-gradient-to-br from-white/10 via-cyan-500/5 to-blue-500/5 backdrop-blur-xl border border-gradient-to-r border-cyan-400/30 rounded-3xl p-6 shadow-2xl transition-all duration-500 transform ${
          isOpen ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 -translate-y-8 scale-95 -rotate-2 pointer-events-none'
        }`}>
          {/* Menu Header */}
          <div className="text-center mb-4 pb-4 border-b border-white/10">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse">
              ⭐ Navigation
            </h3>
          </div>
          
          {/* Menu Items */}
          <div className="space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-4 w-full px-5 py-4 text-white/80 hover:text-white bg-gradient-to-r from-white/5 to-transparent hover:from-cyan-500/20 hover:via-blue-500/10 hover:to-purple-500/20 rounded-2xl transition-all duration-500 group transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/20 border border-transparent hover:border-cyan-400/30 ${
                    isOpen ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <Icon size={22} className="group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 text-cyan-300 group-hover:text-cyan-200" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <span className="font-semibold text-base group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300">
                    {item.label}
                  </span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Menu Footer */}
          <div className="mt-6 pt-4 border-t border-white/10 text-center">
            <div className="text-xs text-white/40 animate-pulse">
              ✨ Code Astronaut Portal
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;