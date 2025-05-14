import React, { useState } from 'react';
import PropertyCard, { PropertyProps } from './PropertyCard';

// Sample property data
const sampleProperties: PropertyProps[] = [
  {
    id: '1',
    title: 'Amazing 1BR Apt | Great Investment | Premium Facilities',
    price: 1000000,
    image: '/properties/property1.jpeg',
    type: 'sale',
    location: 'Yas Island, Abu Dhabi',
    category: 'Apartments',
    features: {
      beds: 1,
      baths: 2,
      sqft: 742,
      refNumber: 'Sale-174',
    },
    popular: true,
  },
  {
    id: '2',
    title: 'Modern 2BR with Beach Access | Panoramic Sea View',
    price: 1750000,
    image: '/properties/property2.jpg',
    type: 'sale',
    location: 'Saadiyat Island, Abu Dhabi',
    category: 'Apartments',
    features: {
      beds: 2,
      baths: 2,
      sqft: 1200,
      refNumber: 'Sale-185',
    },
  },
  {
    id: '3',
    title: 'Luxurious 3BR Villa | Private Pool | Family-friendly Community',
    price: 3500000,
    image: '/properties/property3.jpg',
    type: 'sale',
    location: 'Al Raha Beach, Abu Dhabi',
    category: 'Villas',
    features: {
      beds: 3,
      baths: 3,
      sqft: 2500,
      refNumber: 'Sale-196',
    },
    popular: true,
  },
  {
    id: '4',
    title: 'Spacious Studio | Fully Furnished | Near Metro',
    price: 45000,
    image: '/properties/property4.jpg',
    type: 'rent',
    location: 'Al Reem Island, Abu Dhabi',
    category: 'Apartments',
    features: {
      beds: 0,
      baths: 1,
      sqft: 550,
      refNumber: 'Rent-212',
    },
  },
  {
    id: '5',
    title: 'Elegant 2BR Apartment | High Floor | City View',
    price: 80000,
    image: '/properties/property5.jpg',
    type: 'rent',
    location: 'Corniche Road, Abu Dhabi',
    category: 'Apartments',
    features: {
      beds: 2,
      baths: 2,
      sqft: 1100,
      refNumber: 'Rent-241',
    },
  },
  {
    id: '6',
    title: 'Brand New 4BR Villa | Maid's Room | Community View',
    price: 4200000,
    image: '/properties/property6.jpg',
    type: 'sale',
    location: 'Al Jubail Island, Abu Dhabi',
    category: 'Villas',
    features: {
      beds: 4,
      baths: 4,
      sqft: 3200,
      refNumber: 'Sale-215',
    },
    popular: true,
  },
];

const PropertyListingsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'sale' | 'rent'>('all');

  const filteredProperties = activeFilter === 'all' 
    ? sampleProperties 
    : sampleProperties.filter(property => property.type === activeFilter);

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle inline-block">Find Your Dream Home</span>
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">
            Featured Properties
          </h2>
          <p className="text-text-light max-w-3xl mx-auto">
            Explore our handpicked selection of featured properties. These represent the pinnacle of luxury, comfort, and value in the most sought-after locations.
          </p>
          
          {/* Filter Tabs */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeFilter === 'all' ? 'bg-primary text-white' : 'text-text-dark hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeFilter === 'sale' ? 'bg-primary text-white' : 'text-text-dark hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter('sale')}
              >
                For Sale
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeFilter === 'rent' ? 'bg-primary text-white' : 'text-text-dark hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter('rent')}
              >
                For Rent
              </button>
            </div>
          </div>
        </div>
        
        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard 
              key={property.id}
              {...property}
            />
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn btn-primary px-8 py-3">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyListingsSection; 