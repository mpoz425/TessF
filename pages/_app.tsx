import React from 'react';
import type { AppProps } from 'next/app';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
});

const display = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  axes: ['SOFT', 'opsz'],
  fallback: ['ui-serif', 'Georgia', 'serif'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'monospace'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${sans.style.fontFamily};
          --font-display: ${display.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
        }
        /* Slightly softened, larger-optical-size cut for display type. */
        h1,
        h2,
        h3,
        .font-display {
          font-variation-settings: 'SOFT' 12, 'opsz' 36;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
