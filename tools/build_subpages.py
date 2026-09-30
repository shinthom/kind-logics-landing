"""index.html의 head/header/footer를 재사용해 3PL.html, DM.html을 생성합니다."""
import re, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
idx = (root / 'index.html').read_text()

head = idx[:idx.index('<body')]
header = idx[idx.index('<header'):idx.index('</header>') + len('</header>')]
footer = idx[idx.index('<footer'):]
IMG = 'https://cdn.imweb.me/thumbnail/'
ARROW = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M2 8h12M9 3l5 5-5 5"/></svg>'


def page_head(title, desc):
    h = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', head)
    h = re.sub(r'(<meta name="description" content=")[^"]*', r'\g<1>' + desc, h)
    h = re.sub(r'(<meta property="og:title" content=")[^"]*', r'\g<1>' + title, h)
    return h


def nav(current):
    return header.replace(f'<a class="nav-link" href="{current}">', f'<a class="nav-link" href="{current}" aria-current="page">')


def head_block(no, en, title, lead=''):
    lead_html = f'<p class="lead reveal">{lead}</p>' if lead else '<span></span>'
    return f'''      <div class="section-head">
        <div>
          <div class="eyebrow reveal">{no} — {en}</div>
          <h2 class="h1 reveal">{title}</h2>
        </div>
        {lead_html}
      </div>'''


def section(id_, body, tint=False):
    # 서비스 페이지는 흰 띠(tint)와 기본 배경을 번갈아 써서 구획을 나눈다
    cls = 'section section--tint' if tint else 'section'
    return f'''  <section class="{cls}" id="{id_}">
    <div class="wrap">
{body}
    </div>
  </section>
'''


def hero(eyebrow, title, sub, primary, img, alt, facts):
    dl = ''.join(f'<div><dt>{k}</dt><dd>{v}</dd></div>' for k, v in facts)
    return f'''  <section class="page-hero svc-hero">
    <div class="wrap page-hero-grid">
      <div>
        <div class="eyebrow reveal">{eyebrow}</div>
        <h1 class="display reveal">{title}</h1>
        <p class="hero-sub reveal">{sub}</p>
        <div class="hero-actions reveal">
          <a class="btn btn-primary" href="contact.html">{primary} {ARROW}</a>
          <a class="btn btn-secondary" href="#compare">차이점 살펴보기</a>
        </div>
      </div>
      <figure class="reveal"><img src="{IMG}{img}" alt="{alt}"></figure>
    </div>
    <div class="wrap">
      <dl class="hero-facts reveal">{dl}</dl>
    </div>
  </section>
'''


def worries(items):
    return '<div class="worries">' + ''.join(
        f'<figure class="worry reveal"><p>{q}</p><span>{who}</span></figure>' for q, who in items) + '</div>'


def stats(items):
    out = []
    for label, num, unit, desc in items:
        if isinstance(num, str) and not num[0].isdigit():
            n = num
        else:
            dec = len(str(num).split('.')[1]) if '.' in str(num) else 0
            dec_attr = f' data-decimals="{dec}"' if dec else ''
            n = f'<span data-target="{num}"{dec_attr}>{num}</span>'
        u = f'<small>{unit}</small>' if unit else ''
        out.append(f'<div class="stat reveal"><div class="stat-label">{label}</div><div class="stat-num">{n}{u}</div><p>{desc}</p></div>')
    return '<div class="stats">' + ''.join(out) + '</div>'


def results(items):
    return '<div class="results">' + ''.join(
        f'<div class="result reveal"><div class="result-who">{who}</div><div class="result-num">{num}</div><p>{desc}</p></div>' for who, num, desc in items) + '</div>'


def compare(them_title, them_sub, them, us_title, us_sub, us):
    li_them = ''.join(f'<li><span>{t}</span></li>' for t in them)
    li_us = ''.join(f'<li><span><b>{t}</b><small>{d}</small></span></li>' for t, d in us)
    return f'''<div class="compare reveal">
        <div class="compare-col"><h3>{them_title}</h3><p class="sub">{them_sub}</p><ul>{li_them}</ul></div>
        <div class="compare-col us"><h3>{us_title}</h3><p class="sub">{us_sub}</p><ul>{li_us}</ul></div>
      </div>'''


