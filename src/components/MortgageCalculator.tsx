import React, { useState, useEffect } from 'react';

const MortgageCalculator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState(3000000);
  const [interestRate, setInterestRate] = useState(5);
  const [downPayment, setDownPayment] = useState(5);
  const [loanTerm, setLoanTerm] = useState(15);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  
  // Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Calculate mortgage whenever inputs change
  useEffect(() => {
    const downPaymentAmount = propertyPrice * (downPayment / 100);
    const principal = propertyPrice - downPaymentAmount;
    const monthlyInterest = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    // Monthly payment formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const calculatedMonthlyPayment = principal * 
      (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) / 
      (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);
    
    setMonthlyPayment(isNaN(calculatedMonthlyPayment) ? 0 : calculatedMonthlyPayment);
    setLoanAmount(principal);
  }, [propertyPrice, interestRate, downPayment, loanTerm]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Form submitted:', { name, phone, email, propertyPrice, interestRate, downPayment, loanTerm });
    // Reset form
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="section-subtitle">Plan Your Investment</span>
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">
            Mortgage Calculator
          </h2>
          <p className="text-text-light max-w-3xl mx-auto">
            Estimate your monthly mortgage payments and plan your investment with our easy-to-use calculator.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column - Results and Contact Form */}
            <div className="lg:w-2/5 bg-dark-blue text-white p-8">
              <div>
                <h3 className="text-lg font-medium mb-2">Monthly Mortgage Payment</h3>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  AED{monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-2">Loan Amount</h3>
                <div className="text-2xl font-bold">
                  AED{loanAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">How can we contact you?</h3>
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-white/60"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-white/60"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-white/60"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-md transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            
            {/* Right Column - Calculator Inputs */}
            <div className="lg:w-3/5 p-8">
              <div className="mb-8">
                <label className="block text-text-dark font-medium mb-2">
                  Property Price
                </label>
                <div className="flex items-center mb-2">
                  <span className="bg-gray-100 px-3 py-2 rounded-l-md text-gray-700 border border-gray-300">AED</span>
                  <input
                    type="number"
                    className="flex-1 border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    value={propertyPrice}
                    onChange={(e) => setPropertyPrice(Number(e.target.value))}
                    min="100000"
                    max="10000000"
                    step="10000"
                  />
                  <span className="bg-gray-100 px-3 py-2 rounded-r-md text-gray-700 border border-gray-300">.00</span>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <label className="block text-text-dark font-medium">Interest Rate</label>
                  <span className="text-xl font-bold text-primary">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-1 text-sm text-gray-500">
                  <span>0%</span>
                  <span>20%</span>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <label className="block text-text-dark font-medium">Downpayment</label>
                  <span className="text-xl font-bold text-primary">{downPayment}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-1 text-sm text-gray-500">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="block text-text-dark font-medium">Mortgage Period</label>
                  <span className="text-xl font-bold text-primary">{loanTerm} years</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="25"
                  step="1"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-1 text-sm text-gray-500">
                  <span>1 year</span>
                  <span>25 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageCalculator; 