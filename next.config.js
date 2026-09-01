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
      // Paths the site has previously exposed. Publications now live under the
      // research themes and in full on the CV, and teaching is a CV section.
      { source: '/research-areas', destination: '/research', permanent: true },
      { source: '/papers', destination: '/research', permanent: true },
      { source: '/publications', destination: '/research', permanent: true },
      { source: '/teaching', destination: '/cv', permanent: true },
    ];
  },
};

module.exports = nextConfig;
