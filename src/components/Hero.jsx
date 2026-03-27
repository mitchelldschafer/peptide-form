import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
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
        .from('.hero-product-card', { y: 60, opacity: 0, duration: 1.0 }, '-=0.4')
        .from('.hero-glow',         { scale: 0.8, opacity: 0, duration: 1.2 }, 0);
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Glow layer */}
      <GlowOrb
        size={860}
        opacity={0.22}
        animated
        color="primary"
        className="hero-glow"
        style={{ top: '40%', left: '50%' }}
      />
      <GlowOrb
        size={420}
        opacity={0.13}
        color="secondary"
        className="hero-glow"
        style={{ top: '20%', left: '20%' }}
      />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="hero-tag">
          <span className="tag-pill">
            <span className="tag-dot" aria-hidden="true" />
            Research-Grade Peptides
          </span>
        </div>

        <h1 className="hero-headline">
          Unlock Your Biological Potential
        </h1>

        <p className="hero-subtext">
          Precision peptide formulations clinically validated for recovery, longevity, and peak human performance. Third-party tested. Trusted by thousands of biohackers and clinicians.
        </p>

        <div className="hero-cta">
          <a href="#products" className="btn-primary" id="hero-shop-btn">
            <span>Shop Peptides</span>
            <span className="bg-slide" aria-hidden="true" />
          </a>
          <a href="#how-it-works" className="btn-ghost" id="hero-science-btn">
            View Lab Results
          </a>
        </div>

        <div className="hero-product-card" style={{ position: 'relative' }}>
          <GlowOrb size={300} opacity={0.15} color="primary" className="" style={{ top: '50%', left: '50%' }} />
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
            alt="Research-grade peptide vials with teal laboratory lighting"
            loading="eager"
          />
          <div className="hero-card-meta">
            <div className="tag-pill" style={{ fontSize: '0.6875rem' }}>
              <span className="tag-dot" aria-hidden="true" />
              GMP Certified
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
              <span className="mono" style={{ fontSize: '1.125rem', color: 'var(--accent)', fontWeight: 600 }}>99.4%</span>
              <span style={{ fontSize: '0.6875rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Avg. Purity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
