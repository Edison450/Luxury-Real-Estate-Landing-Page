import { Shield, Search, Handshake, Key } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: 'Property Acquisition',
      description: 'Comprehensive market analysis and exclusive property sourcing for discerning buyers seeking exceptional opportunities.'
    },
    {
      icon: Shield,
      title: 'Due Diligence',
      description: 'Thorough legal, financial, and structural verification ensuring complete transparency and peace of mind.'
    },
    {
      icon: Handshake,
      title: 'Negotiation & Closing',
      description: 'Expert negotiation strategies and seamless transaction management from offer to completion.'
    },
    {
      icon: Key,
      title: 'Property Management',
      description: 'Ongoing maintenance and management services for owners requiring white-glove property care.'
    }
  ];

  return (
    <section id="services" className="py-32 px-8 lg:px-24 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-20 text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-6" style={{ color: '#D4AF37' }}>
            Our Services
          </p>
          <h2 className="text-5xl lg:text-6xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Comprehensive Solutions
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            From acquisition to management, we provide end-to-end luxury real estate services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
              >
                <service.icon
                  className="w-10 h-10"
                  style={{ color: '#D4AF37', strokeWidth: 1.5 }}
                />
              </div>
              <h3 className="text-xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}