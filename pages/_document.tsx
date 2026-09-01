import { Html, Head, Main, NextScript } from 'next/document';

/*
 * Marks the document as JS-capable before first paint so scroll-reveal styles
 * never hide content from users (or crawlers) without JS.
 *
 * Because those styles hide content until the reveal observer runs, a failsafe
 * timer un-hides everything if hydration is slow or never happens. The observer
 * clears the timer as soon as it takes over, so this only fires when something
 * has actually gone wrong.
 */
const REVEAL_BOOTSTRAP = `
document.documentElement.classList.add('js');
window.__revealFailsafe = setTimeout(function () {
  document.documentElement.classList.add('reveal-failsafe');
}, 1500);
`;

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#FCFAF6" />
        <script dangerouslySetInnerHTML={{ __html: REVEAL_BOOTSTRAP }} />
      </Head>
      <body className="bg-paper">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
