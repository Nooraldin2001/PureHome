import React from 'react';
import HeroSection from '../components/HeroSection.tsx';
import PartnersSection from '../components/PartnersSection.tsx';
import PropertyListingsSection from '../components/PropertyListingsSection.tsx';
import WhyChooseUsSection from '../components/WhyChooseUsSection.tsx';
import NeighborhoodSection from '../components/NeighborhoodSection.tsx';
import StatsSection from '../components/StatsSection.tsx';
import TestimonialsSection from '../components/TestimonialsSection.tsx';
import MortgageCalculator from '../components/MortgageCalculator.tsx';
import BlogSection from '../components/BlogSection.tsx';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <PropertyListingsSection />
      <WhyChooseUsSection />
      <NeighborhoodSection />
      <StatsSection />
      <TestimonialsSection />
      <MortgageCalculator />
      <BlogSection />
    </>
  );
};

export default HomePage; 