import React, { useEffect } from 'react';

const WhyChooseUs = () => {
  useEffect(() => {
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle, index) => {
      circle.style.animationDelay = `${index * 0.3}s`;
    });
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-purple-100 via-pink-200 to-pink-300 py-16 px-4 md:px-8 lg:py-24 lg:px-16 overflow-hidden">
      {/* Polka Dot Background */}
      <div className="absolute inset-0">
        <div className="polka-dots"></div>
      </div>
      <style jsx>{`
        .polka-dots {
          background-image: radial-gradient(circle, black 10%, transparent 10%);
          background-size: 20px 20px; /* Adjust size of dots and spacing */
          opacity: 0.1; /* Adjust opacity as needed */
          width: 100%;
          height: 100%;
        }

        .circle {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
          font-size: 1rem;
          font-weight: bold;
          text-align: center;
          padding: 1rem;
          opacity: 0;
          transform: scale(0);
          animation: bubble-in 1s forwards, floating 6s infinite ease-in-out;
        }

        .circle h3 {
          font-size: 1.5rem;
          color: #d23669;
          margin-bottom: 0.5rem;
        }

        .circle p {
          font-size: 1rem;
          color: #333;
        }

        @keyframes bubble-in {
          0% {
            transform: translate(-100px, -100px) scale(0);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
        }

        @keyframes floating {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-900 text-center">
          Why Choose Us
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="circle">
            <h3>Unmatched Accuracy</h3>
            <p>
              Our cutting-edge AI detection technology ensures that you can identify AI-generated content with the highest level of precision, giving you confidence in every piece of content.
            </p>
          </div>
          <div className="circle">
            <h3>User-Friendly Interface</h3>
            <p>
              Our platform is designed to be intuitive and easy to navigate, so you can quickly and efficiently analyze content without any hassle.
            </p>
          </div>
          <div className="circle">
            <h3>Continuous Updates</h3>
            <p>
              We stay ahead of AI advancements with regular updates, ensuring our detection algorithms are always up-to-date and effective against the latest AI models.
            </p>
          </div>
          <div className="circle">
            <h3>Expert Support</h3>
            <p>
              Our team of experts is always available to assist you, providing insights and guidance to help you make the most of our detection tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
