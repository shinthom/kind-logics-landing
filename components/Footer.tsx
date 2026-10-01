import { LOGO } from './ui';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={LOGO} alt="친절한 물류씨" width={405} height={96} />
            <p>물류는 맡기고,<br />판매에만 집중하세요.</p>
          </div>
          <dl className="footer-info">
            <div><dt>업체명</dt><dd>주식회사 동아물류전략</dd></div>
            <div><dt>사업자등록번호</dt><dd>741-88-01938</dd></div>
            <div><dt>대표번호</dt><dd><a href="tel:031-912-5595">031-912-5595</a></dd></div>
            <div><dt>이메일</dt><dd><a href="mailto:sales@da-logics.com">sales@da-logics.com</a></dd></div>
            <div><dt>고객문의</dt><dd>연중무휴 09:00 – 18:00</dd></div>
            <div><dt>물류센터</dt><dd>일산 장항동 · 2,000평 이상</dd></div>
          </dl>
        </div>
        <div className="footer-bottom">
          <span>COPYRIGHT © 2026. 친절한물류씨 All rights reserved.</span>
          <nav aria-label="약관">
            <a href="/?mode=policy">이용약관</a>
            <a href="/?mode=privacy">개인정보처리방침</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
