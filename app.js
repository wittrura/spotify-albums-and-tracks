const express = require('express');
const app = express();
const path = require('path');

const PORT = 8000;

const KEY = require('./spotify_tokens.json');


app.use('/', express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.get('/artist', function (req, res) {
  var spotifyQueryRequest;
  spotifyQueryString = $('#spotify-q').val();
  // searchUrl = "https://api.spotify.com/v1/search?type=artist&q=" + spotifyQueryString;
  searchUrl = "https://api.spotify.com/v1/search?type=artist&q=madona";

  // Generate the request object
  spotifyQueryRequest = $.ajax({
      type: "GET",
      dataType: 'json',
      url: searchUrl
  });

  spotifyQueryRequest.done(function (data) {
    res.send();
  });
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}...`);
});
