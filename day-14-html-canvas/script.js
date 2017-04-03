var canvas = document.querySelector("canvas");

var ctx = canvas.getContext("2d");

// line-segment
ctx.moveTo(50,50);
ctx.lineTo(200,50);
ctx.stroke();


ctx.beginPath();
ctx.arc(150,150,40,0,2*Math.PI);
ctx.stroke();


ctx.fillStyle = 'green';
ctx.fillRect(280, 10, 100, 100);
