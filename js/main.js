function randomQuote() {
  $.ajax({
      url: "http://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#quoteDisplay").html("<p id='random_quote' class='lead'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + "</p>");

           text=response.quoteText;
           auth=response.quoteAuthor;
        // $('#tweet').attr("href", "http://twitter.com/home/?status=" + response.quoteText +
        //     ' (' + response.quoteAuthor + ')');
      }
  });
}

$(function() {
  randomQuote();
});

$("#get-another-quote-button").click(function(){
  randomQuote();
});

$("#tweet").on("click", function() {
    window.open("http://twitter.com/home/?status=" +text+' (' +auth+ ')', '_blank');
    })

//Changing the background randomly will go here

var backgroundColors=["#2C3539","#25383C","#98AFC7","#151B54","#1F45FC","#254117","#493D26","#E55451"];
