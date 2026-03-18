'use client';

import { useEffect, useRef } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
}

export default function TextScramble({ text, className = '' }: TextScrambleProps) {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
    const original = text;
    const length = original.length;
    let iteration = 0;

    // Create span elements for each character
    el.innerHTML = original
      .split('')
      .map((c) => `<span class="scramble-char" style="display: inline;">${c}</span>`)
      .join('');

    const spans = el.querySelectorAll('.scramble-char');

    const interval = setInterval(() => {
      spans.forEach((span, i) => {
        const spanEl = span as HTMLElement;
        if (i < iteration) {
          spanEl.textContent = original[i];
          spanEl.classList.remove('scrambling');
        } else if (original[i] !== ' ') {
          spanEl.textContent = chars[Math.floor(Math.random() * chars.length)];
          spanEl.classList.add('scrambling');
        }
      });

      iteration += 1;

      if (iteration > length) {
        clearInterval(interval);
        // Restore plain text so gradient background-clip works
        el.textContent = original;
      }
    }, 35);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span ref={elementRef} className={className}>
      {text}
    </span>
  );
}
