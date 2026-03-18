import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div style={{ fontSize: '1.35rem', fontWeight: 800 }}>
            <span style={{ color: 'var(--cyan)' }}>A</span>geniKAI
          </div>
          <p>
            The all-in-one platform for building AI agents, automating workflows, and scaling your business without code.
          </p>
        </div>

        <div className="footer-col">
          <h4>Product</h4>
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Marketplace</Link>
          <Link href="/">API Docs</Link>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link href="/">About</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Careers</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/">Cookies</Link>
          <Link href="/">Status</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 AgeniKAI. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/">Twitter</Link>
          <Link href="/">Discord</Link>
          <Link href="/">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
