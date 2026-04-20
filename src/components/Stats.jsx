"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { number: '99.4', suffix: '%', label: 'Average Purity', desc: 'Our peptides consistently exceed pharmaceutical-grade purity benchmarks across all batches.' },
  { number: '50', suffix: 'K+', label: 'Orders Shipped', desc: 'Trusted by biohackers, clinicians, and longevity researchers across 40+ countries.' },
  { number: '36', suffix: '%', label: 'Faster Recovery', desc: 'Average reduction in recovery time reported in our independent user outcome surveys.' },
  { number: '14', suffix: '', label: 'Research Studies Cited', desc: 'Our formulations are grounded in published peer-reviewed science — not marketing claims.' },
];

const Stats = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stat numbers
      STATS.forEach((stat, i) => {
        const el = document.querySelectorAll('.stat-number')[i];
        if (!el) return;
        const target = parseFloat(stat.number);
        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: target,
            duration: 2.5,
            ease: 'power1.inOut',
            snap: { textContent: target % 1 === 0 ? 1 : 0.1 },
            scrollTrigger: { trigger: '.stats-section', start: 'top 82%', toggleActions: 'play none none none' },
            onUpdate() { el.textContent = parseFloat(el.textContent).toFixed(target % 1 === 0 ? 0 : 1) + stat.suffix; },
          }
        );
      });
      gsap.from('.stat-card', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.stats-section', start: 'top 82%', toggleActions: 'play none none none' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="tag-pill">Our Metrics</span>
          <h2>The numbers that define our standard</h2>
        </div>
        <div className="stats-grid">
          {STATS.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-number">{s.number}{s.suffix}</div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
