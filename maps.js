var map = L.map('map').setView([41.876209, -87.619057], 10);
function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name);
      layer.marker.title(feature.properties.name);
    }
  }

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors '

}).addTo(map);

L.geoJson(r66,{
  onEachFeature: onEachFeature
}).addTo(map);
