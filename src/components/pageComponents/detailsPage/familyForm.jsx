import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const host="http://localhost:3001";
// http://localhost:3001
// https://yark-backend.onrender.com

const UserDetails = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [userDetails, setUserDetails] = useState({
    maritalStatus: '',
    kids: [],
    parents: {
      fatherName: '',
      fatherDOB: '',
      fatherGender: '',
      motherName: '',
      motherDOB: '',
      motherGender: '',
    },
    siblings: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Split the name to handle nested fields (e.g., "parents.fatherName")
    const nameParts = name.split('.');

    // Copy the userDetails state
    const updatedUserDetails = { ...userDetails };

    if (nameParts.length === 1) {
      // Simple fields
      updatedUserDetails[name] = value;
    } else if (nameParts.length === 2) {
      // Nested fields (e.g., parents.fatherName)
      const [parent, child] = nameParts;
      updatedUserDetails[parent][child] = value;
    }

    setUserDetails(updatedUserDetails);
  };

  const handleKidsChange = (index, e) => {
    const { name, value } = e.target;
    const updatedKids = userDetails.kids.map((kid, i) => (i === index ? { ...kid, [name]: value } : kid));
    setUserDetails({
      ...userDetails,
      kids: updatedKids,
    });
  };

  const handleAddKid = () => {
    setUserDetails({
      ...userDetails,
      kids: [...userDetails.kids, { name: '', dob: '', gender: '' }],
    });
  };

  const handleRemoveKid = (index) => {
    const updatedKids = userDetails.kids.filter((_, i) => i !== index);
    setUserDetails({
      ...userDetails,
      kids: updatedKids,
    });
  };

  const handleSiblingsChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSiblings = userDetails.siblings.map((sibling, i) => (i === index ? { ...sibling, [name]: value } : sibling));
    setUserDetails({
      ...userDetails,
      siblings: updatedSiblings,
    });
  };

  const handleAddSibling = () => {
    setUserDetails({
      ...userDetails,
      siblings: [...userDetails.siblings, { name: '', dob: '', gender: '' }],
    });
  };

  const handleRemoveSibling = (index) => {
    const updatedSiblings = userDetails.siblings.filter((_, i) => i !== index);
    setUserDetails({
      ...userDetails,
      siblings: updatedSiblings,
    });
  };

  const nextPage = () => {
    if (validateFields()) {
      setCurrentPage(currentPage + 1);
    } else {
      toast.error('Please fill in all details before proceeding!');
    }
  };

  const prevPage = () => {
    if (currentPage === 3) {
      if (userDetails.maritalStatus === 'married' || userDetails.maritalStatus === 'single') {
        setCurrentPage(1);
      } else setCurrentPage(currentPage - 1);
    } else setCurrentPage(currentPage - 1);
  };

  const submitData = async () => {
    console.log(userDetails);
    try {
      const response = await axios.post(`${host}/api/v1/user`, userDetails);
      console.log(response.data);  // Optional: Handle response from the server
      navigate('/user', { state: userDetails }); // Navigate after successful submission
    } catch (error) {
      console.error('Error submitting data:', error);
      toast.error('Failed to submit data. Please try again later.');
    }
  };

  const validateFields = () => {
    if (currentPage === 1) {
      return userDetails.maritalStatus !== '';
    } else if (currentPage === 2) {
      return userDetails.kids.every((kid) => kid.name !== '' && kid.dob !== '' && kid.gender !== '');
    } else if (currentPage === 3) {
      const { fatherName, fatherDOB, fatherGender, motherName, motherDOB, motherGender } = userDetails.parents;
      return fatherName !== '' && fatherDOB !== '' && fatherGender !== '' && motherName !== '' && motherDOB !== '' && motherGender !== '';
    } else if (currentPage === 4) {
      return userDetails.siblings.every((sibling) => sibling.name !== '' && sibling.dob !== '' && sibling.gender !== '');
    }
    return true;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="container p-4 bg-gray-100 rounded-lg mx-auto max-w-md my-auto">
            <h1 className="text-center text-2xl font-bold mb-4">Marital Status</h1>
            <form onChange={handleChange}>
              <label className="block mb-2">
                Marital Status <span className="text-red-500">*</span>
              </label>
              <select name="maritalStatus" value={userDetails.maritalStatus} className="w-full py-2 px-4 border rounded" onChange={handleChange}>
                <option value="">Select</option>
                <option value="single">Single</option>
                <option value="single_with_kids">Single with Kids</option>
                <option value="married">Married</option>
                <option value="married_with_kids">Married with Kids</option>
              </select>
            </form>
            <div className="btn-container flex justify-end mt-4">
              <button type="button" onClick={nextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        if (userDetails.maritalStatus.includes('kids') || userDetails.maritalStatus === '') {
          return (
            <div className="container p-4 bg-gray-100 rounded-lg mx-auto max-w-md my-auto">
              <h1 className="text-center text-2xl font-bold mb-4">Kids Details</h1>
              <form>
                {userDetails.kids.map((kid, index) => (
                  <div key={index} className="mb-4">
                    <label className="block mb-2">
                      Kid Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" name="name" value={kid.name} onChange={(e) => handleKidsChange(index, e)} className="w-full py-2 px-4 border rounded" />
                    <label className="block mb-2">
                      Kid DOB <span className="text-red-500">*</span>
                    </label>
                    <input type="date" name="dob" value={kid.dob} onChange={(e) => handleKidsChange(index, e)} className="w-full py-2 px-4 border rounded" />
                    <label className="block mb-2">
                      Kid Gender <span className="text-red-500">*</span>
                    </label>
                    <select name="gender" value={kid.gender} onChange={(e) => handleKidsChange(index, e)} className="w-full py-2 px-4 border rounded">
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <button type="button" onClick={() => handleRemoveKid(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Remove
                    </button>
                  </div>
                ))}
                <button type="button" onClick={handleAddKid} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Add Kid
                </button>
              </form>
              <div className="btn-container flex justify-between mt-4">
                <button type="button" onClick={prevPage} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Previous
                </button>
                <button type="button" onClick={nextPage} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Next
                </button>
              </div>
            </div>
          );
        } else {
          nextPage();
        }
        break;
      case 3:
        return (
          <div className="container p-4 bg-gray-100 rounded-lg mx-auto max-w-md my-auto">
            <h1 className="text-center text-2xl font-bold mb-4">Parents Details</h1>
            <form onChange={handleChange}>
              <label className="block mb-2">
                Father's Name <span className="text-red-500">*</span>
              </label>
              <input type="text" name="parents.fatherName" value={userDetails.parents.fatherName} onChange={handleChange} className="w-full py-2 px-4 border rounded" />
              <label className="block mb-2">
                Father's DOB <span className="text-red-500">*</span>
              </label>
              <input type="date" name="parents.fatherDOB" value={userDetails.parents.fatherDOB} onChange={handleChange} className="w-full py-2 px-4 border rounded" />
              <label className="block mb-2">
                Father's Gender <span className="text-red-500">*</span>
              </label>
              <select name="parents.fatherGender" value={userDetails.parents.fatherGender} onChange={handleChange} className="w-full py-2 px-4 border rounded">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label className="block mt-4 mb-2">
                Mother's Name <span className="text-red-500">*</span>
              </label>
              <input type="text" name="parents.motherName" value={userDetails.parents.motherName} onChange={handleChange} className="w-full py-2 px-4 border rounded" />
              <label className="block mb-2">
                Mother's DOB <span className="text-red-500">*</span>
              </label>
              <input type="date" name="parents.motherDOB" value={userDetails.parents.motherDOB} onChange={handleChange} className="w-full py-2 px-4 border rounded" />
              <label className="block mb-2">
                Mother's Gender <span className="text-red-500">*</span>
              </label>
              <select name="parents.motherGender" value={userDetails.parents.motherGender} onChange={handleChange} className="w-full py-2 px-4 border rounded">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </form>
            <div className="btn-container flex justify-between mt-4">
              <button type="button" onClick={prevPage} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                Previous
              </button>
              <button type="button" onClick={nextPage} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                Next
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="container p-4 bg-gray-100 rounded-lg mx-auto max-w-md my-auto">
            <h1 className="text-center text-2xl font-bold mb-4">Siblings Details</h1>
            <form>
              {userDetails.siblings.map((sibling, index) => (
                <div key={index} className="mb-4">
                  <label className="block mb-2">
                    Sibling Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="name" value={sibling.name} onChange={(e) => handleSiblingsChange(index, e)} className="w-full py-2 px-4 border rounded" />
                  <label className="block mb-2">
                    Sibling DOB <span className="text-red-500">*</span>
                  </label>
                  <input type="date" name="dob" value={sibling.dob} onChange={(e) => handleSiblingsChange(index, e)} className="w-full py-2 px-4 border rounded" />
                  <label className="block mb-2">
                    Sibling Gender <span className="text-red-500">*</span>
                  </label>
                  <select name="gender" value={sibling.gender} onChange={(e) => handleSiblingsChange(index, e)} className="w-full py-2 px-4 border rounded">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <button type="button" onClick={() => handleRemoveSibling(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" onClick={handleAddSibling} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Add Sibling
              </button>
            </form>
            <div className="btn-container flex justify-between mt-4">
              <button type="button" onClick={prevPage} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                Previous
              </button>
              <button type="button" onClick={submitData} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {renderPage()}
    </div>
  );
};

export default UserDetails;
