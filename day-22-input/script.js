// ARRAY
var foods = [
  'takoyaki',
  'ramen',
  'steak',
  'pupusas',
  'seaweed',
  'chocolate chip cookies',
  'melted cheese',
  'rice crackers',
  'pistachio ice cream',
  'samoas',
  'peanut butter'
];

// FIND INPUT IN HTML
var input = document.querySelector('#query');

// FIND OL IN HTML
var foodListOL = document.querySelector('#food-list');

// RUN createList function on initial array (foods)
createList(foods);

// SET UP EVENT LISTENER IN INPUT BOX.
input.addEventListener('keyup', function(evt) {

  //IF STATEMENT. IF ANYTHING OTHER THAN 'ENTER' IS PRESSED, HOP OUT OF FUNCTION
  if (evt.keyCode !== 13) {
    return;
  }

  // CREATE A NEW BLANK ARRAY
  var newList = [];

  // DEPENDING ON WHAT HAS BEEN ENTERED INTO INPUT BOX, PUSH THOSE CHARACTERS INTO NEW ARRAY (newList)
  for (var i = 0; i < foods.length; i++) {

    // CREATE VARIABLE FOR DETERMINING IF LETTER IS IN STRING
    var containsLetter = foods[i].indexOf(input.value) > -1;

    // IF LETTER IS IN STRING, PUSH TO NEW ARRAY (newList)
    if (containsLetter) {
      newList.push(foods[i]);
    }
  }

  // REMOVE OLD ARRAY FROM SCREEN (foodListOL, aka 'full list')
  foodListOL.innerHTML = '';

  // ADD NEW LIST (aka isolated item(s))
  createList(newList);
});



// DEFINE FUNCTION (createList)
function createList(arr) {

  // FOR LOOP, LOOP THROUGH ARRAY
  for (var i = 0; i < arr.length; i++) {

    // CREATE LI
    var li = document.createElement('li');
    // ADD ARR[i] STRING TO LI
    li.textContent = arr[i];
    // APPEND NEW LI TO OL
    foodListOL.appendChild(li);
  }
}
