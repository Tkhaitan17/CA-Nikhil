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
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-100 to-white shadow-lg border-b-4 border-brand-blue-700">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-center p-4 lg:px-8"
      >
        {/* Mobile menu button - moved to left side */}
        <div className="absolute left-4 flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-brand-blue-900 hover:bg-blue-100 transition-all duration-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop navigation - centered */}
        <div className="hidden lg:flex lg:gap-x-8 justify-center">
          <Link 
            to="/" 
            className="flex items-center px-4 py-3 text-sm font-semibold text-brand-blue-900 rounded-md hover:bg-blue-50 transition-all duration-200 hover:text-blue-600"
            aria-label="Go to home page"
          >
            <HomeIcon className="h-5 w-5 mr-2 text-brand-blue-700" aria-hidden="true" />
            Home
          </Link>

          <Link 
            to="/services" 
            className="flex items-center px-4 py-3 text-sm font-semibold text-brand-blue-900 rounded-md hover:bg-blue-50 transition-all duration-200 hover:text-blue-600"
          >
            Services
          </Link>

          <Link 
            to="/knowledge-bank" 
            className="flex items-center px-4 py-3 text-sm font-semibold text-brand-blue-900 rounded-md hover:bg-blue-50 transition-all duration-200 hover:text-blue-600"
          >
            Knowledge Bank
          </Link>

          {/* Fixed About Us with smooth scrolling */}
          <button
            onClick={() => handleScrollToSection('about')}
            className="flex items-center px-4 py-3 text-sm font-semibold text-brand-blue-900 rounded-md hover:bg-blue-50 transition-all duration-200 hover:text-blue-600"
          >
            About Us
          </button>
          
          <Link 
            to="/EVisitingCard" 
            className="flex items-center px-4 py-3 text-sm font-semibold text-brand-blue-900 rounded-md hover:bg-blue-50 transition-all duration-200 hover:text-blue-600"
          >
            E-Visiting Card
          </Link>
          
          {/* Fixed News and Updates with smooth scrolling */}
          <button
            onClick={() => handleScrollToSection('news')}
            className="flex items-center px-4 py-3 text-sm font-semibold text-brand-blue-900 rounded-md hover:bg-blue-50 transition-all duration-200 hover:text-blue-600"
          >
            News and Updates
          </button>
          
          <Link 
            to="/query" 
            className="flex items-center px-4 py-3 text-sm font-semibold text-brand-blue-900 rounded-md hover:bg-blue-50 transition-all duration-200 hover:text-blue-600"
          >
            Query
          </Link>
        </div>
      </nav>

      {/* Mobile menu dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 bg-black/20" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-b from-slate-100 to-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-brand-blue-700">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-brand-blue-900 hover:bg-blue-50 transition-all duration-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-blue-100">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-brand-blue-900 hover:bg-blue-50 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Go to home page"
                >
                  <div className="flex items-center">
                    <HomeIcon className="h-5 w-5 mr-2 text-brand-blue-700" aria-hidden="true" />
                    Home
                  </div>
                </Link>

                <Link
                  to="/services"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-brand-blue-900 hover:bg-blue-50 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>

                <Link
                  to="/knowledge-bank"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-brand-blue-900 hover:bg-blue-50 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Knowledge Bank
                </Link>

                {/* Fixed About Us for mobile */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleScrollToSection('about');
                  }}
                  className="block w-full text-left rounded-lg px-3 py-2 text-base font-semibold text-brand-blue-900 hover:bg-blue-50 transition-all duration-200"
                >
                  About Us
                </button>
                
                <Link
                  to="/EVisitingCard"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-brand-blue-900 hover:bg-blue-50 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  E-Visiting Card
                </Link>
                
                {/* Fixed News and Updates for mobile */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleScrollToSection('news');
                  }}
                  className="block w-full text-left rounded-lg px-3 py-2 text-base font-semibold text-brand-blue-900 hover:bg-blue-50 transition-all duration-200"
                >
                  News and Updates
                </button>
                
                <Link
                  to="/query"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-brand-blue-900 hover:bg-blue-50 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Query
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}