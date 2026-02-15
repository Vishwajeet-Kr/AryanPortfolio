import { motion } from "framer-motion";
import { JSX } from "react";

type SoftwareCategory = {
  category: string;
  tools: string[];
};

const softwareData: SoftwareCategory[] = [
  {
    category: "Video Production",
    tools: ["DaVinci Resolve", "Adobe After Effects"],
  },
  {
    category: "Design & Visuals",
    tools: ["Adobe Photoshop"],
  },
  {
    category: "Newsroom Systems",
    tools: ["iNews", "Octopus Software"],
  },
];

export default function SoftwareSection(): JSX.Element {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text">
            Tools & Software
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Professional tools used for video production, design and newsroom management.
          </p>
        </div>

        {/* Software Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {softwareData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">
                {section.category}
              </h3>

              <ul className="space-y-3">
                {section.tools.map((tool, i) => (
                  <li
                    key={i}
                    className="text-gray-300 hover:text-cyber-cyan transition duration-200"
                  >
                    • {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ------------------------------------------------------------------
// type SoftwareCategory = {
//   category: string;
//   tools: string[];
// };

// const softwareData: SoftwareCategory[] = [
//   {
//     category: "Video Production",
//     tools: ["DaVinci Resolve", "Adobe After Effects"],
//   },
//   {
//     category: "Design & Visuals",
//     tools: ["Adobe Photoshop"],
//   },
//   {
//     category: "Newsroom Systems",
//     tools: ["iNews", "Octopus Software"],
//   },
// ];

// export default function SoftwareSection(): JSX.Element {
//   return (
//     <section className="py-20 section-bg">
//       <div className="max-w-6xl mx-auto px-6">
        
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold accent-text">
//             Tools & Software
//           </h2>
//           <p className="mt-4 max-w-2xl mx-auto text-gray-300">
//             Professional tools used for video production, design, and newsroom management.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-10">
//           {softwareData.map((section, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="card-bg p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
//             >
//               <h3 className="text-xl font-semibold mb-6 text-white">
//                 {section.category}
//               </h3>

//               <ul className="space-y-3">
//                 {section.tools.map((tool, i) => (
//                   <li
//                     key={i}
//                     className="text-gray-300 hover:text-[var(--accent-color)] transition duration-200"
//                   >
//                     • {tool}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
