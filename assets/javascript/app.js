var config = {
    apiKey: "AIzaSyDADtH5ayaURIeaNiVdYMg7Noe6dgWnzuY",
    authDomain: "projectone-48f0b.firebaseapp.com",
    databaseURL: "https://projectone-48f0b.firebaseio.com",
    projectId: "projectone-48f0b",
    storageBucket: "projectone-48f0b.appspot.com",
    messagingSenderId: "653146973367"
  };
  firebase.initializeApp(config);

var database= firebase.database();

var thumbsUpCounter = 0;
var thumbsDownCounter =0;
    
document.getElementById("good").addEventListener("click", addUpFunction);
document.getElementById("bad").addEventListener("click", addDownFunction);
document.getElementById("thumbsupcount").append(thumbsUpCounter);
document.getElementById("thumbsdowncount").append(thumbsDownCounter);


function addUpFunction(){
    thumbsUpCounter++;
    document.getElementById("thumbsupcount").append(thumbsUpCounter);
    database.ref().set({
    likes: thumbsUpCounter,dislike: thumbsDownCounter
    });
    database.ref().on("value", function(snapshot){
        thumbsUpCounter = snapshot.val().likes;
        $("#thumbsupcount").text(snapshot.val().likes);
    });
}
document.getElementById("bad").addEventListener("click", addDownFunction);

function addDownFunction(){
    thumbsDownCounter++;
    document.getElementById("thumbsdowncount").append(thumbsDownCounter);
    database.ref().set({
        likes: thumbsUpCounter,dislike: thumbsDownCounter
    });
    database.ref().on("value", function(snapshot){
        thumbsDownCounter = snapshot.val().dislike;
        $("#thumbsdowncount").text(snapshot.val().dislike);
    });
};
