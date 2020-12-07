var harvard_yard_map;
/* John Harvard Status
42.374474,-71.117207 */



function initMap() {
    console.log("I'm in initmap");
    var statue_latlng = new google.maps.LatLng(42.374474, -71.117207);
    var northwest_latlng = new google.maps.LatLng(42.3795462, -71.1156024);
    var chez_sheridan_latlng = new google.maps.LatLng(42.776370, -71.478260);
    var precision_coating_latlng = new google.maps.LatLng(42.385200, -71.494520);
    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(42.377, -71.1164)
    };
    harvard_yard_map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var statue_info = "<strong>John Harvard Statue</strong><br/>" +
        "<a href='https://www.summer.harvard.edu/inside-summer/3-lies-harvard'>3 Lies of Harvard</a>";

    var northwest_info = "<strong>Northwest Science Building</strong><br/>" + "Latitude: 42.3795462<br/>" + "Longitude: -71.1156024";
    
    var chez_sheridan_info = "<strong>Chez Sheridan Office/Shop</strong><br/>" + "9 Sheridan St" + "Nashua, NH 03064";

    var precision_coating_info = "<strong>Medical Device Coater</strong><br/>";
    
    var statue_infowindow = new google.maps.InfoWindow({
        content: statue_info
    });

    var northwest_infowindow = new google.maps.InfoWindow({
        content: northwest_info
    });
    
     var sheridan_infowindow = new google.maps.InfoWindow({
        content: chez_sheridan_info
    });

    var precision_coating_infowindow = new google.maps.InfoWindow({
        content: precision_coating_info
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
    
    var chez_sheridan_marker = new google.maps.Marker({
        position: chez_sheridan_latlng,
        map: harvard_yard_map,
        title: 'Chez Sheridan Office/Shop'
    });

    var precision_coating_marker = new google.maps.Marker({
        position: precision_coating_latlng,
        map: harvard_yard_map,
        title: 'Precision Coating'
    });
    
    google.maps.event.addListener(statue_marker, 'click', function () {
        statue_infowindow.open(harvard_yard_map, statue_marker);
    });
    google.maps.event.addListener(northwest_marker, 'click', function () {
        northwest_infowindow.open(harvard_yard_map, northwest_marker);
    });
    
    google.maps.event.addListener(chez_sheridan_marker, 'click', function () {
        sheridan_infowindow.open(harvard_yard_map, chez_sheridan_marker);
    });
    google.maps.event.addListener(precision_coating_marker, 'click', function () {
        precision_coating_infowindow.open(harvard_yard_map, precision_coating_marker);
    });
}
