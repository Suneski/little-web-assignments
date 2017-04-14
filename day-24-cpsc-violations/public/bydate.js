var dateList = document.querySelector('#dates');
var tbody = document.querySelector('tbody');

var ajaxData;

$.ajax({
  url: '/api/cpscViolations'
})

.done(function(data) {
  console.log('visible?', data);
  ajaxData = data;

  var dates = [];

  for (var i = 0; i < data.values.length; i++) {
    if (dates.indexOf(data.values[i].date) === -1) {
      dates.push(data.values[i].date);
    }
  }


  for (var i = 0; i < dates.length; i++) {
    var li = document.createElement('li');
    li.textContent = dates[i];
    dateList.appendChild(li);
  }
});

dateList.addEventListener('click', function(evt) {
  var text = evt.target.textContent;
  console.log('You clicked on', text);

  //now, filter data and put on page!!

  var filtered = [];

  for (var i = 0; i < ajaxData.values.length; i++){

    if (ajaxData.values[i].date === text) {
      filtered.push(ajaxData.values[i]);
    }
  }

  putItOnThePage(filtered);
});

function putItOnThePage(arr) {

  tbody.innerHTML = '';

  for (var i = 0; i < arr.length; i++) {
    var tr = document.createElement('tr');

    var td = document.createElement('td');

    td.textContent = arr[i].violation;

    tr.appendChild(td);

    tbody.appendChild(tr);
  }
}
