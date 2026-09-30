document.body.classList.remove('no-js');

// Mobile nav
(function () {
  var nav = document.getElementById('nav');
  var btn = nav.querySelector('.nav-toggle');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  });
  nav.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); });
  });
})();

// Partner logos
(function () {
  var ids = ['79639afd40204','855e721a9dc88','695409c133965','8448eb9a4849a','3369605406233','aa1c09b0f9dfd',
    'a3229c286613c','9db6ca81ec150','4f34b17d9a41a','f7a134e4269f6','7f84026f2161c','1d989a2f0d6dc',
    'f38b438584401','78b84c04ece78','cfd0c44708517','5a865e3f799dd','7a7fea967757d','d2d32a0845361',
    'e556cd9ba0b37','d9abb3876ace3','ede2d8b0d332a','fbb0fd3c09554','21a0ab9cdcea9','73736a8f69bc5'];
  var grid = document.getElementById('logos');
  if (!grid) return;
  grid.innerHTML = ids.map(function (id) {
    return '<div class="logo-cell"><img src="https://cdn.imweb.me/thumbnail/20260416/' + id + '.png" alt="파트너사 로고" loading="lazy"></div>';
  }).join('');
})();

// Contact form — 별도 서버가 없어 메일 앱으로 문의 내용을 채워 보낸다
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = document.getElementById('form-status');

  function mark(el, bad) { el.setAttribute('aria-invalid', bad ? 'true' : 'false'); }
  function say(msg, type) { status.textContent = msg; status.className = 'form-status ' + (type || ''); }

  form.addEventListener('input', function (e) {
    var t = e.target;
    if (t.name === 'agree') mark(t.closest('.agree'), false);
    else if (t.validity && t.validity.valid) mark(t, false);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(form), first = null;
    function check(el, ok, target) {
      mark(target || el, !ok);
      if (!ok && !first) first = el;
    }
    ['name', 'tel', 'email', 'message'].forEach(function (n) {
      var el = form.elements[n];
      check(el, el.validity.valid && !(el.required && !el.value.trim()));
    });
    var agree = form.elements.agree;
    check(agree, agree.checked, agree.closest('.agree'));
    if (first) {
      say('표시된 항목을 확인해주세요.', 'error');
      first.focus();
      return;
    }

    var who = (d.get('company') || '').trim() || d.get('name').trim();
    var body = [
      '[회사명] ' + ((d.get('company') || '').trim() || '-'),
      '[담당자명] ' + d.get('name').trim(),
      '[연락처] ' + d.get('tel').trim(),
      '[이메일] ' + ((d.get('email') || '').trim() || '-'),
      '[월 예상 물량] ' + (d.get('volume') || '-'),
      '',
      '[문의 내용]',
      d.get('message').trim()
    ].join('\n');
    location.href = 'mailto:sales@da-logics.com'
      + '?subject=' + encodeURIComponent('[견적 문의] ' + who)
      + '&body=' + encodeURIComponent(body);
    say('메일 앱에서 작성된 문의를 전송해주세요. 메일 앱이 열리지 않으면 031-912-5595로 전화 주세요.', 'ok');
  });
})();

// Reveal + count-up
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduce) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      e.target.querySelectorAll('[data-target]').forEach(countUp);
      io.unobserve(e.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (el, i) {
    var sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
    el.style.transitionDelay = Math.min(sib, 5) * 80 + 'ms';
    io.observe(el);
  });
  function countUp(el) {
    var to = parseFloat(el.dataset.target), dec = +(el.dataset.decimals || 0), t0 = null, dur = 1600;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (to * eased).toFixed(dec);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
})();
