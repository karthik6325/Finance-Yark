import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
    const history = useNavigate();

    const [user, setUser] = useState({
        email: "",
        otp: "",
        otpSent: false,
        otpVerified: false,
        name: "",
        password: "",
        reEnterPassword: "",
        dob: "",
        location: "",
        phoneNumber: "",
        username: "",
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleVerifyEmail = async () => {
        try {
            const { email } = user;
            const response = await axios.post('https://yark-backend.onrender.com/api/v1/send', { email });
            if (response.status === 200) {
                toast.success("OTP sent to your email!");
                setUser({ ...user, otpSent: true });
            } else {
                toast.error("Failed to send OTP!");
            }
        } catch (error) {
            console.error("Error sending OTP:", error);
            toast.error("Failed to send OTP!");
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const { email, otp } = user;
            const response = await axios.post('https://yark-backend.onrender.com/api/v1/verify', { email, otp });
            if (response.status === 200) {
                toast.success("OTP verified!");
                setUser({ ...user, otpVerified: true });
            } else {
                toast.error("Failed to verify OTP!");
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            toast.error("Failed to verify OTP!");
        }
    };

    const register = async () => {
        try {
            const { name, email, password, reEnterPassword, dob, location, phoneNumber, username } = user;
            if (name && email && password && (password === reEnterPassword) && dob && location && phoneNumber && username) {
                const response = await axios.post('https://yark-backend.onrender.com/api/v1/register', user);
                if (response.status === 201) {
                    history('/login');
                    toast.success("Registered successfully!");
                } else {
                    toast.error("User already registered!");
                }
            } else {
                toast.error("Invalid input!");
            }
        } catch (error) {
            console.error("Error registering:", error);
            toast.error("User already registered!");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-96 bg-gray-800 border border-gray-200 shadow-md rounded-lg p-6 text-center">
                <h1 className="text-2xl font-bold text-white mb-4">Register</h1>
                {!user.otpSent && (
                    <>
                        <input 
                            type="email" 
                            name="email" 
                            value={user.email} 
                            placeholder="Your Email" 
                            onChange={handleChange} 
                            className="w-full mb-4 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                        />
                        <div 
                            className="bg-gray-600 text-white text-lg font-bold py-2 mb-4 rounded-lg cursor-pointer"
                            onClick={handleVerifyEmail}
                        >
                            Verify Email
                        </div>
                    </>
                )}
                {user.otpSent && !user.otpVerified && (
                    <>
                        <input 
                            type="text" 
                            name="otp" 
                            value={user.otp} 
                            placeholder="Enter OTP" 
                            onChange={handleChange} 
                            className="w-full mb-4 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                        />
                        <div 
                            className="bg-gray-600 text-white text-lg font-bold py-2 mb-4 rounded-lg cursor-pointer"
                            onClick={handleVerifyOtp}
                        >
                            Verify OTP
                        </div>
                        <div 
                            className="bg-gray-600 text-white text-lg font-bold py-2 mb-4 rounded-lg cursor-pointer"
                            onClick={handleVerifyEmail}
                        >
                            Resend OTP
                        </div>
                        <div 
                            className="bg-gray-600 text-white text-lg font-bold py-2 mb-4 rounded-lg cursor-pointer"
                            onClick={() => setUser({ ...user, otpSent: false, email: "", otp: "" })}
                        >
                            Change Email
                        </div>
                    </>
                )}
                {user.otpVerified && (
                    <>
                        <input 
                            type="text" 
                            name="name" 
                            value={user.name} 
                            placeholder="Your Name" 
                            onChange={handleChange} 
                            className="w-full mb-4 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                        />
                        <input 
                            type="password" 
                            name="password" 
                            value={user.password} 
                            placeholder="Your Password" 
                            onChange={handleChange} 
                            className="w-full mb-4 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                        />
                        <input 
                            type="password" 
                            name="reEnterPassword" 
                            value={user.reEnterPassword} 
                            placeholder="Re-enter Password" 
                            onChange={handleChange} 
                            className="w-full mb-4 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                        />
                        <input 
                            type="text" 
                            name="dob" 
                            value={user.dob} 
                            placeholder="Date of Birth" 
                            onChange={handleChange} 
                            className="w-full mb-4 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                        />
                        <input 
                            type="text" 
                            name="location" 
                            value={user.location} 
                            placeholder="Location" 
                            onChange={handleChange} 
                            className="w-full mb-4 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                        />
                        <input 
                            type="text" 
                            name="phoneNumber" 
                            value={user.phoneNumber} 
                            placeholder="Phone Number" 
                            onChange={handleChange} 
                            className="w-full mb-4 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                        />
                        <input 
                            type="text" 
                            name="username" 
                            value={user.username} 
                            placeholder="Username" 
                            onChange={handleChange} 
                            className="w-full mb-4 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                        />
                        <div 
                            className="bg-gray-600 text-white text-lg font-bold py-2 mb-4 rounded-lg cursor-pointer"
                            onClick={register}
                        >
                            Register
                        </div>
                    </>
                )}
                <div className="text-white mb-4">or</div>
                <div 
                    className="bg-gray-600 text-white text-lg font-bold py-2 rounded-lg cursor-pointer"
                    onClick={() => history("/login")}
                >
                    Login
                </div>
            </div>
        </div>
    );
};

export default Register;
