import React, { useState } from 'react';

const MarriageCalculator = () => {
  const [currentAge, setCurrentAge] = useState(5);
  const [marriageAge, setMarriageAge] = useState(18);
  const [currentExpense, setCurrentExpense] = useState(1000000); // 10 lakh
  const [inflationRate, setInflationRate] = useState(6);
  const [interestRate, setInterestRate] = useState(8);
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);

  const calculateInvestment = () => {
    // Calculate the future cost of the marriage
    const yearsUntilMarriage = marriageAge - currentAge;
    const futureCost = currentExpense * Math.pow(1 + inflationRate / 100, yearsUntilMarriage);
    
    // Calculate the investment period in months
    const investmentPeriod = yearsUntilMarriage * 12;
    
    // Monthly interest rate
    const monthlyInterestRate = interestRate / 100 / 12;
    console.log(futureCost, investmentPeriod, monthlyInterestRate)
    
    // Use the finance.js PMT function to calculate the monthly investment
    const monthlyInvestment = (futureCost)/(Math.pow(1 + monthlyInterestRate, investmentPeriod) - 1);
  
    setMonthlyInvestment(monthlyInvestment.toFixed(2));
  };

  return (
    <div className="flex flex-col w-full h-full justify-between p-10 bg-white rounded-md shadow-md max-w-full mx-auto">
      <div className="w-full p-5">
        <h2 className="text-2xl font-bold mb-5">Marriage Planning Calculator</h2>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Current Child's Age: </label>
          <input
            type="number"
            min="0"
            value={currentAge}
            onChange={(e) => setCurrentAge(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Marriage Age: </label>
          <input
            type="number"
            min="0"
            value={marriageAge}
            onChange={(e) => setMarriageAge(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Current Wedding Expense (₹): </label>
          <input
            type="number"
            min="0"
            value={currentExpense}
            onChange={(e) => setCurrentExpense(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Inflation Rate (%): </label>
          <input
            type="number"
            min="0"
            value={inflationRate}
            onChange={(e) => setInflationRate(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Expected Return on Investment (%): </label>
          <input
            type="number"
            min="0"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="w-full p-5">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={calculateInvestment}>
            Calculate
          </button>
          {monthlyInvestment > 0 && (
            <div className="mt-10 p-5 bg-gray-100 rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-5">Monthly Investment Required</h3>
              <p>
                <strong>₹{monthlyInvestment}</strong>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarriageCalculator;
