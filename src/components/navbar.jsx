"use client";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon,
} from "@heroicons/react/20/solid";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Function to handle smooth scrolling to sections
  const handleScrollToSection = (sectionId) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If we're on the home page, scroll smoothly
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-2 border-brand-blue-200">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
      >
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-lg p-2.5 text-brand-blue-900 hover:bg-blue-50 transition-all duration-200 hover:shadow-md"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop navigation - centered */}
        <div className="hidden lg:flex lg:gap-x-1 justify-center flex-1">
          <Link 
            to="/" 
            className="relative group flex items-center px-4 py-2 text-sm font-semibold text-brand-blue-900 rounded-md transition-all duration-300"
            aria-label="Go to home page"
          >
            <HomeIcon className="h-5 w-5 mr-2 text-brand-blue-600 group-hover:text-brand-blue-700 transition-colors duration-300" aria-hidden="true" />
            <span className="group-hover:text-brand-blue-700 transition-colors duration-300">Home</span>
            <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue-600 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
          </Link>

          <Link 
            to="/services" 
            className="relative group flex items-center px-4 py-2 text-sm font-semibold text-brand-blue-900 rounded-md transition-all duration-300"
          >
            <span className="group-hover:text-brand-blue-700 transition-colors duration-300">Services</span>
            <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue-600 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
          </Link>

          <Link 
            to="/knowledge-bank" 
            className="relative group flex items-center px-4 py-2 text-sm font-semibold text-brand-blue-900 rounded-md transition-all duration-300"
          >
            <span className="group-hover:text-brand-blue-700 transition-colors duration-300">Knowledge Bank</span>
            <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue-600 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
          </Link>

          <button
            onClick={() => handleScrollToSection('about')}
            className="relative group flex items-center px-4 py-2 text-sm font-semibold text-brand-blue-900 rounded-md transition-all duration-300 cursor-pointer"
          >
            <span className="group-hover:text-brand-blue-700 transition-colors duration-300">About Us</span>
            <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue-600 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
          </button>
          
          <Link 
            to="/e-visiting-card" 
            className="relative group flex items-center px-4 py-2 text-sm font-semibold text-brand-blue-900 rounded-md transition-all duration-300"
          >
            <span className="group-hover:text-brand-blue-700 transition-colors duration-300">E-Visiting Card</span>
            <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue-600 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
          </Link>
          
          <button
            onClick={() => handleScrollToSection('news')}
            className="relative group flex items-center px-4 py-2 text-sm font-semibold text-brand-blue-900 rounded-md transition-all duration-300 cursor-pointer"
          >
            <span className="group-hover:text-brand-blue-700 transition-colors duration-300">News & Updates</span>
            <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue-600 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
          </button>
          
          <Link 
            to="/query" 
            className="relative group flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-brand-blue-600 to-blue-500 rounded-lg transition-all duration-300 hover:shadow-lg hover:from-brand-blue-700 hover:to-blue-600"
          >
            <span>Query</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>

        {/* Right side spacer for mobile */}
        <div className="lg:hidden"></div>
      </nav>

      {/* Mobile menu dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-brand-blue-900">Menu</h2>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg p-2.5 text-brand-blue-900 hover:bg-blue-50 transition-all duration-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          
          <div className="flow-root">
            <div className="divide-y divide-blue-100">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-brand-blue-900 bg-blue-50 hover:bg-blue-100 transition-all duration-200 transform hover:translate-x-1"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Go to home page"
                >
                  <div className="flex items-center">
                    <HomeIcon className="h-5 w-5 mr-3 text-brand-blue-600" aria-hidden="true" />
                    Home
                  </div>
                </Link>

                <Link
                  to="/services"
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-brand-blue-900 hover:bg-blue-50 transition-all duration-200 transform hover:translate-x-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>

                <Link
                  to="/knowledge-bank"
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-brand-blue-900 hover:bg-blue-50 transition-all duration-200 transform hover:translate-x-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Knowledge Bank
                </Link>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleScrollToSection('about');
                  }}
                  className="block w-full text-left rounded-lg px-4 py-3 text-base font-semibold text-brand-blue-900 hover:bg-blue-50 transition-all duration-200 transform hover:translate-x-1"
                >
                  About Us
                </button>
                
                <Link
                  to="/e-visiting-card"
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-brand-blue-900 hover:bg-blue-50 transition-all duration-200 transform hover:translate-x-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  E-Visiting Card
                </Link>
                
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleScrollToSection('news');
                  }}
                  className="block w-full text-left rounded-lg px-4 py-3 text-base font-semibold text-brand-blue-900 hover:bg-blue-50 transition-all duration-200 transform hover:translate-x-1"
                >
                  News & Updates
                </button>
                
                <Link
                  to="/query"
                  className="block rounded-lg px-4 py-3 mt-4 text-base font-semibold text-white bg-gradient-to-r from-brand-blue-600 to-blue-500 hover:shadow-lg hover:from-brand-blue-700 hover:to-blue-600 transition-all duration-200 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Send Query
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}