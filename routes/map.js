const router       = require('express').Router();

const googleMap     = require('../services/map');

router.get('/', googleMap.getSFmap, googleMap.getMapCenter, (req, res) => {
  res.render('map', {
    lat: res.center.lat,
    lng: res.center.lng,
  });
});

module.exports = router;
