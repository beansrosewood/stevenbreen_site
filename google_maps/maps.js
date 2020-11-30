var harvard_yard_map;
/* John Harvard Status
42.374474,-71.117207 */

var statue_latlng = new google.maps.LatLng(42.374474, -71.117207);
var northwest_latlng = new google.maps.LatLng(42.3795462, -71.1156024);

function initialize() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(42.377, -71.1164)
    };
    harvard_yard_map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
    
    var statue_info = "<strong>John Harvard Statue</strong><br/>" +
        "<a href='https://www.summer.harvard.edu/inside-summer/3-lies-harvard'>3 Lies of Harvard</a>";
        
    var northwest_info = "<strong>Northwest Science Building</strong><br/>" + "Latitude: 42.3795462<br/>" + "Longitude: -71.1156024";    
    
    var statue_infowindow = new google.maps.InfoWindow({
        content: statue_info
    });
    
    var northwest_infowindow = new google.maps.InfoWindow({
    		content: northwest_info
        
    });
    
    var statue_marker = new google.maps.Marker({
      position: statue_latlng,
      map: harvard_yard_map,
      title: 'John Harvard Statue'
    });
    
    var northwest_marker = new google.maps.Marker({
    	position: northwest_latlng,
      map: harvard_yard_map,
      title: 'Northwest Science Building'
    });
    
    google.maps.event.addListener(statue_marker, 'click', function() {
      statue_infowindow.open(harvard_yard_map,statue_marker);
    });
    google.maps.event.addListener(northwest_marker, 'click', function() {
    	northwest_infowindow.open(harvard_yard_map,northwest_marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
