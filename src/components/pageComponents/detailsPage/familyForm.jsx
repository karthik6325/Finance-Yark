import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useLogin } from '../../../context/loginContext';
import { useUser } from '../../../context/userContext';

const host = process.env.REACT_APP_HOST;

const UserDetails = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { userToken } = useLogin();
  const { updateUser } = useUser();
  const [userDetails, setUserDetails] = useState({
    maritalStatus: '',
    children: [],
    parents: {
      fatherName: '',
      fatherDOB: '',
      motherName: '',
      motherDOB: '',
    },
    siblings: [],
    spouse: {
      spouseName: '',
      spouseDOB: '',
      spouseGender: '',
    },
    inLaws: {
      fatherInLawName: '',
      fatherInLawDOB: '',
      motherInLawName: '',
      motherInLawDOB: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const nameParts = name.split('.');

    const updatedUserDetails = { ...userDetails };

    if (nameParts.length === 1) {
      updatedUserDetails[name] = value;
    } else if (nameParts.length === 2) {
      const [parent, child] = nameParts;
      updatedUserDetails[parent][child] = value;
    }

    setUserDetails(updatedUserDetails);
  };

  const handleChildrenChange = (index, e) => {
    const { name, value } = e.target;
    const updatedChildren = userDetails.children.map((kid, i) => (i === index ? { ...kid, [name]: value } : kid));
    setUserDetails({
      ...userDetails,
      children: updatedChildren,
    });
  };

  const handleAddKid = () => {
    setUserDetails({
      ...userDetails,
      children: [...userDetails.children, { name: '', dob: '', gender: '' }],
    });
  };

  const handleRemoveKid = (index) => {
    const updatedChildren = userDetails.children.filter((_, i) => i !== index);
    setUserDetails({
      ...userDetails,
      children: updatedChildren,
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

  const handleSpouseChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      spouse: {
        ...userDetails.spouse,
        [name]: value,
      },
    });
  };

  const handleInLawsChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      inLaws: {
        ...userDetails.inLaws,
        [name]: value,
      },
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
    setCurrentPage(currentPage - 1);
  };

  const submitData = async () => {
    try {
      console.log(userDetails)
      const response = await axios.post(`${host}/api/v1/user`, userDetails, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      updateUser(userDetails);
      console.log(response.data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error submitting data:', error);
      toast.error('Failed to submit data. Please try again later.');
    }
  };

  const validateFields = () => {
    if (currentPage === 1) {
      return userDetails.maritalStatus !== '';
    } else if (currentPage === 2) {
      return userDetails.children.every((kid) => kid.name !== '' && kid.dob !== '' && kid.gender !== '');
    } else if (currentPage === 3) {
      const { fatherName, fatherDOB, motherName, motherDOB } = userDetails.parents;
      return fatherName !== '' && fatherDOB !== '' && motherName !== '' && motherDOB !== '';
    } else if (currentPage === 4) {
      const { fatherInLawName, fatherInLawDOB, motherInLawName, motherInLawDOB } = userDetails.inLaws;
      return fatherInLawName !== '' && fatherInLawDOB !== '' && motherInLawName !== '' && motherInLawDOB !== '';
    } else if (currentPage === 5) {
      const { spouseName, spouseDOB, spouseGender } = userDetails.spouse;
      return spouseName !== '' && spouseDOB !== '' && spouseGender !== '';
    } else if (currentPage === 6) {
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
                <option value="single_with_children">Single with children</option>
                <option value="married">Married</option>
                <option value="married_with_children">Married with children</option>
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
        if (userDetails.maritalStatus.includes('children') || userDetails.maritalStatus === '') {
          return (
            <div className="container p-4 bg-gray-100 rounded-lg mx-auto max-w-md my-auto">
              <h1 className="text-center text-2xl font-bold mb-4">Children Details</h1>
              <form>
                {userDetails.children.map((kid, index) => (
                  <div key={index} className="mb-4">
                    <label className="block mb-2">
                      Kid Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" name="name" value={kid.name} onChange={(e) => handleChildrenChange(index, e)} className="w-full py-2 px-4 border rounded" />
                    <label className="block mb-2">
                      Kid DOB <span className="text-red-500">*</span>
                    </label>
                    <input type="date" name="dob" value={kid.dob} onChange={(e) => handleChildrenChange(index, e)} className="w-full py-2 px-4 border rounded" />
                    <label className="block mb-2">
                      Kid Gender <span className="text-red-500">*</span>
                    </label>
                    <select name="gender" value={kid.gender} onChange={(e) => handleChildrenChange(index, e)} className="w-full py-2 px-4 border rounded">
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <button type="button" onClick={() => handleRemoveKid(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2">
                      Remove
                    </button>
                  </div>
                ))}
              </form>
              <button type="button" onClick={handleAddKid} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
                Add Kid
              </button>
              <div className="btn-container flex justify-between mt-4">
                <button type="button" onClick={prevPage} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                  Previous
                </button>
                <button type="button" onClick={nextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Next
                </button>
              </div>
            </div>
          );
        } else {
          setCurrentPage(currentPage + 1); // Skip this page if the user doesn't have children
        }
        break;
      case 3:
        return (
          <div className="container p-4 bg-gray-100 rounded-lg mx-auto max-w-md my-auto">
            <h1 className="text-center text-2xl font-bold mb-4">Parent Details</h1>
            <form>
              <label className="block mb-2">
                Father Name <span className="text-red-500">*</span>
              </label>
              <input type="text" name="parents.fatherName" value={userDetails.parents.fatherName} onChange={handleChange} className="w-full py-2 px-4 border rounded" />
              <label className="block mb-2">
                Father DOB <span className="text-red-500">*</span>
              </label>
              <input type="date" name="parents.fatherDOB" value={userDetails.parents.fatherDOB} onChange={handleChange} className="w-full py-2 px-4 border rounded" />
              <label className="block mb-2">
                Mother Name <span className="text-red-500">*</span>
              </label>
              <input type="text" name="parents.motherName" value={userDetails.parents.motherName} onChange={handleChange} className="w-full py-2 px-4 border rounded" />
              <label className="block mb-2">
                Mother DOB <span className="text-red-500">*</span>
              </label>
              <input type="date" name="parents.motherDOB" value={userDetails.parents.motherDOB} onChange={handleChange} className="w-full py-2 px-4 border rounded" />
            </form>
            <div className="btn-container flex justify-between mt-4">
              <button type="button" onClick={prevPage} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Previous
              </button>
              <button type="button" onClick={nextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Next
              </button>
            </div>
          </div>
        );
      case 4:
        if (userDetails.maritalStatus === 'married' || userDetails.maritalStatus === 'married_with_children') {
        return (
          <div className="container p-4 bg-gray-100 rounded-lg mx-auto max-w-md my-auto">
            <h1 className="text-center text-2xl font-bold mb-4">In-Laws Details</h1>
            <form>
              <label className="block mb-2">
                Father-In-Law Name <span className="text-red-500">*</span>
              </label>
              <input type="text" name="fatherInLawName" value={userDetails.inLaws.fatherInLawName} onChange={handleInLawsChange} className="w-full py-2 px-4 border rounded" />
              <label className="block mb-2">
                Father-In-Law DOB <span className="text-red-500">*</span>
              </label>
              <input type="date" name="fatherInLawDOB" value={userDetails.inLaws.fatherInLawDOB} onChange={handleInLawsChange} className="w-full py-2 px-4 border rounded" />
              <label className="block mb-2">
                Mother-In-Law Name <span className="text-red-500">*</span>
              </label>
              <input type="text" name="motherInLawName" value={userDetails.inLaws.motherInLawName} onChange={handleInLawsChange} className="w-full py-2 px-4 border rounded" />
              <label className="block mb-2">
                Mother-In-Law DOB <span className="text-red-500">*</span>
              </label>
              <input type="date" name="motherInLawDOB" value={userDetails.inLaws.motherInLawDOB} onChange={handleInLawsChange} className="w-full py-2 px-4 border rounded" />
            </form>
            <div className="btn-container flex justify-between mt-4">
              <button type="button" onClick={prevPage} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Previous
              </button>
              <button type="button" onClick={nextPage} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Next
              </button>
            </div>
          </div>
        );
      } else {
        setCurrentPage(currentPage + 1); 
      }
      break;
      case 5:
        if (userDetails.maritalStatus === 'married' || userDetails.maritalStatus === 'married_with_children') {
          return (
            <div className="container p-4 bg-gray-100 rounded-lg mx-auto max-w-md my-auto">
              <h1 className="text-center text-2xl font-bold mb-4">Spouse Details</h1>
              <form>
                <label className="block mb-2">
                  Spouse Name <span className="text-red-500">*</span>
                </label>
                <input type="text" name="spouseName" value={userDetails.spouse.spouseName} onChange={handleSpouseChange} className="w-full py-2 px-4 border rounded" />
                <label className="block mb-2">
                  Spouse DOB <span className="text-red-500">*</span>
                </label>
                <input type="date" name="spouseDOB" value={userDetails.spouse.spouseDOB} onChange={handleSpouseChange} className="w-full py-2 px-4 border rounded" />
                <label className="block mb-2">
                  Spouse Gender <span className="text-red-500">*</span>
                </label>
                <select name="spouseGender" value={userDetails.spouse.spouseGender} onChange={handleSpouseChange} className="w-full py-2 px-4 border rounded">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </form>
              <div className="btn-container flex justify-between mt-4">
                <button type="button" onClick={prevPage} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                  Previous
                </button>
                <button type="button" onClick={nextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Next
                </button>
              </div>
            </div>
          );
        } else {
          setCurrentPage(currentPage + 1); // Skip this page if the user is not married
        }
        break;
      case 6:
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
                  <button type="button" onClick={() => handleRemoveSibling(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2">
                    Remove
                  </button>
                </div>
              ))}
            </form>
            <button type="button" onClick={handleAddSibling} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
              Add Sibling
            </button>
            <div className="btn-container flex justify-between mt-4">
              <button type="button" onClick={prevPage} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Previous
              </button>
              <button type="button" onClick={submitData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="min-h-screen flex items-center justify-center">{renderPage()}</div>;
};

export default UserDetails;
