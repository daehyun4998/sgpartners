const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.main-nav');toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.getElementById('consultForm')?.addEventListener('submit',function(e){e.preventDefault();const v=id=>document.getElementById(id).value.trim();const text=`SG인증파트너스 상담 문의
회사명: ${v('company')}
담당자명: ${v('name')}
연락처: ${v('phone')}
희망 인증: ${v('service')}
문의 내용: ${v('message')}`;location.href='sms:01036844998?body='+encodeURIComponent(text);});