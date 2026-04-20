"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlowOrb from './GlowOrb';
import { fetchPeptides } from '../utils/fetchPeptides';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const [peptides, setPeptides] = useState([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const loadPeptides = async () => {
      const data = await fetchPeptides();
      setPeptides(data);
      setLoading(false);
    };
    loadPeptides();
  }, []);

  useEffect(() => {
    if (!loading) {
      const ctx = gsap.context(() => {
        gsap.from('.products-table-group', {
          y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.products-section', start: 'top 82%', toggleActions: 'play none none none' },
        });
      }, ref);
      return () => ctx.revert();
    }
  }, [loading]);

  // Group peptides by category
  const categories = [...new Set(peptides.map(p => p.Category))];

  const getStatusClass = (status) => {
    if (!status) return '';
    return status.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <section id="products" className="products-section" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <GlowOrb size={600} opacity={0.08} color="primary" style={{ top: '20%', left: '50%' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <span className="tag-pill">Catalog</span>
          <h2>Research-grade peptides, fully verified</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: 12 }}>Every product ships with a batch-specific Certificate of Analysis.</p>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-subtle)' }}> Loading Catalog... </div>
        ) : (
          <div className="products-tables">
            {categories.map((category) => (
              <div key={category} className="products-table-group">
                <h3>
                  {category}
                  <span>{peptides.filter(p => p.Category === category).length} Items</span>
                </h3>
                <div className="table-wrapper">
                  <table className="products-table">
                    <thead>
                      <tr>
                        <th>Sub-Category</th>
                        <th>Peptide Name</th>
                        <th>Dose</th>
                        <th>Single Price</th>
                        <th>Bulk Price (10+)</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {peptides
                        .filter((p) => p.Category === category)
                        .map((p, idx) => (
                          <tr key={idx}>
                            <td className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{p.SubCategory}</td>
                            <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{p.PeptideName}</td>
                            <td><span className="dose-tag">{p.Dose}</span></td>
                            <td><span className="price-single">${p.SinglePrice}</span></td>
                            <td><span className="price-bulk">${p.BulkPrice}</span></td>
                            <td>
                              <span className={`status-pill ${getStatusClass(p.Status)}`}>
                                {p.Status}
                              </span>
                            </td>
                            <td>
                              <a href="#contact" className="btn-ghost" style={{ padding: '6px 14px', fontSize: '0.75rem' }}>
                                Details
                              </a>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;

export default Products;
