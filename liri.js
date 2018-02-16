
// require("dotenv").config();
// var nodeSpotify = require("node-spotify-api");
// var spotify = require("spotify");
// var request = require("request");
// var Twitter = require("twitter");
// var keys = require ("./keys.js"); 
// var userInput = process.argv;

// function getTweet(){
// var client = new Twitter(keys.twitter);

// var params = {
//   screen_name:"GreenDay"
// };


// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if (!error) { 
//       for(var i = 0; i<20; i++){
//         console.log(i);
//         console.log(tweets[i].text);
//         console.log(tweets[i].created_at);
//       }
//     }
//     else{
//       console.log("error", error)
//     }
// });
// }

// getTweet(); 

require("dotenv").config();
var nodeSpotify = require("node-spotify-api");
var Spotify = require("spotify");
var request = require("request");
var Twitter = require("twitter");
var keys = require ("./keys.js");
var userInput = process.argv;
var fs = require("fs");


function grabTweet (){
  var client = new Twitter(keys.twitter);

  var params = {
    screen_name: "hansonmusic"
  };

  client.get("statuses/user_timeline", params, function(error, tweets, response){
    if (!error){
      for(var i = 0; i<20; i++){
        console.log(i);
        console.log(tweets[i].created_at);
        console.log(tweets[i].text);

      }
    }
  });
}

grabTweet()


  // spotify.search({ type: 'track', query: 'changes' }, function(err, data) {
  //   if ( err ) {
  //       console.log('Error occurred: ' + err);
  //       return;
  //   }
  //   else{
  //     console.log(data);
  //   }
  // spotify.search({ type: 'track', query: "changes" })
  // .then(function(response) {
  //   console.log(response);
  // })
  // .catch(function(err) {
  //   console.log(err);
  // })
 //     * Artist(s)
     
     // * The song's name
     
     // * A preview link of the song from Spotify
     
     // * The album that the song is from
    // Do something with 'data' 
// });

// }

// getSong()


//getMovie function starts
  function getMovie(){

  var title = process.argv[3];
  request("http://www.omdbapi.com/?t="+title+"&y=&plot=short&apikey=trilogy", function(error, response, body){
    if(!error && response.statusCode === 200){
      console.log("The title of the movie: " + JSON.parse(body).Title);
      console.log("Year the movie came out: " + JSON.parse(body).Year);
      console.log("IMBD Rating of the movie: " + JSON.parse(body).imdbRating);
      console.log("Rotten Tomatoes Rating of the movie: " + JSON.parse(body).Ratings[1].Value);
      console.log("Country where the movie was produced: " + JSON.parse(body).Country);
      console.log("Language of the movie: " + JSON.parse(body).Language);
      console.log("Plot of the movie: " + JSON.parse(body).Plot);
      console.log("Actors in the movie" + JSON.parse(body).Actors);
    }

  });
 
}
getMovie()
  
//   if (userInput[2] === "movie-this"){
//     getMovie()
//   }

//readFile function start
function readFile(){
  fs.readFile("random.text", "utf8", function(err, data){
    if(err){
      console.log(err)
    }
    console.log(data);
  });
}

readFile()




















