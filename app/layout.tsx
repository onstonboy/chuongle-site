import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import Navigation from '@/app/components/features/Navigation';
import Footer from '@/app/components/sections/Footer';
import GradientBackground from '@/app/components/ui/GradientBackground';
import './styles/globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'CDev — Independent Mobile Apps',
  description:
    'CDev builds privacy-first utilities, AI-powered tools, and creative apps for iOS and Android.',
  openGraph: {
    title: 'CDev — Independent Mobile Apps',
    description:
      'CDev builds privacy-first utilities, AI-powered tools, and creative apps for iOS and Android.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <GradientBackground />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

