import React from 'react';

const EVisitingCard = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-brand-blue-900 via-brand-blue-800 to-brand-blue-900">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-brand-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>

      <div 
        className="relative z-10 h-full overflow-y-auto"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <style jsx>{`
          .relative.z-10::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto my-8 gap-8 p-4 sm:p-6 lg:p-8">
          {/* Left Side: Contact Card */}
          <div className="flex-1 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:border-blue-400/50 transition-all duration-300 hover:from-white/20 hover:to-white/10 animate-fade-in-left">
            <div className="flex flex-col items-center mb-8">
              {/* Header Logo */}
              <div className="flex items-center mb-6 gap-3">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  CA
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white leading-tight">VINAY NAVEEN & CO.</h1>
                  <p className="text-brand-blue-100 text-sm font-semibold">CHARTERED ACCOUNTANTS</p>
                </div>
              </div>
              
              {/* Profile Image */}
              <div className="mb-4 rounded-full overflow-hidden border-4 border-blue-400/50 shadow-2xl hover:border-blue-300 transition-all duration-300">
                <img src="/api/placeholder/120/120" alt="Profile of CA. (Dr) Vinay Mittal" className="w-28 h-28 object-cover" />
              </div>
              <h2 className="text-white font-bold text-lg text-center">CA. (Dr) Vinay Mittal</h2>
              <p className="text-brand-blue-200 text-sm mt-1 font-semibold">Managing Partner</p>
            </div>

            {/* Contact Details */}
            <div className="mb-8 space-y-4 text-brand-blue-100">
              <div className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-300 group">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                </svg>
                <p className="text-sm leading-relaxed group-hover:text-white transition-colors">F-7 Nehru Nagar III, 2nd Floor, Ghaziabad, Uttar Pradesh, India-201001</p>
              </div>
              <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300 group">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:vncgzb@gmail.com" className="text-sm hover:text-blue-300 transition-colors group-hover:text-white">vncgzb@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300 group">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m0 0a9 9 0 009-9m0 18a9 9 0 01-9-9"></path>
                </svg>
                <a href="#" className="text-sm hover:text-blue-300 transition-colors group-hover:text-white">cavinaymittal.com</a>
              </div>
              <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300 group">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+919910691575" className="text-sm hover:text-blue-300 transition-colors group-hover:text-white">+91 9910691575</a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-brand-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-brand-blue-700 transition-all duration-300 hover:shadow-lg font-medium text-sm group">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Call
              </button>
              <button className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-lg font-medium text-sm group">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 13.52l-1.04 3.825 3.923-1.029A9.868 9.868 0 0012 2.118z"/>
                </svg>
                WhatsApp
              </button>
              <button className="flex items-center justify-center px-4 py-3 bg-white/10 border border-white/30 text-white rounded-xl hover:bg-white/20 transition-all duration-300 font-medium text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                </svg>
                Maps
              </button>
              <button className="flex items-center justify-center px-4 py-3 bg-white/10 border border-white/30 text-white rounded-xl hover:bg-white/20 transition-all duration-300 font-medium text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Email
              </button>
            </div>
          </div>

          {/* Right Side: About Card */}
          <div className="flex-1 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:border-blue-400/50 transition-all duration-300 hover:from-white/20 hover:to-white/10 animate-fade-in-right">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-brand-blue-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">About Me</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="font-bold text-blue-300 mb-1 text-lg">CA. (Dr) Vinay Mittal</p>
                <p className="text-brand-blue-200 font-semibold">Managing Partner</p>
              </div>
              
              <div>
                <p className="text-brand-blue-100 text-sm leading-relaxed">
                  <span className="font-semibold text-blue-300">Qualifications:</span> B.Com, FCA, Cert Forensic Auditor (ICAI), Cert Concurrent Auditor (ICAI), PhD, Pursuing DISA
                </p>
              </div>
              
              <div className="border-l-2 border-blue-400 pl-4 py-2 bg-white/5 rounded">
                <p className="text-brand-blue-100 text-sm leading-relaxed">
                  Vinay Naveen & Co. is a professionally managed firm of distinguished Chartered Accountants, Corporate Financial Advisers, and Tax Consultants. We offer sound financial advice and personalized services, keeping pace with industry developments to meet our clients' evolving needs.
                </p>
              </div>
              
              <div className="pt-4 space-y-3">
                <h3 className="font-semibold text-white">Services Offered:</h3>
                <ul className="space-y-2 text-sm text-brand-blue-100">
                  <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Taxation & Compliance Services</span>
                  </li>
                  <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Audit & Assurance</span>
                  </li>
                  <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Financial Advisory</span>
                  </li>
                  <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Forensic Audit Services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-blue-900 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default EVisitingCard;