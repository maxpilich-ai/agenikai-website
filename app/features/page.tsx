'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FeaturesPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.querySelectorAll('.feature-preview').forEach((card) => {
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
          <Link href="/features" className="active">Features</Link>
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
        <h1 className="reveal">One platform.<br /><span className="highlight">Every tool you need.</span></h1>
        <p>Six powerful features designed to work together. No switching between apps, no integration headaches, no compromises.</p>
      </section>

      <section className="features-section">
        {/* Feature 1: AI Agent Builder */}
        <div className="feature-dive reveal">
          <div className="feature-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="3"/><circle cx="9" cy="10" r="1.5"/><circle cx="15" cy="10" r="1.5"/><path d="M9 16v2"/><path d="M15 16v2"/><path d="M7 20h10"/></svg>
            </div>
            <h2>AI Agent Builder</h2>
            <p className="feature-subtitle">Deploy AI agents in minutes without writing a single line of code. Your agents handle support tickets, qualify leads, close deals, and automate operations 24/7.</p>
            <ul className="feature-bullets">
              <li>No-code builder with drag-and-drop conversations</li>
              <li>Multi-channel deployment: Website, WhatsApp, Slack, Phone, Email</li>
              <li>Real-time learning from conversation data</li>
              <li>Seamless handoff to humans when needed</li>
              <li>Pre-built templates for common use cases</li>
              <li>Custom integrations with your business tools</li>
            </ul>
          </div>
          <div className="feature-preview">
            <div className="agent-chat">
              <div className="chat-msg">
                <div className="chat-avatar" style={{ background: 'var(--bg-glass)' }}>👤</div>
                <div className="chat-bubble">I need to cancel my subscription</div>
              </div>
              <div className="chat-msg">
                <div className="chat-avatar" style={{ background: 'var(--cyan)' }}>AI</div>
                <div className="chat-bubble bot">I can help with that! First, I want to understand why you're leaving. Is it price, features, or something else?</div>
              </div>
              <div className="chat-msg">
                <div className="chat-avatar" style={{ background: 'var(--bg-glass)' }}>👤</div>
                <div className="chat-bubble">It's too expensive compared to alternatives</div>
              </div>
              <div className="chat-msg">
                <div className="chat-avatar" style={{ background: 'var(--amber)' }}>AI</div>
                <div className="chat-bubble bot">I understand. Let me see if we have a better plan for you. You're on Pro at $99/mo, but I can offer 50% off for 3 months. Would that help?</div>
              </div>
              <div className="chat-msg">
                <div className="chat-avatar" style={{ background: 'var(--bg-glass)' }}>👤</div>
                <div className="chat-bubble">Yes, that works!</div>
              </div>
              <div className="chat-msg">
                <div className="chat-avatar" style={{ background: 'var(--emerald)' }}>AI</div>
                <div className="chat-bubble bot">Great! Discount applied. You just saved $149.50. Let's keep you on board 🎉</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Smart CRM */}
        <div className="feature-dive reverse reveal">
          <div className="feature-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2"/><path d="M21 21v-1.5a3.5 3.5 0 0 0-2.5-3.4"/></svg>
            </div>
            <h2>Smart CRM</h2>
            <p className="feature-subtitle">Organize your business relationships and pipeline in one place. Track leads, manage contacts, and automate communication across all channels.</p>
            <ul className="feature-bullets">
              <li>Contact management with custom fields and segments</li>
              <li>Lead pipeline visualization and status tracking</li>
              <li>Automatic data capture from emails, calls, and chats</li>
              <li>Automated outreach and follow-up sequences</li>
              <li>Deal tracking and forecasting</li>
              <li>Integrates with Stripe, Slack, Zapier, Google Calendar, and more</li>
            </ul>
          </div>
          <div className="feature-preview">
            <table className="crm-table">
              <thead className="crm-header">
                <tr>
                  <th>Contact</th>
                  <th>Status</th>
                  <th>Last Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr className="crm-row">
                  <td className="crm-contact">
                    <div className="crm-avatar" style={{ background: 'var(--rose)' }}>JD</div>
                    <div><div className="crm-name">Jessica Davis</div><div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Enterprise</div></div>
                  </td>
                  <td><span className="crm-score score-hot">🟢 Active</span></td>
                  <td><span className="action-badge">2 hrs ago</span></td>
                </tr>
                <tr className="crm-row">
                  <td className="crm-contact">
                    <div className="crm-avatar" style={{ background: 'var(--cyan)' }}>MW</div>
                    <div><div className="crm-name">Michael Wong</div><div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mid-Market</div></div>
                  </td>
                  <td><span className="crm-score score-warm">🟡 Pending</span></td>
                  <td><span className="action-badge">1 day ago</span></td>
                </tr>
                <tr className="crm-row">
                  <td className="crm-contact">
                    <div className="crm-avatar" style={{ background: 'var(--emerald)' }}>LP</div>
                    <div><div className="crm-name">Lisa Patterson</div><div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>SMB</div></div>
                  </td>
                  <td><span className="crm-score score-cold">⚪ Inactive</span></td>
                  <td><span className="action-badge">2 wks ago</span></td>
                </tr>
                <tr className="crm-row">
                  <td className="crm-contact">
                    <div className="crm-avatar" style={{ background: 'var(--amber)' }}>RC</div>
                    <div><div className="crm-name">Robert Chen</div><div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Enterprise</div></div>
                  </td>
                  <td><span className="crm-score score-hot">🟢 Active</span></td>
                  <td><span className="action-badge">5 hrs ago</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Feature 3: Workflow Automation */}
        <div className="feature-dive reveal">
          <div className="feature-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h2>Workflow Automation</h2>
            <p className="feature-subtitle">Automate repetitive business processes across your entire tech stack. Set up workflows in minutes without code.</p>
            <ul className="feature-bullets">
              <li>Plain English natural language workflow triggers</li>
              <li>Pre-built connectors to popular tools via Zapier and REST API</li>
              <li>Conditional logic, delays, and branching</li>
              <li>Real-time workflow logs and error handling</li>
              <li>Unlimited automation runs on all plans</li>
              <li>Works with any tool via Webhook, API, or Zapier</li>
            </ul>
          </div>
          <div className="feature-preview">
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px', marginBottom: '1rem' }}>Example Workflow</div>
            </div>
            <div className="workflow-diagram">
              <div className="workflow-node node-trigger">
                <span>📥</span>
                <span>New Lead</span>
              </div>
              <div className="workflow-arrow">→</div>
              <div className="workflow-node node-logic">
                <span>🤖</span>
                <span>Qualify</span>
              </div>
              <div className="workflow-arrow">→</div>
              <div className="workflow-node node-logic">
                <span>⚡</span>
                <span>Route</span>
              </div>
              <div className="workflow-arrow">→</div>
              <div className="workflow-node node-action">
                <span>📧</span>
                <span>Email</span>
              </div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-glass)', borderRadius: '10px', padding: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              <strong style={{ color: 'var(--text-primary)' }}>When</strong> a new lead comes in from your website, <strong>qualify</strong> them using your AI agent, <strong>route</strong> them to the right sales rep based on territory, then <strong>send</strong> them a personalized welcome email.
            </div>
          </div>
        </div>

        {/* Feature 4: Voice DNA */}
        <div className="feature-dive reverse reveal">
          <div className="feature-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><path d="M12 18v4"/><path d="M8 22h8"/></svg>
            </div>
            <h2>Voice DNA</h2>
            <p className="feature-subtitle">Clone voices with AI-powered synthesis. Build phone agents that sound natural and deploy across channels.</p>
            <ul className="feature-bullets">
              <li>AI voice cloning from audio samples</li>
              <li>Low-latency voice synthesis for real-time conversations</li>
              <li>Multiple natural voice options built-in</li>
              <li>Control tone, speed, and pitch parameters</li>
              <li>Multi-language support</li>
              <li>SOC 2 Type II in progress, GDPR compliant</li>
            </ul>
          </div>
          <div className="feature-preview">
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px' }}>Voice Waveform</div>
            </div>
            <div className="voice-wave">
              <div className="wave-bar" style={{ animationDelay: '0s', height: '30%' }}></div>
              <div className="wave-bar" style={{ animationDelay: '0.1s', height: '50%' }}></div>
              <div className="wave-bar" style={{ animationDelay: '0.2s', height: '25%' }}></div>
              <div className="wave-bar" style={{ animationDelay: '0.3s', height: '70%' }}></div>
              <div className="wave-bar" style={{ animationDelay: '0.4s', height: '45%' }}></div>
              <div className="wave-bar" style={{ animationDelay: '0.5s', height: '80%' }}></div>
              <div className="wave-bar" style={{ animationDelay: '0.6s', height: '35%' }}></div>
              <div className="wave-bar" style={{ animationDelay: '0.7s', height: '60%' }}></div>
              <div className="wave-bar" style={{ animationDelay: '0.8s', height: '40%' }}></div>
            </div>
            <div className="voice-controls">
              <div className="voice-sliders">
                <div className="slider-group">
                  <label className="slider-label">Speed</label>
                  <input type="range" className="slider" min="0" max="100" defaultValue="50" />
                  <span className="slider-value">50%</span>
                </div>
                <div className="slider-group">
                  <label className="slider-label">Pitch</label>
                  <input type="range" className="slider" min="0" max="100" defaultValue="50" />
                  <span className="slider-value">50%</span>
                </div>
                <div className="slider-group">
                  <label className="slider-label">Energy</label>
                  <input type="range" className="slider" min="0" max="100" defaultValue="70" />
                  <span className="slider-value">70%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 5: Content Creation */}
        <div className="feature-dive reveal">
          <div className="feature-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M19 14l.9 2.7L22.6 18l-2.7.9L19 21.6l-.9-2.7L15.4 18l2.7-.9L19 14z"/></svg>
            </div>
            <h2>Content Creation</h2>
            <p className="feature-subtitle">Generate high-quality content in multiple formats. Create blogs, emails, social posts, and ad copy all from a single brief.</p>
            <ul className="feature-bullets">
              <li>AI-powered text content generation</li>
              <li>AI image generation and enhancement</li>
              <li>AI video generation and editing</li>
              <li>Multi-format output: Blog, Email, Social, Ads</li>
              <li>Content review and quality scoring</li>
              <li>Templates across multiple industries and use cases</li>
            </ul>
          </div>
          <div className="feature-preview">
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px' }}>Campaign Generator Output</div>
            </div>
            <div className="campaign-cards">
              <div className="campaign-card blog">
                <div className="campaign-icon">📝</div>
                <div className="campaign-name">Blog Post</div>
                <div className="campaign-detail">1.2k words, AI-generated</div>
              </div>
              <div className="campaign-card email">
                <div className="campaign-icon">📧</div>
                <div className="campaign-name">Email Series</div>
                <div className="campaign-detail">3 variants, A/B tested</div>
              </div>
              <div className="campaign-card social">
                <div className="campaign-icon">📱</div>
                <div className="campaign-name">Social Posts</div>
                <div className="campaign-detail">5 posts, platform-optimized</div>
              </div>
              <div className="campaign-card ads">
                <div className="campaign-icon">📢</div>
                <div className="campaign-name">Ad Copy</div>
                <div className="campaign-detail">Google & Meta ready</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 6: Agent Marketplace */}
        <div className="feature-dive reverse reveal">
          <div className="feature-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/><path d="M9 22V12h6v10"/></svg>
            </div>
            <h2>Agent Marketplace</h2>
            <p className="feature-subtitle">Browse community-built agents from the marketplace. Deploy tested, rated templates in seconds. Build your own and share with others.</p>
            <ul className="feature-bullets">
              <li>1,000+ pre-built agents from the community</li>
              <li>Star ratings and user reviews</li>
              <li>One-click deployment with custom data</li>
              <li>Create and publish your own agents</li>
              <li>Earn revenue from agent downloads</li>
              <li>Automatic updates and version control</li>
            </ul>
          </div>
          <div className="feature-preview">
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px' }}>Featured Templates</div>
            </div>
            <div className="marketplace-grid">
              <div className="template-card">
                <div className="template-header">
                  <div className="template-icon">👨‍💼</div>
                  <div className="template-rating">★ ★ ★ ★ ★</div>
                </div>
                <div className="template-name">Sales Closer</div>
                <div className="template-desc">Handles objections, negotiates pricing, closes deals in minutes</div>
                <div className="template-stats">
                  <div className="stat-item">Used by <span className="stat-value">2.4K</span></div>
                  <div className="stat-item"><span className="stat-value">94%</span> close rate</div>
                </div>
              </div>
              <div className="template-card">
                <div className="template-header">
                  <div className="template-icon">🎧</div>
                  <div className="template-rating">★ ★ ★ ★ ★</div>
                </div>
                <div className="template-name">Support Hero</div>
                <div className="template-desc">Resolves 85% of tickets autonomously. Escalates complex issues.</div>
                <div className="template-stats">
                  <div className="stat-item">Used by <span className="stat-value">5.1K</span></div>
                  <div className="stat-item"><span className="stat-value">4.9</span> rating</div>
                </div>
              </div>
              <div className="template-card">
                <div className="template-header">
                  <div className="template-icon">📞</div>
                  <div className="template-rating">★ ★ ★ ★ ☆</div>
                </div>
                <div className="template-name">Appointment Setter</div>
                <div className="template-desc">Books meetings, sends reminders, handles rescheduling</div>
                <div className="template-stats">
                  <div className="stat-item">Used by <span className="stat-value">1.8K</span></div>
                  <div className="stat-item"><span className="stat-value">4.7</span> rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison-section">
        <div className="section-header reveal">
          <div className="section-tag">Vs. Competitors</div>
          <h2 className="section-title">Why choose AgeniKAI?</h2>
          <p className="section-subtitle">The most complete AI business platform. All-in-one, no integrations needed.</p>
        </div>

        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>AgeniKAI</th>
              <th>ChatGPT Plus</th>
              <th>HubSpot</th>
              <th>Voiceflow</th>
              <th>ElevenLabs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AI Agent Builder</td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-cross">—</span></td>
              <td><span className="feature-partial">Limited</span></td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-cross">—</span></td>
            </tr>
            <tr>
              <td>Built-in CRM</td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-cross">—</span></td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-cross">—</span></td>
              <td><span className="feature-cross">—</span></td>
            </tr>
            <tr>
              <td>Workflow Automation</td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-cross">—</span></td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-partial">Limited</span></td>
              <td><span className="feature-cross">—</span></td>
            </tr>
            <tr>
              <td>Voice DNA (Cloning)</td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-cross">—</span></td>
              <td><span className="feature-cross">—</span></td>
              <td><span className="feature-cross">—</span></td>
              <td><span className="feature-check">✓</span></td>
            </tr>
            <tr>
              <td>Content Creation</td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-partial">Limited</span></td>
              <td><span className="feature-cross">—</span></td>
              <td><span className="feature-cross">—</span></td>
            </tr>
            <tr>
              <td>Agent Marketplace</td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-cross">—</span></td>
              <td><span className="feature-cross">—</span></td>
              <td><span className="feature-partial">Limited</span></td>
              <td><span className="feature-cross">—</span></td>
            </tr>
            <tr>
              <td>Multi-channel Deployment</td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-cross">—</span></td>
              <td><span className="feature-partial">Limited</span></td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-cross">—</span></td>
            </tr>
            <tr>
              <td>Contact Management</td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-cross">—</span></td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-cross">—</span></td>
              <td><span className="feature-cross">—</span></td>
            </tr>
            <tr>
              <td>AI Content Generation</td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-partial">Limited</span></td>
              <td><span className="feature-cross">—</span></td>
              <td><span className="feature-cross">—</span></td>
            </tr>
            <tr>
              <td>No-Code Builder</td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-cross">—</span></td>
              <td><span className="feature-partial">Limited</span></td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-cross">—</span></td>
            </tr>
            <tr>
              <td>All-in-One Platform</td>
              <td><span className="feature-check">✓</span></td>
              <td><span className="feature-cross">—</span></td>
              <td><span className="feature-cross">—</span></td>
              <td><span className="feature-cross">—</span></td>
              <td><span className="feature-cross">—</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="cta-section">
        <div className="cta-box">
          <h2>Ready to unlock your AI potential?</h2>
          <p>Start with everything. Upgrade nothing. AgeniKAI includes all features on every plan.</p>
          <Link href="/signup" className="cta-btn">Get Started Free →</Link>
          <p className="cta-small">Free forever plan. No credit card required. Free plan includes 1 agent + 250 contacts.</p>
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