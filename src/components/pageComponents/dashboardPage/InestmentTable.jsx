import React from 'react';


const InvestmentTable = ({ investment, investmentType }) => {

  return (
    <div>
      <h2 className="text-xl font-semibold mt-5">{investmentType}</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Number</th>
            <th className="py-2 px-4 border-b text-left">Scheme Name</th>
            <th className="py-2 px-4 border-b text-left">SIP Lumpsum</th>
            <th className="py-2 px-4 border-b text-left">Expected Returns</th>
            <th className="py-2 px-4 border-b text-left">Committed For Years</th>
            <th className="py-2 px-4 border-b text-left">Current Value</th>
            <th className="py-2 px-4 border-b text-left">Maturity Date</th>
          </tr>
        </thead>
        <tbody>
        {investment
        .filter(item => item.InvestmentType === investmentType)
        .map((item, index) => (
            <tr key={index}>
            <td className="py-2 px-4 border-b">{item.Number}</td>
            <td className="py-2 px-4 border-b">{item.SchemeName}</td>
            <td className="py-2 px-4 border-b">{item.SIPLumpsum}</td>
            <td className="py-2 px-4 border-b">{item.ExpectedReturns}</td>
            <td className="py-2 px-4 border-b">{item.CommittedForYears}</td>
            <td className="py-2 px-4 border-b">{item.CurrentValue}</td>
            <td className="py-2 px-4 border-b">{new Date(item.MaturityDate).toLocaleDateString()}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentTable;