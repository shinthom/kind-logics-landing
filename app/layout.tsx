import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kind-logics.com'),
  title: { default: '친절한 물류씨 | 밀착형 3PL · DM', template: '%s | 친절한 물류씨' },
  description: '물류는 맡기고, 판매에만 집중하세요. (주)동아물류전략의 밀착형 3PL · DM 풀필먼트 브랜드, 친절한 물류씨.',
  openGraph: { type: 'website', url: '/', title: '친절한 물류씨 | 밀착형 3PL · DM' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* 폰트: Pretendard 단일 사용 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      {/* no-js는 Reveal이 마운트되면 제거한다 — JS 없이도 .reveal 콘텐츠가 보이도록 */}
      <body className="no-js">
        <Nav />
        <main>{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
