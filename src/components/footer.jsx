import React from 'react';
import { Facebook, Instagram, LinkedIn, Twitter, Mail, MapPin, Phone, FacebookIcon, InstagramIcon, Linkedin } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Tax Planning', href: '#' },
    { name: 'Audit & Assurance', href: '#' },
    { name: 'GST Services', href: '#' },
    { name: 'Business Advisory', href: '#' },
    { name: 'Financial Reporting', href: '#' },
  ];

  const resources = [
    { name: 'Tax Calculators', href: '#' },
    { name: 'Forms & Downloads', href: '#' },
    { name: 'FAQs', href: '#' },
  ];

  const company = [
    { name: 'About Us', href: '#About' },
    { name: 'Our Team', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Client Testimonials', href: '#' },
  ];

  const legal = [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Disclaimer', href: '#' },
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: '#', color: 'text-blue-600' },
    { icon: InstagramIcon, href: '#', color: 'text-pink-500' },
    { icon: Linkedin, href: '#', color: 'text-blue-700' },
    { icon: Twitter, href: '#', color: 'text-blue-400' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'contact@caservices.com', href: 'mailto:contact@caservices.com' },
    { icon: Phone, text: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: MapPin, text: '123 Financial District, Mumbai 400001, India', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-b from-brand-blue-900 to-brand-blue-950 text-white py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top section with logo, description and social media */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 animate-fade-in-left">
            <div className="flex items-center mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-brand-blue-600 rounded-full mr-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl font-bold">VINAY NAVEEN & CO.</span>
            </div>
            <p className="text-brand-blue-100 mb-8 max-w-md leading-relaxed">
              Providing expert financial guidance and comprehensive accounting solutions to help businesses and individuals navigate the complexities of taxation and financial management.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`${social.color} hover:opacity-100 opacity-75 hover:scale-110 transform transition-all duration-300 p-2 bg-white/10 rounded-full hover:bg-white/20`}
                  aria-label={`Visit our ${social.icon.name} page`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="animate-fade-in-up stagger-item">
                <h3 className="font-bold text-lg text-white mb-6">Services</h3>
                <ul className="space-y-3">
                  {services.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-brand-blue-200 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block transform">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-fade-in-up stagger-item" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-bold text-lg text-white mb-6">Resources</h3>
                <ul className="space-y-3">
                  {resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-brand-blue-200 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block transform">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-fade-in-up stagger-item" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-bold text-lg text-white mb-6">Company</h3>
                <ul className="space-y-3">
                  {company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-brand-blue-200 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block transform">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-fade-in-up stagger-item" style={{ animationDelay: '0.3s' }}>
                <h3 className="font-bold text-lg text-white mb-6">Legal</h3>
                <ul className="space-y-3">
                  {legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-brand-blue-200 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block transform">
                        {item.name}
                      </a>
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
              © {new Date().getFullYear()} VINAY NAVEEN & CO. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-brand-blue-300 hover:text-blue-200 text-sm font-medium transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-brand-blue-300 hover:text-blue-200 text-sm font-medium transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-brand-blue-300 hover:text-blue-200 text-sm font-medium transition-colors duration-300">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;