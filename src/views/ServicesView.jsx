import React, { useState } from 'react';
import { 
  FiArrowLeft, 
  FiGlobe, 
  FiTrendingUp, 
  FiShield, 
  FiFileText,
  FiArrowUpRight
} from 'react-icons/fi';
import FooterTagline from '../components/FooterTagline';
import { websiteContent } from '../data/websiteContent';

const serviceIcons = {
  'nri-wealth': FiGlobe,
  'mutual-funds': FiTrendingUp,
  'insurance': FiShield,
  'estate-structuring': FiFileText
};

const ServicesView = () => {
  const { services } = websiteContent;
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const selectedService = services.find((s) => s.id === selectedServiceId);

  return (
    <div className="relative min-h-[calc(100vh-100px)] flex flex-col justify-between px-4 py-8 sm:py-12 z-10 max-w-5xl mx-auto">
      
      {/* If No Service is selected: Show Catalog Grid */}
      {!selectedService ? (
        <div className="w-full flex flex-col gap-10 animate-fade-in">
          
          {/* Main Heading */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
              Our Services
            </h1>
          </div>

          {/* 2x2 Interactive Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = serviceIcons[service.id] || FiShield;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className="group cursor-pointer rounded-2xl glass-panel p-6 sm:p-8 flex items-center justify-between border border-white/10 hover:border-[#009d5a] hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    {/* Icon container */}
                    <div className="w-14 h-14 rounded-2xl bg-[#009d5a]/15 border border-[#009d5a]/40 flex items-center justify-center text-[#00c870] group-hover:scale-110 group-hover:bg-[#009d5a]/25 transition-all">
                      <Icon size={26} />
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-emerald-300 transition-colors">
                      {service.name}
                    </h2>
                  </div>

                  {/* Top-Right Arrow */}
                  <div className="text-slate-400 group-hover:text-[#00c870] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                    <FiArrowUpRight size={26} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      ) : (
        /* If a Service is selected: Show Detailed Subview */
        <div className="w-full flex flex-col gap-8 animate-fade-in">
          
          {/* Back Button */}
          <div>
            <button
              onClick={() => setSelectedServiceId(null)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-white transition-colors"
            >
              <FiArrowLeft />
              <span>Back to Our Services</span>
            </button>
          </div>

          {/* Category Tag & Main Headline */}
          <div className="space-y-3">
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-emerald-400/90">
              {selectedService.category}
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white tracking-tight">
              {selectedService.headline}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl pt-1">
              {selectedService.overview}
            </p>
          </div>

          {/* 4 Feature Cards (2x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {selectedService.features.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-2xl glass-panel p-6 sm:p-7 flex flex-col justify-start border border-white/10 hover:border-[#009d5a]/50 transition-all"
              >
                <h3 className="text-base sm:text-lg font-bold font-heading text-white mb-2">
                  {feature.title}:
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="pt-2">
            <p className="text-xs text-slate-400/80 italic">
              This section is for information only.
            </p>
          </div>

        </div>
      )}

      {/* Footer Tagline */}
      <FooterTagline />
    </div>
  );
};

export default ServicesView;
