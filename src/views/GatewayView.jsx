import React from 'react';
import { FiArrowRight, FiCompass } from 'react-icons/fi';
import { FaCrown } from 'react-icons/fa';
import yarkLogo from '../assets/yark-logo.png';
import FooterTagline from '../components/FooterTagline';

const GatewayView = ({ onEnterManagement, onEnterAcademy }) => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between items-center px-4 py-8 sm:py-12 z-10">
      
      {/* Top Header with Brand Logo & BETA Badge */}
      <div className="flex flex-col items-center gap-3 pt-4 sm:pt-8 animate-fade-in">
        <div className="flex items-center gap-3">
          <img 
            src={yarkLogo} 
            alt="YARK" 
            className="h-12 sm:h-16 object-contain filter invert drop-shadow-[0_4px_16px_rgba(0,157,90,0.6)]" 
          />
          <span className="text-xs uppercase tracking-widest font-bold text-[#00c870] border border-[#009d5a]/60 bg-[#009d5a]/10 px-2.5 py-1 rounded-full shadow-[0_0_12px_rgba(0,157,90,0.3)]">
            BETA
          </span>
        </div>
      </div>

      {/* Main Choice Section */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center my-auto py-8">
        
        {/* Tracked Tagline & Main Heading */}
        <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-emerald-400/90 mb-3 animate-fade-in">
          A NEW PERSPECTIVE BEGINS HERE
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mb-10 sm:mb-14">
          Choose your path to financial freedom
        </h1>

        {/* Two Massive Side-by-Side Click Blocks */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-2 sm:px-6">
          
          {/* Left Block: Yark Wealth Management */}
          <div 
            onClick={onEnterManagement}
            className="group relative cursor-pointer rounded-3xl glass-panel p-8 sm:p-10 flex flex-col justify-between text-left transition-all duration-300 hover:border-[#009d5a] hover:shadow-glowLg hover:-translate-y-1.5"
            style={{
              background: 'linear-gradient(145deg, rgba(7, 26, 38, 0.85) 0%, rgba(4, 15, 23, 0.95) 100%)'
            }}
          >
            {/* Glowing Accent Ambient */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#009d5a]/10 filter blur-2xl group-hover:bg-[#009d5a]/25 transition-all" />

            <div>
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-[#009d5a]/20 border border-[#009d5a]/50 flex items-center justify-center text-[#00c870] mb-8 shadow-[0_0_25px_rgba(0,157,90,0.35)] group-hover:scale-110 group-hover:bg-[#009d5a]/30 transition-all">
                <FiCompass size={32} />
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Yark Wealth Management
              </h2>
            </div>

            {/* Bottom Row */}
            <div className="pt-10 sm:pt-14 flex items-center justify-between border-t border-white/10 mt-6">
              <span className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
                Your Finance Partner
              </span>
              <button className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00c870] group-hover:text-white group-hover:translate-x-1 transition-all">
                <span>Enter Management</span>
                <FiArrowRight />
              </button>
            </div>
          </div>

          {/* Right Block: Yark Wealth Academy */}
          <div 
            onClick={onEnterAcademy}
            className="group relative cursor-pointer rounded-3xl glass-panel p-8 sm:p-10 flex flex-col justify-between text-left transition-all duration-300 hover:border-amber-400/80 hover:shadow-glowGold hover:-translate-y-1.5"
            style={{
              background: 'linear-gradient(145deg, rgba(20, 24, 28, 0.85) 0%, rgba(6, 12, 18, 0.95) 100%)'
            }}
          >
            {/* Glowing Accent Ambient */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-amber-400/10 filter blur-2xl group-hover:bg-amber-400/25 transition-all" />

            <div>
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-400 mb-8 shadow-[0_0_25px_rgba(234,179,8,0.25)] group-hover:scale-110 group-hover:bg-amber-400/25 transition-all">
                <FaCrown size={30} />
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-2 group-hover:text-amber-200 transition-colors">
                Yark Wealth Academy
              </h2>
            </div>

            {/* Bottom Row */}
            <div className="pt-10 sm:pt-14 flex items-center justify-between border-t border-white/10 mt-6">
              <span className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
                Your Finance Crown
              </span>
              <button className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 group-hover:text-white group-hover:translate-x-1 transition-all">
                <span>Enter Academy</span>
                <FiArrowRight />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Tagline */}
      <FooterTagline />
    </div>
  );
};

export default GatewayView;
