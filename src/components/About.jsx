import React from 'react';

const About = () => {
  return (
    <section className="bg-purple-50 py-16 px-4 md:px-8 lg:py-24 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
          Who We Are: Leading the Future of AI Content Solutions
        </h2>
        <p className="text-lg md:text-xl text-black mb-6">
          At Ganaxy.ai, we’re committed to ensuring the authenticity of digital content while preparing individuals for a rapidly evolving AI-driven world. Our mission is simple: to empower businesses, creators, and learners with tools that <span className="text-pink-600 font-semibold">detect</span>, <span className="text-pink-600 font-semibold">enhance</span>, and <span className="text-pink-600 font-semibold">humanize AI content</span>. We believe in transparency, innovation, and fostering skills for the future of work.
        </p>

        {/* Responsive Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Mission Column */}
          <div className="bg-pink-100 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-pink-800 mb-4">Our Mission</h3>
            <p className="text-black">
              To safeguard content integrity with cutting-edge AI detection, humanization, and personalized learning paths.
            </p>
          </div>

          {/* Values Column */}
          <div className="bg-pink-100 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-pink-800 mb-4">Our Values</h3>
            <p className='text-black'>
              Transparency, technological advancement, and empowering individuals through AI education.
            </p>
          </div>
        </div>

        <p className="text-lg md:text-xl text-black mt-8 mb-8">
          Beyond content detection, we offer{' '}
          <span className="text-pink-600 font-semibold">AI-powered learning paths</span> tailored to trending industries, helping people acquire the skills needed for high-demand jobs in the AI age.
        </p>
        
        <p className="text-xl font-semibold text-purple-900 mb-8">
          Shape the Future of Content and Learning with Us.
        </p>

        {/* Centered Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded shadow-md transition duration-300">
            Sign Up
          </button>
          <button className="bg-black hover:bg-purple-800 text-white py-2 px-6 rounded shadow-md transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
