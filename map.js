//$(document).ready(function(){
  var map = L.map('mapid').setView([40.2838, -3.8215], 13); //crea un elemento mapa dentro del mapa
  var popup = L.popup();

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([40.2838, -3.8215]).addTo(map)
    .bindPopup('Aulario III')
    .openPopup();

    function onMapClick(e) {
      popup
          .setLatLng(e.latlng)
          .setContent(e.latlng.toString())
          .openOn(map);
        }

        map.on('click', onMapClick);

    function onLocationFound(e) {
        var radius = e.accuracy/4;

    /*    L.marker(e.latlng).addTo(map)
            .bindPopup("You are within " + radius + " meters from this point").openPopup();*/

        L.circle(e.latlng, radius).addTo(map);
    }

    map.locate({setView: true, maxZoom: 16});

    map.on('locationfound', onLocationFound);

    function onLocationError(e) {
      alert(e.message);
    }

    map.on('locationerror', onLocationError);
  //})
