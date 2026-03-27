import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlowOrb from './GlowOrb';

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    name: 'BPC-157',
    tag: 'Recovery',
    desc: 'Systemic peptide for accelerated tissue repair, joint recovery, and gut health. The most studied healing peptide.',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80',
  },
  {
    name: 'TB-500',
    tag: 'Recovery',
    desc: 'Thymosin Beta-4 fragment promoting healing, flexibility, and anti-inflammation. Exceptional for soft tissue injuries.',
    price: '$79.99',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
  },
  {
    name: 'Epithalon',
    tag: 'Anti-Aging',
    desc: 'Telomerase-activating tetrapeptide shown to extend biological lifespan markers. The longevity gold standard.',
    price: '$99.99',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
  },
  {
    name: 'Semax',
    tag: 'Cognitive',
    desc: 'Nootropic peptide enhancing BDNF, focus, neuroplasticity, and stress resilience for peak mental performance.',
    price: '$74.99',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80',
  },
  {
    name: 'CJC-1295',
    tag: 'Performance',
    desc: 'Growth hormone-releasing peptide for lean mass development, fat metabolism optimization, and sleep quality.',
    price: '$84.99',
    image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=600&q=80',
  },
  {
    name: 'GHK-Cu',
    tag: 'Anti-Aging',
    desc: 'Copper peptide complex supporting skin regeneration, collagen synthesis, and systemic tissue renewal.',
    price: '$69.99',
    image: 'https://images.unsplash.com/photo-1567327631098-7c759d5c3c6e?w=600&q=80',
  },
];

const Products = () => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.product-card', {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.products-section', start: 'top 82%', toggleActions: 'play none none none' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="products" className="products-section" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <GlowOrb size={500} opacity={0.12} color="primary" style={{ top: '30%', left: '50%' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <span className="tag-pill">Products</span>
          <h2>Research-grade peptides, fully verified</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: 12 }}>Every product ships with a batch-specific Certificate of Analysis.</p>
        </div>
        <div className="products-grid">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="product-card">
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <GlowOrb size={250} opacity={0.12} color="primary" style={{ top: '50%', left: '50%' }} />
                <img
                  className="product-image"
                  src={p.image}
                  alt={`${p.name} — ${p.tag} peptide`}
                  loading="lazy"
                />
              </div>
              <div className="product-content">
                <span className="product-tag-pill">{p.tag}</span>
                <h3 className="product-name">{p.name}</h3>
                <p className="product-desc">{p.desc}</p>
                <div className="product-footer">
                  <span className="product-price">{p.price}</span>
                  <a href="#" className="btn-ghost" style={{ padding: '8px 18px', fontSize: '0.8125rem' }} aria-label={`Add ${p.name} to cart`}>
                    Add to Cart
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
