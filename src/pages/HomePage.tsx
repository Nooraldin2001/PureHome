import React from 'react';
import HeroSection from '../components/HeroSection';
import PartnersSection from '../components/PartnersSection';
import PropertyListingsSection from '../components/PropertyListingsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import NeighborhoodSection from '../components/NeighborhoodSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import MortgageCalculator from '../components/MortgageCalculator';
import BlogSection from '../components/BlogSection';

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