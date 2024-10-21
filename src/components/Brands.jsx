import React from 'react';
import { motion } from 'framer-motion';
import { FaClock } from 'react-icons/fa'; // Importing the clock icon from react-icons
import braintrustLogo from '../assets/braintrustlogo.jpg'; // Replace with your actual logo path
import fatJoeLogo from '../assets/fatjoelogo.jpg'; // Replace with your actual logo path
import labelboxLogo from '../assets/labelboxlogo.jpg'; // Replace with your actual logo path
import scaleLogo from '../assets/scalelogo.jpg'; // Replace with your actual logo path

const TrustedByBrands = () => {
  // Moving animation variants
  const logoVariant = {
    move: {
      x: [0, 10, 0], // Move to the right and back
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4 md:px-8 lg:py-24 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-6">
          Trusted by Leading Brands
        </h2>
        <div className="flex flex-wrap justify-center space-x-8 mb-12">
          {/* Partner Logos with moving effect */}
          <motion.img
            src={braintrustLogo}
            alt="Braintrust Logo"
            className="h-12 w-auto md:h-16 lg:h-20"
            variants={logoVariant}
            animate="move"
          />
          <motion.img
            src={fatJoeLogo}
            alt="FatJoe Logo"
            className="h-12 w-auto md:h-16 lg:h-20"
            variants={logoVariant}
            animate="move"
          />
          <motion.img
            src={labelboxLogo}
            alt="Labelbox Logo"
            className="h-12 w-auto md:h-16 lg:h-20"
            variants={logoVariant}
            animate="move"
          />
          <motion.img
            src={scaleLogo}
            alt="Scale Logo"
            className="h-12 w-auto md:h-16 lg:h-20"
            variants={logoVariant}
            animate="move"
          />
        </div>
        <p className="text-lg md:text-xl text-purple-800 mb-4">
          Join countless satisfied clients benefiting from our services!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mb-8">
          {/* Success Rate Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 mx-4 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-purple-900 mb-2">Success Rate:</h3>
            <p className="text-lg text-pink-700 mb-2">98% accuracy in AI detection.</p>
            <div className="h-2 bg-gray-200 rounded">
              <div className="h-full bg-pink-600 rounded" style={{ width: '98%' }}></div>
            </div>
          </div>

          {/* Fast Turnaround Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 mx-4">
            <h3 className="text-xl font-semibold text-purple-900 mb-2 flex items-center">
              <FaClock className="text-pink-600 mr-2" /> Fast Turnaround:
            </h3>
            <p className="text-lg text-pink-700 mb-2">Results delivered in under 5 minutes.</p>
            <div className="h-2 bg-gray-200 rounded">
              <div className="h-full bg-pink-600 rounded" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
        <p className="text-lg md:text-xl text-purple-800 mb-6">
          Experience the Difference with Ganaxy.ai!
        </p>
        <div className="flex justify-center">
          <motion.button
            className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TrustedByBrands;
