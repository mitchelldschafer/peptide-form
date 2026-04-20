"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BiometricTracker = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Waveform animation
      gsap.to('.biometric-wave', {
        attr: { d: "M0 120 Q30 80 60 120 T120 120 T180 120 T240 120" },
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Data nodes pulse
      gsap.to('.data-node', {
        r: 5,
        fillOpacity: 1,
        stagger: { each: 0.3, repeat: -1, yoyo: true },
        duration: 1,
        ease: 'power1.inOut'
      });

      // Pulsing circle
      gsap.to('.biometric-pulse', {
        r: 100,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: 'power2.out'
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="biometric-animation" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="120" cy="120" r="40" stroke="var(--accent)" strokeWidth="0.5" className="biometric-pulse" />
        <circle cx="120" cy="120" r="60" stroke="var(--accent)" strokeWidth="0.3" opacity="0.2" />
        
        {/* Waveform Path */}
        <path 
          d="M0 120 Q30 160 60 120 T120 120 T180 120 T240 120" 
          stroke="var(--accent)" 
          strokeWidth="2" 
          className="biometric-wave"
          strokeOpacity="0.6"
        />
        
        {/* Data Points */}
        <circle cx="60" cy="120" r="3" fill="var(--accent)" fillOpacity="0.4" className="data-node" />
        <circle cx="120" cy="120" r="3" fill="var(--accent)" fillOpacity="0.4" className="data-node" />
        <circle cx="180" cy="120" r="3" fill="var(--accent)" fillOpacity="0.4" className="data-node" />
        
        {/* Grid lines */}
        <line x1="0" y1="80" x2="240" y2="80" stroke="var(--border)" strokeWidth="0.5" strokeOpacity="0.3" />
        <line x1="0" y1="160" x2="240" y2="160" stroke="var(--border)" strokeWidth="0.5" strokeOpacity="0.3" />
      </svg>
    </div>
  );
};

export default BiometricTracker;
