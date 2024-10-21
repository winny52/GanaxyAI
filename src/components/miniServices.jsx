import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUserEdit, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const MiniServices = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-purple-200 via-pink-300 to-pink-400 py-16 px-4 md:px-8 lg:py-24 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
          Unlock the Power of AI with Our Services
        </h2>
        <p className="text-lg md:text-xl text-gray-800 mb-8">
          At Ganaxy.ai, we offer cutting-edge solutions to enhance your content strategy:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-pink-600 rounded-full text-white mb-2">
              <FontAwesomeIcon icon={faEye} size="xl" />
            </div>
            <p className="text-gray-700">
              <strong className="text-purple-900">AI Content Detection:</strong>
              <span className="block"> Accurately identify AI-generated text.</span>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-pink-600 rounded-full text-white mb-2">
              <FontAwesomeIcon icon={faUserEdit} size="xl" />
            </div>
            <p className="text-gray-700">
              <strong className="text-purple-900">Automatic AI Humanization:</strong>
              <span className="block"> Transform AI text into relatable content.</span>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-pink-600 rounded-full text-white mb-2">
              <FontAwesomeIcon icon={faGraduationCap} size="xl" />
            </div>
            <p className="text-gray-700">
              <strong className="text-purple-900">AI-Powered Learning Paths:</strong>
              <span className="block"> Gain skills for tomorrow’s jobs.</span>
            </p>
          </div>
        </div>
        <p className="text-lg  mt-10 md:text-xl text-gray-800 font-semibold mt-6 mb-4">
          Elevate Your Content and Learning Experience!
        </p>
        <div className="flex justify-center mt-10 space-x-4">
          <button className="bg-pink-600 hover:bg-purple-700 text-white py-2 px-6 rounded shadow-lg transition-all duration-300">
            Explore Our Services
          </button>
          <button className="border-2 border-pink-600 hover:bg-black text-white hover:text-white py-2 px-6 rounded transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default MiniServices;
