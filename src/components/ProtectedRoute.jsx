import React from 'react';
import { Navigate } from 'react-router-dom';
import { useLogin } from '../context/loginContext';

const ProtectedRoute = ({ children }) => {
  const { userToken } = useLogin();
  if(userToken !== '') return children
  else {
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;