def steps(items):
    lis = ''.join(f'<li><b>{t}</b><span>{d}</span></li>' for t, d in items)
    return f'<ol class="steps reveal" style="--steps:{len(items)}">{lis}</ol>'


def voices(items):
    return '<div class="voices">' + ''.join(
        f'<figure class="voice-card reveal"><p>{q}</p><span>{who}</span></figure>' for q, who in items) + '</div>'


def values(items):
    cells = ''.join(f'<div class="value reveal"><h3>{t}</h3><p>{d}</p><strong>{r}</strong></div>' for t, d, r in items)
    return f'<div class="values" style="--cols:{len(items)}">{cells}</div>'


def cta(title, sub):
    return f'''  <section class="cta" id="contact">
    <div class="wrap cta-grid">
      <div>
        <div class="eyebrow reveal">지금 바로 무료로 견적 문의하세요</div>
        <h2 class="reveal">{title}</h2>
        <p class="reveal">{sub}</p>
      </div>
      <div class="cta-actions reveal">
        <span class="cta-hours">고객문의 · 연중무휴 09:00 – 18:00</span>
        <a class="cta-tel" href="tel:031-912-5595">031-912-5595</a>
        <a class="btn btn-inverse" href="contact.html">내 조건에 맞는 견적 받아보기 {ARROW}</a>
      </div>
    </div>
  </section>
'''


def build(fname, title, desc, current, main):
    html =page_head(title, desc) + '<body class="no-js">\n\n' + nav(current) + '\n\n<main>\n' + main + '</main>\n\n' + footer
    (root / fname).write_text(html)


# ---------------- 3PL ----------------
m = hero('3PL · 풀필먼트', '문제는 가격이 아니라,<br><em>믿고 맡길 수 있는가</em>입니다.',
         '저렴하다고 덜컥 계약했다가, 불안했던 적 없으신가요? 친절한 물류씨는 단가가 아닌 운영으로 증명합니다.',
         '무료 정밀점검 신청하기', '20260429/0700dcce89a10.jpg', '완충재로 상품을 꼼꼼하게 포장하는 모습', [
             ('오배송률', '0.01% 이하'), ('긴급 출고 회신', '8분 이내'), ('물류 공간', '2,000평+'), ('고객 만족도', '99.5%')])
m += section('worries', head_block('01', 'Pain Points', '혹시 이런 경험,<br>있으신가요?',
                                   '이 중 하나라도 해당된다면, 지금도 숨은 비용이 새고 있는 겁니다.') + worries([
    ('물류사에 연락했는데 하루종일 연락이 안 돼서, <b>고객도 잃고 돈도 잃었네요…</b>', '화장품 판매 사장님'),
    ('저렴한 단가 보고 선택했는데, 계속 추가비용 말하더니… <b>결국은 더 비싸졌어요.</b>', '건강기능식품 판매 사장님'),
    ('오배송 때문에 고객 클레임이 점점 늘어나요. <b>고객 응대하다가 하루가 다 가버려요…</b>', '생활용품 판매 사장님'),
]), tint=True)
m += section('cost', '''      <div class="ledger-grid">
        <div>
          <div class="eyebrow reveal">02 — Hidden Cost</div>
          <h2 class="h1 reveal">제일 저렴한 단가만 보고<br>계약하셨나요?</h2>
          <p class="lead reveal">보이지 않는 비용이 매달 쌓이고 있습니다. 회신 지연으로 놓친 판매 기회, 오배송으로 날린 CS 시간, 소통이 안 돼서 쓴 대표님의 시간까지.</p>
        </div>
        <div class="ledger reveal" role="table" aria-label="월 평균 숨은 비용">
          <div class="ledger-row" role="row"><span role="cell">월 평균 숨은 비용</span><span role="cell">500만 원</span></div>
          <div class="ledger-row sub" role="row"><span role="cell">회신 지연</span><span role="cell">−200만 원</span></div>
          <div class="ledger-row sub" role="row"><span role="cell">오배송 재발송</span><span role="cell">−100만 원</span></div>
          <div class="ledger-row sub" role="row"><span role="cell">대표 시간 낭비</span><span role="cell">−150만 원</span></div>
          <div class="ledger-row sub" role="row"><span role="cell">고객 이탈</span><span role="cell">−50만 원</span></div>
          <div class="ledger-row total" role="row"><span role="cell">모두 합치면, 연간</span><span role="cell">6,000만 원+ 손실</span></div>
        </div>
      </div>''')
