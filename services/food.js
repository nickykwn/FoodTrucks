const fetch = require('node-fetch');

const API_URL = 'https://data.sfgov.org/resource/6a9r-agq8.json';

function getFoodTrucks (req, res, next) (){
  fetch(`{API_URL`)
    .then(r=> r.json())
    .then((result) => {
      res.foodtrucks = result;
      next();
    })
    .catch((err) => {
      res.err = err;
      next();
    });
}

module.exports = {
  getFoodTrucks,
}
