import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ChildEducationPlanningCalculator = () => {
  const [childCurrentAge, setChildCurrentAge] = useState(4);
  const [ageOfHigherEducation, setAgeOfHigherEducation] = useState(18);
  const [expectedRateOfReturn, setExpectedRateOfReturn] = useState(10);
  const [inflationRate, setInflationRate] = useState(6);
  const [presentCostOfEducation, setPresentCostOfEducation] = useState(900000);
  const [results, setResults] = useState({});

  useEffect(() => {
    const calculateChildEducationPlanning = () => {
      const yearsToEducation = ageOfHigherEducation - childCurrentAge;
      const futureValue = presentCostOfEducation * Math.pow((1 + expectedRateOfReturn / 100 + inflationRate / 100), yearsToEducation);

      const monthlyInvestmentRequired = futureValue / (yearsToEducation * 12);

      setResults({
        futureValue: futureValue.toFixed(2),
        monthlyInvestmentRequired: monthlyInvestmentRequired.toFixed(2)
      });
    };

    calculateChildEducationPlanning();
  }, [childCurrentAge, ageOfHigherEducation, expectedRateOfReturn, inflationRate, presentCostOfEducation]);

  const chartData = {
    labels: ['Present Cost of Education', 'Future Cost of Education'],
    datasets: [
      {
        label: 'Amount (₹)',
        data: [
          presentCostOfEducation,
          results.futureValue
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="flex flex-col md:flex-row justify-between p-10 bg-white rounded-md shadow-md max-w-full mx-auto">
      <div className="w-full md:w-1/2 p-5">
        <h2 className="text-2xl font-bold mb-5">Child Education Planning Calculator</h2>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Child's Current Age: {childCurrentAge}</label>
          <input
            type="number"
            min="0"
            max="100"
            value={childCurrentAge}
            onChange={(e) => setChildCurrentAge(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Age of Higher Education: {ageOfHigherEducation}</label>
          <input
            type="number"
            min="0"
            max="100"
            value={ageOfHigherEducation}
            onChange={(e) => setAgeOfHigherEducation(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Expected Annual Rate Of Return (%): {expectedRateOfReturn}</label>
          <input
            type="number"
            min="0"
            max="100"
            value={expectedRateOfReturn}
            onChange={(e) => setExpectedRateOfReturn(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Assumed Inflation Rate (%): {inflationRate}</label>
          <input
            type="number"
            min="0"
            max="100"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Present Cost of Higher Education: ₹{presentCostOfEducation}</label>
          <input
            type="number"
            min="0"
            max="10000000"
            value={presentCostOfEducation}
            onChange={(e) => setPresentCostOfEducation(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-5">
        <div className="mb-5">
          <Line data={chartData} options={{ maintainAspectRatio: false }} />
        </div>
        <div className="mb-5">
          <h2 className="text-2xl font-bold mb-2">Results</h2>
          <p className="mb-2">Future Cost of Education: ₹{results.futureValue}</p>
          <p className="mb-2">Monthly Investment Required: ₹{results.monthlyInvestmentRequired}</p>
        </div>
      </div>
    </div>
  );
};

export default ChildEducationPlanningCalculator;
