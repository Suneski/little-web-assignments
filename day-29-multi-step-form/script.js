var firstPage = document.querySelector('#page-1');
var secondPage = document.querySelector('#page-2');
var thirdPage = document.querySelector('#page-3');


var firstNameInput = document.querySelector('#first-name');
var lastNameInput = document.querySelector('#last-name');

var nextButtonOne = document.querySelector('#next-page-one');

var previousPage2 = document.querySelector('#previous-page-two');
var nextPage2 = document.querySelector('#next-page-two');

var previousPage3 = document.querySelector('#previous-page-three');

var submit = document.querySelector('#submit');



// PAGE 1




var firstName = localStorage.getItem('first-name');
firstNameInput.value = firstName;

var lastName = localStorage.getItem('last-name');
lastNameInput.value = lastName;


firstNameInput.addEventListener('keyup', function() {
  localStorage.setItem('first-name', firstNameInput.value);
});

lastNameInput.addEventListener('keyup', function() {
  localStorage.setItem('last-name', lastNameInput.value);
});







nextButtonOne.addEventListener('click', function(evt) {
  evt.preventDefault();

  if (firstNameInput.value === '' || lastNameInput.value === '') {
    alert("ERROR! Please include both first AND last name!");
  }
  else {
    firstPage.style.display = "none";
    secondPage.style.display = "block";

    if(selectedAge === "0 - 20") {
      zeroToTwenty.checked = true;
    }
    if(selectedAge === "21 - 40") {
      twentyOneToForty.checked = true;
    }
    if(selectedAge === "41+") {
      fortyPlus.checked = true;
    }
  }


});

// PAGE 2


var selectedAge = localStorage.getItem('ageRange');
var ageOptions = document.querySelector('#age-options')

var ageRadio = document.querySelector('.age-radio');
var zeroToTwenty = document.querySelector('#zeroToTwenty');
var twentyOneToForty = document.querySelector('#twentyOneToForty');
var fortyPlus = document.querySelector('#fortyPlus');

$(document).ready(function(){
    $('input[type=radio]').click(function(){
      localStorage.setItem('ageRange', this.value);
    });
});





previousPage2.addEventListener('click', function(evt) {
  evt.preventDefault();

  firstPage.style.display = "block";
  secondPage.style.display = "none";

});

nextPage2.addEventListener('click', function(evt) {
  evt.preventDefault();

  // var age1=document.querySelector('#zeroToTwenty');
  // var age2=document.querySelector('#twentyOneToForty');
  // var age3=document.querySelector('#fortyPlus');
  //
  //
  // if(age1.checked || age2.checked || age3.checked) {
  //   secondPage.style.display = "none";
  //   thirdPage.style.display = "block";
  // }
  // else {
  //   alert('ERROR! Please select your age range!');
  // }

  var IsChecked = $('.age-radio').is(':checked');

  if(IsChecked) {
    secondPage.style.display = "none";
    thirdPage.style.display = "block";
  }
  else {
    alert('ERROR! Please select your age range!');
  }

});







// PAGE 3

var select = document.querySelector('select');

var occupation = localStorage.getItem('occupation');
select.value = occupation;

select.addEventListener('change', function(evt) {
  localStorage.setItem('occupation', select.value);
});

previousPage3.addEventListener('click', function(evt) {
  evt.preventDefault();

  secondPage.style.display = "block";
  thirdPage.style.display = "none";

});
