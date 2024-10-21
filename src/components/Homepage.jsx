import React from 'react';
import '../App.css';
import HeroSection from './Herosection';
import About from './About';
import MiniServices from './miniServices';
import HowItWorks from './Howitworks';
import WhyChooseGanaxy from './Whychooseus';
import ClientSuccessStories from './Testimonials';
import PricingPlans from './Pricing';
import FAQ from './FAQs';
import TrustedByBrands from './Brands';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
        
        <HeroSection />
        <About />
        <MiniServices />
        <HowItWorks />
        <WhyChooseGanaxy />
        <TrustedByBrands/>
        <ClientSuccessStories />
        <PricingPlans />
        <FAQ />
          </div>
  );
}

export default Home;
