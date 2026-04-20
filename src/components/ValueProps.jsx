"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FlaskConical, Shield, Zap, Truck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const VALUE_PROPS = [
  {
    Icon: FlaskConical,
    title: 'Third-Party Lab Tested',
    desc: 'Every batch independently verified for purity and identity. COAs published and accessible with every order — no hidden data, ever.',
  },
  {
    Icon: Shield,
    title: '99%+ Purity Guaranteed',
    desc: 'Sourced exclusively from GMP-certified synthesis facilities. Sub-standard products are never released — your biology deserves nothing less.',
  },
  {
    Icon: Zap,
    title: 'Same-Day Dispatch',
    desc: 'Orders placed before 2pm ship the same business day, cold-packed and fully tracked. Speed without compromise on cold-chain integrity.',
  },
  {
    Icon: Truck,
    title: 'Discreet Global Shipping',
    desc: 'Clinical-grade packaging, plain labeling, shipped to 40+ countries. Full tracking included from dispatch to doorstep.',
  },
];

const ValueProps = () => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // First, ensure they are visible if they were stuck
      gsap.set('.value-card', { opacity: 1, y: 0 });

      gsap.fromTo('.value-card', 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { 
            trigger: ref.current, 
            start: 'top bottom-=50', 
            toggleActions: 'play none none none' 
          },
        }
      );

      // Force a refresh after a delay to account for late-loading fonts/images
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="value-props-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="tag-pill">Science-Backed</span>
          <h2>Industry Standards & Scientific Rigor</h2>
        </div>
        <div className="value-grid">
          {VALUE_PROPS.map(({ Icon, title, desc }) => (
            <div key={title} className="value-card">
              <div className="value-icon">
                <Icon size={32} aria-hidden="true" />
              </div>
              <h3 className="value-title">{title}</h3>
              <p className="value-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
