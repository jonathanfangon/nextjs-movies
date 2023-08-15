import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Movies',
  description: 'New movie review application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900`}>
        <nav className='px-10 pt-5'>
          <Link href='/' className='text-2xl font-semibold'>
            <span className='dark:text-gray-200'>Movie</span>{' '}
            <span className='text-teal-400 dark:text-teal-300'>Critic</span>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
