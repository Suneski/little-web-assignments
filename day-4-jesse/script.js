var nav = document.querySelector('nav');
var navHasBackground = false;

window.addEventListener('scroll', function() {
  if (window.scrollY <= 200 && navHasBackground === false) {
    nav.style.backgroundColor = 'transparent';
    navHasBackground = true;
  }
  else if (window.scrollY > 200 && navHasBackground === true) {
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    navHasBackground = false;
  }
});

// IN CLASS METHOD
//
// var nav = document.querySelector('nav');
//
// var navHasBackground = false;
//
// window.addEventListener('scroll', function() {
//   if (window.scrollY > 400 && navHasBackground === false) {
//     nav.classList.add('opaque');
//     navHasBackground = true;
//   }
//   else if (window.scrollY < 400 && navHasBackground === true) {
//     nav.classList.remove('opaque');
//     navHasBackground = false;
//   }
// });
