// Routes.jsx
import React from 'react';
import { LoginProvider } from './context/loginContext'
import Main from './main';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from './context/userContext'

const App = () => {
  return (
      <LoginProvider>
        <UserProvider>
          <Toaster />
          <Main/>
        </UserProvider>
      </LoginProvider>
  );
};

export default App;
