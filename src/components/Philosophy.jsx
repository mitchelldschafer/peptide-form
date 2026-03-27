import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.philosophy-block > *', {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.philosophy-section', start: 'top 82%', toggleActions: 'play none none none' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" className="philosophy-section" ref={ref}>
      <div className="container">
        <div className="philosophy-block">
          <span className="tag-pill">Our Philosophy</span>
          <h2>Science, Not Shortcuts.</h2>
          <p className="philosophy-body">
            Peptide Form was founded by researchers frustrated with the gap between clinical peptide science and consumer access. Every formula is developed with PhD-level rigor, sourced from GMP-certified labs, and independently verified before it reaches you. We believe biology shouldn't be a guessing game — precision is the only acceptable standard. When you order from Peptide Form, you're not buying hope. You're buying validated science, backed by data you can read yourself.
          </p>
          <div className="philosophy-divider" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
