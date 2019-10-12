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
        var geoapi = "http://163.22.21.80:1124/api/getviewdata.ashx?method=iDriver%2FGeoCoding&myLat="+myLat+"&myLon="+myLon;
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