m += section('results', head_block('03', 'Results', '숫자로 증명된<br>실제 성과', '20년간 쌓은 운영 데이터가 결과로 이어집니다.') + results([
    ('온라인 셀러 A사', '30배 성장', '6개월 만에 월 100건에서 3,000건으로 성장'),
    ('제조사 B사', 'CS 80% 감소', '오배송 최소화를 통해 CS 건수 감소'),
    ('자사몰 C사', '재구매율 35%↑', '정확한 배송을 통해 재구매율 상승'),
]) + stats([
    ('숙련된 현장 노하우', 20, '년+', '실무 데이터 기반의 숙련된 전문성'),
    ('검증된 파트너', 200, '개+', '이미 많은 브랜드가 선택한 물류 파트너'),
    ('제로에 가까운 오차율', 0.01, '% 이하', '완벽에 가까운 배송 정확도 구현'),
    ('수치로 증명된 만족도', 99.5, '%', '신뢰로 증명된 압도적 고객 만족도'),
]), tint=True)
m += section('compare', head_block('04', 'Difference', '일반 3PL과<br>어떤 점이 다를까요?', '물류는 믿고, 매출에만 집중하세요.') + compare(
    '일반 3PL', '숨은 비용 발생', [
        '오배송으로 인한 재발송 비용', '재고 오류 및 브랜드 이미지 실추', '느린 회신으로 인한 기회 손실',
        '소통 단절로 인한 대표 개입', '단기 계약 갈아타기 반복'],
    '친절한 물류씨', '물류는 믿고 매출에만 집중', [
        ('오배송 발생 시 당일 재발송 + 보상 처리', 'CS 건수 80% 감소'),
        ('전산 100개 = 현장 100개', '재고 불일치 0건, 취소 문자 보낼 일 없음'),
        ('급한 출고 요청도 8분 내 답변', '연 360시간 절약'),
        ('100가지 상품도 재고 오차 0건', '월 100만 원 인건비 절감'),
        ('물량이 늘어나도 걱정 없는 공간', '2,000평 이상 물류 공간 기반으로 지속 확장'),
        ('고객 요구에 맞춘 배송 옵션', '재구매율 35% 상승'),
    ]) + f'''
      <div class="banner reveal">
        <figure><img src="{IMG}20260429/c8e1599037d48.jpg" alt="일산 장항동 물류센터 항공 사진" loading="lazy"></figure>
        <div class="banner-body">
          <span class="svc-tag">NAVER N배송</span>
          <h2>친절한 물류씨는<br>N배송도 가능합니다.</h2>
          <p>추가 작업 없이 기존 작업 방식 그대로 적용할 수 있습니다.</p>
        </div>
      </div>''')
m += section('day', head_block('05', 'A Day', '일반 3PL vs 친절한 물류씨,<br>대표님의 하루가 달라집니다.', '하루에 몇 시간을 물류에 쓰고 계신가요?') + f'''
      <div class="day">
        <div class="day-col reveal">
          <h3>일반 3PL</h3><p class="sub">하루종일 물류 지옥</p>
          <dl class="day-block"><dt>AM 오전</dt><dd><ul>
            <li>수동 재고 파악 요청 및 일일이 대조 작업</li>
            <li>출고 리스트 수기 요청 및 반복적인 파일 전송</li>
            <li>재고 불일치 해결을 위한 수차례의 확인 전화</li>
            <li>전날 발주서를 3PL 전용 양식으로 일일이 수정</li></ul></dd></dl>
          <dl class="day-block"><dt>PM 오후</dt><dd><ul>
            <li>출고 중 취소 요청 시 연락 두절 및 처리 거부</li>
            <li>빈번한 오배송으로 인한 고객 클레임 대응</li>
            <li>3PL과의 소통에 치여 본연의 업무 진행 불가</li></ul></dd></dl>
        </div>
        <div class="day-col us reveal">
          <h3>친절한 물류씨</h3><p class="sub">하루 3분이면 물류 고민 해결</p>
          <dl class="day-block"><dt>AM 오전</dt><dd><ul>
            <li>클릭 한 번으로 모든 주문 자동 취합 및 발주 (10초)</li>
            <li>전산 시스템을 통한 실시간 재고 데이터 동기화</li>
            <li>별도 요청 없이 대시보드에서 실시간 현황 조회</li></ul></dd></dl>
          <dl class="day-block"><dt>PM 오후</dt><dd><ul>
            <li>메신저 한 통으로 출고 중지 및 즉시 환불 처리</li>
            <li>오배송률 0.01% 이하로 배송 관련 CS 제로화</li>
            <li>단순 업무에서 벗어나 마케팅·상품 개발에 전념</li></ul></dd></dl>
        </div>
      </div>
      <div class="day-sum reveal">
        <p>연간 960시간 절약,<br>숨은 비용 약 6,000만 원 절감.</p>
        <a class="btn btn-inverse" href="contact.html">무료 정밀점검 신청하기 {ARROW}</a>
      </div>''', tint=True)
