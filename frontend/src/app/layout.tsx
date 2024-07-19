import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';
import Provider from './provider';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={`w-dvw h-dvh bg-surface ${inter.className}`}>
        <Provider cookie={headers().get('cookie')}>{children} </Provider>
      </body>
    </html>
  );
}
