import React, { useState, useEffect, useRef } from 'react';
import { FaHome, FaUsers, FaHandshake, FaTrophy } from 'react-icons/fa';

interface StatItemProps {
  icon: React.ReactNode;
  count: number;
  label: string;
  duration?: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, count, label, duration = 2000 }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime: number | null = null;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCurrentCount(Math.floor(progress * count));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [count, duration]);
  
  return (
    <div ref={counterRef} className="text-center p-6">
      <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <div className="text-primary text-2xl">
          {icon}
        </div>
      </div>
      <div className="text-3xl md:text-4xl font-bold text-text-dark mb-2">
        {currentCount.toLocaleString()}+
      </div>
      <div className="text-text-light">{label}</div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">Our Achievements</span>
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">
            Real Estate Figures by Numbers
          </h2>
          <p className="text-text-light max-w-3xl mx-auto">
            Our success in numbers reflects our commitment to excellence in the real estate market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem
            icon={<FaHome />}
            count={5000}
            label="Properties"
          />
          <StatItem
            icon={<FaUsers />}
            count={3200}
            label="Happy Clients"
          />
          <StatItem
            icon={<FaHandshake />}
            count={1800}
            label="Transactions"
          />
          <StatItem
            icon={<FaTrophy />}
            count={15}
            label="Industry Awards"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 