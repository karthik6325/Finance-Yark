import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLogin } from './loginContext';

// Create a context for user data
const UserContext = createContext();
const host = "https://yark-backend.onrender.com";

const UserProvider = ({ children }) => {
  const { userToken } = useLogin();
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : {};
  });

  // Define fetchUserData inside useEffect to resolve the warning
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${host}/api/v1/getdetails`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          }
        });
        setUser(response.data);
        console.log("User data fetched:", response.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData(); 
  }, [userToken]); 

  const updateUser = async (updatedUser) => {
    try {
      setUser(updatedUser);
    } catch (err) {
      console.error("Error updating user:", err);
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
