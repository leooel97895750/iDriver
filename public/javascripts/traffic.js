// 在路線上顯示即時路況的功能，此功能勞師動眾，包刮(python(爬蟲、機器學習)、database(經緯分析)、api)，一個環節掛掉就全部掛掉，請小心~

var trafficmarker=[];
var trafficopen=0;
function fake_traffic()
{
    if(trafficopen==1)
    {
        for (var i = 0; i < trafficmarker.length; i++) {   
            trafficmarker[i].setMap(null);   
        }
        trafficopen=0;
    }
    else if(trafficopen==0)
    {
        trafficopen=1;
        //API取得事故類即時路況
        var myurl = 'https://chatbot.csie.ncnu.edu.tw:2235/api/getviewdata.ashx?method=iDriver/getTrafficData&Kind=%E4%BA%8B%E6%95%85&All=0';
        getAPI(myurl,createTrafficMark);
    }
}
function createTrafficMark(xhttp)
{
    var trafficData = JSON.parse(xhttp.responseText);
    console.log(trafficData.ItemSet.getTrafficData);
    trafficLength = trafficData.ItemSet.getTrafficData.length;
    for(var i=0; i<trafficLength; i++)
    {
        if(trafficData.ItemSet.getTrafficData[i].Lat != null)
        {
            //新增即時影像標籤
            trafficmarker[i] = new google.maps.Marker({
                position: {
                    lat: trafficData.ItemSet.getTrafficData[i].Lat, 
                    lng: trafficData.ItemSet.getTrafficData[i].Lon
                },
                map: map_direction,
                icon:'../images/danger.png',
                animation: google.maps.Animation.BOUNCE
            });
            //新增listener
            trafficmarker[0].addListener('click', function(){
                var infoopen = 0;
                //建立infowindow and 判斷速限是否合理
                var infowindow = new google.maps.InfoWindow({
                    content: '<p style="margin:5px;"><b style="font-size:20px">事故</b><hr>'
                            +'<b style="color:red;">影響行車時間: 低</b>'
                            +'<b class="changeRoute" onclick="change_Route()">更換路線</b></p>'
                            +'<hr>'
                            +'<p style="margin:5px">'+trafficData.ItemSet.getTrafficData[i].Address+'</p>'
                            +'<p style="margin:5px">'+trafficData.ItemSet.getTrafficData[i].Detail+'</p>'
                });
                //width_size();
                //開關infowindow
                if(infoopen == 0){
                    infowindow.open(map_roadinfo, this);
                    infoopen=1;
                }else{
                    infowindow.close();
                    infoopen=0;
                }
            });
        }
    }
}