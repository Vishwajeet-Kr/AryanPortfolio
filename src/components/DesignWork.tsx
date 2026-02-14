import { useState } from 'react';
import { X, ArrowLeft } from 'lucide-react';

const designs = [
  {
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Editorial Layouts',
    category: 'Print Design',
  },
  {
    image: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Infographics',
    category: 'Data Visualization',
  },
  {
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Magazine Spreads',
    category: 'Publication Design',
  },
  {
    image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Brand Identity',
    category: 'Visual Systems',
  },
  {
    image: 'https://images.pexels.com/photos/4050314/pexels-photo-4050314.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Digital Publications',
    category: 'Interactive Design',
  },
  {
    image: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Motion Graphics',
    category: 'Animation',
  },
];

interface DesignWorkProps {
  onClose?: () => void;
}

export default function DesignWork({ onClose }: DesignWorkProps) {
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null);

  return (
    <section className={onClose ? "min-h-screen bg-[#0f0f0f] relative overflow-hidden" : "py-32 bg-[#0f0f0f] relative overflow-hidden"}>
      {onClose && (
        <button
          onClick={onClose}
          className="fixed top-8 left-8 z-50 flex items-center gap-2 text-[#e8dfd3] hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </button>
      )}

      <div className={onClose ? "py-32 max-w-7xl mx-auto px-6" : "max-w-7xl mx-auto px-6"}>
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#e8dfd3] mb-4">
            Design Work
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#a89f94] to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedDesign(index)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500"></div>

              <div className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedDesign !== null && (
        <>
          <div
            className="fixed inset-0 bg-black/0 z-40 transition-colors duration-500"
            onClick={() => setSelectedDesign(null)}
            style={{
              animation: 'fadeInDark 0.5s ease-out forwards',
            }}
          ></div>

          <div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedDesign(null);
            }}
          >
            <button
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-all duration-300 z-50 hover:scale-110"
              onClick={() => setSelectedDesign(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <div
              className="w-full max-w-4xl"
              style={{
                animation: 'modalEnter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
              }}
            >
              <img
                src={designs[selectedDesign].image}
                alt={designs[selectedDesign].title}
                className="w-full rounded-xl shadow-2xl"
              />

              <div className="mt-8 text-center">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-[#e8dfd3]/20 backdrop-blur-sm text-[#e8dfd3] text-sm rounded-full border border-[#e8dfd3]/30">
                    {designs[selectedDesign].category}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[#e8dfd3]">
                  {designs[selectedDesign].title}
                </h3>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
