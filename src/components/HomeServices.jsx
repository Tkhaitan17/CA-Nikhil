import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeServices = () => {
  const navigate = useNavigate();

  const services = [
    { 
      name: 'GST', 
      description: 'Goods and Services Tax expertise and advisory',
      icon: 'shopping-cart',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      name: 'Value Added Tax (VAT)', 
      description: 'Expert assistance with VAT compliance and planning',
      icon: 'calculator',
      color: 'from-green-500 to-green-600'
    },
    { 
      name: 'Corporate Services', 
      description: 'Full-range corporate service solutions',
      icon: 'building',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      name: 'Audit', 
      description: 'Professional audit services to ensure compliance',
      icon: 'check-circle',
      color: 'from-red-500 to-red-600'
    },
    { 
      name: 'Accounting Services', 
      description: 'Reliable accounting solutions for your business',
      icon: 'book-open',
      color: 'from-yellow-500 to-yellow-600'
    },
    { 
      name: 'TDS', 
      description: 'Tax Deducted at Source compliance and management',
      icon: 'document-text',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const renderIcon = (iconName) => {
    const icons = {
      calculator: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      building: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      'check-circle': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      'book-open': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      'document-text': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      'shopping-cart': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    };

    return icons[iconName] || icons.calculator;
  };

  const handleViewAllServices = () => {
    navigate('/services');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-blue-800 to-brand-blue-900 relative overflow-hidden" id="services">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Services That We Offer
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-brand-blue-300 mx-auto mb-6"></div>
          <p className="text-lg text-brand-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tax and financial solutions tailored to meet your business needs with expert guidance and professional excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group animate-fade-in-up stagger-item bg-white rounded-2xl p-8 hover:shadow-2xl hover:border-blue-400 transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 relative shadow-lg`}>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
                {renderIcon(service.icon)}
              </div>
              
              {/* Service Name */}
              <h3 className="text-xl font-bold text-brand-blue-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.name}
              </h3>
              
              {/* Service Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-4 group-hover:text-slate-700 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center animate-fade-in-up">
          <button 
            onClick={handleViewAllServices}
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-500 to-brand-blue-600 text-white font-bold text-lg rounded-xl hover:from-blue-600 hover:to-brand-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
          >
            <span>View All Services</span>
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;