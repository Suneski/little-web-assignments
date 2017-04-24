var button = document.querySelector('button');
var horrible = document.querySelector('select');

button.addEventListener('click', function() {
  if (horrible.value === "one") {
    alert('Yes. Yes he is. Duh.');
  }
  if (horrible.value === "two") {
    alert('Totally. 100%');
  }
  if (horrible.value === "three") {
    alert('You are wrong. Try again');
  }
});
