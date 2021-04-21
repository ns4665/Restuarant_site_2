
window.addEventListener('scroll', function(){
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
  
  const gotop = document.querySelector('.go-top');
  gotop.classList.toggle("active", window.scrollY > 500);
});

function toggleMenu(){
  const menuToggle = document.querySelector('.menuToggle');
  const nav =  document.querySelector('.nav');
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
}
