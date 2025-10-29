import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default HomePage;
