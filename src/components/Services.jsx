import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Testimonials from './Testimonials';


const ServicesPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = [
    { 
      name: 'GST Services', 
      description: 'Complete Goods and Services Tax expertise and compliance',
      icon: 'shopping-cart',
      fullDescription: 'Comprehensive GST advisory and implementation services to ensure seamless compliance and optimize your tax position.',
      details: [
        'GST registration and applicability assessment',
        'GST return filing and reconciliation',
        'GST audit and compliance reviews',
        'Input tax credit optimization and recovery',
        'GST refund management and processing',
        'GST litigation support'
      ]
    },
    { 
      name: 'Value Added Tax (VAT)', 
      description: 'Expert VAT compliance planning and advisory services',
      icon: 'calculator',
      fullDescription: 'Strategic VAT compliance solutions designed to minimize tax burden and ensure regulatory adherence.',
      details: [
        'VAT registration and filing assistance',
        'VAT audit support and defense',
        'Input tax credit optimization',
        'VAT compliance reviews and updates',
        'Cross-border VAT advisory',
        'VAT reconciliation and reporting'
      ]
    },
    { 
      name: 'Corporate Services', 
      description: 'Full-range corporate service solutions for business',
      icon: 'building',
      fullDescription: 'End-to-end corporate services encompassing formation, governance, and ongoing compliance management.',
      details: [
        'Company incorporation and registration',
        'Corporate restructuring and reorganization',
        'Annual compliance and filing management',
        'Corporate secretarial services',
        'Business advisory and planning',
        'Corporate governance framework setup'
      ]
    },
    { 
      name: 'Audit Services', 
      description: 'Professional statutory and internal audit services',
      icon: 'check-circle',
      fullDescription: 'Comprehensive audit services ensuring financial accuracy, internal controls effectiveness, and regulatory compliance.',
      details: [
        'Statutory audits and certifications',
        'Internal audits and consulting',
        'Compliance audits and reviews',
        'Risk assessments and recommendations',
        'Process improvement advisory',
        'Financial statement audit and verification'
      ]
    },
    { 
      name: 'Accounting Services', 
      description: 'Reliable and accurate accounting solutions',
      icon: 'book-open',
      fullDescription: 'Complete accounting services from bookkeeping to financial reporting for informed business decisions.',
      details: [
        'Bookkeeping and transaction recording',
        'Financial statement preparation (P&L, Balance Sheet)',
        'Accounts receivable and payable management',
        'Bank reconciliation and cash management',
        'Monthly/quarterly financial reporting',
        'Trial balance and ledger account management'
      ]
    },
    { 
      name: 'TDS Management', 
      description: 'Tax Deducted at Source compliance and filing',
      icon: 'document-text',
      fullDescription: 'Comprehensive TDS services ensuring timely filing, reconciliation, and certificate management.',
      details: [
        'TDS return filing (Forms 24Q, 26Q, 27Q)',
        'TDS certificate generation and issuance',
        'TDS reconciliation and audit support',
        'Lower deduction certificate assistance',
        'TDS assessment and notice management',
        'Form 16 generation and distribution'
      ]
    },
    { 
      name: 'Corporate Finance', 
      description: 'Strategic financial planning and management services',
      icon: 'chart-bar',
      fullDescription: 'Advanced financial advisory for capital planning, valuation, and strategic corporate transactions.',
      details: [
        'Financial modeling and forecasting',
        'Business valuation services',
        'Mergers and acquisitions advisory',
        'Capital structure optimization',
        'Investment analysis and due diligence',
        'IPO and fundraising advisory'
      ]
    },
    { 
      name: 'Payroll Services', 
      description: 'Efficient payroll management and statutory compliance',
      icon: 'currency-rupee',
      fullDescription: 'End-to-end payroll solutions with robust compliance, tax management, and statutory reporting.',
      details: [
        'Monthly payroll processing',
        'Statutory compliance management (PF, ESI, LWFN)',
        'Employee income tax calculation and management',
        'Salary structuring and optimization',
        'Payroll audits and reviews',
        'Attendance and leave management integration'
      ]
    },
    { 
      name: 'Services for Non-Residents', 
      description: 'Specialized tax services for NRIs and foreign investors',
      icon: 'globe',
      fullDescription: 'Expert guidance on Indian tax obligations for non-residents and cross-border transactions.',
      details: [
        'Non-resident income tax compliance',
        'Double taxation avoidance planning',
        'Repatriation and remittance advice',
        'Foreign investment advisory',
        'Cross-border transaction structuring',
        'NRI property and investment planning'
      ]
    },
    { 
      name: 'Corporate Governance', 
      description: 'Best practices for effective corporate governance',
      icon: 'shield-check',
      fullDescription: 'Governance framework setup and advisory ensuring ethical conduct and regulatory compliance.',
      details: [
        'Governance structure design and implementation',
        'Compliance framework development',
        'Risk management systems and advisory',
        'Board advisory services',
        'Corporate governance audits',
        'Policy and procedure documentation'
      ]
    },
    { 
      name: 'Outsourcing Solutions', 
      description: 'Benefits and expertise of tax outsourcing services',
      icon: 'light-bulb',
      fullDescription: 'Strategic outsourcing solutions allowing businesses to focus on core operations while ensuring compliance.',
      details: [
        'Cost optimization and efficiency gains',
        'Access to specialized expertise and resources',
        'Focus on core business activities',
        'Improved compliance and reduced risk',
        'Scalable solutions as business grows',
        'Advanced technology and systems access'
      ]
    },
  ];

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts(products);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = products.filter(service => {
        return (
          service.name.toLowerCase().includes(query) ||
          service.description.toLowerCase().includes(query) ||
          service.details.some(detail => detail.toLowerCase().includes(query))
        );
      });
      setFilteredProducts(filtered);
    }
  }, [searchQuery]);

  // Initialize filtered products
  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const handleRequestService = (serviceName) => {
    navigate('/query');
  };

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
      'chart-bar': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      globe: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      'book-open': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      'currency-rupee': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      'light-bulb': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      'document-text': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      'shield-check': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Tax & Financial Services</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-brand-blue-300 mx-auto mb-6"></div>
          <p className="text-lg text-brand-blue-100 max-w-3xl mx-auto">
            Comprehensive tax advisory, accounting, and financial solutions designed to help your business thrive while maintaining full regulatory compliance.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-12 py-4 border-2 border-brand-blue-600 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-brand-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 sm:text-sm transition-all duration-300"
              placeholder="Search for services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search for tax and financial services"
            />
            {searchQuery && (
              <button
                className="absolute inset-y-0 right-0 pr-4 flex items-center hover:text-blue-300 transition-colors"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
              >
                <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {filteredProducts.length === 0 && searchQuery && (
            <p className="mt-3 text-sm text-brand-blue-200 text-center">No services found matching "{searchQuery}"</p>
          )}
          {searchQuery && filteredProducts.length > 0 && (
            <p className="mt-3 text-sm text-brand-blue-200 text-center">
              Found {filteredProducts.length} {filteredProducts.length === 1 ? 'service' : 'services'}
            </p>
          )}
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProducts.map((service, index) => (
            <div 
              key={service.name}
              className="group animate-fade-in-up bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:from-white/15 hover:to-white/10 hover:scale-105"
              style={{ animationDelay: `${(index % 3) * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex p-4 bg-gradient-to-r from-blue-500 to-brand-blue-600 rounded-xl group-hover:shadow-lg transition-all duration-300 text-white">
                {renderIcon(service.icon)}
              </div>
              
              {/* Service Name */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {service.name}
              </h3>
              
              {/* Short Description */}
              <p className="text-brand-blue-100 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Full Description */}
              <p className="text-white/80 text-sm mb-6 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                {service.fullDescription}
              </p>
              
              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mb-6"></div>
              
              {/* Service Details */}
              <div className="mb-8">
                <h4 className="text-base font-semibold text-blue-300 mb-4">What We Offer:</h4>
                <ul className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <svg className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0 group-hover/item:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/90 text-sm group-hover/item:text-white transition-colors">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Request Button */}
              <button 
                onClick={() => handleRequestService(service.name)}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-brand-blue-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:shadow-lg group/btn"
                aria-label={`Request ${service.name} service`}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="group-hover/btn:translate-x-1 transition-transform">Request Service</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default ServicesPage;