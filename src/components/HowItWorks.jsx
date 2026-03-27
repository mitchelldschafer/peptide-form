import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlowOrb from './GlowOrb';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: '01',
    title: 'Select Your Protocol',
    desc: 'Browse our curated range of research-grade peptides filtered by goal — recovery, longevity, cognition, or performance. Each product includes a full science brief and COA.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    badge: 'COA Published',
    reverse: false,
  },
  {
    num: '02',
    title: 'Lab-Verified & Shipped',
    desc: 'Your order is pulled from temperature-controlled inventory, cold-packed, and dispatched the same day. Batch COA included with every order.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
    badge: 'Same-Day Dispatch',
    reverse: true,
  },
  {
    num: '03',
    title: 'Track Your Biology',
    desc: 'Log your biomarkers, dosing, and outcomes. Science-backed protocol guides included with every order to help you optimize your results.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    badge: '99.4% Purity',
    reverse: false,
  },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.step-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.how-it-works-section', start: 'top 82%', toggleActions: 'play none none none' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="how-it-works" className="how-it-works-section" ref={sectionRef} style={{ position: 'relative', overflow: 'hidden' }}>
      <GlowOrb size={560} opacity={0.14} color="secondary" style={{ top: '50%', left: '50%' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <span className="tag-pill">How It Works</span>
          <h2>How Peptide Form makes your optimization easier</h2>
        </div>

        {STEPS.map((step) => (
          <div key={step.num} className={`step-card ${step.reverse ? 'reverse' : ''}`}>
            <div>
              <p className="step-label">Step {step.num}</p>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
            <div className="step-image-wrap">
              <img src={step.image} alt={step.title} loading="lazy" />
              <div className="step-badge">{step.badge}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
