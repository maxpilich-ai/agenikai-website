'use client';

import { useState, useCallback } from 'react';

interface Persona {
  id: string;
  label: string;
  subtitle: string;
  badge: string;
}

const personas: Persona[] = [
  {
    id: 'founder',
    label: 'Founder / CEO',
    subtitle:
      'The only platform that combines AI agents, CRM, automation, voice cloning, and content creation into one system. No code required.',
    badge: 'Now in Open Beta — Free to try',
  },
  {
    id: 'marketer',
    label: 'Marketer',
    subtitle:
      'Generate campaigns, automate follow-ups, clone your brand voice, and let AI agents nurture leads 24/7 — all from one platform.',
    badge: 'Built for marketing teams',
  },
  {
    id: 'developer',
    label: 'Developer',
    subtitle:
      'REST APIs, webhooks, custom integrations, and a drag-and-drop agent builder. Ship AI-powered products without reinventing the stack.',
    badge: 'Developer-friendly APIs included',
  },
  {
    id: 'sales',
    label: 'Sales Leader',
    subtitle:
      'AI agents that qualify leads, book meetings, and follow up automatically. Built-in CRM so nothing falls through the cracks.',
    badge: 'Close more deals with AI',
  },
  {
    id: 'support',
    label: 'Support Lead',
    subtitle:
      'Deploy AI agents that resolve tickets instantly, across chat, phone, and email. Escalate to humans seamlessly when needed.',
    badge: '24/7 AI-powered support',
  },
];

interface PersonaSelectorProps {
  onPersonaChange?: (persona: Persona) => void;
}

export default function PersonaSelector({ onPersonaChange }: PersonaSelectorProps) {
  const [activePersona, setActivePersona] = useState<string>('founder');

  const handlePersonaClick = useCallback(
    (personaId: string) => {
      setActivePersona(personaId);
      const persona = personas.find((p) => p.id === personaId);
      if (persona && onPersonaChange) {
        onPersonaChange(persona);
      }
    },
    [onPersonaChange]
  );

  return (
    <div className="persona-selector">
      {personas.map((persona) => (
        <button
          key={persona.id}
          className={`persona-chip ${activePersona === persona.id ? 'active' : ''}`}
          onClick={() => handlePersonaClick(persona.id)}
          data-persona={persona.id}
        >
          {persona.label}
        </button>
      ))}
    </div>
  );
}

export type { Persona };
