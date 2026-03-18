'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

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

    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    return () => {
      hamburgerBtn?.removeEventListener('click', handleHamburger);
      window.removeEventListener('scroll', handleScroll);
      revealEls.forEach((el) => revealObserver.unobserve(el));
    };
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

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
          <Link href="/about" className="active">About</Link>
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
        <div className="beta-badge">Currently in open beta</div>
        <h1 className="reveal">Building the future of<br /><span className="highlight">AI for business</span></h1>
        <p>We believe every company deserves access to powerful AI. That's why we're building AgeniKAI.</p>
      </section>

      <section className="story-section">
        <div className="story-content">
          <div className="story-text reveal">
            <h2>Our Story</h2>
            <p>AgeniKAI started with a simple observation: enterprises were drowning in tools. One tool for chat, another for CRM, a third for automation, and yet another for content creation. Integration costs skyrocketed, training became a nightmare, and teams spent more time managing software than using it to drive business forward.</p>
            <p>In 2023, our founders—a team of AI researchers, product engineers, and business leaders—decided to build something different. Not just an AI tool, but a complete business platform where agents, automation, CRM, and content creation work seamlessly together out of the box.</p>
            <p>Today, AgeniKAI is used by thousands of companies to automate support, qualify leads, close deals, and create content at scale. We're proud to be in the trusted partner category for teams that want to move fast without drowning in complexity.</p>
          </div>
          <div className="story-image reveal">
            <div style={{ background: 'var(--gradient-cyan)', borderRadius: '20px', padding: '2rem', textAlign: 'center', color: 'white', fontSize: '3rem' }}>🚀</div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2 className="section-title reveal">Our Values</h2>
        <div className="values-grid">
          <div className="value-card reveal">
            <div className="value-icon">🎯</div>
            <h3>Simple</h3>
            <p>We believe in simple over complex. One platform, all the tools you need.</p>
          </div>
          <div className="value-card reveal">
            <div className="value-icon">🤝</div>
            <h3>Customer-First</h3>
            <p>Your success is our success. We build what you need, not what we think you need.</p>
          </div>
          <div className="value-card reveal">
            <div className="value-icon">🔒</div>
            <h3>Responsible</h3>
            <p>AI is powerful. We take security, privacy, and ethics seriously.</p>
          </div>
          <div className="value-card reveal">
            <div className="value-icon">⚡</div>
            <h3>Powerful</h3>
            <p>Don't compromise on features. Enterprise-grade power, available to everyone.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title reveal">Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member reveal">
            <div className="member-avatar" style={{ background: 'var(--cyan)' }}>SK</div>
            <h4>Sophia Kim</h4>
            <p className="member-role">Founder & CEO</p>
            <p className="member-bio">AI researcher with 10 years in deep learning and NLP. Previously at OpenAI.</p>
          </div>
          <div className="team-member reveal">
            <div className="member-avatar" style={{ background: 'var(--amber)' }}>MC</div>
            <h4>Marcus Chen</h4>
            <p className="member-role">Co-founder & CTO</p>
            <p className="member-bio">Full-stack engineer. Built payment systems at Stripe, scaled to millions of transactions.</p>
          </div>
          <div className="team-member reveal">
            <div className="member-avatar" style={{ background: 'var(--emerald)' }}>AR</div>
            <h4>Aisha Ramirez</h4>
            <p className="member-role">VP Product</p>
            <p className="member-bio">Product leader who brought 3 startups to acquisition. Former HubSpot product manager.</p>
          </div>
          <div className="team-member reveal">
            <div className="member-avatar" style={{ background: 'var(--rose)' }}>JW</div>
            <h4>James Wilson</h4>
            <p className="member-role">VP Sales</p>
            <p className="member-bio">Enterprise sales veteran. Built $50M+ ARR sales teams at multiple B2B SaaS companies.</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="reveal">Get in Touch</h2>
            <p className="reveal">Have a question or want to partner with us? We'd love to hear from you.</p>
          </div>

          <form className="contact-form reveal" onSubmit={handleFormSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleFormChange}
                placeholder="How can we help?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Tell us more..."
                rows={5}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
            {formSubmitted && <p className="form-success">Thank you! We'll get back to you soon.</p>}
          </form>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box">
          <h2>Ready to get started?</h2>
          <p>Join thousands of companies building AI agents with AgeniKAI.</p>
          <Link href="/signup" className="cta-btn">Get Started Free →</Link>
          <p className="cta-small">No credit card required. Free plan includes 1 agent + 250 contacts.</p>
        </div>
      </section>

      <div className="cookie-banner" id="cookieBanner">
        <p>We use cookies to improve your experience. <a href="/privacy#s10">Learn more</a></p>
        <button className="cookie-accept" onClick={() => document.getElementById('cookieBanner')!.style.display = 'none'}>Accept All</button>
        <button className="cookie-decline" onClick={() => document.getElementById('cookieBanner')!.style.display = 'none'}>Decline</button>
      </div>

      <button className="back-to-top" id="backToTopBtn" aria-label="Back to top" style={{ display: 'none' }}>↑</button>

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

      <script
        dangerouslySetInnerHTML={{
          __html: `
            const backToTopBtn = document.getElementById('backToTopBtn');
            window.addEventListener('scroll', function() {
              if (window.scrollY > 300) {
                backToTopBtn?.style.display = 'block';
              } else {
                backToTopBtn?.style.display = 'none';
              }
            });
            backToTopBtn?.addEventListener('click', function() {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            });
          `
        }}
      />
    </>
  );
}
