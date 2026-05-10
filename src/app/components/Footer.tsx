import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer id="contact" className="bg-charcoal text-white">
      {/* Main Footer Content */}
      <div className="px-8 lg:px-24 py-24">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand Column */}
          <div>
            <h3 className="text-3xl mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#D4AF37' }}>
              Elite Estate
            </h3>
            <p className="text-sm leading-relaxed opacity-70 mb-6">
              Curating extraordinary living experiences for the world's most discerning clientele since 1947.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
              >
                <Instagram className="w-5 h-5" style={{ color: '#D4AF37' }} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
              >
                <Linkedin className="w-5 h-5" style={{ color: '#D4AF37' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-6 tracking-wide">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Contact', href: '#contact' },
                { name: 'Careers', href: '#careers' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D4AF37' }} />
                <span className="text-sm opacity-70">
                  432 Park Avenue<br />New York, NY 10022
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#D4AF37' }} />
                <span className="text-sm opacity-70">+1 (212) 555-0147</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#D4AF37' }} />
                <span className="text-sm opacity-70">inquiries@eliteestate.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg mb-6 tracking-wide">Newsletter for Investors</h4>
            <p className="text-sm opacity-70 mb-6 leading-relaxed">
              Exclusive market insights and premier property listings delivered monthly.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-[4px] text-sm placeholder:opacity-50 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-[4px] transition-all duration-300 hover:scale-[1.02] text-sm tracking-wide"
                style={{ backgroundColor: '#D4AF37', color: '#2F2F2F' }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        className="px-8 lg:px-24 py-8 border-t"
        style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
      >
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-50">
            © 2026 Elite Estate & Bespoke Interiors. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm opacity-50 hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="text-sm opacity-50 hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
