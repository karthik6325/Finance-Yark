import React, { useState } from 'react';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [investmentTerm, setInvestmentTerm] = useState(1); // Years
  const [interestRate, setInterestRate] = useState(12); // Annual percentage
  const [maturityAmount, setMaturityAmount] = useState(0);

  const calculateSIP = () => {
    const interestPerMonth = interestRate / 100 / 12;
    const totalNumberOfPayments = investmentTerm * 12;

    const maturityAmount =
      monthlyInvestment *
      (((1 + interestPerMonth) ** totalNumberOfPayments - 1) / interestPerMonth) *
      (1 + interestPerMonth);

    setMaturityAmount(maturityAmount.toFixed(0));
  };

  return (
    <div className="flex flex-col w-full h-full justify-between p-10 bg-white rounded-md shadow-md max-w-full mx-auto">
      <div className="w-full p-5">
        <h2 className="text-2xl font-bold mb-5">SIP Calculator</h2>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Monthly Investment: ₹</label>
          <input
            type="number"
            min="0"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Investment Term (Years):</label>
          <input
            type="number"
            min="0"
            value={investmentTerm}
            onChange={(e) => setInvestmentTerm(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Interest Rate (% per Annum):</label>
          <input
            type="number"
            min="0"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={calculateSIP}>
          Calculate
        </button>
        {maturityAmount > 0 && (
          <div className="mt-10 p-5 bg-gray-100 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-5">Maturity Amount</h3>
            <p>
              <strong>₹{maturityAmount}</strong>
            </p>
          </div>
        )}
      </div>
      <div className="w-full p-5">
      </div>
    </div>
  );
};

export default SIPCalculator;