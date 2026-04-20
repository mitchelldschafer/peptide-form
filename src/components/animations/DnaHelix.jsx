"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const DnaHelix = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray('.dna-node');
      
      // Infinite rotate effect
      gsap.to('.dna-wrapper', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none'
      });

      // Pulse nodes
      nodes.forEach((node, i) => {
        gsap.to(node, {
          fill: '#5EEAC4',
          r: 4,
          duration: 1 + Math.random(),
          repeat: -1,
          yoyo: true,
          delay: i * 0.1,
          ease: 'sine.inOut'
        });
      });

      // Mouse interaction
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) / 25;
        const y = (clientY - (top + height / 2)) / 25;

        gsap.to('.dna-wrapper', {
          x: x,
          y: y,
          rotationY: x * 2,
          rotationX: -y * 2,
          duration: 1,
          ease: 'power2.out'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="dna-container"
      style={{ 
        width: '100%', 
        height: '500px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        perspective: '1000px'
      }}
    >
      <svg width="400" height="600" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="dna-wrapper">
        <defs>
          <linearGradient id="dna-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--glow-secondary)" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* DNA Strands */}
        {[...Array(20)].map((_, i) => {
          const y = 50 + i * 25;
          const offset = i * 0.5;
          return (
            <React.Fragment key={i}>
              <line 
                x1={200 + Math.sin(offset) * 60} 
                y1={y} 
                x2={200 + Math.sin(offset + Math.PI) * 60} 
                y2={y} 
                stroke="url(#dna-gradient)" 
                strokeWidth="1"
                opacity="0.4"
              />
              <circle 
                cx={200 + Math.sin(offset) * 60} 
                cy={y} 
                r="3" 
                className="dna-node" 
                fill="var(--accent)" 
                filter="url(#glow)"
              />
              <circle 
                cx={200 + Math.sin(offset + Math.PI) * 60} 
                cy={y} 
                r="3" 
                className="dna-node" 
                fill="var(--accent)" 
                filter="url(#glow)"
              />
            </React.Fragment>
          );
        })}

        {/* Vertical Paths */}
        <path 
          d={`M ${200 + Math.sin(0) * 60} 50 ${[...Array(20)].map((_, i) => `L ${200 + Math.sin(i * 0.5) * 60} ${50 + i * 25}`).join(' ')}`}
          stroke="url(#dna-gradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        <path 
          d={`M ${200 + Math.sin(Math.PI) * 60} 50 ${[...Array(20)].map((_, i) => `L ${200 + Math.sin(i * 0.5 + Math.PI) * 60} ${50 + i * 25}`).join(' ')}`}
          stroke="url(#dna-gradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default DnaHelix;
