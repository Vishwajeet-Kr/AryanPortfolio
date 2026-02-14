import { Briefcase, Award } from 'lucide-react';

const experiences = [
  {
    role: 'Editorial Intern',
    company: 'NDTV',
    period: 'June 2025 - Nov 2025',
    description:
      'I gained hands-on experience in the newsroom environment.',
    type: 'past',
  },
  {
    role: 'Trainee Input Editor',
    company: 'Republic World',
    period: 'Nov 2025 - Dec 2025',
    description:
      'Assisted the input desk with fast-paced editorial decision-making during breaking news situations and stories research',
    type: 'past',
  },
];

export default function Journalism() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
            Journalism Experience
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent mx-auto"></div>
              <p className="max-w-2xl mx-auto text-gray-300 text-lg italic">
                “My newsroom experience at NDTV and Republic TV shaped my understanding of journalism beyond theory.”
              </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="glass p-8 rounded-2xl border border-cyber-cyan/20">
              <div className="flex items-center gap-4 mb-4">
                {exp.type === 'current' ? (
                  <Briefcase className="w-6 h-6 text-cyber-cyan" />
                ) : (
                  <Award className="w-6 h-6 text-cyber-cyan/70" />
                )}
                <div>
                  <h3 className="text-xl text-white">{exp.role}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                </div>
              </div>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
