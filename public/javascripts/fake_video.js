//在路線上顯示及時監視攝影機，目前是手動插入資料，未來要根據資料庫的資料自動判斷座標來插入

var videomarker=[];
var videoopen=0;
function fake_video()
{
    if(videoopen==1)
    {
        for (var i = 0; i < videomarker.length; i++) {   
            videomarker[i].setMap(null);   
        }
        videoopen=0;
    }
    else if(videoopen==0)
    {
        videoopen=1;
        //新增假即時影像標籤
        videomarker[0] = new google.maps.Marker({
            position: {
                lat: 24.136783,
                lng: 121.275652
            },
            map: map_direction,
            icon:'../images/video_icon.png'
        });
        //新增listener
        videomarker[0].addListener('click', function(){
            var infoopen = 0;
            //建立infowindow and 判斷速限是否合理
            var infowindow = new google.maps.InfoWindow({
                content: '<p style="margin:0px">武嶺</p><iframe class="iframesize" src="http://60.250.155.175/T14A-d61a0c91/" style="height:300px;width:500px;overflow:hidden"></iframe>'
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
        videomarker[1] = new google.maps.Marker({
            position: {
                lat: 24.122653, 
                lng: 121.270702
            },
            map: map_direction,
            icon:'../images/video_icon.png'
        });
        videomarker[1].addListener('click', function(){
            var infoopen = 0;
            var infowindow = new google.maps.InfoWindow({
                content: '<p style="margin:0px">昆陽</p><iframe class="iframesize" src="http://60.250.155.175/T14A-8c626f51/" style="height:300px;width:500px;overflow:hidden"></iframe>'
            });
            if(infoopen == 0){
                infowindow.open(map_roadinfo, this);
                infoopen=1;
            }else{
                infowindow.close();
                infoopen=0;
            }
        });
        //3
        videomarker[2] = new google.maps.Marker({
            position: {
                lat: 23.987890, 
                lng: 120.793580
            },
            map: map_direction,
            icon:'../images/video_icon.png'
        });
        videomarker[2].addListener('click', function(){
            var infoopen = 0;
            var infowindow = new google.maps.InfoWindow({
                content: '<p style="margin:0px">國道6號(國姓交流道到東草屯交流道)</p><iframe class="iframesize" src="http://210.241.63.120/abs2mjpg/bmjpg?camera=93" style="height:200px;width:300px;overflow:hidden"></iframe>'
            });
            if(infoopen == 0){
                infowindow.open(map_roadinfo, this);
                infoopen=1;
            }else{
                infowindow.close();
                infoopen=0;
            }
        });
        //4
        videomarker[3] = new google.maps.Marker({
            position: {
                lat: 23.979999, 
                lng: 120.922445
            },
            map: map_direction,
            icon:'../images/video_icon.png'
        });
        videomarker[3].addListener('click', function(){
            var infoopen = 0;
            var infowindow = new google.maps.InfoWindow({
                content: '<p style="margin:0px">國道6號(埔里交流道到埔里端)</p><iframe class="iframesize" src="http://210.241.63.120/abs2mjpg/bmjpg?camera=89" style="height:200px;width:300px;overflow:hidden"></iframe>'
            });
            if(infoopen == 0){
                infowindow.open(map_roadinfo, this);
                infoopen=1;
            }else{
                infowindow.close();
                infoopen=0;
            }
        });
        //5
        videomarker[4] = new google.maps.Marker({
            position: {
                lat: 24.022158, 
                lng: 120.678425
            },
            map: map_direction,
            icon:'../images/video_icon.png'
        });
        videomarker[4].addListener('click', function(){
            var infoopen = 0;
            var infowindow = new google.maps.InfoWindow({
                content: '<p style="margin:0px">國道6號(霧峰系統交流道到舊正交流道)</p><iframe class="iframesize" src="http://210.241.63.120/abs2mjpg/bmjpg?camera=373" style="height:200px;width:300px;overflow:hidden"></iframe>'
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