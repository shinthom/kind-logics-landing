import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 정적 HTML 시절 주소로 들어온 방문자를 새 경로로 보낸다
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/3PL.html', destination: '/3pl', permanent: true },
      { source: '/DM.html', destination: '/dm', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
    ];
  },
};

export default nextConfig;
