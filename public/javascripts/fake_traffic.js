var trafficmarker=[];
var trafficopen=0;
var demo_only_use_onetime = 0;
function fake_traffic()
{
    if(trafficopen==1)
    {
        for (var i = 0; i < trafficmarker.length; i++) {   
            trafficmarker[i].setMap(null);   
        }
        trafficopen=0;
    }
    else if(trafficopen==0 && demo_only_use_onetime==0)
    {
        demo_only_use_onetime = 1;
        trafficopen=1;
        //新增假即時影像標籤
        trafficmarker[0] = new google.maps.Marker({
            position: {
                lat: 24.402625, 
                lng: 120.669456
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
                        +'<p style="margin:5px">國道3號北上 65km處</p>'
                        +'<p style="margin:5px">2自小客車追撞。</p>'
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
        //2
        trafficmarker[1] = new google.maps.Marker({
            position: {
                lat: 24.759171, 
                lng: 121.054319
            },
            map: map_direction,
            icon:'../images/danger_red.png',
            animation: google.maps.Animation.BOUNCE
        });
        trafficmarker[1].addListener('click', function(){
            var infoopen = 0;
            var infowindow = new google.maps.InfoWindow({
                content: '<p style="margin:5px;"><b style="font-size:20px">事故</b><hr>'
                        +'<b style="color:red;">影響行車時間: 高</b>'
                        +'<b class="changeRoute" onclick="change_Route()">更換路線</b></p>'
                        +'<hr>'
                        +'<p style="margin:5px">國道3號北上 76km處</p>'
                        +'<p style="margin:5px">油罐車翻覆，目前剩下一道，阻塞嚴重。</p>'
            });
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