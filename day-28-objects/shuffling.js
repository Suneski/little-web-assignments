var nums = [1, 18, 9, 14, 5];
var strs = ['Rem', 'Ram', 'Ami', 'Hinata', 'Vignette']

// var shuffled = [];
// var totalCount = num.length;
//
// while (num.length > 0) {
//   var randomNumber = Math.floor(Math.random() * num.length);
//
//   shuffled.push(num[randomNumber]);
//   num.splice(randomNumber, 1);
// };
//
// console.log('shuffled', shuffled);


// Array.prototype.shuffle = function() {
//   console.log('You called shuffle LOL', this);
// }

Array.prototype.shuffle = function() {
  // console.log('what about here', this);

  var copy = this.slice(0);
  var shuffled = [];

  while (nums.length > 0) {
    var randomNumber = Math.floor(Math.random() * nums.length);

    shuffled.push(nums[randomNumber]);
    nums.splice(randomNumber, 1);
  }

  return shuffled;
};

var shuffled = nums.shuffle();
// console.log('shuffled', shuffled);

var shuffledStrings = strs.shuffle();
// console.log('shuffled strings', shuffledStrings);









function Animal(name) {
  this.name = name;
}

Animal.prototype.makeNoise = function() {
  console.log(this.name + ' meows "feed me!!"');
}

Animal.prototype.breath = function() {
  console.log(this.name + ' is breathing.');
}

function Cat(name) {
  this.name = name;
}

Cat.prototype = new Animal();


function Dog(name) {
  this.name = name;
}

Dog.prototype = new Animal();

Dog.prototype.makeNoise = function() {
  console.log(this.name + ' goes woof.');
}









var rocky = new Cat('Rocky');
rocky.makeNoise();
rocky.breath();




var spot = new Dog('Spot');
spot.makeNoise();

var henry = new Cat('Henry');
henry.makeNoise();
