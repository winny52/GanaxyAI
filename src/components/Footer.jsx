import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Services */}
        <div>
          <h4 className="font-semibold text-pink-400 mb-3">Services</h4>
          <ul className="space-y-2 text-purple-200">
            <li>AI Content Detection</li>
            <li>Humanizing AI Content</li>
            <li>AI-Powered Learning Paths</li>
            <li>API Integration</li>
            <li>
              AI-Enhanced Resume Builder <a href="https://career.io/" target="_blank" rel="noopener noreferrer" className="text-pink-400 underline"></a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-pink-400 mb-3">Company</h4>
          <ul className="space-y-2 text-purple-200">
            <li>Why Choose Us</li>
            <li>About Us</li>
            <li>Customer Testimonials</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-pink-400 mb-3">Resources</h4>
          <ul className="space-y-2 text-purple-200">
            <li>How It Works: Our Process</li>
            <li>FAQs</li>
            <li>Read Our Blog</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="mt-8">
          <h4 className="font-semibold text-pink-400 mb-3">Contact Us</h4>
          <ul className="space-y-2 text-purple-200">
            <li>
              <a href="#live-chat" className="text-pink-400 underline">Live Chat</a>
            </li>
            <li>Email: <a href="mailto:support@ganaxy.ai" className="text-pink-400 underline">support@ganaxy.ai</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto border-t border-purple-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-purple-300">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Ganaxy.ai. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#privacy-policy" className="hover:text-white transition duration-300">Privacy Policy</a>
          <a href="#terms-of-service" className="hover:text-white transition duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
