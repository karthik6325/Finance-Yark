import React from 'react';
import { Navigate } from 'react-router-dom';
import { useLogin } from '../context/loginContext';

const ProtectedRoute = ({ children }) => {
  const { userToken } = useLogin();
  if(userToken === '') return <Navigate to="/" replace />;
  else if (userToken && userToken === '') {
    return <Navigate to="/" replace />;
  }
  else {
    
  }
  
  return children;
};

export default ProtectedRoute;
