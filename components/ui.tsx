// 서비스 페이지(3PL·DM)가 공유하는 섹션 빌딩 블록
import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

export const IMG = 'https://cdn.imweb.me/thumbnail/';
export const LOGO = IMG + '20260416/5d5ccc358509e.png';

export function Arrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M2 8h12M9 3l5 5-5 5" />
    </svg>
  );
}

export function SectionHead({ no, en, title, lead }: { no: string; en: string; title: ReactNode; lead?: ReactNode }) {
  return (
    <div className="section-head">
      <div>
        <div className="eyebrow reveal">{no} — {en}</div>
        <h2 className="h1 reveal">{title}</h2>
      </div>
      {lead ? <p className="lead reveal">{lead}</p> : <span />}
    </div>
  );
}

// 서비스 페이지는 흰 띠(tint)와 기본 배경을 번갈아 써서 구획을 나눈다
export function Section({ id, tint, children }: { id: string; tint?: boolean; children: ReactNode }) {
  return (
    <section className={tint ? 'section section--tint' : 'section'} id={id}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function SvcHero(props: {
  eyebrow: string;
  title: ReactNode;
  sub: string;
  primary: string;
  img: string;
  alt: string;
  facts: [string, string][];
}) {
  return (
    <section className="page-hero svc-hero">
      <div className="wrap page-hero-grid">
        <div>
          <div className="eyebrow reveal">{props.eyebrow}</div>
          <h1 className="display reveal">{props.title}</h1>
          <p className="hero-sub reveal">{props.sub}</p>
          <div className="hero-actions reveal">
            <Link className="btn btn-primary" href="/contact">{props.primary} <Arrow /></Link>
            <a className="btn btn-secondary" href="#compare">차이점 살펴보기</a>
          </div>
        </div>
        <figure className="reveal"><img src={IMG + props.img} alt={props.alt} /></figure>
      </div>
      <div className="wrap">
        <dl className="hero-facts reveal">
          {props.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}

export function Worries({ items }: { items: [ReactNode, string][] }) {
  return (
    <div className="worries">
      {items.map(([q, who], i) => <figure key={i} className="worry reveal"><p>{q}</p><span>{who}</span></figure>)}
    </div>
  );
}

// num이 숫자면 카운트업 대상, 문자열이면 그대로 표시
export function Stats({ items }: { items: [string, number | string, string, string][] }) {
  return (
    <div className="stats">
      {items.map(([label, num, unit, desc]) => {
        const dec = typeof num === 'number' ? (String(num).split('.')[1] ?? '').length : 0;
        return (
          <div key={label} className="stat reveal">
            <div className="stat-label">{label}</div>
            <div className="stat-num">
              {typeof num === 'number' ? <span data-target={num} data-decimals={dec || undefined}>{num}</span> : num}
              {unit && <small>{unit}</small>}
            </div>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export function Results({ items }: { items: [string, string, string][] }) {
  return (
    <div className="results">
      {items.map(([who, num, desc]) => (
        <div key={who} className="result reveal"><div className="result-who">{who}</div><div className="result-num">{num}</div><p>{desc}</p></div>
      ))}
    </div>
  );
}

export function Compare(props: { themTitle: string; themSub: string; them: string[]; usTitle: string; usSub: string; us: [string, string][] }) {
  return (
    <div className="compare reveal">
      <div className="compare-col">
        <h3>{props.themTitle}</h3><p className="sub">{props.themSub}</p>
        <ul>{props.them.map((t) => <li key={t}><span>{t}</span></li>)}</ul>
      </div>
      <div className="compare-col us">
        <h3>{props.usTitle}</h3><p className="sub">{props.usSub}</p>
        <ul>{props.us.map(([t, d]) => <li key={t}><span><b>{t}</b><small>{d}</small></span></li>)}</ul>
      </div>
    </div>
  );
}

export function Steps({ items }: { items: [string, string][] }) {
  return (
    <ol className="steps reveal" style={{ '--steps': items.length } as CSSProperties}>
      {items.map(([t, d]) => <li key={t}><b>{t}</b><span>{d}</span></li>)}
    </ol>
  );
}

export function Voices({ items }: { items: [string, string][] }) {
  return (
    <div className="voices">
      {items.map(([q, who]) => <figure key={q} className="voice-card reveal"><p>{q}</p><span>{who}</span></figure>)}
    </div>
  );
}

export function Values({ items }: { items: [string, string, string][] }) {
  return (
    <div className="values" style={{ '--cols': items.length } as CSSProperties}>
      {items.map(([t, d, r]) => <div key={t} className="value reveal"><h3>{t}</h3><p>{d}</p><strong>{r}</strong></div>)}
    </div>
  );
}

export function Cta({ eyebrow = '지금 바로 무료로 견적 문의하세요', title, sub, button = '내 조건에 맞는 견적 받아보기' }: {
  eyebrow?: string;
  title: ReactNode;
  sub: string;
  button?: string;
}) {
  return (
    <section className="cta" id="contact">
      <div className="wrap cta-grid">
        <div>
          <div className="eyebrow reveal">{eyebrow}</div>
          <h2 className="reveal">{title}</h2>
          <p className="reveal">{sub}</p>
        </div>
        <div className="cta-actions reveal">
          <span className="cta-hours">고객문의 · 연중무휴 09:00 – 18:00</span>
          <a className="cta-tel" href="tel:031-912-5595">031-912-5595</a>
          <Link className="btn btn-inverse" href="/contact">{button} <Arrow /></Link>
        </div>
      </div>
    </section>
  );
}
