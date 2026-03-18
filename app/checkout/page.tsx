'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const handleHamburger = () => {
      mobileMenu?.classList.toggle('active');
    };
    hamburgerBtn?.addEventListener('click', handleHamburger);

    const scrollProgress = document.getElementById('scrollProgress');
    const handleScroll = () => {
      if (scrollProgress) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      hamburgerBtn?.removeEventListener('click', handleHamburger);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Payment submitted:', { paymentMethod, cardName, cardNumber, expiryDate, cvv, billingAddress, city, state, zipCode, country });
  };

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <div className="scroll-progress" id="scrollProgress"></div>

      <nav>
        <Link href="/" className="nav-logo">
          <div className="logo-mark">A</div>
          AgeniKAI
        </Link>
        <div className="nav-center">
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/about#contact">Contact</Link>
        </div>
        <div className="nav-right">
          <a href="#" className="nav-login">Log in</a>
          <Link href="/signup" className="nav-cta">Get Started Free</Link>
          <button className="hamburger" id="hamburgerBtn" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className="mobile-menu" id="mobileMenu">
        <Link href="/features">Features</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/about">About</Link>
        <Link href="/about#contact">Contact</Link>
        <a href="#">Log in</a>
        <Link href="/signup" className="mob-cta">Get Started Free</Link>
      </div>

      <section className="checkout-section" id="main-content">
        <div className="checkout-container">
          <div className="checkout-main">
            <h1>Checkout</h1>

            {/* Payment Method Tabs */}
            <div className="payment-tabs">
              <button
                className={`tab ${paymentMethod === 'card' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                Credit Card
              </button>
              <button
                className={`tab ${paymentMethod === 'paypal' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('paypal')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8.343 12.597c.237 0 .454-.042.644-.124.19-.082.357-.206.497-.369.14-.163.246-.361.316-.592.07-.231.105-.489.105-.772 0-.293-.035-.551-.105-.782-.07-.231-.176-.429-.316-.592-.14-.163-.307-.287-.497-.369-.19-.082-.407-.124-.644-.124H5.898v3.724h2.445m-2.445-5.646h2.445c.237 0 .454-.042.644-.124.19-.082.357-.206.497-.369.14-.163.246-.361.316-.592.07-.231.105-.489.105-.772 0-.293-.035-.551-.105-.782-.07-.231-.176-.429-.316-.592-.14-.163-.307-.287-.497-.369-.19-.082-.407-.124-.644-.124H5.898v3.724m10.263 5.646c.237 0 .454-.042.644-.124.19-.082.357-.206.497-.369.14-.163.246-.361.316-.592.07-.231.105-.489.105-.772 0-.293-.035-.551-.105-.782-.07-.231-.176-.429-.316-.592-.14-.163-.307-.287-.497-.369-.19-.082-.407-.124-.644-.124h-2.445v3.724h2.445m4.316-10.366V5.65H5.898v12.673h14.579V5.65z"/></svg>
                PayPal
              </button>
            </div>

            {/* Credit Card Form */}
            {paymentMethod === 'card' && (
              <form className="payment-form" onSubmit={handleSubmit}>
                <h3>Card Details</h3>

                <div className="form-group">
                  <label htmlFor="cardName">Cardholder Name</label>
                  <input
                    type="text"
                    id="cardName"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim())}
                    placeholder="4242 4242 4242 4242"
                    maxLength={19}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input
                      type="text"
                      id="expiryDate"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value.replace(/(\d{2})(\d{2})/, '$1/$2'))}
                      placeholder="MM/YY"
                      maxLength={5}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                      placeholder="123"
                      maxLength={4}
                      required
                    />
                  </div>
                </div>

                <h3 style={{ marginTop: '2rem' }}>Billing Address</h3>

                <div className="form-group">
                  <label htmlFor="billingAddress">Address</label>
                  <input
                    type="text"
                    id="billingAddress"
                    value={billingAddress}
                    onChange={(e) => setBillingAddress(e.target.value)}
                    placeholder="123 Main Street"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="San Francisco"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State/Province</label>
                    <input
                      type="text"
                      id="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="CA"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="zipCode">ZIP/Postal Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="94105"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select
                      id="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    >
                      <option value="">Select country</option>
                      <option value="us">United States</option>
                      <option value="ca">Canada</option>
                      <option value="gb">United Kingdom</option>
                      <option value="au">Australia</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="checkout-btn">Complete Purchase</button>
              </form>
            )}

            {/* PayPal Form */}
            {paymentMethod === 'paypal' && (
              <form className="payment-form" onSubmit={handleSubmit}>
                <h3>PayPal Payment</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>You will be redirected to PayPal to complete your payment securely.</p>
                <button type="submit" className="checkout-btn paypal">Pay with PayPal</button>
              </form>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <aside className="order-summary">
            <div className="summary-header">
              <h3>Order Summary</h3>
            </div>

            <div className="summary-plan">
              <div className="plan-name">Pro Plan</div>
              <div className="plan-price">$290<span>/year</span></div>
            </div>

            <div className="summary-details">
              <div className="detail-row">
                <span>AI Agents</span>
                <span>5</span>
              </div>
              <div className="detail-row">
                <span>Contacts</span>
                <span>5,000</span>
              </div>
              <div className="detail-row">
                <span>Support</span>
                <span>Priority Email</span>
              </div>
            </div>

            <div className="summary-breakdown">
              <div className="breakdown-row">
                <span>Subtotal</span>
                <span>$290.00</span>
              </div>
              <div className="breakdown-row">
                <span>Tax</span>
                <span>$23.20</span>
              </div>
              <div className="breakdown-row total">
                <span>Total</span>
                <span>$313.20</span>
              </div>
            </div>

            <div className="summary-note">
              <p>Billed once a year. Cancel anytime.</p>
            </div>
          </aside>
        </div>
      </section>

      <div className="cookie-banner" id="cookieBanner">
        <p>We use cookies to improve your experience. <a href="/privacy#s10">Learn more</a></p>
        <button className="cookie-accept" onClick={() => document.getElementById('cookieBanner')!.style.display = 'none'}>Accept All</button>
        <button className="cookie-decline" onClick={() => document.getElementById('cookieBanner')!.style.display = 'none'}>Decline</button>
      </div>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Product</h4>
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <a href="#">Security</a>
            <a href="#">API</a>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <Link href="/about#contact">Contact</Link>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="#">Cookies</a>
          </div>
          <div className="footer-section">
            <h4>Follow</h4>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 AgeniKAI. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
