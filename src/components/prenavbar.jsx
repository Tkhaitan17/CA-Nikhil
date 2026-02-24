import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Social media links - Replace these with your actual profile URLs
  const socialLinks = {
    whatsapp: "https://wa.me/919784306503", // WhatsApp with your phone number
    instagram: "https://instagram.com/your-instagram-handle", // Replace with your Instagram handle
    linkedin: "https://linkedin.com/company/your-company", // Replace with your LinkedIn company page
    facebook: "https://facebook.com/your-facebook-page", // Replace with your Facebook page
    twitter: "https://twitter.com/your-twitter-handle" // Replace with your Twitter handle
  };

  // Function to handle social media link clicks
  const handleSocialClick = (platform, url) => {
    // Open the social media link in a new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <nav className="relative isolate overflow-hidden bg-gradient-to-r from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 py-5 sm:py-6 lg:py-7 border-b border-brand-blue-700 shadow-lg">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-soft"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-56 h-56 bg-brand-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo and Company Info */}
        <Link to="/" className="block group mb-4 md:mb-0">
          <div className="flex items-center space-x-4 transform transition-all duration-300 group-hover:-translate-y-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-300"></div>
              <img
                src="/logo.png"
                alt="Logo"
                className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg transform group-hover:scale-105 transition-transform duration-300 shadow-lg"
              />
            </div>
            <div className="text-white text-base sm:text-lg lg:text-xl font-bold tracking-wide">
              VINAY NAVEEN & CO.
              <br />
              <span className="text-brand-blue-300 text-xs sm:text-sm lg:text-base font-semibold">Chartered Accountants</span>
            </div>
          </div>
        </Link>

        {/* Social Media Icons and Contact Info */}
        <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            {/* WhatsApp */}
            <button
              onClick={() => handleSocialClick('whatsapp', socialLinks.whatsapp)}
              className="text-white bg-gradient-to-br from-green-500 to-green-600 p-2.5 rounded-full hover:from-green-400 hover:to-green-500 hover:shadow-lg transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
              aria-label="Contact us on WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Instagram */}
            <button
              onClick={() => handleSocialClick('instagram', socialLinks.instagram)}
              className="text-white bg-gradient-to-br from-pink-500 via-red-500 to-purple-600 p-2.5 rounded-full hover:shadow-lg transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
              aria-label="Follow us on Instagram"
              title="Instagram"
            >
              <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* LinkedIn */}
            <button
              onClick={() => handleSocialClick('linkedin', socialLinks.linkedin)}
              className="text-white bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 rounded-full hover:from-blue-500 hover:to-blue-600 hover:shadow-lg transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
              aria-label="Connect with us on LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Facebook */}
            <button
              onClick={() => handleSocialClick('facebook', socialLinks.facebook)}
              className="text-white bg-gradient-to-br from-blue-700 to-blue-800 p-2.5 rounded-full hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
              aria-label="Like us on Facebook"
              title="Facebook"
            >
              <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Twitter */}
            <button
              onClick={() => handleSocialClick('twitter', socialLinks.twitter)}
              className="text-white bg-gradient-to-br from-sky-500 to-sky-600 p-2.5 rounded-full hover:from-sky-400 hover:to-sky-500 hover:shadow-lg transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
              aria-label="Follow us on Twitter"
              title="Twitter"
            >
              <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-white/30"></div>

          {/* Phone Number and Email with Icons */}
          <div className="flex flex-col sm:flex-row items-center text-white font-semibold text-sm sm:text-base gap-4 sm:gap-6">
            {/* Phone */}
            <a 
              href="tel:+919784306503" 
              className="flex items-center group cursor-pointer hover:text-brand-blue-200 transition-colors duration-300"
            >
              <FaPhoneAlt className="mr-2.5 text-brand-blue-300 group-hover:text-brand-blue-100 group-hover:scale-110 transition-all duration-300" />
              <span className="group-hover:font-bold transition-all duration-300">+91-9784306503</span>
            </a>
            
            {/* Email */}
            <a 
              href="mailto:vncgzb@gmail.com" 
              className="flex items-center group cursor-pointer hover:text-brand-blue-200 transition-colors duration-300"
            >
              <FaEnvelope className="mr-2.5 text-brand-blue-300 group-hover:text-brand-blue-100 group-hover:scale-110 transition-all duration-300" />
              <span className="group-hover:font-bold transition-all duration-300">vncgzb@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;