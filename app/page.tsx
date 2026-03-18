'use client';

import { useEffect, useRef, useState } from 'react';
import NeuralCanvas from '@/components/NeuralCanvas';
import TextScramble from '@/components/TextScramble';
import PersonaSelector from '@/components/PersonaSelector';
import ExplorerGrid from '@/components/ExplorerGrid';
import BentoGrid from '@/components/BentoGrid';
import BuilderDemo from '@/components/BuilderDemo';
import KonamiEasterEgg from '@/components/KonamiEasterEgg';
import MagneticButton from '@/components/MagneticButton';
import { useParticleBurst } from '@/components/ParticleBurst';
import ScrollReveal, { useScrollReveal } from '@/components/ScrollReveal';

interface Persona {
  subtitle: string;
  badge: string;
}

export default function Home() {
  const [heroSubtitle, setHeroSubtitle] = useState(
    'The only platform that combines AI agents, CRM, automation, voice cloning, and content creation into one system. No code required.'
  );
  const [heroBadgeText, setHeroBadgeText] = useState('Now in Open Beta — Free to try');
  const createParticles = useParticleBurst();
  const heroRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useScrollReveal();


  // Initialize back to top button
  useEffect(() => {
    const backToTop = document.getElementById('backToTop');
    const handleScroll = () => {
      if (backToTop) {
        if (window.scrollY > 600) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle back to top click
  useEffect(() => {
    const backToTop = document.getElementById('backToTop');
    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (backToTop) {
      backToTop.addEventListener('click', handleClick);
      return () => backToTop.removeEventListener('click', handleClick);
    }
  }, []);

  // Handle persona changes
  const handlePersonaChange = (persona: Persona) => {
    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = '0';
      subtitleRef.current.style.transform = 'translateY(8px)';
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.textContent = persona.subtitle;
          subtitleRef.current.style.transition = 'all 0.4s ease';
          subtitleRef.current.style.opacity = '1';
          subtitleRef.current.style.transform = 'translateY(0)';
        }
      }, 200);
    }

    setHeroBadgeText(persona.badge);
    setHeroSubtitle(persona.subtitle);
  };

  // Handle CTA button clicks with particle burst
  const handleCTAClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    createParticles(e.clientX, e.clientY);
  };

  // Initialize animated counters
  useEffect(() => {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseFloat(el.dataset.target || '0');
            const suffix = el.dataset.suffix || '';
            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 4);
              const current = Math.floor(target * eased);
              el.textContent = current + suffix;
              if (progress < 1) requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    statNumbers.forEach((el) => counterObserver.observe(el));

    return () => {
      statNumbers.forEach((el) => counterObserver.unobserve(el));
    };
  }, []);


  return (
    <>
      <ScrollReveal />
      <KonamiEasterEgg />

      {/* Hero Section */}
      <section className="hero" id="main-content" ref={heroRef}>
        <NeuralCanvas />
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>

        <div className="hero-badge" ref={badgeRef}>
          <span className="dot"></span>
          {heroBadgeText}
        </div>

        <h1>
          Build AI Agents.<br />
          <span className="highlight">
            <TextScramble text="Run Your Entire Business." />
          </span>
        </h1>

        <p ref={subtitleRef}>{heroSubtitle}</p>

        <div className="hero-input-group">
          <input type="email" placeholder="Enter your work email" />
          <button onClick={handleCTAClick}>Start Free →</button>
        </div>
        <p className="hero-note">
          No credit card required. <span>Free plan available — start building in minutes.</span>
        </p>

        <p className="persona-label">I am a...</p>
        <PersonaSelector onPersonaChange={handlePersonaChange} />
      </section>

      {/* Trust Bar */}
      <section className="trust-bar reveal" aria-label="Platform capabilities">
        <p>The only platform combining all of these</p>
        <div className="trust-logos">
          <span className="trust-logo">AI AGENTS</span>
          <span className="trust-logo">CRM</span>
          <span className="trust-logo">AUTOMATION</span>
          <span className="trust-logo">VOICE DNA</span>
          <span className="trust-logo">CONTENT AI</span>
          <span className="trust-logo">MARKETPLACE</span>
        </div>
      </section>

      {/* Explorer Section */}
      <section className="explorer-section">
        <div className="section-header reveal">
          <div className="section-tag">Explore</div>
          <h2 className="section-title">Six modules. One platform.</h2>
          <p className="section-subtitle">
            Hover to explore each module. Click to dive deeper.
          </p>
        </div>
        <ExplorerGrid />
      </section>

      {/* Bento Grid Features */}
      <section className="bento-section">
        <div className="section-header reveal">
          <div className="section-tag">Platform</div>
          <h2 className="section-title">Everything you need. One platform.</h2>
          <p className="section-subtitle">
            Stop stitching five tools together. AgeniKAI replaces your chatbot, CRM, automation,
            voice, and content tools.
          </p>
        </div>
        <BentoGrid />
      </section>

      {/* Integrations Section */}
      <section className="integrations-section reveal">
        <div style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-tag">Integrations</div>
          <h2 className="section-title">Connects with your stack</h2>
          <p className="section-subtitle">
            Integrate with third-party services, APIs, and platforms. More integrations added
            regularly.
          </p>
        </div>
        <div className="integrations-grid">
          <div className="integration-chip">
            <span className="i-icon">💳</span> Stripe
          </div>
          <div className="integration-chip">
            <span className="i-icon">📱</span> WhatsApp
          </div>
          <div className="integration-chip">
            <span className="i-icon">💬</span> Telegram
          </div>
          <div className="integration-chip">
            <span className="i-icon">🔗</span> Zapier
          </div>
          <div className="integration-chip">
            <span className="i-icon">📅</span> Google Calendar
          </div>
          <div className="integration-chip">
            <span className="i-icon">💬</span> Slack
          </div>
          <div className="integration-chip">
            <span className="i-icon">🔌</span> REST API
          </div>
          <div className="integration-chip">
            <span className="i-icon">🔄</span> Webhooks
          </div>
        </div>
        <p className="integration-count">
          New integrations added every month. <a href="/features">View all →</a>
        </p>
      </section>

      {/* Dashboard Preview */}
      <section className="dashboard-section">
        <div className="section-header reveal">
          <div className="section-tag">Dashboard</div>
          <h2 className="section-title">See everything at a glance</h2>
          <p className="section-subtitle">
            Your agents, contacts, automations, and analytics — unified in one beautiful dashboard.
          </p>
        </div>

        <div className="dashboard-frame reveal">
          <div className="dash-toolbar">
            <div className="dash-dot r"></div>
            <div className="dash-dot y"></div>
            <div className="dash-dot g"></div>
            <div className="dash-url">app.agenikai.com/dashboard</div>
          </div>
          <div className="dash-body">
            <div className="dash-sidebar">
              <div className="dash-nav-item active">
                <span>📊</span> Dashboard
              </div>
              <div className="dash-nav-item">
                <span>🤖</span> Agents
              </div>
              <div className="dash-nav-item">
                <span>👥</span> Contacts
              </div>
              <div className="dash-nav-item">
                <span>⚡</span> Automations
              </div>
              <div className="dash-nav-item">
                <span>🎙️</span> Voice DNA
              </div>
              <div className="dash-nav-item">
                <span>✨</span> Create
              </div>
              <div className="dash-nav-item">
                <span>🏪</span> Marketplace
              </div>
              <div className="dash-nav-item" style={{ marginTop: 'auto' }}>
                <span>⚙️</span> Settings
              </div>
            </div>
            <div className="dash-content">
              <div className="dash-widget">
                <div className="dash-widget-label">Active Agents</div>
                <div className="dash-widget-value cyan">12</div>
                <div className="dash-widget-change">↑ 3 deployed this week</div>
              </div>
              <div className="dash-widget">
                <div className="dash-widget-label">Conversations Today</div>
                <div className="dash-widget-value amber">847</div>
                <div className="dash-widget-change">↑ 23% from yesterday</div>
              </div>
              <div className="dash-widget">
                <div className="dash-widget-label">Leads Generated</div>
                <div className="dash-widget-value emerald">156</div>
                <div className="dash-widget-change">↑ 18% this month</div>
              </div>
              <div className="dash-widget wide">
                <div className="dash-widget-label">Weekly Performance</div>
                <div className="dash-chart">
                  <div className="dash-bar" style={{ height: '25%' }}></div>
                  <div className="dash-bar" style={{ height: '45%' }}></div>
                  <div className="dash-bar" style={{ height: '35%' }}></div>
                  <div className="dash-bar" style={{ height: '60%' }}></div>
                  <div className="dash-bar" style={{ height: '50%' }}></div>
                  <div className="dash-bar" style={{ height: '80%' }}></div>
                  <div className="dash-bar" style={{ height: '65%' }}></div>
                </div>
              </div>
              <div className="dash-widget">
                <div className="dash-widget-label">Voice Clones Active</div>
                <div className="dash-widget-value cyan">8</div>
                <div className="dash-widget-change">Across 3 languages</div>
              </div>
              <div className="dash-widget full" style={{ padding: '0.8rem 1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--cyan)',
                      animation: 'pulse 2s infinite',
                    }}
                  ></div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--cyan)' }}>System Status:</strong> All agents
                    online — API, CRM, Voice DNA, and Automation modules running normally
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section reveal">
        <div className="section-header">
          <div className="section-tag">See It In Action</div>
          <h2 className="section-title">Watch AgeniKAI in 90 seconds</h2>
          <p className="section-subtitle">
            See how businesses are using AgeniKAI to automate their entire operation.
          </p>
        </div>
        <div className="video-container" onClick={() => alert('Video player would open here in production')}>
          <div className="play-btn"></div>
          <div className="video-label">▶ Watch the product tour</div>
        </div>
      </section>

      {/* Builder Demo Section */}
      <section className="builder-section">
        <div className="section-header reveal">
          <div className="section-tag">Try It</div>
          <h2 className="section-title">Build an agent in seconds</h2>
          <p className="section-subtitle">
            Drag the nodes to rearrange. This is how simple it is to create a working AI agent
            flow.
          </p>
        </div>
        <BuilderDemo />
      </section>

      {/* Proof Section */}
      <section className="proof-section">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto 3rem' }}>
          <div className="section-tag">Why AgeniKAI</div>
          <h2 className="section-title">Why AgeniKAI?</h2>
        </div>
        <div className="proof-grid">
          <div className="proof-card reveal">
            <div className="proof-stars" style={{ color: 'var(--cyan)' }}>🤖</div>
            <p className="proof-text" style={{ fontStyle: 'normal' }}>
              Replace your chatbot, CRM, automation tool, voice service, and content generator
              with a single platform. No more switching between five different apps.
            </p>
            <div className="proof-author">
              <div className="proof-avatar" style={{ background: 'var(--cyan)' }}>1</div>
              <div>
                <div className="proof-name">One Platform</div>
                <div className="proof-role">Agents + CRM + Voice + Content</div>
              </div>
            </div>
          </div>
          <div className="proof-card reveal reveal-delay-1">
            <div className="proof-stars" style={{ color: 'var(--amber)' }}>🔒</div>
            <p className="proof-text" style={{ fontStyle: 'normal' }}>
              Enterprise-grade security with AES-256 encryption at rest, TLS 1.3 in transit,
              multi-factor authentication, and role-based access controls. SOC 2 Type II in
              progress.
            </p>
            <div className="proof-author">
              <div className="proof-avatar" style={{ background: 'var(--amber)' }}>2</div>
              <div>
                <div className="proof-name">Secure by Default</div>
                <div className="proof-role">AES-256 + TLS 1.3 + MFA</div>
              </div>
            </div>
          </div>
          <div className="proof-card reveal reveal-delay-2">
            <div className="proof-stars" style={{ color: 'var(--emerald)' }}>⚡</div>
            <p className="proof-text" style={{ fontStyle: 'normal' }}>
              Start free with no credit card required. 14-day money-back guarantee on all paid
              plans. Choose whether AI training uses your data or not — you're in control.
            </p>
            <div className="proof-author">
              <div className="proof-avatar" style={{ background: 'var(--emerald)' }}>3</div>
              <div>
                <div className="proof-name">Free to Start</div>
                <div className="proof-role">14-day money-back guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section reveal">
        <div className="stats-grid">
          <div>
            <div className="stat-number cyan" data-target="6" data-suffix="">
              0
            </div>
            <div className="stat-label">Core AI Modules</div>
          </div>
          <div>
            <div className="stat-number amber" data-target="14" data-suffix="">
              0
            </div>
            <div className="stat-label">Competitors Benchmarked</div>
          </div>
          <div>
            <div className="stat-number emerald" data-target="256" data-suffix="">
              0
            </div>
            <div className="stat-label">Bit AES Encryption</div>
          </div>
          <div>
            <div className="stat-number" style={{ color: 'var(--text-primary)' }} data-target="14" data-suffix=" day">
              0
            </div>
            <div className="stat-label">Money-Back Guarantee</div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps-section">
        <div className="section-header reveal">
          <div className="section-tag">Getting Started</div>
          <h2 className="section-title">Up and running in minutes</h2>
          <p className="section-subtitle">No code, no consultants, no headaches.</p>
        </div>
        <div className="steps-container">
          <div className="step reveal">
            <div className="step-num" style={{ background: 'var(--gradient-cyan)' }}>
              1
            </div>
            <div className="step-content">
              <h3>Create Your Account</h3>
              <p>
                Sign up in 30 seconds. No credit card needed. Start with a free plan that
                includes everything you need to explore.
              </p>
            </div>
          </div>
          <div className="step reveal reveal-delay-1">
            <div className="step-num" style={{ background: 'linear-gradient(135deg, var(--cyan), var(--amber))' }}>
              2
            </div>
            <div className="step-content">
              <h3>Build Your AI Agent</h3>
              <p>
                Pick a template or start from scratch. Train your agent on your business data,
                connect your CRM, and set up conversation flows.
              </p>
            </div>
          </div>
          <div className="step reveal reveal-delay-2">
            <div className="step-num" style={{ background: 'var(--gradient-warm)' }}>
              3
            </div>
            <div className="step-content">
              <h3>Deploy Everywhere</h3>
              <p>
                Launch on your website, WhatsApp, Slack, phone, or email. It works 24/7 —
                handling leads, answering questions, and closing deals while you sleep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-box reveal">
          <h2>Ready to build your first AI agent?</h2>
          <p>Join AgeniKAI's open beta and start automating your business with AI today.</p>
          <button className="cta-btn" onClick={handleCTAClick}>
            Get Started Free →
          </button>
          <p className="cta-small">Free forever plan. No credit card required.</p>
        </div>
      </section>

      {/* Back to Top Button */}
      <button className="back-to-top" id="backToTop" aria-label="Back to top">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>

      {/* Footer */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="nav-logo" style={{ display: 'inline-flex', marginBottom: 0 }}>
              <div className="logo-mark">A</div> AgeniKAI
            </a>
            <p>
              The all-in-one AI business platform. Build agents, manage contacts, automate
              workflows, create content — all in one place.
            </p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <a href="/features">Features</a>
            <a href="/pricing">Pricing</a>
            <a href="#">Marketplace</a>
            <a href="#">API Docs</a>
            <a href="#">Changelog</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="/about">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="/about#contact">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="#">Acceptable Use</a>
            <a href="#">Security</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 AgeniKAI, Inc. All rights reserved.</span>
          <span>
            <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a>
          </span>
        </div>
      </footer>
    </>
  );
}