m += section('process', head_block('06', 'Process', '어떻게 진행되나요?', '간단한 절차로 빠르게 시작할 수 있습니다.') + steps([
    ('상담', '운영 가능 여부를 빠르게 안내'), ('견적', '운영 방식에 맞춘 맞춤 견적'), ('계약', '조건 확인 후 계약 진행'),
    ('입고', '상품 입고 후 보관 및 재고 등록'), ('출고 준비', '주문 연동 및 재고 확인'),
    ('포장', '검수 후 안전하게 포장'), ('출고', '고객에게 빠르게 배송')]))
m += section('voices', head_block('07', 'Voices', '함께 성공한<br>대표님들의 목소리', '지금도 저희 파트너사들은 매달 5%씩 성장하고 있습니다.') + voices([
    ('물량이 급증했는데 즉시 대응해주셨어요.', '파트너사 대표님'),
    ('긴급 출고 요청했더니 8분 만에 처리 완료.', '파트너사 대표님'),
    ('파손 걱정했는데 패킹 컨설팅까지 해주셨어요.', 'K사 온라인 스토어'),
]), tint=True)
m += section('values', head_block('08', 'Beyond Logistics', '친절한 물류씨는<br>단순히 물류만 대행하지 않습니다.') + values([
    ('숨은 비용 절감', '회신 지연과 오배송을 없앱니다.', '연간 6,000만 원 절감'),
    ('고객 신뢰 회복', '정확한 배송이 고객을 다시 불러옵니다.', '재구매율 35% 상승'),
    ('본업 집중', '물류 걱정 없이 판매와 상품에 집중하세요.', '대표님 시간 연 960시간 확보'),
]))
m += cta('가격과 운영,<br>모두 만족시키는 3PL.', '복잡한 이관부터 안정적인 출고까지 책임집니다. 이관 프로세스부터 첫 출고까지 책임지고 케어합니다.')
build('3PL.html', '3PL 풀필먼트 | 친절한 물류씨',
      '문제는 가격이 아니라, 믿고 맡길 수 있는가입니다. 오배송 당일 재발송, 8분 내 회신, 2,000평 이상 인프라의 친절한 물류씨 3PL.',
      '3PL.html', m)

# ---------------- DM ----------------
m = hero('DM · 우편 발송', 'DM 발송,<br>단 1건의 실수도<br><em>용납하지 않습니다.</em>',
         '20년 노하우로 정확하고 빠르게, 개인정보는 안전하게. 데이터 검수부터 발송 후 파기까지 완벽하게 해결해드립니다.',
         '견적 문의하기', '20260429/d8ea6ea8e7f1b.jpeg', 'DM 인쇄물을 검수하는 모습', [
             ('평균 오류율', '0.03%'), ('발송', '요청 당일'), ('개인정보 폐기', '24시간 이내'), ('작년 발송', '200만 건+')])
