'use client';

import { useRef } from 'react';

interface BentoCardData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor: 'cyan' | 'rose' | 'amber' | 'emerald';
  large?: boolean;
  delay?: number;
  preview: React.ReactNode;
}

const cards: BentoCardData[] = [
  {
    id: 'agent-builder',
    title: 'AI Agent Builder',
    description:
      'Build custom AI agents that handle support, qualify leads, close sales, and automate ops. Deploy them to your website, WhatsApp, Slack, or phone in minutes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="12" rx="3" />
        <circle cx="9" cy="10" r="1.5" />
        <circle cx="15" cy="10" r="1.5" />
        <path d="M9 16v2" />
        <path d="M15 16v2" />
        <path d="M7 20h10" />
      </svg>
    ),
    iconColor: 'cyan',
    large: true,
    preview: (
      <div className="mini-chat-msg">
        <div className="mini-avatar" style={{ background: 'var(--bg-glass)' }}>👤</div>
        <div className="mini-bubble">I need help with order #4821</div>
      </div>
    ),
  },
  {
    id: 'voice-dna',
    title: 'Voice DNA',
    description:
      'Voice synthesis and cloning technology. Create AI phone agents with natural-sounding voices from audio samples.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--rose)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
        <path d="M12 18v4" />
        <path d="M8 22h8" />
      </svg>
    ),
    iconColor: 'rose',
    delay: 1,
    preview: (
      <div className="mini-wave" style={{ textAlign: 'center' }}>
        {[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1].map((delay) => (
          <div
            key={delay}
            className="mini-wave-bar"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </div>
    ),
  },
  {
    id: 'crm',
    title: 'CRM & Contact Management',
    description:
      'Manage contacts, track leads through your pipeline, and automate follow-up communications — all integrated with your AI agents.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" />
        <path d="M21 21v-1.5a3.5 3.5 0 0 0-2.5-3.4" />
      </svg>
    ),
    iconColor: 'amber',
    delay: 2,
    preview: (
      <>
        <div className="mini-crm-row">
          <div className="mini-crm-dot" style={{ background: '#EF4444' }}>JD</div>
          <span style={{ flex: 1, color: 'var(--text-secondary)' }}>Jessica D.</span>
          <span className="mini-tag" style={{ background: 'rgba(244,63,94,0.15)', color: 'var(--rose)' }}>Hot</span>
        </div>
        <div className="mini-crm-row">
          <div className="mini-crm-dot" style={{ background: 'var(--cyan)' }}>TW</div>
          <span style={{ flex: 1, color: 'var(--text-secondary)' }}>Tom W.</span>
          <span className="mini-tag" style={{ background: 'rgba(245,158,11,0.15)', color: 'var(--amber)' }}>Warm</span>
        </div>
        <div className="mini-crm-row">
          <div className="mini-crm-dot" style={{ background: 'var(--emerald)' }}>LP</div>
          <span style={{ flex: 1, color: 'var(--text-secondary)' }}>Lisa P.</span>
          <span className="mini-tag" style={{ background: 'rgba(16,185,129,0.15)', color: 'var(--emerald)' }}>New</span>
        </div>
      </>
    ),
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    description:
      'Automate repetitive tasks and business processes. Connect your agents to triggers and actions across your stack.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    iconColor: 'emerald',
    preview: (
      <div className="mini-flow">
        <div className="mini-node trigger">New Lead</div>
        <span className="mini-arrow">→</span>
        <div className="mini-node action">Qualify</div>
        <span className="mini-arrow">→</span>
        <div className="mini-node logic">Route</div>
        <span className="mini-arrow">→</span>
        <div className="mini-node action">Email</div>
      </div>
    ),
  },
  {
    id: 'content',
    title: 'AI Content Creation',
    description:
      'Generate blogs, social posts, emails, and ad copy with AI. Produce multiple content pieces from a single brief — text, images, and video powered by advanced AI models.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
        <path d="M19 14l.9 2.7L22.6 18l-2.7.9L19 21.6l-.9-2.7L15.4 18l2.7-.9L19 14z" />
        <path d="M5 17l.6 1.8L7.4 20l-1.8.6L5 22.4l-.6-1.8L2.6 20l1.8-.6L5 17z" />
      </svg>
    ),
    iconColor: 'amber',
    large: true,
    delay: 1,
    preview: (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.4rem' }}>
        <div style={{ background: 'rgba(6,182,212,0.08)', padding: '0.5rem', borderRadius: '8px', fontSize: '0.7rem', textAlign: 'center' }}>
          <div style={{ fontWeight: 700, color: 'var(--cyan)' }}>Blog</div>
          <div style={{ color: 'var(--text-muted)', marginTop: '2px' }}>1.2k words</div>
        </div>
        <div style={{ background: 'rgba(245,158,11,0.08)', padding: '0.5rem', borderRadius: '8px', fontSize: '0.7rem', textAlign: 'center' }}>
          <div style={{ fontWeight: 700, color: 'var(--amber)' }}>Emails</div>
          <div style={{ color: 'var(--text-muted)', marginTop: '2px' }}>3 variants</div>
        </div>
        <div style={{ background: 'rgba(16,185,129,0.08)', padding: '0.5rem', borderRadius: '8px', fontSize: '0.7rem', textAlign: 'center' }}>
          <div style={{ fontWeight: 700, color: 'var(--emerald)' }}>Social</div>
          <div style={{ color: 'var(--text-muted)', marginTop: '2px' }}>5 posts</div>
        </div>
        <div style={{ background: 'rgba(244,63,94,0.08)', padding: '0.5rem', borderRadius: '8px', fontSize: '0.7rem', textAlign: 'center' }}>
          <div style={{ fontWeight: 700, color: 'var(--rose)' }}>Ads</div>
          <div style={{ color: 'var(--text-muted)', marginTop: '2px' }}>Google+Meta</div>
        </div>
      </div>
    ),
  },
];

export default function BentoGrid() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (card) {
      card.style.transform = '';
    }
  };

  return (
    <div className="bento-grid">
      {cards.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => {
            if (el) cardsRef.current[index] = el;
          }}
          className={`bento-card ${card.large ? 'large' : ''} reveal ${card.delay ? `reveal-delay-${card.delay}` : ''}`}
          onMouseMove={(e) => handleMouseMove(index, e)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className={`bento-icon ${card.iconColor}`}>{card.icon}</div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <div className="bento-preview">{card.preview}</div>
        </div>
      ))}
    </div>
  );
}
