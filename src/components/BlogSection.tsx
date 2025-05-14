import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: '10 Tips for First-Time Property Buyers in Abu Dhabi',
    excerpt: 'Buying your first property can be overwhelming. Here are expert tips to navigate the Abu Dhabi real estate market with confidence.',
    image: '/blog/blog-1.jpg',
    author: 'Ahmed Al Mansoori',
    date: 'May 15, 2023',
    category: 'Buying Advice'
  },
  {
    id: 2,
    title: 'Investment Opportunities in Yas Island: What You Need to Know',
    excerpt: 'Yas Island continues to be a hotspot for property investment. Discover the latest trends and opportunities in this vibrant community.',
    image: '/blog/blog-2.jpg',
    author: 'Sarah Khan',
    date: 'June 3, 2023',
    category: 'Investment'
  },
  {
    id: 3,
    title: 'How to Maximize Your Rental Property Returns in 2023',
    excerpt: 'Learn effective strategies to increase your rental income and maximize returns on your investment properties in the current market.',
    image: '/blog/blog-3.jpg',
    author: 'Mohammed Al Hosani',
    date: 'July 21, 2023',
    category: 'Rental Properties'
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">Our Blog</span>
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">
            Latest Posts & News
          </h2>
          <p className="text-text-light max-w-3xl mx-auto">
            Stay updated with the latest real estate insights, market trends, and helpful tips from our experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link to={`/blog/${post.id}`} className="block relative">
                <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                  {post.category}
                </div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-56 object-cover transition-transform hover:scale-105"
                />
              </Link>
              
              <div className="p-6">
                <div className="flex text-sm text-text-light mb-3">
                  <span className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-2 text-primary" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <FaUser className="mr-2 text-primary" />
                    {post.author}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-text-dark hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-text-light mb-4">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-primary font-medium hover:text-text-dark transition-colors"
                >
                  Read More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blog" className="btn btn-primary px-8 py-3">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 