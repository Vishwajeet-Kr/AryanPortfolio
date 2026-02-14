import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Camera, Video, Scissors, Palette, FileText, X } from "lucide-react";

type SkillItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: any;
  details: string;
  driveLink?: string; // Optional field for Google Drive link
};

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedItem, setSelectedItem] = useState<SkillItem | null>(null);

  const expertise: SkillItem[] = [
    {
      id: 1,
      title: "Photography",
      description: "Capturing Real Frames Through Lense",
      image:"photography.jpeg",
      icon: Camera,
      details:
        "Focused on editorial and documentary photography that captures authentic human emotions, real environments and powerful storytelling moments.",
      driveLink: "https://drive.google.com/drive/folders/1Ta8wA97TBMt9Pbm_ppppDSvxuLrgN-zw?usp=drive_link",
    },
    {
      id: 2,
      title: "Edited Videos",
      description: "Art is in what you Leave out",
      image:"videography.jpeg",
      icon: Video,
      details:
        "Experienced in directing visual narratives with cinematic framing, lighting control and structured storytelling.",
        driveLink:"https://drive.google.com/drive/folders/1u1NqIT3hmE2OK0_Q0ex3PelYsjyQfL6f?usp=drive_link"
    },
    {
      id: 3,
      title: "Production",
      description: "I Believe in Scripted by Life, Created by Me",
      image:"production.jpeg",
      icon: Scissors,
      details:
        "Skilled in pacing, transitions, color grading and post-production workflows that enhance emotional impact.",
        driveLink: "http://www.youtube.com/@NARRATIVECINEMA-y8p",
    },
    {
      id: 4,
      title: "Designing",
      description: "Way of Giving shape to the Ideas",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      icon: Palette,
      details:
        "Clean and minimal visual communication through digital and print mediums with a strong aesthetic sense.",
        driveLink: "https://drive.google.com/drive/folders/1SKtXxlG-9imXPkFOXhDlJCI1uw35rEFO?usp=drive_link",
    },
    {
      id: 5,
      title: "Journalism",
      description: "Hands-on experience in the newsroom environment. ",
      image:
        "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg",
      icon: FileText,
      details:
        "Research-driven storytelling with investigative depth, narrative structure and compelling audience engagement.",
      driveLink: "https://drive.google.com/drive/folders/1l9CTJ68_KGpvSVMPPGnWJdRD3KHEQzsq?usp=drive_link",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} id="expertise" className="py-20 px-6 relative">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-space font-bold text-center mb-4"
          variants={itemVariants}
        >
          My <span className="gradient-text">Expertise</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-16"
          variants={itemVariants}
        >
          CREATIVE DOMAINS I SPECIALIZE IN
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((item) => (
            <motion.div
              key={item.id}
              className="glass rounded-2xl overflow-hidden group cursor-pointer relative"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedItem(item)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-navy to-transparent opacity-70"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-space font-semibold mb-2 group-hover:text-cyber-cyan transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 mb-4">{item.description}</p>

                <div className="flex items-center gap-2 text-soft-violet">
                  <item.icon className="w-4 h-4" />
                  <span>Explore</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                View Details
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="glass rounded-2xl max-w-3xl w-full p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-space font-bold gradient-text">
                  {selectedItem.title}
                </h3>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-gray-300">{selectedItem.details}</p>
              {selectedItem.driveLink && (
              <div className="mt-6">
                <a
                  href={selectedItem.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/20 transition-all duration-300"
                >
                  View Gallery
                </a>
              </div>
            )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Expertise;
