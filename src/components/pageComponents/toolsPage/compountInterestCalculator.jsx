import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const CompoundInterestCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(10000);
  const [investmentFrequency, setInvestmentFrequency] = useState('Yearly');
  const [investmentDuration, setInvestmentDuration] = useState(10);
  const [stayInvestedDuration, setStayInvestedDuration] = useState(15);
  const [rateOfReturn, setRateOfReturn] = useState(8);
  const [futureValue, setFutureValue] = useState(0);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

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

    let r = rateOfReturn / 100 / n;
    const P = investmentAmount;
    const nt = n * investmentDuration;

    let A = P;
    let B = 0;

    const years = [];
    const totalAmounts = [];
    const interestAmounts = [];
    const principalAmounts = [];

    for (let i = 1; i <= Math.max(nt, stayInvestedDuration * n); i++) {
      let tmp = A * r;
      if (i <= nt) B += P;
      if (i % n === 0) {
        years.push(new Date().getFullYear() + i / n);
        totalAmounts.push(A + tmp);
        interestAmounts.push(A + tmp - B);
        principalAmounts.push(B);
      }
      if (i < nt) A = A + tmp + P;
      else A = A + tmp;
    }

    setChartData({
      labels: years,
      datasets: [
        {
          label: 'Total Amount',
          backgroundColor: '#00C49F',
          data: totalAmounts,
        },
        {
          label: 'Principal Amount',
          backgroundColor: '#FFBB28',
          data: principalAmounts,
        },
        {
          label: 'Interest Amount',
          backgroundColor: '#FF8042',
          data: interestAmounts,
        },
      ],
    });

    setFutureValue(A.toFixed(0));
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
        {chartData.labels.length > 0 && (
          <div className="w-full p-5">
            <Bar
              data={chartData}
              options={{
                scales: {
                  x: { title: { display: true, text: 'Year' } },
                  y: { title: { display: true, text: 'Amount (₹)' } }
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;