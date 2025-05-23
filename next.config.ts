import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'x8e1l4sg9a.ufs.sh',
        port: '',
        pathname: '/f/**',
        search: '',
      },
    ],
  },
}

export default nextConfig;
