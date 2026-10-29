import React from 'react';
import { FiAward, FiShield } from 'react-icons/fi';
import FooterTagline from '../components/FooterTagline';
import { websiteContent } from '../data/websiteContent';

const AboutFounderView = () => {
  const { aboutFounder } = websiteContent;

  return (
    <div className="relative min-h-[calc(100vh-100px)] flex flex-col justify-between px-4 py-8 sm:py-12 z-10 max-w-5xl mx-auto">
      
      <div className="w-full flex flex-col gap-8 animate-fade-in">
        
        {/* Main Heading */}
        <div className="text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            {aboutFounder.title}
          </h1>
        </div>

        {/* Founder Glassmorphic Card */}
        <div 
          className="rounded-3xl glass-panel p-8 sm:p-12 border border-[#009d5a]/40 shadow-glow relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(7, 24, 36, 0.85) 0%, rgba(3, 12, 19, 0.95) 100%)'
          }}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#009d5a]/15 filter blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* Founder Avatar & Credentials Badge */}
            <div className="flex flex-col items-center gap-3 shrink-0 mx-auto md:mx-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-[#006d3e] to-[#00c870] p-1 shadow-[0_0_25px_rgba(0,157,90,0.4)]">
                <div className="w-full h-full rounded-2xl bg-[#05141f] flex flex-col items-center justify-center text-white">
                  <span className="text-2xl sm:text-3xl font-extrabold font-heading text-[#00c870]">RK</span>
                  <span className="text-[9px] tracking-wider uppercase text-slate-400 mt-0.5">Founder</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#009d5a]/15 border border-[#009d5a]/40 text-[#00c870] text-xs font-semibold">
                <FiAward size={14} />
                <span>Wealth Architect</span>
              </div>
            </div>

            {/* Narrative Quote */}
            <div className="flex-1 space-y-5 text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              {aboutFounder.quote.split('\n\n').map((para, idx) => (
                <p key={idx} className="relative">
                  {para}
                </p>
              ))}

              <div className="pt-4 flex items-center gap-3 text-sm text-[#00c870] font-semibold border-t border-white/10">
                <FiShield size={18} />
                <span>Rajarathinam Kamaraj — Founder & Wealth Architect</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Footer Tagline */}
      <FooterTagline />
    </div>
  );
};

export default AboutFounderView;
