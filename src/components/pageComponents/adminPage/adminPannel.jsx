import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const userData = [
  { userName: 'John Doe', email: 'john@example.com', city: 'New York', mobileNo: '123-456-7890' },
  { userName: 'Jane Smith', email: 'jane@example.com', city: 'Los Angeles', mobileNo: '098-765-4321' },
  { userName: 'Alice Johnson', email: 'alice@example.com', city: 'Chicago', mobileNo: '555-123-4567' },
  { userName: 'Bob Brown', email: 'bob@example.com', city: 'Houston', mobileNo: '222-333-4444' },
  { userName: 'John Doe', email: 'john@example.com', city: 'New York', mobileNo: '123-456-7890' },
  { userName: 'Jane Smith', email: 'jane@example.com', city: 'New York', mobileNo: '098-765-4321' },
  { userName: 'Alice Johnson', email: 'alice@example.com', city: 'New York', mobileNo: '555-123-4567' },
  { userName: 'Bob Brown', email: 'bob@example.com', city: 'Houston', mobileNo: '222-333-4444' },
  { userName: 'John Doe', email: 'john@example.com', city: 'New York', mobileNo: '123-456-7890' },
  { userName: 'Jane Smith', email: 'jane@example.com', city: 'Los Angeles', mobileNo: '098-765-4321' },
  { userName: 'Alice Johnson', email: 'alice@example.com', city: 'Chicago', mobileNo: '555-123-4567' },
  { userName: 'Bob Brown', email: 'bob@example.com', city: 'Houston', mobileNo: '222-333-4444' },
  // Add more user data as needed
];

const AdminPanel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState({ userName: '', email: '', city: '', mobileNo: '' });
  const [selectedRow, setSelectedRow] = useState(null);
  const itemsPerPage = 10;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

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

  const handleEdit = (index) => {
    console.log(`Edit user at index: ${index}`);
  };

  const handleDelete = (index) => {
    console.log(`Delete user at index: ${index}`);
  };

  const filteredData = userData.filter((user) =>
    Object.keys(search).every((key) => user[key].toLowerCase().includes(search[key].toLowerCase()))
  );

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const displayedUsers = filteredData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="p-4 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
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
                  name="userName"
                  value={search.userName}
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
                  name="city"
                  value={search.city}
                  onChange={handleSearchChange}
                  placeholder="Search City"
                  className="w-full p-2"
                />
              </th>
              <th className="py-2 px-4 border-b">
                <input
                  type="text"
                  name="mobileNo"
                  value={search.mobileNo}
                  onChange={handleSearchChange}
                  placeholder="Search Mobile No"
                  className="w-full p-2"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedUsers.map((user, index) => (
              <tr key={index} onClick={() => handleRowClick(index)} className="cursor-pointer">
                <td className="py-2 px-4 border-b">{user.userName}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.city}</td>
                <td className="py-2 px-4 border-b">{user.mobileNo}</td>
                {selectedRow === index && (
                  <td className="py-2 px-4 border-b">
                    <div className="relative">
                      <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                        <button
                          onClick={() => handleEdit(index)}
                          className="block px-4 py-2 text-left w-full hover:bg-gray-100"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="block px-4 py-2 text-left w-full hover:bg-gray-100"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                )}
              </tr>
            ))}
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
      </div>
    </div>
  );
};

export default AdminPanel;
