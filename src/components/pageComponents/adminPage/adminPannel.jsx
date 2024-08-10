import React, { useEffect, useState, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import { useLogin } from '../../../context/loginContext';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { IoPeople, IoThumbsUp, IoThumbsDown } from 'react-icons/io5';

const host = process.env.REACT_APP_HOST;

const byteArrayToBase64 = (byteArray) => {
  let binary = '';
  const bytes = new Uint8Array(byteArray);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

const AdminPanel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState({ name: '', email: '', location: '', phoneNumber: '' });
  const [selectedRow, setSelectedRow] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { userToken } = useLogin();
  const popupRef = useRef(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [showStatusPopup, setShowStatusPopup] = useState(false);

  const itemsPerPage = 10;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${host}/api/v1/allusers`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setAllUsers(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllReviews = async () => {
    try {
      const response = await axios.get(`${host}/api/v1/reviews`);
      console.log("Admin",response.data);
      setReviews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllUsers();
    getAllReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setSelectedRow(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
    setCurrentPage(0);
  };

  const handleRowClick = (index) => {
    setSelectedRow(selectedRow === index ? null : index);
  };

  const handleEdit = async (id) => {
    try {
      const response = await axios.post(`${host}/api/v1/updateinvest`, { id }, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log("res", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setIsPopupOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await axios.delete(`${host}/api/v1/deleteuser/${userToDelete._id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log("User deleted", response.data);
      setIsPopupOpen(false);
      getAllUsers(); // Refresh the user list after deletion
    } catch (error) {
      console.error(error);
    }
  };

  const handleReviewAction = async (reviewId, action) => {
    try {
      await axios.post(`${host}/api/v1/review/${action}`, { reviewId }, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      
      // Set status message based on the action
      const message = action === 'accept' ? 'Review accepted' : 'Review rejected';
      setStatusMessage(message);
      setShowStatusPopup(true);

      // Remove the review from the list
      setReviews(reviews.filter(review => review._id !== reviewId));
      
    } catch (error) {
      console.error(error);
      setStatusMessage('An error occurred');
      setShowStatusPopup(true);
    }
  };

  const filteredData = allUsers
    ? allUsers.filter((user) => {
        const match = Object.keys(search).every((key) =>
          user[key] && user[key].toLowerCase().includes(search[key].toLowerCase())
        );
        return match;
      })
    : [];

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const displayedUsers = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full h-[90vh] m-10 p-4 bg-white shadow-lg rounded-lg">
        {/* User Management Section */}
        <div>
          <BoxWrapper>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
              <IoPeople className="text-2xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-sm text-gray-500 font-light">Total Customers</span>
              <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">{allUsers.length}</strong>
              </div>
            </div>
          </BoxWrapper>
        </div>
        <h2 className="text-2xl font-semibold mb-4 mt-6">Admin Panel</h2>
        <table className="w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">User Name</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">City</th>
              <th className="py-2 px-4 border-b text-left">Mobile No</th>
            </tr>
            <tr>
              <th className="py-2 px-4 border-b">
                <input
                  type="text"
                  name="name"
                  value={search.name}
                  onChange={handleSearchChange}
                  placeholder="Search User Name"
                  className="w-full p-2"
                />
              </th>
              <th className="py-2 px-4 border-b">
                <input
                  type="text"
                  name="email"
                  value={search.email}
                  onChange={handleSearchChange}
                  placeholder="Search Email"
                  className="w-full p-2"
                />
              </th>
              <th className="py-2 px-4 border-b">
                <input
                  type="text"
                  name="location"
                  value={search.location}
                  onChange={handleSearchChange}
                  placeholder="Search City"
                  className="w-full p-2"
                />
              </th>
              <th className="py-2 px-4 border-b">
                <input
                  type="text"
                  name="phoneNumber"
                  value={search.phoneNumber}
                  onChange={handleSearchChange}
                  placeholder="Search Mobile No"
                  className="w-full p-2"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              displayedUsers.map((user, index) => (
                <tr key={index} onClick={() => handleRowClick(index)} className="cursor-pointer">
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.location}</td>
                  <td className="py-2 px-4 border-b">{user.phoneNumber}</td>
                  {selectedRow === index && (
                    <td className="py-2 px-4 border-b">
                      <div className="relative" ref={popupRef}>
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-60">
                          <button
                            onClick={() => handleEdit(user._id)}
                            className="block px-4 py-2 text-left w-full hover:bg-gray-100"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteClick(user)}
                            className="block px-4 py-2 text-left w-full hover:bg-gray-100"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-4 text-center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination flex justify-center mt-4'}
          pageClassName={'inline-block mx-1'}
          pageLinkClassName={'px-3 py-1 border rounded'}
          previousClassName={'inline-block mx-1'}
          previousLinkClassName={'px-3 py-1 border rounded bg-blue-500 text-white'}
          nextClassName={'inline-block mx-1'}
          nextLinkClassName={'px-3 py-1 border rounded bg-blue-500 text-white'}
          activeClassName={'bg-blue-500 text-white'}
          activeLinkClassName={'px-3 py-1 border rounded'}
        />
        {/* Review Management Section */}
        <h2 className="text-2xl font-semibold mb-4 mt-6">Review Management</h2>
        <table className="w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Image</th>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Rating</th>
              <th className="py-2 px-4 border-b text-left">Description</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <tr key={review._id}>
                  <td className="py-2 px-4 border-b">
                    {review.image && review.image.data ? (
                      <img
                      src={`data:${review.image.contentType};base64,${byteArrayToBase64(review.image.data.data)}`}
                      alt="Review"
                      className="w-20 h-20 object-cover rounded-full"
                    />
                    ) : (
                      <span>No Image</span>
                    )}
                  </td>
                  <td className="py-2 px-4 border-b">{review.name}</td>
                  <td className="py-2 px-4 border-b">{review.rating}</td>
                  <td className="py-2 px-4 border-b">{review.description}</td>
                  <td className="py-2 px-4 border-b flex space-x-2">
                    <button
                      onClick={() => handleReviewAction(review._id, 'accept')}
                      className="text-green-500 hover:text-green-700"
                    >
                      <IoThumbsUp />
                    </button>
                    <button
                      onClick={() => handleReviewAction(review._id, 'reject')}
                      className="ml-4 text-red-500 hover:text-red-700"
                    >
                      <IoThumbsDown />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-2 px-4 border-b text-center">
                  No reviews found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Popup open={showStatusPopup} onClose={() => setShowStatusPopup(false)}>
          <div className="p-4">
            <h2 className="text-lg font-semibold">{statusMessage}</h2>
            <div className="mt-4">
              <button
                onClick={() => setShowStatusPopup(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </Popup>
        <Popup open={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
          <div ref={popupRef} className="p-4">
            <h2 className="text-lg font-semibold">Are you sure you want to delete this user?</h2>
            <div className="mt-4">
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Confirm
              </button>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded ml-4"
              >
                Cancel
              </button>
            </div>
          </div>
        </Popup>
      </div>
    </div>
  );
};

const BoxWrapper = ({ children }) => (
  <div className="flex items-center p-4 bg-white shadow rounded">
    {children}
  </div>
);

export default AdminPanel;
