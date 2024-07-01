import React, { useState } from 'react';
import Finance from 'financejs';

const finance = new Finance();

const CompoundInterestCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(10000);
  const [investmentFrequency, setInvestmentFrequency] = useState('Monthly');
  const [investmentDuration, setInvestmentDuration] = useState(5);
  const [stayInvestedDuration, setStayInvestedDuration] = useState(10);
  const [rateOfReturn, setRateOfReturn] = useState(8);
  const [futureValue, setFutureValue] = useState(0);

  const calculateFutureValue = () => {
    let n = 0;
    if (investmentFrequency === 'Monthly') {
      n = 12;
    } else if (investmentFrequency === 'Half-yearly') {
      n = 2;
    } else if (investmentFrequency === 'Yearly') {
      n = 1;
    } else if (investmentFrequency === 'Once') {
      n = 1;
    }

    const r = rateOfReturn / 100;
    const t = investmentDuration;
    const P = investmentAmount;

    let A = 0;
    if (investmentFrequency === 'Once') {
      A = P * Math.pow(1 + r, stayInvestedDuration);
    } else {
      const nt = n * stayInvestedDuration;
      const nr = r / n;
      A = P * (Math.pow(1 + nr, nt) - 1) / nr;
    }

    setFutureValue(A.toFixed(2));
  };

  return (
    <div className="flex flex-col w-full h-full justify-between p-10 bg-white rounded-md shadow-md max-w-full mx-auto">
      <div className="w-full p-5">
        <h2 className="text-2xl font-bold mb-5">Compound Interest Calculator</h2>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Investment Amount (₹): </label>
          <input
            type="number"
            min="0"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Investment Frequency: </label>
          <select
            value={investmentFrequency}
            onChange={(e) => setInvestmentFrequency(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="Monthly">Monthly</option>
            <option value="Half-yearly">Half-yearly</option>
            <option value="Yearly">Yearly</option>
            <option value="Once">Once</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Investment Duration (Years): </label>
          <select
            value={investmentDuration}
            onChange={(e) => setInvestmentDuration(Number(e.target.value))}
            className="w-full p-2 border rounded"
          >
            {[5, 10, 15, 20, 25, 30].map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Stay Invested Duration (Years): </label>
          <select
            value={stayInvestedDuration}
            onChange={(e) => setStayInvestedDuration(Number(e.target.value))}
            className="w-full p-2 border rounded"
          >
            {[5, 10, 15, 20, 25, 30].map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Expected Rate of Return (% Annually): </label>
          <input
            type="number"
            min="0"
            value={rateOfReturn}
            onChange={(e) => setRateOfReturn(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="w-full p-5">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={calculateFutureValue}>
            Calculate
          </button>
          {futureValue > 0 && (
            <div className="mt-10 p-5 bg-gray-100 rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-5">Future Value of Investment</h3>
              <p>
                <strong>₹{futureValue}</strong>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;
