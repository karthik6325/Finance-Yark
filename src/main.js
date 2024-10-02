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
// import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import ProfileDashboard from './pages/DashboardProfile';
import ProtectedRoute from './components/ProtectedRoute'; 
import Investments from './components/pageComponents/dashboardPage/InvestmentsPage';
import Admin from './pages/Admin';
import AdminRoute from './components/AdminRoute';
// import DashboardDocuments from './pages/DashboardDocuments';
// import PremiumToolsList from './components/pageComponents/premiumCalculators/premiumCalculators';
// import DashboardHealth from './pages/DashboardHealthPage';
// import DashboardGoal from './pages/DashboardGoal';
import Review from './components/pageComponents/contactPage/review';
import ComingSoon from './components/ComingSoon';
import ServiceDetails from './pages/ServiceDetails';

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
          <Route path="/review" element={<Review />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details" element={<Details />} />
          <Route path="/services/:service" element={<ServiceDetails />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<ProfileDashboard />} />
            <Route path="profile" element={<ProfileDashboard />} />
            <Route path="investments" element={<Investments/>}/>
            <Route path="documents" element={<ComingSoon />} />
            <Route path="health" element={<ComingSoon />} />
            <Route path="goal" element={<ComingSoon />} />
            <Route path="tools" element={<ComingSoon />} />
            <Route path="budget" element={<ComingSoon />} />
            <Route path="couple" element={<ComingSoon />} />
            <Route path="learn" element={<ComingSoon />} />
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
