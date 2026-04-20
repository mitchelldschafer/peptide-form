"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlowOrb from './GlowOrb';

gsap.registerPlugin(ScrollTrigger);

const MidPageCta = () => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.mid-cta-content > *', {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.mid-cta-section', start: 'top 82%', toggleActions: 'play none none none' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="mid-cta-section cta-block" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <GlowOrb size={720} opacity={0.18} animated color="primary" style={{ top: '50%', left: '50%' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="mid-cta-content">
          <span className="tag-pill">Start Optimizing</span>
          <h2>Ready to transform your biology?</h2>
          <p className="sub">
            Research-grade peptides, verified purity, same-day shipping. Join thousands of biohackers already optimizing their performance.
          </p>
          <a href="#products" className="btn-primary" id="mid-cta-btn">
            <span>Shop Peptides</span>
            <span className="bg-slide" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MidPageCta;
