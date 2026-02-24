import React from 'react';
import { useNavigate } from 'react-router-dom';

const KnowledgeBankPage = () => {
  const navigate = useNavigate();

  // Function to handle navigation to different sections
  const handleNavigateToSection = (path, sectionName) => {
    navigate(path);
  };

  // Knowledge Bank items with their respective routes
  const knowledgeItems = [
    {
      name: 'Calculators',
      description: 'Financial and tax calculation tools for quick estimates',
      path: '/Calculator',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Bulletins',
      description: 'Latest updates and notifications from tax authorities',
      path: '/Bulletins',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    {
      name: 'Utilities',
      description: 'Helpful tools and utilities for tax and compliance management',
      path: '/Utilities',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      name: 'Acts',
      description: 'Complete text of various tax and corporate acts',
      path: '/Acts',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      name: 'Rules',
      description: 'Detailed rules and regulations under various acts',
      path: '/Rules',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      name: 'Forms',
      description: 'Downloadable forms for various compliance requirements',
      path: '/Forms',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Knowledge Bank</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-brand-blue-300 mx-auto mb-6"></div>
          <p className="text-lg text-brand-blue-100 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive collection of tax tools, legal documents, calculators, and compliance resources. 
            Click on any section below to explore detailed information and resources tailored to your needs.
          </p>
        </div>
        
        {/* Knowledge Bank Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {knowledgeItems.map((item, index) => (
            <div 
              key={index}
              className="group animate-fade-in-up bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:from-white/15 hover:to-white/10 hover:scale-105 stagger-item"
              style={{ animationDelay: `${(index % 3) * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex p-4 bg-gradient-to-r from-blue-500 to-brand-blue-600 rounded-xl group-hover:shadow-lg transition-all duration-300 text-white">
                {item.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {item.name}
              </h3>
              <p className="text-brand-blue-100 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                {item.description}
              </p>
              
              {/* Navigation Button */}
              <button 
                onClick={() => handleNavigateToSection(item.path, item.name)}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-brand-blue-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:shadow-lg group/btn"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="group-hover/btn:translate-x-1 transition-transform">Explore {item.name}</span>
              </button>
            </div>
          ))}
        </div>
        
        {/* Additional Info Section */}
        <div className="bg-gradient-to-r from-brand-blue-800/50 to-blue-900/50 backdrop-blur-md rounded-2xl p-12 text-center border border-white/20 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-white mb-4">Need Expert Guidance?</h2>
          <p className="text-brand-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Can't find what you're looking for? Our team of experienced chartered accountants is here to help you navigate through our comprehensive knowledge bank and provide personalized solutions.
          </p>
          <button 
            onClick={() => navigate('/query')}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-brand-blue-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-brand-blue-700 transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 group/help"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="group-hover/help:translate-x-1 transition-transform">Ask a Question</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBankPage;