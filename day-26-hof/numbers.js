
var numbers = [1, 56, 89, 12, 45, 211, 45, 56, 32];

// OLD SCHOOL LOOPING

// function loopAndConsoleLog(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// loopAndConsoleLog(numbers)



//Or, you can use the forEach function on arrays to do that

// numbers.forEach(function(num) {
//   console.log(num);
// });





// This is how you make forEach

// function forEvery(arr, func) {
//   for (var i = 0; i < arr.length; i++) {
//     func(arr[i]);
//   }
// }
//
//
// forEvery(numbers, function(num) {
//   console.log(num);
// });
//
// forEvery(['Bob', 'Frank'], function(name) {
//   console.log('Hi', name);
// });




// All the numbers over 50

// OLD WAY
// var output = [];
// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 50) {
//     output.push(numbers[i]);
//   }
// }
// console.log(output);


// FOR EACH
// numbers.forEach(function(num) {
//   if (num > 50) {
//     console.log(num);
//   }
// });


// SHORT FILTER

// var output = numbers.filter(function(num) {
//   return num > 50;
// });
//
// console.log(output);




// MAPPING

// var bigger = numbers.map(function(x) {
//   return x + 100;
// });
//
// console.log('Bigger', bigger);
//
// var lis = numbers.map(function(x) {
//   return '<li>' + x + '<li>';
// });
//
// console.log(lis);


// SORT

// var count = 0;
//
// numbers.sort(function(a, b) {
//   count += 1;
//
//   if (a > b) {
//     return true;
//   }
//   else {
//     return false;
//   }
// });
//
//
// console.log(numbers);
//
// console.log(count);
