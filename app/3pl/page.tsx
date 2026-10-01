import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Arrow, Compare, Cta, IMG, Results, Section, SectionHead, Stats, Steps, SvcHero, Values, Voices, Worries,
} from '@/components/ui';

export const metadata: Metadata = {
  title: '3PL 풀필먼트',
  description: '문제는 가격이 아니라, 믿고 맡길 수 있는가입니다. 오배송 당일 재발송, 8분 내 회신, 2,000평 이상 인프라의 친절한 물류씨 3PL.',
  openGraph: { url: '/3pl', title: '3PL 풀필먼트 | 친절한 물류씨' },
};

const LEDGER = [
  ['회신 지연', '−200만 원'],
  ['오배송 재발송', '−100만 원'],
  ['대표 시간 낭비', '−150만 원'],
  ['고객 이탈', '−50만 원'],
];

export default function ThreePL() {
  return (
    <>
      <SvcHero
        eyebrow="3PL · 풀필먼트"
        title={<>문제는 가격이 아니라,<br /><em>믿고 맡길 수 있는가</em>입니다.</>}
        sub="저렴하다고 덜컥 계약했다가, 불안했던 적 없으신가요? 친절한 물류씨는 단가가 아닌 운영으로 증명합니다."
        primary="무료 정밀점검 신청하기"
        img="20260429/0700dcce89a10.jpg"
        alt="완충재로 상품을 꼼꼼하게 포장하는 모습"
        facts={[['오배송률', '0.01% 이하'], ['긴급 출고 회신', '8분 이내'], ['물류 공간', '2,000평+'], ['고객 만족도', '99.5%']]}
      />

      <Section id="worries" tint>
        <SectionHead no="01" en="Pain Points" title={<>혹시 이런 경험,<br />있으신가요?</>}
          lead="이 중 하나라도 해당된다면, 지금도 숨은 비용이 새고 있는 겁니다." />
        <Worries items={[
          [<>물류사에 연락했는데 하루종일 연락이 안 돼서, <b>고객도 잃고 돈도 잃었네요…</b></>, '화장품 판매 사장님'],
          [<>저렴한 단가 보고 선택했는데, 계속 추가비용 말하더니… <b>결국은 더 비싸졌어요.</b></>, '건강기능식품 판매 사장님'],
          [<>오배송 때문에 고객 클레임이 점점 늘어나요. <b>고객 응대하다가 하루가 다 가버려요…</b></>, '생활용품 판매 사장님'],
        ]} />
      </Section>

      <Section id="cost">
        <div className="ledger-grid">
          <div>
            <div className="eyebrow reveal">02 — Hidden Cost</div>
            <h2 className="h1 reveal">제일 저렴한 단가만 보고<br />계약하셨나요?</h2>
            <p className="lead reveal">보이지 않는 비용이 매달 쌓이고 있습니다. 회신 지연으로 놓친 판매 기회, 오배송으로 날린 CS 시간, 소통이 안 돼서 쓴 대표님의 시간까지.</p>
          </div>
          <div className="ledger reveal" role="table" aria-label="월 평균 숨은 비용">
            <div className="ledger-row" role="row"><span role="cell">월 평균 숨은 비용</span><span role="cell">500만 원</span></div>
            {LEDGER.map(([k, v]) => (
              <div key={k} className="ledger-row sub" role="row"><span role="cell">{k}</span><span role="cell">{v}</span></div>
            ))}
            <div className="ledger-row total" role="row"><span role="cell">모두 합치면, 연간</span><span role="cell">6,000만 원+ 손실</span></div>
          </div>
        </div>
      </Section>

      <Section id="results" tint>
        <SectionHead no="03" en="Results" title={<>숫자로 증명된<br />실제 성과</>} lead="20년간 쌓은 운영 데이터가 결과로 이어집니다." />
        <Results items={[
          ['온라인 셀러 A사', '30배 성장', '6개월 만에 월 100건에서 3,000건으로 성장'],
          ['제조사 B사', 'CS 80% 감소', '오배송 최소화를 통해 CS 건수 감소'],
          ['자사몰 C사', '재구매율 35%↑', '정확한 배송을 통해 재구매율 상승'],
        ]} />
        <Stats items={[
          ['숙련된 현장 노하우', 20, '년+', '실무 데이터 기반의 숙련된 전문성'],
          ['검증된 파트너', 200, '개+', '이미 많은 브랜드가 선택한 물류 파트너'],
          ['제로에 가까운 오차율', 0.01, '% 이하', '완벽에 가까운 배송 정확도 구현'],
          ['수치로 증명된 만족도', 99.5, '%', '신뢰로 증명된 압도적 고객 만족도'],
        ]} />
      </Section>

      <Section id="compare">
        <SectionHead no="04" en="Difference" title={<>일반 3PL과<br />어떤 점이 다를까요?</>} lead="물류는 믿고, 매출에만 집중하세요." />
        <Compare
          themTitle="일반 3PL" themSub="숨은 비용 발생"
          them={['오배송으로 인한 재발송 비용', '재고 오류 및 브랜드 이미지 실추', '느린 회신으로 인한 기회 손실', '소통 단절로 인한 대표 개입', '단기 계약 갈아타기 반복']}
          usTitle="친절한 물류씨" usSub="물류는 믿고 매출에만 집중"
          us={[
            ['오배송 발생 시 당일 재발송 + 보상 처리', 'CS 건수 80% 감소'],
            ['전산 100개 = 현장 100개', '재고 불일치 0건, 취소 문자 보낼 일 없음'],
            ['급한 출고 요청도 8분 내 답변', '연 360시간 절약'],
            ['100가지 상품도 재고 오차 0건', '월 100만 원 인건비 절감'],
            ['물량이 늘어나도 걱정 없는 공간', '2,000평 이상 물류 공간 기반으로 지속 확장'],
            ['고객 요구에 맞춘 배송 옵션', '재구매율 35% 상승'],
          ]}
        />
        <div className="banner reveal">
          <figure><img src={IMG + '20260429/c8e1599037d48.jpg'} alt="일산 장항동 물류센터 항공 사진" loading="lazy" /></figure>
          <div className="banner-body">
            <span className="svc-tag">NAVER N배송</span>
            <h2>친절한 물류씨는<br />N배송도 가능합니다.</h2>
            <p>추가 작업 없이 기존 작업 방식 그대로 적용할 수 있습니다.</p>
          </div>
        </div>
      </Section>

      <Section id="day" tint>
        <SectionHead no="05" en="A Day" title={<>일반 3PL vs 친절한 물류씨,<br />대표님의 하루가 달라집니다.</>} lead="하루에 몇 시간을 물류에 쓰고 계신가요?" />
        <div className="day">
          <DayCol title="일반 3PL" sub="하루종일 물류 지옥"
            am={['수동 재고 파악 요청 및 일일이 대조 작업', '출고 리스트 수기 요청 및 반복적인 파일 전송', '재고 불일치 해결을 위한 수차례의 확인 전화', '전날 발주서를 3PL 전용 양식으로 일일이 수정']}
            pm={['출고 중 취소 요청 시 연락 두절 및 처리 거부', '빈번한 오배송으로 인한 고객 클레임 대응', '3PL과의 소통에 치여 본연의 업무 진행 불가']} />
          <DayCol us title="친절한 물류씨" sub="하루 3분이면 물류 고민 해결"
            am={['클릭 한 번으로 모든 주문 자동 취합 및 발주 (10초)', '전산 시스템을 통한 실시간 재고 데이터 동기화', '별도 요청 없이 대시보드에서 실시간 현황 조회']}
            pm={['메신저 한 통으로 출고 중지 및 즉시 환불 처리', '오배송률 0.01% 이하로 배송 관련 CS 제로화', '단순 업무에서 벗어나 마케팅·상품 개발에 전념']} />
        </div>
        <div className="day-sum reveal">
          <p>연간 960시간 절약,<br />숨은 비용 약 6,000만 원 절감.</p>
          <Link className="btn btn-inverse" href="/contact">무료 정밀점검 신청하기 <Arrow /></Link>
        </div>
      </Section>

      <Section id="process">
        <SectionHead no="06" en="Process" title="어떻게 진행되나요?" lead="간단한 절차로 빠르게 시작할 수 있습니다." />
        <Steps items={[
          ['상담', '운영 가능 여부를 빠르게 안내'], ['견적', '운영 방식에 맞춘 맞춤 견적'], ['계약', '조건 확인 후 계약 진행'],
          ['입고', '상품 입고 후 보관 및 재고 등록'], ['출고 준비', '주문 연동 및 재고 확인'],
          ['포장', '검수 후 안전하게 포장'], ['출고', '고객에게 빠르게 배송'],
        ]} />
      </Section>

      <Section id="voices" tint>
        <SectionHead no="07" en="Voices" title={<>함께 성공한<br />대표님들의 목소리</>} lead="지금도 저희 파트너사들은 매달 5%씩 성장하고 있습니다." />
        <Voices items={[
          ['물량이 급증했는데 즉시 대응해주셨어요.', '파트너사 대표님'],
          ['긴급 출고 요청했더니 8분 만에 처리 완료.', '파트너사 대표님'],
          ['파손 걱정했는데 패킹 컨설팅까지 해주셨어요.', 'K사 온라인 스토어'],
        ]} />
      </Section>

      <Section id="values">
        <SectionHead no="08" en="Beyond Logistics" title={<>친절한 물류씨는<br />단순히 물류만 대행하지 않습니다.</>} />
        <Values items={[
          ['숨은 비용 절감', '회신 지연과 오배송을 없앱니다.', '연간 6,000만 원 절감'],
          ['고객 신뢰 회복', '정확한 배송이 고객을 다시 불러옵니다.', '재구매율 35% 상승'],
          ['본업 집중', '물류 걱정 없이 판매와 상품에 집중하세요.', '대표님 시간 연 960시간 확보'],
        ]} />
      </Section>

      <Cta title={<>가격과 운영,<br />모두 만족시키는 3PL.</>}
        sub="복잡한 이관부터 안정적인 출고까지 책임집니다. 이관 프로세스부터 첫 출고까지 책임지고 케어합니다." />
    </>
  );
}

function DayCol({ title, sub, am, pm, us }: { title: string; sub: string; am: string[]; pm: string[]; us?: boolean }) {
  return (
    <div className={us ? 'day-col us reveal' : 'day-col reveal'}>
      <h3>{title}</h3><p className="sub">{sub}</p>
      <dl className="day-block"><dt>AM 오전</dt><dd><ul>{am.map((t) => <li key={t}>{t}</li>)}</ul></dd></dl>
      <dl className="day-block"><dt>PM 오후</dt><dd><ul>{pm.map((t) => <li key={t}>{t}</li>)}</ul></dd></dl>
    </div>
  );
}
