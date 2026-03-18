'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoaded(true), 1500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className={`preloader ${isLoaded ? 'fade-out' : ''}`}>
      <div className="preloader-logo">A</div>
      <div className="preloader-bar">
        <div className="preloader-bar-fill"></div>
      </div>
    </div>
  );
}
