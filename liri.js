require("dotenv").config();
var moment = require('moment'); // require
moment().format(); 
const axios = require('axios');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

const axios = require('axios').default;

var api1 = "https://rest.bandsintown.com/artists/"
var artist = process.argv[3];
var api2 =  "https://rest.bandsintown.com/artists/"

var query = (api1 + artist + api2);

axios.get(query)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    response.end();
  });

  //spotify API example
  var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});
 
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