
var dotenv = require ("dotenv");
var spotify = require("node-spotify-api");
var client = require("spotify");
var request = require("request");
var twitter = require("twitter");
var keys = require ("keys.js");

function getTweet(){
 // var client = new Twitter(keys.twitter);
	
var params = {
	screen_name:'barrack obama', 
	count:20};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  	if (!error) {
    console.log(tweets);
  }
});
}

getTweet()