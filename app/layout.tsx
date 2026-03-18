import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import CursorGlow from '@/components/CursorGlow';
import CookieBanner from '@/components/CookieBanner';
import Preloader from '@/components/Preloader';
import CmdKPalette from '@/components/CmdKPalette';
import ChatWidget from '@/components/ChatWidget';
import ProactiveToast from '@/components/ProactiveToast';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'AgeniKAI — The All-in-One AI Business Platform',
  description:
    'Build AI agents, automate workflows, manage contacts, clone voices, and create content — all in one platform. No code required. Free to start.',
  keywords: 'AI agents, business automation, CRM, voice cloning, content creation, no-code AI platform',
  openGraph: {
    type: 'website',
    url: 'https://agenikai.com/',
    title: 'AgeniKAI — The All-in-One AI Business Platform',
    description:
      'Build AI agents, automate workflows, manage contacts, clone voices, and create content — all in one platform.',
    images: [
      {
        url: 'https://agenikai.com/og-image.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgeniKAI — The All-in-One AI Business Platform',
    description:
      'Build AI agents, automate workflows, manage contacts, clone voices, and create content — all in one platform.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%2306B6D4'/%3E%3Ctext x='50%25' y='55%25' text-anchor='middle' dominant-baseline='middle' fill='white' font-family='sans-serif' font-weight='900' font-size='18'%3EA%3C/text%3E%3C/svg%3E"
        />
      </head>
      <body>
        <Preloader />
        <ScrollProgress />
        <CursorGlow />
        <ScrollReveal />

        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <Nav />

        <main id="main-content">{children}</main>

        <Footer />

        <CookieBanner />
        <CmdKPalette />
        <ChatWidget />
        <ProactiveToast />
        <BackToTop />
      </body>
    </html>
  );
}