m += section('worries', head_block('01', 'Concerns', '혹시 이런 걱정,<br>하고 계신가요?',
                                   '이 중 하나라도 공감되신다면, 저희가 해결해드리겠습니다.') + worries([
    ('주소가 틀려서 반송되지 않을까? <b>책임 문제가 생기면 어떡하지?</b>', '협회 사무국 담당자'),
    ('나중에 추가 비용이 나오면? <b>예산을 초과하면 어떡하지…</b>', '기업 마케팅 담당자'),
    ('개인정보 유출로 나중에 <b>내가 법적 책임을 지면 어떡하지?</b>', '국회의원실 보좌관'),
]), tint=True)
m += section('results', head_block('02', 'Results', '20년의 노하우가<br>만든 결과입니다.', '대량 발송에서도 흔들리지 않는 정확도로 증명합니다.') + results([
    ('A협회 · 50만 건 대량 발송', '오류율 0.03%', '대량 발송에서도 오류율 최소화'),
    ('B조합 · 10만 건 발송', '클레임 0건', '10만 건 발송 중 클레임 제로 달성'),
    ('C기업', '지속 재계약', '지속적인 재계약으로 검증된 파트너십'),
]) + stats([
    ('DM 전문 경력', 20, '년+', '20년 이상의 숙련된 DM 전문 경력'),
    ('작년 발송 건수', 200, '만+', '대규모 물량도 안정적으로 처리'),
    ('평균 오류율', 0.03, '%', '제로에 가까운 정확도'),
    ('신속한 배송 시스템', '빠른출고', '', '지연 없이 처리되는 출고 시스템'),
]))
m += section('compare', head_block('03', 'Difference', '일반 DM 업체가 놓치는 것,<br>전부 체크합니다.', '담당자님은 결과만 확인하세요. 나머지는 저희가 챙깁니다.') + compare(
    '일반 DM 업체', '담당자의 불안이 커지는 이유', [
        '데이터 검수 안 함 → 오발송', '발송 지연 → 납기 못 맞춤', '개인정보 방치 → 유출 위험',
        '인쇄제작 어려움 → 업체 찾기 힘듦', '담당자 방치 → 불안감 증폭', '추가 비용 → 예산 초과'],
    '친절한 물류씨', '담당자의 부담은 줄이고, 운영은 안정적으로', [
        ('3단계 데이터 검수 (오류율 0.03%)', '주소·우편번호·이름 3중 체크 → 오발송 거의 0건'),
        ('요청 즉시 빠른 발송 (당일 처리)', '급한 납기도 OK → 납기일 걱정 끝'),
        ('개인정보 즉시 폐기 (24시간 내)', '개인정보보호법 준수, 폐기 증명서 제공 → 법적 위험 최소화'),
        ('인쇄제작 원스톱 (협력사 네트워크)', '인쇄업체 찾기부터 조정까지 → 업체 찾기 스트레스 제로'),
        ('담당자 밀착 케어 (실시간 공유)', '모르는 부분은 바로 안내 → 상사 보고용 자료 제공'),
        ('예산에 따른 최적 견적 제안', '운영 조건을 고려한 합리적 설계 → 불필요한 비용 없음'),
    ]), tint=True)
m += section('voices', head_block('04', 'Voices', '담당자 만족도<br>9.5점 <span class="h1-unit">/ 10점</span>', '친절한 물류씨와 함께한 실제 담당자님들의 이야기입니다.') + voices([
    ('정말 꼼꼼하게 체크해주셔서 놀랐어요.', 'DM 발송 담당자'),
    ('촉박한 일정도 맞춰주셔서 살았어요.', 'DM 발송 담당자'),
    ('예산 안에서 해결해서 다행이에요.', 'DM 발송 담당자'),
]))
m += section('values', head_block('05', 'Beyond Logistics', '친절한 물류씨는<br>단순히 발송만 대행하지 않습니다.') + values([
    ('정확도 보장', '3단계 정밀 검수 시스템', '오류율 0.03% 미만'),
    ('빠른 발송', '원하시는 일정에 맞춘 진행', '납기 지연 걱정 끝'),
    ('개인정보 안전', '발송 후 즉시 폐기 및 증명', '법적 리스크 최소화'),
    ('비용 절감', '불필요한 비용을 줄이는 견적 설계', '최소 비용, 최대 효과'),
]), tint=True)
m += section('process', head_block('06', 'Process', '처음부터 끝까지<br>함께 진행합니다.', '엑셀·CSV 파일만 보내주세요. 나머지는 저희가 처리합니다.') + steps([
    ('데이터 접수', '엑셀·CSV 파일만 보내주시면 됩니다'),
    ('3단계 검수', '주소·우편번호·이름 자동 검출, 오류 시 미리 안내'),
    ('정밀 발송', '출고 전 과정을 꼼꼼히 확인해 안정적으로 발송'),
    ('정보 폐기', '발송 즉시 데이터 완전 삭제, 폐기 증명서 제공')]))
