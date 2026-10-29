import React, { useState } from 'react';
import { 
  FiCheckCircle, 
  FiCalendar, 
  FiClock, 
  FiVideo, 
  FiMapPin, 
  FiSend,
  FiX
} from 'react-icons/fi';
import FooterTagline from '../components/FooterTagline';
import { websiteContent } from '../data/websiteContent';

const PartnerView = () => {
  const { partner } = websiteContent;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    profession: '',
    interests: [],
    consent: false
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const professionOptions = [
    'Chartered Accountant / Tax Professional',
    'Lawyer / Legal Professional',
    'Doctor / Healthcare Professional',
    'Business Owner / Entrepreneur',
    'Corporate Professional / Institution',
    'Financial Distributor / Industry Professional'
  ];

  const interestOptions = [
    'Professional partnership opportunities',
    'Portfolio and wealth management collaboration',
    'Corporate financial literacy programs'
  ];

  const handleInterestToggle = (interest) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(interest);
      return {
        ...prev,
        interests: exists 
          ? prev.interests.filter((i) => i !== interest)
          : [...prev.interests, interest]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.email || !formData.profession || !formData.consent) {
      alert('Please fill out all required fields and accept the agreement.');
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="relative min-h-[calc(100vh-100px)] flex flex-col justify-between px-4 py-8 sm:py-12 z-10 max-w-5xl mx-auto">
      
      <div className="w-full flex flex-col gap-10 sm:gap-14 animate-fade-in">
        
        {/* Header & Subtitle */}
        <div className="text-left space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            {partner.title}
          </h1>
          <p className="text-base sm:text-lg text-emerald-400 font-medium">
            {partner.subtitle}
          </p>
        </div>

        {/* Narrative Description */}
        <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-4 whitespace-pre-line">
          {partner.description}
        </div>

        {/* 6 Category Cards (2 columns x 3 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {partner.categories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-panel p-6 flex flex-col justify-start border border-white/10 hover:border-[#009d5a]/60 hover:shadow-glow transition-all"
            >
              <p className="text-sm sm:text-base leading-relaxed text-slate-200">
                <strong className="text-white font-semibold font-heading">
                  {cat.title}
                </strong>{' '}
                — {cat.text}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Statement Banner */}
        <div className="rounded-3xl glass-panel p-8 sm:p-10 border border-[#009d5a]/30 text-center flex flex-col items-center gap-4 bg-gradient-to-b from-[#051c27]/70 to-[#030e15]/80">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-white">
            {partner.impactBanner.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed whitespace-pre-line">
            {partner.impactBanner.subtext}
          </p>
          <div className="mt-2 inline-flex items-center px-5 py-2.5 rounded-full bg-[#009d5a]/20 border border-[#009d5a]/60 text-emerald-300 text-xs sm:text-sm font-semibold shadow-glow">
            {partner.impactBanner.cta}
          </div>
        </div>

        {/* Vision 2047 Section */}
        <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[#00c870] text-xs font-bold uppercase tracking-wider">
            <span>Special Initiative</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
            {partner.vision2047.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {partner.vision2047.text}
          </p>
        </div>

        {/* Partnership Enquiry Section */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            Partnership Enquiry
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Option 1: Request a Callback */}
            <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 flex flex-col gap-5">
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                  Option 1 — Request a Callback
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Share your details and our team will get in touch with you.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#009d5a]/15 border border-[#009d5a]/40 text-center flex flex-col items-center gap-3">
                  <FiCheckCircle size={36} className="text-[#00c870]" />
                  <h4 className="text-base font-bold text-white">Thank You for Your Enquiry!</h4>
                  <p className="text-xs text-slate-300">
                    We have received your details. Rajarathinam and our partnership team will reach out to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        mobile: '',
                        email: '',
                        profession: '',
                        interests: [],
                        consent: false
                      });
                    }}
                    className="mt-2 text-xs text-emerald-400 underline font-medium"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Name <span className="text-[#00c870]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#009d5a] transition-all"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Mobile Number <span className="text-[#00c870]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="Your contact number"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#009d5a] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Email Address <span className="text-[#00c870]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#009d5a] transition-all"
                    />
                  </div>

                  {/* Profession */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Profession <span className="text-[#00c870]">*</span>
                    </label>
                    <select
                      required
                      value={formData.profession}
                      onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#091b26] border border-white/15 text-sm text-white focus:outline-none focus:border-[#009d5a] transition-all"
                    >
                      <option value="" disabled>Select your profession</option>
                      {professionOptions.map((prof, idx) => (
                        <option key={idx} value={prof} className="bg-[#071622] text-white">
                          {prof}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Interested in */}
                  <div className="flex flex-col gap-2 pt-1">
                    <label className="text-xs font-semibold text-slate-300">
                      I'm interested in
                    </label>
                    <div className="space-y-2">
                      {interestOptions.map((interest, idx) => (
                        <label 
                          key={idx}
                          className="flex items-center gap-2.5 text-xs text-slate-300 cursor-pointer select-none"
                        >
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleInterestToggle(interest)}
                            className="rounded bg-white/10 border-white/20 text-[#009d5a] focus:ring-0 focus:ring-offset-0"
                          />
                          <span>{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 rounded bg-white/10 border-white/20 text-[#009d5a] focus:ring-0 focus:ring-offset-0"
                      />
                      <span>
                        I agree to be contacted by YARK regarding my enquiry and partnership opportunities.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mt-3 w-full py-3 rounded-xl bg-[#009d5a] hover:bg-[#00c870] text-white text-sm font-bold tracking-wide transition-all shadow-glow flex items-center justify-center gap-2"
                  >
                    <FiSend size={16} />
                    <span>Submit Enquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Option 2: Schedule a Meeting */}
            <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                    Option 2 — Schedule a Meeting
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Prefer a conversation at a time that suits you? Book a one-to-one meeting directly with Rajarathinam from YARK.
                  </p>
                </div>

                {/* Consultation Details Card */}
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <FiVideo className="text-[#00c870]" size={16} />
                      <span>Video Consulting (Google Meet / Zoom)</span>
                    </div>
                    <span className="text-emerald-400 font-bold">₹5,000</span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <FiClock className="text-[#00c870]" size={16} />
                      <span>Suggested Duration</span>
                    </div>
                    <span>20–30 Minutes</span>
                  </div>

                  <div className="flex items-center justify-between pb-1">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <FiMapPin className="text-amber-400" size={16} />
                      <span>In-Person Consultation (Chennai)</span>
                    </div>
                    <span className="text-amber-400 font-bold">₹15,000 / 2 Hrs</span>
                  </div>

                  <p className="text-[11px] text-slate-400 italic">
                    * Other cities: Boarding / Landing charges at actuals.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-[#009d5a]/20 border border-white/20 hover:border-[#009d5a] text-white text-sm font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <FiCalendar size={16} className="text-[#00c870]" />
                  <span>Set Up Meeting Booking</span>
                </button>
                <p className="text-[11px] text-slate-500 text-center">
                  Replace this action with your live booking link when your calendar is configured.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md rounded-2xl glass-panel p-6 border border-white/20 shadow-2xl">
            <button 
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-white/5"
            >
              <FiX size={18} />
            </button>
            <h3 className="text-xl font-bold font-heading text-white mb-2">Book Partnership Call</h3>
            <p className="text-xs text-slate-300 mb-4">
              To schedule a consultation directly with Rajarathinam Kamaraj:
            </p>
            <div className="space-y-3 text-xs text-slate-300 p-4 rounded-xl bg-white/5 border border-white/10 mb-5">
              <p>📧 Email: <strong>partner@yark.co.in</strong></p>
              <p>📞 Phone / WhatsApp: <strong>Available upon callback request</strong></p>
              <p>🗓️ Platforms: Google Meet, Zoom, or Zoho Meeting</p>
            </div>
            <button
              onClick={() => setShowBookingModal(false)}
              className="w-full py-2.5 rounded-xl bg-[#009d5a] hover:bg-[#00c870] text-white text-xs font-semibold"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Footer Tagline */}
      <FooterTagline customText={partner.footerTagline} />
    </div>
  );
};

export default PartnerView;
