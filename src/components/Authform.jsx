import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa"; // React Icons
import heroImage from '../assets/HeroImage.jpg';

const Auth = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);

  const toggleForm = () => {
    setShowRegister(!showRegister);
    setShowLogin(!showLogin);
  };

  const toggleViewPass = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="w-full auth-screen flex items-center justify-center min-h-screen">
      <style jsx>{`
        .polka-dots {
          background-image: radial-gradient(circle, pink 20%, transparent 10%);
          background-size: 20px 20px; /* Adjust size of dots and spacing */
          opacity: 0.1; /* Adjust opacity as needed */
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
        }
      `}</style>
      <div className="polka-dots" />

      <div className="md:w-3/5 pt-4 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-4 transition-all duration-300 ease-in-out bg-white relative z-10">
        <div className="col-span-1 md:col-span-2 py-4 px-8">
          <p className="text-black">Join Us Today</p>
          <h4 className="text-black font-semibold text-2xl"></h4>
          <p className="text-gray-700 text-sm pt-2">
            Ensure Content Authenticity, Every Time.
          </p>

          <button
            className="bg-purple-600 text-white text-md font-semibold rounded-full w-40 py-1 mt-3 hover:bg-purple-700 transition"
            onClick={toggleForm}
          >
            {showLogin ? "Sign Up" : "Sign In"}
          </button>
        </div>

        {showLogin && (
          <form className="col-span-1 md:col-span-2 p-4">
            <p className="text-xs text-gray-600 pr-6 text-center md:text-start">
              Sign in below if you have a registered account
            </p>

            <div className="w-full border rounded-full flex justify-center py-1 gap-3 mt-3">
              <FaUser className="w-1/5 text-gray-600 text-sm" />
              <input
                type="text"
                placeholder="Username or email"
                className="w-3/5 focus:outline-none text-sm"
                required
              />
            </div>

            <div className="w-full border rounded-full flex justify-center py-1 gap-3 mt-3">
              <FaLock className="w-1/5 text-gray-600 text-sm" />
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                className="w-3/5 focus:outline-none text-sm"
                required
              />
            </div>

            <div className="flex justify-between items-center mt-3 gap-3">
              <div className="flex gap-1 text-md md:text-xs text-gray-600 items-center">
                <input type="checkbox" id="remember_me" />
                <label htmlFor="remember_me">Remember me</label>
              </div>
              <h6 className="text-gray-600 text-xs">Forgot password?</h6>
            </div>

            <div className="w-full flex justify-center">
              <button
                className="bg-purple-600 text-white text-md rounded-full w-full md:w-4/5 py-1 mt-3 hover:bg-purple-700 transition"
                type="submit"
              >
                Sign In
              </button>
            </div>

            <p className="mt-3 text-center text-gray-600 text-md md:text-xs">
              New here?{" "}
              <span
                className="text-purple-600 font-semibold cursor-pointer"
                onClick={toggleForm}
              >
                Create Account
              </span>
            </p>
          </form>
        )}

        {showRegister && (
          <form className="col-span-1 md:col-span-2 p-4">
            <p className="text-xs text-gray-600 pr-6 text-center md:text-start">
              Sign up below if you don't have an account
            </p>

            <div className="w-full border rounded-full flex justify-center py-1 gap-3 mt-3">
              <FaEnvelope className="w-1/5 text-gray-600 text-sm" />
              <input
                type="email"
                placeholder="Email"
                className="w-3/5 focus:outline-none text-sm"
                required
              />
            </div>

            <div className="w-full border rounded-full flex justify-center py-1 gap-3 mt-3">
              <FaUser className="w-1/5 text-gray-600 text-sm" />
              <input
                type="text"
                placeholder="Username"
                className="w-3/5 focus:outline-none text-sm"
                required
              />
            </div>

            <div className="w-full border rounded-full flex justify-center py-1 gap-3 mt-3">
              <FaLock className="w-1/5 text-gray-600 text-sm" />
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                className="w-3/5 focus:outline-none text-sm"
                required
              />
            </div>

            <div className="flex items-center mt-3 gap-3" onClick={toggleViewPass}>
              <div className="flex gap-1 text-md md:text-xs text-gray-600 items-center">
                <input type="checkbox" id="show_pass" />
                <label htmlFor="show_pass">Show Password</label>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <button
                className="bg-purple-600 text-white text-md rounded-full w-full md:w-4/5 py-1 mt-3 hover:bg-purple-700 transition"
                type="submit"
              >
                Sign Up
              </button>
            </div>

            <p className="mt-3 text-center text-gray-600 text-md md:text-xs">
              Already have an account?{" "}
              <span
                className="text-purple-600 font-semibold cursor-pointer"
                onClick={toggleForm}
              >
                Sign In
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
