import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-8" id="about">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">About N Saraswat & Co.</h1>
        
        {/* Main content container with photo and text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Photo Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional accounting team" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              {/* Optional overlay with company info */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-3 rounded">
                <p className="text-sm font-semibold">Serving clients with excellence</p>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="order-1 lg:order-2 text-gray-700 leading-relaxed space-y-6">
            <p className="text-lg">
              The Chartered Accountants have been a significant part of not just the Indian economy but also of all the companies in the country which plays a crucial role in ensuring financial health. A Chartered Accountant is a professional who provides financial and tax services to individuals, businesses, and organizations. They are also known as Certified Public Accountants (CAPs). CA in Jaipur works in all areas of finance, including auditing, taxation, financial planning, etc.
            </p>
            
            <p>
              We are a team of dedicated professionals providing comprehensive financial, accounting, and compliance services to businesses, startups, and individuals.
            </p>

            <p>
              Led by CA Nikhil Saraswat, the firm brings strong experience in audit, taxation, and financial management, including exposure to international accounting practices.
            </p>

            <p>
              Our mission is to deliver accurate, timely, and practical financial solutions that help businesses stay compliant and grow efficiently.
            </p>

            {/* Key highlights */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose N Saraswat & Co.?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Professional Team</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Expert Knowledge</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Personalized Service</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Latest Compliance Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;