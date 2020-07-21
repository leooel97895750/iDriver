// 沿路天氣功能

var weather_url = {
    "宜蘭縣":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-001?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "桃園市":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-005?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "新竹縣":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-009?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "苗栗縣":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-013?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "彰化縣":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-017?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "南投縣":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-021?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "雲林縣":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-025?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "嘉義縣":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-029?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "屏東縣":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-033?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "台東縣":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-037?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "花蓮縣":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-041?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "澎湖縣":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-045?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "基隆縣":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-049?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "新竹市":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-053?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "嘉義市":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-057?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "台北市":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "高雄市":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "新北市":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-069?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "台中市":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-073?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName=",
    "台南市":"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-077?Authorization=CWB-D99D1DAB-94AB-4736-AFCB-B104730ACF1A&format=JSON&locationName="
}
var weathermarker = [];
var weathermarker_num = 0;
var weatheropen = 0;

function get_weather()
{
    if(weatheropen == 1)
    {
        weatheropen=0;
        for (var i = 0; i < weathermarker.length; i++) {   
            weathermarker[i].setMap(null);   
        }
    }
    else
    {
        weatheropen = 1;
        sleeptime = 0;
        for(let item of regionset)
        {
            sleeptime++;
            getCData_url = "https://chatbot.csie.ncnu.edu.tw:2235/api/getviewdata.ashx?method=iDriver/getCData&CID="+item+"&Type=1";
            getAPI(getCData_url,getNamepath);
            
        }
        console.log(regionset);
        console.log(lonset);
    }
}
function getNamepath(xhttp)
{
    var CData = JSON.parse(xhttp.responseText);
    //這裡以後可能有錯，因為當初API名字取錯，getCCData要改成getCData
    var mynamepath = CData.ItemSet.getCCData[0].Namepath;
    var splitnamepath = mynamepath.split('/');
    var weathercity = splitnamepath[2];
    var full_url = weather_url[weathercity]+splitnamepath[3];
    //console.log(full_url)
    getAPI(full_url, myweather)
}
function myweather(xhttp)
{
    var myweather = JSON.parse(xhttp.responseText);
    //console.log(myweather);
    var locationName = myweather.records.locations[0].location[0].locationName;
    locationName = locationName.replace('臺', '台')
    var weatherarray = Array.from(weatherset);
    var positionindex = weatherarray.indexOf(locationName);
    var weatherpos_lon = lonset[positionindex];
    var weatherpos_lat = latset[positionindex];
    /*
    console.log(locationName);
    console.log(positionindex);
    console.log(weatherpos_lon);
    console.log(weatherpos_lat);
    */
    //目前取得了 此鄉鎮的座標、資料
    //取出第一個天氣概況來決定icon
    console.log(myweather.records.locations[0].location[0].weatherElement[1].time[0].elementValue[0].value);
    var nowweather = myweather.records.locations[0].location[0].weatherElement[1].time[0].elementValue[0].value;
    if(/晴/.test(nowweather))
    {
        console.log('sun.icon');
        weathermarker[weathermarker_num] = new google.maps.Marker({
            position: {
                lat: weatherpos_lat, 
                lng: weatherpos_lon
            },
            map: map_direction,
            icon:'../images/sun.png'
        });
    }
    else if(/[陰雲]/.test(nowweather))
    {
        console.log('cloud.icon');
        weathermarker[weathermarker_num] = new google.maps.Marker({
            position: {
                lat: weatherpos_lat, 
                lng: weatherpos_lon
            },
            map: map_direction,
            icon:'../images/cloud.png'
        });
    }
    else if(/雨/.test(nowweather))
    {
        console.log('rain.icon');
        weathermarker[weathermarker_num] = new google.maps.Marker({
            position: {
                lat: weatherpos_lat, 
                lng: weatherpos_lon
            },
            map: map_direction,
            icon:'../images/rain.png'
        });
    }
    //例外情況，未知的天氣
    else
    {
        console.log('???.icon');
        weathermarker[weathermarker_num] = new google.maps.Marker({
            position: {
                lat: weatherpos_lat, 
                lng: weatherpos_lon
            },
            map: map_direction,
            icon:'../images/thinking.png'
        });
    }

    //點擊icon會出現infobox
    weathermarker[weathermarker_num].addListener('click', function(){
        var weatherinfowindow = new google.maps.InfoWindow({
            content:
            "<b style='color:green;font-size:16px;'>"+myweather.records.locations[0].location[0].locationName+"天氣預報</b><br>"
            +"<hr>"
            +"<p style='font-size:16px;font-weight:bold;'>"+myweather.records.locations[0].location[0].weatherElement[1].time[0].elementValue[0].value+"</p>"
            +"<p style='font-weight:bold;'>降雨機率(現在時刻): <b style='color:blue'>"+myweather.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value+"</b> %<img id='rainimg' onclick='raindiv()' src='../images/more.png' style='width:15px;height:20;float:right'></p>"
            +"<div id='raindiv' style='display:none;background-color:#f1fff3;border: green 1px solid;height:100px;width:auto;overflow-y:scroll'>"
                +createrain(myweather)
            +"</div>"
            +"<p style='font-weight:bold;'>氣溫(現在時刻): 攝氏<b style='color:blue'>"+myweather.records.locations[0].location[0].weatherElement[3].time[0].elementValue[0].value+"</b> 度<img id='tempimg' onclick='tempdiv()' src='../images/more.png' style='width:15px;height:20;float:right'></p>"
            +"<div id='tempdiv' style='display:none;background-color:#f1fff3;border: green 1px solid;height:100px;width:auto;overflow-y:scroll'>"
                +createtemp(myweather)
            +"</div>"
            +"<p style='font-weight:bold;'>體感溫度(現在時刻): 攝氏<b style='color:blue'>"+myweather.records.locations[0].location[0].weatherElement[2].time[0].elementValue[0].value+"</b> 度<img id='bodyimg' onclick='bodydiv()' src='../images/more.png' style='width:15px;height:20;float:right'></p>"
            +"<div id='bodydiv' style='display:none;background-color:#f1fff3;border: green 1px solid;height:100px;width:auto;overflow-y:scroll'>"
                +createbody(myweather)
            +"</div>"
        });
        var weatherinfoopen = 0;
        //開關infowindow
        if(weatherinfoopen == 0){
            weatherinfowindow.open(map_direction, this);
            weatherinfoopen=1;
        }else{
            weatherinfowindow.close();
            weatherinfoopen=0;
        }
    });
    weathermarker_num++;
}
function createrain(myweather)
{
    var htmlstring = "";
    //console.log(myweather.records.locations[0].location[0].weatherElement[0].time);
    myrain = myweather.records.locations[0].location[0].weatherElement[0].time;
    for(var i=0; i<myrain.length; i++)
    {
        var rainstart = myrain[i].startTime.slice(5,13);
        var rainend = myrain[i].endTime.slice(5,13);
        var rainper = myrain[i].elementValue[0].value;
        htmlstring += "<p style='font-weight:bold;border-bottom: 1px gray groove'>"+rainstart+"點 至 "+rainend+"點 : <b style='color:blue'>"+rainper+" %</b></p>";
    }
    return htmlstring;
}
var rainopen = 0;
function raindiv()
{
    if(rainopen==0){
        rainopen=1;
        $("#rainimg").attr("src","../images/more_up.png");
    }
    else{
        rainopen=0;
        $("#rainimg").attr("src","../images/more.png");
    }
    $("#raindiv").slideToggle();
}

