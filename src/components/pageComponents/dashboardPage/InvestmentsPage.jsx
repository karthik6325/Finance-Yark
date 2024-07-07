import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import axios from 'axios';
import { useLogin } from '../../../context/loginContext';

const host = process.env.REACT_APP_HOST;

const investmentTypes = [
  'Life insurance', 
  'Gold', 
  'Shares', 
  'Mutual funds', 
  'Bonds', 
  'Crypto', 
  'Other investments'
];

export default function Investments() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedType, setSelectedType] = useState('');
  const [formData, setFormData] = useState({});
  const [lifeInsurance, setLifeInsurance] = useState([]);
  const [otherInvestment, setOtherInvestment] = useState([]);
  const [investment, setInvestment] = useState([]);
  const { userToken } = useLogin();
  
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

  const handleSubmit = async () => {
    try {
      console.log("tokennnnn",userToken)
      const response = await axios.post(`${host}/api/v1/addinvest`, { selectedType, formData },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log("res",response);

      // Reset the form after submission
      setShowPopup(false);
      setCurrentStep(1);
      setSelectedType('');
      setFormData({});
      handle();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect (() => {
    handle();
    console.log(investment, otherInvestment, lifeInsurance)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[showPopup]);

  const handle = async () => {
    try {
      const response = await axios.get(`${host}/api/v1/getinvests`,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log("res",response.data);

      setInvestment(response.data.data.investmentPortfolio);
      setOtherInvestment(response.data.data.otherInvestmets);
      setLifeInsurance(response.data.data.lifeInsurance);
    } catch (error) {
      console.error(error);
    }
  };

  return  (
    <div className="w-[160vh] p-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Investments</h2>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => setShowPopup(true)}
        >
          Add Investment
        </button>
      </div>
      <div>
        { investment && investment.length > 0 ?
        <div>
          <h2 className="text-xl font-semibold">Investments</h2>
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
            {investment && investment.map((item, index) => (
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
        : null
        }
        { lifeInsurance && lifeInsurance.length > 0 ?
         <div className='overflow-x-auto'>
          <h2 className="text-xl font-semibold mt-5 overflow-x-auto">Life Insurance</h2>
        <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 overflow-x-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Policy Number</th>
                <th className="py-2 px-4 border-b">Policy Start Date</th>
                <th className="py-2 px-4 border-b">Proposed Name</th>
                <th className="py-2 px-4 border-b">LifeInsured Name </th>
                <th className="py-2 px-4 border-b">Company Name</th>
                <th className="py-2 px-4 border-b">Product Name</th>
                <th className="py-2 px-4 border-b">Value</th>
                <th className="py-2 px-4 border-b">Premium Paying Term</th>
                <th className="py-2 px-4 border-b">Policy Term</th>
                <th className="py-2 px-4 border-b">Guaranteed / Non-Guaranteed / Market Linked</th>
                <th className="py-2 px-4 border-b">Income Benefit Lumpsum  </th>
                <th className="py-2 px-4 border-b">Death Benefit </th>
                <th className="py-2 px-4 border-b">Maturity Date</th>
                <th className="py-2 px-4 border-b">Nominee </th>
                <th className="py-2 px-4 border-b">Relationship</th>
                <th className="py-2 px-4 border-b">Notes</th>
              </tr>
            </thead>
          <tbody>
            {lifeInsurance && lifeInsurance.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{item.Number }</td>
                <td className="py-2 px-4 border-b">{new Date(item.PolicyStartDate).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{item.ProposedName}</td>
                <td className="py-2 px-4 border-b">{item.LifeInsuredName}</td>
                <td className="py-2 px-4 border-b">{item.CompanyName}</td>
                <td className="py-2 px-4 border-b">{item.ProductName}</td>
                <td className="py-2 px-4 border-b">{item.Value}</td>
                <td className="py-2 px-4 border-b">{item.PremiumPayingTerm}</td>
                <td className="py-2 px-4 border-b">{item.PolicyTerm}</td>
                <td className="py-2 px-4 border-b">{item.GuaranteedNonGuaranteedMarketLinked}</td>
                <td className="py-2 px-4 border-b">{item.IncomeBenefitLumpsum  }</td>
                <td className="py-2 px-4 border-b">{item.DeathBenefit }</td>
                <td className="py-2 px-4 border-b">{new Date(item.MaturityDate).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{item.Nominee }</td>
                <td className="py-2 px-4 border-b">{item.Relationship}</td>
                <td className="py-2 px-4 border-b">{item.Notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
        : null
        }
        { otherInvestment && otherInvestment.length > 0 ?
        <div>
          <h3 className="text-xl font-semibold mt-5">Other Investments</h3>
        <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Number</th>
                <th className="py-2 px-4 border-b text-left">Value</th>
                <th className="py-2 px-4 border-b text-left">Start Date</th>
                <th className="py-2 px-4 border-b text-left">End Date</th>
              </tr>
            </thead>
          <tbody>
            {otherInvestment && otherInvestment.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-left">{item.Name}</td>
                <td className="py-2 px-4 border-b text-left">{item.Number}</td>
                <td className="py-2 px-4 border-b text-left">{item.Value}</td>
                <td className="py-2 px-4 border-b text-left">{new Date(item.StartDate).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b text-left">{new Date(item.EndDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        : null
      }
      </div>

      <Popup open={showPopup} closeOnDocumentClick onClose={() => setShowPopup(false)}>
        <div className="p-4 bg-white rounded shadow-lg" style={{height: '80vh', overflowY:'auto'}}>
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
            <h3 className="text-xl mb-4 font-bold">Enter Investment Details</h3>
            {selectedType === 'Life insurance' && (
              <div>
                <label className="block mb-2">Policy Number</label>
                <input 
                  type="text" 
                  name="Number" 
                  placeholder="Policy Number" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Policy Start Date</label>
                <input 
                  type="date" 
                  name="PolicyStartDate" 
                  placeholder="Policy Start Date" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Proposed Name</label>
                <input 
                  type="text" 
                  name="ProposedName" 
                  placeholder="Proposed Name" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">LifeInsured Name</label>
                <input 
                  type="text" 
                  name="LifeInsuredName" 
                  placeholder="LifeInsured Name" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Company Name</label>
                <input 
                  type="text" 
                  name="CompanyName" 
                  placeholder="Company Name" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Product Name</label>
                <input 
                  type="text" 
                  name="ProductName" 
                  placeholder="Product Name" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Value</label>
                <input 
                  type="text" 
                  name="Value" 
                  placeholder="Value" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Premium Paying Term</label>
                <input 
                  type="text" 
                  name="PremiumPayingTerm" 
                  placeholder="Premium Paying Term" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Policy Term</label>
                <input 
                  type="text" 
                  name="PolicyTerm" 
                  placeholder="Policy Term" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Guaranteed / Non-Guaranteed / Market Linked</label>
                <input 
                  type="text" 
                  name="GuaranteedNonGuaranteedMarketLinked" 
                  placeholder="Guaranteed Non Guaranteed Market Linked" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Income Benefit Lumpsum</label>
                <input 
                  type="text" 
                  name="IncomeBenefitLumpsum" 
                  placeholder="Income Benefit Lumpsum" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Death Benefit</label>
                <input 
                  type="text" 
                  name="DeathBenefit" 
                  placeholder="Death Benefit" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Nominee</label>
                <input 
                  type="text" 
                  name="Nominee" 
                  placeholder="Nominee" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Maturity Date</label>
                <input 
                  type="date" 
                  name="MaturityDate" 
                  placeholder="Maturity Date" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Relationship</label>
                <input 
                  type="text" 
                  name="Relationship" 
                  placeholder="Relationship" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Notes</label>
                <input 
                  type="text" 
                  name="Notes" 
                  placeholder="Notes" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
              </div>
            )}
            {(selectedType === 'Gold' || selectedType === 'Shares' || selectedType === 'Mutual funds' || selectedType === 'Bonds' || selectedType === 'Crypto') && (
              <div>
                <label className="block mb-2">Number</label>
                <input 
                  type="text" 
                  name="Number" 
                  placeholder="Number" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Scheme Name</label>
                <input 
                  type="text" 
                  name="SchemeName" 
                  placeholder="Scheme Name" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">SIP Lumpsum</label>
                <input 
                  type="text" 
                  name="SIPLumpsum" 
                  placeholder="SIP Lumpsum" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Committed For Years</label>
                <input 
                  type="text" 
                  name="CommittedForYears" 
                  placeholder="Committed For Years" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Current Value</label>
                <input 
                  type="text" 
                  name="CurrentValue" 
                  placeholder="Current Value" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Maturity Date</label>
                <input 
                  type="date" 
                  name="MaturityDate" 
                  placeholder="Maturity Date" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Expected Returns</label>
                <input 
                  type="text" 
                  name="ExpectedReturns" 
                  placeholder="Expected Returns" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Future Of Investments</label>
                <input 
                  type="text" 
                  name="Future Of Investments" 
                  placeholder="Future Of Investments" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
              </div>
            )}
            {selectedType === 'Other investments' && (
              <div>
                <label className="block mb-2">Investment Name</label>
                <input 
                  type="text" 
                  name="Name" 
                  placeholder="Investment Name" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Investment Number</label>
                <input 
                  type="text" 
                  name="Number" 
                  placeholder="Investment Number" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Value</label>
                <input 
                  type="text" 
                  name="Value" 
                  placeholder="Value" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Start Date</label>
                <input 
                  type="date" 
                  name="StartDate" 
                  placeholder="Start Date" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">End Date</label>
                <input 
                  type="date" 
                  name="EndDate" 
                  placeholder="End Date" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
              </div>
            )}
              <div className="btn-container flex justify-between mt-4">
                <button 
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handlePrevious}
                  >
                  Previous
                </button>
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleSubmit}
                  >
                  Submit
                </button>
              </div>
            </>
          )}
        </div>
      </Popup>
    </div>
  );
}