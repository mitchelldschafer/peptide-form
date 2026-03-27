const LOGOS = [
  'GMP Certified', 'NSF Tested', 'FDA Registered', 'ISO 9001', 'COA Published',
  'Third-Party Verified', 'cGMP Facility', 'Peptide Science', 'Clinical Grade',
];

const TrustLogos = () => (
  <section className="trust-section" aria-label="Trust certifications">
    <p className="trust-label">Trusted by researchers and biohackers worldwide</p>
    <div className="logo-marquee">
      <div className="logo-track" aria-hidden="true">
        {[...LOGOS, ...LOGOS].map((name, i) => (
          <span key={i} className="logo-item">
            <span className="logo-sep">✦</span>
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustLogos;
