import React from 'react';
import { motion } from 'framer-motion';
import client1Logo from '../assets/woman1.jpg'; // Replace with your actual client logo paths
import client2Logo from '../assets/man2.jpg';
import client3Logo from '../assets/man.jpg';
import client4Logo from '../assets/woman2.jpg';

const ClientSuccessStories = () => {
  // Animation variants for the testimonials
  const testimonialVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative w-full bg-white py-16 px-4 md:px-8 lg:py-24 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-6">
          Client Success Stories
        </h2>
        <p className="text-lg md:text-xl text-purple-800 mb-12">
          Join our satisfied clients and experience the impact of Ganaxy.ai!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {/* Testimonial 1 */}
          <motion.div
            className="bg-purple-50 shadow-lg p-6 rounded-lg flex flex-col items-center text-left"
            variants={testimonialVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={client1Logo}
              alt="Braintrust Logo"
              className="w-24 h-24 mb-4 rounded-full object-cover border-4 border-pink-500"
            />
            <p className="text-purple-900 mb-2">
              "Ganaxy.ai transformed how we approach content authenticity. Their AI detection tool is a game changer for our editorial team."
            </p>
            <p className="text-sm font-semibold text-pink-700">— Alex R., Head of Content, Braintrust</p>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            className="bg-purple-50 shadow-lg p-6 rounded-lg flex flex-col items-center text-left"
            variants={testimonialVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={client2Logo}
              alt="Scale.com Logo"
              className="w-24 h-24 mb-4 rounded-full object-cover border-4 border-pink-500"
            />
            <p className="text-purple-900 mb-2">
              "The speed and accuracy of Ganaxy.ai's service have significantly enhanced our content quality and trustworthiness."
            </p>
            <p className="text-sm font-semibold text-pink-700">— Jordan M., Content Strategist, Scale.com</p>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            className="bg-purple-50 shadow-lg p-6 rounded-lg flex flex-col items-center text-left"
            variants={testimonialVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={client3Logo}
              alt="FatJoe Logo"
              className="w-24 h-24 mb-4 rounded-full object-cover border-4 border-pink-500"
            />
            <p className="text-purple-900 mb-2">
              "With Ganaxy.ai, we can easily identify AI-generated content, helping us maintain our brand's integrity."
            </p>
            <p className="text-sm font-semibold text-pink-700">— Daniel T., Content Delivery Hero, FatJoe.com</p>
          </motion.div>

          {/* Testimonial 4 */}
          <motion.div
            className="bg-purple-50 shadow-lg p-6 rounded-lg flex flex-col items-center text-left"
            variants={testimonialVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={client4Logo}
              alt="Labelbox Logo"
              className="w-24 h-24 mb-4 rounded-full object-cover border-4 border-pink-500"
            />
            <p className="text-purple-900 mb-2">
              "Their AI-powered learning paths have equipped our team with the skills needed to thrive in the evolving tech landscape."
            </p>
            <p className="text-sm font-semibold text-pink-700">— Manu Sharma, CEO, Labelbox.com</p>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded shadow-lg transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessStories;
