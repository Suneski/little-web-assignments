var nav = document.querySelector('nav');
var topOfPage = true;

window.addEventListener('scroll', function() {
  if (window.scrollY > 200) {
    nav.style.backgroundColor = 'green';
    topOfPage = false;
  }
  else if (window.scrollY <= 200) {
    nav.style.backgroundColor = 'blue';
    topOfPage = true;
  }
});
