"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ARTICLES = [
  {
    tag: 'Research',
    title: 'BPC-157: The Complete Guide to Systemic Healing',
    excerpt: 'A deep-dive into the most clinically studied peptide for tissue repair. We cover mechanisms, dosing protocols, reconstitution, and what the peer-reviewed literature actually says.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
  },
  {
    tag: 'Anti-Aging',
    title: 'Epithalon and Telomere Biology: What the Science Says',
    excerpt: "Epithalon's ability to upregulate telomerase has made it the most-researched longevity peptide. A breakdown of the key studies and what they mean for real-world use.",
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
  },
  {
    tag: 'Guide',
    title: 'How to Store and Reconstitute Peptides Safely',
    excerpt: 'Proper storage and reconstitution is the difference between a potent peptide and a degraded one. Step-by-step guide with temperature, water type, and syringe protocol.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80',
  },
];

const Blog = () => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.blog-card', {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { 
          trigger: ref.current, 
          start: 'top 95%', 
          toggleActions: 'play none none none' 
        },
      });
      ScrollTrigger.refresh();
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="blog" className="blog-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="tag-pill">Articles</span>
          <h2>Science you can actually use</h2>
        </div>
        <div className="blog-grid">
          {ARTICLES.map((a) => (
            <article key={a.title} className="blog-card">
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }}
              />
              <div className="blog-card-body">
                <p className="blog-article-tag">{a.tag}</p>
                <h3 className="blog-title">{a.title}</h3>
                <p className="blog-excerpt">{a.excerpt}</p>
                <a href="#" className="blog-read-more">Read More →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
