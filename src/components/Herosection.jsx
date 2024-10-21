import React from 'react';
import heroImage from '../assets/HeroImage.jpg';
const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-purple-100 via-pink-200 to-pink-300 py-16 px-4 md:px-8 lg:py-24 lg:px-16 overflow-hidden">
      {/* Polka Dot Background */}
      <div className="absolute inset-0">
        <div className="polka-dots"></div>
      </div>
      <style jsx>{`
        .polka-dots {
          background-image: radial-gradient(circle, black  10%, transparent 10%);
          background-size: 20px 20px; /* Adjust size of dots and spacing */
          opacity: 0.1; /* Adjust opacity as needed */
          width: 100%;
          height: 100%;
        }
      `}</style>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative z-10">
        <div className="text-center lg:text-left lg:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900">
            Detect AI Content with Unmatched Accuracy
          </h1>
          <p className="text-2xl md:text-xl text-black">
            Instantly spot AI-generated text with Ganaxy.ai – the future of content authenticity detection.
          </p>
          <ul className="space-y-2 text-center mx-auto lg:mx-0 lg:text-left">
            <li className="text-black">
              <strong className="text-pink-600 font-semibold">Industry-Leading AI Detection:</strong> Identify AI-written content in seconds.
            </li>
            <li className="text-black">
              <strong className="text-pink-600 font-semibold">Automatic Humanization <span className="text-purple-800 font-semibold">(Coming Soon):</span> </strong> Convert AI text into human-like writing seamlessly.
            </li>
            <li className="text-black">
              <strong className="text-pink-600 font-semibold">AI Learning Paths <span className="text-purple-800 font-semibold">(Coming Soon):</span> </strong> Access AI-powered career roadmaps for any discipline.
            </li>
          </ul>
          <p className="text-lg md:text-xl text-gray-800 font-semibold mt-4">
            Ensure Content Authenticity, Every Time.
          </p>
          <button className="mt-6 bg-pink-600 hover:bg-purple-700 text-white py-2 px-4 rounded shadow-lg transition-all duration-300">
            Start Detecting Now
          </button>
        </div>
        <div className="mt-10 flex justify-center">
          {/* Display the imported hero image */}
          <img 
            src={heroImage} 
            alt="Hero" 
            className="w-full h-full ml-10 mr-10 object-cover rounded shadow-md lg:h-80" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
