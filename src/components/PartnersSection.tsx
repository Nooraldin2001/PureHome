import React from 'react';

// Partner logo data
const partners = [
  { id: 1, name: 'Reportage', logo: '/partners/reportage-logo.jpg' },
  { id: 2, name: 'Emaar', logo: '/partners/emaar.jpg' },
  { id: 3, name: 'Aldar Properties', logo: '/partners/aldar-properties.jpg' },
  { id: 4, name: 'Azizi Developers', logo: '/partners/azizi-developers.jpg' },
  { id: 5, name: 'Meraas Properties', logo: '/partners/meraas-properties-logo.jpg' },
  { id: 6, name: 'Manazel', logo: '/partners/manazel-logo.jpg' },
  { id: 7, name: 'Imkan', logo: '/partners/imkan-logo.jpg' },
  { id: 8, name: 'Hydra Properties', logo: '/partners/hydra-properties.jpg' },
  { id: 9, name: 'Dubai Properties', logo: '/partners/dubai-properties.jpg' },
  { id: 10, name: 'Bloom', logo: '/partners/bloom.jpg' },
  { id: 11, name: 'Baraka', logo: '/partners/baraka-logo.jpg' },
  { id: 12, name: 'DP', logo: '/partners/dp-logo.jpg' },
];

const PartnersSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="mb-2">
              <span className="text-primary font-medium flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                Our Partners and Top Developers
              </span>
            </div>
            <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">
              We're going to become<br />partners for the long run
            </h2>
            <p className="text-text-light">
              We are partnered with the best real estate development companies in the UAE and GCC region
            </p>
          </div>
          
          <div className="md:w-2/3 md:pl-8">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {partners.map((partner) => (
                <div 
                  key={partner.id} 
                  className="bg-white rounded-md shadow-sm p-4 flex items-center justify-center transition-transform hover:scale-105"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-16 object-contain" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection; 