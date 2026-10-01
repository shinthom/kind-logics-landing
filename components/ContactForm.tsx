'use client';

import { useState, type FormEvent } from 'react';
import { Arrow } from './ui';

type Field = 'name' | 'tel' | 'email' | 'message' | 'agree';
type Status = { msg: string; type: 'error' | 'ok' } | null;

// 별도 서버가 없어 메일 앱으로 문의 내용을 채워 보낸다
export default function ContactForm() {
  const [invalid, setInvalid] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<Status>(null);

  function onInput(e: FormEvent<HTMLFormElement>) {
    const t = e.target as HTMLInputElement;
    if (t.name === 'agree' || t.validity?.valid) setInvalid((s) => ({ ...s, [t.name]: false }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const els = form.elements as unknown as Record<Field, HTMLInputElement>;
    const next: Partial<Record<Field, boolean>> = {};
    let first: HTMLInputElement | null = null;
    for (const n of ['name', 'tel', 'email', 'message'] as const) {
      const el = els[n];
      next[n] = !(el.validity.valid && !(el.required && !el.value.trim()));
      if (next[n] && !first) first = el;
    }
    next.agree = !els.agree.checked;
    if (next.agree && !first) first = els.agree;
    setInvalid(next);
    if (first) {
      setStatus({ msg: '표시된 항목을 확인해주세요.', type: 'error' });
      first.focus();
      return;
    }

    const d = new FormData(form);
    const get = (k: string) => String(d.get(k) ?? '').trim();
    const who = get('company') || get('name');
    const body = [
      '[회사명] ' + (get('company') || '-'),
      '[담당자명] ' + get('name'),
      '[연락처] ' + get('tel'),
      '[이메일] ' + (get('email') || '-'),
      '[월 예상 물량] ' + (get('volume') || '-'),
      '',
      '[문의 내용]',
      get('message'),
    ].join('\n');
    location.href = 'mailto:sales@da-logics.com'
      + '?subject=' + encodeURIComponent('[견적 문의] ' + who)
      + '&body=' + encodeURIComponent(body);
    setStatus({ msg: '메일 앱에서 작성된 문의를 전송해주세요. 메일 앱이 열리지 않으면 031-912-5595로 전화 주세요.', type: 'ok' });
  }

  return (
    <form className="contact-form reveal" noValidate onInput={onInput} onSubmit={onSubmit}>
      <div className="field-row">
        <div className="field">
          <label className="field-label" htmlFor="f-company">회사명</label>
          <input className="input" id="f-company" name="company" type="text" autoComplete="organization" />
        </div>
        <div className="field">
          <label className="field-label" htmlFor="f-name">담당자명 <b aria-hidden="true">*</b></label>
          <input className="input" id="f-name" name="name" type="text" autoComplete="name" required aria-invalid={invalid.name} />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label className="field-label" htmlFor="f-tel">연락처 <b aria-hidden="true">*</b></label>
          <input className="input" id="f-tel" name="tel" type="tel" inputMode="tel" autoComplete="tel" placeholder="010-0000-0000"
            required pattern="[0-9\-\s]{9,14}" aria-invalid={invalid.tel} />
        </div>
        <div className="field">
          <label className="field-label" htmlFor="f-email">이메일</label>
          <input className="input" id="f-email" name="email" type="email" autoComplete="email" placeholder="name@company.com" aria-invalid={invalid.email} />
        </div>
      </div>
      <div className="field">
        <label className="field-label" htmlFor="f-volume">월 예상 물량</label>
        <select className="input" id="f-volume" name="volume" defaultValue="">
          <option value="">선택해주세요</option>
          <option>1,000건 미만</option>
          <option>1,000 – 5,000건</option>
          <option>5,000 – 30,000건</option>
          <option>30,000건 이상</option>
          <option>잘 모르겠어요</option>
        </select>
      </div>
      <div className="field">
        <label className="field-label" htmlFor="f-message">문의 내용 <b aria-hidden="true">*</b></label>
        <textarea className="input" id="f-message" name="message" rows={6} required aria-invalid={invalid.message}
          placeholder="취급 상품, 현재 물류 방식, 희망 시작일 등을 자유롭게 적어주세요." />
      </div>
      <label className="agree" aria-invalid={invalid.agree}>
        <input type="checkbox" name="agree" required />
        <span>개인정보 수집·이용에 동의합니다. <small>수집 항목: 회사명, 담당자명, 연락처, 이메일 · 목적: 견적 상담 · 보유 기간: 상담 완료 후 1년</small></span>
      </label>
      <p className={'form-status ' + (status?.type ?? '')} role="status" aria-live="polite">{status?.msg}</p>
      <button className="btn btn-primary form-submit" type="submit">문의 보내기 <Arrow /></button>
    </form>
  );
}
