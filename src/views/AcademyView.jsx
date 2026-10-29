import React, { useState } from 'react';
import { FiArrowLeft, FiBookOpen, FiCheckCircle, FiStar } from 'react-icons/fi';
import { FaCrown } from 'react-icons/fa';
import FooterTagline from '../components/FooterTagline';
import yarkLogo from '../assets/yark-logo.png';

const AcademyView = ({ onReturnToGateway, onSwitchToWealth }) => {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const courses = [
    {
      title: "Foundations of Capital Stewardship",
      desc: "Unlearn greed and FOMO-driven patterns. Align capital with personal life vision and values.",
      badge: "Core Cohort"
    },
    {
      title: "Asset Allocation & Systematic Compounding",
      desc: "Institutional principles for structuring mutual funds, SIPs, and tactical rebalancing engines.",
      badge: "Advanced"
    },
    {
      title: "Cross-Border Wealth & Global Indians",
      desc: "FEMA compliance, DTAA tax optimization, and seamless Indian real estate stewardship for NRIs.",
      badge: "Specialized"
    },
    {
      title: "Legacy, Private Trusts & Succession",
      desc: "Transferring wealth seamlessly across generations without legal friction or estate tax drag.",
      badge: "Mastery"
    }
  ];

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (waitlistEmail) {
      setJoined(true);
      setTimeout(() => {
        setJoined(false);
        setWaitlistEmail('');
      }, 3000);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between px-4 py-8 sm:py-12 z-10 max-w-5xl mx-auto">
      
      {/* Top Header */}
      <div className="flex items-center justify-between pb-8 border-b border-white/10 animate-fade-in">
        <button
          onClick={onReturnToGateway}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 hover:text-white transition-colors"
        >
          <FiArrowLeft />
          <span>Return to Gateway</span>
        </button>

        <div className="flex items-center gap-2 cursor-pointer" onClick={onReturnToGateway}>
          <img src={yarkLogo} alt="YARK" className="h-8 filter invert" />
          <span className="text-[10px] uppercase font-bold text-amber-400 border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 rounded-full">
            ACADEMY
          </span>
        </div>

        <button
          onClick={onSwitchToWealth}
          className="text-xs sm:text-sm text-slate-300 hover:text-[#00c870] font-medium transition-colors"
        >
          Wealth Management →
        </button>
      </div>

      {/* Hero Section */}
      <div className="w-full flex flex-col items-center text-center my-auto py-10 animate-fade-in">
        
        {/* Crown Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-400 mb-6 shadow-glowGold">
          <FaCrown size={36} />
        </div>

        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-amber-400/90 mb-2">
          YARK WEALTH ACADEMY
        </p>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
          Your Finance Crown
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mb-8">
          Financial intelligence should not die with you. It is a responsibility to be transferred to the next generation, ensuring that the knowledge of money is a gift, not a burden.
        </p>

        {/* Status Banner */}
        <div className="px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-10 flex items-center gap-2">
          <FiStar />
          <span>Early Access Cohort Enrollment Preparing</span>
        </div>

        {/* 4 Curriculum Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left mb-12">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-panel p-6 border border-white/10 hover:border-amber-400/50 hover:shadow-glowGold transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {course.badge}
                </span>
                <FiBookOpen className="text-amber-400" size={18} />
              </div>
              <h3 className="text-base sm:text-lg font-bold font-heading text-white mb-2">
                {course.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {course.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Waitlist Form */}
        <div className="w-full max-w-md rounded-2xl glass-panel p-6 sm:p-8 border border-white/15 text-center">
          <h3 className="text-lg font-bold font-heading text-white mb-2">
            Get Priority Invitation
          </h3>
          <p className="text-xs text-slate-400 mb-5">
            Join the waitlist to receive curriculum updates and early-bird scholarship invites.
          </p>

          {joined ? (
            <div className="flex items-center justify-center gap-2 text-amber-400 font-medium py-3 text-sm">
              <FiCheckCircle size={20} />
              <span>You're on the priority list! We'll be in touch soon.</span>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-all"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm transition-all shadow-glowGold"
              >
                Join Academy Waitlist
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Footer Tagline */}
      <FooterTagline />
    </div>
  );
};

export default AcademyView;
