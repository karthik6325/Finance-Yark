import React, { useState } from 'react';
import CompoundInterestCalculator from './compountInterestCalculator';

const PremiumToolsList = () => {
  const [activeCalculator, setActiveCalculator] = useState(null);

  const handleButtonClick = (calculatorType) => {
    setActiveCalculator(calculatorType);
  };

  return (
    <div className="p-20 relative flex-col justify-center overflow-hidden bg-gray-50">
      <section id="features">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-semibold">Investments</h2>
        </div>
        <div className="flex flex-wrap rounded-md">
          <button 
            className="m-2 px-4 py-2 bg-blue-500 text-white rounded" 
            onClick={() => handleButtonClick('Compound Interest Calculator')}
          >
            Compound Interest Calculator
          </button>
        </div>
      </section>
      <section id="finance-calculator" className="mt-10" style={{ height: '1500px' }}>
        <div className="flex justify-center items-center h-full bg-white rounded shadow">
          {
          activeCalculator === 'Compound Interest Calculator' ? <CompoundInterestCalculator/> :
          <p>Select a calculator to load</p>
          }
        </div>
      </section>
    </div>
  );
};

export default PremiumToolsList;