m += cta('지금 DM 담당 중이지만<br>불안하신가요?', '담당자의 부담을 줄이고, 운영은 더 안정적으로 만듭니다. 처음부터 끝까지 책임지고 케어합니다.')
build('DM.html', 'DM 발송 | 친절한 물류씨',
      'DM 발송, 단 1건의 실수도 용납하지 않습니다. 3단계 데이터 검수, 당일 발송, 24시간 내 개인정보 폐기까지 20년 노하우의 친절한 물류씨.',
      'DM.html', m)

# ---------------- 문의하기 ----------------
m = '''  <section class="page-hero contact">
    <div class="wrap">
      <nav class="crumb reveal" aria-label="현재 위치"><a href="index.html">홈</a><span>/</span><span>문의하기</span></nav>
      <div class="contact-grid">
        <div class="contact-intro">
          <div class="eyebrow reveal">Contact · 무료 견적 문의</div>
          <h1 class="display reveal">운영 조건만 알려주세요.<br><em>맞춤 견적</em>을 드립니다.</h1>
          <p class="hero-sub reveal">남겨주신 내용을 확인한 뒤 담당자가 영업일 기준 당일 연락드립니다. 급하신 경우 대표번호로 바로 전화 주세요.</p>
          <dl class="contact-direct reveal">
            <div><dt>대표번호</dt><dd><a href="tel:031-912-5595">031-912-5595</a></dd></div>
            <div><dt>이메일</dt><dd><a href="mailto:sales@da-logics.com">sales@da-logics.com</a></dd></div>
            <div><dt>고객문의</dt><dd>연중무휴 09:00 – 18:00</dd></div>
            <div><dt>물류센터</dt><dd>일산 장항동 · 2,000평 이상</dd></div>
          </dl>
        </div>
        <form class="contact-form reveal" id="contact-form" novalidate>
          <div class="field-row">
            <div class="field">
              <label class="field-label" for="f-company">회사명</label>
              <input class="input" id="f-company" name="company" type="text" autocomplete="organization">
            </div>
            <div class="field">
              <label class="field-label" for="f-name">담당자명 <b aria-hidden="true">*</b></label>
              <input class="input" id="f-name" name="name" type="text" autocomplete="name" required>
            </div>
          </div>
          <div class="field-row">
            <div class="field">
              <label class="field-label" for="f-tel">연락처 <b aria-hidden="true">*</b></label>
              <input class="input" id="f-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" placeholder="010-0000-0000" required pattern="[0-9\\-\\s]{9,14}">
            </div>
            <div class="field">
              <label class="field-label" for="f-email">이메일</label>
              <input class="input" id="f-email" name="email" type="email" autocomplete="email" placeholder="name@company.com">
            </div>
          </div>
          <div class="field">
            <label class="field-label" for="f-volume">월 예상 물량</label>
            <select class="input" id="f-volume" name="volume">
              <option value="">선택해주세요</option>
              <option>1,000건 미만</option>
              <option>1,000 – 5,000건</option>
              <option>5,000 – 30,000건</option>
              <option>30,000건 이상</option>
              <option>잘 모르겠어요</option>
            </select>
          </div>
          <div class="field">
            <label class="field-label" for="f-message">문의 내용 <b aria-hidden="true">*</b></label>
            <textarea class="input" id="f-message" name="message" rows="6" required placeholder="취급 상품, 현재 물류 방식, 희망 시작일 등을 자유롭게 적어주세요."></textarea>
          </div>
          <label class="agree">
            <input type="checkbox" name="agree" required>
            <span>개인정보 수집·이용에 동의합니다. <small>수집 항목: 회사명, 담당자명, 연락처, 이메일 · 목적: 견적 상담 · 보유 기간: 상담 완료 후 1년</small></span>
          </label>
          <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
          <button class="btn btn-primary form-submit" type="submit">문의 보내기 ''' + ARROW + '''</button>
        </form>
      </div>
    </div>
  </section>
'''
build('contact.html', '문의하기 | 친절한 물류씨',
      '3PL 풀필먼트, DM 발송 무료 견적 문의. 운영 조건을 남겨주시면 담당자가 당일 연락드립니다. 대표번호 031-912-5595.',
      'contact.html', m)
print('built')
