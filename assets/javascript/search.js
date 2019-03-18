// if submit button is pressed and search is empty alert modal telling the user to enter something at least
// return cursor to searchText

// predictive functionality from set list
// would look at all available names on omdb in the wild

// posters of recently viewed?
//

$(document).ready(function () {
  // check the submit button is working and show search value
  $("#searchButton").on("click", function () {
    console.log("we got clicked!!");
    // console.log("click produces: ", $("#searchText").val());
    event.preventDefault();
    // call the validateSearch function
    validateSearch();
    // clear the#searchText field as no longer needed
    //$("#searchText").val(" ");
  });

  //Trigger search button click event by hitting enter key
  $("#searchText").keypress(function (enter) {
    if (enter.which == 13) {
      $("#searchButton").click();
    }
  });

  var specialCharacters = "~`!#$%^&*+=-[]\\';,/{}|\":<>?";

  function validateSearch() {
    // console.log("this is our movie search val!!", $("#searchText").val());
    var searchInput = $("#searchText")
      .val()
      .trim();

    if (searchInput === "") {
      //alert("Please enter a Movie Title"); // alert to be changed to modal
      $('#searchButton').attr('href', '#modal1');
      $('.modal').modal();
      $('#modal1').modal('open');
      return false;
    }
    for (var i = 0; i < searchInput.length; i++) {
      if (specialCharacters.indexOf(searchInput.charAt(i)) !== -1) {
        //alert("Please enter a Movie Title with no special characters"); // alert to be changed to modal
        console.log('This is working');
        $('#searchButton').attr('href', '#modal2');
        $('.modal').modal();
        $('#modal2').modal('open');
        return false;
      }
    }
    console.log("submitting for URLQuery: ", searchInput); //   fetchQueryURL(search);
    movieData(searchInput);
    return searchInput;
  }
});