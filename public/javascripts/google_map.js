function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBCfynfSQU-J-AVUeW3IPRK79atoD2UtRE&callback=init_map";
  document.body.appendChild(script);
}
//全域變數宣告
var map_direction;
var map_roadinfo;
var markers = [];
var startlatlng;
var endlatlng;
//要放標籤的經緯
var testpoint = [
  {lat:25.0336962, lng:121.5643673},
  {lat:25.0333698, lng:121.5641564},
  {lat:25.033899, lng:121.564329},
  {lat:25.0338407, lng:121.5645269},
  {lat:25.0336377, lng:121.5645727}
];
//建立要用的地圖，設定初始值
var searchBox1;
var searchBox2;
var directionsService;
var directionsDisplay;
function init_map() 
{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } 
  else {
      error('not supported');
  }
  function error(msg)
  {
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    var position = {
      lat: 23.955899,
      lng: 120.926600
    };
    map_direction = new google.maps.Map(document.getElementById('map_direction'), {
      zoom: 12,
      center: position,
      
      //讓ctrl zoom改成滑鼠滾輪
      gestureHandling: 'greedy',
      fullscreenControl:false,
      rotateControl:false,
      scaleControl:false,
      streetViewControl:false,
      zoomControl:false,
      mapTypeControl:false,
      zoomControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER},
      scaleControlOptions:{position:google.maps.ControlPosition.BOTTOM_LEFT},
      streetViewControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER},
      mapTypeControlOptions:{position:google.maps.ControlPosition.LEFT_BOTTOM}
    });
    var input = document.getElementById('input_start');
    searchBox1 = new google.maps.places.SearchBox(input);
    var input = document.getElementById('input_end');
    searchBox2 = new google.maps.places.SearchBox(input);

    map_roadinfo = new google.maps.Map(document.getElementById('map_info'), {
      zoom: 8,
      center: position
    });
    autoComplete();
  }
  function success(position)
  {
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    var position = {
      lat: position.coords.latitude, 
      lng: position.coords.longitude
    };
    map_direction = new google.maps.Map(document.getElementById('map_direction'), {
      zoom: 12,
      center: position,
      
      //讓ctrl zoom改成滑鼠滾輪
      gestureHandling: 'greedy',
      fullscreenControl:false,
      rotateControl:false,
      scaleControl:false,
      streetViewControl:false,
      zoomControl:false,
      mapTypeControl:false,
      zoomControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER},
      scaleControlOptions:{position:google.maps.ControlPosition.BOTTOM_LEFT},
      streetViewControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER},
      mapTypeControlOptions:{position:google.maps.ControlPosition.LEFT_BOTTOM}
    });
    var input = document.getElementById('input_start');
    searchBox1 = new google.maps.places.SearchBox(input);
    var input = document.getElementById('input_end');
    searchBox2 = new google.maps.places.SearchBox(input);

    map_roadinfo = new google.maps.Map(document.getElementById('map_info'), {
      zoom: 8,
      center: position
    });
    autoComplete();
  }
}

//宣告要標記的點陣列

function addMarker(e) {
  markers[e] = new google.maps.Marker({
    position: {
      lat: testpoint[e].lat,
      lng: testpoint[e].lng
    },
    map: map_roadinfo
  });
}

changeRoute=0;
function change_Route()
{
  changeRoute++;
  direction();
}

function restartRoute()
{
  changeRoute=0;
}

var path = []
//var route_region=[]//路線上有甚麼鄉鎮
speedopen=0;
weatheropen=0;
//travelMode
var traveltype = "DRIVING";
var isHighway = false;
var isToll = false;
function direction()
{
  highwayAndToll();
  //清除測速標籤
  if(speedopen==1)
  {
    speedopen=0;
    for (var i = 0; i < speedinfomarker.length; i++) {   
      speedinfomarker[i].setMap(null);   
    }
  }
  if(weatheropen==1)
  {
    weatheropen=0;
    for (var i = 0; i < weathermarker.length; i++) {   
      weathermarker[i].setMap(null);   
    }
  }

  if(trafficopen==1)
  {
    trafficopen=0;
    for (var i = 0; i < trafficmarker.length; i++) {   
      trafficmarker[i].setMap(null);   
    }
  }
  //清理direction_box裡面所有路線資料
  //jquery remove
  $("#direction_box_ul").empty();
  directionopen = 0;
  $("#direction_button").attr("src","../images/direction_close.png");
  $("#direction_box").slideDown();
  //刪除regionset
  regionset.clear();
  weatherset.clear();
  lonset = [];
  latset = [];
  //刪除上一次的路線
  directionsDisplay.setMap(null);
  directionsDisplay.setMap(map_direction);
  
  // 路線相關設定
  var request = {
    origin: startlatlng,
    destination: endlatlng,
    travelMode: traveltype,
    provideRouteAlternatives: true,
    avoidHighways: isHighway,
    avoidTolls: isToll
  };
  
  // 繪製路線
  directionsService.route(request, function (result, status) {
      if (status == 'OK') {
          //替換路線
          
          var routeLength = result.routes.length;
          for(var i=0; i<routeLength; i++)
          {
            result.routes[i] = result.routes[(i+(changeRoute%routeLength))%routeLength];
          }
          

          //回傳路線上每個步驟的細節
          console.log(result);
          //經過的鄉鎮
          path = result.routes[0].overview_path;
          mygeocoding(path)

          //畫出overview_path
          /*
          var pathmarker = [];
          var pathnumber = 0;
          for(var i=0; i<path.length; i+=1)
          {
              var pathLon = path[i].lng();
              var pathLat = path[i].lat();
              pathmarker[pathnumber] = new google.maps.Marker({
                position: {
                    lat: pathLat, 
                    lng: pathLon
                },
                map: map_direction
              });
              pathnumber++;
          }
          */
        
          // 加入詳細路線進direction_box
          var route_detail = result.routes[0].legs[0].steps;
          for(var i=0; i<route_detail.length; i++)
          {
            var every_route = $('<li class="direction_route" style="margin:5px;padding:0px;">'+route_detail[i].instructions+"<br>距離: "+route_detail[i].distance.text+"<br>所需時間: "+route_detail[i].duration.text+"</li>");
            $("#direction_box_ul").append(every_route);
            var myhr = $('<hr style="width:95%">');
            $("#direction_box_ul").append(myhr);
          }
          directionsDisplay.setDirections(result);
      } else {
          console.log(status);
      }
  });
  map_direction.setCenter(startlatlng);
}

