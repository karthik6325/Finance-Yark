import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useLogin } from '../context/loginContext';
import axios from 'axios';

const host = process.env.REACT_APP_HOST;

const AdminRoute = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(null); // `null` means loading
    const { userToken } = useLogin();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${host}/api/v1/getdetails`, {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                    }
                });
                console.log(response.data);
                setIsAdmin(response.data.isAdmin);
            } catch (err) {
                console.error("Error fetching user data:", err);
                setIsAdmin(false); // Default to non-admin on error
            }
        };

        fetchUserData();
    }, [userToken]);

    if (isAdmin === null) {
        return <div>Loading...</div>; // Or a spinner/loading component
    }

    if (isAdmin) {
        return children;
    } else {
        return <Navigate to="/" replace />;
    }
};

export default AdminRoute;