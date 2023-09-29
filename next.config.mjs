/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fadadoussama.github.io',
      },
    ],
  }
};

export default withPlaiceholder(nextConfig);

// module.exports = nextConfig
