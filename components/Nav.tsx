'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Arrow, LOGO } from './ui';

const LINKS = [
  { href: '/3pl', label: '3PL' },
  { href: '/dm', label: 'DM' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // 페이지가 바뀌면 모바일 메뉴를 닫는다
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={open ? 'nav open' : 'nav'} id="nav">
      <div className="wrap nav-inner">
        <Link className="nav-logo" href="/" aria-label="친절한 물류씨 홈">
          <img src={LOGO} alt="친절한 물류씨" width={405} height={96} />
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <nav className="nav-links" id="nav-links" aria-label="주요 메뉴">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              className="nav-link"
              href={l.href}
              aria-current={pathname === l.href ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link className="btn btn-primary nav-cta" href="/contact" onClick={() => setOpen(false)}>
            문의하기 <Arrow />
          </Link>
        </nav>
      </div>
    </header>
  );
}
