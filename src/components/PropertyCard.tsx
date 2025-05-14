import React from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaBath, FaRulerCombined, FaRegHeart, FaSearch, FaExchangeAlt } from 'react-icons/fa';

interface PropertyFeature {
  beds: number;
  baths: number;
  sqft: number;
  refNumber: string;
}

export interface PropertyProps {
  id: string;
  title: string;
  price: number;
  image: string;
  type: 'sale' | 'rent';
  location: string;
  category: string;
  features: PropertyFeature;
  popular?: boolean;
}

const PropertyCard: React.FC<PropertyProps> = ({
  id,
  title,
  price,
  image,
  type,
  location,
  category,
  features,
  popular = false,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
      <div className="relative">
        {/* Property Image */}
        <Link to={`/property/${id}`}>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-56 object-cover"
          />
        </Link>
        
        {/* Listing Type & Popular Badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-md ${type === 'sale' ? 'bg-primary' : 'bg-blue-500'}`}>
            {type === 'sale' ? 'For Sale' : 'For Rent'}
          </span>
        </div>
        
        {popular && (
          <div className="absolute top-4 right-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-md bg-green-500">
              Popular
            </span>
          </div>
        )}
        
        {/* Price */}
        <div className="absolute bottom-4 left-4 bg-dark-blue bg-opacity-80 text-white px-3 py-1 rounded-md">
          <span className="font-bold">AED {price.toLocaleString()}</span>
        </div>
        
        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors">
            <FaRegHeart />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors">
            <FaExchangeAlt />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors">
            <FaSearch />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        {/* Category */}
        <div className="mb-2">
          <Link 
            to={`/category/${category.toLowerCase()}`}
            className="text-sm text-primary font-medium hover:underline"
          >
            {category}
          </Link>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
          <Link 
            to={`/property/${id}`}
            className="text-text-dark hover:text-primary transition-colors"
          >
            {title}
          </Link>
        </h3>
        
        {/* Location */}
        <div className="text-sm text-text-light mb-4">
          <span className="inline-flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
            </svg>
            {location}
          </span>
        </div>
        
        {/* Features */}
        <div className="flex flex-wrap justify-between text-sm border-t border-gray-200 pt-4">
          <div className="flex items-center mr-4 mb-2">
            <FaBed className="text-primary mr-2" />
            <span>
              <span className="font-medium">{features.beds}</span> Beds
            </span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <FaBath className="text-primary mr-2" />
            <span>
              <span className="font-medium">{features.baths}</span> Baths
            </span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <FaRulerCombined className="text-primary mr-2" />
            <span>
              <span className="font-medium">{features.sqft}</span> Sqft
            </span>
          </div>
        </div>
        
        {/* Reference Number */}
        <div className="mt-2 text-xs text-text-light">
          Ref: {features.refNumber}
        </div>
        
        {/* Action Button */}
        <div className="mt-4">
          <Link 
            to={`/property/${id}`}
            className="btn btn-primary w-full text-center"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard; 