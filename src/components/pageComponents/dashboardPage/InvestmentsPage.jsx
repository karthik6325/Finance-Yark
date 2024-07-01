import React, { useState } from 'react';
import Popup from 'reactjs-popup';

const investmentTypes = [
  'Life insurance', 
  'Gold', 
  'Shares', 
  'Mutual funds', 
  'Bonds', 
  'Crypto', 
  'Other investments'
];

export default function Investments( ) {
  const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedType, setSelectedType] = useState('');
  const [formData, setFormData] = useState({});
  const investments = [
    {
        planName: 'Plan A',
        portfolio: 'P123456',
        dueDate: '2024-07-15',
        premium: '$1200',
        value: '$15000',
        maturity: '2025-12-01',
        goal: 'Retirement',
    },
    {
        planName: 'Plan B',
        portfolio: 'P789012',
        dueDate: '2024-08-20',
        premium: '$800',
        value: '$10000',
        maturity: '2026-03-15',
        goal: 'Education',
    },
    {
        planName: 'Plan A',
        portfolio: 'P123456',
        dueDate: '2024-07-15',
        premium: '$1200',
        value: '$15000',
        maturity: '2025-12-01',
        goal: 'Retirement',
    },
    {
        planName: 'Plan B',
        portfolio: 'P789012',
        dueDate: '2024-08-20',
        premium: '$800',
        value: '$10000',
        maturity: '2026-03-15',
        goal: 'Education',
    },
    // Add more rows as needed
];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Handle form submission logic here, such as updating state or making an API call
    console.log(formData);
    setShowPopup(false);
    setCurrentStep(1);
    setSelectedType('');
    setFormData({});
  };

  return (
    <div className="p-4 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Investments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Plan Name</th>
              <th className="py-2 px-4 border-b">Portfolio (Policy No)</th>
              <th className="py-2 px-4 border-b">Due Date</th>
              <th className="py-2 px-4 border-b">Premium</th>
              <th className="py-2 px-4 border-b">Value</th>
              <th className="py-2 px-4 border-b">Maturity</th>
              <th className="py-2 px-4 border-b">Goal</th>
            </tr>
          </thead>
          <tbody>
            {investments.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{item.planName}</td>
                <td className="py-2 px-4 border-b">{item.portfolio}</td>
                <td className="py-2 px-4 border-b">{item.dueDate}</td>
                <td className="py-2 px-4 border-b">{item.premium}</td>
                <td className="py-2 px-4 border-b">{item.value}</td>
                <td className="py-2 px-4 border-b">{item.maturity}</td>
                <td className="py-2 px-4 border-b">{item.goal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button 
        className="fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => setShowPopup(true)}
      >
        Add
      </button>

      <Popup open={showPopup} closeOnDocumentClick onClose={() => setShowPopup(false)}>
        <div className="p-4 bg-white rounded shadow-lg">
          {currentStep === 1 && (
            <>
              <h3 className="text-xl mb-4">Select Investment Type</h3>
              <select 
                className="w-full mb-4 p-2 border border-gray-200" 
                value={selectedType} 
                onChange={handleTypeChange}
              >
                <option value="">Select type</option>
                {investmentTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
              <button 
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleNext}
                disabled={!selectedType}
              >
                Next
              </button>
            </>
          )}

          {currentStep === 2 && (
            <>
              <h3 className="text-xl mb-4">Enter Investment Details</h3>
              {selectedType === 'Life insurance' && (
                <div>
                  {/* Render Life insurance form fields */}
                  <input 
                    type="text" 
                    name="PolicyName" 
                    placeholder="Policy Name" 
                    className="w-full mb-2 p-2 border border-gray-200"
                    onChange={handleInputChange}
                  />
                  <input 
                    type="date" 
                    name="PolicyStartDate" 
                    placeholder="Policy Start Date" 
                    className="w-full mb-2 p-2 border border-gray-200"
                    onChange={handleInputChange}
                  />
                  {/* Add other fields for Life insurance */}
                </div>
              )}
              {selectedType !== 'Life insurance' && (
                <div>
                  {/* Render form fields for other investments */}
                  <input 
                    type="text" 
                    name="PortfolioName" 
                    placeholder="Portfolio Name" 
                    className="w-full mb-2 p-2 border border-gray-200"
                    onChange={handleInputChange}
                  />
                  <input 
                    type="text" 
                    name="SchemeName" 
                    placeholder="Scheme Name" 
                    className="w-full mb-2 p-2 border border-gray-200"
                    onChange={handleInputChange}
                  />
                  {/* Add other fields for other investments */}
                </div>
              )}
              <button 
                className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button 
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </>
          )}
        </div>
      </Popup>
    </div>
  );
}