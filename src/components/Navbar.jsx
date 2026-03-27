import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Science', href: '#how-it-works' },
  { label: 'About', href: '#philosophy' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '#blog' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <a href="#hero" className="nav-logo">Peptide Form</a>
        <ul className="nav-links">
          {NAV_LINKS.map(l => (
            <li key={l.label}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <a href="#products" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.875rem' }}>
          <span>Shop Peptides</span>
          <span className="bg-slide" aria-hidden="true" />
        </a>
        <button
          className="mobile-menu-btn"
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          id="mobile-menu-btn"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <button
          onClick={() => setMenuOpen(false)}
          style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        {NAV_LINKS.map(l => (
          <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href="#products" className="btn-primary" onClick={() => setMenuOpen(false)}>
          <span>Shop Peptides</span>
          <span className="bg-slide" aria-hidden="true" />
        </a>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
