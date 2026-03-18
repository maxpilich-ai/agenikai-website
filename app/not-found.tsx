'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFoundPage() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  useEffect(() => {
    // Generate particles for animation
    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2
    }));
    setParticles(generatedParticles);

    // Hamburger menu
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const handleHamburger = () => {
      mobileMenu?.classList.toggle('active');
    };
    hamburgerBtn?.addEventListener('click', handleHamburger);

    // Scroll progress
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

    return () => {
      hamburgerBtn?.removeEventListener('click', handleHamburger);
      window.removeEventListener('scroll', handleScroll);
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

      <section className="not-found-section" id="main-content">
        {/* Particle Background */}
        <div className="particles-container">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animation: `float ${particle.duration}s ease-in-out infinite`
              }}
            ></div>
          ))}
        </div>

        <div className="not-found-content">
          {/* 404 Number with Animations */}
          <div className="error-number">
            <span className="digit digit-4">4</span>
            <span className="digit digit-0">0</span>
            <span className="digit digit-4-2">4</span>
          </div>

          {/* AI Thinking Badge */}
          <div className="ai-thinking-badge">
            <span className="badge-dot"></span>
            <span className="badge-dot"></span>
            <span className="badge-dot"></span>
            AI thinking...
          </div>

          {/* Title */}
          <h1>This page got lost in the neural network</h1>
          <p className="subtitle">Don't worry, our AI is working hard to find it. In the meantime, let's get you back on track.</p>

          {/* Search Bar */}
          <div className="search-bar">
            <span className="terminal-prompt">~/$ </span>
            <input type="text" className="search-input" placeholder="Search pages, features, or actions..." />
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <Link href="/" className="action-btn primary">Go Home</Link>
            <Link href="/features" className="action-btn secondary">Explore Features</Link>
          </div>

          {/* Suggested Pages */}
          <div className="suggested-pages">
            <h3>Suggested Pages</h3>
            <div className="suggested-grid">
              <Link href="/pricing" className="suggested-card">
                <div className="suggested-icon">💰</div>
                <div className="suggested-name">Pricing</div>
                <div className="suggested-desc">See our plans</div>
              </Link>
              <Link href="/about" className="suggested-card">
                <div className="suggested-icon">👥</div>
                <div className="suggested-name">About</div>
                <div className="suggested-desc">Learn about us</div>
              </Link>
              <Link href="/signup" className="suggested-card">
                <div className="suggested-icon">🚀</div>
                <div className="suggested-name">Get Started</div>
                <div className="suggested-desc">Begin your journey</div>
              </Link>
            </div>
          </div>

          {/* Contact Link */}
          <p className="contact-line">
            Still lost? <a href="/about#contact" className="contact-link">Contact us</a> or <a href="#" className="login-link">log in</a> to your account
          </p>
        </div>
      </section>

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

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }

        @keyframes number-glow {
          0% { text-shadow: 0 0 10px rgba(6, 182, 212, 0.5); }
          50% { text-shadow: 0 0 30px rgba(6, 182, 212, 0.8), 0 0 60px rgba(245, 158, 11, 0.3); }
          100% { text-shadow: 0 0 10px rgba(6, 182, 212, 0.5); }
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        @keyframes dot-blink {
          0%, 20% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }

        .particles-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          background: var(--cyan);
          border-radius: 50%;
          opacity: 0.5;
        }

        .not-found-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .not-found-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 800px;
          padding: 2rem;
        }

        .error-number {
          font-size: clamp(5rem, 20vw, 15rem);
          font-weight: 900;
          background: var(--gradient-cyan);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 1rem;
          animation: number-glow 2s ease-in-out infinite;
          letter-spacing: -0.05em;
        }

        .digit-0 {
          animation: glitch 0.5s ease-in-out infinite;
        }

        .ai-thinking-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: 50px;
          font-size: 0.9rem;
          color: var(--cyan-light);
          margin-bottom: 2rem;
        }

        .badge-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: var(--cyan);
          border-radius: 50%;
          animation: dot-blink 1.4s infinite;
        }

        .badge-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .badge-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        .not-found-content h1 {
          font-size: clamp(2rem, 6vw, 3rem);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .search-bar {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 1rem;
          margin-bottom: 2rem;
          font-family: 'Courier New', monospace;
        }

        .terminal-prompt {
          color: var(--cyan);
          font-weight: 600;
          margin-right: 0.5rem;
          flex-shrink: 0;
        }

        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 1rem;
          font-family: 'Courier New', monospace;
        }

        .search-input::placeholder {
          color: var(--text-muted);
        }

        .action-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 0.875rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .action-btn.primary {
          background: var(--gradient-cyan);
          color: #000;
        }

        .action-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);
        }

        .action-btn.secondary {
          border: 1px solid rgba(6, 182, 212, 0.5);
          color: var(--cyan-light);
        }

        .action-btn.secondary:hover {
          background: rgba(6, 182, 212, 0.1);
          border-color: var(--cyan);
        }

        .suggested-pages {
          margin-top: 4rem;
        }

        .suggested-pages h3 {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .suggested-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .suggested-card {
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }

        .suggested-card:hover {
          background: rgba(6, 182, 212, 0.1);
          border-color: rgba(6, 182, 212, 0.3);
          transform: translateY(-4px);
        }

        .suggested-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .suggested-name {
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .suggested-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .contact-line {
          margin-top: 3rem;
          color: var(--text-secondary);
        }

        .contact-link,
        .login-link {
          color: var(--cyan-light);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .contact-link:hover,
        .login-link:hover {
          color: var(--cyan);
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
