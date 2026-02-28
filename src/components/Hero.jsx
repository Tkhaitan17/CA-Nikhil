import { useState, useEffect, useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Add smooth carousel animations
const styles = `
  @keyframes slide-in-left {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .animate-slide-in-left {
    animation: slide-in-left 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  
  @keyframes fade-in-smooth {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes fade-out-smooth {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
  .carousel-fade-in {
    animation: fade-in-smooth 0.8s cubic-bezier(0.4, 0, 0.2, 1) ease-in-out;
  }
  
  .carousel-fade-out {
    animation: fade-out-smooth 0.6s cubic-bezier(0.4, 0, 0.2, 1) ease-in-out;
  }
`;

if (typeof window !== 'undefined' && !document.getElementById('hero-carousel-styles')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'hero-carousel-styles';
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

const Hero = () => {
  const images = useMemo(() => [
    '/ca1.jpg',
    '/ca2.jpg',
    '/ca3.jpg',
    '/ca4.jpg',
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  // Auto-scroll carousel
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeState('fade-in');
      }, 600);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, [images]);

  const goToSlide = (index) => {
    setFadeState('fade-out');
    setTimeout(() => {
      setCurrentIndex(index);
      setFadeState('fade-in');
    }, 300);
  };

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % images.length);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 overflow-hidden pt-0">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-brand-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto h-screen flex items-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* Carousel Section */}
          <div className="relative group order-2 lg:order-1 -ml-4 sm:-ml-6 lg:-ml-8">
            <div className="relative h-96 lg:h-screen max-h-[600px] lg:max-h-full overflow-hidden shadow-2xl rounded-2xl animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              {/* Carousel Image */}
              <img
                src={images[currentIndex]}
                alt="Professional carousel"
                className={`w-full h-full object-cover ${fadeState === 'fade-in' ? 'carousel-fade-in' : 'carousel-fade-out'}`}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900/40 to-transparent"></div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 group/nav"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 group/nav"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>

              {/* Carousel Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'bg-white w-8 h-3 shadow-lg'
                        : 'bg-white/40 w-3 h-3 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-fade-in-right order-1 lg:order-2 px-4 sm:px-6 lg:px-8">
            
            {/* Main Header */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-white">Comprehensive</span> <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Financial Solutions</span>
              </h1>
              
              <div className="space-y-4 text-brand-blue-100 leading-relaxed">
                <p className="text-lg">
                  The Chartered Accountants have been a significant part of not just the Indian economy but also of all the companies in the country which plays a crucial role in ensuring financial health. A Chartered Accountant is a professional who provides financial and tax services to individuals, businesses, and organizations. They are also known as Certified Public Accountants (CAPs). CA in Jaipur works in all areas of finance, including auditing, taxation, financial planning, etc.
                </p>
                
                <p className="text-lg">
                  We are a team of dedicated professionals providing comprehensive financial, accounting, and compliance services to businesses, startups, and individuals.
                </p>

                <p className="text-lg">
                  Led by CA Nikhil Saraswat, the firm brings strong experience in audit, taxation, and financial management, including exposure to international accounting practices.
                </p>

                <p className="text-lg">
                  Our mission is to deliver accurate, timely, and practical financial solutions that help businesses stay compliant and grow efficiently.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a href="/query" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-brand-blue-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-brand-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center gap-2 group">
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-blue-900 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;
