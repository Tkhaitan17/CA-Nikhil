import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const scriptURL = process.env.REACT_APP_GOOGLE_SCRIPT_WEB_APP_URL;
      const formDataForSheet = new FormData();
      formDataForSheet.append('email', email);
      formDataForSheet.append('type', 'Newsletter');
      formDataForSheet.append('timestamp', new Date().toLocaleString());

      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formDataForSheet
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        setTimeout(() => setIsSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 relative overflow-hidden" id="newsletter">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        
        {/* Decorative grid background */}
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#3b82f6] to-[#6366f1] opacity-30"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center animate-fade-in-down">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Stay Updated With Our Latest Updates
          </h2>
          <p className="text-lg text-brand-blue-100 mb-8">
            Subscribe to our newsletter to receive the latest news, insights, and professional updates directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-all duration-300"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-brand-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-brand-blue-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {isSubmitted && (
            <div className="text-green-400 font-semibold animate-fade-in-up">
              ✓ Thank you for subscribing! Check your email for confirmation.
            </div>
          )}

          <p className="text-sm text-brand-blue-200 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;