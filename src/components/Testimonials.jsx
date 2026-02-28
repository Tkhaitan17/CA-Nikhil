import React, { useMemo } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const reviews = useMemo(() => [
    {
      name: 'ANTRTX',
      company: 'Individual',
      role: 'Client',
      text: 'Very professional and reliable work by Nikhil Ji. He handled all my tax and compliance work smoothly and filed ITRs for all my employees on time.',
      rating: 5,
      avatar: '✓',
    },
    {
      name: 'Anshul Sharma',
      company: 'Individual',
      role: 'Client',
      text: 'Nikhil ji was very professional and honest in his work. His behavior was friendly and helpful throughout the process. I am completely satisfied with the service. Highly recommended!',
      rating: 5,
      avatar: '👥',
    },
    {
      name: 'Suhani Gupta',
      company: 'Individual',
      role: 'Client',
      text: 'Professional approach with clear communication. They make complex financial matters easy to understand.',
      rating: 5,
      avatar: '💚',
    },
    {
      name: 'Aryan Ojha',
      company: 'Business',
      role: 'Client',
      text: 'Excellent CA firm with highly professional and knowledgeable Team.',
      rating: 5,
      avatar: '⭐',
    },
  ], []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 relative overflow-hidden" id="testimonials">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-brand-blue-300 mx-auto mb-6"></div>
          <p className="text-lg text-brand-blue-100 max-w-3xl mx-auto">
            Listen to what our satisfied clients have to say about our services and expertise.
          </p>
        </div>

        {/* Testimonials Grid - All 4 items displayed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:from-white/15 hover:to-white/10"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-brand-blue-100 mb-6 leading-relaxed line-clamp-3">
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                <div className="text-2xl">{review.avatar}</div>
                <div>
                  <h4 className="font-bold text-white text-sm">{review.name}</h4>
                  <p className="text-xs text-brand-blue-200">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
