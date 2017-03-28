var theParagraph = document.querySelector('.the-paragraph');
var pic = document.querySelector('.myImg');

theParagraph.addEventListener('click', function() {
  theParagraph.textContent = "You actually clicked me, you sick, sick individual!";
  pic.classList.add('appear');
});
