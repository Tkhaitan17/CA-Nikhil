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
    <nav className="relative isolate overflow-hidden bg-brand-blue-900 py-4 sm:py-6 lg:py-8 border-b-2 border-brand-blue-700 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo and Text */}
        <Link to="/" className="block group">
          <div className="flex items-center space-x-4 transform transition-transform duration-300 group-hover:-translate-y-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-400 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <img
                src="/logo.png"
                alt="Logo"
                className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-white text-lg sm:text-xl lg:text-2xl font-bold tracking-wide">
              VINAY NAVEEN & CO.
              <br />
              <span className="text-brand-blue-300 text-sm sm:text-base lg:text-lg font-semibold">Chartered Accountants</span>
            </div>
          </div>
        </Link>

        {/* Social Media Icons and Contact Info */}
        <div className="relative flex flex-col items-center">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-5 mb-4">
            {/* WhatsApp */}
            <button
              onClick={() => handleSocialClick('whatsapp', socialLinks.whatsapp)}
              className="text-white bg-green-500 p-2 rounded-full hover:bg-green-400 hover:shadow-lg transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
              aria-label="Contact us on WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Instagram */}
            <button
              onClick={() => handleSocialClick('instagram', socialLinks.instagram)}
              className="text-white bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full hover:shadow-lg transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
              aria-label="Follow us on Instagram"
              title="Instagram"
            >
              <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* LinkedIn */}
            <button
              onClick={() => handleSocialClick('linkedin', socialLinks.linkedin)}
              className="text-white bg-blue-600 p-2 rounded-full hover:bg-blue-500 hover:shadow-lg transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
              aria-label="Connect with us on LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Facebook */}
            <button
              onClick={() => handleSocialClick('facebook', socialLinks.facebook)}
              className="text-white bg-blue-700 p-2 rounded-full hover:bg-blue-600 hover:shadow-lg transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
              aria-label="Like us on Facebook"
              title="Facebook"
            >
              <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Twitter */}
            <button
              onClick={() => handleSocialClick('twitter', socialLinks.twitter)}
              className="text-white bg-sky-500 p-2 rounded-full hover:bg-sky-400 hover:shadow-lg transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
              aria-label="Follow us on Twitter"
              title="Twitter"
            >
              <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Phone Number and Email with Icons */}
          <div className="flex flex-col sm:flex-row items-center text-white font-semibold text-sm sm:text-base gap-4 sm:gap-6">
            {/* Phone */}
            <div className="flex items-center group cursor-pointer">
              <FaPhoneAlt className="mr-2 text-brand-blue-300 group-hover:text-brand-blue-100 transition-colors duration-300" />
              <a 
                href="tel:+919784306503" 
                className="hover:text-brand-blue-200 transition-colors duration-300 group-hover:font-semibold"
              >
                +91-9784306503
              </a>
            </div>
            
            {/* Email */}
            <div className="flex items-center group cursor-pointer">
              <FaEnvelope className="mr-2 text-brand-blue-300 group-hover:text-brand-blue-100 transition-colors duration-300" />
              <a 
                href="mailto:vncgzb@gmail.com" 
                className="hover:text-brand-blue-200 transition-colors duration-300 group-hover:font-semibold"
              >
                vncgzb@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;