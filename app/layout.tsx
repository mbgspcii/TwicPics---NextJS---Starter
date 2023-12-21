import './globals.css';
import type { Metadata } from 'next';
import { TwicInstall } from '@twicpics/components/react';
import '@twicpics/components/style.css';


export const metadata: Metadata = {
  title: 'TwicPics x Next.js - Starter Kit',
  description: 'Minimal setup to get Next.js working with TwicPics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <TwicInstall
        // domain is mandatory
        domain="https://demo.twic.pics"
      />
      <body>{children}</body>
    </html>
  );
}
