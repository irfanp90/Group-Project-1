// // Ensure that our HTML is all loaded before we worry about looking up anything
// // on YouTube.
// // $(document).ready(function() {
// // Stuff taken from https://developers.google.com/youtube/iframe_api_reference

// // 2. This code loads the IFrame Player API code asynchronously.
// var tag = document.createElement("script");

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // 3. This function creates an <iframe> (and YouTube player)    after the API
// // code downloads.
// var player;

// function onYouTubeIframeAPIReady(query) {
//   // console.log("YouTube code executing");
//   // console.log(query);
//   if (query != undefined) {
//     if ($("#player") != undefined) {
//       $("#player").empty();
//       // console.log("Tried to empty player");
//     }
//     player = new YT.Player("movieTrailer", {
//       height: "390",
//       width: "100%",
//       videoId: query,
//       events: {
//         onReady: onPlayerReady,
//         onStateChange: onPlayerStateChange
//       }
//     });
//   }
// }

// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   event.target.playVideo();
// }

// // 5. The API calls this function when the player's state changes.    The
// // function indicates that when playing a video (state=1),    the player should
// // play for six seconds and then stop.
// var done = false;

// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }

// function stopVideo() {
//   player.stopVideo();
// }
// });
//   End of content lovingly stolen from the Google Developer Docs. I have no
// idea what I have stolen from them, but I know that I need to learn what the
// heck is going on here. Begin code that Chris Pete actually wrote: Dummy title
// declarations. In reality, this title variable will be a global variable from
// Irfan's call to the OMDB API. This variable must be removed when the code is
// ready to integrate.

function getTrailer(titleFromOMDB, releaseDate) {
  // var title = "The Matrix";
  // var titleFromOMDB = "The Matrix";

  //   When we've clicked the submit button

  // console.log("called YouTube API");

  // Ensure that we have valid data. This will likely change as we move along. The
  // "titleFromOMDB" variable may just be a simple error variable.
  if (titleFromOMDB != undefined) {
    // console.log("valid title");
    var titleArray = titleFromOMDB.split(" ");
    var joinedTitle = titleArray.join("%20");

    // define our query url
    var queryURL =
      "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" +
      joinedTitle +
      " " +
      releaseDate[releaseDate.length - 4] +
      releaseDate[releaseDate.length - 3] +
      releaseDate[releaseDate.length - 2] +
      releaseDate[releaseDate.length - 1] +
      "%20trailer&safeSearch=moderate&type=video&videoDefinition=any&videoType=any&key=" +
      "AIzaSyCf7UWyalYhvAIKZeoPhI6XCx4e9oa8N_o";

    console.log(queryURL);

    $.ajax({ url: queryURL, method: "GET" }).then(function(response) {
      console.log(response.items[0]);
      $("#movieTrailer").empty();
      var id = response.items[0].id.videoId;
      console.log(response.items[0].id.videoId);
      var thumb = response.items[0].snippet.thumbnails.high.url;
      createLink(id, thumb);
      // onYouTubeIframeAPIReady(response.items[0].id.videoId);
    });
  }
}

function createLink(id, thumb) {
  newDiv = $("<img src =" + thumb + ">");
  newA = $("<a href=http://www.youtube.com/watch?v=" + id + " target='none'>");
  newA.append(newDiv);
  $("#movieTrailer").append(newA);
}
