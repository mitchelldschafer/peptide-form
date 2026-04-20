"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlowOrb from '@/components/GlowOrb';
import { BookOpen, Shield, FlaskConical, ExternalLink } from 'lucide-react';

const RESEARCH_CATEGORIES = [
  { id: 'glp1', name: 'Metabolic & GLP-1' },
  { id: 'repair', name: 'Tissue Repair' },
  { id: 'endocrine', name: 'Endocrine & Growth' },
  { id: 'bioregulators', name: 'Bioregulators' }
];

const RESEARCH_DATA = [
  // 1. GLP-1 and Related Multi-Agonist Peptides
  {
    id: 'semaglutide',
    category: 'glp1',
    name: 'Semaglutide',
    summary: 'A once-weekly GLP-1 receptor agonist approved for chronic weight management and cardiovascular risk reduction.',
    highlights: [
      'FDA-approved for chronic weight management',
      'Reduces major adverse cardiovascular events',
      'Regulates satiety and blood glucose',
      'Formal clinical trial history'
    ],
    review: `U.S. labeling for Wegovy (semaglutide) includes chronic weight management and reduction of major adverse cardiovascular events in adults with established cardiovascular disease and obesity. It targets brain areas that regulate appetite and food intake.`,
    note: 'Semaglutide is a regulated prescription drug with formal clinical-trial data.',
    sources: [
      { title: 'FDA Label (Semaglutide)', link: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/215256s024lbl.pdf' },
      { title: 'Cardiovascular Outcomes Study', link: 'https://pubmed.ncbi.nlm.nih.gov/33567185/' }
    ]
  },
  {
    id: 'tirzepatide',
    category: 'glp1',
    name: 'Tirzepatide',
    summary: 'Dual GIP and GLP-1 receptor agonist demonstrating significant weight reduction in core clinical trials.',
    highlights: [
      'Dual GIP/GLP-1 receptor agonism',
      '20.9% mean weight reduction at 15mg dose',
      'FDA-regulated for specific medical conditions',
      'SURMOUNT-1 trial validation'
    ],
    review: `Tirzepatide combines GIP and GLP-1 receptor agonism to maximize metabolic impact. Data from the SURMOUNT-1 trial showed a mean weight reduction of 20.9% over 72 weeks using a 15 mg dose.`,
    note: 'FDA-regulated compound for specific medical conditions.',
    sources: [
      { title: 'FDA Label (Tirzepatide)', link: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/217806s002lbl.pdf' }
    ]
  },
  {
    id: 'retatrutide',
    category: 'glp1',
    name: 'Retatrutide',
    summary: 'Triple agonist (GIP, GLP-1, and glucagon) representing the next generation of metabolic research.',
    highlights: [
      'Triple-hormone receptor agonism',
      'Phase 2 metabolic marker improvements',
      'Glucagon-receptor layering',
      'Current late-stage clinical development'
    ],
    review: `Retatrutide is a "triple agonist" layering glucagon-receptor agonism on top of GIP and GLP-1. Phase 2 data showed substantial weight loss and improvements in metabolic markers across cohorts.`,
    note: 'Forward-looking compound in late-stage development.',
    sources: [
      { title: 'Phase 2 Trial Data (NEJM)', link: 'https://mediacenteratypon.nejmgroup-production.org/NEJMoa2301972.pdf' },
      { title: 'Eli Lilly Research News', link: 'https://www.lilly.com/news/stories/what-to-know-about-retatrutide' }
    ]
  },

  // 2. Tissue Repair and Recovery Peptides
  {
    id: 'bpc-157',
    category: 'repair',
    name: 'BPC-157',
    summary: 'Gastric pentadecapeptide researched for angiogenesis and accelerated tendon/ligament repair.',
    highlights: [
      'Modulates growth factor expression',
      'Promotes tendon-to-bone healing',
      'Extensive preclinical repair data',
      'Angiogenesis promotion'
    ],
    review: `Body Protection Compound 157 (BPC-157) is a gastric pentadecapeptide known for compelling preclinical stories regarding angiogenesis and repair of poorly vascularized tissues like tendons and ligaments.`,
    note: 'Best presented as a research-stage regeneration peptide.',
    sources: [
      { title: 'Gastric Repair Research (PubMed)', link: 'https://pubmed.ncbi.nlm.nih.gov/40789979/' },
      { title: 'WADA Status & Review (OPSS)', link: 'https://www.opss.org/article/bpc-157-prohibited-peptide-and-unapproved-drug-found-health-and-wellness-products' }
    ]
  },
  {
    id: 'tb-500',
    category: 'repair',
    name: 'TB-500',
    summary: 'A fragment of Thymosin Beta-4 that supports cell migration and angiogenesis for tissue recovery.',
    highlights: [
      'Accelerated cell migration',
      'Dermal repair support models',
      'Angiogenesis promoting fragment',
      'Recovery-stage focus'
    ],
    review: `TB-500 is a fragment of the naturally occurring Thymosin Beta-4. Research focuses on its role in supporting cell migration and angiogenesis, particularly useful in dermal and tissue recovery models.`,
    note: 'Framed as a research-stage recovery peptide with a focus on structural repair.',
    sources: [
      { title: 'Thymosin Beta-4 Research (PubMed)', link: 'https://pubmed.ncbi.nlm.nih.gov/22962027/' }
    ]
  },
  {
    id: 'ghk-cu',
    category: 'repair',
    name: 'GHK-Cu',
    summary: 'Copper-binding peptide influential in skin biology and antioxidant signaling.',
    highlights: [
      'Antioxidant signaling support',
      'Skin remodeling influences',
      'Wound-healing promotion',
      'Copper-binding mechanisms'
    ],
    review: `GHK-Cu is a copper-binding peptide credible for "appearance and repair." It influences skin biology, antioxidant signaling, and wound-healing support through regulation of remodeling genes.`,
    note: 'Positioned as a skin-quality and tissue-repair peptide.',
    sources: [
      { title: 'Skin Remodeling (PubMed)', link: 'https://pubmed.ncbi.nlm.nih.gov/15037013/' },
      { title: 'Clinical Review (PMC)', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/' }
    ]
  },

  // 3. Growth-Hormone-Axis Peptides
  {
    id: 'sermorelin',
    category: 'endocrine',
    name: 'Sermorelin',
    summary: 'A GHRH analog that stimulates the pituitary, historically approved for growth hormone deficiency.',
    highlights: [
      'Stimulates endogenous GH release',
      'GHRH (Geref) historical approval',
      'Pituitary axis evaluation',
      'Endocrine-approved history'
    ],
    review: `Sermorelin is a GHRH (Growth Hormone Releasing Hormone) analog that stimulates the pituitary to release GH. It has a history of clinical approval as "Geref" for specific pediatric deficiency models.`,
    note: 'Regarded as a real endocrine peptide with a history of clinical approval.',
    sources: [
      { title: 'Geref FDA Label History', link: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/022505s012s013lbl.pdf' }
    ]
  },
  {
    id: 'tesamorelin',
    category: 'endocrine',
    name: 'Tesamorelin',
    summary: 'GHRH analog approved for reducing excess abdominal fat in adults with HIV-associated lipodystrophy.',
    highlights: [
      'Approved for abdominal fat reduction',
      'HIV-associated lipodystrophy therapy',
      'Body-composition medicine research',
      'FDA-approved (Egrifta SV)'
    ],
    review: `Tesamorelin is a GHRH analog approved for reducing excess visceral abdominal fat. It serves as a prime example of endocrine theory utilized in practical body-composition medicine.`,
    note: 'Prime example of endocrine theory utilized in body-composition medicine.',
    sources: [
      { title: 'Egrifta SV FDA Label', link: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/207561s015lbl.pdf' }
    ]
  },
  {
    id: 'ipamorelin',
    category: 'endocrine',
    name: 'Ipamorelin',
    summary: 'Selective GH secretagogue that minimizes cortisol and prolactin spillover effects.',
    highlights: [
      'Selective GH secretagogue',
      'Avoids cortisol/prolactin overflow',
      'Pulsatile GH release mimicry',
      'Legitimate GH research peptide'
    ],
    review: `Ipamorelin is a selective GH secretagogue that avoids the cortisol and prolactin "spillover" seen in older analogs. It is used in research to study pulsatile growth hormone secretion.`,
    note: 'A legitimate GH-secretagogue research peptide.',
    sources: [
      { title: 'GH Response Evaluation (PubMed)', link: 'https://pubmed.ncbi.nlm.nih.gov/16352683/' },
      { title: 'FDA Evaluation Data', link: 'https://www.fda.gov/media/183819/download' }
    ]
  },
  {
    id: 'cjc-1295',
    category: 'endocrine',
    name: 'CJC-1295',
    summary: 'GHRH analogs engineered for different durations, including DAC variants for sustained release.',
    highlights: [
      'GHRH analog variants',
      'DAC (Drug Affinity Complex) technology',
      'Sustained plasma GH increases',
      'Human pharmacology demonstration'
    ],
    review: `CJC-1295 variants (DAC vs. No DAC) are GHRH analogs engineered for different durations. The DAC version allows for sustained increases in plasma growth hormone for 6 days or more.`,
    note: 'Demonstrate authentic human pharmacology and sustained release in research.',
    sources: [
      { title: 'FDA Evaluation Data', link: 'https://www.fda.gov/media/183819/download' }
    ]
  },

  // 4. Pigmentation and Other Bioregulators
  {
    id: 'epithalon',
    category: 'bioregulators',
    name: 'Epithalon',
    summary: 'A bioregulator tetrapeptide researched for telomerase activation and cellular longevity.',
    highlights: [
      'Telomerase activation research',
      'Longevity bioregulator models',
      '"St. Petersburg School" heritage',
      'Pineal gland axis'
    ],
    review: `Epithalon is a tetrapeptide bioregulator based on pineal research. It is investigated for its role in telomerase activation and its potential impact on cellular longevity.`,
    note: 'A classic bioregulator peptide from the "St. Petersburg school" of research.',
    sources: [
      { title: 'Longevity & Pineal (PubMed)', link: 'https://pubmed.ncbi.nlm.nih.gov/8637402/' }
    ]
  },
  {
    id: 'melanotan',
    category: 'bioregulators',
    name: 'Melanotan II',
    summary: 'Synthetic melanocortin analog that induces skin pigmentation and influences libido.',
    highlights: [
      'Melanocortin receptor agonism',
      'Induces skin pigmentation (tanning)',
      'Immediate perceptible effects',
      'Libido influence research'
    ],
    review: `Melanotan II is a synthetic melanocortin analog that induces skin tanning and influences libido. Its primary research effects are perceptible and immediate.`,
    note: 'Unique because its primary effects are perceptible and immediate.',
    sources: [
      { title: 'FDA Safety Risks (Compounding)', link: 'https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks' }
    ]
  }
];

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState(RESEARCH_DATA[0].id);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredData = activeCategory === 'all' 
    ? RESEARCH_DATA 
    : RESEARCH_DATA.filter(item => item.category === activeCategory);

  return (
    <main className="bg-background min-height-vh-100 color-text-primary overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-160 pb-80 overflow-hidden">
        <GlowOrb size={1000} opacity={0.15} color="primary" className="absolute top-m-200 left-m-200" />
        <div className="container relative z-10 text-center">
          <div className="tag-pill mb-24 mx-auto">Scientific Repository</div>
          <h1 className="hero-headline max-w-900 mx-auto">Research Review of Selected Peptides</h1>
          <p className="hero-subtext max-w-700 mx-auto">
            Technical summaries and clinical citations for therapeutic peptides. 
            All information is extracted from peer-reviewed journals and regulatory filings for biological research.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-12 mt-40">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`filter-pill ${activeCategory === 'all' ? 'active' : ''}`}
            >
              All Research
            </button>
            {RESEARCH_CATEGORIES.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-160 relative">
        <div className="container">
          <div className="display-grid grid-cols-12 gap-48 sm-gap-64">
            
            {/* Sidebar Navigation */}
            <aside className="col-span-12 lg-col-span-4 lg-sticky top-120 align-self-start">
              <div className="flex lg-flex-col gap-8 overflow-x-auto lg-overflow-visible pb-16 lg-pb-0 scrollbar-hide">
                {filteredData.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`research-nav-item shrink-0 lg-shrink-1 ${activeTab === item.id ? 'active' : ''}`}
                  >
                    <BookOpen size={16} className="mr-12" />
                    <span className="whitespace-nowrap">{item.name}</span>
                  </button>
                ))}
              </div>
              <div className="mt-40 p-24 border border-subtle border-radius-20 bg-surface display-none lg-display-block">
                <Shield size={32} className="color-accent mb-16" />
                <h5 className="mono size-13 uppercase mb-8">Data Integrity</h5>
                <p className="size-14 color-text-secondary leading-1.5">
                  Content is cross-referenced with FDA labeling, NEJM trials, and PubMed citations. This portal maintains a research-first standard for clinical evaluation.
                </p>
              </div>
            </aside>

            {/* Content Display */}
            <div className="col-span-12 lg-col-span-8">
              {RESEARCH_DATA.filter(item => item.id === activeTab).map((item) => (
                <article key={item.id} className="animate-fade-in">
                  <div className="flex flex-col gap-32">
                    <div className="p-32 sm-p-48 border border-subtle border-radius-32 bg-surface-elevated relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-32 opacity-10">
                        <FlaskConical size={140} />
                      </div>
                      
                      <div className="tag-pill mb-24 opacity-60">
                        {RESEARCH_CATEGORIES.find(c => c.id === item.category)?.name}
                      </div>

                      <h2 className="size-48 sm-size-64 font-400 mb-20">{item.name}</h2>
                      <p className="size-22 color-accent leading-1.4 mb-48 font-500">
                        {item.summary}
                      </p>

                      <div className="display-grid sm-grid-cols-2 gap-20 mb-56">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex align-items-start py-14 px-20 bg-background/50 border-radius-16 border border-subtle">
                            <div className="size-6 border-radius-full bg-accent mt-10 mr-12 shrink-0" />
                            <span className="size-15 color-text-secondary">{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="review-text-block mb-56">
                        <h4 className="mono size-14 color-text-subtle uppercase mb-16">Biological Review</h4>
                        <div className="size-18 color-text-secondary leading-1.7">
                          {item.review}
                        </div>
                      </div>

                      {/* Professional Note */}
                      <div className="p-24 border-radius-16 bg-accent/5 border border-accent/20 mb-56">
                        <div className="flex align-items-center gap-12 mb-8">
                          <Shield size={18} className="color-accent" />
                          <span className="mono size-13 uppercase color-accent">Clinical Context</span>
                        </div>
                        <p className="size-16 color-text-primary font-500 italic">
                          "{item.note}"
                        </p>
                      </div>

                      {/* Sources Section */}
                      <div className="border-t border-subtle pt-40">
                        <div className="flex align-items-center justify-between mb-24">
                          <h4 className="mono size-14 color-text-subtle uppercase ls-08">Sided Sources & Citations</h4>
                          <span className="size-12 color-text-subtle italic">Verifiable Data</span>
                        </div>
                        <div className="flex flex-col gap-12">
                          {item.sources.map((source, i) => (
                            <a 
                              key={i} 
                              href={source.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="group flex align-items-center p-16 border-radius-16 border border-subtle hover-border-accent bg-background/30 transition-all"
                            >
                              <div className="size-32 border-radius-full bg-surface-elevated flex align-items-center justify-center mr-16 group-hover-bg-accent/10 transition-colors">
                                <ExternalLink size={14} className="color-text-subtle group-hover-color-accent" />
                              </div>
                              <span className="size-15 color-text-secondary group-hover-color-text-primary transition-colors flex-1">
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
          color: var(--bg);
          font-weight: 600;
          box-shadow: 0 0 30px rgba(45, 212, 168, 0.2);
        }
        .filter-pill {
          padding: 8px 24px;
          border-radius: 99px;
          border: 1px solid var(--border-subtle);
          background: var(--surface);
          color: var(--text-secondary);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .filter-pill:hover {
          border-color: var(--text-secondary);
          color: var(--text-primary);
        }
        .filter-pill.active {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(45, 212, 168, 0.05);
        }
        .animate-fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .lg-sticky { top: 120px; }
      `}</style>
    </main>
  );
}
