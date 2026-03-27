import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    quote: `"BPC-157 was the first peptide that genuinely accelerated my recovery from a labrum tear. 6 weeks ahead of my surgeon's timeline — I was back training before anyone expected."`,
    name: 'Dr. James R.',
    title: 'Sports Medicine Physician',
    initials: 'JR',
  },
  {
    quote: `"I've tried six peptide vendors. Peptide Form is the only one that publishes batch-specific COAs. That transparency is non-negotiable for me. The purity data speaks for itself."`,
    name: 'Sarah K.',
    title: 'Longevity Researcher',
    initials: 'SK',
  },
  {
    quote: `"Epithalon at 12 weeks produced measurable telomere improvement in my blood panel. The data doesn't lie. This is the most scientifically rigorous peptide company I've worked with."`,
    name: 'Marcus T.',
    title: 'Biohacker & Health Coach',
    initials: 'MT',
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.testimonials-section', start: 'top 82%', toggleActions: 'play none none none' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonials-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="tag-pill">Testimonials</span>
          <h2>What our clients are saying</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: 12 }}>Real results from real researchers and biohackers.</p>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testimonial-card">
              <p className="testimonial-quote">{t.quote}</p>
              <hr className="testimonial-divider" />
              <div className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">{t.initials}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-title-text">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