function geocoding(address, se)
{
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
      //得到經緯
      console.log(results[0].geometry.location);
      //由參數決定要存在哪個變數中
      if(se == 0) startlatlng = results[0].geometry.location;
      else if(se == 1){
        endlatlng = results[0].geometry.location;
        //console.log('???')
        direction();
      } 
      /*
      map_direction.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map_direction,
          position: results[0].geometry.location
      });*/
    } else {
      console.log(status);
    }
  });
}

//input輸入完後抓取經緯
function getstart_latlng()
{
  geocoding($("#input_start").val(),0);
}
function getend_latlng()
{
  geocoding($("#input_end").val(),1);
  return 1;
}

//trydirection($("#input_start").val(),0)
function tryGetRoad()
{
  trydirection($("#input_start").val(),0);
}
function trydirection(address, se)
{
  restartRoute();
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
      //得到經緯
      console.log(results[0].geometry.location);
      //由參數決定要存在哪個變數中
      startlatlng = results[0].geometry.location;
      
        
      //console.log('???')
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode( { 'address': $("#input_end").val()}, function(results, status) {
        if (status == 'OK') {
          //得到經緯
          console.log(results[0].geometry.location);
          //由參數決定要存在哪個變數中
          
          endlatlng = results[0].geometry.location;
          //console.log('???')
          direction();
          
        } else {
          console.log(status);
        }
      });
      
    } else {
      console.log(status);
    }
  });
}
//searchbox自動輸入
function autoComplete()
{
  map_direction.addListener('bounds_changed', function () {
    searchBox1.setBounds(map_direction.getBounds());
  });
  searchBox1.addListener('places_changed', function () {
      var places = searchBox1.getPlaces();
      /*
      if (places.length == 0) {
          console.log(places);
          return;
      }
      */
  });

  map_direction.addListener('bounds_changed', function () {
    searchBox2.setBounds(map_direction.getBounds());
  });
  searchBox2.addListener('places_changed', function () {
      var places = searchBox1.getPlaces();
      /*
      if (places.length == 0) {
          console.log(places);
          return;
      }
      */
  });
}

//focus
var isFocus = 0;
function focus_button()
{
  if(isFocus==0)
  {
    isFocus = 1;
    $("#member_circle").css("z-index", "7");
    $("#member_detail").css("z-index", "6");
    $("#verticalbar").css("z-index", "5");
    $("#menu_circle").css("z-index", "6");
    $("#menu_button").css("z-index", "7");
    $("#wrap").css("position", "fixed");
    $("#wrap").css("top", "0px");
    $("#wrap").css("left", "0px");
    $("#wrap").css("width", "100%");
    $("#wrap").css("height", "100%");
    $('#map_direction').css("height", "100%");
  }
  else
  {
    isFocus = 0;
    $("#member_circle").css("z-index", "12");
    $("#member_detail").css("z-index", "11");
    $("#verticalbar").css("z-index", "10");
    $("#menu_circle").css("z-index", "11");
    $("#menu_button").css("z-index", "12");
    $("#wrap").css("position", "relative");
    $("#wrap").css("width", "auto");
    $("#wrap").css("height", "auto");
    $('#map_direction').css("height", "550px");
  }
}

function travelMode(type)
{
  traveltype = type;
  console.log(traveltype);
}
function highwayAndToll()
{
  isHighway = $("#myhighway").prop("checked");
  isToll = $("myToll").prop("checked");
}
