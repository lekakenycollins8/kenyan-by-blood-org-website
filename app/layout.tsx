import './globals.css';
import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';
import Script from 'next/script';

const redHat = Red_Hat_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Adding different weights for flexibility
});

export const metadata: Metadata = {
  metadataBase: new URL('https://iamkenyanbyblood.org'),
  title: 'Kenyan By Blood Foundation | Blood Donation Awareness in Kenya',
  description: 'Join Kenyan By Blood Foundation to raise awareness about blood donation in Kenya. Donate, partner, or contribute to saving lives today.',
  keywords: ['Kenyan By Blood Foundation', 'KBBF', 'blood donation Kenya', 'donate blood Kenya', 'NGO blood donation awareness Kenya', 'where to donate blood Nairobi'],
  openGraph: {
    title: 'Kenyan By Blood Foundation | Blood Donation Awareness in Kenya',
    description: 'Join Kenyan By Blood Foundation to raise awareness about blood donation in Kenya. Donate, partner, or contribute to saving lives today.',
    url: 'https://iamkenyanbyblood.org',
    siteName: 'Kenyan By Blood Foundation',
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kenyan By Blood Foundation | Blood Donation Awareness in Kenya',
    description: 'Join Kenyan By Blood Foundation to raise awareness about blood donation in Kenya. Donate, partner, or contribute to saving lives today.',
  },
  alternates: {
    canonical: 'https://iamkenyanbyblood.org',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://iamkenyanbyblood.org" />
        {/* Schema.org Organization Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "Kenyan By Blood Foundation",
              "alternateName": "KBBF",
              "url": "https://iamkenyanbyblood.org",
              "logo": "https://iamkenyanbyblood.org/logo.png",
              "description": "Kenyan By Blood Foundation is dedicated to raising awareness about blood donation in Kenya and saving lives through increased donations.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressRegion": "Nairobi",
                "addressCountry": "Kenya"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+254-720-572-793",
                  "contactType": "customer service",
                  "email": "derrick@iamkenyanbyblood.org",
                  "availableLanguage": ["English", "Swahili"]
                }
              ],
              "sameAs": [
                "https://www.facebook.com/kenyanbyblood",
                "https://twitter.com/kenyanbyblood",
                "https://www.instagram.com/kenyanbyblood"
              ]
            })
          }}
        />
      </head>
      <body className={redHat.className}>
        {children}
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
