import './_styles/globals.css';

export const metadata = {
  title: 'Netflix Clone',
  description: 'Netflix',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
