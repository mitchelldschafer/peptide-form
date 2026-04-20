"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ProtocolSelector = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rotating outer ring
      gsap.to('.ring-outer', { rotation: 360, duration: 10, repeat: -1, ease: 'none' });
      gsap.to('.ring-inner', { rotation: -360, duration: 15, repeat: -1, ease: 'none' });
      
      // Pulsing nodes
      gsap.to('.protocol-node', {
        scale: 1.2,
        opacity: 0.8,
        duration: 1,
        stagger: { each: 0.2, repeat: -1, yoyo: true },
        ease: 'sine.inOut'
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="protocol-animation" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="120" cy="120" r="100" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" className="ring-outer" />
        <circle cx="120" cy="120" r="70" stroke="var(--accent)" strokeWidth="0.5" strokeOpacity="0.3" className="ring-inner" />
        
        {/* Central Core */}
        <circle cx="120" cy="120" r="30" fill="var(--accent)" fillOpacity="0.05" stroke="var(--accent)" strokeWidth="1" />
        <circle cx="120" cy="120" r="15" fill="var(--accent)" fillOpacity="0.2" className="protocol-core-pulse" />
        
        {/* Satellite Nodes */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const x = 120 + 100 * Math.cos((angle * Math.PI) / 180);
          const y = 120 + 100 * Math.sin((angle * Math.PI) / 180);
          return (
            <g key={i}>
              <line x1="120" y1="120" x2={x} y2={y} stroke="var(--border)" strokeWidth="0.5" />
              <circle cx={x} cy={y} r="6" fill="var(--surface-elevated)" stroke="var(--accent)" strokeWidth="1" className="protocol-node" />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default ProtocolSelector;