function createtemp(myweather)
{
    var htmlstring = "";
    //console.log(myweather.records.locations[0].location[0].weatherElement[3].time);
    mytemp = myweather.records.locations[0].location[0].weatherElement[3].time;
    
    for(var i=0; i<mytemp.length; i++)
    {
        var temptime = mytemp[i].dataTime.slice(5,13);
        var tempvalue = mytemp[i].elementValue[0].value;
        htmlstring += "<p style='font-weight:bold;border-bottom: 1px gray groove'>"+temptime+"點 : 攝氏<b style='color:blue'>"+tempvalue+" </b>度</p>";
    }
    return htmlstring;
    
}
var tempopen = 0;
function tempdiv()
{
    if(tempopen==0){
        tempopen=1;
        $("#tempimg").attr("src","../images/more_up.png");
    }
    else{
        tempopen=0;
        $("#tempimg").attr("src","../images/more.png");
    }
    $("#tempdiv").slideToggle();
}

function createbody(myweather)
{
    var htmlstring = "";
    console.log(myweather.records.locations[0].location[0].weatherElement[2].time);
    mybody = myweather.records.locations[0].location[0].weatherElement[2].time;
    
    for(var i=0; i<mybody.length; i++)
    {
        var bodytime = mytemp[i].dataTime.slice(5,13);
        var bodyvalue = mytemp[i].elementValue[0].value;
        htmlstring += "<p style='font-weight:bold;border-bottom: 1px gray groove'>"+bodytime+"點 : 攝氏<b style='color:blue'>"+bodyvalue+" </b>度</p>";
    }
    return htmlstring;
    
}
var bodyopen = 0;
function bodydiv()
{
    if(bodyopen==0){
        bodyopen=1;
        $("#bodyimg").attr("src","../images/more_up.png");
    }
    else{
        bodyopen=0;
        $("#bodyimg").attr("src","../images/more.png");
    }
    $("#bodydiv").slideToggle();
}
