// window.onscroll = function() {
//     var box = document.getElementById('special-div');
//     if (window.pageYOffset > 1000) {
//         box.classList.add("bye");
//         console.log('sayonara!')
//     } else {
//         box.classList.remove("bye");
//         console.log('hello!');
//     }
// }


var box = document.getElementById('special-div');
var isHidden = false;

window.addEventListener('scroll', function() {
  if (window.scrollY > 1000 && isHidden === false) {
    // box.classList.add("bye");
    box.style.display = 'none';
    isHidden = true;
  }
  else if (window.scrollY <= 1000 && isHidden === true) {
    // box.classList.remove("bye");
    box.style.display = 'block';
    isHidden = false;
  }
});

window.addEventListener('resize', function () {
  console.log('resizing');
});
