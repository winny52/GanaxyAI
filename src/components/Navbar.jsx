import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/GanaxyLogo.jpg'; // Adjust the path as needed

const Navbar =()=> {
  // State to manage the mobile menu toggle
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when clicking a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-purple-900 text-white  w-full py-4 px-6 md:px-8 lg:px-16 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center ">
        <img
          src={logo}
          alt="Ganaxy.ai Logo"
          className="h-8 mr-3"
        />
      
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex space-x-8 text-sm">
        <Link to="/" className="hover:text-pink-400 transition duration-300">Home</Link>
        <Link to="/services" className="hover:text-pink-400 transition duration-300">Services</Link>
        <Link to="/about" className="hover:text-pink-400 transition duration-300">About Us</Link>
        <Link to="/pricing" className="hover:text-pink-400 transition duration-300">Pricing</Link>
        <Link to="/blog" className="hover:text-pink-400 transition duration-300">Blog</Link>
        <Link to="/contact" className="hover:text-pink-400 transition duration-300">Contact</Link>
      </div>

      {/* Call-to-Action Button */}
      <div className="hidden md:block">
        <Link
          to="/get-started"
          className="bg-pink-400 text-white py-2 px-4 rounded-md hover:bg-pink-500 transition duration-300"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-purple-800 text-white py-6 md:hidden z-20">
          <ul className="flex flex-col space-y-4 items-center">
            <li>
              <Link to="/" onClick={closeMobileMenu} className="hover:text-pink-400 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={closeMobileMenu} className="hover:text-pink-400 transition duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu} className="hover:text-pink-400 transition duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/pricing" onClick={closeMobileMenu} className="hover:text-pink-400 transition duration-300">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMobileMenu} className="hover:text-pink-400 transition duration-300">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu} className="hover:text-pink-400 transition duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/get-started"
                onClick={closeMobileMenu}
                className="bg-pink-400 text-white py-2 px-4 rounded-md hover:bg-pink-500 transition duration-300"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
