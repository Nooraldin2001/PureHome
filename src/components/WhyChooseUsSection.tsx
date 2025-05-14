import React from 'react';
import { FaSearchLocation, FaHandshake, FaShieldAlt, FaClock, FaMoneyBillWave, FaGlobe } from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: <FaSearchLocation />,
    title: 'Extensive Property Selection',
    description: 'Access to over 5,000 properties across Abu Dhabi and the UAE, including exclusive off-market listings.'
  },
  {
    id: 2,
    icon: <FaHandshake />,
    title: 'Expert Guidance',
    description: 'Our team of experienced real estate professionals provides personalized advice tailored to your needs.'
  },
  {
    id: 3,
    icon: <FaShieldAlt />,
    title: 'Trusted and Reliable',
    description: 'Licensed by all relevant authorities with a proven track record of successful transactions and satisfied clients.'
  },
  {
    id: 4,
    icon: <FaClock />,
    title: '24/7 Customer Service',
    description: 'We\'re always available to address your queries and concerns, ensuring a smooth experience.'
  },
  {
    id: 5,
    icon: <FaMoneyBillWave />,
    title: 'Competitive Pricing',
    description: 'Transparent fee structure with no hidden costs, ensuring you get the best value for your investment.'
  },
  {
    id: 6,
    icon: <FaGlobe />,
    title: 'International Standards',
    description: 'We adhere to global best practices in real estate, providing a world-class service experience.'
  }
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">Our Advantages</span>
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Properties
          </h2>
          <p className="text-text-light max-w-3xl mx-auto">
            Discover the Pure Home difference and see why we're the preferred choice for real estate in Abu Dhabi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="text-primary text-xl group-hover:text-white">
                  {feature.icon}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-text-dark mb-3">
                {feature.title}
              </h3>
              
              <p className="text-text-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-text-light mb-6 max-w-3xl mx-auto">
            Our commitment to excellence and customer satisfaction is at the heart of everything we do. Experience the Pure Home difference today.
          </p>
          
          <button className="btn btn-primary px-8 py-3">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 