import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes
import './index.css';
import './App.css';
import Navbar from './components/Navbar';

import Home from './components/Homepage';
import About from './components/About';
import MiniServices from './components/miniServices';
import HowItWorks from './components/Howitworks';
import WhyChooseGanaxy from './components/Whychooseus';
import ClientSuccessStories from './components/Testimonials';
import PricingPlans from './components/Pricing';
import FAQ from './components/FAQs';
import Footer from './components/Footer';
import AuthForm from './components/Authform';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <div className="flex flex-col w-screen m-0 min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/why-choose-us" element={<WhyChooseGanaxy />} />
            <Route path="/testimonials" element={<ClientSuccessStories />} />
            <Route path="/pricing" element={<PricingPlans />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/get-started" element={<AuthForm />} />

            {/* Add more routes as needed */}
          </Routes>
        </div>
        <Footer /> {/* The footer will always be at the bottom */}
      </div>
    </Router>
  );
}

export default App;
