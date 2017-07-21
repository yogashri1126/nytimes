$(document).ready(function() {


//Variables of user input
var search = $("#search-term").val();
var numRec = $("#num-records").val();
var year = $("#start-year").val();
var endYear = $("#end-year").val();

//NY Times API link
var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=rainbow&api-key=af286e957f1846449491ab1bc12d6a96";

//calling ajax and pulling data
$.ajax({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq="+search+"&api-key=af286e957f1846449491ab1bc12d6a96",
        method:"GET"
})
  .done(function(res){


        console.log(res);


  });

});
