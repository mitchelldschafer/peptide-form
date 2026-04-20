"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlowOrb from './GlowOrb';

gsap.registerPlugin(ScrollTrigger);

const FinalCta = () => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.final-cta-content > *', { opacity: 1, y: 0 });

      gsap.fromTo('.final-cta-content > *', 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { 
            trigger: ref.current, 
            start: 'top bottom-=50', 
            toggleActions: 'play none none none' 
          },
        }
      );
      setTimeout(() => ScrollTrigger.refresh(), 500);
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="final-cta-section cta-block" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <GlowOrb size={740} opacity={0.20} animated color="primary" style={{ top: '50%', left: '50%' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="final-cta-content" style={{ paddingBottom: '40px' }}>
          <span className="tag-pill">Get Started</span>
          <h2>Start your journey with Peptide Form</h2>
          <p className="sub">
            Research-grade purity. Published COAs. Same-day shipping. Your biology deserves the best — and so do you.
          </p>
          <a href="#products" className="btn-primary" id="final-cta-btn" style={{ fontSize: '1.0625rem', padding: '16px 40px', marginBottom: '20px' }}>
            <span>Shop All Peptides</span>
            <span className="bg-slide" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
