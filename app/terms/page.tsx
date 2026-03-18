'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const tocItems = [
  { id: 's1', title: 'Introduction & Acceptance' },
  { id: 's2', title: 'Eligibility & Registration' },
  { id: 's3', title: 'Services Description' },
  { id: 's4', title: 'Acceptable Use' },
  { id: 's5', title: 'AI Output Disclaimer' },
  { id: 's6', title: 'Content Ownership & IP' },
  { id: 's7', title: 'Data Usage & Training' },
  { id: 's8', title: 'Payment Terms' },
  { id: 's9', title: 'Third-Party Services' },
  { id: 's10', title: 'Beta Features' },
  { id: 's11', title: 'Voice & Audio' },
  { id: 's12', title: 'Limitation of Liability' },
  { id: 's13', title: 'Indemnification' },
  { id: 's14', title: 'Dispute Resolution & Arbitration' },
  { id: 's15', title: 'Termination' },
  { id: 's16', title: 'Modifications to Terms' },
  { id: 's17', title: 'General Provisions' },
  { id: 's18', title: 'Contact Information' },
];

export default function TermsPage() {
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
        <h1>Terms of Service</h1>
        <p>Please read these terms carefully before using AgeniKAI. By accessing and using our Service, you agree to be bound by these Terms.</p>
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
            <h2>Introduction & Acceptance</h2>
            <p>These Terms of Service ("Terms") constitute a binding agreement between you ("User" or "you") and AgeniKAI ("Company," "we," "us," or "our").</p>
            <p>By accessing or using AgeniKAI, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, you may not use our Service.</p>
          </section>

          <section id="s2">
            <h2>Eligibility & Registration</h2>
            <p>To use AgeniKAI, you must:</p>
            <ul>
              <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
              <li>Have the authority to enter into this agreement</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>
          </section>

          <section id="s3">
            <h2>Services Description</h2>
            <p>AgeniKAI provides an AI-powered platform for building and deploying intelligent agents, managing customer relationships, automating workflows, and creating content. Services are provided on an "as-is" and "as-available" basis.</p>
          </section>

          <section id="s4">
            <h2>Acceptable Use</h2>
            <p>You agree not to use AgeniKAI to:</p>
            <ul>
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malware, viruses, or harmful code</li>
              <li>Harass, threaten, or abuse other users</li>
              <li>Engage in fraudulent or deceptive practices</li>
              <li>Spam or send unsolicited messages</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Reverse engineer or attempt to discover our source code</li>
            </ul>
          </section>

          <section id="s5">
            <h2>AI Output Disclaimer</h2>
            <p>AgeniKAI uses machine learning and AI models to generate outputs. You understand and accept that:</p>
            <ul>
              <li>AI outputs may contain errors or inaccuracies</li>
              <li>AI is a tool to assist humans, not replace human judgment</li>
              <li>You are responsible for reviewing and verifying AI-generated content</li>
              <li>We are not liable for decisions made based on AI outputs</li>
              <li>AI may sometimes produce biased or inappropriate content</li>
            </ul>
          </section>

          <section id="s6">
            <h2>Content Ownership & IP</h2>
            <p>You retain ownership of all content you upload to AgeniKAI. You grant us a license to use your content to provide and improve our Service. You are responsible for ensuring you have the rights to all content you upload.</p>
            <p>AgeniKAI and its features are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or transmit our Service without permission.</p>
          </section>

          <section id="s7">
            <h2>Data Usage & Training</h2>
            <p>Your data may be used to improve our AI models and services, subject to:</p>
            <ul>
              <li>Data is anonymized and aggregated for training purposes</li>
              <li>Personally identifiable information requires explicit consent</li>
              <li>You can opt-out of data usage through account settings</li>
              <li>We comply with all applicable data protection laws</li>
            </ul>
          </section>

          <section id="s8">
            <h2>Payment Terms</h2>
            <p>Charges for paid plans:</p>
            <ul>
              <li>Billing occurs on the date of subscription and on each anniversary thereafter</li>
              <li>Monthly plans renew automatically each month; annual plans renew annually</li>
              <li>You can cancel anytime; no refunds for partial months or years</li>
              <li>Unused account credits do not carry forward</li>
              <li>Prices may change with 30 days' notice</li>
              <li>We accept major credit cards and PayPal</li>
            </ul>
          </section>

          <section id="s9">
            <h2>Third-Party Services</h2>
            <p>AgeniKAI may integrate with third-party services (Zapier, Stripe, etc.). Your use of these services is subject to their terms and privacy policies. We are not responsible for third-party services or their availability.</p>
          </section>

          <section id="s10">
            <h2>Beta Features</h2>
            <p>Some AgeniKAI features are marked as "Beta," "Experimental," or "Alpha." These features:</p>
            <ul>
              <li>May not be fully tested or stable</li>
              <li>May change or be discontinued without notice</li>
              <li>Should not be used in production without caution</li>
              <li>Are provided "as-is" without warranties</li>
            </ul>
          </section>

          <section id="s11">
            <h2>Voice & Audio</h2>
            <p>If you use voice or audio features:</p>
            <ul>
              <li>You represent you have the right to use any voice samples provided</li>
              <li>Voice cloning is for authorized business use only</li>
              <li>You must disclose to end-users that AI voice is being used</li>
              <li>You are responsible for compliance with all laws regarding voice use</li>
            </ul>
          </section>

          <section id="s12">
            <h2>Limitation of Liability</h2>
            <p>To the maximum extent permitted by law:</p>
            <ul>
              <li>AgeniKAI is provided "as-is" without warranties</li>
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>Our total liability is limited to amounts you paid in the last 12 months</li>
              <li>Some jurisdictions do not allow liability limitations, so these may not apply to you</li>
            </ul>
          </section>

          <section id="s13">
            <h2>Indemnification</h2>
            <p>You agree to indemnify and hold harmless AgeniKAI from any claims, damages, or costs arising from:</p>
            <ul>
              <li>Your violation of these Terms</li>
              <li>Your use of our Service</li>
              <li>Content you create, upload, or share</li>
              <li>Your infringement of third-party rights</li>
            </ul>
          </section>

          <section id="s14">
            <h2>Dispute Resolution & Arbitration</h2>
            <p>Any dispute shall first be resolved through good-faith negotiation. If negotiation fails, disputes will be resolved through binding arbitration in San Francisco, California, under the rules of the American Arbitration Association.</p>
          </section>

          <section id="s15">
            <h2>Termination</h2>
            <p>AgeniKAI may terminate your account if you:</p>
            <ul>
              <li>Violate these Terms</li>
              <li>Engage in illegal or harmful activities</li>
              <li>Fail to pay fees (after notice and opportunity to cure)</li>
              <li>Breach any representations or warranties</li>
            </ul>
            <p>Upon termination, you retain ownership of your data, but your access to the Service ceases immediately.</p>
          </section>

          <section id="s16">
            <h2>Modifications to Terms</h2>
            <p>We may update these Terms at any time. Material changes will be notified via email or on our website. Your continued use of AgeniKAI after changes constitutes acceptance of the updated Terms.</p>
          </section>

          <section id="s17">
            <h2>General Provisions</h2>
            <p>These Terms constitute the entire agreement between you and AgeniKAI. If any provision is found invalid, the remaining provisions remain in effect. These Terms are governed by the laws of California, USA.</p>
          </section>

          <section id="s18">
            <h2>Contact Information</h2>
            <p>For questions about these Terms, contact:</p>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '1.5rem', marginTop: '1rem' }}>
              <p><strong>AgeniKAI Legal Team</strong></p>
              <p>Email: legal@agenikai.com</p>
              <p>Address: San Francisco, CA, USA</p>
              <p>Response time: We aim to respond within 10 business days</p>
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
