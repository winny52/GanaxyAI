import React from 'react';
import { motion } from 'framer-motion';
// Import Font Awesome icons
import { FaStar } from 'react-icons/fa';

const PricingPlans = () => {
  // Animation variants for the pricing cards
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // A styled list item component with a star bullet
  const StarListItem = ({ children }) => (
    <li className="flex items-center text-purple-800 mb-2">
      <FaStar className="text-pink-600 mr-2" /> {/* Star icon */}
      {children}
    </li>
  );

  return (
    <section className="relative w-full bg-white py-16 px-4 md:px-8 lg:py-24 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-6">
          Flexible Pricing Plans for Every Need
        </h2>
        <p className="text-lg md:text-xl text-purple-800 mb-12">
          Choose the plan that suits you best and unlock the power of AI content solutions today!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Basic Plan */}
          <motion.div
            className="bg-purple-50 shadow-lg p-6 rounded-lg flex flex-col items-center text-center"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-purple-900 mb-2">Basic Plan</h3>
            <p className="text-3xl font-bold text-pink-700 mb-4">$25/month</p>
            <ul className="text-left">
              <StarListItem>Check up to 10,000 words.</StarListItem>
              <StarListItem>Instant AI detection results.</StarListItem>
              <StarListItem>Detailed analysis report.</StarListItem>
              <StarListItem>Ideal for individual users.</StarListItem>
              <StarListItem>Perfect for occasional checks.</StarListItem>
              <StarListItem>No hidden fees.</StarListItem>
              <StarListItem>24/7 customer support.</StarListItem>
            </ul>
          </motion.div>

          {/* Standard Plan */}
          <motion.div
            className="bg-pink-50 shadow-lg p-6 rounded-lg flex flex-col items-center text-center border-4 border-pink-600"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-purple-900 mb-2">Standard Plan</h3>
            <p className="text-3xl font-bold text-pink-700 mb-4">$35/month (Popular)</p>
            <ul className="text-left">
              <StarListItem>Check up to 50,000 words.</StarListItem>
              <StarListItem>Everything in Basic, plus:</StarListItem>
              <StarListItem>Enhanced accuracy metrics.</StarListItem>
              <StarListItem>Suitable for small businesses.</StarListItem>
              <StarListItem>Efficient content management.</StarListItem>
              <StarListItem>Access to future feature updates.</StarListItem>
              <StarListItem>24/7 customer support.</StarListItem>
            </ul>
          </motion.div>

          {/* Unlimited Plan */}
          <motion.div
            className="bg-purple-50 shadow-lg p-6 rounded-lg flex flex-col items-center text-center"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-purple-900 mb-2">Unlimited Plan</h3>
            <p className="text-3xl font-bold text-pink-700 mb-4">$50/month</p>
            <ul className="text-left">
              <StarListItem>Check unlimited words.</StarListItem>
              <StarListItem>All features from Standard included.</StarListItem>
              <StarListItem>Best value for enterprise clients.</StarListItem>
              <StarListItem>Complete content oversight.</StarListItem>
              <StarListItem>Priority customer support.</StarListItem>
              <StarListItem>Customizable reporting options.</StarListItem>
              <StarListItem>Access to exclusive resources.</StarListItem>
            </ul>
          </motion.div>
        </div>
        <div className="text-purple-800 mb-8">
          <p>
            Explore our additional offerings for AI humanization and learning paths tailored to your needs.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded shadow-lg transition-all duration-300">
            View All Pricing Options
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
