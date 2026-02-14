import { useState } from 'react';
import { X, ArrowLeft } from 'lucide-react';

const photos = [
  { url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Urban Narratives' },
  { url: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Street Stories' },
  { url: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Documentary Series' },
  { url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'City Lights' },
  { url: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Portrait Study' },
  { url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Editorial Work' },
];

interface PhotographyProps {
  onClose?: () => void;
}

export default function Photography({ onClose }: PhotographyProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
            Photography
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#a89f94] to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(index)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500"></div>

              <div className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <>
          <div
            className="fixed inset-0 bg-black/0 z-40 transition-colors duration-500 animate-fade-in-dark"
            onClick={() => setSelectedImage(null)}
            style={{
              background: 'rgba(0, 0, 0, 0)',
              animation: 'fadeInDark 0.5s ease-out forwards',
            }}
          ></div>

          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedImage(null);
            }}
          >
            <button
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-all duration-300 z-50 hover:scale-110"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{
                animation: 'modalEnter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
              }}
            >
              <img
                src={photos[selectedImage].url}
                alt={photos[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-xl"
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
}
