var harvard_yard_map;
/* John Harvard Status
42.374474,-71.117207 */





function initMap() {
    console.log("I'm in initmap");
    var starting_center_latlng = new google.maps.LatLng(33.340755, -87.201459);
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
    var edab_latlng = new google.maps.LatLng(42.387939, -71.018061);
    var jpro_latlng = new google.maps.LatLng(41.386371, -72.163009);
    var metso_latlng = new google.maps.LatLng(42.299183, -71.755980);
    var natl_latlng = new google.maps.LatLng(42.042749, -71.206717);
    var grapek_latlng = new google.maps.LatLng(40.123942, -76.003888);
    var mta_latlng = new google.maps.LatLng(40.707412, -73.780572);
    var eppley_latlng = new google.maps.LatLng(40.940967, -74.164334);
    var duck_latlng = new google.maps.LatLng(42.299409, -71.056044);
    var display_latlng = new google.maps.LatLng(40.762642, -73.429244);
    var furman_latlng = new google.maps.LatLng(41.692148, -71.175632);
    var rapid_latlng = new google.maps.LatLng(42.777993, -71.500630);
    var minute_latlng = new google.maps.LatLng(42.110344, -71.246050);
    var faniel_latlng = new google.maps.LatLng(42.244642, -70.917666);
    var newton_latlng = new google.maps.LatLng(42.354882, -71.202077);
    var ab_latlng = new google.maps.LatLng(42.702731, -71.419056);
    var fresh_latlng = new google.maps.LatLng(42.860484, -71.101491);
    var edo_latlng = new google.maps.LatLng(40.710598, -73.399051);
    var buck_latlng = new google.maps.LatLng(42.199430, -71.749115);
    var lundy_latlng = new google.maps.LatLng(42.477914, -70.955037);
    var iron_latlng = new google.maps.LatLng(42.882525, -71.329483);
    var martin_latlng = new google.maps.LatLng(42.888039, -70.884624);
    var carlos_latlng = new google.maps.LatLng(40.671486, -74.200218);
    var time_latlng = new google.maps.LatLng(41.216362, -73.984500);
    var mass_latlng = new google.maps.LatLng(42.738677, -71.212577);
    var fresh_latlng = new google.maps.LatLng(42.860414, -71.100622);
    var spray_me_latlng = new google.maps.LatLng(43.231700, -70.809956);
    var fuzz_latlng = new google.maps.LatLng(43.025027, -70.939568);
    var light_latlng = new google.maps.LatLng(42.383418, -71.203824);
    var foods_latlng = new google.maps.LatLng(44.431644, -69.011950);
    var silvex_latlng = new google.maps.LatLng(43.648803, -70.346556);
    var triangle_latlng = new google.maps.LatLng(39.257840, -76.681999);
    var met_atl_latlng = new google.maps.LatLng(33.790391, -84.627324);
    var dorma_latlng = new google.maps.LatLng(40.215129, -76.116723);
    var classic_latlng = new google.maps.LatLng(42.506649, -70.901660);
    var feeley_latlng = new google.maps.LatLng(42.240100, -71.007337);
    var ospc_latlng = new google.maps.LatLng(41.739228, -71.428761);
    var services_latlng = new google.maps.LatLng(42.229057, -71.429503);
    var mc_shop_latlng = new google.maps.LatLng(42.106775, -70.759359);
    var master_latlng = new google.maps.LatLng(41.799879, -70.747274);
    var parker_latlng = new google.maps.LatLng(41.648480, -72.756058);
    var pri_latlng = new google.maps.LatLng(42.112856, -71.708395);
    var jap_latlng = new google.maps.LatLng(42.608168, -71.334151);
    var app_latlng = new google.maps.LatLng(42.179400, -71.217987);
    var pool_latlng = new google.maps.LatLng(42.782113, -71.333019);
    var sign_latlng = new google.maps.LatLng(42.318121, -71.612731);
    var high_latlng = new google.maps.LatLng(41.505257, -73.000904);
    var crowe_latlng = new google.maps.LatLng(42.101007, -70.959050);
    var rotary_latlng = new google.maps.LatLng(41.663199, -70.286396);
    var rex_latlng = new google.maps.LatLng(41.851926, -72.582112);
    var grid_latlng = new google.maps.LatLng(42.599106, -71.163884);
    var c_g_metal_latlng = new google.maps.LatLng(44.303436, -69.976584);
    var summit_latlng = new google.maps.LatLng(41.627526, -73.068530);
    var bae_latlng = new google.maps.LatLng(42.763650, -71.458853);
    var mich_latlng = new google.maps.LatLng(41.852072, -72.811791);
    var psg_latlng = new google.maps.LatLng(42.387488, -71.084847);
    var jfarm_latlng = new google.maps.LatLng(43.196406, -70.746603);
    var mcb_latlng = new google.maps.LatLng(43.189805, -70.747944);
    var nashua_latlng = new google.maps.LatLng(42.782083, -71.519906);
    var tdf_latlng = new google.maps.LatLng(42.575893, -70.974156);
    var waste_latlng = new google.maps.LatLng(41.299044, -72.896693);
    var west_latlng = new google.maps.LatLng(42.202715, -72.597964);
    var lyman_latlng = new google.maps.LatLng(44.073189, -69.178549);
    var hemenway_latlng = new google.maps.LatLng(42.345515, -71.089647);
    var wash5_latlng = new google.maps.LatLng(42.714998, -71.442509);
    var wash1_latlng = new google.maps.LatLng(42.451501, -70.962019);
    var wash4_latlng = new google.maps.LatLng(42.402879, -71.052991);
    var wash3_latlng = new google.maps.LatLng(42.519759, -71.103959);
    var wash2_latlng = new google.maps.LatLng(42.427472, -71.074682);
    var cmf_latlng = new google.maps.LatLng(42.655958, -71.108693);
    var next_latlng = new google.maps.LatLng(41.696573, -71.272465);
    var jbi_latlng = new google.maps.LatLng(42.189571, -72.550350);
    var spring_latlng = new google.maps.LatLng(42.581571, -71.195420);
    var csi_latlng = new google.maps.LatLng(42.628132, -71.277926);
    var louis_latlng = new google.maps.LatLng(42.514779, -70.888680);
    var usa_latlng = new google.maps.LatLng(41.602568, -73.074814);
    var gmf_latlng = new google.maps.LatLng(41.919077, -71.323661);
    var atmo_latlng = new google.maps.LatLng(42.657367, -71.107423);
    var radar2_latlng = new google.maps.LatLng(42.390113, -71.552036);
    var custmach_latlng = new google.maps.LatLng(42.478913, -71.127122);
    var gtr_latlng = new google.maps.LatLng(42.058005, -71.057498);
    var baker_latlng = new google.maps.LatLng(43.391006, -70.719935);
    var ebm_latlng = new google.maps.LatLng(42.840602, -71.370638);
    var bandg_latlng = new google.maps.LatLng(41.421720, -71.846165);
    var kalow_latlng = new google.maps.LatLng(43.586212, -72.964334);
    var expc_latlng = new google.maps.LatLng(42.851257, -71.494870);
    var teknor_latlng = new google.maps.LatLng(42.515850, -71.751373);
    var cil2_latlng = new google.maps.LatLng(42.685490, -71.184150);
    var wagyu_latlng = new google.maps.LatLng(42.897315, -71.910181);
    var swim_latlng = new google.maps.LatLng(41.751493, -71.118454);
    var jmd2_latlng = new google.maps.LatLng(42.779278, -71.386261);
    var jmd3_latlng = new google.maps.LatLng(42.778294, -71.381248);
    var grapek2_latlng = new google.maps.LatLng(42.711357, -71.555410);
    var hink_latlng = new google.maps.LatLng(44.267107, -68.307006);
    var shutter_latlng = new google.maps.LatLng(41.696303, -69.964489);
    var mastermill_latlng = new google.maps.LatLng(41.799027, -70.747049);
    var hammar_latlng = new google.maps.LatLng(42.775071, -71.488160);
    var eagle_latlng = new google.maps.LatLng(42.688154, -71.187542);
    var labsphere_latlng = new google.maps.LatLng(43.371477, -71.929472);
    var spec_latlng = new google.maps.LatLng(42.562359, -71.304692);
    var hink2_latlng = new google.maps.LatLng(44.447023, -68.374295);
    var biw_latlng = new google.maps.LatLng(43.909572, -69.814810);
    var maf_latlng = new google.maps.LatLng(42.765255, -71.466857);
    var ccf_latlng = new google.maps.LatLng(42.698934, -70.852100);
    var mrww_latlng = new google.maps.LatLng(42.802880, -70.880694);
    var awair_latlng = new google.maps.LatLng(42.801365, -70.884288);
    var esi_latlng = new google.maps.LatLng(42.532311, -71.142840);
    var martel_latlng = new google.maps.LatLng(42.611227, -71.285210);
    var dcl_latlng = new google.maps.LatLng(42.128915, -71.053089);
    var boyd_latlng = new google.maps.LatLng(43.541518, -71.488820);


    var mapOptions = {
        zoom: 4,
        center: starting_center_latlng,

        /*Old center for map to include Solaronics: new google.maps.LatLng(42.65, -75.75)*/

        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER,
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER,
        },
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP,
        },
        fullscreenControl: true,

        /*Map type id can also be set to "hybrid" for sat/road. */
        mapTypeId: 'roadmap'
    };

    /*Below added for the insert map.*/

    let harvard_yard_map, overview;
    const OVERVIEW_DIFFERENCE = 5;
    const OVERVIEW_MIN_ZOOM = 2;
    const OVERVIEW_MAX_ZOOM = 10;

    harvard_yard_map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);


    


    var fort_drum_info = "<strong>Fort Drum Aerospace Reset Contractor</strong><br/>" +
        "<a href='https://home.army.mil/drum/index.php'>Blackhawk Helicopter Re-Manufacturing</a>";

    var northwest_info = "<strong>Northwest Science Building</strong><br/>" + "Latitude: 42.3795462<br/>" + "Longitude: -71.1156024";

    var chez_sheridan_info = "<div style='float:left'><img src='..//manwithwrench.png'></div>" + "<strong>Steven Breen's Office/Shop</strong><br/>" + "9 Sheridan St<br/>" + "Nashua, NH 03064";

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

    var jfk_info = "<strong>Korean Air Freight</strong><br/>" + "JFK International Airport<br/>" + "Long Island, NY";

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

    var edab_info = "<strong>Body Shop</strong><br/>" + "Boston, MA";

    var jpro_info = "<strong>Gymnasium Equipment Maker</strong><br/>" + "Waterford, CT";

    var metso_info = "<strong>Metso Flow Control</strong><br/>" + "Shrewsbury, MA";

    var natl_info = "<strong>National Lumber</strong><br/>" + "Mansfield, MA";

    var grapek_info = "<strong>Grapek/Bates Finishing</strong><br/>" + "Industrial Equipment Supplier<br/>" + "Mansfield, MA";

    var mta_info = "<strong>New York City MTA</strong><br/>" + "Maintainance Yard<br/>" + "Jamaica, NY";

    var eppley_info = "<strong>Eppley Building & Design </strong><br/>" + "Architectural Millwork & Cabinet Shop<br/>" + "Hawthorn, NJ";

    var duck_info = "<strong>Boston Duck Boat Tours </strong><br/>" + "Amphibious Vehicle Paint/Repair Shop<br/>" + "Dorchester, MA";

    var display_info = "<strong>Gilbert Displays Company </strong><br/>" + "Advertizing Display Maker<br/>" + "Melville, NY";

    var furman_info = "<strong>W.A. Furman Company</strong><br/>" + "Millwork Shop<br/>" + "Fall River, MA";

    var rapid_info = "<strong>Rapid Machine Company</strong><br/>" + "Machine Shop<br/>" + "Nashua, NH";

    var minute_info = "<strong>Minuteman Truck </strong><br/>" + "Truck Equipment Supplier<br/>" + "Walpole, MA";

    var faniel_info = "<strong>Faniel Kitchens</strong><br/>" + "Cabinet Shop<br/>" + "Hingham, MA";

    var newton_info = "<strong>Auto Body Shop</strong><br/>" + "Newton, MA";

    var ab_info = "<strong>A&B Sandblasting/Powder Coating</strong><br/>" + "Hudson, NH";

    var fresh_info = "<strong>Fresh Coat Finishing</strong><br/>" + "Plaistow, NH";

    var edo_info = "<strong>EDO Corporation</strong><br/>" + "Military Contractor<br/>" + "Amityville, NY";

    var buck_info = "<strong>Buck Brothers Tool Corp</strong><br/>" + "Woodworking Tool Manufacturer<br/>" + "Millbury, MA";

    var lundy_info = "<strong>Lundy's Ornamental Iron</strong><br/>" + "Architechural Railing Fabricator<br/>" + "Lynn, MA";

    var iron_info = "<strong>Derry Iron Works</strong><br/>" + "Decorative Metal Fabrication<br/>" + "Derry, NH";

    var martin_info = "<strong>Martin International</strong><br/>" + "Metal Enclosure Manufacturer<br/>" + "Seabrook, NH";

    var carlos_info = "<strong>Carlos Fencing Corp</strong><br/>" + "Security Fencing Fabricator<br/>" + "Elizabeth, NJ";

    var time_info = "<strong>Time Square Lighting</strong><br/>" + "Theatrical Lighting Manufacturer<br/>" + "Stony Point, NY";

    var mass_info = "<strong>Mass Cabinets, Inc</strong><br/>" + "Architechural Cabinet Shop<br/>" + "Methuen, MA";

    var fresh_info = "<strong>Fresh Coat Finishing</strong><br/>" + "Powder Coating Shop<br/>" + "Plaistow, NH";

    var spray_me_info = "<strong>Spray ME Finishing</strong><br/>" + "Powder Coating Shop<br/>" + "South Berwick, ME";

    var fuzz_info = "<strong>Hutchinson Sealing Systems</strong><br/>" + "Automotive Parts - OEM <br/>" + "Newfields, NH";

    var light_info = "<strong>Light Metal Platers, LLC</strong><br/>" + "Finishing Shop<br/>" + "Waltham, MA";

    var foods_info = "<strong>Penobscot Foods</strong><br/>" + "Frozen Food Processor<br/>" + "Belfast, ME";

    var silvex_info = "<strong>Silvex Surface Technology</strong><br/>" + "Electroplating Shop<br/>" + "Westbrook, ME";

    var triangle_info = "<strong>Triangle Sign</strong><br/>" + "Sign Paint Shop<br/>" + "Baltimore, MD";

    var met_atl_info = "<strong>Metso Automation</strong><br/>" + "Valve Manufacturer<br/>" + "Atlanta, GA";

    var dorma_info = "<strong>Dormakaba Corp. </strong><br/>" + "Security and Access Control Manufacturer<br/>" + "Stevens, PA";

    var classic_info = "<strong>Classic Auto Body</strong><br/>" + "Collision Repair Shop<br/>" + "Salem, MA";

    var feeley_info = "<strong>Feeley's Company, Inc.</strong><br/>" + "Powder Coating Shop<br/>" + "Quincy, MA";

    var ospc_info = "<strong>Ocean State Powder Coat</strong><br/>" + "Powder Shop<br/>" + "Warwick, RI";

    var services_info = "<strong>Services Plus Company</strong><br/>" + "Painter<br/>" + "Holliston, MA";

    var mc_shop_info = "<strong>Metal Innovations</strong><br/>" + " Custom Motorcycle Shop<br/>" + "Marshfield, MA";

    var master_info = "<strong>Master Millwork</strong><br/>" + " Production Millwork Shop<br/>" + "West Wareham, MA";

    var parker_info = "<strong>Parker-Hannifin Fluid Control</strong><br/>" + "Filter/valve research and develpoement<br/>" + "New Britain, CT ";

    var pri_info = "<strong>Primetals Technologies</strong><br/>" + "Metallurgical Equipment Manufacturer<br/>" + "Sutton, MA";

    var jap_info = "<strong>Finishing Shop</strong><br/>" + "Wet and Powder Applications<br/>" + "Chelmsford, MA";

    var app_info = "<strong>Finishing Shop</strong><br/>" + "Norwood, MA";

    var pool_info = "<strong>Residential Pool House</strong><br/>" + "Tube heater with WiFi control<br/>" + "Windham, NH";

    var sign_info = "<strong>Viewpoint Signs</strong><br/>" + "Signage fabrication shop<br/>" + "Northborough, MA";

    var high_info = "<strong>Highland Woodcraft</strong><br/>" + "Cabinet/Millwork Shop<br/>" + "Prospect, CT";

    var crowe_info = "<strong>Crowe Collision</strong><br/>" + "Independent Body Shop<br/>" + "Abington, MA";

    var rotary_info = "<strong>Rotary Collision Center</strong><br/>" + "Independent Body Shop<br/>" + "Hyannis, MA";

    var rex_info = "<strong>Rex Lumber</strong><br/>" + "Millwork-Lumber Wholesaler<br/>" + "South Windsor, CT";

    var grid_info = "<strong>National Grid</strong><br/>" + "Gas Meter Re-build Shop<br/>" + "Wilmington, MA";

    var c_g_metal_info = "<strong>C&G Metal </strong><br/>" + "Heat Pump Stand Fabricator<br/>" + "Winthrop, ME";

    var summit_info = "<strong>Summit Plating Corp. </strong><br/>" + "Electro-Plating and Metal Finishing <br/>" + "Thomaston, CT";

    var bae_info = "<strong>BAE Systems </strong><br/>" + "Military/Aerospace Manufacturer <br/>" + "Nashua, NH";

    var mich_info = "<strong>Michelle Auto Body </strong><br/>" + "Independent Body Shop <br/>" + "Simsbury, CT";

    var psg_info = "<strong>PSG Framing </strong><br/>" + "Artwork Framing Shop <br/>" + "Somerville, MA";

    var jfarm_info = "<strong>Jewett Farm </strong><br/>" + "Cabinet Maker Shop <br/>" + "York, ME";

    var mcb_info = "<strong>Maine Coast Builders </strong><br/>" + "Custom Home Builder <br/>" + "York, ME";

    var nashua_info = "<strong>Nashua Airport </strong><br/>" + "Municipal Aviation Facilities <br/>" + "Nashua, NH";

    var tdf_info = "<strong>TDF Metal Finishing </strong><br/>" + "Metal Plating/Finishing Shop <br/>" + "Danvers, MA";

    var waste_info = "<strong>All-American Waste </strong><br/>" + "Recycling & Waste Contractor <br/>" + "New Haven, CT";

    var west_info = "<strong>Westside Finishing Company </strong><br/>" + "Powder Coating Shop <br/>" + "Holyoke, MA";

    var lyman_info = "<strong>Lyman-Morse Boatbuilding </strong><br/>" + "Luxury Boat Builder <br/>" + "Thomaston, ME";

    var hemenway_info = "<strong>Hemenway </strong><br/>" + "Maker Lab <br/>" + "Boston, MA";
    
    var wash5_info = "<strong>Wash Depot Holdings </strong><br/>" + "Car Wash w/doorjet heater <br/>" + "Nashua, NH";
    
    var wash1_info = "<strong>Wash Depot Holdings </strong><br/>" + "Car Wash w/doorjet heater <br/>" + "Lynn, MA";
    
    var wash4_info = "<strong>Wash Depot Holdings </strong><br/>" + "Car Wash w/doorjet heater <br/>" + "Everett, MA";
    
    var wash3_info = "<strong>Wash Depot Holdings </strong><br/>" + "Car Wash w/doorjet heater <br/>" + "North Reading, MA";
    
    var wash2_info = "<strong>Wash Depot Holdings </strong><br/>" + "Car Wash w/doorjet heater <br/>" + "Malden, MA";
    
    var cmf_info = "<strong>Central Metal Finishing </strong><br/>" + "Aerospace Plater <br/>" + "North Andover, MA";
    
    var next_info = "<strong>Next Boatworks, LLC </strong><br/>" + "High-Performance Coastal Rowing Craft <br/>" + "Bristol, RI";
    
    var jbi_info = "<strong>JBI Parisi, Inc </strong><br/>" + "Point of Sale System Fab Shop <br/>" + "Chicopee, MA";
    
    var spring_info = "<strong>Spring Manufacturing Corp, Inc. </strong><br/>" + "Spring fabrication shop <br/>" + "Tewksbury, MA";
    
    var csi_info = "<strong>Coating Systems, Inc. </strong><br/>" + "Industrial metal finisher <br/>" + "Lowell, MA";
    
    var louis_info = "<strong>Louis Restoration & Repair </strong><br/>" + "Automobile restoration shop <br/>" + "Salem, MA";
    
    var usa_info = "<strong>USA Waste & Recycling </strong><br/>" + "Waste container repair facility <br/>" + "Oakville, CT";

    var gmf_info = "<strong>General Metal Finishing </strong><br/>" + "Plating Shop <br/>" + "Attleboro, MA";
    
    var atmo_info = "<strong>Powder-Tech Associates </strong><br/>" + "Powder Metallurgy Services <br/>" + "North Andover, MA";
    
    var radar2_info = "<strong>CPI-Radant, Inc. </strong><br/>" + "Radar dome manufacturer <br/>" + "Hudson, MA";
    
    var custmach_info = "<strong>Custom Machine, LLC </strong><br/>" + "Precision aerospace machine shop <br/>" + "Woburn, MA";
    
    var gtr_info = "<strong>GTR Manufacturing </strong><br/>" + "Precision sheet metal fabrication <br/>" + "Brockton, MA";
    
    var baker_info = "<strong>Baker Company </strong><br/>" + "Medical equipment manufacturer <br/>" + "Sanford, ME";
    
    var ebm_info = "<strong>EB Metals Inc </strong><br/>" + "Rolled metal products manufacturer <br/>" + "Londonderry, NH";
    
    var bandg_info = "<strong>Barton & Gray Mariners Club </strong><br/>" + "Day cruiser yacht club <br/>" + "Stonington, CT";
    
    var kalow_info = "<strong>Kalow Technologies </strong><br/>" + " Electro-mechanical contract manufacturer<br/>" + "Rutland, VT";
    
    var expc_info = "<strong>Extreme Powder Coating </strong><br/>" + " Custom Powder Shop<br/>" + "Merrimack, NH";
    
    var teknor_info = "<strong>Teknor Apex Inc </strong><br/>" + " Thermoplastic Elastomer Manufacturer<br/>" + "Leominster, MA";
    
    var cil2_info = "<strong>Anodizer/Electro-Plater</strong><br/>" + "Lawrence, MA";
    
    var wagyu_info = "<strong>New England Wagyu LLC</strong><br/>" + "Peterborough, NH";
    
    var swim_info = "<strong>SwimEx </strong><br/>" + " hydrotherapy and training pool manufacturer.<br/>" + "Fall River, MA";
    
    var grapek2_info = "<strong>Grapek/Bates Finishing</strong><br/>" + "Industrial Equipment Supplier<br/>" + "Hollis, NH";
    
    var hink_info = "<strong>Hinkley Yachts</strong><br/>" + "Luxury Powerboat Builder<br/>" + "Southwest Harbor, ME";
    
    var shutter_info = "<strong>Seaport Shutter Company</strong><br/>" + "Architechurally Correct Shutters<br/>" + "Chatham, MA";
    
    var mastermill_info = "<strong>Master Millwork</strong><br/>" + "Millwork Fabrication<br/>" + "West Wareham, MA";
    
    var hammar_info = "<strong>175 Amherst St</strong><br/>" + "Commercial Building<br/>" + "Nashua, NH";
    
    var eagle_info = "<strong>Eagle Woodworking</strong><br/>" + "Drawer Box Fabricator<br/>" + "Lawrence, MA";
    
    var labsphere_info = "<strong>Labsphere Inc</strong><br/>" + "Optical Products Manufacturer<br/>" + "North Sutton, NH";
    
    var spec_info = "<strong>Specialized Coating Services</strong><br/>" + "Conformal Coatings<br/>" + "Billerica, MA";
    
    var hink2_info = "<strong>Hinkley Yachts</strong><br/>" + "Luxury Powerboat Builder<br/>" + "Trenton, ME";
    
    var biw_info = "<strong>Bath Iron Works</strong><br/>" + "Builder of Aegis and Zumwalt Class Destroyers<br/>" + "Bath, ME";
    
    var maf_info = "<strong>Maffee's Garage</strong><br/>" + "Automotive Repair Shop<br/>" + "Nashua, NH";
    
    var ccf_info = "<strong>C&C Fabricators</strong><br/>" + "Fab/Powdercoating Shop<br/>" + "Ipswich, MA";
    
    var mrww_info = "<strong>Mark Richey Woodworking</strong><br/>" + "Commercial Cabinet Shop<br/>" + "Newburyport, MA";
    
    var awair_info = "<strong>A-W Airflo Industries</strong><br/>" + "Fabrication Shop<br/>" + "Newburyport, MA";
    
    var esi_info = "<strong>Energy Sciences Inc.</strong><br/>" + "Electron Beam Technology<br/>" + "Wilmington, MA";
    
    var martel_info = "<strong>Martel Welding,Inc.</strong><br/>" + "Truck Body Fab<br/>" + "Tewksbury, MA";
    
    var dcl_info = "<strong>Design Communications, LTD</strong><br/>" + "Manufacturer<br/>" + "Avon, MA";
    
    var boyd_info = "<strong>Boyd-Laconia</strong><br/>" + "Manufacturer<br/>" + "Laconia, NH";





    // This var is for the map icon style/size.
    var icon = {
        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // url
        scaledSize: new google.maps.Size(25, 25), // size
    };

    //This var is for the guy with a wrench.
    var icon_man = {
        url: "..//photo_gallery/manwithwrench.png", // url
        scaledSize: new google.maps.Size(25, 25), // size
        //origin: new google.maps.Point(0, 0),
        //anchor: new google.maps.Point(0, 0), // used to adjust the placement of the marker relative to the point
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

    var edab_infowindow = new google.maps.InfoWindow({
        content: edab_info
    });

    var jpro_infowindow = new google.maps.InfoWindow({
        content: jpro_info
    });

    var metso_infowindow = new google.maps.InfoWindow({
        content: metso_info
    });

    var natl_infowindow = new google.maps.InfoWindow({
        content: natl_info
    });

    var grapek_infowindow = new google.maps.InfoWindow({
        content: grapek_info
    });

    var mta_infowindow = new google.maps.InfoWindow({
        content: mta_info
    });

    var eppley_infowindow = new google.maps.InfoWindow({
        content: eppley_info
    });

    var duck_infowindow = new google.maps.InfoWindow({
        content: duck_info
    });

    var display_infowindow = new google.maps.InfoWindow({
        content: display_info
    });

    var furman_infowindow = new google.maps.InfoWindow({
        content: furman_info
    });

    var rapid_infowindow = new google.maps.InfoWindow({
        content: rapid_info
    });

    var minute_infowindow = new google.maps.InfoWindow({
        content: minute_info
    });

    var faniel_infowindow = new google.maps.InfoWindow({
        content: faniel_info
    });

    var newton_infowindow = new google.maps.InfoWindow({
        content: newton_info
    });

    var ab_infowindow = new google.maps.InfoWindow({
        content: ab_info
    });

    var fresh_infowindow = new google.maps.InfoWindow({
        content: fresh_info
    });

    var edo_infowindow = new google.maps.InfoWindow({
        content: edo_info
    });

    var buck_infowindow = new google.maps.InfoWindow({
        content: buck_info
    });

    var lundy_infowindow = new google.maps.InfoWindow({
        content: lundy_info
    });

    var iron_infowindow = new google.maps.InfoWindow({
        content: iron_info
    });

    var martin_infowindow = new google.maps.InfoWindow({
        content: martin_info
    });

    var carlos_infowindow = new google.maps.InfoWindow({
        content: carlos_info
    });

    var time_infowindow = new google.maps.InfoWindow({
        content: time_info
    });

    var mass_infowindow = new google.maps.InfoWindow({
        content: mass_info
    });

    var fresh_infowindow = new google.maps.InfoWindow({
        content: fresh_info
    });

    var spray_me_infowindow = new google.maps.InfoWindow({
        content: spray_me_info
    });

    var fuzz_infowindow = new google.maps.InfoWindow({
        content: fuzz_info
    });

    var light_infowindow = new google.maps.InfoWindow({
        content: light_info
    });

    var foods_infowindow = new google.maps.InfoWindow({
        content: foods_info
    });

    var silvex_infowindow = new google.maps.InfoWindow({
        content: silvex_info
    });

    var triangle_infowindow = new google.maps.InfoWindow({
        content: triangle_info
    });

    var met_atl_infowindow = new google.maps.InfoWindow({
        content: met_atl_info
    });

    var dorma_infowindow = new google.maps.InfoWindow({
        content: dorma_info
    });

    var classic_infowindow = new google.maps.InfoWindow({
        content: classic_info
    });

    var feeley_infowindow = new google.maps.InfoWindow({
        content: feeley_info
    });

    var ospc_infowindow = new google.maps.InfoWindow({
        content: ospc_info
    });

    var services_infowindow = new google.maps.InfoWindow({
        content: services_info
    });

    var mc_shop_infowindow = new google.maps.InfoWindow({
        content: mc_shop_info
    });

    var master_infowindow = new google.maps.InfoWindow({
        content: master_info
    });

    var parker_infowindow = new google.maps.InfoWindow({
        content: parker_info
    });

    var pri_infowindow = new google.maps.InfoWindow({
        content: pri_info
    });

    var jap_infowindow = new google.maps.InfoWindow({
        content: jap_info
    });

    var app_infowindow = new google.maps.InfoWindow({
        content: app_info
    });

    var pool_infowindow = new google.maps.InfoWindow({
        content: pool_info
    });

    var sign_infowindow = new google.maps.InfoWindow({
        content: sign_info
    });

    var high_infowindow = new google.maps.InfoWindow({
        content: high_info
    });

    var crowe_infowindow = new google.maps.InfoWindow({
        content: crowe_info
    });

    var rotary_infowindow = new google.maps.InfoWindow({
        content: rotary_info
    });

    var rex_infowindow = new google.maps.InfoWindow({
        content: rex_info
    });

    var grid_infowindow = new google.maps.InfoWindow({
        content: grid_info
    });

    var c_g_metal_infowindow = new google.maps.InfoWindow({
        content: c_g_metal_info
    });

    var summit_infowindow = new google.maps.InfoWindow({
        content: summit_info
    });

    var bae_infowindow = new google.maps.InfoWindow({
        content: bae_info
    });

    var mich_infowindow = new google.maps.InfoWindow({
        content: mich_info
    });

    var psg_infowindow = new google.maps.InfoWindow({
        content: psg_info
    });

    var jfarm_infowindow = new google.maps.InfoWindow({
        content: jfarm_info
    });

    var mcb_infowindow = new google.maps.InfoWindow({
        content: mcb_info
    });

    var nashua_infowindow = new google.maps.InfoWindow({
        content: nashua_info
    });

    var tdf_infowindow = new google.maps.InfoWindow({
        content: tdf_info
    });

    var waste_infowindow = new google.maps.InfoWindow({
        content: waste_info
    });

    var west_infowindow = new google.maps.InfoWindow({
        content: west_info
    });

    var lyman_infowindow = new google.maps.InfoWindow({
        content: lyman_info
    });

    var hemenway_infowindow = new google.maps.InfoWindow({
        content: hemenway_info
    });
    
    var wash5_infowindow = new google.maps.InfoWindow({
        content: wash5_info
    });
    
    var wash1_infowindow = new google.maps.InfoWindow({
        content: wash1_info
    });
    
    var wash4_infowindow = new google.maps.InfoWindow({
        content: wash4_info
    });
    
    var wash3_infowindow = new google.maps.InfoWindow({
        content: wash3_info
    });
    
    var wash2_infowindow = new google.maps.InfoWindow({
        content: wash2_info
    });
    
    var cmf_infowindow = new google.maps.InfoWindow({
        content: cmf_info
    });
    
    var next_infowindow = new google.maps.InfoWindow({
        content: next_info
    });
    
    var jbi_infowindow = new google.maps.InfoWindow({
        content: jbi_info
    });
    
    var spring_infowindow = new google.maps.InfoWindow({
        content: spring_info
    });
    
    var csi_infowindow = new google.maps.InfoWindow({
        content: csi_info
    });
    
    var louis_infowindow = new google.maps.InfoWindow({
        content: louis_info
    });
    
    var usa_infowindow = new google.maps.InfoWindow({
        content: usa_info
    });
    
    var gmf_infowindow = new google.maps.InfoWindow({
        content: gmf_info
    });
    
    var atmo_infowindow = new google.maps.InfoWindow({
        content: atmo_info
    });
    
    var radar2_infowindow = new google.maps.InfoWindow({
        content: radar2_info
    });
    
    var custmach_infowindow = new google.maps.InfoWindow({
        content: custmach_info
    });
    
    var gtr_infowindow = new google.maps.InfoWindow({
        content: gtr_info
    });
    
    var baker_infowindow = new google.maps.InfoWindow({
        content: baker_info
    });
    
    var ebm_infowindow = new google.maps.InfoWindow({
        content: ebm_info
    });
    
    var bandg_infowindow = new google.maps.InfoWindow({
        content: bandg_info
    });
    
    var kalow_infowindow = new google.maps.InfoWindow({
        content: kalow_info
    });
    
    var expc_infowindow = new google.maps.InfoWindow({
        content: expc_info
    });
    
    var teknor_infowindow = new google.maps.InfoWindow({
        content: teknor_info
    });
    
    var cil2_infowindow = new google.maps.InfoWindow({
        content: cil2_info
    });
    
    var wagyu_infowindow = new google.maps.InfoWindow({
        content: wagyu_info
    });
    
    var swim_infowindow = new google.maps.InfoWindow({
        content: swim_info
    });
    
    var grapek2_infowindow = new google.maps.InfoWindow({
        content: grapek2_info
    });
    
    var hink_infowindow = new google.maps.InfoWindow({
        content: hink_info
    });
    
    var shutter_infowindow = new google.maps.InfoWindow({
        content: shutter_info
    });
    
    var mastermill_infowindow = new google.maps.InfoWindow({
        content: mastermill_info
    });
    
    var hammar_infowindow = new google.maps.InfoWindow({
        content: hammar_info
    });
    
    var eagle_infowindow = new google.maps.InfoWindow({
        content: eagle_info
    });
    
    var labsphere_infowindow = new google.maps.InfoWindow({
        content: labsphere_info
    });
    
    var spec_infowindow = new google.maps.InfoWindow({
        content: spec_info
    });
    
    var hink2_infowindow = new google.maps.InfoWindow({
        content: hink2_info
    });
    
    var biw_infowindow = new google.maps.InfoWindow({
        content: biw_info
    });
    
    var maf_infowindow = new google.maps.InfoWindow({
        content: maf_info
    });
    
    var ccf_infowindow = new google.maps.InfoWindow({
        content: ccf_info
    });
    
    var mrww_infowindow = new google.maps.InfoWindow({
        content: mrww_info
    });
    
    var awair_infowindow = new google.maps.InfoWindow({
        content: awair_info
    });
    
    var esi_infowindow = new google.maps.InfoWindow({
        content: esi_info
    });
    
    var martel_infowindow = new google.maps.InfoWindow({
        content: martel_info
    });
    
    var dcl_infowindow = new google.maps.InfoWindow({
        content: dcl_info
    });
    
    var boyd_infowindow = new google.maps.InfoWindow({
        content: boyd_info
    });







    var fort_drum_marker = new google.maps.Marker({
        position: fort_drum_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Fort Drum Aerospace Contractor',
        scaledSize: new google.maps.Size(25, 25),
    });

    var northwest_marker = new google.maps.Marker({
        position: northwest_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Northwest Science Building'
    });

    /* Steve's Shop/Office Main Marker with code to place on top of others and resize. */

    var chez_sheridan_marker = new google.maps.Marker({
        position: chez_sheridan_latlng,
        map: harvard_yard_map,
        title: 'Steven Breen-Office/Shop',
        //icon: icon_man,
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        zIndex: 9999,
        animation: google.maps.Animation.BOUNCE,
        scaledSize: new google.maps.Size(200, 200),
    });
    
    

    var precision_coating_marker = new google.maps.Marker({
        position: precision_coating_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Precision Coating'
    });

    var berlin_city_marker = new google.maps.Marker({
        position: berlin_city_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Automotive Dealer/Finisher'
    });

    var cil_marker = new google.maps.Marker({
        position: cil_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Anodizer/Electro-Plater'
    });

    var colonial_marker = new google.maps.Marker({
        position: colonial_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Aerospace Industry Plater/Finisher'
    });

    var landing_marker = new google.maps.Marker({
        position: landing_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'The Composite Boat Building School'
    });

    var lyndon_marker = new google.maps.Marker({
        position: lyndon_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Furniture Manufacturer'
    });

    var design_marker = new google.maps.Marker({
        position: design_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Metal Fabrication Shop'
    });

    var emtec_marker = new google.maps.Marker({
        position: emtec_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Architectural Fabricator'
    });

    var saratoga_marker = new google.maps.Marker({
        position: saratoga_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Jobber Shop/ Metal Fab'
    });

    var whelen_marker = new google.maps.Marker({
        position: whelen_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Emergency Equipment Manufacturer'
    });

    var boat_marker = new google.maps.Marker({
        position: boat_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Yacht Builder'
    });

    var mex_marker = new google.maps.Marker({
        position: mex_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'OEM Auto Parts Supplier'
    });

    var pei_marker = new google.maps.Marker({
        position: pei_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Progressive Energy Headquarters'
    });

    var suntube_marker = new google.maps.Marker({
        position: suntube_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Solaronics Plant'
    });

    var jfk_marker = new google.maps.Marker({
        position: jfk_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Korean Air Freight'
    });

    var ge_marker = new google.maps.Marker({
        position: ge_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Plastics R&D'
    });

    var vt_ware_marker = new google.maps.Marker({
        position: vt_ware_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Fab/Job Shop'
    });

    var steel_marker = new google.maps.Marker({
        position: steel_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Steel Fabricator'
    });

    var forest_marker = new google.maps.Marker({
        position: forest_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Institutional Furniture Maker'
    });

    var geno_marker = new google.maps.Marker({
        position: geno_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Auto Collision Repair'
    });

    var united_marker = new google.maps.Marker({
        position: united_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Jobber Shop'
    });

    var evs_marker = new google.maps.Marker({
        position: evs_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Sheet Metal Fabrication'
    });

    var pfe_marker = new google.maps.Marker({
        position: pfe_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Roll Machine Shop'
    });

    var carmax_marker = new google.maps.Marker({
        position: carmax_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Automotive Super Store'
    });

    var helmet_marker = new google.maps.Marker({
        position: helmet_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Kevlar Helmet Maker'
    });

    var smyth_marker = new google.maps.Marker({
        position: smyth_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Heavy Collision Repair'
    });

    var corcon_marker = new google.maps.Marker({
        position: corcon_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Cabinet Maker'
    });

    var plp_marker = new google.maps.Marker({
        position: plp_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Composite Flag Pole Maker'
    });

    var protk_marker = new google.maps.Marker({
        position: protk_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Sheet Metal Fabricator'
    });

    var mag_marker = new google.maps.Marker({
        position: mag_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Jet Engine Maker'
    });

    var adan_marker = new google.maps.Marker({
        position: adan_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Animatronic System Fabricator'
    });

    var lhw_marker = new google.maps.Marker({
        position: lhw_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Custom Window Fabrication'
    });

    var armor_marker = new google.maps.Marker({
        position: armor_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Armored Vehicle Maker'
    });

    var blue_marker = new google.maps.Marker({
        position: blue_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'High School Composite Shop'
    });

    var pmi_marker = new google.maps.Marker({
        position: pmi_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Injection Moulder'
    });

    var eb_marker = new google.maps.Marker({
        position: eb_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Electric Boat'
    });

    var tba_marker = new google.maps.Marker({
        position: tba_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Powder Coater'
    });

    var roche_marker = new google.maps.Marker({
        position: roche_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Barrel Manufacture'
    });

    var prescott_marker = new google.maps.Marker({
        position: prescott_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Metal Shop'
    });

    var crafts_marker = new google.maps.Marker({
        position: crafts_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Lighting Fabricator'
    });

    var led_marker = new google.maps.Marker({
        position: led_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Lighting Manufacturer'
    });

    var devens_marker = new google.maps.Marker({
        position: devens_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Army Paint Shop'
    });

    var radar_marker = new google.maps.Marker({
        position: radar_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Radar Dome Maker'
    });

    var jmd_marker = new google.maps.Marker({
        position: jmd_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Metal Plater'
    });

    var metal_marker = new google.maps.Marker({
        position: metal_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Sheet Metal Fab Shop'
    });

    var wrta_marker = new google.maps.Marker({
        position: wrta_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Transit Bus Paint Shop'
    });

    var hm_marker = new google.maps.Marker({
        position: hm_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Sheet Metal Fabber'
    });

    var rim_marker = new google.maps.Marker({
        position: rim_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Rim Refinisher'
    });

    var mac_marker = new google.maps.Marker({
        position: mac_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Prototype Fab Shop'
    });

    var therm_marker = new google.maps.Marker({
        position: therm_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Plastics Fabricator'
    });

    var duncan_marker = new google.maps.Marker({
        position: duncan_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Galvanizer'
    });

    var set_marker = new google.maps.Marker({
        position: set_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Studio Set Fabber'
    });

    var pine_marker = new google.maps.Marker({
        position: pine_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Cabinet Shop'
    });

    var kab_marker = new google.maps.Marker({
        position: kab_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Auto Body Shop'
    });

    var bms_marker = new google.maps.Marker({
        position: bms_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Metal Fab Shop'
    });

    var cwt_marker = new google.maps.Marker({
        position: cwt_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Treatment Plant'
    });

    var ag_marker = new google.maps.Marker({
        position: ag_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Silkscreener'
    });

    var nw_marker = new google.maps.Marker({
        position: nw_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Equipment Supplier'
    });

    var gfs_marker = new google.maps.Marker({
        position: gfs_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Manufacturer'
    });

    var bose_marker = new google.maps.Marker({
        position: bose_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Research & Developement'
    });

    var bobs_marker = new google.maps.Marker({
        position: bobs_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Body Shop'
    });

    var harvey_marker = new google.maps.Marker({
        position: harvey_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Building Products Manufacturer'
    });

    var richey_marker = new google.maps.Marker({
        position: richey_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Woodwork Shop'
    });

    var hhc_marker = new google.maps.Marker({
        position: hhc_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Cabinet Shop'
    });

    var bay_marker = new google.maps.Marker({
        position: bay_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Plastics Rotation Moulder'
    });

    var kal_marker = new google.maps.Marker({
        position: kal_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Passive Solar Panel Manufacturer'
    });

    var dura_marker = new google.maps.Marker({
        position: dura_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Plastics Fabber'
    });

    var dyna_marker = new google.maps.Marker({
        position: dyna_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Plating Shop'
    });

    var bae_marker = new google.maps.Marker({
        position: bae_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Aerospace Composite Shop'
    });

    var anjen_marker = new google.maps.Marker({
        position: anjen_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Finishing  Shop'
    });

    var pws_marker = new google.maps.Marker({
        position: pws_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Work Bench Maker'
    });

    var koll_marker = new google.maps.Marker({
        position: koll_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Aviation Electronics'
    });

    var pro_marker = new google.maps.Marker({
        position: pro_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Powder Coating Shop'
    });

    var edab_marker = new google.maps.Marker({
        position: edab_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Body Shop'
    });

    var jpro_marker = new google.maps.Marker({
        position: jpro_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Gym Fixture Maker'
    });

    var metso_marker = new google.maps.Marker({
        position: metso_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Automation Manufacturer'
    });

    var natl_marker = new google.maps.Marker({
        position: natl_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Building Material Supplier'
    });

    var grapek_marker = new google.maps.Marker({
        position: grapek_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Finishing Equipment Supplier'
    });

    var mta_marker = new google.maps.Marker({
        position: mta_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Transit Rail Yard'
    });

    var eppley_marker = new google.maps.Marker({
        position: eppley_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Millwork Shop'
    });

    var duck_marker = new google.maps.Marker({
        position: duck_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Duck Boat Shop'
    });

    var display_marker = new google.maps.Marker({
        position: display_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Electronic Display Maker'
    });

    var furman_marker = new google.maps.Marker({
        position: furman_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Millwork Shop'
    });

    var rapid_marker = new google.maps.Marker({
        position: rapid_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Machine Shop'
    });

    var minute_marker = new google.maps.Marker({
        position: minute_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Fire Truck Fitter'
    });

    var faniel_marker = new google.maps.Marker({
        position: faniel_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Kitchen Shop'
    });

    var newton_marker = new google.maps.Marker({
        position: newton_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Body Shop'
    });

    var ab_marker = new google.maps.Marker({
        position: ab_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Powder Coating Shop'
    });

    var fresh_marker = new google.maps.Marker({
        position: fresh_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Powder Coater'
    });

    var edo_marker = new google.maps.Marker({
        position: edo_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Military Contractor'
    });

    var buck_marker = new google.maps.Marker({
        position: buck_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Tool Maker'
    });

    var lundy_marker = new google.maps.Marker({
        position: lundy_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Decorative Metal Fab Shop'
    });

    var iron_marker = new google.maps.Marker({
        position: iron_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Decorative Metal Fab Shop'
    });

    var martin_marker = new google.maps.Marker({
        position: martin_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Server Enclosure Maker'
    });

    var time_marker = new google.maps.Marker({
        position: time_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Stage Lighting Maker'
    });

    var carlos_marker = new google.maps.Marker({
        position: carlos_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Fence Maker'
    });

    var mass_marker = new google.maps.Marker({
        position: mass_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Millwork Shop'
    });

    var fresh_marker = new google.maps.Marker({
        position: fresh_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Powder Coating Shop'
    });

    var spray_me_marker = new google.maps.Marker({
        position: spray_me_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Powder Coating Shop'
    });

    var fuzz_marker = new google.maps.Marker({
        position: fuzz_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Automotive-OEM'
    });

    var light_marker = new google.maps.Marker({
        position: light_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Metal Finisher'
    });

    var foods_marker = new google.maps.Marker({
        position: foods_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Frozen Food Plant'
    });

    var silvex_marker = new google.maps.Marker({
        position: silvex_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Plating Shop'
    });

    var triangle_marker = new google.maps.Marker({
        position: triangle_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Sign Shop'
    });

    var met_atl_marker = new google.maps.Marker({
        position: met_atl_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Automation Shop'
    });

    var dorma_marker = new google.maps.Marker({
        position: dorma_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Door Hardware Maker'
    });

    var classic_marker = new google.maps.Marker({
        position: classic_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Auto Body Shop'
    });

    var feeley_marker = new google.maps.Marker({
        position: feeley_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Powder Coating Shop'
    });

    var ospc_marker = new google.maps.Marker({
        position: ospc_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Powder Coating Shop'
    });

    var services_marker = new google.maps.Marker({
        position: services_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Painter'
    });

    var mc_shop_marker = new google.maps.Marker({
        position: mc_shop_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Cycle Shop'
    });

    var master_marker = new google.maps.Marker({
        position: master_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Millwork Shop'
    });

    var parker_marker = new google.maps.Marker({
        position: parker_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Research and Developement'
    });

    var pri_marker = new google.maps.Marker({
        position: pri_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Metallurgical Solutions'
    });

    var jap_marker = new google.maps.Marker({
        position: jap_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Wet and Powder Finisher'
    });

    var app_marker = new google.maps.Marker({
        position: app_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Finishing Applications'
    });

    var pool_marker = new google.maps.Marker({
        position: pool_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Pool House'
    });

    var sign_marker = new google.maps.Marker({
        position: sign_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Sign Fab Shop'
    });

    var high_marker = new google.maps.Marker({
        position: high_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Cabinet Shop'
    });

    var crowe_marker = new google.maps.Marker({
        position: crowe_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Autobody Shop'
    });

    var rotary_marker = new google.maps.Marker({
        position: rotary_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Autobody Shop'
    });

    var rex_marker = new google.maps.Marker({
        position: rex_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Lumber Wholesaler'
    });

    var grid_marker = new google.maps.Marker({
        position: grid_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Gas Meter Shop'
    });

    var c_g_metal_marker = new google.maps.Marker({
        position: c_g_metal_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Powder Shop/Metal Fab'
    });

    var summit_marker = new google.maps.Marker({
        position: summit_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Electro-plating Shop'
    });

    var bae_marker = new google.maps.Marker({
        position: bae_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Military/Aerospace Contractor'
    });

    var mich_marker = new google.maps.Marker({
        position: mich_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Auto Body Shop'
    });

    var psg_marker = new google.maps.Marker({
        position: psg_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Picture Framer'
    });

    var jfarm_marker = new google.maps.Marker({
        position: jfarm_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Cabinet Maker'
    });

    var mcb_marker = new google.maps.Marker({
        position: mcb_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Home Builder'
    });

    var nashua_marker = new google.maps.Marker({
        position: nashua_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Aircraft Hangers'
    });

    var tdf_marker = new google.maps.Marker({
        position: tdf_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Plating Shop'
    });

    var waste_marker = new google.maps.Marker({
        position: waste_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Dumpster Repair Shop'
    });

    var west_marker = new google.maps.Marker({
        position: west_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Metal Finishing Shop'
    });

    var lyman_marker = new google.maps.Marker({
        position: lyman_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Boatbuilder'
    });

    var hemenway_marker = new google.maps.Marker({
        position: hemenway_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Experimental Start-up'
    });
    
    var wash5_marker = new google.maps.Marker({
        position: wash5_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Car Wash'
    });
    
    var wash1_marker = new google.maps.Marker({
        position: wash1_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Car Wash'
    });
    
    var wash4_marker = new google.maps.Marker({
        position: wash4_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Car Wash'
    });
    
    var wash3_marker = new google.maps.Marker({
        position: wash3_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Car Wash'
    });
    
     var wash2_marker = new google.maps.Marker({
        position: wash2_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Car Wash'
    });
    
    var cmf_marker = new google.maps.Marker({
        position: cmf_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Aerospace Finisher'
    });
    
    var next_marker = new google.maps.Marker({
        position: next_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Carbon Fiber Boat Maker'
    });
    
    var jbi_marker = new google.maps.Marker({
        position: jbi_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'POS Fab Shop'
    });
    
    var spring_marker = new google.maps.Marker({
        position: spring_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Spring Maker/Heat Treatment'
    });
    
    var csi_marker = new google.maps.Marker({
        position: csi_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Industrial Metal Finisher'
    });
    
     var louis_marker = new google.maps.Marker({
        position: louis_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Auto Restoration'
    });
    
     var usa_marker = new google.maps.Marker({
        position: usa_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Container Repair Shop'
    });

     var gmf_marker = new google.maps.Marker({
        position: gmf_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Plating Shop'
    });
    
     var atmo_marker = new google.maps.Marker({
        position: atmo_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Metallurgy Lab'
    });
    
    var radar2_marker = new google.maps.Marker({
        position: radar2_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Communication Dome Maker'
    });
    
    var custmach_marker = new google.maps.Marker({
        position: custmach_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Machine Shop'
    });
    
    var gtr_marker = new google.maps.Marker({
        position: gtr_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Industrial Fabricator'
    });
    
    var baker_marker = new google.maps.Marker({
        position: baker_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Fume Hood Maker'
    });
    
    var ebm_marker = new google.maps.Marker({
        position: ebm_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Rolled Metal Fabricator'
    });
    
    var bandg_marker = new google.maps.Marker({
        position: bandg_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Yacht Club'
    });
    
    var kalow_marker = new google.maps.Marker({
        position: kalow_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Manufacturer'
    });
    
    var expc_marker = new google.maps.Marker({
        position: expc_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Powder Coater'
    });
    
    var teknor_marker = new google.maps.Marker({
        position: teknor_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Elastomer R&D Lab'
    });
    
    var cil2_marker = new google.maps.Marker({
        position: cil2_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Anodizer/Electro-Plater'
    });
    
    var wagyu_marker = new google.maps.Marker({
        position: wagyu_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Agri-business'
    });
    
    var swim_marker = new google.maps.Marker({
        position: swim_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Excercise Pool Manufacturer'
    });
    
     var jmd2_marker = new google.maps.Marker({
        position: jmd2_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Metal Plater'
    });
    
     var jmd3_marker = new google.maps.Marker({
        position: jmd3_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Metal Plater'
    });
    
    var grapek2_marker = new google.maps.Marker({
        position: grapek2_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Finishing Equipment Supplier'
    });
    
    var hink_marker = new google.maps.Marker({
        position: hink_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Picnic Boat Builder'
    });
    
    var shutter_marker = new google.maps.Marker({
        position: shutter_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Shutter Maker'
    });
    
    var mastermill_marker = new google.maps.Marker({
        position: mastermill_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Millwork Shop'
    });
    
    var hammar_marker = new google.maps.Marker({
        position: hammar_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Commercial Building'
    });
    
    var eagle_marker = new google.maps.Marker({
        position: eagle_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Drawer Box Maker'
    });
    
    var labsphere_marker = new google.maps.Marker({
        position: labsphere_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Optics Maker'
    });
    
    var spec_marker = new google.maps.Marker({
        position: spec_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Conformal Coatings Contractor'
    });
    
    var hink2_marker = new google.maps.Marker({
        position: hink2_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Picnic Boat Builder'
    });
    
    var biw_marker = new google.maps.Marker({
        position: biw_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Naval Shipyard'
    });
    
    var maf_marker = new google.maps.Marker({
        position: maf_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Auto Repair Shop'
    });
    
    var ccf_marker = new google.maps.Marker({
        position: ccf_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Fabricator Shop'
    });
    
    var mrww_marker = new google.maps.Marker({
        position: mrww_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Wind Turbine Project'
    });
    
    var awair_marker = new google.maps.Marker({
        position: awair_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Fabricator Shop'
    });
    
    var esi_marker = new google.maps.Marker({
        position: esi_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Electron Beam Developer'
    });
    
    var martel_marker = new google.maps.Marker({
        position: martel_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Weld Shop'
    });
    
    var dcl_marker = new google.maps.Marker({
        position: dcl_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Manufacturer'
    });
    
    var boyd_marker = new google.maps.Marker({
        position: boyd_latlng,
        map: harvard_yard_map,
        icon: icon,
        title: 'Manufacturer'
    });









    harvard_yard_map.addListener("center_changed", () => {
        // 10 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(() => {
            harvard_yard_map.panTo(chez_sheridan_marker.getPosition());
        }, 10000);
    });

    chez_sheridan_marker.addListener("mouseover", () => {
        harvard_yard_map.setZoom(10);
        harvard_yard_map.setCenter(chez_sheridan_marker.getPosition());
    });

    chez_sheridan_marker.addListener("mouseout", () => {
        harvard_yard_map.setZoom(6);
        harvard_yard_map.setCenter(chez_sheridan_marker.getPosition());
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

    /* Added code below to zoom in on Chez Sheridan marker. 
    google.maps.event.addListener(chez_sheridan_marker, 'hoover', () => {
    map.setZoom(10);
    map.setCenter(marker.getPosition() as google.maps.LatLng);
    }); */

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

    google.maps.event.addListener(dyna_marker, 'click', function () {
        dyna_infowindow.open(harvard_yard_map, dyna_marker);
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

    google.maps.event.addListener(edab_marker, 'click', function () {
        edab_infowindow.open(harvard_yard_map, edab_marker);
    });

    google.maps.event.addListener(jpro_marker, 'click', function () {
        jpro_infowindow.open(harvard_yard_map, jpro_marker);
    });

    google.maps.event.addListener(metso_marker, 'click', function () {
        metso_infowindow.open(harvard_yard_map, metso_marker);
    });

    google.maps.event.addListener(natl_marker, 'click', function () {
        natl_infowindow.open(harvard_yard_map, natl_marker);
    });

    google.maps.event.addListener(grapek_marker, 'click', function () {
        grapek_infowindow.open(harvard_yard_map, grapek_marker);
    });

    google.maps.event.addListener(mta_marker, 'click', function () {
        mta_infowindow.open(harvard_yard_map, mta_marker);
    });

    google.maps.event.addListener(eppley_marker, 'click', function () {
        eppley_infowindow.open(harvard_yard_map, eppley_marker);
    });

    google.maps.event.addListener(duck_marker, 'click', function () {
        duck_infowindow.open(harvard_yard_map, duck_marker);
    });

    google.maps.event.addListener(display_marker, 'click', function () {
        display_infowindow.open(harvard_yard_map, display_marker);
    });

    google.maps.event.addListener(furman_marker, 'click', function () {
        furman_infowindow.open(harvard_yard_map, furman_marker);
    });

    google.maps.event.addListener(rapid_marker, 'click', function () {
        rapid_infowindow.open(harvard_yard_map, rapid_marker);
    });

    google.maps.event.addListener(minute_marker, 'click', function () {
        minute_infowindow.open(harvard_yard_map, minute_marker);
    });

    google.maps.event.addListener(faniel_marker, 'click', function () {
        faniel_infowindow.open(harvard_yard_map, faniel_marker);
    });

    google.maps.event.addListener(newton_marker, 'click', function () {
        newton_infowindow.open(harvard_yard_map, newton_marker);
    });

    google.maps.event.addListener(ab_marker, 'click', function () {
        ab_infowindow.open(harvard_yard_map, ab_marker);
    });

    google.maps.event.addListener(fresh_marker, 'click', function () {
        fresh_infowindow.open(harvard_yard_map, fresh_marker);
    });

    google.maps.event.addListener(edo_marker, 'click', function () {
        edo_infowindow.open(harvard_yard_map, edo_marker);
    });

    google.maps.event.addListener(buck_marker, 'click', function () {
        buck_infowindow.open(harvard_yard_map, buck_marker);
    });

    google.maps.event.addListener(lundy_marker, 'click', function () {
        lundy_infowindow.open(harvard_yard_map, lundy_marker);
    });

    google.maps.event.addListener(iron_marker, 'click', function () {
        iron_infowindow.open(harvard_yard_map, iron_marker);
    });

    google.maps.event.addListener(martin_marker, 'click', function () {
        martin_infowindow.open(harvard_yard_map, martin_marker);
    });

    google.maps.event.addListener(carlos_marker, 'click', function () {
        carlos_infowindow.open(harvard_yard_map, carlos_marker);
    });

    google.maps.event.addListener(time_marker, 'click', function () {
        time_infowindow.open(harvard_yard_map, time_marker);
    });

    google.maps.event.addListener(mass_marker, 'click', function () {
        mass_infowindow.open(harvard_yard_map, mass_marker);
    });

    google.maps.event.addListener(fresh_marker, 'click', function () {
        fresh_infowindow.open(harvard_yard_map, fresh_marker);
    });

    google.maps.event.addListener(spray_me_marker, 'click', function () {
        spray_me_infowindow.open(harvard_yard_map, spray_me_marker);
    });

    google.maps.event.addListener(fuzz_marker, 'click', function () {
        fuzz_infowindow.open(harvard_yard_map, fuzz_marker);
    });

    google.maps.event.addListener(light_marker, 'click', function () {
        light_infowindow.open(harvard_yard_map, light_marker);
    });

    google.maps.event.addListener(foods_marker, 'click', function () {
        foods_infowindow.open(harvard_yard_map, foods_marker);
    });

    google.maps.event.addListener(silvex_marker, 'click', function () {
        silvex_infowindow.open(harvard_yard_map, silvex_marker);
    });

    google.maps.event.addListener(triangle_marker, 'click', function () {
        triangle_infowindow.open(harvard_yard_map, triangle_marker);
    });

    google.maps.event.addListener(met_atl_marker, 'click', function () {
        met_atl_infowindow.open(harvard_yard_map, met_atl_marker);
    });

    google.maps.event.addListener(dorma_marker, 'click', function () {
        dorma_infowindow.open(harvard_yard_map, dorma_marker);
    });

    google.maps.event.addListener(classic_marker, 'click', function () {
        classic_infowindow.open(harvard_yard_map, classic_marker);
    });

    google.maps.event.addListener(feeley_marker, 'click', function () {
        feeley_infowindow.open(harvard_yard_map, feeley_marker);
    });

    google.maps.event.addListener(ospc_marker, 'click', function () {
        ospc_infowindow.open(harvard_yard_map, ospc_marker);
    });

    google.maps.event.addListener(services_marker, 'click', function () {
        services_infowindow.open(harvard_yard_map, services_marker);
    });

    google.maps.event.addListener(mc_shop_marker, 'click', function () {
        mc_shop_infowindow.open(harvard_yard_map, mc_shop_marker);
    });

    google.maps.event.addListener(master_marker, 'click', function () {
        master_infowindow.open(harvard_yard_map, master_marker);
    });

    google.maps.event.addListener(parker_marker, 'click', function () {
        parker_infowindow.open(harvard_yard_map, parker_marker);
    });

    google.maps.event.addListener(pri_marker, 'click', function () {
        pri_infowindow.open(harvard_yard_map, pri_marker);
    });

    google.maps.event.addListener(jap_marker, 'click', function () {
        jap_infowindow.open(harvard_yard_map, jap_marker);
    });

    google.maps.event.addListener(app_marker, 'click', function () {
        app_infowindow.open(harvard_yard_map, app_marker);
    });

    google.maps.event.addListener(pool_marker, 'click', function () {
        pool_infowindow.open(harvard_yard_map, pool_marker);
    });

    google.maps.event.addListener(sign_marker, 'click', function () {
        sign_infowindow.open(harvard_yard_map, sign_marker);
    });

    google.maps.event.addListener(high_marker, 'click', function () {
        high_infowindow.open(harvard_yard_map, high_marker);
    });

    google.maps.event.addListener(crowe_marker, 'click', function () {
        crowe_infowindow.open(harvard_yard_map, crowe_marker);
    });

    google.maps.event.addListener(rotary_marker, 'click', function () {
        rotary_infowindow.open(harvard_yard_map, rotary_marker);
    });

    google.maps.event.addListener(rex_marker, 'click', function () {
        rex_infowindow.open(harvard_yard_map, rex_marker);
    });

    google.maps.event.addListener(grid_marker, 'click', function () {
        grid_infowindow.open(harvard_yard_map, grid_marker);
    });

    google.maps.event.addListener(c_g_metal_marker, 'click', function () {
        c_g_metal_infowindow.open(harvard_yard_map, c_g_metal_marker);
    });

    google.maps.event.addListener(summit_marker, 'click', function () {
        summit_infowindow.open(harvard_yard_map, summit_marker);
    });

    google.maps.event.addListener(bae_marker, 'click', function () {
        bae_infowindow.open(harvard_yard_map, bae_marker);
    });

    google.maps.event.addListener(mich_marker, 'click', function () {
        mich_infowindow.open(harvard_yard_map, mich_marker);
    });

    google.maps.event.addListener(psg_marker, 'click', function () {
        psg_infowindow.open(harvard_yard_map, psg_marker);
    });

    google.maps.event.addListener(jfarm_marker, 'click', function () {
        jfarm_infowindow.open(harvard_yard_map, jfarm_marker);
    });

    google.maps.event.addListener(mcb_marker, 'click', function () {
        mcb_infowindow.open(harvard_yard_map, mcb_marker);
    });

    google.maps.event.addListener(nashua_marker, 'click', function () {
        nashua_infowindow.open(harvard_yard_map, nashua_marker);
    });

    google.maps.event.addListener(tdf_marker, 'click', function () {
        tdf_infowindow.open(harvard_yard_map, tdf_marker);
    });

    google.maps.event.addListener(waste_marker, 'click', function () {
        waste_infowindow.open(harvard_yard_map, waste_marker);
    });

    google.maps.event.addListener(west_marker, 'click', function () {
        west_infowindow.open(harvard_yard_map, west_marker);
    });

    google.maps.event.addListener(lyman_marker, 'click', function () {
        lyman_infowindow.open(harvard_yard_map, lyman_marker);
    });

    google.maps.event.addListener(hemenway_marker, 'click', function () {
        hemenway_infowindow.open(harvard_yard_map, hemenway_marker);
    });
    
    google.maps.event.addListener(wash5_marker, 'click', function () {
        wash5_infowindow.open(harvard_yard_map, wash5_marker);
    });
    
    google.maps.event.addListener(wash1_marker, 'click', function () {
        wash1_infowindow.open(harvard_yard_map, wash1_marker);
    });
    
    google.maps.event.addListener(wash4_marker, 'click', function () {
        wash4_infowindow.open(harvard_yard_map, wash4_marker);
    });
    
    google.maps.event.addListener(wash3_marker, 'click', function () {
        wash3_infowindow.open(harvard_yard_map, wash3_marker);
    });
    
    google.maps.event.addListener(wash2_marker, 'click', function () {
        wash2_infowindow.open(harvard_yard_map, wash2_marker);
    });
    
    google.maps.event.addListener(cmf_marker, 'click', function () {
        cmf_infowindow.open(harvard_yard_map, cmf_marker);
    });
    
    google.maps.event.addListener(next_marker, 'click', function () {
        next_infowindow.open(harvard_yard_map, next_marker);
    });
    
    google.maps.event.addListener(jbi_marker, 'click', function () {
        jbi_infowindow.open(harvard_yard_map, jbi_marker);
    });
    
    google.maps.event.addListener(spring_marker, 'click', function () {
        spring_infowindow.open(harvard_yard_map, spring_marker);
    });
    
    google.maps.event.addListener(csi_marker, 'click', function () {
        csi_infowindow.open(harvard_yard_map, csi_marker);
    });
    
    google.maps.event.addListener(louis_marker, 'click', function () {
        louis_infowindow.open(harvard_yard_map, louis_marker);
    });
    
    google.maps.event.addListener(usa_marker, 'click', function () {
        usa_infowindow.open(harvard_yard_map, usa_marker);
    });
    
    google.maps.event.addListener(gmf_marker, 'click', function () {
        gmf_infowindow.open(harvard_yard_map, gmf_marker);
    });
    
    google.maps.event.addListener(atmo_marker, 'click', function () {
        atmo_infowindow.open(harvard_yard_map, atmo_marker);
    });
    
    google.maps.event.addListener(radar2_marker, 'click', function () {
        radar2_infowindow.open(harvard_yard_map, radar2_marker);
    });
    
    google.maps.event.addListener(custmach_marker, 'click', function () {
        custmach_infowindow.open(harvard_yard_map, custmach_marker);
    });
    
    google.maps.event.addListener(gtr_marker, 'click', function () {
        gtr_infowindow.open(harvard_yard_map, gtr_marker);
    });
    
    google.maps.event.addListener(baker_marker, 'click', function () {
        baker_infowindow.open(harvard_yard_map, baker_marker);
    });
    
    google.maps.event.addListener(ebm_marker, 'click', function () {
        ebm_infowindow.open(harvard_yard_map, ebm_marker);
    });
    
    google.maps.event.addListener(bandg_marker, 'click', function () {
        bandg_infowindow.open(harvard_yard_map, bandg_marker);
    });
    
    google.maps.event.addListener(kalow_marker, 'click', function () {
        kalow_infowindow.open(harvard_yard_map, kalow_marker);
    });
    
    google.maps.event.addListener(expc_marker, 'click', function () {
        expc_infowindow.open(harvard_yard_map, expc_marker);
    });
    
    google.maps.event.addListener(teknor_marker, 'click', function () {
        teknor_infowindow.open(harvard_yard_map, teknor_marker);
    });
    
    google.maps.event.addListener(cil2_marker, 'click', function () {
        cil2_infowindow.open(harvard_yard_map, cil2_marker);
    });
    
    google.maps.event.addListener(wagyu_marker, 'click', function () {
        wagyu_infowindow.open(harvard_yard_map, wagyu_marker);
    });
    
    google.maps.event.addListener(swim_marker, 'click', function () {
        swim_infowindow.open(harvard_yard_map, swim_marker);
    });
    
    google.maps.event.addListener(jmd2_marker, 'click', function () {
        jmd_infowindow.open(harvard_yard_map, jmd2_marker);
    });
    
    google.maps.event.addListener(jmd3_marker, 'click', function () {
        jmd_infowindow.open(harvard_yard_map, jmd3_marker);
    });
    
    google.maps.event.addListener(grapek2_marker, 'click', function () {
        grapek2_infowindow.open(harvard_yard_map, grapek2_marker);
    });
    
    google.maps.event.addListener(hink_marker, 'click', function () {
        hink_infowindow.open(harvard_yard_map, hink_marker);
    });
    
    google.maps.event.addListener(shutter_marker, 'click', function () {
        shutter_infowindow.open(harvard_yard_map, shutter_marker);
    });
    
    google.maps.event.addListener(mastermill_marker, 'click', function () {
        mastermill_infowindow.open(harvard_yard_map, mastermill_marker);
    });
    
    google.maps.event.addListener(hammar_marker, 'click', function () {
        hammar_infowindow.open(harvard_yard_map, hammar_marker);
    });
    
    google.maps.event.addListener(eagle_marker, 'click', function () {
        eagle_infowindow.open(harvard_yard_map, eagle_marker);
    });
    
    google.maps.event.addListener(labsphere_marker, 'click', function () {
        labsphere_infowindow.open(harvard_yard_map, labsphere_marker);
    });
    
    google.maps.event.addListener(spec_marker, 'click', function () {
        spec_infowindow.open(harvard_yard_map, spec_marker);
    });
    
    google.maps.event.addListener(hink2_marker, 'click', function () {
        hink2_infowindow.open(harvard_yard_map, hink2_marker);
    });
    
    google.maps.event.addListener(biw_marker, 'click', function () {
        biw_infowindow.open(harvard_yard_map, biw_marker);
    });
    
    google.maps.event.addListener(maf_marker, 'click', function () {
        maf_infowindow.open(harvard_yard_map, maf_marker);
    });
    
    google.maps.event.addListener(ccf_marker, 'click', function () {
        ccf_infowindow.open(harvard_yard_map, ccf_marker);
    });
    
    google.maps.event.addListener(mrww_marker, 'click', function () {
        mrww_infowindow.open(harvard_yard_map, mrww_marker);
    });
    
    google.maps.event.addListener(awair_marker, 'click', function () {
        awair_infowindow.open(harvard_yard_map, awair_marker);
    });
    
    google.maps.event.addListener(esi_marker, 'click', function () {
        esi_infowindow.open(harvard_yard_map, esi_marker);
    });
    
    google.maps.event.addListener(martel_marker, 'click', function () {
        martel_infowindow.open(harvard_yard_map, martel_marker);
    });
    
    google.maps.event.addListener(dcl_marker, 'click', function () {
        dcl_infowindow.open(harvard_yard_map, dcl_marker);
    });
    
    google.maps.event.addListener(boyd_marker, 'click', function () {
        boyd_infowindow.open(harvard_yard_map, boyd_marker);
    });
    






    /*Timing functions for zoom in to northeast and stop marker bounce. */

    setTimeout(function () {
        harvard_yard_map.setZoom(7);
        harvard_yard_map.panTo(chez_sheridan_marker.getPosition());
    }, 2500);

    setTimeout(function () {
        chez_sheridan_marker.setAnimation(null)
    }, 5000);


    // instantiate the overview map without controls
    overview = new google.maps.Map(document.getElementById("overview"), {
        //...mapOptions,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        disableDefaultUI: true,
        gestureHandling: "none",
        zoomControl: false,
        fullscreenControl: false,
    });

    function clamp(num, min, max) {
        return Math.min(Math.max(num, min), max);
    }

    harvard_yard_map.addListener("bounds_changed", () => {
        overview.setCenter(harvard_yard_map.getCenter());
        overview.setZoom(
            clamp(
                harvard_yard_map.getZoom() - OVERVIEW_DIFFERENCE,
                OVERVIEW_MIN_ZOOM,
                OVERVIEW_MAX_ZOOM
            )
        );
    });

    //end of overview map. Also, includes the three const. near the top. 
    
    /*Shop/Office marker for overview insert map(below).*/
    
    var chez_sheridan_insert_marker = new google.maps.Marker({
        position: chez_sheridan_latlng,
        map: overview,
        title: 'Steven Breen-Office/Shop',
        //icon: icon_man,
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        zIndex: 9999,
        animation: google.maps.Animation.BOUNCE,
        scaledSize: new google.maps.Size(100, 100),
    });
    
    setTimeout(function () {
        chez_sheridan_insert_marker.setAnimation(null)
    }, 7000);
    
            /*For Sheridan listener on insert map below
    
            google.maps.event.addListener(chez_sheridan_insert_marker, 'click', function () {
            insert_infowindow.open(overview, chez_sheridan_insert_marker);
            });*/
    
    
   /*End of insert map marker.*/
    
   
   /*Hack to get miles scale on the map rather than kilometers.*/
    
    var scaleInterval = setInterval( function() {
  var spn = document.getElementById('harvard_yard_map').getElementsByTagName('span');
  var pattern = /\d+\s+(m|km)/i;
  for(var i in spn) {
    if ( pattern.test(spn[i].innerHTML) ) {
      spn[i].click();
      clearInterval(scaleInterval);
    }
  }
}, 500);
setTimeout( function() { clearInterval(scaleInterval) }, 20000 );
    
    /*End of miles/km hack.*/
    



}
