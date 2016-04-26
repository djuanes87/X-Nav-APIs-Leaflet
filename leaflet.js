$(document).ready(function(){

  var geojsonFeature = [{
    "type": "Feature",
    "properties": {
        "name": "URJC",
        "amenity": "Campus de Fuenlabrada",
        "popupContent": "URJC - Campus de Fuenlabrada"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [40.2838, -3.8215]
    },
    "type": "Feature",
    "properties": {
        "name": "URJC",
        "amenity": "Campus Mostoles",
        "popupContent": "URJC - Campus de Mostoles"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [40.33582, -3.87689]
    },
    "type": "Feature",
    "properties": {
        "name": "URJC",
        "amenity": "Campus Alcorcon",
        "popupContent": "URJC - Campus de Alcorcon"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [40.34739, -3.84547]
    }
  }];

  var mymap = L.map('map');
  mymap.locate({setView: true, maxZoom: 16});

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var loadGeoJSON = function(){
  console.log("Antes");
  L.geoJson(geojsonFeature).addTo(mymap);
  console.log("Despues");
};

  //var marker = L.marker([40.2838, -3.8215]);
  //marker.bindPopup("URJC").openPopup();
  //marker.addTo(mymap);

  function onMapClick(e) {
      var popup = L.popup();
      popup
          .setLatLng(e.latlng)
          .setContent(e.latlng.toString())
          .openOn(mymap);
  };

  mymap.on('click', onMapClick);

  function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(mymap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(mymap);
  };

  function onLocationError(e) {
    alert(e.message);
  };

  mymap.on('locationfound', onLocationFound);
  mymap.on('locationerror', onLocationError);






});
