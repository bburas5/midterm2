var map = L.map( 'map' ).setView( [ 30.4500,-91.145688],13 );

var streets = L.tileLayer( 'http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo( map ); // Add this layer to the map to make it the default basemap

var satellite = L.tileLayer( 'http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
	type: 'sat',
	ext: 'jpg',
	attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
	subdomains: '1234'
});

var baselayers = {
  "Streets": streets,
  "Satellite": satellite
};

function addpopup( feature, layer ){
  var html = feature.properties.Name+'<br>' + feature.properties.Caption +'<br>' ;
  layer.bindPopup(html);
}

$.getJSON( "https://raw.githubusercontent.com/geog4046instructor/examples/gh-pages/geojson/stops.geojson", function( geojsonFeatures ){
  L.geoJson( geojsonFeatures, { onEachFeature: addpopup } ).addTo(map);
});

L.control.layers( baselayers ).addTo( map );
