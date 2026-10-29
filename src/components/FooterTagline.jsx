import React from 'react';

const FooterTagline = ({ customText }) => {
  return (
    <footer className="w-full py-8 px-4 text-center select-none">
      <p className="text-xs sm:text-sm font-light tracking-wide text-slate-400/80">
        {customText || "Building confident money decisions, one step at a time."}
      </p>
    </footer>
  );
};

export default FooterTagline;
