import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-blue text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src="/logo.png" alt="Pure Home Real Estate" className="h-16" />
            </Link>
            <p className="text-gray-300 mb-4">
              Top real estate brokerage known for trusted services and core values. 
              Build your future with Pure Home Real Estate's amazing property listings.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-primary" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-primary" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-primary" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-primary" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/buy" className="text-gray-300 hover:text-primary transition-colors">Properties for Sale</Link>
              </li>
              <li>
                <Link to="/rent" className="text-gray-300 hover:text-primary transition-colors">Properties for Rent</Link>
              </li>
              <li>
                <Link to="/offplan-projects" className="text-gray-300 hover:text-primary transition-colors">Offplan Projects</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-300 hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-primary transition-colors">Property Sales</li>
              <li className="text-gray-300 hover:text-primary transition-colors">Property Rentals</li>
              <li className="text-gray-300 hover:text-primary transition-colors">Property Management</li>
              <li className="text-gray-300 hover:text-primary transition-colors">Investment Advisory</li>
              <li className="text-gray-300 hover:text-primary transition-colors">Mortgage Services</li>
              <li className="text-gray-300 hover:text-primary transition-colors">Legal Assistance</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3" />
                <span className="text-gray-300">123 Business Bay, Abu Dhabi, UAE</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary mr-3" />
                <a href="tel:+9715XXXXXXXX" className="text-gray-300 hover:text-primary">+971 5XX XXX XXX</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary mr-3" />
                <a href="mailto:info@purehome-re.ae" className="text-gray-300 hover:text-primary">info@purehome-re.ae</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Pure Home Real Estate. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 