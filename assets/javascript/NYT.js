$(document).ready(function() {
  console.log("ready");

  function callAPIforNYT() {
    // These variables will eventually be taken from Ifran's code after they are stored as global variables.
    // For now, they are dummy values as a proof of concept.
    var titleFromOMDB = "The Matrix";
    var movieReleaseDate = "24 Sep 1999";
    var movieReleaseYear =
      movieReleaseDate[movieReleaseDate.length - 4] +
      movieReleaseDate[movieReleaseDate.length - 3] +
      movieReleaseDate[movieReleaseDate.length - 2] +
      movieReleaseDate[movieReleaseDate.length - 1];
    console.log(movieReleaseYear);
    var q = titleFromOMDB + " review";
    // Convert the year that the movie was released into the format the the API needs. Generate an end date of one year after the film
    // released, otherwise we will get more recent articles that have less to do with what we want.
    movieReleaseYear += "0101";
    var endDate = parseInt(movieReleaseYear) + 10000;
    console.log(movieReleaseYear);
    console.log(endDate);

    // My API Key that I requested from NYT
    var key = "4SoUF5T27Qi9phhxLbs9GvcGOxEXASCO";

    // The final, assembled URL to be used in our Ajax call.
    var queryURL =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      q +
      "&start_date=" +
      movieReleaseYear +
      "&end_date=" +
      endDate +
      "&api-key=" +
      key;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response.response.docs[0]);
      var articleURL = response.response.docs[0].web_url;
      var newAnchor = $("<a>");
      newAnchor.attr("href", articleURL);
      newAnchor.html(
        "<h3>" +
          response.response.docs[0].headline.main +
          "</h3>" +
          "<br>" +
          "<p>" +
          response.response.docs[0].lead_paragraph +
          "</p>"
      );
      $("#movieNYReview").empty();
      $("#movieNYReview").append(newAnchor);
    });
  }
  $("#searchButton").on("click", function() {
    callAPIforNYT();
    console.log("called NYT API");
  });
});
