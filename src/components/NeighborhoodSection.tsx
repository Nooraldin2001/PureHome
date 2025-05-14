import React from 'react';
import { Link } from 'react-router-dom';

// Sample neighborhood data
const neighborhoods = [
  {
    id: 1,
    name: 'Yas Island',
    image: '/neighborhoods/yas-island.jpg',
    propertyCount: 35,
    description: 'Home to theme parks, shopping malls, and beautiful waterfront properties.',
  },
  {
    id: 2,
    name: 'Saadiyat Island',
    image: '/neighborhoods/saadiyat-island.jpg',
    propertyCount: 28,
    description: 'Cultural district with museums, pristine beaches, and luxury residences.',
  },
  {
    id: 3,
    name: 'Al Reem Island',
    image: '/neighborhoods/al-reem-island.jpg',
    propertyCount: 42,
    description: 'Modern high-rise apartments with stunning city and sea views.',
  },
  {
    id: 4,
    name: 'Al Raha Beach',
    image: '/neighborhoods/al-raha-beach.jpg',
    propertyCount: 23,
    description: 'Waterfront community with a mix of apartments and villas.',
  },
];

const NeighborhoodSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">Explore Areas</span>
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">
            Find Your Neighborhood
          </h2>
          <p className="text-text-light max-w-3xl mx-auto">
            Discover the perfect area to call home in Abu Dhabi with our neighborhood guides, featuring local insights and available properties.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {neighborhoods.map((neighborhood) => (
            <div key={neighborhood.id} className="group relative rounded-lg overflow-hidden shadow-lg">
              {/* Background Image */}
              <div className="h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue to-transparent z-10"></div>
                <img 
                  src={neighborhood.image} 
                  alt={neighborhood.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-1">{neighborhood.name}</h3>
                <p className="text-gray-200 text-sm mb-3">{neighborhood.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary text-sm font-semibold">
                    {neighborhood.propertyCount} Properties
                  </span>
                  <Link 
                    to={`/neighborhood/${neighborhood.id}`}
                    className="text-white hover:text-primary transition-colors text-sm font-medium"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Areas Button */}
        <div className="text-center mt-12">
          <Link to="/neighborhoods" className="btn btn-primary px-8 py-3">
            View All Areas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodSection; 