require("dotenv").config();
var moment = require('moment'); // require
moment().format(); 
const axios = require('axios');
var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);

if (process.argv[2] == "concert-this") {

var api1 = "https://rest.bandsintown.com/artists/";
var artist = process.argv[3];

if (process.argv[4] == undefined) {
}  else {
    artist = process.argv[3] + "+" + process.argv[4];
}
if (process.argv[5] == undefined) {
}  else { 
    artist = process.argv[3] + "+" + process.argv[4] + "+" + process.argv[5];
}
if (process.argv[6] == undefined) {
}  else { 
    artist = process.argv[3] + "+" + process.argv[4] + "+" + process.argv[5] + "+" + process.argv[6];
}
//process.argv[2];
var api2 =  "/events?app_id=codingbootcamp";


var query = (api1 + artist + api2);
axios.get(query)
  .then(function (response) {
    // handle success
    if (response.data.length == 0) {
        console.log("Sorry, your search didn't return any results. Please try again")
    }
    console.log(response.data.length + " Results Found");
    for (var i=0; i<response.data.length; i++) {
        var momentFromServer = (moment(response.data[i].datetime).format("MM/DD/YYYY"));
    console.log("Venue Name: " + response.data[i].venue.name);
    console.log("Location: " + response.data[i].venue.location);
    console.log("Date: " + momentFromServer);
    console.log("-------------------");

    }
  })
  .catch(function (error) {
    // handle error
    console.log("error occured" + error);
  })
}//concert this if
else {console.log("error: please specify valid command")} //end concert-this


  //spotify API example
 /*
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

// node liri.js concert this <artist/band name here>
//this will search the Bands in Town ARtist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
//spotify-this

//node liri.js spotify-this-song 
*/