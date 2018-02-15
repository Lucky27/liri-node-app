
require("dotenv").config();
var nodeSpotify = require("node-spotify-api");
var spotify = require("spotify");
var request = require("request");
var Twitter = require("twitter");
var keys = require ("./keys.js"); 
var userInput = process.argv;

function getTweet(){
var client = new Twitter(keys.twitter);

var params = {
  screen_name:'DrakeReact'
};


client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) { 
      for(var i = 0; i<20; i++){
        console.log(i);
        console.log(tweets[i].text);
        console.log(tweets[i].created_at);
      }
    }
    // else{
    //   console.log("error", error)
    // }
});
}

getTweet(); 

