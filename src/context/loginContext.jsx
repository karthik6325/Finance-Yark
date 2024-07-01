import React, { createContext, useContext, useEffect, useState } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [userToken, setLoginUser] = useState(() => {
        const token = localStorage.getItem('userToken');
        return token || '';
    });

    useEffect(() => {
        if (userToken) {
            localStorage.setItem('userToken', userToken);
        } else {
            localStorage.removeItem('userToken');
        }
        console.log("toekm",userToken);
    }, [userToken]);

    return (
        <LoginContext.Provider value={{ userToken, setLoginUser }}>
            {children}
        </LoginContext.Provider>
    );
};

const useLogin = () => useContext(LoginContext);

export { LoginProvider, useLogin };
