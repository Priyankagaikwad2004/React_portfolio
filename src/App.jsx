// App.jsx - Mobile optimized version
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/contact';
import Footer from './components/footer';
import FloatingParticles from './components/FloatingParticles';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkIsMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add resize listener for responsiveness
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Floating Particles Background */}
      <FloatingParticles isMobile={isMobile} />

      {/* Main Content */}
      <div className="relative z-10">
        <Header isMobile={isMobile} />
        <Hero isMobile={isMobile} />
        <About />
        <Skills />
        <Projects isMobile={isMobile} />
        <Contact />
        <Footer />
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      {!isMobile && (
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
          <div className="flex flex-col items-center gap-4">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="w-3 h-3 rounded-full bg-white/30 hover:bg-cyan-400 transition-all duration-300"
                data-section={section}
              />
            ))}
          </div>
        </div>
      )}

      {/* Mobile Navigation Menu Button */}
      {isMobile && (
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="#home"
            className="w-14 h-14 flex items-center justify-center bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default App;