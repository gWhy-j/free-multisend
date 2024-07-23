import type { Metadata } from 'next';
import { VT323 } from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';
import Provider from './provider';

const inter = VT323({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Token Pipeline',
  description: 'Send your token for free',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`w-dvw h-dvh bg-black ${inter.className}`}>
        <Provider cookie={headers().get('cookie')}>{children} </Provider>
      </body>
    </html>
  );
}
