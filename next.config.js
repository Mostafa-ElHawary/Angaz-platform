/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.hsoubcdn.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
