'use client';

import { useEffect, useState } from 'react';

export default function ProactiveToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percent = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0;
      setScrollPercent(percent);

      if (percent > 35 && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="proactive-toast show">
      <div className="proactive-toast-header">
        <div className="proactive-toast-icon">⚡</div>
        <div className="proactive-toast-label">Limited Time</div>
      </div>
      <p>AgeniKAI is in Open Beta. Get 50% off for life — this offer expires soon.</p>
      <div className="proactive-toast-actions">
        <button className="proactive-toast-btn primary">
          Claim Offer
        </button>
        <button className="proactive-toast-btn secondary" onClick={handleClose}>
          Later
        </button>
      </div>
    </div>
  );
}
