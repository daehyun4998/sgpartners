
const btn=document.querySelector('.menu-btn'),menu=document.querySelector('.menu');
if(btn&&menu){btn.addEventListener('click',()=>menu.classList.toggle('open'));menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')))}
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
function submitForm(e){
  e.preventDefault();
  const f=e.target;
  alert(`[SG인증파트너스 상담 내용]\n기업명: ${f.company.value}\n연락처: ${f.phone.value}\n관심 서비스: ${f.service.value}\n문의내용: ${f.message.value||'없음'}\n\n확인을 누른 뒤 010-3684-4998로 전화해 주세요.`);
  return false;
}
