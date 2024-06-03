// Routes.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoginProvider } from './context/loginContext'
import Main from './main';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Router>
      <LoginProvider>
        <Toaster />
        <Main/>
      </LoginProvider>
    </Router>
  );
};

export default App;
