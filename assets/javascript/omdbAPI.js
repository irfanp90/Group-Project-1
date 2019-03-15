function movieData() {
  var movie = "Jaws";
  var queryURL =
    "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var pOne = $("<div>");
    pOne.attr("id", "movieTitle");
    pOne.text(" Title: " + response.Title);
    var pTwo = $("<div>");
    for (var i = 0; i < response.Ratings.length; i++) {
      console.log(response.Ratings[i].Source);
      console.log(response.Ratings[i].Value);
      var scoreDiv = $("<div>");
      var scoreSource = $("<span>");
      var scoreNumber = $("<span>");
      var scoreSpace = " ";
      scoreDiv.attr("class", "rating");
      scoreSource.addClass("rating-source");
      scoreNumber.addClass("rating-score");
      scoreSource.text(response.Ratings[i].Source);
      scoreNumber.text(response.Ratings[i].Value);
      scoreDiv.append("Rating: ", scoreSource, scoreSpace, scoreNumber);
      pTwo.append(scoreDiv);
    }

    var pThree = $("<div id='movieReleased'>").text(
      " Released: " + response.Released
    );
    var pFour = $("<img id='moviePoster'>").attr("src", response.Poster);
    var pFive = $("<div id='movieActors'>").text(" Actors: " + response.Actors);
    var pSix = $("<div id='moviePlot>").text(" Plot: " + response.Plot);

<<<<<<< HEAD
    $("#movieINFO").append(pOne, pTwo, pThree, pFour, pFive, pSix);
  });
}
$("#submitButton").on("click", movieData);
=======
    $("#movieInfo").append(pOne, pTwo, pThree, pFour, pFive, pSix);
  });
}
$("#searchButton").on("click", movieData);
>>>>>>> master