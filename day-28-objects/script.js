// el is short for element

function View(selector) {
  this.el = document.querySelector(selector);
}

View.prototype.text = function(txt) {
  this.el.textContent = txt;
}


View.prototype.hide = function() {
  this.el.style.display = 'none';
}



var aDiv = new View('#a-div');
aDiv.text('I have text!');
aDiv.hide();

console.log(aDiv.el);


var anotherDiv = new View('#another-div');
anotherDiv.text('I also have text!');
