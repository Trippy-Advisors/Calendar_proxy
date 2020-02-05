const express = require('express');
const app = express();
const parser = require('body-parser');
const fetch = require('node-fetch');

app.use("/:id/", express.static(__dirname + '/client'));
app.use(parser.urlencoded({extended: true}));

app.get('/hotels/:id/', (req, res) => {
    let hotelId = req.params.id;
    fetch(`http://localhost:1128/hotels/${hotelId}/`)
      .then((response) => {
          return response.json();
      })
      .then((jsonResponse) => {
          res.send(jsonResponse)
      })
})

app.get('/reviews/hotels/:id/', (req, res) => {
    let hotelId = req.params.id;
    fetch(`http://localhost:3001/reviews/hotels/${hotelId}`)
      .then((response) => {
          return response.json();
      })
      .then((jsonResponse) => {
          res.send(jsonResponse);
      })
})

app.listen(1345, () => {
    console.log('App listening on port 1345');
})