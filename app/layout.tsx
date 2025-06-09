import './globals.css';
import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';

const redHat = Red_Hat_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Adding different weights for flexibility
});

export const metadata: Metadata = {
  title: 'Kenyan By Blood Foundation',
  description: 'Kenyan By Blood Foundation Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={redHat.className}>{children}</body>
    </html>
  );
}
