import type { Metadata } from 'next';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Bubble',
  description: 'Awesome Github Profile',
  keywords: ['Awesome', 'Awesome Profile', 'Github Profile', 'Github Readme']
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
