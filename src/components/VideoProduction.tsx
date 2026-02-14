import { useState } from 'react';
import { Play, X, ArrowLeft } from 'lucide-react';

const videos = [
  {
    thumbnail: 'https://images.pexels.com/photos/3965543/pexels-photo-3965543.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Climate Change Documentary',
    description: 'A deep dive into environmental impact',
    duration: '12:35',
  },
  {
    thumbnail: 'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Urban Development Series',
    description: 'Exploring city transformation',
    duration: '8:42',
  },
  {
    thumbnail: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Cultural Stories',
    description: 'Documenting diverse communities',
    duration: '10:18',
  },
  {
    thumbnail: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Political Commentary',
    description: 'Investigating current affairs',
    duration: '6:55',
  },
];

interface VideoProductionProps {
  onClose?: () => void;
}

export default function VideoProduction({ onClose }: VideoProductionProps) {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

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
            Video Production
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#a89f94] to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedVideo(index)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                <div className="opacity-100 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-16 h-16 bg-[#e8dfd3]/90 rounded-full flex items-center justify-center shadow-2xl">
                    <Play className="w-6 h-6 text-[#0f0f0f] ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo !== null && (
        <>
          <div
            className="fixed inset-0 bg-black/0 z-40 transition-colors duration-500"
            onClick={() => setSelectedVideo(null)}
            style={{
              animation: 'fadeInDark 0.5s ease-out forwards',
            }}
          ></div>

          <div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedVideo(null);
            }}
          >
            <button
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-all duration-300 z-50 hover:scale-110"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <div
              className="w-full max-w-4xl"
              style={{
                animation: 'modalEnter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
              }}
            >
              <div className="relative aspect-video bg-black/80 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={videos[selectedVideo].thumbnail}
                  alt={videos[selectedVideo].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-[#e8dfd3]/90 rounded-full flex items-center justify-center shadow-2xl">
                    <Play className="w-10 h-10 text-[#0f0f0f] ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <h3 className="font-serif text-2xl text-[#e8dfd3] mb-3">
                  {videos[selectedVideo].title}
                </h3>
                <p className="text-[#a89f94] text-lg">
                  {videos[selectedVideo].description}
                </p>
                <p className="text-[#a89f94]/60 text-sm mt-3">
                  Duration: {videos[selectedVideo].duration}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
