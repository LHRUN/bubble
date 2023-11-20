import type { Metadata } from 'next';
import Script from 'next/script';
import { AppProviders } from '@/context';
import { Analytics } from '@vercel/analytics/react';
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
      <Script
        id="clarity-script"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "jtekf5auph");`
        }}
      />
      <body>
        <AppProviders>{children}</AppProviders>
        <Analytics />
      </body>
    </html>
  );
}
