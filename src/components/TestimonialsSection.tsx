import React, { useState } from 'react';
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Ahmed Al Marzouqi',
    role: 'Property Buyer',
    image: '/testimonials/testimonial-1.jpg',
    rating: 5,
    text: 'Pure Home made my property search incredibly easy. Their team was attentive, professional, and genuinely cared about finding the perfect home for my family. I couldn\'t be happier with the service and my new apartment!',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Property Investor',
    image: '/testimonials/testimonial-2.jpg',
    rating: 4.5,
    text: 'As an investor, I appreciate the market insights and transparency that Pure Home offers. They helped me secure multiple investment properties with great ROI potential. Their knowledge of Abu Dhabi\'s real estate market is unmatched.',
  },
  {
    id: 3,
    name: 'Mohammed Al Hashimi',
    role: 'First-time Buyer',
    image: '/testimonials/testimonial-3.jpg',
    rating: 5,
    text: 'Being a first-time buyer was intimidating, but Pure Home guided me through every step of the process. They answered all my questions and found me a property that matched all my requirements within my budget.',
  },
  {
    id: 4,
    name: 'Fatima Al Zaabi',
    role: 'Property Seller',
    image: '/testimonials/testimonial-4.jpg',
    rating: 4.5,
    text: 'I sold my villa through Pure Home and was impressed with how quickly they found qualified buyers and handled the negotiations. Their marketing strategy and professional photography made my property stand out.',
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-star-${i}`} className="text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">What Our Clients Say</span>
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">
            Customer Reviews
          </h2>
          <p className="text-text-light max-w-3xl mx-auto">
            Read what our satisfied clients have to say about their experience working with Pure Home Real Estate.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 relative">
            <FaQuoteLeft className="text-primary opacity-20 text-6xl absolute top-6 left-6" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-text-dark">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-text-light mb-2">{testimonials[activeIndex].role}</p>
                  <div className="flex items-center justify-center md:justify-start">
                    {renderStars(testimonials[activeIndex].rating)}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-text-dark text-lg md:text-xl italic mb-8">
                "{testimonials[activeIndex].text}"
              </blockquote>
              
              <div className="flex justify-between items-center">
                <div className="text-sm text-text-light">
                  {activeIndex + 1} of {testimonials.length}
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={handlePrev}
                    className="p-2 rounded-full border border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <FaArrowLeft />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="p-2 rounded-full border border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-colors"
                    aria-label="Next testimonial"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 