const fetch = require('node-fetch');

const API_URL = 'https://maps.googleapis.com/maps/api/geocode/json?&address=san%20francisco';
const API_KEY = process.env.GOOGLE_KEY;

function getSFmap(req, res, next) {
  fetch(`${API_URL}`)
  .then(r => r.json())
  .then((result) => {
    res.map = result;
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
