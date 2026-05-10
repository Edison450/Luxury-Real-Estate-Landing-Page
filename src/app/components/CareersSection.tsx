import { Users, Target, Heart, Award } from 'lucide-react';

export function CareersSection() {
  const values = [
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'We foster a supportive environment where every team member contributes to our shared success.'
    },
    {
      icon: Target,
      title: 'Excellence Driven',
      description: 'We maintain the highest standards in everything we do, from client service to internal operations.'
    },
    {
      icon: Heart,
      title: 'Client First',
      description: 'Our clients\' satisfaction and trust are at the heart of every decision we make.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We embrace new ideas and technologies to deliver exceptional real estate experiences.'
    }
  ];

  return (
    <section id="careers" className="py-32 px-8 lg:px-24 bg-soft-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-20 text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-6" style={{ color: '#D4AF37' }}>
            Join Our Team
          </p>
          <h2 className="text-5xl lg:text-6xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Careers at Elite Estate
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Be part of a team that sets the standard for luxury real estate excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
              >
                <value.icon
                  className="w-10 h-10"
                  style={{ color: '#D4AF37', strokeWidth: 1.5 }}
                />
              </div>
              <h3 className="text-xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-70">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg mb-8 opacity-70">
            Interested in joining our team? Send your resume to careers@eliteestate.com
          </p>
          <button
            className="px-12 py-5 rounded-[4px] transition-all duration-300 hover:scale-[1.02]"
            style={{ backgroundColor: '#D4AF37', color: '#2F2F2F' }}
          >
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
}