import React, { useState, useEffect } from 'react';
import 'chart.js/auto';

const FinanceCalculator = () => {
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [inflation, setInflation] = useState(3);
  const [coastFireAge, setCoastFireAge] = useState(45);
  const [results, setResults] = useState({});

  useEffect(() => {
    const calculateFIRE = () => {
      const adjustedExpenseToday = monthlyExpense * 12;
      const yearsToRetirement = retirementAge - currentAge;
      const inflationMultiplier = Math.pow(1 + inflation / 100, yearsToRetirement);
      const expenseAtRetirement = adjustedExpenseToday * inflationMultiplier;

      const leanFIRE = expenseAtRetirement * 20;
      const fire = expenseAtRetirement * 25;
      const fatFIRE = expenseAtRetirement * 50;

      const yearsToCoast = coastFireAge - currentAge;
      const coastMultiplier = Math.pow(1 + inflation / 100, yearsToCoast);
      const coastFIRE = adjustedExpenseToday * coastMultiplier;

      setResults({
        expenseToday: adjustedExpenseToday.toFixed(2),
        expenseAtRetirement: expenseAtRetirement.toFixed(2),
        leanFIRE: leanFIRE.toFixed(2),
        fire: fire.toFixed(2),
        fatFIRE: fatFIRE.toFixed(2),
        coastFIRE: coastFIRE.toFixed(2)
      });
    };

    calculateFIRE();
  }, [monthlyExpense, currentAge, retirementAge, inflation, coastFireAge]);


  return (
    <div className="flex flex-col w-full h-full md:flex-row justify-between p-10 bg-white rounded-md shadow-md max-w-full mx-auto">
      <div className="w-full md:w-1/2 p-5">
        <h2 className="text-2xl font-bold mb-5">FIRE Calculator</h2>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Monthly Expense: ₹{monthlyExpense}</label>
          <input
            type="range"
            min="0"
            max="1000000"
            value={monthlyExpense}
            onChange={(e) => setMonthlyExpense(e.target.value)}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Current Age: {currentAge}</label>
          <input
            type="number"
            min="0"
            max="100"
            value={currentAge}
            onChange={(e) => setCurrentAge(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Retirement Age: {retirementAge}</label>
          <input
            type="number"
            min="0"
            max="100"
            value={retirementAge}
            onChange={(e) => setRetirementAge(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Inflation Rate: {inflation}%</label>
          <input
            type="range"
            min="0"
            max="30"
            value={inflation}
            onChange={(e) => setInflation(e.target.value)}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Desired Coast FIRE Age: {coastFireAge}</label>
          <input
            type="number"
            min="0"
            max="100"
            value={coastFireAge}
            onChange={(e) => setCoastFireAge(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className="md:w-1/2 p-5">
        {results && (
          <div className="mt-10 p-5 bg-gray-100 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-5">FIRE Results</h3>
            <p><strong>Expense Today:</strong> ₹{results.expenseToday}</p>
            <p><strong>Expense at Retirement Age:</strong> ₹{results.expenseAtRetirement}</p>
            <p><strong>Lean FIRE:</strong> ₹{results.leanFIRE}</p>
            <p><strong>FIRE:</strong> ₹{results.fire}</p>
            <p><strong>Fat FIRE:</strong> ₹{results.fatFIRE}</p>
            <p><strong>Coast FIRE:</strong> ₹{results.coastFIRE}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinanceCalculator;
