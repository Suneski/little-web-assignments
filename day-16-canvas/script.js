var canvas = document.querySelector('canvas');

// in this situation, 'context' is your 'brush'
var context = canvas.getContext('2d');

// RED OUTLINE SQUARE
// context.strokeStyle = '#F00';
// context.strokeRect(200, 200, 50, 50);

// BARS
// context.fillStyle = '#00F'
// context.fillRect(20, 50, 40, 200);
//
// context.fillStyle = '#0F0'
// context.fillRect(120, 100, 40, 150);
//
// context.fillStyle = '#F00'
// context.fillRect(220, 150, 40, 100);

// context.beginPath();
// context.moveTo(50, 50);
// context.lineTo(200, 60);
// context.lineTo(150, 90);
//
// //for just the line segments
// // context.stroke();
// context.fillStyle = 'green';
// context.fill();

//PACMAN shutting mouth

// var mouthSize = 1;
//
// setInterval(function() {
//   context.beginPath();
//
//   context.fillStyle = 'blue';
//   context.arc(200, 200, 50, mouthSize, (Math.PI * 2) - mouthSize);
//   context.lineTo(200, 200);
//   context.fill();
//
//   mouthSize -= 0.05;
// }, 40);
