import React from 'react';
import { Navigate } from 'react-router-dom';
import { useLogin } from '../context/loginContext';
import axios from 'axios';
const host = process.env.REACT_APP_HOST;

const AdminRoute = ({ children }) => {
    const fetchUserData = async () => {
        try {
            const response = await axios.get(`${host}/api/v1/getdetails`, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                }
            });
            if(response.data.isAdmin) return true;
            else return false;
        } catch (err) {
            console.error("Error fetching user data:", err);
        }
    };
    const { userToken } = useLogin();
    const res = fetchUserData();
    if(res){
        return children;
    }
    else {
        return <Navigate to="/" replace />;
    }
};

export default AdminRoute;