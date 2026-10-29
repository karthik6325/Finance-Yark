import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import SpaceBackground from './components/SpaceBackground';
import Navbar from './components/Navbar';
import { JoinClubModal, MembersLoginModal } from './components/Modals';
import GatewayView from './views/GatewayView';
import HomeView from './views/HomeView';
import AboutUsView from './views/AboutUsView';
import AboutFounderView from './views/AboutFounderView';
import ServicesView from './views/ServicesView';
import PartnerView from './views/PartnerView';
import AcademyView from './views/AcademyView';

// Inner component to use react-router hooks
const MainApp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [joinClubOpen, setJoinClubOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  // Determine active tab from URL path
  const getActiveTab = () => {
    const path = location.pathname.toLowerCase();
    if (path.includes('about')) return 'about';
    if (path.includes('founder')) return 'founder';
    if (path.includes('services')) return 'services';
    if (path.includes('partner')) return 'partner';
    if (path === '/wealth') return 'home';
    return '';
  };

  const activeTab = getActiveTab();
  const isWealthSection = ['/wealth', '/about', '/founder', '/services', '/partner', '/wealth/about', '/wealth/founder', '/wealth/services', '/wealth/partner'].includes(location.pathname.toLowerCase());

  const handleSelectTab = (tabId) => {
    if (tabId === 'home') navigate('/wealth');
    else if (tabId === 'about') navigate('/about');
    else if (tabId === 'founder') navigate('/founder');
    else if (tabId === 'services') navigate('/services');
    else if (tabId === 'partner') navigate('/partner');
  };

  return (
    <div className="relative min-h-screen bg-[#040d14] text-slate-100 flex flex-col font-sans selection:bg-[#009d5a]/40 selection:text-white">
      {/* Global Animated Space & Starry Background */}
      <SpaceBackground />

      {/* Navigation Bar (Shown on Wealth pages) */}
      {isWealthSection && (
        <Navbar
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          onOpenJoinClub={() => setJoinClubOpen(true)}
          onOpenLogin={() => setLoginOpen(true)}
          onReturnToGateway={() => navigate('/')}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 w-full z-10">
        <Routes>
          {/* Main Landing Gateway */}
          <Route 
            path="/" 
            element={
              <GatewayView
                onEnterManagement={() => navigate('/wealth')}
                onEnterAcademy={() => navigate('/academy')}
              />
            } 
          />

          {/* Wealth Management Section */}
          <Route path="/wealth" element={<HomeView onNavigate={handleSelectTab} />} />
          <Route path="/about" element={<AboutUsView />} />
          <Route path="/wealth/about" element={<AboutUsView />} />
          <Route path="/founder" element={<AboutFounderView />} />
          <Route path="/wealth/founder" element={<AboutFounderView />} />
          <Route path="/services" element={<ServicesView />} />
          <Route path="/wealth/services" element={<ServicesView />} />
          <Route path="/partner" element={<PartnerView />} />
          <Route path="/wealth/partner" element={<PartnerView />} />

          {/* Academy Section */}
          <Route 
            path="/academy" 
            element={
              <AcademyView 
                onReturnToGateway={() => navigate('/')}
                onSwitchToWealth={() => navigate('/wealth')}
              />
            } 
          />

          {/* Fallback */}
          <Route 
            path="*" 
            element={
              <GatewayView
                onEnterManagement={() => navigate('/wealth')}
                onEnterAcademy={() => navigate('/academy')}
              />
            } 
          />
        </Routes>
      </main>

      {/* Global Modals */}
      <JoinClubModal 
        isOpen={joinClubOpen} 
        onClose={() => setJoinClubOpen(false)} 
      />
      <MembersLoginModal 
        isOpen={loginOpen} 
        onClose={() => setLoginOpen(false)} 
      />
    </div>
  );
};

const Main = () => {
  return (
    <Router>
      <MainApp />
    </Router>
  );
};

export default Main;
