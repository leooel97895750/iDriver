//透過抓到的使用者經緯，換算所在鄉鎮，取得鄉鎮可透過氣象局API取資料，氣象局API也請自己申請(不要用我的)

const regionset = new Set();
const weatherset = new Set();
var lonset = [];
var latset = [];

function mygeocoding(path)
{
    for(var i=0; i<path.length; i+=1)
    {
        var myLon = path[i].lng();
        var myLat = path[i].lat();
        var geoapi = "https://chatbot.csie.ncnu.edu.tw:2235/api/getviewdata.ashx?method=iDriver/GeoCoding&myLat="+myLat+"&myLon="+myLon;
        getGeoAPI(geoapi, addToSet, myLon, myLat);
    }
}
function formatFloat(num, pos)
{
  var size = Math.pow(10, pos);
  return Math.round(num * size) / size;
}
function addToSet(xhttp, myLon, myLat)
{
    var regionjson = JSON.parse(xhttp.responseText);
    if(regionset.has(regionjson.ItemSet.GeoCoding[0].CID)==false)
    {
        lonset.push(formatFloat(myLon, 6));
        latset.push(formatFloat(myLat, 6));
    }
    regionset.add(regionjson.ItemSet.GeoCoding[0].CID);
    weatherset.add(regionjson.ItemSet.GeoCoding[0].CName);
}