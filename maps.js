var map = L.map('map').setView([41.876209, -87.619057], 10);
function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.description) {
      layer.bindPopup(feature.properties.description);
      //layer.marker(feature.latlng,{title: feature.properties.name});
    }
  }

L.tileLayer('http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.geoJson(r66,{
  onEachFeature: onEachFeature,
  pointToLayer: function (feature,latlng) {
    if (feature.properties && feature.properties.name) {
      return L.marker(latlng,{title: feature.properties.name});
    }
  }
}).addTo(map);
