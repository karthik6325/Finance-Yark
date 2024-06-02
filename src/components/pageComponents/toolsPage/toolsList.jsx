import React, { useState } from 'react';
import FinanceCalculator from './financeCalculator'; 
import EducationPlanningCalculator from './educationCalculator';

const ToolsList = () => {
  const [activeCalculator, setActiveCalculator] = useState(null);

  const handleButtonClick = (calculatorType) => {
    setActiveCalculator(calculatorType);
  };

  return (
    <div className="p-20 relative flex-col justify-center overflow-hidden bg-gray-50">
      <section id="features">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center text-center">
          <h2 className="font-heading font-bold p-20 text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Tools</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center rounded-md">
          <button 
            className="m-2 px-4 py-2 bg-blue-500 text-white rounded" 
            onClick={() => handleButtonClick('FIRE Calculator')}
          >
            Fire Calculator
          </button>
          <button 
            className="m-2 px-4 py-2 bg-blue-500 text-white rounded" 
            onClick={() => handleButtonClick('Education Calculator')}
          >
            Education Calculator
          </button>
          <button 
            className="m-2 px-4 py-2 bg-blue-500 text-white rounded" 
            onClick={() => handleButtonClick('Other Calculator 2')}
          >
            Other Calculator 2
          </button>
          <button 
            className="m-2 px-4 py-2 bg-blue-500 text-white rounded" 
            onClick={() => handleButtonClick('Other Calculator 3')}
          >
            Other Calculator 3
          </button>
          <button 
            className="m-2 px-4 py-2 bg-blue-500 text-white rounded" 
            onClick={() => handleButtonClick('Other Calculator 4')}
          >
            Other Calculator 4
          </button>
        </div>
      </section>
      <section id="finance-calculator" className="mt-10" style={{ height: '1000px' }}>
        <div className="flex justify-center items-center h-full bg-white rounded shadow">
          {activeCalculator === 'FIRE Calculator' ? <FinanceCalculator /> : 
          activeCalculator === 'Education Calculator'?<EducationPlanningCalculator/>:<p>Select a calculator to load</p>
          }
        </div>
      </section>
    </div>
  );
};

export default ToolsList;
