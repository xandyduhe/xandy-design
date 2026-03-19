import type { Metadata } from 'next';
import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'X & Y Design — Marketing Design Studio',
  description:
    'Built on psychology, powered by code, finished with art. Brand, web, and social media design for local businesses.',
  openGraph: {
    title: 'X & Y Design',
    description: 'Built on psychology, powered by code, finished with art.',
    url: 'https://xandydesign.com',
    siteName: 'X & Y Design',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#F7F5EE] text-[#2C2C2A]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
