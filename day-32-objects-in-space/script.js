

function Counter() {
  this.count = 0;
}

Counter.prototype.createDOM = function(x, y) {
  var div = document.createElement('div');
  div.textContent = "0";
  div.style.left = x + "px";
  div.style.top = y + "px";

  // when someone clicks, increment count and update div text
  var self = this;
  div.addEventListener('click', function() {
    // console.log('clicking', this, self);
    self.count += 1;
    // console.log(self.count);
    div.textContent = self.count;
  });

  return div;
}



document.body.addEventListener('click', function(evt) {
  // console.log("x:", evt.pageX, "y:", evt.pageY);

  if (evt.target.tagName === 'DIV') {

  }
  else {
    var counter = new Counter();
    var div = counter.createDOM(evt.pageX, evt.pageY);
    document.body.appendChild(div);
  }

});
