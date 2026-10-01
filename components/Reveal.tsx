'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// 스크롤 등장 애니메이션 + 통계 숫자 카운트업. 페이지 이동마다 새 .reveal 요소를 관찰한다.
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.remove('no-js');
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = document.querySelectorAll<HTMLElement>('.reveal:not(.in)');
    if (!('IntersectionObserver' in window) || reduce) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('in');
          e.target.querySelectorAll<HTMLElement>('[data-target]').forEach(countUp);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    els.forEach((el) => {
      const sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.transitionDelay = Math.min(sib, 5) * 80 + 'ms';
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  return null;
}

function countUp(el: HTMLElement) {
  const to = parseFloat(el.dataset.target!);
  const dec = +(el.dataset.decimals || 0);
  const dur = 1600;
  let t0: number | null = null;
  function step(t: number) {
    if (t0 === null) t0 = t;
    const p = Math.min((t - t0) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = (to * eased).toFixed(dec);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
