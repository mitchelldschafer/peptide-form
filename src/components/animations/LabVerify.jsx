"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LabVerify = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Shield pulse
      gsap.to('.verify-shield', {
        strokeOpacity: 0.8,
        strokeWidth: 2,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Scanning line
      gsap.fromTo('.scan-line', 
        { y: 60 },
        { y: 180, duration: 2, repeat: -1, yoyo: true, ease: 'power1.inOut' }
      );

      // Checkmark drawing
      gsap.from('.verify-check', {
        drawSVG: 0, // This works if we had the plugin, but we'll use dashoffset for base gsap
        opacity: 0,
        scale: 0.8,
        transformOrigin: 'center',
        duration: 0.8,
        repeat: -1,
        repeatDelay: 1.5,
        ease: 'back.out(1.7)'
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="lab-verify-animation" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M120 40 L180 60 V120 C180 160 120 200 120 200 C120 200 60 160 60 120 V60 L120 40 Z" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.4" className="verify-shield" />
        
        {/* Scanning Area */}
        <defs>
          <linearGradient id="scan-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="70" y="60" width="100" height="2" fill="url(#scan-grad)" className="scan-line" />
        
        {/* Verification Check */}
        <path d="M90 120 L110 140 L150 100" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="verify-check" />
        
        {/* Tech Decor */}
        <circle cx="120" cy="120" r="85" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2 10" />
      </svg>
    </div>
  );
};

export default LabVerify;
