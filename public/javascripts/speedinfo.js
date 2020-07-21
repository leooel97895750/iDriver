//在路線上顯示測速照相位置

var speedinfomarker = [];
//紀錄BID, limit
var speedBID = [];
var speedLimit = [];
var markernumber = 0;
var speedopen = 0;
function get_fake_speedinfo()
{
    speedBID = [];
    if(speedopen==1)
    {
        speedopen=0;
        for (var i = 0; i < speedinfomarker.length; i++) {   
            speedinfomarker[i].setMap(null);   
        }
    }
    else if(speedopen==0)
    {
        speedopen=1;
        for (let item of regionset)
        {
            var speed_url = "https://chatbot.csie.ncnu.edu.tw:2235/api/getviewdata.ashx?method=iDriver/getCOData&CID="+item+"&Type=1";
            getAPI(speed_url, get_object);
        }
    }
}
function get_object(xhttp)
{
    var object_json = JSON.parse(xhttp.responseText);
    var objectlength = object_json.ItemSet.getCOData.length;
    for(var i=0; i<objectlength; i++)
    {
        var myoid = object_json.ItemSet.getCOData[i].OID;
        var myurl = "https://chatbot.csie.ncnu.edu.tw:2235/api/getviewdata.ashx?method=iDriver/getOData_Speedinfo&OID="+myoid;
        getAPI(myurl,get_odata);
    }
}
function get_odata(xhttp)
{
    var odata_json = JSON.parse(xhttp.responseText);
    var check = odata_json.ItemSet.getOData_Speedinfo[0].OID;
    //測速照相BID的集合
    if((odata_json.ItemSet.getOData_Speedinfo[0].BID in speedBID) == false)
    {
        speedBID.push(odata_json.ItemSet.getOData_Speedinfo[0].BID);
        speedLimit.push(odata_json.ItemSet.getOData_Speedinfo[0].Speed);
    }
    if(check!=1004 && check!=1005 && check!=1317 && check!=1319 && check!=1318 && check!=1316 && check!=1306 && check!=1305)
    {
        speedinfomarker[markernumber] = new google.maps.Marker({
            position: {
                lat: odata_json.ItemSet.getOData_Speedinfo[0].Lat, 
                lng: odata_json.ItemSet.getOData_Speedinfo[0].Lon
            },
            map: map_direction,
            icon:'../images/camera.png'
        });
        speedinfomarker[markernumber].addListener('click', function(){
            var infoopen = 0;
            
            //建立infowindow and 判斷速限是否合理
            var myspeed =odata_json.ItemSet.getOData_Speedinfo[0].Speed;
            if(myspeed==0)
            {
                myspeed="不明";
            }
            var infowindow = new google.maps.InfoWindow({
                content: 
                "<p class='infobox_speed' style='border-bottom: red 2px solid'>編號: "+odata_json.ItemSet.getOData_Speedinfo[0].OID+"</p>"
                +"<p class='infobox_speed' style='border-bottom: orange 2px solid'>縣市: "+odata_json.ItemSet.getOData_Speedinfo[0].City+"</p>"
                +"<p class='infobox_speed' style='border-bottom: yellow 2px solid'>鄉鎮: "+odata_json.ItemSet.getOData_Speedinfo[0].Region+"</p>"
                +"<p class='infobox_speed' style='border-bottom: greenyellow 2px solid'>位置: "+odata_json.ItemSet.getOData_Speedinfo[0].Road+"</p>"
                +"<p class='infobox_speed' style='border-bottom: Dodgerblue 2px solid'>速限: "+myspeed+"</p>"
            });

            //開關infowindow
            if(infoopen == 0){
                infowindow.open(map_direction, this);
                infoopen=1;
            }else{
                infowindow.close();
                infoopen=0;
            }
        });
        markernumber++;
    }
}

function updateSpeed()
{
    alert('感謝提供測速資訊');
}