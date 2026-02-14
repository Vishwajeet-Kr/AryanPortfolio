import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

type NavigationCallback = (section: 'photography' | 'video' | 'design') => void;

interface HeroProps {
  onNavigate?: NavigationCallback;
  onContactClick?: () => void;
}

export default function Hero({ onNavigate, onContactClick }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Subtle particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyber-cyan/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6">
        <div
          className={`transform transition-all duration-2000 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <div className="relative inline-block mb-12 mt-12">
            <div className="relative glass p-2 rounded-2xl border border-cyber-cyan/20 shadow-2xl">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-xl overflow-hidden relative group">
                <img
                  src="Aryan.png"
                  alt="Portrait"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>

          <div
            className={`space-y-4 transition-all delay-500 duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-light text-white tracking-tight">
              Aryan Singh
            </h1>
            <p className="text-xl md:text-2xl text-cyber-cyan/80 font-light tracking-wide">
              Filmmaking | DOP | Video editing | Journalism @republic @Ndtv 
            </p>
            <h3 className="text-lg md:text-xl text-white font-light tracking-wide">
              My goal is to collaborate with creative professionals, contribute to impactful projects 
            </h3>
            <h3 className="text-lg md:text-xl text-white font-light tracking-wide">
              and continuously grow my knowledge of the production process.
            </h3>
          </div>

          <div
            className={`flex flex-wrap gap-4 justify-center mt-12 transition-all delay-700 duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <button
              onClick={onContactClick}
              className="px-6 py-3 bg-cyber-cyan text-space-navy font-medium rounded-lg hover:scale-105 transition-all"
            >
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
