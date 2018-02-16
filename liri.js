
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
var Spotify = require("node-spotify-api");
// var Spotify = require("spotify");
var request = require("request");
var Twitter = require("twitter");
var keys = require ("./keys.js");
var userInput = process.argv;
var fs = require("fs");
var inquirer = require("inquirer");

// inquirer.prompt([
//   {
//     type: "list",
//     name: "command",
//     message: "Choose a command",
//     choices: [
//       "My-tweets",
//       "Do-what-it-says",
//       "Movie-this",
//       "spotify-this-song"
//     ]
//   }
// ]).then(function(answer){
//   if(answer.command === "Movie-this"){
//     getMovie();
//   }
//   else if(answer.command === "Do-what-it-says"){
//     readFile();
//   }
//   else if(answer.command === "My-tweets"){
//     grabTweet();
//   }
//   else if(answer.command === "spotify-this-song"){
//     getSong();
//   }
// });




//grabTweet- taking 20 tweets from hansonmusic

// function grabTweet (){
//   var client = new Twitter(keys.twitter);

//   var params = {
//     screen_name: "hansonmusic"
//   };

//   client.get("statuses/user_timeline", params, function(error, tweets, response){
//     if (!error){
//       for(var i = 0; i<20; i++){
//         console.log(i);
//         console.log(tweets[i].created_at);
//         console.log(tweets[i].text);

//       }
//     }
//   });
// }

// grabTweet()


  // spotify.search({ type: 'track', query: 'changes' }, function(err, data) {
  //   if ( err ) {
  //       console.log('Error occurred: ' + err);
  //       return;
  //   }
  //   else{
  //     console.log(data);
  //   }

  //function that takes music data from spotify.
function getSong(){
var spotify = new Spotify(keys.spotify);
  
  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  for(var i = 0;i < data.tracks.items.length; i++){
    console.log(data.tracks.items[1].album.artists[0].name);
    console.log(data.tracks.items[1].name);
    console.log(data.tracks.items[1].uri);
    console.log(data.tracks.items[1].album.name);
    // console.log("The song name: " + JSON.parse.(str).Title) 
  }

});


};


getSong()


//getMovie function- taking movie from ombd.
//   function getMovie(){

//   var title = process.argv[3];
//   request("http://www.omdbapi.com/?t="+title+"&y=&plot=short&apikey=trilogy", function(error, response, body){
//     if(!error && response.statusCode === 200){
//       console.log("The title of the movie: " + JSON.parse(body).Title);
//       console.log("Year the movie came out: " + JSON.parse(body).Year);
//       console.log("IMBD Rating of the movie: " + JSON.parse(body).imdbRating);
//       console.log("Rotten Tomatoes Rating of the movie: " + JSON.parse(body).Ratings[1].Value);
//       console.log("Country where the movie was produced: " + JSON.parse(body).Country);
//       console.log("Language of the movie: " + JSON.parse(body).Language);
//       console.log("Plot of the movie: " + JSON.parse(body).Plot);
//       console.log("Actors in the movie" + JSON.parse(body).Actors);
//     }

//   });
 
// }
// getMovie()
  
//   if (userInput[2] === "movie-this"){
//     getMovie()
//   }

//readFile function- provide options 
// function readFile(){
//   fs.readFile("random.text", "utf8", function(err, data){
//     if(err){
//       console.log(err)
//     }
//     console.log(data);
//   });
// }

// readFile()






















