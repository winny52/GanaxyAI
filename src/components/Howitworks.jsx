import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUpload, FaSearch, FaFileAlt, FaMagic } from 'react-icons/fa'; // Font Awesome icons
import step1Image from '../assets/Step1Image.jpg';
import step2Image from '../assets/Step2Image.jpg';
import step3Image from '../assets/Step3Image.jpg';
import step4Image from '../assets/Step4Image.jpg';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <FaUpload className="text-purple-900 text-6xl" />,
      title: 'Upload Your Content',
      description: 'Easily submit your text for analysis.',
      detailedDescription: 'Upload your files quickly and securely for our advanced AI analysis.',
      image: step1Image,
    },
    {
      icon: <FaSearch className="text-purple-900 text-6xl" />,
      title: 'AI Detection',
      description: 'Our advanced algorithm scans and identifies AI-generated content.',
      detailedDescription: 'Our AI scans your content to detect authenticity and highlight generated sections.',
      image: step2Image,
    },
    {
      icon: <FaFileAlt className="text-purple-900 text-6xl" />,
      title: 'Review Results',
      description: 'Receive a detailed report highlighting authenticity and areas for improvement.',
      detailedDescription: 'Get a comprehensive report with insights and suggestions for improvement.',
      image: step3Image,
    },
    {
      icon: <FaMagic className="text-purple-900 text-6xl" />,
      title: 'Enhance Your Content',
      description: 'Use our tools to humanize your text or access learning paths.',
      detailedDescription: 'Enhance your content with tools designed to refine and personalize your work.',
      image: step4Image,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-10 lg:py-32 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-12">
          How It Works: Simple Steps to Authenticity
        </h2>
        <p className="text-xl md:text-2xl text-gray-800 mb-16">
          Follow these simple steps to ensure the integrity of your content:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative group flex flex-col items-center text-center p-6 border border-gray-300 rounded-xl shadow-lg transition-all duration-300 ease-in-out bg-white ${
                activeStep === index ? 'scale-105' : 'scale-100'
              }`}
              style={{ minHeight: '350px' }} // Set a minimum height for consistency
              animate={{ opacity: activeStep === index ? 1 : 0.8 }}
            >
              {/* Shows icon, title, and short description initially */}
              <div className="flex flex-col items-center justify-center space-y-4">
                {step.icon}
                <h3 className="text-xl md:text-2xl font-semibold text-purple-900">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>

              {/* Shows the image and detailed description when hovered */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  activeStep === index ? 'opacity-100' : 'opacity-0'
                } bg-white rounded-xl p-4`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover mb-4 rounded-full"
                />
                <h3 className="text-xl md:text-2xl font-semibold text-purple-900 mb-2">{step.title}</h3>
                <p className="text-lg text-gray-700">{step.detailedDescription}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-xl md:text-2xl text-gray-800 font-semibold mt-10 mb-8">
          Ensure Your Content's Integrity Today!
        </p>
        <div className="flex justify-center">
          <button className="bg-pink-600 hover:bg-purple-700 text-white py-3 px-6 md:px-10 rounded-lg shadow-lg transition-all duration-300">
            Try Our Tool Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
