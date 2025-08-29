import type { Metadata } from "next";
import { Inter_Tight, Poppins } from "next/font/google";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import './globals.css';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: 'MemeCoin',
  description: 'Provide a playful, informational landing with clear steps to buy and understand tokenomics; single-page with engaging visuals',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} antialiased`}> 
        <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
          {children}
        </SiteThemeProvider>
      </body>
    </html>
  );
}
