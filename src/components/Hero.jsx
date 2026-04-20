"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import DnaHelix from './animations/DnaHelix';
import GlowOrb from './GlowOrb';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-tag',          { y: 20, opacity: 0, duration: 0.6 })
        .from('.hero-headline',     { y: 40, opacity: 0, duration: 0.9 }, '-=0.3')
        .from('.hero-subtext',      { y: 30, opacity: 0, duration: 0.7 }, '-=0.5')
        .from('.hero-cta',          { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('.hero-visual',       { x: 60, opacity: 0, duration: 1.2 }, '-=0.8')
        .from('.hero-glow',         { scale: 0.8, opacity: 0, duration: 1.2 }, 0);
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="hero-section" ref={heroRef} style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Glow layer */}
      <GlowOrb
        size={860}
        opacity={0.15}
        animated
        color="primary"
        className="hero-glow"
        style={{ top: '30%', left: '70%' }}
      />

      <div className="container hero-container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '60px', alignItems: 'center' }}>
        <div className="hero-content" style={{ textAlign: 'left' }}>
          <div className="hero-tag">
            <span className="tag-pill">
              <span className="tag-dot" aria-hidden="true" />
              Research-Grade Peptides
            </span>
          </div>

          <h1 className="hero-headline" style={{ marginLeft: 0, textAlign: 'left' }}>
            Unlock Your Biological Potential
          </h1>

          <p className="hero-subtext" style={{ marginLeft: 0, textAlign: 'left' }}>
            Precision peptide formulations clinically validated for recovery, longevity, and peak human performance. Third-party tested. Trusted by thousands of biohackers and clinicians.
          </p>

          <div className="hero-cta" style={{ justifyContent: 'flex-start' }}>
            <a href="#products" className="btn-primary" id="hero-shop-btn">
              <span>Shop Peptides</span>
              <span className="bg-slide" aria-hidden="true" />
            </a>
            <a href="#how-it-works" className="btn-ghost" id="hero-science-btn">
              View Lab Results
            </a>
          </div>
        </div>

        <div className="hero-visual" style={{ position: 'relative' }}>
          <DnaHelix />
        </div>
      </div>
    </section>
  );
};

export default Hero;
