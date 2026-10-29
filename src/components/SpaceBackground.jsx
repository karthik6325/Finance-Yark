import React from 'react';

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden space-stars">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030a10] via-[#05131e] to-[#02070c] opacity-95" />

      {/* Radial soft emerald glow in center */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 157, 90, 0.14) 0%, rgba(0, 200, 112, 0.05) 45%, transparent 75%)',
          filter: 'blur(40px)'
        }}
      />

      {/* Top ambient glow */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0, 157, 90, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      {/* Subtle bottom glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[250px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0, 100, 60, 0.08) 0%, transparent 70%)',
          filter: 'blur(70px)'
        }}
      />
    </div>
  );
};

export default SpaceBackground;
