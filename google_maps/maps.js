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
    var forest_latlng = new google.maps.LatLng(43.833977, -73.055520);
    var geno_latlng = new google.maps.LatLng(42.162169, -72.581649);
    var united_latlng = new google.maps.LatLng(40.865728, -74.229620);
    var evs_latlng = new google.maps.LatLng(42.916349, -72.259066);
    var pfe_latlng = new google.maps.LatLng(42.563881, -72.284395);
    var carmax_latlng = new google.maps.LatLng(41.787196, -72.663188);
    var helmet_latlng = new google.maps.LatLng(44.945014, -72.181452);
    var smyth_latlng = new google.maps.LatLng(41.966103, -72.457108);
    var corcon_latlng = new google.maps.LatLng(43.898568, -71.145521);
    var plp_latlng = new google.maps.LatLng(42.763989, -72.151933);
    var protk_latlng = new google.maps.LatLng(43.212682, -71.724145);
    var mag_latlng = new google.maps.LatLng(42.785904, -71.119374);
    var adan_latlng = new google.maps.LatLng(43.770140, -72.757891);
    var lhw_latlng = new google.maps.LatLng(43.290414, -70.866669);
    var armor_latlng = new google.maps.LatLng(42.437260, -73.294348);
    var blue_latlng = new google.maps.LatLng(44.637907, -70.130541);
    var pmi_latlng = new google.maps.LatLng(41.990884, -71.485394);
    var eb_latlng = new google.maps.LatLng(41.587184, -71.414170);
    var tba_latlng = new google.maps.LatLng(43.207524, -71.487582);
    var roche_latlng = new google.maps.LatLng(42.625940, -71.279806);
    var prescott_latlng = new google.maps.LatLng(43.466601, -70.492612);
    var crafts_latlng = new google.maps.LatLng(41.005824, -73.652228);
    var led_latlng = new google.maps.LatLng(40.707198, -73.397274);
    var devens_latlng = new google.maps.LatLng(42.549341, -71.587669);
    var radar_latlng = new google.maps.LatLng(42.418666, -71.539954);
    var jmd_latlng = new google.maps.LatLng(42.781839, -71.381889);
    var metal_latlng = new google.maps.LatLng(42.920801, -71.431559);
    var wrta_latlng = new google.maps.LatLng(42.249439, -71.805393);
    var hm_latlng = new google.maps.LatLng(42.804961, -71.580074);
    var rim_latlng = new google.maps.LatLng(42.674921, -71.444507);
    var mac_latlng = new google.maps.LatLng(42.568785, -71.988990);
    var therm_latlng = new google.maps.LatLng(42.558925, -71.615833);
    var duncan_latlng = new google.maps.LatLng(42.407133, -71.067362);
    var set_latlng = new google.maps.LatLng(42.184817, -71.200335);
    var pine_latlng = new google.maps.LatLng(44.264209, -69.156833);
    var kab_latlng = new google.maps.LatLng(42.004672, -70.757951);
    var bms_latlng = new google.maps.LatLng(43.154587, -73.690920);
    var cwt_latlng = new google.maps.LatLng(41.669950, -72.787610);
    var ag_latlng = new google.maps.LatLng(42.832954, -70.962489);
    var nw_latlng = new google.maps.LatLng(42.586836, -71.305596);
    var gfs_latlng = new google.maps.LatLng(44.581854, -91.204141);
    var bose_latlng = new google.maps.LatLng(42.302347, -71.475465);
    var bobs_latlng = new google.maps.LatLng(42.597358, -71.145872);
    var harvey_latlng = new google.maps.LatLng(42.931606, -71.385205);
    var richey_latlng = new google.maps.LatLng(42.801109, -70.880812);
    var hhc_latlng = new google.maps.LatLng(43.798297, -73.087901);
    var bay_latlng = new google.maps.LatLng(43.178210, -70.914768);
    var kal_latlng = new google.maps.LatLng(42.987994, -71.406646);
    var dura_latlng = new google.maps.LatLng(42.161972, -71.464012);
    var dyna_latlng = new google.maps.LatLng(42.800878, -70.882320);
    var bae_latlng = new google.maps.LatLng(42.814631, -71.485930);
    var anjen_latlng = new google.maps.LatLng(42.334687, -71.598505);
    var pws_latlng = new google.maps.LatLng(42.640206, -71.322883);
    var koll_latlng = new google.maps.LatLng(42.824483, -71.493695);
    var pro_latlng = new google.maps.LatLng(42.858723, -71.176272);
    
    
    var mapOptions = {
        zoom: 7,
        center: new google.maps.LatLng(42.85226761, -75.75546543),
        mapTypeId: 'hybrid'
    };
    
    harvard_yard_map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var fort_drum_info = "<strong>Fort Drum Aerospace Reset Contractor</strong><br/>" +
        "<a href='https://home.army.mil/drum/index.php'>Blackhawk Helicopter Re-Manufacturing</a>";

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

    var whelen_info = "<strong>Emergency Equipment Manufacturer</strong><br/>" + "Charlestown, NH";

    var boat_info = "<strong>Luxury Yacht Builder</strong><br/>" + "Richmond, ME";

    var mex_info = "<strong>OEM Volkswagon Parts Manufacturer</strong><br/>" + "Puebla, Mexico";

    var pei_info = "<strong>Progressive Energy</strong><br/>" + "Bedford, NH Corporate Office<br/>" + "<a href='https://progressiveenergy.com'>PEI.Com</a>";
    
    var suntube_info = "<strong>Solaronics, Inc</strong><br/>" + "Auburn Hills, MI<br/>" + "<a href='https://solaronicsusa.com'>Solaronics.com</a>";
    
    var jfk_info = "<strong>Pan Am Air Freight</strong><br/>" + "JFK International Airport<br/>" + "Long Island, NY";
    
    var ge_info = "<strong>Plastics Research/Developement</strong><br/>" + "Pittsfield, MA";
    
    var vt_ware_info = "<strong>Fabrication/Jobber Shop</strong><br/>" + "St Georges, VT";
    
    var steel_info = "<strong>Steel Fabricator</strong><br/>" + "Allentown, PA";

    var forest_info = "<strong>Institutional Furniture Manufacturer</strong><br/>" + "Forestdale, VT";
    
    var geno_info = "<strong>Auto Body Repair</strong><br/>" + "Chicopee, MA";
    
    var united_info = "<strong>Job Shop/Silk Screener</strong><br/>" + "Cedar Grove, NJ";
    
    var evs_info = "<strong>Sheet Metal Fab</strong><br/>" + "Keene, NH";
    
    var pfe_info = "<strong>Roll Machine Shop</strong><br/>" + "Orange, MA";
    
    var carmax_info = "<strong>Auto Super Store</strong><br/>" + "Hartford, CT";
    
    var helmet_info = "<strong>Military Helmet Manufacturer</strong><br/>" + "Newport, VT";
    
    var smyth_info = "<strong>Truck Collision Repair</strong><br/>" + "Somers, CT";
    
    var corcon_info = "<strong>Luxury Home Builder</strong><br/>" + "Madison, NH";
    
    var plp_info = "<strong>Composite Pole Fabrication</strong><br/>" + "Fitzwilliam, NH";
    
    var protk_info = "<strong>Sheet Metal Fabricator</strong><br/>" + "Contoocook, NH";
    
    var mag_info = "<strong>Jet Engine Manufacturer</strong><br/>" + "Haverhill, MA";
    
    var adan_info = "<strong>Animatronic Fabricator</strong><br/>" + "Stockbridge, VT";
    
    var lhw_info = "<strong>Specialty Window Maker</strong><br/>" + "Berwick, ME";
    
    var armor_info = "<strong>Armored Vehicle Manufacturer</strong><br/>" + "Pittsfield, MA";
    
    var blue_info = "<strong>High School Composite Shop</strong><br/>" + "Farmington, ME";
    
    var pmi_info = "<strong>Injection Moulder</strong><br/>" + "Woonsocket, RI";
    
    var eb_info = "<strong>General Dynamics</strong><br/>" + "Electric Boat<br/>" + "Quonset Point, RI";
    
    var tba_info = "<strong>Powder Coating Shop</strong><br/>" + "Concord, NH";
    
    var roche_info = "<strong>Steel Barrel Manufacturer</strong><br/>" + "Lowell, MA";
    
    var prescott_info = "<strong>Sheet Metal Fabricator</strong><br/>" + "Biddeford, ME";
    
    var crafts_info = "<strong>Light Fixture Fabricator</strong><br/>" + "Greenwich, CT";
    
    var led_info = "<strong>Light Fixture Fabricator</strong><br/>" + "Amityville, NY";
    
    var devens_info = "<strong>Army National Guard</strong><br/>" + "Equipment Refurbishment Shop<br/>" + "Amityville, NY";
    
    var radar_info = "<strong>Radar Dome Fabricator</strong><br/>" + "Stow, MA";
    
    var jmd_info = "<strong>Metal Plater</strong><br/>" + "Hudson, NH";
    
    var metal_info = "<strong>Sheet Metal Fabricator</strong><br/>" + "Londonderry, NH";
    
    var wrta_info = "<strong>Worcester Regional Transit Authority</strong><br/>" + "Bus Maintainance Facility<br/>" + "Worcester, MA";
    
    var hm_info = "<strong>Sheet Metal Fabricator</strong><br/>" + "Amherst, NH";
    
    var rim_info = "<strong>Vehicle Wheel Refinisher</strong><br/>" + "Tyngsborough, MA";
    
    var mac_info = "<strong>Prototype Fabricator</strong><br/>" + "Gardner, MA";
    
    var therm_info = "<strong>Plastics Fab Shop</strong><br/>" + "Shirley, MA";
    
    var duncan_info = "<strong>Galvanizing Shop</strong><br/>" + "Everett, MA";
    
    var set_info = "<strong>Studio Set Fabricator</strong><br/>" + "Norwood, MA";
    
    var pine_info = "<strong>Caninet Maker Shop</strong><br/>" + "Hope, ME";
    
    var kab_info = "<strong>Auto Body Repair</strong><br/>" + "Kingston, MA";
    
    var bms_info = "<strong>Metal Fabrication Shop</strong><br/>" + "Gansevoort, NY";
    
    var cwt_info = "<strong>Water Treatment Plant</strong><br/>" + "New Britain, CT";
    
    var ag_info = "<strong>Industrial Silkscreener</strong><br/>" + "Amesbury, MA";
    
    var nw_info = "<strong>Norris Wiener, Inc.</strong><br/>" + "Finishing Equipment Supplier<br/>" + "North Billerica, MA";
    
    var gfs_info = "<strong>Global Finishing Solutions</strong><br/>" + "Finishing Equipment Manufacturer<br/>" + "Osseo, WI";
    
    var bose_info = "<strong>Bose Corporation</strong><br/>" + "Model Shop<br/>" + "Framingham, MA";
    
    var bobs_info = "<strong>Auto Body Shop</strong><br/>" + "Wilmington, MA";
    
    var harvey_info = "<strong>Harvey Manufaturing</strong><br/>" + "Window & Door Fab<br/>" + "Londonderry, NH";
    
    var richey_info = "<strong>Mark Richey Woodworking</strong><br/>" + "Millwork Shop<br/>" + "Newburyport, MA";
    
    var hhc_info = "<strong>Hawk Hill Cabinetry</strong><br/>" + "Millwork Shop<br/>" + "Brandon, VT";
    
    var bay_info = "<strong>Bayhead Products</strong><br/>" + "Material Handling Equipment Manufacturer<br/>" + "Dover, NH";
    
    var kal_info = "<strong>Kalwall Corporation</strong><br/>" + "Plastic Panel Manufacturer<br/>" + "Candia, NH";
    
    var dura_info = "<strong>American Durafilm</strong><br/>" + "Plastic Fabricator<br/>" + "Holliston, MA";
    
    var dyna_info = "<strong>DynaChrome</strong><br/>" + "Plating Service<br/>" + "Newburyport, MA";
    
    var bae_info = "<strong>BAE Systems</strong><br/>" + "Aerospace Contractor<br/>" + "Merrimack, NH";
    
    var anjen_info = "<strong>Anjen Finishing</strong><br/>" + "Powder Coating Shop<br/>" + "Northborough, MA";
    
    var pws_info = "<strong>Phoenix Work Stations</strong><br/>" + "Industrial Bench Manufacturer<br/>" + "Lowell, MA";
    
    var koll_info = "<strong>Kollsman</strong><br/>" + "Aviation Electronics<br/>" + "Merrimack, NH";
    
    var pro_info = "<strong>Powder Coater</strong><br/>" + "Hampstead, NH";

    
    
    /* This var is for the map icon style/size */
    var icon = {
        url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // url
        scaledSize: new google.maps.Size(25, 25), // size
    };
    


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
    
    var forest_infowindow = new google.maps.InfoWindow({
        content: forest_info
    });
    
    var geno_infowindow = new google.maps.InfoWindow({
        content: geno_info
    });
    
    var united_infowindow = new google.maps.InfoWindow({
        content: united_info
    });
    
    var evs_infowindow = new google.maps.InfoWindow({
        content: evs_info
    });
    
    var pfe_infowindow = new google.maps.InfoWindow({
        content: pfe_info
    });
    
    var carmax_infowindow = new google.maps.InfoWindow({
        content: carmax_info
    });
    
    var helmet_infowindow = new google.maps.InfoWindow({
        content: helmet_info
    });
    
    var smyth_infowindow = new google.maps.InfoWindow({
        content: smyth_info
    });
    
    var corcon_infowindow = new google.maps.InfoWindow({
        content: corcon_info
    });
    
    var plp_infowindow = new google.maps.InfoWindow({
        content: plp_info
    });
    
    var protk_infowindow = new google.maps.InfoWindow({
        content: protk_info
    });
    
    var mag_infowindow = new google.maps.InfoWindow({
        content: mag_info
    });
    
    var adan_infowindow = new google.maps.InfoWindow({
        content: adan_info
    });
    
    var lhw_infowindow = new google.maps.InfoWindow({
        content: lhw_info
    });
    
    var armor_infowindow = new google.maps.InfoWindow({
        content: armor_info
    });
    
    var blue_infowindow = new google.maps.InfoWindow({
        content: blue_info
    });
    
    var pmi_infowindow = new google.maps.InfoWindow({
        content: pmi_info
    });
    
    var eb_infowindow = new google.maps.InfoWindow({
        content: eb_info
    });
    
    var tba_infowindow = new google.maps.InfoWindow({
        content: tba_info
    });
    
    var roche_infowindow = new google.maps.InfoWindow({
        content: roche_info
    });
    
    var prescott_infowindow = new google.maps.InfoWindow({
        content: prescott_info
    });
    
    var crafts_infowindow = new google.maps.InfoWindow({
        content: crafts_info
    });
    
    var led_infowindow = new google.maps.InfoWindow({
        content: led_info
    });
    
    var devens_infowindow = new google.maps.InfoWindow({
        content: devens_info
    });
    
    var radar_infowindow = new google.maps.InfoWindow({
        content: radar_info
    });
    
    var jmd_infowindow = new google.maps.InfoWindow({
        content: jmd_info
    });
    
    var metal_infowindow = new google.maps.InfoWindow({
        content: metal_info
    });
    
    var wrta_infowindow = new google.maps.InfoWindow({
        content: wrta_info
    });
    
    var hm_infowindow = new google.maps.InfoWindow({
        content: hm_info
    });
    
    var rim_infowindow = new google.maps.InfoWindow({
        content: rim_info
    });
    
    var mac_infowindow = new google.maps.InfoWindow({
        content: mac_info
    });
    
    var therm_infowindow = new google.maps.InfoWindow({
        content: therm_info
    });
    
    var duncan_infowindow = new google.maps.InfoWindow({
        content: duncan_info
    });
    
    var set_infowindow = new google.maps.InfoWindow({
        content: set_info
    });
    
    var pine_infowindow = new google.maps.InfoWindow({
        content: pine_info
    });
    
    var kab_infowindow = new google.maps.InfoWindow({
        content: kab_info
    });
    
    var bms_infowindow = new google.maps.InfoWindow({
        content: bms_info
    });
    
    var cwt_infowindow = new google.maps.InfoWindow({
        content: cwt_info
    });
    
    var ag_infowindow = new google.maps.InfoWindow({
        content: ag_info
    });
    
    var nw_infowindow = new google.maps.InfoWindow({
        content: nw_info
    });
    
    var gfs_infowindow = new google.maps.InfoWindow({
        content: gfs_info
    });
    
    var bose_infowindow = new google.maps.InfoWindow({
        content: bose_info
    });
    
    var bobs_infowindow = new google.maps.InfoWindow({
        content: bobs_info
    });
    
    var harvey_infowindow = new google.maps.InfoWindow({
        content: harvey_info
    });
    
    var richey_infowindow = new google.maps.InfoWindow({
        content: richey_info
    });
    
    var hhc_infowindow = new google.maps.InfoWindow({
        content: hhc_info
    });
    
    var bay_infowindow = new google.maps.InfoWindow({
        content: bay_info
    });
    
    var kal_infowindow = new google.maps.InfoWindow({
        content: kal_info
    });
    
    var dura_infowindow = new google.maps.InfoWindow({
        content: dura_info
    });
    
    var dyna_infowindow = new google.maps.InfoWindow({
        content: dyna_info
    });
    
    var bae_infowindow = new google.maps.InfoWindow({
        content: bae_info
    });
    
    var anjen_infowindow = new google.maps.InfoWindow({
        content: anjen_info
    });
    
    var pws_infowindow = new google.maps.InfoWindow({
        content: pws_info
    });
    
    var koll_infowindow = new google.maps.InfoWindow({
        content: koll_info
    });
    
    var pro_infowindow = new google.maps.InfoWindow({
        content: pro_info
    });



    var fort_drum_marker = new google.maps.Marker({
        position: fort_drum_latlng,
        map: harvard_yard_map,
        title: 'Fort Drum Aerospace Contractor',
        scaledSize: new google.maps.Size(25, 25),
    });

    var northwest_marker = new google.maps.Marker({
        position: northwest_latlng,
        map: harvard_yard_map,
        title: 'Northwest Science Building'
    });
    
    /* Steve's Shop/Office Main Marker with code to place on top of others and resize. */

    var chez_sheridan_marker = new google.maps.Marker({
        position: chez_sheridan_latlng,
        map: harvard_yard_map,
        title: 'Steven Breen-Office/Shop',
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        zIndex: 9999,
        scaledSize: new google.maps.Size(200, 200),
    });

    var precision_coating_marker = new google.maps.Marker({
        position: precision_coating_latlng,
        map: harvard_yard_map,
        title: 'Precision Coating'
    });

    var berlin_city_marker = new google.maps.Marker({
        position: berlin_city_latlng,
        map: harvard_yard_map,
        title: 'Automotive Dealer/Finisher',
        icon: icon
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

     var forest_marker = new google.maps.Marker({
        position: forest_latlng,
        map: harvard_yard_map,
        title: 'Institutional Furniture Maker'
    });
    
    var geno_marker = new google.maps.Marker({
        position: geno_latlng,
        map: harvard_yard_map,
        title: 'Auto Collision Repair'
    });
    
    var united_marker = new google.maps.Marker({
        position: united_latlng,
        map: harvard_yard_map,
        title: 'Jobber Shop'
    });
    
    var evs_marker = new google.maps.Marker({
        position: evs_latlng,
        map: harvard_yard_map,
        title: 'Sheet Metal Fabrication'
    });
    
    var pfe_marker = new google.maps.Marker({
        position: pfe_latlng,
        map: harvard_yard_map,
        title: 'Roll Machine Shop'
    });
    
    var carmax_marker = new google.maps.Marker({
        position: carmax_latlng,
        map: harvard_yard_map,
        title: 'Automotive Super Store'
    });
    
    var helmet_marker = new google.maps.Marker({
        position: helmet_latlng,
        map: harvard_yard_map,
        title: 'Kevlar Helmet Maker'
    });
    
     var smyth_marker = new google.maps.Marker({
        position: smyth_latlng,
        map: harvard_yard_map,
        title: 'Heavy Collision Repair'
    });
    
    var corcon_marker = new google.maps.Marker({
        position: corcon_latlng,
        map: harvard_yard_map,
        title: 'Cabinet Maker'
    });
    
    var plp_marker = new google.maps.Marker({
        position: plp_latlng,
        map: harvard_yard_map,
        title: 'Composite Flag Pole Maker'
    });
    
    var protk_marker = new google.maps.Marker({
        position: protk_latlng,
        map: harvard_yard_map,
        title: 'Sheet Metal Fabricator'
    });
    
    var mag_marker = new google.maps.Marker({
        position: mag_latlng,
        map: harvard_yard_map,
        title: 'Jet Engine Maker'
    });
    
    var adan_marker = new google.maps.Marker({
        position: adan_latlng,
        map: harvard_yard_map,
        title: 'Animatronic System Fabricator'
    });
    
    var lhw_marker = new google.maps.Marker({
        position: lhw_latlng,
        map: harvard_yard_map,
        title: 'Custom Window Fabrication'
    });
    
    var armor_marker = new google.maps.Marker({
        position: armor_latlng,
        map: harvard_yard_map,
        title: 'Armored Vehicle Maker'
    });
    
    var blue_marker = new google.maps.Marker({
        position: blue_latlng,
        map: harvard_yard_map,
        title: 'High School Composite Shop'
    });
    
    var pmi_marker = new google.maps.Marker({
        position: pmi_latlng,
        map: harvard_yard_map,
        title: 'Injection Moulder'
    });
    
    var eb_marker = new google.maps.Marker({
        position: eb_latlng,
        map: harvard_yard_map,
        title: 'Electric Boat'
    });
    
    var tba_marker = new google.maps.Marker({
        position: tba_latlng,
        map: harvard_yard_map,
        title: 'Powder Coater'
    });
    
    var roche_marker = new google.maps.Marker({
        position: roche_latlng,
        map: harvard_yard_map,
        title: 'Barrel Manufacture'
    });
    
    var prescott_marker = new google.maps.Marker({
        position: prescott_latlng,
        map: harvard_yard_map,
        title: 'Metal Shop'
    });
    
    var crafts_marker = new google.maps.Marker({
        position: crafts_latlng,
        map: harvard_yard_map,
        title: 'Lighting Fabricator'
    });
    
    var led_marker = new google.maps.Marker({
        position: led_latlng,
        map: harvard_yard_map,
        title: 'Lighting Manufacturer'
    });
    
    var devens_marker = new google.maps.Marker({
        position: devens_latlng,
        map: harvard_yard_map,
        title: 'Army Paint Shop'
    });
    
    var radar_marker = new google.maps.Marker({
        position: radar_latlng,
        map: harvard_yard_map,
        title: 'Radar Dome Maker'
    });
    
    var jmd_marker = new google.maps.Marker({
        position: jmd_latlng,
        map: harvard_yard_map,
        title: 'Metal Plater'
    });
    
    var metal_marker = new google.maps.Marker({
        position: metal_latlng,
        map: harvard_yard_map,
        title: 'Sheet Metal Fab Shop'
    });
    
    var wrta_marker = new google.maps.Marker({
        position: wrta_latlng,
        map: harvard_yard_map,
        title: 'Transit Bus Paint Shop'
    });
    
    var hm_marker = new google.maps.Marker({
        position: hm_latlng,
        map: harvard_yard_map,
        title: 'Sheet Metal Fabber'
    });
    
    var rim_marker = new google.maps.Marker({
        position: rim_latlng,
        map: harvard_yard_map,
        title: 'Rim Refinisher'
    });
    
    var mac_marker = new google.maps.Marker({
        position: mac_latlng,
        map: harvard_yard_map,
        title: 'Prototype Fab Shop'
    });
    
    var therm_marker = new google.maps.Marker({
        position: therm_latlng,
        map: harvard_yard_map,
        title: 'Plastics Fabricator'
    });
    
    var duncan_marker = new google.maps.Marker({
        position: duncan_latlng,
        map: harvard_yard_map,
        title: 'Galvanizer'
    });
    
    var set_marker = new google.maps.Marker({
        position: set_latlng,
        map: harvard_yard_map,
        title: 'Studio Set Fabber'
    });
    
    var pine_marker = new google.maps.Marker({
        position: pine_latlng,
        map: harvard_yard_map,
        title: 'Cabinet Shop'
    });
    
    var kab_marker = new google.maps.Marker({
        position: kab_latlng,
        map: harvard_yard_map,
        title: 'Auto Body Shop'
    });
    
    var bms_marker = new google.maps.Marker({
        position: bms_latlng,
        map: harvard_yard_map,
        title: 'Metal Fab Shop'
    });
    
    var cwt_marker = new google.maps.Marker({
        position: cwt_latlng,
        map: harvard_yard_map,
        title: 'Treatment Plant'
    });
    
    var ag_marker = new google.maps.Marker({
        position: ag_latlng,
        map: harvard_yard_map,
        title: 'Silkscreener'
    });
    
    var nw_marker = new google.maps.Marker({
        position: nw_latlng,
        map: harvard_yard_map,
        title: 'Equipment Supplier'
    });
    
    var gfs_marker = new google.maps.Marker({
        position: gfs_latlng,
        map: harvard_yard_map,
        title: 'Manufacturer'
    });
    
    var bose_marker = new google.maps.Marker({
        position: bose_latlng,
        map: harvard_yard_map,
        title: 'Research & Developement'
    });
    
    var bobs_marker = new google.maps.Marker({
        position: bobs_latlng,
        map: harvard_yard_map,
        title: 'Body Shop'
    });
    
    var harvey_marker = new google.maps.Marker({
        position: harvey_latlng,
        map: harvard_yard_map,
        title: 'Building Products Manufacturer'
    });
    
    var richey_marker = new google.maps.Marker({
        position: richey_latlng,
        map: harvard_yard_map,
        title: 'Woodwork Shop'
    });
    
    var hhc_marker = new google.maps.Marker({
        position: hhc_latlng,
        map: harvard_yard_map,
        title: 'Cabinet Shop'
    });
    
    var bay_marker = new google.maps.Marker({
        position: bay_latlng,
        map: harvard_yard_map,
        title: 'Plastics Rotation Moulder'
    });
    
    var kal_marker = new google.maps.Marker({
        position: kal_latlng,
        map: harvard_yard_map,
        title: 'Passive Solar Panel Manufacturer'
    });
    
    var dura_marker = new google.maps.Marker({
        position: dura_latlng,
        map: harvard_yard_map,
        title: 'Plastics Fabber'
    });
    
    var dyna_marker = new google.maps.Marker({
        position: dyna_latlng,
        map: harvard_yard_map,
        title: 'Plating Shop'
    });
    
    var bae_marker = new google.maps.Marker({
        position: bae_latlng,
        map: harvard_yard_map,
        title: 'Aerospace Composite Shop'
    });
    
    var anjen_marker = new google.maps.Marker({
        position: anjen_latlng,
        map: harvard_yard_map,
        title: 'Finishing  Shop'
    });
    
    var pws_marker = new google.maps.Marker({
        position: pws_latlng,
        map: harvard_yard_map,
        title: 'Work Bench Maker'
    });
    
     var koll_marker = new google.maps.Marker({
        position: koll_latlng,
        map: harvard_yard_map,
        title: 'Aviation Electronics'
    });
    
    var pro_marker = new google.maps.Marker({
        position: pro_latlng,
        map: harvard_yard_map,
        title: 'Powder Coating Shop'
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
    
     google.maps.event.addListener(forest_marker, 'click', function () {
        forest_infowindow.open(harvard_yard_map, forest_marker);
    });
    
     google.maps.event.addListener(geno_marker, 'click', function () {
        geno_infowindow.open(harvard_yard_map, geno_marker);
    });
    
     google.maps.event.addListener(united_marker, 'click', function () {
        united_infowindow.open(harvard_yard_map, united_marker);
    });
    
     google.maps.event.addListener(evs_marker, 'click', function () {
        evs_infowindow.open(harvard_yard_map, evs_marker);
    });
    
    google.maps.event.addListener(pfe_marker, 'click', function () {
        pfe_infowindow.open(harvard_yard_map, pfe_marker);
    });
    
    google.maps.event.addListener(carmax_marker, 'click', function () {
        carmax_infowindow.open(harvard_yard_map, carmax_marker);
    });
    
    google.maps.event.addListener(helmet_marker, 'click', function () {
        helmet_infowindow.open(harvard_yard_map, helmet_marker);
    });
    
    google.maps.event.addListener(smyth_marker, 'click', function () {
        smyth_infowindow.open(harvard_yard_map, smyth_marker);
    });
    
    google.maps.event.addListener(corcon_marker, 'click', function () {
        corcon_infowindow.open(harvard_yard_map, corcon_marker);
    });
    
    google.maps.event.addListener(plp_marker, 'click', function () {
        plp_infowindow.open(harvard_yard_map, plp_marker);
    });
    
    google.maps.event.addListener(protk_marker, 'click', function () {
        protk_infowindow.open(harvard_yard_map, protk_marker);
    });
    
    google.maps.event.addListener(mag_marker, 'click', function () {
        mag_infowindow.open(harvard_yard_map, mag_marker);
    });
    
    google.maps.event.addListener(adan_marker, 'click', function () {
        adan_infowindow.open(harvard_yard_map, adan_marker);
    });
    
    google.maps.event.addListener(lhw_marker, 'click', function () {
        lhw_infowindow.open(harvard_yard_map, lhw_marker);
    });
    
    google.maps.event.addListener(armor_marker, 'click', function () {
        armor_infowindow.open(harvard_yard_map, armor_marker);
    });
    
    google.maps.event.addListener(blue_marker, 'click', function () {
        blue_infowindow.open(harvard_yard_map, blue_marker);
    });
    
    google.maps.event.addListener(pmi_marker, 'click', function () {
        pmi_infowindow.open(harvard_yard_map, pmi_marker);
    });
    
    google.maps.event.addListener(eb_marker, 'click', function () {
        eb_infowindow.open(harvard_yard_map, eb_marker);
    });
    
    google.maps.event.addListener(tba_marker, 'click', function () {
        tba_infowindow.open(harvard_yard_map, tba_marker);
    });
    
    google.maps.event.addListener(roche_marker, 'click', function () {
        roche_infowindow.open(harvard_yard_map, roche_marker);
    });
    
    google.maps.event.addListener(prescott_marker, 'click', function () {
        prescott_infowindow.open(harvard_yard_map, prescott_marker);
    });
    
    google.maps.event.addListener(crafts_marker, 'click', function () {
        crafts_infowindow.open(harvard_yard_map, crafts_marker);
    });
    
    google.maps.event.addListener(led_marker, 'click', function () {
        led_infowindow.open(harvard_yard_map, led_marker);
    });
    
    google.maps.event.addListener(devens_marker, 'click', function () {
        devens_infowindow.open(harvard_yard_map, devens_marker);
    });
    
    google.maps.event.addListener(radar_marker, 'click', function () {
        radar_infowindow.open(harvard_yard_map, radar_marker);
    });
    
    google.maps.event.addListener(jmd_marker, 'click', function () {
        jmd_infowindow.open(harvard_yard_map, jmd_marker);
    });
    
    google.maps.event.addListener(metal_marker, 'click', function () {
        metal_infowindow.open(harvard_yard_map, metal_marker);
    });
    
    google.maps.event.addListener(wrta_marker, 'click', function () {
        wrta_infowindow.open(harvard_yard_map, wrta_marker);
    });
    
    google.maps.event.addListener(hm_marker, 'click', function () {
        hm_infowindow.open(harvard_yard_map, hm_marker);
    });
    
    google.maps.event.addListener(rim_marker, 'click', function () {
        rim_infowindow.open(harvard_yard_map, rim_marker);
    });
    
    google.maps.event.addListener(mac_marker, 'click', function () {
        mac_infowindow.open(harvard_yard_map, mac_marker);
    });
    
    google.maps.event.addListener(therm_marker, 'click', function () {
        therm_infowindow.open(harvard_yard_map, therm_marker);
    });
    
    google.maps.event.addListener(duncan_marker, 'click', function () {
        duncan_infowindow.open(harvard_yard_map, duncan_marker);
    });
    
    google.maps.event.addListener(set_marker, 'click', function () {
        set_infowindow.open(harvard_yard_map, set_marker);
    });
    
    google.maps.event.addListener(pine_marker, 'click', function () {
        pine_infowindow.open(harvard_yard_map, pine_marker);
    });
    
    google.maps.event.addListener(kab_marker, 'click', function () {
        kab_infowindow.open(harvard_yard_map, kab_marker);
    });
    
    google.maps.event.addListener(bms_marker, 'click', function () {
        bms_infowindow.open(harvard_yard_map, bms_marker);
    });
    
    google.maps.event.addListener(cwt_marker, 'click', function () {
        cwt_infowindow.open(harvard_yard_map, cwt_marker);
    });
    
    google.maps.event.addListener(ag_marker, 'click', function () {
        ag_infowindow.open(harvard_yard_map, ag_marker);
    });
    
    google.maps.event.addListener(nw_marker, 'click', function () {
        nw_infowindow.open(harvard_yard_map, nw_marker);
    });
    
    google.maps.event.addListener(gfs_marker, 'click', function () {
        gfs_infowindow.open(harvard_yard_map, gfs_marker);
    });
    
    google.maps.event.addListener(bose_marker, 'click', function () {
        bose_infowindow.open(harvard_yard_map, bose_marker);
    });
    
    google.maps.event.addListener(bobs_marker, 'click', function () {
        bobs_infowindow.open(harvard_yard_map, bobs_marker);
    });
    
    google.maps.event.addListener(harvey_marker, 'click', function () {
        harvey_infowindow.open(harvard_yard_map, harvey_marker);
    });
    
    google.maps.event.addListener(richey_marker, 'click', function () {
        richey_infowindow.open(harvard_yard_map, richey_marker);
    });
    
    google.maps.event.addListener(hhc_marker, 'click', function () {
        hhc_infowindow.open(harvard_yard_map, hhc_marker);
    });
    
    google.maps.event.addListener(bay_marker, 'click', function () {
        bay_infowindow.open(harvard_yard_map, bay_marker);
    });
    
    google.maps.event.addListener(kal_marker, 'click', function () {
        kal_infowindow.open(harvard_yard_map, kal_marker);
    });
    
    google.maps.event.addListener(dura_marker, 'click', function () {
        dura_infowindow.open(harvard_yard_map, dura_marker);
    });
    
    google.maps.event.addListener(bae_marker, 'click', function () {
        bae_infowindow.open(harvard_yard_map, bae_marker);
    });
    
    google.maps.event.addListener(anjen_marker, 'click', function () {
        anjen_infowindow.open(harvard_yard_map, anjen_marker);
    });
    
    google.maps.event.addListener(pws_marker, 'click', function () {
        pws_infowindow.open(harvard_yard_map, pws_marker);
    });
    
    google.maps.event.addListener(koll_marker, 'click', function () {
        koll_infowindow.open(harvard_yard_map, koll_marker);
    });
    
    google.maps.event.addListener(pro_marker, 'click', function () {
        pro_infowindow.open(harvard_yard_map, pro_marker);
    });





}
