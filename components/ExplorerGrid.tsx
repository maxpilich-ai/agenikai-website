'use client';

import { useRef } from 'react';

interface ExplorerCardData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  iconBorder: string;
  href: string;
}

const cards: ExplorerCardData[] = [
  {
    id: 'agent-builder',
    title: 'AI Agent Builder',
    description: 'Design, train, and deploy intelligent agents across any channel in minutes.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="12" rx="3" />
        <circle cx="9" cy="10" r="1.5" />
        <circle cx="15" cy="10" r="1.5" />
        <path d="M9 16v2M15 16v2M7 20h10" />
      </svg>
    ),
    iconBg: 'rgba(6,182,212,0.1)',
    iconBorder: 'rgba(6,182,212,0.15)',
    href: '/features',
  },
  {
    id: 'voice-dna',
    title: 'Voice DNA',
    description: 'Clone voices from samples and create natural-sounding AI phone agents.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--rose)" strokeWidth="1.5">
        <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
        <path d="M12 18v4M8 22h8" />
      </svg>
    ),
    iconBg: 'rgba(244,63,94,0.1)',
    iconBorder: 'rgba(244,63,94,0.15)',
    href: '/features',
  },
  {
    id: 'smart-crm',
    title: 'Smart CRM',
    description: 'Manage contacts, track pipelines, and automate follow-ups with AI.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.5">
        <circle cx="9" cy="7" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" />
      </svg>
    ),
    iconBg: 'rgba(245,158,11,0.1)',
    iconBorder: 'rgba(245,158,11,0.15)',
    href: '/features',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Connect triggers to actions across your entire business stack.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    iconBg: 'rgba(16,185,129,0.1)',
    iconBorder: 'rgba(16,185,129,0.15)',
    href: '/features',
  },
  {
    id: 'content-ai',
    title: 'Content AI',
    description: 'Generate blogs, social posts, emails, and ad copy from a single brief.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.5">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
        <path d="M19 14l.9 2.7L22.6 18l-2.7.9L19 21.6l-.9-2.7L15.4 18l2.7-.9L19 14z" />
      </svg>
    ),
    iconBg: 'rgba(245,158,11,0.1)',
    iconBorder: 'rgba(245,158,11,0.15)',
    href: '/features',
  },
  {
    id: 'agent-marketplace',
    title: 'Agent Marketplace',
    description: 'Browse and deploy pre-built agent templates for any use case.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    iconBg: 'rgba(6,182,212,0.1)',
    iconBorder: 'rgba(6,182,212,0.15)',
    href: '/features',
  },
];

export default function ExplorerGrid() {
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const handleMouseMove = (index: number, e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="explorer-grid">
      {cards.map((card, index) => (
        <a
          key={card.id}
          ref={(el) => {
            if (el) cardsRef.current[index] = el;
          }}
          href={card.href}
          className={`explorer-card reveal ${index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : index === 4 ? 'reveal-delay-1' : index === 5 ? 'reveal-delay-2' : ''}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
          onMouseMove={(e) => handleMouseMove(index, e)}
        >
          <div
            className="explorer-card-icon"
            style={{
              background: card.iconBg,
              border: `1px solid ${card.iconBorder}`,
            }}
          >
            {card.icon}
          </div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <div className="explorer-card-arrow">→</div>
        </a>
      ))}
    </div>
  );
}
