import { useRef, useState, useEffect } from 'react';
import Hero from './components/Hero';
import Photography from './components/Photography';
import VideoProduction from './components/VideoProduction';
import DesignWork from './components/DesignWork';
import Journalism from './components/Journalism';
import Contact from './components/Contact';
import Expertise from './components/Expertise';

type ActiveSection = null | 'photography' | 'video' | 'design';

function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const r = 10;
  const g = 25;
  const b = 60;
  const midR = r + 3;
  const midG = g + 2;
  const midB = b + 2;
  const bgColor = `rgb(${r},${g},${b})`;
  const bgColorMid = `rgb(${midR},${midG},${midB})`;

  return (
    <div
        className="min-h-screen overflow-x-hidden transition-colors duration-500"
        style={{
          background: `linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)`,
        }}
      >
      {activeSection === null ? (
        <>
          <Hero onNavigate={setActiveSection} onContactClick={handleScrollToContact} />
          <Expertise />
          <Journalism />
          <div ref={contactRef}>
            <Contact />
          </div>

          <footer className="py-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-[#a89f94] text-sm font-light">
                © 2024 Alex Morrison. All rights reserved.
              </p>
            </div>
          </footer>
        </>
      ) : (
        <>
          {activeSection === 'photography' && (
            <Photography onClose={() => setActiveSection(null)} />
          )}
          {activeSection === 'video' && (
            <VideoProduction onClose={() => setActiveSection(null)} />
          )}
          {activeSection === 'design' && (
            <DesignWork onClose={() => setActiveSection(null)} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
