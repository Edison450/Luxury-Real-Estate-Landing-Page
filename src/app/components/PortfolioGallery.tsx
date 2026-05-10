import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
  height: string;
}

const properties: Property[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617596225496-1d9da33a144b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3NDI0NDMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Penthouse Suite',
    location: 'Manhattan, New York',
    price: '$12.5M',
    height: '500px'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzc0Mjk4NzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Sky Residence',
    location: 'Dubai Marina',
    price: '$8.9M',
    height: '650px'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1757439402115-c3c496fe81ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMGV4dGVyaW9yJTIwcG9vbHxlbnwxfHx8fDE3NzQyNzI1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Mediterranean Villa',
    location: 'Côte d\'Azur, France',
    price: '$18.2M',
    height: '600px'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzc0MjcxODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Master Suite Retreat',
    location: 'Beverly Hills, CA',
    price: '$15.7M',
    height: '550px'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1771218829838-f30edb7e0263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbSUyMGNoYW5kZWxpZXJ8ZW58MXx8fHwxNzc0MzAwOTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Grand Estate',
    location: 'London, Mayfair',
    price: '$22.4M',
    height: '700px'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1760072513457-651955c7074d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaXNsYW5kJTIwZGVzaWdufGVufDF8fHx8MTc3NDMwMDk0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Modern Residence',
    location: 'Singapore',
    price: '$9.8M',
    height: '480px'
  }
];

export function PortfolioGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-32 px-8 lg:px-24 bg-soft-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-20 text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-6" style={{ color: '#D4AF37' }}>
            Portfolio
          </p>
          <h2 className="text-5xl lg:text-6xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Featured Properties
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Discover our curated collection of extraordinary estates and residences
          </p>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3 }}>
          <Masonry gutter="24px">
            {properties.map((property) => (
              <div
                key={property.id}
                className="relative overflow-hidden rounded-[4px] cursor-pointer group"
                style={{ height: property.height }}
                onMouseEnter={() => setHoveredId(property.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => navigate(`/property/${property.id}`)}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300"
                  style={{ opacity: hoveredId === property.id ? 1 : 0.6 }}
                />
                <div 
                  className="absolute bottom-0 left-0 right-0 p-8 text-white transition-transform duration-300"
                  style={{ 
                    transform: hoveredId === property.id ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <p className="text-sm tracking-[0.2em] uppercase mb-2 opacity-90">
                    {property.location}
                  </p>
                  <h3 className="text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {property.title}
                  </h3>
                  <p 
                    className="text-3xl tracking-wide"
                    style={{ 
                      color: '#D4AF37',
                      opacity: hoveredId === property.id ? 1 : 0,
                      transition: 'opacity 0.3s'
                    }}
                  >
                    {property.price}
                  </p>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
