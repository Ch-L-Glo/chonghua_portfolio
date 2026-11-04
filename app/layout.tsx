import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { metadataBase: new URL('https://chonghuali.com'), title: { default: 'Chonghua Li | Business, Data & Digital', template: '%s | Chonghua Li' }, description: 'Chonghua Li connects business strategy, data and hands-on digital delivery. Explore selected work and professional experience.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
