'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const tocItems = [
  { id: 's1', title: 'Introduction' },
  { id: 's2', title: 'Information We Collect' },
  { id: 's3', title: 'How We Use Your Information' },
  { id: 's4', title: 'AI Model Training' },
  { id: 's5', title: 'How We Share Your Data' },
  { id: 's6', title: 'Data Retention' },
  { id: 's7', title: 'Your Rights & Choices' },
  { id: 's8', title: 'Security Measures' },
  { id: 's9', title: 'International Transfers' },
  { id: 's10', title: 'Cookie Policy' },
  { id: 's11', title: "Children's Privacy" },
  { id: 's12', title: 'California & State-Specific Rights' },
  { id: 's13', title: 'European Privacy Rights (GDPR)' },
  { id: 's14', title: 'Health Data' },
  { id: 's15', title: 'Policy Changes' },
  { id: 's16', title: 'Contact Us' },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('s1');

  useEffect(() => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const handleHamburger = () => {
      mobileMenu?.classList.toggle('active');
    };
    hamburgerBtn?.addEventListener('click', handleHamburger);

    const scrollProgress = document.getElementById('scrollProgress');
    const handleScroll = () => {
      if (scrollProgress) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
      }
    };
    window.addEventListener('scroll', handleScroll);

    // IntersectionObserver for TOC highlighting
    const sections = tocItems.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -66%' }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      hamburgerBtn?.removeEventListener('click', handleHamburger);
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <div className="scroll-progress" id="scrollProgress"></div>

      <nav>
        <Link href="/" className="nav-logo">
          <div className="logo-mark">A</div>
          AgeniKAI
        </Link>
        <div className="nav-center">
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/about#contact">Contact</Link>
        </div>
        <div className="nav-right">
          <a href="#" className="nav-login">Log in</a>
          <Link href="/signup" className="nav-cta">Get Started Free</Link>
          <button className="hamburger" id="hamburgerBtn" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className="mobile-menu" id="mobileMenu">
        <Link href="/features">Features</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/about">About</Link>
        <Link href="/about#contact">Contact</Link>
        <a href="#">Log in</a>
        <Link href="/signup" className="mob-cta">Get Started Free</Link>
      </div>

      <section className="hero" id="main-content">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <h1>Your privacy matters to us</h1>
        <p>At AgeniKAI, protecting your data is our top priority. This privacy policy explains how we collect, use, and protect your information.</p>
      </section>

      <div className="policy-container">
        {/* Table of Contents Sidebar */}
        <aside className="toc-sidebar">
          <div className="toc-title">Contents</div>
          <nav className="toc-nav">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`toc-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="policy-content">
          <section id="s1">
            <h2>Introduction</h2>
            <p>AgeniKAI (referred to as "we," "us," or "Company") is committed to protecting your privacy. This Privacy Policy explains our data practices for the AgeniKAI platform and services.</p>
            <p>By using our Service, you consent to our data practices described in this policy. If you do not agree with our policies and practices, please do not use our Service.</p>
          </section>

          <section id="s2">
            <h2>Information We Collect</h2>
            <p>We collect information you provide directly:</p>
            <ul>
              <li>Account registration data (name, email, password, company)</li>
              <li>Payment and billing information</li>
              <li>Communication data (emails, messages, support tickets)</li>
              <li>AI agent configuration and training data</li>
              <li>Usage data and interaction logs</li>
            </ul>
          </section>

          <section id="s3">
            <h2>How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Provide, maintain, and improve our Service</li>
              <li>Process payments and send billing information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Monitor usage patterns and optimize performance</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section id="s4">
            <h2>AI Model Training</h2>
            <p>AgeniKAI uses machine learning to improve our AI agents and services. Your data may be used to train or fine-tune our models, subject to the following:</p>
            <ul>
              <li>We only use anonymized and aggregated data for model training</li>
              <li>Personally identifiable information is not used without explicit consent</li>
              <li>You can opt-out of AI training by adjusting your privacy settings</li>
              <li>Customer data used for training is governed by strict data governance policies</li>
            </ul>
          </section>

          <section id="s5">
            <h2>How We Share Your Data</h2>
            <p>We do not sell, trade, or share your personal information with third parties, except:</p>
            <ul>
              <li>With service providers who assist in operating our Service (under data processing agreements)</li>
              <li>When required by law or to protect our rights</li>
              <li>With your explicit consent</li>
              <li>In the event of a merger, acquisition, or bankruptcy</li>
            </ul>
          </section>

          <section id="s6">
            <h2>Data Retention</h2>
            <p>We retain your data for as long as necessary to provide our Service and comply with legal obligations. You can request data deletion at any time by contacting us. Please note that some data may be retained for legal, tax, or regulatory compliance purposes.</p>
          </section>

          <section id="s7">
            <h2>Your Rights & Choices</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability (export your data)</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section id="s8">
            <h2>Security Measures</h2>
            <p>We implement comprehensive security measures to protect your information, including:</p>
            <ul>
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.2+ encryption for data in transit</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and role-based permissions</li>
              <li>Secure password hashing (bcrypt)</li>
              <li>Two-factor authentication (2FA) support</li>
            </ul>
          </section>

          <section id="s9">
            <h2>International Transfers</h2>
            <p>AgeniKAI is based in the United States. If you access our Service from outside the US, your information may be transferred to the US for processing. By using our Service, you consent to such transfers.</p>
          </section>

          <section id="s10">
            <h2>Cookie Policy</h2>
            <p>We use cookies and similar tracking technologies to:</p>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Analyze usage patterns and improve our Service</li>
              <li>Prevent fraud and security issues</li>
              <li>Provide personalized content</li>
            </ul>
            <p>You can control cookies through your browser settings. However, disabling cookies may affect Service functionality.</p>
          </section>

          <section id="s11">
            <h2>Children's Privacy</h2>
            <p>AgeniKAI is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.</p>
          </section>

          <section id="s12">
            <h2>California & State-Specific Rights</h2>
            <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
            <ul>
              <li>Right to know what personal information we collect</li>
              <li>Right to delete your personal information</li>
              <li>Right to opt-out of the sale of your data</li>
              <li>Right to non-discrimination for exercising your rights</li>
            </ul>
          </section>

          <section id="s13">
            <h2>European Privacy Rights (GDPR)</h2>
            <p>If you are in the European Union, you have rights under the General Data Protection Regulation:</p>
            <ul>
              <li>Right to access your data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to lodge a complaint with a data protection authority</li>
            </ul>
          </section>

          <section id="s14">
            <h2>Health Data</h2>
            <p>If you process health or medical data through AgeniKAI, you are responsible for ensuring compliance with applicable health data regulations (HIPAA, GDPR, etc.). We provide security features to help you meet these requirements.</p>
          </section>

          <section id="s15">
            <h2>Policy Changes</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on our website and updating the effective date. Your continued use of the Service after changes constitutes your acceptance of the updated policy.</p>
          </section>

          <section id="s16">
            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '1.5rem', marginTop: '1rem' }}>
              <p><strong>AgeniKAI Privacy Team</strong></p>
              <p>Email: privacy@agenikai.com</p>
              <p>Address: San Francisco, CA, USA</p>
              <p>Response time: We aim to respond within 30 days</p>
            </div>
          </section>
        </main>
      </div>

      <div className="cookie-banner" id="cookieBanner">
        <p>We use cookies to improve your experience. <a href="/privacy#s10">Learn more</a></p>
        <button className="cookie-accept" onClick={() => document.getElementById('cookieBanner')!.style.display = 'none'}>Accept All</button>
        <button className="cookie-decline" onClick={() => document.getElementById('cookieBanner')!.style.display = 'none'}>Decline</button>
      </div>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Product</h4>
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <a href="#">Security</a>
            <a href="#">API</a>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <Link href="/about#contact">Contact</Link>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="#">Cookies</a>
          </div>
          <div className="footer-section">
            <h4>Follow</h4>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 AgeniKAI. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
