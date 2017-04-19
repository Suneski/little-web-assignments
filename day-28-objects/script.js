// el is short for element

function View(selector) {
  this.el = document.querySelector(selector);
}

View.prototype.text = function(txt) {
  this.el.textContent = txt;
  console.log('what is this?', this);
}


View.prototype.hide = function() {
  this.el.style.display = 'none';
}

View.prototype.click = function(func) {
  this.el.addEventListener('click', func);

  this.el.text.call(this, func);
}



var aDiv = new View('#a-div');
aDiv.text('I have text!');
aDiv.hide();

console.log(aDiv.el);


var anotherDiv = new View('#another-div');
anotherDiv.text('I also have text!');



anotherDiv.click(function() {
  console.log('callback this?', this);
  this.text('I clicked on it.');
});
