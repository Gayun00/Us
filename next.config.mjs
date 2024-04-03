/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "imgnews.pstatic.net",
      },
      {
        hostname: "uxwing.com",
      },
    ],
  },
};

export default nextConfig;
