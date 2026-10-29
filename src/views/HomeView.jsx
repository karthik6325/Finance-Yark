import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiBriefcase, FiTrendingUp } from 'react-icons/fi';
import FooterTagline from '../components/FooterTagline';

const HomeView = ({ onNavigate }) => {
  const wordsSequence = [
    { main: "Yield", sub: "Y — Wealth Optimization" },
    { main: "Assets", sub: "A — Strategic Allocation" },
    { main: "Risk", sub: "R — Fortress of Protection" },
    { main: "Knowledge", sub: "K — Generational Wisdom" },
    { main: "YARK", sub: "YOUR ASSETS RISK KEEPER" },
    { main: "YARK", sub: "YOUR FINANCE PARTNER" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % wordsSequence.length);
        setFadeState('fade-in');
      }, 400);
    }, 2800);

    return () => clearInterval(timer);
  }, [wordsSequence.length]);

  const currentItem = wordsSequence[currentIndex];

  return (
    <div className="relative min-h-[calc(100vh-100px)] flex flex-col justify-between items-center px-4 py-8 sm:py-14 z-10">
      
      {/* Subtitle Header */}
      <div className="text-center pt-2 sm:pt-6 animate-fade-in">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-emerald-400/90 select-none">
          YARK — WEALTH MANAGEMENT
        </p>
      </div>

      {/* Central Interactive Acronym Orbital Ring */}
      <div className="relative flex flex-col items-center justify-center my-auto py-12 sm:py-16 w-full max-w-4xl select-none">
        
        {/* Outer Orbit Ellipse */}
        <div 
          className="relative w-[340px] h-[220px] sm:w-[540px] sm:h-[300px] md:w-[680px] md:h-[360px] rounded-[50%] orbit-ring-outer flex items-center justify-center animate-orbit-glow"
        >
          {/* Inner Dashed Orbit */}
          <div className="w-[84%] h-[80%] rounded-[50%] orbit-ring-inner flex items-center justify-center">
            
            {/* Center Content with Dynamic Typography */}
            <div className="flex flex-col items-center justify-center text-center px-6">
              <h1 
                className={`text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white tracking-wider transition-all duration-500 transform ${
                  fadeState === 'fade-in' 
                    ? 'opacity-100 scale-100 blur-none' 
                    : 'opacity-0 scale-95 blur-sm'
                }`}
                style={{
                  textShadow: '0 0 35px rgba(0, 157, 90, 0.6), 0 0 10px rgba(0, 200, 112, 0.4)'
                }}
              >
                {currentItem.main}
              </h1>

              <p 
                className={`mt-3 sm:mt-5 text-xs sm:text-sm md:text-base font-medium tracking-widest uppercase transition-all duration-500 ${
                  fadeState === 'fade-in' 
                    ? 'opacity-90 translate-y-0' 
                    : 'opacity-0 translate-y-2'
                } ${currentItem.sub.startsWith('YOUR') ? 'text-emerald-300 font-bold drop-shadow-[0_0_12px_rgba(0,157,90,0.8)]' : 'text-slate-400'}`}
              >
                {currentItem.sub}
              </p>
            </div>

          </div>

          {/* Orbiting Subtle Particle Nodes */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1.5 w-3 h-3 rounded-full bg-[#00c870] shadow-[0_0_12px_#00c870]" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1.5 w-3 h-3 rounded-full bg-[#00c870] shadow-[0_0_12px_#00c870]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-2.5 h-2.5 rounded-full bg-[#009d5a] shadow-[0_0_10px_#009d5a]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5 w-2.5 h-2.5 rounded-full bg-[#009d5a] shadow-[0_0_10px_#009d5a]" />
        </div>

        {/* Quick Discovery Navigation Pills Below Orbit */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-10">
          <button
            onClick={() => onNavigate('services')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel text-xs sm:text-sm font-semibold text-white hover:border-[#009d5a] hover:shadow-glow transition-all"
          >
            <FiTrendingUp className="text-[#00c870]" />
            <span>Explore Services</span>
            <FiArrowRight size={14} />
          </button>

          <button
            onClick={() => onNavigate('partner')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel text-xs sm:text-sm font-semibold text-slate-300 hover:text-white hover:border-[#009d5a] transition-all"
          >
            <FiBriefcase className="text-emerald-400" />
            <span>Partner With Us</span>
          </button>
        </div>

      </div>

      {/* Footer Tagline */}
      <FooterTagline />
    </div>
  );
};

export default HomeView;
