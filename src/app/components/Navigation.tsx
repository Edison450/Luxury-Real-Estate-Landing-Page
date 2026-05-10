import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Portfolio', 'About', 'Services', 'Contact'];


  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: isScrolled ? 'rgba(253, 251, 247, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(47, 47, 47, 0.1)' : 'none'
      }}
    >
      <div className="px-8 lg:px-24 py-6">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="text-2xl tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: '#2F2F2F' }}
          >
            Elite Estate
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm tracking-wide transition-colors duration-300 relative group"
                  style={{ color: '#2F2F2F' }}
                >
                  {link}
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: '#D4AF37' }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button 
            className="hidden md:block px-8 py-3 rounded-[4px] text-sm tracking-wide transition-all duration-300 hover:scale-[1.02]"
            style={{ backgroundColor: '#D4AF37', color: '#2F2F2F' }}
          >
            Inquire Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            style={{ color: '#2F2F2F' }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden px-8 py-8 border-t"
          style={{ 
            backgroundColor: 'rgba(253, 251, 247, 0.98)',
            borderColor: 'rgba(47, 47, 47, 0.1)'
          }}
        >
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block text-lg"
                  style={{ color: '#2F2F2F' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <button 
                className="w-full px-8 py-3 rounded-[4px] text-sm tracking-wide mt-4"
                style={{ backgroundColor: '#D4AF37', color: '#2F2F2F' }}
              >
                Inquire Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
