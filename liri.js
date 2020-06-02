require("dotenv").config();
var moment = require('moment'); // require
moment().format(); 
const axios = require('axios');
var fs = require("fs");

//var spotification = new Spotify(keys.spotify);
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);


if (process.argv[2] == "concert-this") {

var api1 = "https://rest.bandsintown.com/artists/";
var input = process.argv[3];
//process.argv[2];
var api2 =  "/events?app_id=codingbootcamp";


var query = (api1 + input + api2);
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

else if (process.argv[2] == "spotify-this-song") {
    if (process.argv[3] == undefined) {
        var input = "The Sign"
    }
    else {var input = process.argv[3]};
   
 
      spotify
      .search({ type: 'track', query: input, limit: 1 })
      .then(function(response) {
          var artists = [];
          var res = response.tracks.items[0];
          
        
          for (b=0; b<res.artists.length; b++) {
        artists.push(res.artists[b].name);
          }
          console.log("Artist(s): " + artists.join(" and "));
          console.log("Song Title: " + res.name);
          console.log("Link to Preview: " + res.preview_url);
          console.log("Album: " + res.album.name);
      })
      .catch(function(err) {
        if (err) {
            throw err;
        }
      });
}
else if (process.argv[2] == "movie-this") {
    var Omdb = "http://www.omdbapi.com/?i=tt3896198&apikey=35725016&t=";
    if (process.argv[3] == undefined) {
        var query = (Omdb + 'mr nobody');
    }
    else {
    var query = (Omdb + process.argv[3]);
    }
    axios.get(query)
  .then(function (response) {
    // handle success
    var res = response.data
    console.log(res);
    console.log("Title: " +res.Title);
    console.log("Year released: " + res.Year);
    console.log("IMDB Rating: " + res.imdbRating);
    if (res.Ratings[1] == undefined) {
    } else {
    console.log("Rotten Tomatoes Rating: " + res.Ratings[1].Value);
    };
    console.log("Country: " + res.Country);
    console.log("Language: " + res.Language);
    console.log("Plot Summary: " + res.Plot);
    console.log("Starring: " + res.Actors);

  })
  .catch(function (error) {
    // handle error
    console.log("error occured" + error);
 })
}
else if (process.argv[2] = "do-what-it-says") {
  fs.readFile("random.txt", "utf8", (err, data) => {
      if (!err) {
          console.log(data);
      }
  })
}
else {console.log("error: please specify valid command")}