'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasAnnouncement, setHasAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const closeAnnouncement = () => {
    setHasAnnouncement(false);
  };

  return (
    <>
      {hasAnnouncement && (
        <div className="announcement-bar">
          🚀 AgeniKAI is now in Open Beta —{' '}
          <Link href="/signup">Get early access with 50% off for life →</Link>
          <button
            className="close-ann"
            onClick={closeAnnouncement}
            aria-label="Close announcement"
          >
            ✕
          </button>
        </div>
      )}

      <nav
        className={`${isHidden ? 'nav-hidden' : ''} ${hasAnnouncement ? 'with-ann' : ''}`}
      >
        <Link href="/" className="nav-logo">
          <div className="logo-mark">A</div>
          AgeniKAI
        </Link>

        <div className="nav-center">
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className="nav-right">
          <Link href="/" className="nav-login">
            Log in
          </Link>
          <Link href="/signup" className="nav-cta">
            Get Started Free
          </Link>

          <span
            className="nav-cmd-hint"
            title="Quick navigation"
            style={{ cursor: 'pointer' }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <kbd>⌘K</kbd>
          </span>

          <button
            className={`hamburger ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-menu show">
          <Link href="/" onClick={closeMenu}>
            Features
          </Link>
          <Link href="/" onClick={closeMenu}>
            Pricing
          </Link>
          <Link href="/" onClick={closeMenu}>
            About
          </Link>
          <Link href="/" onClick={closeMenu}>
            Contact
          </Link>
          <Link href="/" onClick={closeMenu}>
            Log in
          </Link>
          <Link href="/signup" className="mob-cta" onClick={closeMenu}>
            Get Started Free
          </Link>
        </div>
      )}
    </>
  );
}
