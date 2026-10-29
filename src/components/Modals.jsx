import React, { useState } from 'react';
import { FiX, FiCheckCircle, FiExternalLink, FiMail } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';

export const JoinClubModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
        onClose();
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-md rounded-2xl glass-panel p-6 sm:p-8 border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <FiX size={18} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#009d5a]/20 border border-[#009d5a]/50 flex items-center justify-center mb-4 text-[#00c870] shadow-[0_0_20px_rgba(0,157,90,0.3)]">
            <HiOutlineSparkles size={28} />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2">
            Join the Club FREE
          </h3>
          <p className="text-sm text-slate-300/90 mb-6">
            This section is being prepared.
          </p>

          {submitted ? (
            <div className="flex items-center gap-2 text-[#00c870] font-medium py-3">
              <FiCheckCircle size={20} />
              <span>Thank you! We will notify you once early access opens.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
              <p className="text-xs text-slate-400">
                Be the first to know when the club opens for members:
              </p>
              <div className="relative">
                <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#009d5a] transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#009d5a] hover:bg-[#00c870] text-white text-sm font-semibold transition-all shadow-glow"
              >
                Notify Me on Launch
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export const MembersLoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-md rounded-2xl glass-panel p-6 sm:p-8 border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <FiX size={18} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 text-[#00c870] shadow-[0_0_20px_rgba(0,157,90,0.2)]">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2">
            Members LOGIn
          </h3>
          <p className="text-sm text-slate-300/90 mb-6">
            This section is being prepared.
          </p>

          <div className="w-full p-4 rounded-xl bg-white/5 border border-white/10 mb-4 text-left">
            <p className="text-xs text-slate-400 mb-2">
              Are you an existing client or partner looking for portfolio access?
            </p>
            <a
              href="https://redvisiontech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#00c870] hover:text-[#009d5a] transition-colors"
            >
              <span>Access REDVision Wealth Elite Portal</span>
              <FiExternalLink size={14} />
            </a>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-sm font-semibold transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
