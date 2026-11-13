import type { Metadata } from 'next';
import '@fontsource/ibm-plex-sans/latin-400.css';
import '@fontsource/ibm-plex-sans/latin-500.css';
import '@fontsource/ibm-plex-sans/latin-600.css';
import '@fontsource/ibm-plex-mono/latin-400.css';
import '@fontsource/ibm-plex-mono/latin-500.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://chonghuali.com'),
  title: { default: 'Chonghua Li | Business, Data & Digital', template: '%s | Chonghua Li' },
  description: 'Chonghua Li connects business strategy, data and hands-on digital delivery. Explore selected work and professional experience.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
