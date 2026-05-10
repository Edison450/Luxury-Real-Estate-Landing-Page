import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { ExperienceSection } from './components/ExperienceSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CareersSection } from './components/CareersSection';
import { Footer } from './components/Footer';
import { PropertyPage } from './components/PropertyPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen">
          <Navigation />
          <HeroSection />
          <PortfolioGallery />
          <ExperienceSection />
          <ServicesSection />
          <TestimonialsSection />
          <CareersSection />
          <Footer />
        </div>
      } />
      <Route path="/property/:id" element={<PropertyPage />} />
    </Routes>
  );
}
