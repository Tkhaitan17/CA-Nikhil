import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const handleNavigation = (href) => {
    const currentPath = window.location.pathname;
    if (href === '/') {
      // Check if we're on home page
      if (currentPath !== '/') {
        // Navigate to home page
        window.location.href = href;
      } else {
        // Already on home page, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (href.startsWith('/#')) {
      // Check if we're on home page
      if (currentPath !== '/') {
        // Navigate to home first
        window.location.href = href;
      } else {
        // Already on home page, scroll to element
        const elementId = href.substring(2);
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (href.startsWith('/')) {
      window.location.href = href;
    }
  };
  const services = [
    { name: 'Tax Planning', href: '/query' },
    { name: 'Audit & Assurance', href: '/query' },
    { name: 'GST Services', href: '/query' },
    { name: 'Business Advisory', href: '/query' },
    { name: 'Financial Reporting', href: '/query' },
  ];

  const resources = [
    { name: 'Tax Calculators', href: '/calculator' },
    { name: 'Forms & Downloads', href: '/forms' },
    { name: 'FAQs', href: '/query' },
  ];

  const company = [
    { name: 'About Us', href: '/' },
    { name: 'Our Team', href: '/query' },
    { name: 'Careers', href: '/query' },
    { name: 'Client Testimonials', href: '/#testimonials' },
  ];

  const legal = [
    { name: 'Terms of Service', href: '/query' },
    { name: 'Privacy Policy', href: '/query' },
    { name: 'Disclaimer', href: '/query' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'Nsaraswatandco@gmail.com', href: 'mailto:Nsaraswatandco@gmail.com' },
    { icon: Phone, text: '+91 97826 91055', href: 'tel:+919782691055' },
    { icon: MapPin, text: '309, Neelkanth Mall, Jaipur, Rajasthan 302001', href: 'https://maps.app.goo.gl/u4HjLWYAG3a5L8kt9?g_st=aw' },
  ];

  return (
    <footer className="bg-gradient-to-b from-brand-blue-900 to-brand-blue-950 text-white py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top section with logo, description and social media */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 animate-fade-in-left">
            <div className="flex items-center mb-6 group cursor-pointer">
              <button
                onClick={() => handleNavigation('/')}
                className="bg-none border-none p-0 cursor-pointer"
              >
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-20 h-20 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300 shadow-md"
                />
              </button>
              <div>
                <div className="text-2xl font-bold">N. SARASWAT & CO.</div>
                <div className="text-xs sm:text-sm text-brand-blue-300 font-semibold">Chartered Accountants</div>
              </div>
            </div>
            <p className="text-brand-blue-100 mb-8 max-w-md leading-relaxed">
              A dedicated team providing comprehensive financial, accounting, and compliance services to businesses, startups, and individuals. We deliver accurate, timely, and practical financial solutions.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="animate-fade-in-up stagger-item">
                <h3 className="font-bold text-lg text-white mb-6">Services</h3>
                <ul className="space-y-3">
                  {services.map((item) => (
                    <li key={item.name}>
                      <button 
                        onClick={() => handleNavigation(item.href)}
                        className="text-brand-blue-200 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block transform bg-none border-none cursor-pointer text-left"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-fade-in-up stagger-item" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-bold text-lg text-white mb-6">Resources</h3>
                <ul className="space-y-3">
                  {resources.map((item) => (
                    <li key={item.name}>
                      <button 
                        onClick={() => handleNavigation(item.href)}
                        className="text-brand-blue-200 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block transform bg-none border-none cursor-pointer text-left"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-fade-in-up stagger-item" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-bold text-lg text-white mb-6">Company</h3>
                <ul className="space-y-3">
                  {company.map((item) => (
                    <li key={item.name}>
                      {item.href.startsWith('/#') ? (
                        <button 
                          onClick={() => handleNavigation(item.href)}
                          className="text-brand-blue-200 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block transform bg-none border-none cursor-pointer text-left"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <button 
                          onClick={() => handleNavigation(item.href)}
                          className="text-brand-blue-200 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block transform bg-none border-none cursor-pointer text-left"
                        >
                          {item.name}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-fade-in-up stagger-item" style={{ animationDelay: '0.3s' }}>
                <h3 className="font-bold text-lg text-white mb-6">Legal</h3>
                <ul className="space-y-3">
                  {legal.map((item) => (
                    <li key={item.name}>
                      <button 
                        onClick={() => handleNavigation(item.href)}
                        className="text-brand-blue-200 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block transform bg-none border-none cursor-pointer text-left"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact info section */}
        <div className="border-t border-brand-blue-700 pt-10 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {contactInfo.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="flex items-center text-brand-blue-200 hover:text-blue-300 transition-all duration-300 group hover:translate-x-1 transform"
              >
                <div className="bg-white/10 p-3 rounded-lg mr-4 group-hover:bg-white/20 transition-colors duration-300">
                  <item.icon className="w-5 h-5 flex-shrink-0 text-blue-300 group-hover:text-blue-200" />
                </div>
                <span className="group-hover:font-semibold">{item.text}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-brand-blue-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-blue-300 text-sm font-medium">
              © {new Date().getFullYear()} N. SARASWAT & CO. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button onClick={() => handleNavigation('/query')} className="text-brand-blue-300 hover:text-blue-200 text-sm font-medium transition-colors duration-300 bg-none border-none cursor-pointer">
                Privacy Policy
              </button>
              <button onClick={() => handleNavigation('/query')} className="text-brand-blue-300 hover:text-blue-200 text-sm font-medium transition-colors duration-300 bg-none border-none cursor-pointer">
                Terms of Service
              </button>
              <button onClick={() => handleNavigation('/query')} className="text-brand-blue-300 hover:text-blue-200 text-sm font-medium transition-colors duration-300 bg-none border-none cursor-pointer">
                Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;