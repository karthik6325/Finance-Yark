import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useLogin } from '../context/loginContext';
import { useUser } from "../context/userContext";
const host = process.env.REACT_APP_HOST;
// http://localhost:3001
// https://yark-backend.onrender.com

const Login = () => {
    const { setLoginUser } = useLogin();
    const history = useNavigate();
    const { user } = useUser();
    const [userID, setUserID] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUserID({
            ...userID,
            [name]: value
        });
    };

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${host}/api/v1/login`, userID);
            const token = response.data.token;
            document.cookie = `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`;
            setLoginUser(response.data.token);
            console.log(response.data);
            console.log(user)
            if(response.data.detailsRequired) history("/details");
            else history("/dashboard");
        } catch (error) {
            toast.error("Invalid email id or password!");
            console.error(error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-96 bg-gray-800 border border-gray-200 shadow-md rounded-lg p-6 text-center">
                <h1 className="text-2xl font-bold text-white mb-4">Login</h1>
                <input 
                    type="text" 
                    name="email" 
                    value={userID.email} 
                    onChange={handleChange} 
                    placeholder="Enter your Email" 
                    className="w-full mb-4 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                />
                <input 
                    type="password" 
                    name="password" 
                    value={userID.password} 
                    onChange={handleChange} 
                    placeholder="Enter your Password" 
                    className="w-full mb-4 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                />
                <div 
                    className="bg-gray-600 text-white text-lg font-bold py-2 mb-4 rounded-lg cursor-pointer"
                    onClick={login}
                >
                    Login
                </div>
                <div className="text-white mb-4">or</div>
                <div 
                    className="bg-gray-600 text-white text-lg font-bold py-2 rounded-lg cursor-pointer"
                    onClick={() => history("/register")}
                >
                    Register
                </div>
            </div>
        </div>
    );
};

export default Login;
