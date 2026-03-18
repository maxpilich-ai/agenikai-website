'use client';

import { useCallback } from 'react';

export function useParticleBurst() {
  const createParticles = useCallback((x: number, y: number) => {
    const container = document.createElement('div');
    container.className = 'particle-container';
    container.style.left = x + 'px';
    container.style.top = y + 'px';
    document.body.appendChild(container);

    const colors = ['#06B6D4', '#67E8F9', '#F59E0B', '#FCD34D', '#10B981'];
    const PARTICLE_COUNT = 12;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const angle = (Math.PI * 2 * i) / PARTICLE_COUNT;
      const distance = 30 + Math.random() * 40;
      particle.style.setProperty('--px', Math.cos(angle) * distance + 'px');
      particle.style.setProperty('--py', Math.sin(angle) * distance + 'px');
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      container.appendChild(particle);
    }

    setTimeout(() => {
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    }, 900);
  }, []);

  return createParticles;
}

export default function ParticleBurst() {
  const createParticles = useParticleBurst();

  // This component just exports the hook, actual burst creation
  // is handled by calling the hook in other components
  return null;
}
