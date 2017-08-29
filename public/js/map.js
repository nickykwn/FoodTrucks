function initMap(){
  const defaultBounds = new google.maps.LatLngBounds(
  new google.maps.LatLng(37.9298239, -122.28178),
  new google.maps.LatLng(37.6398299, -123.28178));
  const options = {
    bounds: defaultBounds,
  };
}

initMap();
