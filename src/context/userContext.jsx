import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLogin } from './loginContext';

// Create a context for user data
const UserContext = createContext();
const host = process.env.REACT_APP_HOST;

const UserProvider = ({ children }) => {
  const { userToken, setLoginUser } = useLogin();
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.removeItem('user');
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
      } catch (err) {
        if(err.response.status === 403){
          localStorage.removeItem('userToken');
          setLoginUser('')
        }
        console.error("Error fetching user data:", err);
      }
    };

    if(userToken !== '') fetchUserData(); 
  }, [userToken, setLoginUser]); 

  useEffect(()=>{
    console.log(user);
  },[user])

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
