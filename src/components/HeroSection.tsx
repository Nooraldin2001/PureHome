import React, { useState } from 'react';
import { FaSearch, FaSliders } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [searchType, setSearchType] = useState('sale');
  const [location, setLocation] = useState('');
  const [keyword, setKeyword] = useState('');
  
  const toggleAdvanced = () => {
    setIsAdvancedOpen(!isAdvancedOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would navigate to search results
    console.log('Search:', { keyword, searchType, location });
  };

  return (
    <section className="relative h-screen bg-dark-blue flex items-center justify-center">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-dark-blue bg-opacity-50 z-10"></div>
        <video 
          className="absolute w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container-custom relative z-20 px-4 py-10 md:py-0">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Find Your Dream Property</h1>
          <p className="text-lg text-gray-200">We've more than 50,000 apartments for you to take your pick</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-4xl mx-auto">
          <form onSubmit={handleSearch}>
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              {/* Keyword Search */}
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter keyword here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>

              {/* Property Type */}
              <div className="lg:w-1/4">
                <select 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                >
                  <option value="">Select Type</option>
                  <option value="sale">Sale</option>
                  <option value="buy">Buy</option>
                  <option value="rent">Rent</option>
                </select>
              </div>

              {/* Location */}
              <div className="lg:w-1/4">
                <select 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">Select Location</option>
                  <option value="abu-dhabi">Abu Dhabi</option>
                  <option value="al-reem-island">Al Reem Island</option>
                  <option value="yas-island">Yas Island</option>
                  <option value="saadiyat-island">Saadiyat Island</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleAdvanced}
                  className="p-3 text-text-dark border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none"
                  aria-label="Advanced Search"
                >
                  <FaSliders />
                </button>
                <button
                  type="submit"
                  className="flex-1 btn btn-primary px-6 py-3 flex items-center justify-center gap-2"
                >
                  <FaSearch />
                  <span>Search</span>
                </button>
              </div>
            </div>

            {/* Advanced Search Options */}
            {isAdvancedOpen && (
              <div className="pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Any</option>
                    <option value="studio">Studio</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Any</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reference Number</label>
                  <input 
                    type="text" 
                    placeholder="Listing Reference Number" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="md:col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amenities</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {['Security', 'Air Conditioning', 'Balcony', 'Gym', 'Swimming Pool', 'Parking'].map((amenity) => (
                      <div key={amenity} className="flex items-center">
                        <input
                          id={`amenity-${amenity}`}
                          type="checkbox"
                          className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label htmlFor={`amenity-${amenity}`} className="ml-2 text-sm text-gray-700">
                          {amenity}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 