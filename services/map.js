const fetch = require('node-fetch');

const API_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';
const API_KEY = process.env.GOOGLE_KEY;

function getSFmap(req, res, next) {
  fetch(`${API_URL}address=${req.query.location}&key=${API_KEY}`)
  .then(r => r.json())
  .then((result) => {
    res.city = result.results;
    next();
  })
  .catch((err) => {
    res.err = error;
    next();
  });
}

function getMapCenter(req, res, next) {
  const center = {
    lat: req.query.lat,
    lng: req.query.lng,
  };
  res.center = center;
  next();
}

module.exports = {
  getSFmap,
  getMapCenter,
};
