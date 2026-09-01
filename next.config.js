/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Paths the site has previously exposed. Publications now sit under the
      // research themes, the CV is a downloadable PDF, and the about content
      // has moved onto the home page.
      { source: '/research-areas', destination: '/research', permanent: true },
      { source: '/papers', destination: '/research', permanent: true },
      { source: '/publications', destination: '/research', permanent: true },
      { source: '/teaching', destination: '/research', permanent: true },
      { source: '/about', destination: '/', permanent: true },
      { source: '/cv', destination: '/Teresa_Flanagan_CV.pdf', permanent: true },
    ];
  },
};

module.exports = nextConfig;
