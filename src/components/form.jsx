import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Spinner component for loading state
const Spinner = () => (
  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    organization: '',
    officeAddress: '',
    city: '',
    email: '',
    telephone: '',
    mobile: '',
    professionalUpdates: '',
    subjectOfQuery: '',
    query: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('submitting');
    
    try {
      const dataWithTimestamp = {
        ...formData,
        timestamp: new Date().toLocaleString()
      };
      
      const scriptURL = process.env.REACT_APP_GOOGLE_SCRIPT_WEB_APP_URL;
      const formDataForSheet = new FormData();
      
      Object.keys(dataWithTimestamp).forEach(key => {
        formDataForSheet.append(key, dataWithTimestamp[key]);
      });
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formDataForSheet
      });
      
      if (response.ok) {
        setFormData({
          name: '',
          designation: '',
          organization: '',
          officeAddress: '',
          city: '',
          email: '',
          telephone: '',
          mobile: '',
          professionalUpdates: '',
          subjectOfQuery: '',
          query: '',
        });
        setSubmitStatus('success');
        
        setTimeout(() => {
          setSubmitStatus('');
        }, 3000);
      } else {
        throw new Error('Server responded with an error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-brand-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in-down">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-brand-blue-600 rounded-full mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Submit Your Query</h1>
          <p className="text-lg text-brand-blue-100 max-w-2xl mx-auto">
            Have a tax or financial question? Our expert team is here to help. Fill out the form below and we'll get back to you promptly.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-8 sm:p-10 border border-white/20 animate-fade-in-up">
          <form onSubmit={handleSubmit} aria-labelledby="form-title">
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-8 p-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/50 text-emerald-100 rounded-xl flex items-center animate-pulse shadow-md backdrop-blur-sm">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-emerald-200">Success!</h3>
                  <p className="text-sm text-emerald-100">Your query has been submitted successfully. We'll get back to you soon.</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-8 p-4 bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-red-400/50 text-red-100 rounded-xl flex items-center shadow-md backdrop-blur-sm">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-200">Error</h3>
                  <p className="text-sm text-red-100">There was an error submitting your form. Please try again later.</p>
                </div>
              </div>
            )}

            {/* Personal Information Section */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-brand-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-brand-blue-100 mb-2">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 bg-white/10 backdrop-blur-sm placeholder-white/40 text-white hover:bg-white/15 focus:bg-white/20 group-hover:border-white/50"
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="group">
                  <label htmlFor="designation" className="block text-sm font-medium text-brand-blue-100 mb-2">
                    Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    id="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 bg-white/10 backdrop-blur-sm placeholder-white/40 text-white hover:bg-white/15 focus:bg-white/20 group-hover:border-white/50"
                    placeholder="Your job title/position"
                  />
                </div>

                <div className="group">
                  <label htmlFor="organization" className="block text-sm font-medium text-brand-blue-100 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    id="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 bg-white/10 backdrop-blur-sm placeholder-white/40 text-white hover:bg-white/15 focus:bg-white/20 group-hover:border-white/50"
                    placeholder="Company/Organization name"
                  />
                </div>

                <div className="group">
                  <label htmlFor="city" className="block text-sm font-medium text-brand-blue-100 mb-2">
                    City <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 bg-white/10 backdrop-blur-sm placeholder-white/40 text-white hover:bg-white/15 focus:bg-white/20 group-hover:border-white/50"
                    required
                    placeholder="Your city"
                  />
                </div>

                <div className="md:col-span-2 group">
                  <label htmlFor="officeAddress" className="block text-sm font-medium text-brand-blue-100 mb-2">
                    Office Address
                  </label>
                  <input
                    type="text"
                    name="officeAddress"
                    id="officeAddress"
                    value={formData.officeAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 bg-white/10 backdrop-blur-sm placeholder-white/40 text-white hover:bg-white/15 focus:bg-white/20 group-hover:border-white/50"
                    placeholder="Complete office address"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                Contact Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-brand-blue-100 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 bg-white/10 backdrop-blur-sm placeholder-white/40 text-white hover:bg-white/15 focus:bg-white/20 group-hover:border-white/50"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="mobile" className="block text-sm font-medium text-brand-blue-100 mb-2">
                    Mobile Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 bg-white/10 backdrop-blur-sm placeholder-white/40 text-white hover:bg-white/15 focus:bg-white/20 group-hover:border-white/50"
                    required
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="group md:col-span-2">
                  <label htmlFor="telephone" className="block text-sm font-medium text-brand-blue-100 mb-2">
                    Telephone Number
                  </label>
                  <input
                    type="text"
                    name="telephone"
                    id="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 bg-white/10 backdrop-blur-sm placeholder-white/40 text-white hover:bg-white/15 focus:bg-white/20 group-hover:border-white/50"
                    placeholder="Landline number (optional)"
                  />
                </div>
              </div>
            </div>

            {/* Query Information Section */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Your Query
              </h3>
              
              <div className="space-y-6">
                <div className="group">
                  <label htmlFor="subjectOfQuery" className="block text-sm font-medium text-brand-blue-100 mb-2">
                    Subject of Query <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subjectOfQuery"
                    id="subjectOfQuery"
                    value={formData.subjectOfQuery}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 bg-white/10 backdrop-blur-sm placeholder-white/40 text-white hover:bg-white/15 focus:bg-white/20 group-hover:border-white/50"
                    required
                    placeholder="Brief subject of your query"
                  />
                </div>

                <div className="group">
                  <label htmlFor="query" className="block text-sm font-medium text-brand-blue-100 mb-2">
                    Detailed Query <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="query"
                    id="query"
                    value={formData.query}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 bg-white/10 backdrop-blur-sm placeholder-white/40 text-white hover:bg-white/15 focus:bg-white/20 group-hover:border-white/50 resize-y"
                    rows="6"
                    required
                    placeholder="Please provide detailed information about your tax or financial query..."
                  />
                </div>

                <div className="group">
                  <label htmlFor="professionalUpdates" className="block text-sm font-medium text-brand-blue-100 mb-2">
                    Additional Professional Updates
                  </label>
                  <textarea
                    name="professionalUpdates"
                    id="professionalUpdates"
                    value={formData.professionalUpdates}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 bg-white/10 backdrop-blur-sm placeholder-white/40 text-white hover:bg-white/15 focus:bg-white/20 group-hover:border-white/50 resize-y"
                    rows="3"
                    placeholder="Any additional professional information or updates (optional)"
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-between pt-8 border-t border-white/20">
              <Link to="/">
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </button>
              </Link>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent ${
                  isSubmitting 
                    ? 'bg-white/20 text-white cursor-not-allowed backdrop-blur-sm' 
                    : 'bg-gradient-to-r from-blue-500 to-brand-blue-600 text-white hover:from-blue-600 hover:to-brand-blue-700 transform hover:scale-105 shadow-lg hover:shadow-2xl'
                }`}
              >
                {isSubmitting && <Spinner />}
                {isSubmitting ? 'Submitting Query...' : 'Submit Query'}
                {!isSubmitting && (
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-blue-900 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default QueryForm;