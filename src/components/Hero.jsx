import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const images = [
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1460925895917-adf4e5a67c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');
  const [stats, setStats] = useState([0, 0, 0, 0]);

  // Auto-scroll carousel
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeState('fade-in');
      }, 500);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  // Animate stats count-up
  useEffect(() => {
    const targets = [15, 500, 98, 24];
    const durations = [2000, 2000, 2000, 1500];
    const intervals = [];

    targets.forEach((target, idx) => {
      let current = 0;
      const increment = target / (durations[idx] / 50);
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setStats(prev => {
            const newStats = [...prev];
            newStats[idx] = target;
            return newStats;
          });
          clearInterval(interval);
        } else {
          setStats(prev => {
            const newStats = [...prev];
            newStats[idx] = Math.floor(current);
            return newStats;
          });
        }
      }, 50);
      intervals.push(interval);
    });

    return () => intervals.forEach(i => clearInterval(i));
  }, []);

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

      <div className="relative z-10 max-w-7xl mx-auto h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* Carousel Section */}
          <div className="relative group animate-fade-in-left order-2 lg:order-1">
            <div className="relative h-96 lg:h-screen max-h-[600px] lg:max-h-full rounded-2xl overflow-hidden shadow-2xl">
              {/* Carousel Image */}
              <img
                src={images[currentIndex]}
                alt="Professional carousel"
                className={`w-full h-full object-cover transition-all duration-700 ${fadeState === 'fade-in' ? 'opacity-100' : 'opacity-0'}`}
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
          <div className="space-y-8 animate-fade-in-right order-1 lg:order-2">
            
            {/* Main Header */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Professional <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Accounting</span> <br /> Excellence
              </h1>
              <p className="text-xl text-brand-blue-100 leading-relaxed max-w-lg">
                With over 15 years of expertise, we deliver comprehensive financial solutions tailored to your success.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:from-white/20 hover:to-white/10 group">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors">
                    {stats[0]}
                  </span>
                  <span className="text-2xl text-brand-blue-200">+</span>
                </div>
                <p className="text-brand-blue-100 text-sm font-semibold group-hover:text-white transition-colors">Years Experience</p>
              </div>

              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:from-white/20 hover:to-white/10 group">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors">
                    {stats[1]}
                  </span>
                  <span className="text-2xl text-brand-blue-200">+</span>
                </div>
                <p className="text-brand-blue-100 text-sm font-semibold group-hover:text-white transition-colors">Clients Served</p>
              </div>

              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:from-white/20 hover:to-white/10 group">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors">
                    {stats[2]}
                  </span>
                  <span className="text-2xl text-brand-blue-200">%</span>
                </div>
                <p className="text-brand-blue-100 text-sm font-semibold group-hover:text-white transition-colors">Client Retention</p>
              </div>

              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:from-white/20 hover:to-white/10 group">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors">
                    {stats[3]}
                  </span>
                  <span className="text-2xl text-brand-blue-200">/7</span>
                </div>
                <p className="text-brand-blue-100 text-sm font-semibold group-hover:text-white transition-colors">Support Hours</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-brand-blue-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-brand-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center gap-2 group">
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-white/20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-sm text-brand-blue-100 mb-3 font-semibold">Trusted by India's Leading Businesses</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs text-brand-blue-100 border border-white/20">CA Certified</span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs text-brand-blue-100 border border-white/20">ISO Compliant</span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs text-brand-blue-100 border border-white/20">24/7 Support</span>
              </div>
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
