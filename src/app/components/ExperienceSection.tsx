import { Award, Briefcase, Users, Home } from 'lucide-react';

export function ExperienceSection() {
  const features = [
    { icon: Award, label: 'Award-Winning Design', value: '150+' },
    { icon: Briefcase, label: 'Years of Excellence', value: '77' },
    { icon: Users, label: 'Elite Clientele', value: '2,400+' },
    { icon: Home, label: 'Properties Curated', value: '5,800+' }
  ];

  return (
    <section id="about" className="relative py-40 px-8 lg:px-24 min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1723108263618-5364ae353220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbWFyYmxlfGVufDF8fHx8MTc3NDIzMTQwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
        }}
      />
      <div className="absolute inset-0 bg-charcoal/60" />

      {/* Glassmorphic Card */}
      <div className="relative max-w-5xl mx-auto w-full">
        <div 
          className="backdrop-blur-xl rounded-[4px] p-16 shadow-2xl"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
          }}
        >
          <p className="text-sm tracking-[0.3em] uppercase mb-6 text-center" style={{ color: '#D4AF37' }}>
            The Experience
          </p>
          <h2 className="text-5xl lg:text-6xl mb-8 text-center text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            White-Glove Service
          </h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
            From initial consultation to final acquisition, our dedicated team provides an unparalleled level of discretion, expertise, and personalized attention that defines luxury real estate.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon 
                  className="w-10 h-10 mx-auto mb-4" 
                  style={{ color: '#D4AF37', strokeWidth: 1.5 }}
                />
                <p className="text-4xl mb-2 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {feature.value}
                </p>
                <p className="text-sm tracking-wide" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
