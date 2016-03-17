var map = new google.maps.Map(document.getElementById('map'), {
center: {lat: 30, lng: -90},
zoom: 4
});

  var kmlLayer = new google.maps.KmlLayer({
    url: 'http://wdssii.nssl.noaa.gov/realtime/warnings/NWS_Warnings.kml',
    suppressInfoWindows: true,
    map: map
  });

  kmlLayer.addListener('click', function(kmlEvent) {
    var text = kmlEvent.featureData.description;
    showInContentWindow(text);
  });

  function showInContentWindow(text) {
    var sidediv = document.getElementById('content-window');
    sidediv.innerHTML = text;
  }
var kmlLayer = new google.maps.KmlLayer({
    url: 'http://wdssii.nssl.noaa.gov/realtime/warnings/LSRs/NWS_LSRs.kml',
    suppressInfoWindows: false,
    map: map
  });

  kmlLayer.addListener('click', function(kmlEvent) {
    var text = kmlEvent.featureData.description;
    showInContentWindow(text);
  });

  function showInContentWindow(text) {
    var sidediv = document.getElementById('content-window');
    sidediv.innerHTML = text;
  }
  var kmlLayer = new google.maps.KmlLayer({
    url: 'http://radar.weather.gov/ridge/kml/animation/sectors/southmissvly_N0R_loop.kml',
    suppressInfoWindows: false,
    map: map
  });

  kmlLayer.addListener('click', function(kmlEvent) {
    var text = kmlEvent.featureData.description;
    showInContentWindow(text);
  });

  function showInContentWindow(text) {
    var sidediv = document.getElementById('content-window');
    sidediv.innerHTML = text;
  }