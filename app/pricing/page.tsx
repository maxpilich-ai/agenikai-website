'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import BillingToggle from '@/components/BillingToggle';
import ROICalculator from '@/components/ROICalculator';
import FAQAccordion from '@/components/FAQAccordion';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const prices = {
    free: { monthly: 0, annual: 0 },
    pro: { monthly: 29, annual: 278 },
    business: { monthly: 79, annual: 758 },
    enterprise: { monthly: 0, annual: 0 }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.querySelectorAll('.pricing-card').forEach((card) => {
        if (card instanceof HTMLElement) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
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
      revealEls.forEach((el) => revealObserver.unobserve(el));
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
          <Link href="/pricing" className="active">Pricing</Link>
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
        <h1 className="reveal">Simple, Transparent<br /><span className="highlight">Pricing that scales with you</span></h1>
        <p>Start free. Upgrade when you're ready. No hidden fees, ever.</p>
      </section>

      <section className="billing-section">
        <BillingToggle onToggle={setIsAnnual} />
      </section>

      <section className="pricing-cards-section">
        {/* Free Plan */}
        <div className="pricing-card reveal">
          <div className="card-header">
            <h3>Free</h3>
            <p className="card-subtitle">Perfect for getting started</p>
          </div>
          <div className="card-price">
            <span className="currency">$</span>
            <span className="amount">0</span>
            <span className="period">/month</span>
          </div>
          <p className="card-description">Everything you need to build your first AI agent</p>
          <Link href="/signup" className="card-cta">Get Started</Link>
          <ul className="card-features">
            <li><span className="check">✓</span> 1 AI Agent</li>
            <li><span className="check">✓</span> 250 contacts</li>
            <li><span className="check">✓</span> Email support</li>
            <li><span className="check">✓</span> Basic templates</li>
            <li><span className="check">✓</span> Single channel (web)</li>
            <li><span className="cross">—</span> Advanced analytics</li>
            <li><span className="cross">—</span> Priority support</li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="pricing-card popular reveal">
          <div className="popular-badge">Most Popular</div>
          <div className="card-header">
            <h3>Pro</h3>
            <p className="card-subtitle">For growing teams</p>
          </div>
          <div className="card-price">
            <span className="currency">$</span>
            <span className="amount">{isAnnual ? '278' : '29'}</span>
            <span className="period">/{isAnnual ? 'year' : 'month'}</span>
          </div>
          <p className="card-description">Scale your AI agents and automate more workflows</p>
          <Link href="/signup" className="card-cta">Start Free Trial</Link>
          <ul className="card-features">
            <li><span className="check">✓</span> 5 AI Agents</li>
            <li><span className="check">✓</span> 5,000 contacts</li>
            <li><span className="check">✓</span> Priority email support</li>
            <li><span className="check">✓</span> All templates</li>
            <li><span className="check">✓</span> Multi-channel deployment</li>
            <li><span className="check">✓</span> Advanced analytics</li>
            <li><span className="check">✓</span> Custom integrations</li>
          </ul>
        </div>

        {/* Business Plan */}
        <div className="pricing-card reveal">
          <div className="card-header">
            <h3>Business</h3>
            <p className="card-subtitle">For enterprises</p>
          </div>
          <div className="card-price">
            <span className="currency">$</span>
            <span className="amount">{isAnnual ? '758' : '79'}</span>
            <span className="period">/{isAnnual ? 'year' : 'month'}</span>
          </div>
          <p className="card-description">Full power of AgeniKAI for your entire organization</p>
          <Link href="/signup" className="card-cta">Request Demo</Link>
          <ul className="card-features">
            <li><span className="check">✓</span> Unlimited AI Agents</li>
            <li><span className="check">✓</span> 50,000 contacts</li>
            <li><span className="check">✓</span> 24/7 phone support</li>
            <li><span className="check">✓</span> Advanced security (SOC 2)</li>
            <li><span className="check">✓</span> Dedicated account manager</li>
            <li><span className="check">✓</span> Custom SLA</li>
            <li><span className="check">✓</span> White-label options</li>
          </ul>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card reveal">
          <div className="card-header">
            <h3>Enterprise</h3>
            <p className="card-subtitle">Custom everything</p>
          </div>
          <div className="card-price">
            <span className="amount">Custom</span>
            <span className="period">pricing</span>
          </div>
          <p className="card-description">Unlimited everything, custom contracts and terms</p>
          <a href="/about#contact" className="card-cta">Contact Sales</a>
          <ul className="card-features">
            <li><span className="check">✓</span> Unlimited everything</li>
            <li><span className="check">✓</span> Custom data retention</li>
            <li><span className="check">✓</span> Dedicated infrastructure</li>
            <li><span className="check">✓</span> On-premise deployment</li>
            <li><span className="check">✓</span> Custom integrations</li>
            <li><span className="check">✓</span> Custom security</li>
            <li><span className="check">✓</span> Custom support</li>
          </ul>
        </div>
      </section>

      <section className="roi-section">
        <ROICalculator />
      </section>

      <section className="faq-section">
        <FAQAccordion />
      </section>

      <section className="cta-section">
        <div className="cta-box">
          <h2>Ready to get started?</h2>
          <p>Join thousands of companies building AI agents with AgeniKAI.</p>
          <Link href="/signup" className="cta-btn">Get Started Free →</Link>
          <p className="cta-small">No credit card required. Free plan includes 1 agent + 250 contacts.</p>
        </div>
      </section>

      <div className="cmd-overlay" id="cmdOverlay">
        <div className="cmd-palette">
          <div className="cmd-search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" id="cmdInput" placeholder="Search pages, features, or actions..." autoComplete="off" spellCheck="false" />
            <span className="cmd-kbd">ESC</span>
          </div>
          <div className="cmd-results" id="cmdResults"></div>
          <div className="cmd-footer">
            <span className="cmd-hint"><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
            <span className="cmd-hint"><kbd>↵</kbd> Open</span>
            <span className="cmd-hint"><kbd>ESC</kbd> Close</span>
          </div>
        </div>
      </div>

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
            // Hamburger menu
            const hamburgerBtn = document.getElementById('hamburgerBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            hamburgerBtn?.addEventListener('click', function() {
              mobileMenu?.classList.toggle('active');
            });

            // Scroll progress bar
            function updateScrollProgress() {
              const scrollProgress = document.getElementById('scrollProgress');
              const scrollTop = window.scrollY;
              const docHeight = document.documentElement.scrollHeight - window.innerHeight;
              const scrolled = (scrollTop / docHeight) * 100;
              if (scrollProgress) scrollProgress.style.width = scrolled + '%';
            }
            window.addEventListener('scroll', updateScrollProgress);

            // Back to top button
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

            // Command palette
            const cmdOverlay = document.getElementById('cmdOverlay');
            const cmdInput = document.getElementById('cmdInput');
            const cmdResults = document.getElementById('cmdResults');

            const commands = [
              { name: 'Features', path: '/features' },
              { name: 'Pricing', path: '/pricing' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/about#contact' },
              { name: 'Sign Up', path: '/signup' },
            ];

            document.addEventListener('keydown', function(e) {
              if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                cmdOverlay?.classList.toggle('active');
                cmdInput?.focus();
              }
              if (e.key === 'Escape') {
                cmdOverlay?.classList.remove('active');
              }
            });

            cmdInput?.addEventListener('input', function() {
              const query = this.value.toLowerCase();
              const filtered = commands.filter(cmd => cmd.name.toLowerCase().includes(query));
              cmdResults.innerHTML = filtered.map(cmd =>
                '<div class="cmd-item" onclick="window.location.href=\'' + cmd.path + '\';">' + cmd.name + '</div>'
              ).join('');
            });
          `
        }}
      />
    </>
  );
}
