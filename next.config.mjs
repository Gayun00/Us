/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "imgnews.pstatic.net",
      },
    ],
  },
};

export default nextConfig;
