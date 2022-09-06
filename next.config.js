/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/name',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
