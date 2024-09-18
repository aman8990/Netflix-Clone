import { Inter } from 'next/font/google';
import './_styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Netflix Clone',
  description: 'Netflix',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
