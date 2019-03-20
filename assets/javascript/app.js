


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

var goodCounter = 0;
var badCounter = 0;
document.getElementById("goodcounter").append(goodCounter);
document.getElementById("badcounter").append(badCounter);

function rating(movieTitle){
document.getElementById("good").addEventListener("click", addLikeFunction);

function addLikeFunction(){
        goodCounter +=1;
    $("#goodcounter").text(goodCounter);
    database.ref(movieTitle).push("Good Count:" + goodCounter);
    
    }

document.getElementById("bad").addEventListener("click", addBadFunction);
function addBadFunction(){
    badCounter +=1;
    $("#badcounter").text(badCounter);
    database.ref(movieTitle).push("Bad Count:" + badCounter);
    }
document.getElementById("searchButton").addEventListener("click", reset);

function reset(){
    $("#goodcounter").text(goodCounter);
    $("#badcounter").text(badCounter);
    
    goodCounter =0;
    badCounter =0;

}
    
}




// function addLikeFunction(){
//     var m = $("#searchtext").val();
//     goodCounter++;
//     $("#goodcounter").text(goodCounter);
//     database.ref(goodCounter).set(goodCounter);

// }
// document.getElementById("bad").addEventListener("click", addBadFunction);
// function addBadFunction(){
//     var m = $("#searchtext").val();
//     badCounter++;
//     $("#badcounter").text(badCounter);
    
//     database.ref().set(badCounter);

// }  

// database.ref(movieTitle).on("value", function(snapshot){
//     thumbsUpCounter = snapshot.val().likes;
//     $("#thumbsupcount").text(snapshot.val().likes);
// });

// function addDownFunction(){
//     thumbsDownCounter++;
//     document.getElementById("thumbsdowncount").append(thumbsDownCounter);
//     database.ref().set({
//         likes: thumbsUpCounter,dislike: thumbsDownCounter
//     });
// };
// database.ref().on("value", function(snapshot){
//     thumbsDownCounter = snapshot.val().dislike;
//     $("#thumbsdowncount").text(snapshot.val().dislike);
// });

// var clickedBtn = false;
// function addUpFunction(){
//     var m = $('#searchText').val();
//     thumbsUpCounter++;
//     console.log("hello");
//     database.ref(m + "/thumbsUpCounter").push(thumbsUpCounter);
//     $("#thumbsupcount").text(thumbsUpCounter);
// }
    // database.ref(m).on("value", function(snapshot) {
    //     if(snapshot.val()){
    //         var newCounter = snapshot.val()
    //         // console.log(parseInt(newCounter.thumbsUpCounter) +1);

    //         database.ref(m).push(true);
    //         console.log(snapshot.val());
    //     }
    //     else{
    //         console.log(thumbsUpCounter);

    //         database.ref(m).set({
    //             thumbsUpCounter: 3
    //             });          
    //     }   
    // });

// document.getElementById("bad").addEventListener("click", addDownFunction);
// var thumbsDownCounter;
// function addDownFunction(){
//     var m = $('#searchText').val();
//     thumbsDownCounter++;
//     console.log("goodbye");
//     database.ref(m + "/thumbsDownCounter").push(thumbsDownCounter)
//     $("#thumbsdowncount").text(thumbsDownCounter);
// }

    // database.ref(m).on("value", function(snapshot) {
    //     if(snapshot.val()){
    //         var newCounter = snapshot.val()
    //         database.ref(m).set({
    //             thumbsDownCounter: 2
    //         });
    //         console.log(snapshot.val());
    //     }
    //     else{
    //         console.log(thumbsDownCounter);

    //         database.ref(m).set({
    //             thumbsDownCounter: 2
    //             });          
    //     }   
    // });
