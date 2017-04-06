var nav = document.querySelector('nav');
var teamRocket = document.querySelector('.team-rocket');
var red = document.querySelector('.red')

var topOfPage = true;

window.addEventListener('scroll', function() {
  console.log(window.scrollY);

  if (window.scrollY < 100 && topOfPage === false) {
    nav.style.backgroundColor = 'transparent';
    teamRocket.style.display = 'none';
    topOfPage = true;
  }

  else if (window.scrollY > 100 && window.scrollY <= 800 && topOfPage === true) {
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.41)';
    teamRocket.style.display = 'block';
    red.style.display = 'none';
    topOfPage = false;
  }

  else if (window.scrollY > 800 && topOfPage === false) {
    teamRocket.style.display = 'none';
    red.style.display = 'block';
    topOfPage = true;
  }

  else if (window.scrollY < 800 && topOfPage === true) {
    topOfPage = false;
  }

});
