var tbody = document.querySelector('.table-data');
var productQuery = document.querySelector('#product-query');
var violationQuery = document.querySelector('#violation-query');
var firmQuery = document.querySelector('#firm-query');


$.ajax({
  url: '/api/cpscViolations'
})

.done(function(data) {
  console.log('Did I get anything?', data);

  for (var i = 0; i < data.values.length; i++) {
    var tr = document.createElement('tr');

    var date = document.createElement('td');
    date.textContent = data.values[i].date;

    var product = document.createElement('td');
    product.textContent = data.values[i].product;

    var violation = document.createElement('td');
    violation.textContent = data.values[i].violation;

    var firm = document.createElement('td');
    firm.textContent = data.values[i].firm;

    tr.appendChild(date);
    tr.appendChild(product);
    tr.appendChild(violation);
    tr.appendChild(firm);

    tbody.appendChild(tr);
  }

});
