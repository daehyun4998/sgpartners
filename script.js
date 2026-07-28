
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('open'));
});
