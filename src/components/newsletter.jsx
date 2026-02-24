import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubscribed(true);
      setEmail('');
      
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 relative overflow-hidden" id="newsletter">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      
      {/* Animated gradient blob */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Stay Updated</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-brand-blue-300 mx-auto mb-6"></div>
          <p className="text-xl text-brand-blue-100 max-w-2xl mx-auto">
            Get the latest tax updates, financial insights, and professional tips delivered to your inbox every week.
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-fade-in-up">
          {/* Left Column - Information */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-brand-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Tax Deadline Alerts</h3>
                <p className="text-brand-blue-100">Never miss important tax filing deadlines with our timely notifications.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-brand-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Expert Insights</h3>
                <p className="text-brand-blue-100">Gain valuable knowledge from our team of experienced chartered accountants.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-brand-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Market Analysis</h3>
                <p className="text-brand-blue-100">Stay informed with weekly market trends and financial analysis reports.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="newsletter-email" className="block text-sm font-semibold text-brand-blue-100 mb-3">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="newsletter-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 bg-white/10 backdrop-blur-sm placeholder-white/40 text-white focus:bg-white/20"
                    required
                  />
                </div>
              </div>

              {isSubscribed && (
                <div className="p-3 bg-emerald-500/20 border border-emerald-400/50 rounded-lg text-emerald-100 text-sm animate-pulse">
                  ✓ Successfully subscribed! Check your email for confirmation.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-brand-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-brand-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {loading ? 'Subscribing...' : 'Subscribe Now'}
              </button>

              <p className="text-xs text-brand-blue-100 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;