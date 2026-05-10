import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Exceptional. Every detail was meticulously handled with the utmost professionalism. They didn't just find us a property; they found us our sanctuary.",
    author: "Victoria Ashford",
    title: "CEO",
    company: "Ashford Capital"
  },
  {
    id: 2,
    quote: "The level of discretion and expertise provided was beyond compare. They understood our vision and delivered a residence that exceeded every expectation.",
    author: "Marcus Beaumont",
    title: "Founder",
    company: "Beaumont Ventures"
  },
  {
    id: 3,
    quote: "Working with this team was a transformative experience. Their dedication to perfection and eye for timeless design is simply unmatched in the industry.",
    author: "Isabella Chen",
    title: "Principal",
    company: "Chen International"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-32 px-8 lg:px-24 bg-champagne">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-6" style={{ color: '#D4AF37' }}>
            Testimonials
          </p>
          <h2 className="text-5xl lg:text-6xl mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#2F2F2F' }}>
            Client Excellence
          </h2>
        </div>

        <div className="relative">
          {/* Quote Icon */}
          <Quote 
            className="w-20 h-20 mb-8 mx-auto opacity-20" 
            style={{ color: '#D4AF37' }}
          />

          {/* Testimonial Content */}
          <div 
            className="transition-opacity duration-500"
            style={{ opacity: isTransitioning ? 0 : 1 }}
          >
            <blockquote className="text-3xl lg:text-4xl text-center mb-12 leading-relaxed" 
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                color: '#2F2F2F'
              }}
            >
              "{currentTestimonial.quote}"
            </blockquote>

            <div className="text-center">
              <p className="text-xl mb-1" style={{ color: '#2F2F2F' }}>
                {currentTestimonial.author}
              </p>
              <p className="text-sm opacity-70" style={{ color: '#2F2F2F' }}>
                {currentTestimonial.title}, {currentTestimonial.company}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-16">
            <button
              onClick={handlePrev}
              disabled={isTransitioning}
              className="p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50"
              style={{ backgroundColor: '#D4AF37' }}
            >
              <ChevronLeft className="w-6 h-6" style={{ color: '#2F2F2F' }} />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentIndex(index);
                    }
                  }}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: index === currentIndex ? '#D4AF37' : '#2F2F2F',
                    opacity: index === currentIndex ? 1 : 0.3
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50"
              style={{ backgroundColor: '#D4AF37' }}
            >
              <ChevronRight className="w-6 h-6" style={{ color: '#2F2F2F' }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
