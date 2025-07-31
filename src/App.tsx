import React from 'react';
import StarField from './components/StarField';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent">
      <StarField />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="relative py-8 border-t border-white/10 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2025 Code Astronaut. Crafted with ☕ caffeine, 💻 code, and ✨ cosmic vibes.
          </p>
          <p className="text-white/40 text-sm mt-2">
            Powered by pure awesomeness since 2025 🚀
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;