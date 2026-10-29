import React, { useState } from 'react';
import { 
  FiHome, 
  FiInfo, 
  FiUser, 
  FiGrid, 
  FiMail, 
  FiKey, 
  FiMenu, 
  FiX 
} from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import yarkLogo from '../assets/yark-logo.png';

const Navbar = ({ activeTab, onSelectTab, onOpenJoinClub, onOpenLogin, onReturnToGateway }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: FiHome },
    { id: 'about', label: 'About Us', icon: FiInfo },
    { id: 'founder', label: 'About Founder', icon: FiUser },
    { id: 'services', label: 'Our Services', icon: FiGrid },
    { id: 'partner', label: 'Partner with US', icon: FiMail }
  ];

  const handleNavClick = (tabId) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      <div className="max-w-7xl mx-auto glass-nav rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-card transition-all duration-300">
        
        {/* Brand Logo & BETA badge */}
        <div 
          onClick={onReturnToGateway || (() => handleNavClick('home'))}
          className="flex items-center gap-3 cursor-pointer group select-none"
          title="Return to Gateway"
        >
          <div className="flex items-center gap-2">
            <img 
              src={yarkLogo} 
              alt="YARK" 
              className="h-8 sm:h-9 object-contain filter invert drop-shadow-[0_2px_8px_rgba(0,157,90,0.5)] group-hover:scale-105 transition-transform" 
            />
          </div>
          <span className="text-[10px] tracking-wider uppercase font-semibold text-[#00c870] border border-[#009d5a]/60 bg-[#009d5a]/10 px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(0,157,90,0.2)]">
            BETA
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-white/10 text-white border border-white/20 shadow-[0_0_15px_rgba(0,157,90,0.25)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`text-base ${isActive ? 'text-[#00c870]' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenJoinClub}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-200 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#009d5a]/50 hover:text-white transition-all shadow-sm"
          >
            <HiOutlineSparkles className="text-amber-400 text-sm" />
            <span>Join the Club FREE</span>
          </button>

          <button
            onClick={onOpenLogin}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-200 border border-white/15 bg-white/5 hover:bg-[#009d5a]/20 hover:border-[#009d5a] hover:text-white transition-all shadow-sm"
          >
            <FiKey className="text-[#00c870] text-sm" />
            <span>Members LOGIn</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-2xl glass-nav border border-white/10 shadow-2xl flex flex-col gap-2 animate-fade-in">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#009d5a]/20 text-white border border-[#009d5a]/40'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <Icon className={`text-lg ${isActive ? 'text-[#00c870]' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-3 mt-1 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenJoinClub(); }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 border border-white/15"
            >
              <HiOutlineSparkles className="text-amber-400 text-base" />
              <span>Join the Club FREE</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#009d5a]/30 border border-[#009d5a]/60"
            >
              <FiKey className="text-[#00c870] text-base" />
              <span>Members LOGIn</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
