import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'العشر الأواخر — The Last 10 Nights of Ramadan',
  description: 'Your guide to the last ten nights of Ramadan and Laylat ul-Qadr. Roadmap, hadiths, duas, and worship guides.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
