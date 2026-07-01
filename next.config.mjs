/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ianarapinho.odo.br" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
