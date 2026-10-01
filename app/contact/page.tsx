import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: '문의하기',
  description: '3PL 풀필먼트, DM 발송 무료 견적 문의. 운영 조건을 남겨주시면 담당자가 당일 연락드립니다. 대표번호 031-912-5595.',
  openGraph: { url: '/contact', title: '문의하기 | 친절한 물류씨' },
};

export default function Contact() {
  return (
    <section className="page-hero contact">
      <div className="wrap">
        <nav className="crumb reveal" aria-label="현재 위치"><Link href="/">홈</Link><span>/</span><span>문의하기</span></nav>
        <div className="contact-grid">
          <div className="contact-intro">
            <div className="eyebrow reveal">Contact · 무료 견적 문의</div>
            <h1 className="display reveal">운영 조건만 알려주세요.<br /><em>맞춤 견적</em>을 드립니다.</h1>
            <p className="hero-sub reveal">남겨주신 내용을 확인한 뒤 담당자가 영업일 기준 당일 연락드립니다. 급하신 경우 대표번호로 바로 전화 주세요.</p>
            <dl className="contact-direct reveal">
              <div><dt>대표번호</dt><dd><a href="tel:031-912-5595">031-912-5595</a></dd></div>
              <div><dt>이메일</dt><dd><a href="mailto:sales@da-logics.com">sales@da-logics.com</a></dd></div>
              <div><dt>고객문의</dt><dd>연중무휴 09:00 – 18:00</dd></div>
              <div><dt>물류센터</dt><dd>일산 장항동 · 2,000평 이상</dd></div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
