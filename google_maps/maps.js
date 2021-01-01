var harvard_yard_map;
/* John Harvard Status
42.374474,-71.117207 */



function initMap() {
    console.log("I'm in initmap");
    var fort_drum_latlng = new google.maps.LatLng(44.05010, -75.72427);
    var northwest_latlng = new google.maps.LatLng(42.3795462, -71.1156024);
    var chez_sheridan_latlng = new google.maps.LatLng(42.776370, -71.478260);
    var precision_coating_latlng = new google.maps.LatLng(42.385200, -71.494520);
    var berlin_city_latlng = new google.maps.LatLng(44.421320, -71.195120);
    var cil_latlng = new google.maps.LatLng(42.706590, -71.151200);
    var colonial_latlng = new google.maps.LatLng(41.217950, -73.077270);
    var landing_latlng = new google.maps.LatLng(43.380220, -70.504020);
    var lyndon_latlng = new google.maps.LatLng(44.468590, -71.856420);
    var design_latlng = new google.maps.LatLng(41.78459, -71.51833);
    var emtec_latlng = new google.maps.LatLng(41.20048, -73.17462);
    var saratoga_latlng = new google.maps.LatLng(43.07405, -73.783076);
    var whelen_latlng = new google.maps.LatLng(43.26719, -72.40325);
    var boat_latlng = new google.maps.LatLng(44.089453, -69.812606);
    var mex_latlng = new google.maps.LatLng(19.040034, -98.212193);
    var pei_latlng = new google.maps.LatLng(42.909253, -71.480161);
    var suntube_latlng = new google.maps.LatLng(42.696788, -83.239964);
    var jfk_latlng = new google.maps.LatLng(40.653183, -73.767882);
    var ge_latlng = new google.maps.LatLng(42.46801328, -73.25612556);
    var vt_ware_latlng = new google.maps.LatLng(44.379986, -73.127530);
    var steel_latlng = new google.maps.LatLng(40.650405, -75.465472);
    var mapOptions = {
        zoom: 7,
        center: new google.maps.LatLng(42.623404, -75.820153),
        mapTypeId: 'satellite'
    };
    harvard_yard_map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var fort_drum_info = "<strong>Fort Drum Aerospace Reset Contractor</strong><br/>" +
        "<a href='https://home.army.mil/drum/index.php'>Helicopter Re-Manurfacturing</a>";

    var northwest_info = "<strong>Northwest Science Building</strong><br/>" + "Latitude: 42.3795462<br/>" + "Longitude: -71.1156024";

    var chez_sheridan_info = "<strong>Steven Breen's Office/Shop</strong><br/>" + "9 Sheridan St<br/>" + "Nashua, NH 03064";

    var precision_coating_info = "<strong>Medical Device Coater</strong><br/>";

    var berlin_city_info = "<strong>Automotive Finisher/Dealer</strong><br/>" + "Gorham, NH";

    var cil_info = "<strong>Anodizer/Electro-Plater</strong><br/>" + "Lawrence, MA";

    var colonial_info = "<strong>Aerospace/Industrial Finisher </strong><br/>" + "Milford, CT";

    var landing_info = "<strong>Composite Boat Design/Build Lab</strong><br/>" + "Arundel, ME";

    var lyndon_info = "<strong>Institutional Furniture Manufacturer</strong><br/>" + "Lyndon, VT";

    var design_info = "<strong>Design/Fabrication Shop</strong><br/>" + "Cranston, RI";

    var emtec_info = "<strong>Architectural Fabricator </strong><br/>" + "Bridgeport, CT";

    var saratoga_info = "<strong>Job Fab Shop</strong><br/>" + "Saratoga Springs, NY";

    var whelen_info = "<strong>Emergency Equipment Manurfacturer</strong><br/>" + "Charlestown, NH";

    var boat_info = "<strong>Luxury Yacht Builder</strong><br/>" + "Richmond, ME";

    var mex_info = "<strong>OEM Volkswagon Parts Manurfaturer</strong><br/>" + "Puebla, Mexico";

    var pei_info = "<strong>Progressive Energy</strong><br/>" + "Bedford, NH Corporate Office<br/>" + "<a href='https://progressiveenergy.com'>PEI.Com</a>";
    
    var suntube_info = "<strong>Solaronics, Inc</strong><br/>" + "Auburn Hills, MI<br/>" + "<a href='https://solaronicsusa.com'>Solaronics.com</a>";
    
    var jfk_info = "<strong>Pan Am Air Freight</strong><br/>" + "JFK International Airport<br/>" + "Long Island, NY";
    
    var ge_info = "<strong>Plastics Research/Developement</strong><br/>" + "Pittsfield, MA";
    
    var vt_ware_info = "<strong>Fabrication/Jobber Shop</strong><br/>" + "St Georges, VT";
    
    var steel_info = "<strong>Steel Fabricator</strong><br/>" + "Allentown, PA";


    var fort_drum_infowindow = new google.maps.InfoWindow({
        content: fort_drum_info
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

    var berlin_city_infowindow = new google.maps.InfoWindow({
        content: berlin_city_info
    });

    var cil_infowindow = new google.maps.InfoWindow({
        content: cil_info
    });

    var colonial_infowindow = new google.maps.InfoWindow({
        content: colonial_info
    });

    var landing_infowindow = new google.maps.InfoWindow({
        content: landing_info
    });

    var lyndon_infowindow = new google.maps.InfoWindow({
        content: lyndon_info
    });

    var design_infowindow = new google.maps.InfoWindow({
        content: design_info
    });

    var emtec_infowindow = new google.maps.InfoWindow({
        content: emtec_info
    });

    var saratoga_infowindow = new google.maps.InfoWindow({
        content: saratoga_info
    });

    var whelen_infowindow = new google.maps.InfoWindow({
        content: whelen_info
    });

    var boat_infowindow = new google.maps.InfoWindow({
        content: boat_info
    });

    var mex_infowindow = new google.maps.InfoWindow({
        content: mex_info
    });

    var pei_infowindow = new google.maps.InfoWindow({
        content: pei_info
    });
    
    var suntube_infowindow = new google.maps.InfoWindow({
        content: suntube_info
    });
    
    var jfk_infowindow = new google.maps.InfoWindow({
        content: jfk_info
    });
    
    var ge_infowindow = new google.maps.InfoWindow({
        content: ge_info
    });
    
     var vt_ware_infowindow = new google.maps.InfoWindow({
        content: vt_ware_info
    });
    
    var steel_infowindow = new google.maps.InfoWindow({
        content: steel_info
    });
    


    var fort_drum_marker = new google.maps.Marker({
        position: fort_drum_latlng,
        map: harvard_yard_map,
        title: 'Fort Drum Aerospace Contractor'
    });

    var northwest_marker = new google.maps.Marker({
        position: northwest_latlng,
        map: harvard_yard_map,
        title: 'Northwest Science Building'
    });

    var chez_sheridan_marker = new google.maps.Marker({
        position: chez_sheridan_latlng,
        map: harvard_yard_map,
        title: 'Steven Breen-Office/Shop',
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    });

    var precision_coating_marker = new google.maps.Marker({
        position: precision_coating_latlng,
        map: harvard_yard_map,
        title: 'Precision Coating'
    });

    var berlin_city_marker = new google.maps.Marker({
        position: berlin_city_latlng,
        map: harvard_yard_map,
        title: 'Automotive Dealer/Finisher'
    });

    var cil_marker = new google.maps.Marker({
        position: cil_latlng,
        map: harvard_yard_map,
        title: 'Anodizer/Electro-Plater'
    });

    var colonial_marker = new google.maps.Marker({
        position: colonial_latlng,
        map: harvard_yard_map,
        title: 'Aerospace Industry Plater/Finisher'
    });

    var landing_marker = new google.maps.Marker({
        position: landing_latlng,
        map: harvard_yard_map,
        title: 'The Composite Boat Building School'
    });

    var lyndon_marker = new google.maps.Marker({
        position: lyndon_latlng,
        map: harvard_yard_map,
        title: 'Furniture Manurfacturer'
    });

    var design_marker = new google.maps.Marker({
        position: design_latlng,
        map: harvard_yard_map,
        title: 'Metal Fabrication Shop'
    });

    var emtec_marker = new google.maps.Marker({
        position: emtec_latlng,
        map: harvard_yard_map,
        title: 'Architectural Fabricator'
    });

    var saratoga_marker = new google.maps.Marker({
        position: saratoga_latlng,
        map: harvard_yard_map,
        title: 'Jobber Shop/ Metal Fab'
    });

    var whelen_marker = new google.maps.Marker({
        position: whelen_latlng,
        map: harvard_yard_map,
        title: 'Emergency Equipment Manurfacturer'
    });

    var boat_marker = new google.maps.Marker({
        position: boat_latlng,
        map: harvard_yard_map,
        title: 'Yacht Builder'
    });

    var mex_marker = new google.maps.Marker({
        position: mex_latlng,
        map: harvard_yard_map,
        title: 'OEM Auto Parts Supplier'
    });

    var pei_marker = new google.maps.Marker({
        position: pei_latlng,
        map: harvard_yard_map,
        title: 'Progressive Energy Headquarters'
    });
    
    var suntube_marker = new google.maps.Marker({
        position: suntube_latlng,
        map: harvard_yard_map,
        title: 'Solaronics Plant'
    });
    
    var jfk_marker = new google.maps.Marker({
        position: jfk_latlng,
        map: harvard_yard_map,
        title: 'Pan Am Air Freight'
    });
    
    var ge_marker = new google.maps.Marker({
        position: ge_latlng,
        map: harvard_yard_map,
        title: 'Plastics R&D'
    });
    
    var vt_ware_marker = new google.maps.Marker({
        position: vt_ware_latlng,
        map: harvard_yard_map,
        title: 'Fab/Job Shop'
    });
    
    var steel_marker = new google.maps.Marker({
        position: steel_latlng,
        map: harvard_yard_map,
        title: 'Steel Fabricator'
    });

    google.maps.event.addListener(fort_drum_marker, 'click', function () {
        fort_drum_infowindow.open(harvard_yard_map, fort_drum_marker);
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

    google.maps.event.addListener(berlin_city_marker, 'click', function () {
        berlin_city_infowindow.open(harvard_yard_map, berlin_city_marker);
    });

    google.maps.event.addListener(cil_marker, 'click', function () {
        cil_infowindow.open(harvard_yard_map, cil_marker);
    });

    google.maps.event.addListener(colonial_marker, 'click', function () {
        colonial_infowindow.open(harvard_yard_map, colonial_marker);
    });

    google.maps.event.addListener(landing_marker, 'click', function () {
        landing_infowindow.open(harvard_yard_map, landing_marker);
    });

    google.maps.event.addListener(lyndon_marker, 'click', function () {
        lyndon_infowindow.open(harvard_yard_map, lyndon_marker);
    });

    google.maps.event.addListener(design_marker, 'click', function () {
        design_infowindow.open(harvard_yard_map, design_marker);
    });

    google.maps.event.addListener(emtec_marker, 'click', function () {
        emtec_infowindow.open(harvard_yard_map, emtec_marker);
    });

    google.maps.event.addListener(saratoga_marker, 'click', function () {
        saratoga_infowindow.open(harvard_yard_map, saratoga_marker);
    });

    google.maps.event.addListener(whelen_marker, 'click', function () {
        whelen_infowindow.open(harvard_yard_map, whelen_marker);
    });

    google.maps.event.addListener(boat_marker, 'click', function () {
        boat_infowindow.open(harvard_yard_map, boat_marker);
    });

    google.maps.event.addListener(mex_marker, 'click', function () {
        mex_infowindow.open(harvard_yard_map, mex_marker);
    });

    google.maps.event.addListener(pei_marker, 'click', function () {
        pei_infowindow.open(harvard_yard_map, pei_marker);
    });
    
    google.maps.event.addListener(suntube_marker, 'click', function () {
        suntube_infowindow.open(harvard_yard_map, suntube_marker);
    });
    
    google.maps.event.addListener(jfk_marker, 'click', function () {
        jfk_infowindow.open(harvard_yard_map, jfk_marker);
    });
    
    google.maps.event.addListener(ge_marker, 'click', function () {
        ge_infowindow.open(harvard_yard_map, ge_marker);
    });
    
    google.maps.event.addListener(vt_ware_marker, 'click', function () {
        vt_ware_infowindow.open(harvard_yard_map, vt_ware_marker);
    });
    
    google.maps.event.addListener(steel_marker, 'click', function () {
        steel_infowindow.open(harvard_yard_map, steel_marker);
    });


}
