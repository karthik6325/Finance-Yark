import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Tools from './pages/Tools';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Register from './pages/Register';
import Details from './pages/Details';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import ProfileDashboard from './pages/DashboardProfile';
import ProtectedRoute from './components/ProtectedRoute'; 
import Investments from './components/pageComponents/dashboardPage/InvestmentsPage';
import Admin from './pages/Admin';
import AdminRoute from './components/AdminRoute';

const Main = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details" element={<Details />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<ProfileDashboard />} />
            <Route path="investments" element={<Investments/>}/>
            <Route path="documents" element={<ProfileDashboard />} />
            <Route path="goal" element={<ProfileDashboard />} />
            <Route path="tools" element={<ProfileDashboard />} />
            <Route path="budget" element={<ProfileDashboard />} />
            <Route path="couple" element={<ProfileDashboard />} />
            <Route path="learn" element={<ProfileDashboard />} />
          </Route>
          <Route path="/admin" element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }>
            <Route index element={<Admin />} />
            <Route path="edit" element={<ProfileDashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
