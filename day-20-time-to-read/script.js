var count = document.querySelector('body').innerHTML.split(' ').length;
var time = Math.round(count / 230);

document.querySelector("#estimated-read-time").innerHTML="(Estimated read time: " + time + ' minutes)';



var social = document.querySelector('.social');

window.addEventListener('scroll', function() {
  console.log(window.scrollY);

  if (window.scrollY >= 620) {
    social.style.display='block';
  }

  else if (window.scrollY < 620) {
    social.style.display='none';
  }

});
