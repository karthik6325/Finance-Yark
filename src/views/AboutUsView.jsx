import React from 'react';
import { FiTarget, FiUsers, FiAward } from 'react-icons/fi';
import FooterTagline from '../components/FooterTagline';
import { websiteContent } from '../data/websiteContent';

const AboutUsView = () => {
  const { aboutUs } = websiteContent;

  const pillarIcons = [FiTarget, FiUsers, FiAward];

  return (
    <div className="relative min-h-[calc(100vh-100px)] flex flex-col justify-between px-4 py-8 sm:py-12 z-10 max-w-5xl mx-auto">
      
      <div className="w-full flex flex-col gap-10 sm:gap-14 animate-fade-in">
        
        {/* Main Heading */}
        <div className="text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            {aboutUs.title}
          </h1>
        </div>

        {/* Section 1: The Story Behind YARK */}
        <section className="flex flex-col gap-3">
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
            {aboutUs.sections[0].title}
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {aboutUs.sections[0].paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

        {/* Section 2: The Problem with "The Advice" */}
        <section className="flex flex-col gap-3">
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
            {aboutUs.sections[1].title}
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {aboutUs.sections[1].paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

        {/* Section 3: The YARK Philosophy: A Spiritual Approach to Capital */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
            {aboutUs.sections[2].title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line">
            {aboutUs.sections[2].intro}
          </p>

          {/* 3 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {aboutUs.sections[2].pillars.map((pillar, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length];
              return (
                <div 
                  key={idx}
                  className="rounded-2xl glass-panel p-6 flex flex-col justify-between hover:border-[#009d5a]/60 hover:shadow-glow transition-all"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#009d5a]/20 border border-[#009d5a]/40 flex items-center justify-center text-[#00c870] mb-4">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>

      {/* Footer Tagline */}
      <FooterTagline />
    </div>
  );
};

export default AboutUsView;
