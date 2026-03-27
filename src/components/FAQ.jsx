import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FAQS = [
  {
    q: 'Are your peptides pharmaceutical-grade?',
    a: 'All peptides are synthesized in GMP-certified facilities and independently tested for purity, identity, and sterility. Every batch COA is published on the product page — full transparency, no exceptions.',
  },
  {
    q: 'Is it legal to purchase peptides?',
    a: 'Peptide Form products are sold for research purposes only. Regulations vary by country — customers are responsible for understanding local laws. We ship to 40+ countries and can advise on documentation upon request.',
  },
  {
    q: 'How should I store my peptides?',
    a: 'Lyophilized (dry) peptides should be stored at -20°C in a freezer. Once reconstituted with bacteriostatic water, store at 4°C in a refrigerator and use within 28-30 days. Never expose to repeated freeze-thaw cycles.',
  },
  {
    q: 'How fast is shipping?',
    a: 'Orders placed before 2pm local time ship the same business day. Domestic delivery: 2-4 business days. International: 5-14 days. Full tracking is provided from dispatch — you\'ll never wonder where your order is.',
  },
  {
    q: 'What is your return and refund policy?',
    a: 'Unopened products may be returned within 30 days for a full refund. If a product fails our purity standards at any point, we replace it free of charge, no questions asked.',
  },
  {
    q: 'How do I know what peptide protocol to follow?',
    a: 'Each product includes a science brief, suggested dosing ranges, and stack recommendations. We also offer a free protocol consultation via email for new customers — just reach out to support@peptideform.com.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        y: 20, opacity: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: '.faq-section', start: 'top 82%', toggleActions: 'play none none none' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" className="faq-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="tag-pill">FAQ</span>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq-list" role="list">
          {FAQS.map((faq, i) => (
            <div key={i} className="faq-item" role="listitem">
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span>{faq.q}</span>
                <span className="faq-icon" aria-hidden="true">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                className={`faq-answer ${openIndex === i ? 'open' : ''}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
