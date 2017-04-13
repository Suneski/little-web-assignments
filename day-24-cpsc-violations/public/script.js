var tbody = document.querySelector('.table-data');
var productQuery = document.querySelector('#product-query');
var violationQuery = document.querySelector('#violation-query');
var firmQuery = document.querySelector('#firm-query');



var ajaxdata;

$.ajax({
  url: '/api/cpscViolations'
})

.done(function(data){
  ajaxdata = data;

  putOnPage(a)
});

productQuery.addEventListener('keyup', function(evt) {


});

setTimeout(function(){
  console.log(ajaxdata)
}, 2000);


var productFilter;
var violationFilter;
var firmFilter;

productQuery.addEventListener('keyup', function() {
  productFilter = productQuery
});
