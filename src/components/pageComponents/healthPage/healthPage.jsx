import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import axios from 'axios';
import { useLogin } from '../../../context/loginContext';
import HealthTable from './healthTable';

const host = process.env.REACT_APP_HOST;

export default function HealthPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({});
  const [investment, setInvestment] = useState([]);
  const { userToken } = useLogin();
  const [selectedPort, setSelectedPort] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${host}/api/v1/insurance`, { formData },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log("res",response);

      setShowPopup(false);
      setFormData({});
      handle();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect (() => {
    handle();
    console.log(investment)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[showPopup]);

  const handle = async () => {
    try {
      const response = await axios.get(`${host}/api/v1/insurance`,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log("reshandle",response.data.data.healthInsurance);

      setInvestment(response.data.data.healthInsurance);
    } catch (error) {
      console.error(error);
    }
  };


  function handlePortChange(event) {
    const selectedValue = event.target.value;
    if(selectedValue === "yes") setSelectedPort(true);
    else setSelectedPort(false);
  }


  return  (
    <div className="w-[160vh] p-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Investments</h2>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => setShowPopup(true)}
        >
          Add Health Insurance
        </button>
      </div>
      <div>
        <div>
          { investment && investment.length > 0  ?
          <HealthTable investment={investment}/> : null
          }
        </div>
      </div>
      <Popup open={showPopup} closeOnDocumentClick onClose={() => setShowPopup(false)}>
        <div className="p-4 bg-white rounded shadow-lg" style={{height: '80vh', overflowY:'auto'}}>
            <h3 className="text-xl mb-4 font-bold">Enter Health Insurance Details</h3>
              <div>
                <label className="block mb-2">Name</label>
                <input 
                  type="text" 
                  name="Name" 
                  placeholder="Name" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Age</label>
                <input 
                  type="number" 
                  name="Age" 
                  placeholder="Age" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Sum Assured</label>
                <input 
                  type="text" 
                  name="SumAssured" 
                  placeholder="Sum Assured" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Premium</label>
                <input 
                  type="text" 
                  name="Premium" 
                  placeholder="Premium" 
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
                <label className="block mb-2">Company</label>
                <input 
                  type="text" 
                  name="Company" 
                  placeholder="Company" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Product</label>
                <input 
                  type="text" 
                  name="Product" 
                  placeholder="Product" 
                  className="w-full mb-2 p-2 border border-gray-200"
                  onChange={handleInputChange}
                />
                </div>
                <label className="block mb-2">Port</label>
                <select name="hasSumAssured" className="w-full mb-2 p-2 border border-gray-200" onChange={handlePortChange}>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <div>
                  {
                    selectedPort === true ? (
                      <div>
                    <label className="block mb-2">Port Date</label>
                    <input 
                      type="date" 
                      name="PortDate" 
                      placeholder="Port Date" 
                      className="w-full mb-2 p-2 border border-gray-200"
                      onChange={handleInputChange}
                    />
                    <label className="block mb-2">Policy Renewal Start Date</label>
                    <input 
                      type="date" 
                      name="PolicyRenewalStartDate" 
                      placeholder="Policy Renewal Start Date" 
                      className="w-full mb-2 p-2 border border-gray-200"
                      onChange={handleInputChange}
                    />
                    <label className="block mb-2">Company</label>
                    <input 
                      type="text" 
                      name="Company" 
                      placeholder="Company" 
                      className="w-full mb-2 p-2 border border-gray-200"
                      onChange={handleInputChange}
                    />
                    <label className="block mb-2">Product</label>
                    <input 
                      type="text" 
                      name="Product" 
                      placeholder="Product" 
                      className="w-full mb-2 p-2 border border-gray-200"
                      onChange={handleInputChange}
                    />
                    <label className="block mb-2">Commulative</label>
                    <input 
                      type="text" 
                      name="Commulative" 
                      placeholder="Commulative" 
                      className="w-full mb-2 p-2 border border-gray-200"
                      onChange={handleInputChange}
                    />
                    <label className="block mb-2">PED</label>
                    <input 
                      type="text" 
                      name="Ped" 
                      placeholder="Ped" 
                      className="w-full mb-2 p-2 border border-gray-200"
                      onChange={handleInputChange}
                    />
                    </div>
                    ) : null
                  }
                </div>
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleSubmit}
                  >
                  Submit
                </button>
        </div>
      </Popup>
    </div>
  );
}