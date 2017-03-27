//querySelector will grab the first thing it matches
var theParagraph = document.querySelector('p');
console.log(theParagraph);
theParagraph.textContent = 'pants...';

var theSecond = document.querySelector('#second-paragraph');
console.log(theSecond);
theSecond.textContent = 'SHORTS!!';

var theOL = document.querySelector('ol');
console.log('the children', theOL.children);

theOL.innerHTML = '<li>lol</li>'

var anLI = document.querySelector('li');
console.log('the li has a parent', anLI.parentElement);


//querySelectorAll will grab all the things it matches
var allThePs = document.querySelectorAll('p');
console.log(allThePs);
