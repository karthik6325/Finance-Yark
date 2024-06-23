import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create a context for user data
const UserContext = createContext();
const host="http://localhost:3001";
// http://localhost:3001
// https://yark-backend.onrender.com

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : {};
  });

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${host}/api/v1/register`); // Adjust the endpoint as needed
      setUser(response.data);
    } catch (err) {
    } 
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const updateUser = async (updatedUser) => {
    try {
      const response = await axios.put('/api/user', updatedUser); // Adjust the endpoint as needed
      setUser(response.data);
    } catch (err) {
    }
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
