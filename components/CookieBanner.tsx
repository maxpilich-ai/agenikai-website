'use client';

import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <p>
        We use cookies to enhance your experience. By continuing to browse, you agree to our{' '}
        <a href="/privacy">Privacy Policy</a>.
      </p>
      <button className="cookie-accept" onClick={handleAccept}>
        Accept
      </button>
      <button className="cookie-decline" onClick={handleDecline}>
        Decline
      </button>
    </div>
  );
}
