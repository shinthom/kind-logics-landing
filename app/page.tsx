import Link from 'next/link';
import HeroArt from '@/components/HeroArt';
import { Arrow, Cta, IMG, SectionHead, Stats, Steps } from '@/components/ui';

const INFRA = [
  ['20260429/88f2c5c554dcd.png', '물류센터 외관', '물류센터 외관', '일산 장항동 / 2,000평 이상 단독 운영', '물량 증가에도 대응 가능한 안정적인 인프라'],
  ['20260429/a8f6f11d9585a.png', '물류센터 내부 전경', '내부 전경', '넓고 쾌적한 보관 공간', '상품 손상 걱정 없는 보관 환경'],
  ['20260429/85ffc992cd1f6.png', '정돈된 보관 구역', '정돈된 보관 구역', '다품종 SKU에 최적화된 보관 시스템', '소량·다품종 주문도 정확하게 처리'],
  ['20260429/a415a9b2caa06.png', '재고 관리 전산 시스템', '전산 시스템', '실시간 재고 관리', '재고 오차 없는 데이터 기반 운영'],
  ['20260429/0d7b568286f4c.png', '검수 및 포장 작업', '작업 프로세스', '꼼꼼한 검수 및 포장', '오배송을 최소화하는 출고 시스템'],
  ['20260429/981d58f818d0d.png', '출고 대기 구역', '출고 대기 구역', '안전한 배송 준비 완료', '지연 없이 빠르게 나가는 출고 처리'],
];

const CASES = [
  {
    topic: '재고',
    before: ['20260424/6bdc5271ecf69.png', '재고 불일치로 인한 고객 CS', '재고 불일치', '전산과 실재고가 맞지 않아 매일 주문 취소 문자를 발송해야 하는 번거로움'],
    after: ['20260429/1ff38787b64ec.png', '재고 실사 화면', '실시간 재고', '주 1회 정기 전산 실사 도입, 재고 오차 최소화로', '품절 취소 감소'],
  },
  {
    topic: '유통기한',
    before: ['20260424/743569852bbe8.png', '유통기한 관련 반품 요청', '유통기한 관리', '체계적인 관리 시스템 부재로 유통기한 경과 상품 발생, 반품 요청 폭주'],
    after: ['20260429/429fce954a8fa.png', '유통기한 관리 화면', '선입선출', '유통기한별 선입선출 시스템 구축, 유통기한 관리로', '반품률 90% 감소'],
  },
  {
    topic: '오배송',
    before: ['20260424/d1f2f3457de25.png', '오배송 관련 고객 컴플레인', '오배송 문제', '사이즈/컬러별 분류가 안 되어 오배송이 빈번하게 발생, 브랜드 신뢰도 하락'],
    after: ['20260429/60db6433913d5.png', '바코드 스캔 검수', '정밀 검수', '바코드 체크 시스템 도입으로 프로세스 구축', '오배송률 0.01% 이하'],
  },
];

const PARTNERS = [
  '79639afd40204', '855e721a9dc88', '695409c133965', '8448eb9a4849a', '3369605406233', 'aa1c09b0f9dfd',
  'a3229c286613c', '9db6ca81ec150', '4f34b17d9a41a', 'f7a134e4269f6', '7f84026f2161c', '1d989a2f0d6dc',
  'f38b438584401', '78b84c04ece78', 'cfd0c44708517', '5a865e3f799dd', '7a7fea967757d', 'd2d32a0845361',
  'e556cd9ba0b37', 'd9abb3876ace3', 'ede2d8b0d332a', 'fbb0fd3c09554', '21a0ab9cdcea9', '73736a8f69bc5',
];

