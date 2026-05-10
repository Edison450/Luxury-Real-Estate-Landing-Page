import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Bed, Bath, Square, Calendar } from 'lucide-react';

interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
  height: string;
  description?: string;
  features?: string[];
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  yearBuilt?: number;
}

const properties: Property[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617596225496-1d9da33a144b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3NDI0NDMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Penthouse Suite',
    location: 'Manhattan, New York',
    price: '$12.5M',
    height: '500px',
    description: 'This extraordinary penthouse offers panoramic views of the Manhattan skyline. Featuring floor-to-ceiling windows, premium finishes, and unparalleled luxury amenities.',
    features: ['Private Elevator', 'Terrace', 'Concierge Service', 'Valet Parking'],
    bedrooms: 3,
    bathrooms: 3,
    area: '3,200 sq ft',
    yearBuilt: 2018
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzc0Mjk4NzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Sky Residence',
    location: 'Dubai Marina',
    price: '$8.9M',
    height: '650px',
    description: 'A masterpiece of modern architecture overlooking the stunning Dubai Marina. This residence combines cutting-edge design with world-class amenities.',
    features: ['Marina View', 'Smart Home', 'Infinity Pool', 'Private Dock'],
    bedrooms: 4,
    bathrooms: 4,
    area: '4,500 sq ft',
    yearBuilt: 2020
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1757439402115-c3c496fe81ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMGV4dGVyaW9yJTIwcG9vbHxlbnwxfHx8fDE3NzQyNzI1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Mediterranean Villa',
    location: 'Côte d\'Azur, France',
    price: '$18.2M',
    height: '600px',
    description: 'Nestled in the hills of the French Riviera, this villa offers breathtaking Mediterranean views and timeless elegance.',
    features: ['Ocean View', 'Wine Cellar', 'Helipad', 'Guest House'],
    bedrooms: 6,
    bathrooms: 7,
    area: '8,000 sq ft',
    yearBuilt: 2015
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzc0MjcxODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Master Suite Retreat',
    location: 'Beverly Hills, CA',
    price: '$15.7M',
    height: '550px',
    description: 'A sanctuary of luxury in the heart of Beverly Hills, featuring contemporary design and unparalleled privacy.',
    features: ['Gated Estate', 'Home Theater', 'Spa Bathroom', 'Landscaped Gardens'],
    bedrooms: 5,
    bathrooms: 6,
    area: '6,800 sq ft',
    yearBuilt: 2019
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1771218829838-f30edb7e0263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbSUyMGNoYW5kZWxpZXJ8ZW58MXx8fHwxNzc0MzAwOTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Grand Estate',
    location: 'London, Mayfair',
    price: '$22.4M',
    height: '700px',
    description: 'A magnificent Georgian estate in the prestigious Mayfair district, combining historic charm with modern luxury.',
    features: ['Period Features', 'Mezzanine Library', 'Staff Quarters', 'Garden'],
    bedrooms: 7,
    bathrooms: 8,
    area: '10,000 sq ft',
    yearBuilt: 1820
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1760072513457-651955c7074d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaXNsYW5kJTIwZGVzaWdufGVufDF8fHx8MTc3NDMwMDk0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Modern Residence',
    location: 'Singapore',
    price: '$9.8M',
    height: '480px',
    description: 'A contemporary masterpiece in Singapore\'s exclusive districts, offering sophisticated urban living with skyline views.',
    features: ['City Views', 'Rooftop Terrace', 'Modern Kitchen', 'Concierge'],
    bedrooms: 4,
    bathrooms: 3,
    area: '3,800 sq ft',
    yearBuilt: 2021
  }
];

export function PropertyPage() {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === parseInt(id || '0'));

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Property Not Found
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[4px] transition-all duration-300 hover:scale-[1.02]"
            style={{ backgroundColor: '#D4AF37', color: '#2F2F2F' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="px-8 lg:px-24 py-6">
          <div className="max-w-[1800px] mx-auto flex items-center justify-between">
            <Link
              to="/"
              className="text-2xl tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: '#2F2F2F' }}
            >
              Elite Estate
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[4px] transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: '#D4AF37', color: '#2F2F2F' }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${property.image})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-end h-full pb-20 px-8 lg:px-24">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-7xl mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              {property.title}
            </h1>
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-xl text-white">{property.location}</span>
            </div>
            <div className="text-4xl font-bold text-white mb-8">
              {property.price}
            </div>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="px-8 lg:px-24 py-20">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              About This Property
            </h2>
            <p className="text-lg leading-relaxed mb-12 opacity-80">
              {property.description}
            </p>

            {/* Features */}
            <h3 className="text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Key Features
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-12">
              {property.features?.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: '#D4AF37' }}
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[4px] shadow-lg">
              <h3 className="text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Property Details
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5" style={{ color: '#D4AF37' }} />
                    <span>Bedrooms</span>
                  </div>
                  <span className="font-semibold">{property.bedrooms}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5" style={{ color: '#D4AF37' }} />
                    <span>Bathrooms</span>
                  </div>
                  <span className="font-semibold">{property.bathrooms}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Square className="w-5 h-5" style={{ color: '#D4AF37' }} />
                    <span>Area</span>
                  </div>
                  <span className="font-semibold">{property.area}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" style={{ color: '#D4AF37' }} />
                    <span>Year Built</span>
                  </div>
                  <span className="font-semibold">{property.yearBuilt}</span>
                </div>
              </div>

              <button
                className="w-full mt-8 px-8 py-4 rounded-[4px] transition-all duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: '#D4AF37', color: '#2F2F2F' }}
              >
                Schedule Viewing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}