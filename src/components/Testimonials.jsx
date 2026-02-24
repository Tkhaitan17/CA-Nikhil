git remote set-url origin https://github.com/Tkhaitan17/CA-Nikhil.gitimport React, { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  const reviews = [
    {
      name: 'Rajesh Kumar',
      company: 'TechCore Solutions',
      role: 'Business Owner',
      text: 'Outstanding service! The team at Vinay Naveen & Co. helped us optimize our GST compliance and save significant costs. Highly professional and responsive.',
      rating: 5,
      avatar: '🏢',
    },
    {
      name: 'Priya Sharma',
      company: 'Creative Minds Agency',
      role: 'Finance Director',
      text: 'Excellent financial planning and tax advisory services. Their expertise in corporate taxation has been invaluable for our growth strategy.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Amit Patel',
      company: 'Manufacturing Excellence Ltd.',
      role: 'CFO',
      text: 'Best accounting firm we have worked with. Their attention to detail and timely filing of all statutory requirements is commendable.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Neha Desai',
      company: 'Healthcare Plus',
      role: 'Practice Manager',
      text: 'Vinay Naveen & Co. provided exceptional audit services. Their insights helped us strengthen our financial controls and compliance framework.',
      rating: 5,
      avatar: '👩‍⚕️',
    },
    {
      name: 'Suresh Menon',
      company: 'Export Traders Inc.',
      role: 'Managing Director',
      text: 'Professional, knowledgeable, and always available when we need guidance. Their international tax expertise is truly world-class.',
      rating: 5,
      avatar: '🌍',
    },
    {
      name: 'Anjali Singh',
      company: 'Digital Ventures',
      role: 'Founder',
      text: 'Fantastic support throughout our startup journey. Their proactive approach to tax planning has positively impacted our bottom line.',
      rating: 5,
      avatar: '🚀',
    },
  ];

  useEffect(() => {
    if (!autoScroll) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoScroll, reviews.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setAutoScroll(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setAutoScroll(false);
  };

  // Show 3 reviews at a time for desktop, 1 for mobile
  const getVisibleReviews = () => {
    const isDesktop = window.innerWidth >= 1024;
    const itemsToShow = isDesktop ? 3 : 1;
    const reviews_arr = [];
    
    for (let i = 0; i < itemsToShow; i++) {
      reviews_arr.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return reviews_arr;
  };

  const [visibleReviews, setVisibleReviews] = useState(getVisibleReviews());

  useEffect(() => {
    const handleResize = () => {
      setVisibleReviews(getVisibleReviews());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  useEffect(() => {
    setVisibleReviews(getVisibleReviews());
  }, [currentIndex]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 relative overflow-hidden" id="testimonials">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-brand-blue-300 mx-auto mb-6"></div>
          <p className="text-lg text-brand-blue-100 max-w-3xl mx-auto">
            Trusted by businesses across India. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {visibleReviews.map((review, idx) => (
              <div
                key={idx}
                className="group animate-fade-in-up bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:from-white/15 hover:to-white/10"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-white/90 text-base leading-relaxed mb-6 min-h-20 group-hover:text-white transition-colors duration-300">
                  "{review.text}"
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mb-6"></div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{review.avatar}</div>
                  <div>
                    <p className="font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {review.name}
                    </p>
                    <p className="text-brand-blue-200 text-sm">
                      {review.role}
                    </p>
                    <p className="text-brand-blue-300 text-xs font-medium">
                      {review.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 lg:-translate-x-20 bg-gradient-to-r from-blue-500 to-brand-blue-600 text-white p-3 rounded-full hover:from-blue-600 hover:to-brand-blue-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group"
            aria-label="Previous review"
          >
            <ChevronLeftIcon className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 lg:translate-x-20 bg-gradient-to-r from-brand-blue-600 to-blue-500 text-white p-3 rounded-full hover:from-brand-blue-700 hover:to-blue-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group"
            aria-label="Next review"
          >
            <ChevronRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {[...Array(reviews.length)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setAutoScroll(false);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-blue-400 w-8'
                  : 'bg-white/30 hover:bg-white/50 w-2'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>

        {/* Auto-scroll hint */}
        <p className="text-center text-brand-blue-200 text-sm mt-8">
          Auto-scrolling • Click arrows or dots to navigate manually
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
