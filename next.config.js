/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Gallery",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
