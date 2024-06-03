// Routes.jsx
import React from 'react';
import { LoginProvider } from './context/loginContext'
import Main from './main';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
      <LoginProvider>
        <Toaster />
        <Main/>
      </LoginProvider>
  );
};

export default App;
