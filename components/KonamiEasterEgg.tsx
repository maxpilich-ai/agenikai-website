'use client';

import { useEffect, useRef, useState } from 'react';
import { useKonamiCode } from '@/hooks/useKonamiCode';

export default function KonamiEasterEgg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isActive, setIsActive] = useState(false);

  useKonamiCode(() => {
    setIsActive(true);
    // Auto-fade out after 5 seconds
    setTimeout(() => setIsActive(false), 5000);
  });

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Show canvas
    canvas.style.display = 'block';

    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 16;
    const columns = Math.floor(canvas!.width / fontSize);
    const drops = Array(columns).fill(1);

    let opacity = 1;
    const fadeSpeed = 0.02;

    const draw = () => {
      ctx!.fillStyle = `rgba(10, 14, 26, ${0.1})`;
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      ctx!.fillStyle = `rgba(6, 182, 212, ${opacity})`;
      ctx!.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx!.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      opacity -= fadeSpeed;
      canvas!.style.opacity = opacity.toString();

      if (opacity > 0) {
        requestAnimationFrame(draw);
      } else {
        canvas!.style.display = 'none';
        canvas!.style.opacity = '1';
      }
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isActive]);

  return (
    <canvas
      ref={canvasRef}
      id="matrixCanvas"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        pointerEvents: 'none',
        display: 'none',
        opacity: 1,
        transition: 'opacity 0.5s',
      }}
    />
  );
}
