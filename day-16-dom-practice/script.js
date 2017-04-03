// alert('hi');

var clickMe = document.querySelector('#click-me');
var countDisplay = document.querySelector('#count-display');


var clickMeTotal = 0;

clickMe.addEventListener('click', function() {

  clickMeTotal++;

  countDisplay.textContent = 'You clicked ' + clickMeTotal + ' times';

  // console.log(clickMeTotal);
  // You clicked 7 times
});


var addToList = document.querySelector('#add-to-list');
var listOfStuff = document.querySelector('#list-of-stuff')


addToList.addEventListener('click', function() {
  // ALTERNATE OPTION
  // var currentHTML = listOfStuff.innerHTML;
  // currentHTML += '<li>steak</li>';
  // listOfStuff.innerHTML = currentHTML;

  var newItem = document.createElement('li');
  newItem.textContent = 'steak';
  newItem.classList.add('tasty');
  listOfStuff.appendChild(newItem);
});







var favoriteFoodsList = document.querySelector('#favorite-foods');
var foods = ['Ramen', 'Takoyaki', 'Steak', 'NOT Tomatoes', 'Apples'];


for (var i = 0; i < foods.length; i++) {

  var newItem = document.createElement('li');

  newItem.textContent = foods[i];

  favoriteFoodsList.appendChild(newItem);
}








// var name = 'David';
// var age = 29;
//
// var name1 = 'Rocky the Cat';
// var age = 6;
//
// var name2 = 'Henry the Cat';
// var age = 2;


// var david = {
//   name: 'David',
//   age: 29
// };
//
// var rocky = {
//   name: 'Rocky the Cat',
//   age: 6
// };
//
// var henry = {
//   name: 'Henry the Cat',
//   age: 3
// };


// var people = [
//   {
//     name: 'David',
//     age: 29
//   },
//   {
//     name: 'Rocky the Cat',
//     age: 6
//   },
//   {
//     name: 'Henry the Cat',
//     age: 3
//   }
// ];
//
// for (var i = 0; i < people.length; i++) {
//
//   var person = people[i];
//   console.log(person.name);
//
//   // console.log(people[i].name);
//
// }








// 1. Put the name of each book in a list item on the page.


var books = [
  {
    name: "Intelligent Person's Guide to Mud",
    author: "Frank Lyn",
    pageCount: 60
  },
  {
    name: 'Tao of Steak',
    author: 'Eric Sowell',
    pageCount: 135
  },
  {
    name: 'Books are Great',
    author: 'Guy Pants',
    pageCount: 190
  },
  {
    name: 'How to be a Sucker',
    author: 'Frank Lyn',
    pageCount: 83
  }
];



var booksList = document.querySelector('#books');
var pageTotal = 0;

for (var i = 0; i < books.length; i++) {

  var newList = document.createElement('li');

  newList.textContent = books[i].name + ' (' + books[i].author + ' - ' + books[i].pageCount + ' pages)';

  booksList.appendChild(newList);

  pageTotal += books[i].pageCount;
}





var pageAvg = pageTotal / books.length;
console.log(pageAvg);


var avgPages = document.querySelector('#avg-pages');

avgPages.textContent = 'Average number of pages: ' + pageAvg;
