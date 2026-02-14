import { useState } from 'react';
import { Mail, Linkedin, Instagram, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const subject = `Portfolio Contact from ${formData.name}`;

  const mailtoLink = `mailto:duobrothers4003@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(formData.message)}`;

  window.location.href = mailtoLink;
};

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-6">
            Let's Collaborate
          </h2>
          <p className="text-gray-300 text-lg">
            Open to full-time roles, freelance projects and media collaborations.
          </p>
        </div>

        <div className="glass p-8 rounded-2xl border border-cyber-cyan/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Your Name"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Your Email"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Your Message"
              rows={5}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white"
              required
            />

            <button
              type="submit"
              className="px-8 py-4 bg-cyber-cyan text-space-navy rounded-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href="mailto:duobrothers4003@gmail.com"
              className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyber-cyan transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/aryan-singh-5b32a4343"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyber-cyan transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://www.instagram.com/aryan_singh1711?igsh=bjlwYWsxMmZlc2lh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyber-cyan transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
