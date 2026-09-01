import { Html, Head, Main, NextScript } from 'next/document';

/*
 * Marks the document as JS-capable before first paint so scroll-reveal
 * styles never hide content from users (or crawlers) without JS.
 */
const JS_FLAG = `document.documentElement.classList.add('js')`;

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#FCFAF6" />
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
      </Head>
      <body className="bg-paper">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