const FAQ = [
  ['처음 이용하는데 절차가 복잡하지 않나요?', '아닙니다. 상담부터 견적, 계약, 입고, 첫 출고까지 담당자가 단계별로 안내해드립니다. 처음 이용하시는 업체도 부담 없이 시작하실 수 있습니다.'],
  ['갑자기 주문이 많이 늘어나도 대응 가능한가요?', '가능합니다. 충분한 물류 공간과 운영 인력을 기반으로 갑작스러운 물량 증가에도 안정적으로 대응하고 있습니다.'],
  ['소량 출고도 가능한가요?', '가능합니다. 하루 몇 건 수준의 출고부터 안정적으로 운영할 수 있으며, 물량 증가 시에도 유연하게 대응합니다.'],
  ['네이버 N배송도 가능한가요?', '가능합니다. 별도의 복잡한 절차 없이 운영 환경에 맞춰 N배송을 적용할 수 있도록 지원합니다.'],
  ['현재 다른 물류업체를 이용 중인데 이관도 가능한가요?', '가능합니다. 기존 재고 이전부터 운영 전환까지 이관 절차를 함께 안내드리며, 운영 공백을 최소화할 수 있도록 지원합니다.'],
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow reveal">밀착형 3PL · DM 풀필먼트</div>
            <h1 className="display reveal">물류는 맡기고,<br /><em>판매에만</em> 집중하세요.</h1>
            <p className="hero-sub reveal">화주사마다 다른 디테일한 요구사항과 예상치 못한 돌발 상황까지. 친절한 물류씨가 입고부터 첫 출고, 그 이후까지 곁에서 챙깁니다.</p>
            <div className="hero-actions reveal">
              <Link className="btn btn-primary" href="/contact">무료 견적 문의하기 <Arrow /></Link>
              <a className="btn btn-secondary" href="#infra">물류 인프라 보기</a>
            </div>
            <div className="hero-meta reveal">
              <span><b>일산 장항동</b>2,000평 이상 단독 운영</span>
              <span><b>연중무휴</b>09:00 – 18:00 고객문의</span>
            </div>
          </div>
          <div className="hero-art reveal">
            <HeroArt />
          </div>
        </div>
        <a className="hero-scroll" href="#infra" aria-label="다음 섹션으로 이동">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 4v16M5 13l7 7 7-7" /></svg>
        </a>
      </section>

      {/* Infra */}
      <section className="section" id="infra">
        <div className="wrap">
          <SectionHead no="01" en="Infrastructure" title="믿고 맡길 수 있는 이유"
            lead="보관부터 검수·포장, 출고까지. 물량이 늘어나도 흔들리지 않는 인프라와 데이터 기반 운영으로 상품을 다룹니다." />
          <div className="infra-grid">
            {INFRA.map(([img, alt, title, k, desc], i) => (
              <article key={img} className="infra-card reveal">
                <figure><img src={IMG + img} alt={alt} loading="lazy" /></figure>
                <div className="infra-body">
                  <span className="infra-idx">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3><span className="k">{k}</span><p>{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="section" id="cases">
        <div className="wrap">
          <SectionHead no="02" en="Before & After" title={<>말만 정확한 것이 아닙니다.<br />실제 운영에서 증명했습니다.</>}
            lead="수동 관리의 한계와 비효율을 전산화로 바꿨습니다. 도입 전후를 나란히 비교해 보세요." />
          <div className="cases-head" aria-hidden="true"><span>Case</span><span>도입 전 · 수동 관리의 한계</span><span>도입 후 · 전산화로 완성된 물류</span></div>
          <div className="cases">
            {CASES.map(({ topic, before, after }, i) => (
              <div key={topic} className="case-row reveal">
                <div className="case-label"><span className="n">CASE {String(i + 1).padStart(2, '0')}</span><h3>{topic}</h3></div>
                <div className="case-cell">
                  <figure><img src={IMG + before[0]} alt={before[1]} loading="lazy" /></figure>
                  <div><div className="case-tag">BEFORE</div><h4>{before[2]}</h4><p>{before[3]}</p></div>
                </div>
                <div className="case-cell after">
                  <figure><img src={IMG + after[0]} alt={after[1]} loading="lazy" /></figure>
                  <div><div className="case-tag">AFTER</div><h4>{after[2]}</h4><p>{after[3]}</p><span className="case-result">{after[4]}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="section" id="proof">
        <div className="wrap">
          <SectionHead no="03" en="Proof" title={<>친절한 물류씨는<br />결과로 증명된 물류사입니다.</>}
            lead="이미 많은 브랜드가 선택했습니다. 숫자가 말해주는 신뢰를 확인하세요." />
          <Stats items={[
            ['협력 파트너사', 200, '개+', '200여 파트너사가 믿고 맡기는 서비스'],
            ['누적 출고 건수', 100, '만건+', '방대한 물동량 처리를 통한 숙련된 노하우'],
            ['재계약률', 99.5, '%', '지속적인 신뢰로 증명된 고객 만족도'],
            ['오배송률', 0.01, '% ↓', '정교한 시스템으로 실현한 제로 오차율'],
          ]} />
          <div className="partners">
            <div className="partners-top reveal">
              <h3>함께하는 파트너</h3>
              <span>일부 파트너사 로고</span>
            </div>
            <div className="logo-grid reveal">
              {PARTNERS.map((id) => (
                <div key={id} className="logo-cell"><img src={`${IMG}20260416/${id}.png`} alt="파트너사 로고" loading="lazy" /></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" id="process">
        <div className="wrap">
          <SectionHead no="04" en="Process" title={<>간단한 절차로<br />빠르게 시작합니다.</>}
            lead="상담부터 첫 출고까지 담당자가 단계별로 안내해드립니다. 다른 물류사에서 이관하셔도 운영 공백을 최소화합니다." />
          <Steps items={[
            ['상담', '운영 가능 여부를 빠르게 안내'], ['견적', '운영 방식에 맞춘 맞춤 견적'], ['계약', '조건 확인 후 계약 진행'],
            ['입고', '상품 입고 후 보관 및 재고 등록'], ['출고 준비', '주문 연동 및 재고 확인'],
            ['포장', '검수 후 안전하게 포장'], ['출고', '고객에게 빠르게 배송'],
          ]} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="wrap faq-grid">
          <div className="faq-aside">
            <div className="eyebrow reveal">05 — FAQ</div>
            <h2 className="h1 reveal">자주 묻는 질문</h2>
            <p className="lead reveal">복잡한 이관 프로세스부터 위약금 고민까지, 첫 출고까지 빠르게 시작할 수 있도록 도와드립니다.</p>
            <div className="hero-actions reveal">
              <Link className="btn btn-secondary" href="/contact">내 조건에 맞는 견적 받아보기 <Arrow /></Link>
            </div>
          </div>
          <div className="faq-list reveal">
            {FAQ.map(([q, a], i) => (
              <details key={q} className="faq-item" open={i === 0}>
                <summary><span className="faq-q">Q{i + 1}</span>{q}<span className="faq-icon" aria-hidden="true" /></summary>
                <p className="faq-a">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Cta eyebrow="Start a Conversation" title={<>지금 바로<br />무료로 견적 문의하세요.</>}
        sub="복잡한 물류는 맡기고 더 중요한 일에 집중하세요. 처음이라도 괜찮습니다. 편하게 시작하실 수 있도록 도와드립니다."
        button="온라인 견적 문의" />
    </>
  );
}
