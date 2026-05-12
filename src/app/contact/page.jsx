"use client";
import GlowOrb from '@/components/GlowOrb';
import { Mail, Phone, Clock, Shield } from 'lucide-react';

export default function ContactPage() {
  return (
    <>

      {/* Hero */}
      <section style={{ position: 'relative', paddingTop: '160px', paddingBottom: '80px', overflow: 'hidden' }}>
        <GlowOrb size={900} opacity={0.12} color="primary" className="absolute top-m-200 left-m-200" />
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="tag-pill" style={{ marginBottom: '24px', display: 'inline-flex' }}>Get In Touch</div>
          <h1 className="hero-headline" style={{ maxWidth: '700px', margin: '0 auto 20px' }}>
            Contact Us
          </h1>
          <p className="hero-subtext" style={{ maxWidth: '560px', margin: '0 auto' }}>
            Have questions about our peptides, orders, or research? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section style={{ paddingBottom: '160px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '800px', margin: '0 auto 64px' }}>

            {/* Phone */}
            <div style={{
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '24px',
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              transition: 'all 0.35s ease',
              cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 40px 80px rgba(15,23,42,0.08), 0 0 30px rgba(37,99,235,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Phone size={24} color="var(--accent)" />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px' }}>Phone</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.5 }}>
                Call us directly for immediate assistance
              </p>
              <a
                href="tel:+19709858213"
                style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}
              >
                (970) 985-8213
              </a>
            </div>

            {/* Email */}
            <div style={{
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '24px',
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              transition: 'all 0.35s ease',
              cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 40px 80px rgba(15,23,42,0.08), 0 0 30px rgba(37,99,235,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Mail size={24} color="var(--accent)" />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px' }}>Email</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.5 }}>
                Send us a message anytime
              </p>
              <a
                href="mailto:peptideform@gmail.com"
                style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', fontFamily: 'var(--font-mono)', wordBreak: 'break-all' }}
              >
                peptideform@gmail.com
              </a>
            </div>
          </div>

          {/* Info row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '24px', background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px' }}>
              <Clock size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '4px' }}>Response Time</p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>We respond to all inquiries within 24 hours on business days.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '24px', background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px' }}>
              <Shield size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '4px' }}>Research Support</p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>Questions about peptide protocols? Our team is here to help.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
