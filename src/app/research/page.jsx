"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlowOrb from '@/components/GlowOrb';
import { BookOpen, Shield, FlaskConical, ExternalLink } from 'lucide-react';

const RESEARCH_DATA = [
  {
    id: 'bpc-157',
    name: 'BPC-157',
    summary: 'A 15-amino acid pentadecapeptide primarily known for its profound effects on tissue repair and systemic healing.',
    highlights: [
      'Accelerates tendon-to-bone healing',
      'Protects and heals the gastric mucosa',
      'Exhibits potent anti-inflammatory properties',
      'Upregulates growth factor expression (VEGF)'
    ],
    review: `Body Protection Compound 157 (BPC-157) is a synthetic peptide based on a protective protein found in human gastric juice. Clinical research has demonstrated its ability to accelerate the healing of various tissues including muscle, tendon, and ligament. Its mechanism involves the upregulation of growth hormone receptors and the promotion of angiogenesis (the formation of new blood vessels), which is critical for repairing poorly vascularized tissues like tendons.`,
    sources: [
      { title: 'Gastric pentadecapeptide BPC 157 and tendon repair', link: 'https://pubmed.ncbi.nlm.nih.gov/20225319/' },
      { title: 'BPC 157: A Review', link: 'https://pubmed.ncbi.nlm.nih.gov/29879796/' }
    ]
  },
  {
    id: 'epithalon',
    name: 'Epithalon',
    summary: 'A synthetic version of the polypeptide epithalamin, research suggests it plays a critical role in telomere maintenance and longevity.',
    highlights: [
      'Upregulates telomerase enzyme activity',
      'Promotes cellular rejuvenation',
      'Regulates melatonin secretion',
      'Normalization of pineal gland function'
    ],
    review: `Epithalon (Epitalon) was originally synthesized from bovine pineal glands. Its primary mechanism of action is the activation of the enzyme telomerase, which helps maintain the length of telomeres — the protective caps on the ends of chromosomes. Accelerated telomere shortening is a hallmark of biological aging, and Epithalon has shown promise in animal models for extending lifespan and reducing the incidence of age-related diseases.`,
    sources: [
      { title: 'Peptide Geroprotectors: Epithalon', link: 'https://pubmed.ncbi.nlm.nih.gov/12110196/' },
      { title: 'Telomerase activation by Epithalon in human cells', link: 'https://pubmed.ncbi.nlm.nih.gov/15112111/' }
    ]
  },
  {
    id: 'semaglutide',
    name: 'Semaglutide',
    summary: 'A GLP-1 receptor agonist that has revolutionized the approach to metabolic health and weight management.',
    highlights: [
      'Mimics natural GLP-1 inkretin hormones',
      'Significant reduction in cardiovascular risk',
      'Regulates blood glucose and insulin sensitivity',
      'Promotes sustained body weight reduction'
    ],
    review: `Semaglutide works by mimicking the glucagon-like peptide-1 (GLP-1) hormone that is naturally produced in the gut after eating. It targets the brain areas that regulate appetite and food intake. Beyond weight management, research indicates systemic benefits including improved lipid profiles and reduced inflammation in adipose tissue.`,
    sources: [
      { title: 'Once-Weekly Semaglutide in Adults with Overweight or Obesity', link: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2032183' }
    ]
  }
];

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState(RESEARCH_DATA[0].id);

  return (
    <main className="bg-background min-height-vh-100 color-text-primary overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-160 pb-100 overflow-hidden">
        <GlowOrb size={800} opacity={0.12} color="primary" className="absolute top-m-100 left-m-100" />
        <div className="container relative z-10 text-center">
          <div className="tag-pill mb-24 mx-auto">Scientific Data</div>
          <h1 className="hero-headline max-w-800 mx-auto">Peptide Research & Clinical Reviews</h1>
          <p className="hero-subtext max-w-600 mx-auto">
            A comprehensive index of peer-reviewed clinical studies and academic literature regarding the biological mechanisms of therapeutic peptides.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-160 relative">
        <div className="container">
          <div className="display-grid grid-cols-12 gap-64">
            
            {/* Sidebar Navigation */}
            <aside className="col-span-4 sticky top-120 align-self-start display-none sm-display-block">
              <nav className="flex flex-col gap-8">
                {RESEARCH_DATA.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`research-nav-item ${activeTab === item.id ? 'active' : ''}`}
                  >
                    <BookOpen size={16} className="mr-12" />
                    <span>{item.name} Review</span>
                  </button>
                ))}
              </nav>
              <div className="mt-40 p-24 border border-subtle border-radius-20 bg-surface">
                <Shield size={32} className="color-accent mb-16" />
                <p className="size-14 color-text-secondary leading-16">
                  All data provided is for educational and research purposes only. Clinical citations are sourced from PubMed and the National Institute of Health.
                </p>
              </div>
            </aside>

            {/* Content Display */}
            <div className="col-span-12 sm-col-span-8">
              {RESEARCH_DATA.filter(item => item.id === activeTab).map((item) => (
                <article key={item.id} className="animate-fade-in">
                  <div className="flex flex-col gap-32">
                    <div className="p-40 border border-subtle border-radius-24 bg-surface-elevated relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-24 opacity-10">
                        <FlaskConical size={120} />
                      </div>
                      
                      <h2 className="size-48 font-400 mb-16">{item.name}</h2>
                      <p className="size-20 color-accent leading-1.4 mb-40 font-500">
                        {item.summary}
                      </p>

                      <div className="display-grid sm-grid-cols-2 gap-24 mb-48">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex align-items-start py-12 px-20 bg-surface border-radius-12 border border-subtle">
                            <div className="size-8 border-radius-full bg-accent mt-8 mr-16 shrink-0" />
                            <span className="size-16 color-text-secondary">{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="size-18 color-text-secondary leading-1.6 mb-64">
                        {item.review}
                      </div>

                      {/* Sources Section */}
                      <div className="border-t border-subtle pt-40">
                        <h4 className="mono size-14 color-accent uppercase ls-08 mb-24">Sided Sources & Citations</h4>
                        <div className="flex flex-col gap-16">
                          {item.sources.map((source, i) => (
                            <a 
                              key={i} 
                              href={source.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="group flex align-items-center p-16 border-radius-12 border border-subtle hover-border-accent bg-surface transition-all"
                            >
                              <ExternalLink size={16} className="mr-16 color-text-subtle group-hover-color-accent" />
                              <span className="size-15 color-text-secondary group-hover-color-text-primary transition-colors">
                                {source.title}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .research-nav-item {
          display: flex;
          align-items: center;
          padding: 16px 24px;
          border-radius: 12px;
          background: var(--surface);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
          font-size: 15px;
        }
        .research-nav-item:hover {
          border-color: var(--accent);
          color: var(--text-primary);
          transform: translateX(4px);
        }
        .research-nav-item.active {
          background: var(--accent);
          border-color: var(--accent);
          color: var(--background);
          font-weight: 600;
          box-shadow: 0 0 30px rgba(45, 212, 168, 0.2);
        }
        .animate-fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .align-self-start { align-self: flex-start; }
        .sticky { position: sticky; }
        .top-120 { top: 120px; }
        .ls-08 { letter-spacing: 0.08em; }
      `}</style>
    </main>
  );
}
