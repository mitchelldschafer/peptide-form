const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18M6 6l12 12"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="footer-grid">
      <div>
        <p className="footer-brand-name">Peptide Form</p>
        <p className="footer-tagline">
          Research-Grade Peptides for Peak Performance.<br />
          Third-party tested. GMP certified. Science-first.
        </p>
        <div className="social-links" style={{ marginTop: 24 }}>
          <a href="https://instagram.com/peptideform" className="social-link" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="#" className="social-link" aria-label="X / Twitter">
            <XIcon />
          </a>
          <a href="#" className="social-link" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="footer-col">
        <h4>Products</h4>
        <ul>
          <li><a href="#products">BPC-157</a></li>
          <li><a href="#products">TB-500</a></li>
          <li><a href="#products">Epithalon</a></li>
          <li><a href="#products">Semax</a></li>
          <li><a href="#products">CJC-1295</a></li>
          <li><a href="#products">GHK-Cu</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="#philosophy">About</a></li>
          <li><a href="#how-it-works">Science</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="mailto:support@peptideform.com">Contact</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Shipping Policy</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">Research Disclaimer</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2025 Peptide Form. All rights reserved. For research purposes only.</span>
      <span className="mono" style={{ color: 'var(--text-subtle)', fontSize: '0.75rem' }}>shop.peptideform.com</span>
    </div>
  </footer>
);

export default Footer;
