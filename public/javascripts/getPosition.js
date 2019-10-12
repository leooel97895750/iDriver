var myPosition_lat = 0;
var myPosition_lon = 0;
var nowBID = 0;
var oldBID = 0;

function getPosition()
{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } 
    else {
        error('not supported');
    }
    function error(msg) {
        console.log(msg);
    }
    function success(position)
    {
        //每3秒紀錄一次使用者位置
        myPosition_lat = position.coords.latitude;
        myPosition_lon = position.coords.longitude;
        oldBID = nowBID;
        var f_lat = new Number(myPosition_lat);
        var f_lon = new Number(myPosition_lon);
        var row_id = (f_lat.toFixed(3) * 1000 - 21800)/2 + 1;
        var col_id = (f_lon.toFixed(3) * 1000 - 119000)/2 + 1;
        nowBID = Math.floor(1550 * (row_id - 1) + col_id);
        //console.log(position.coords.latitude);
        //console.log(position.coords.longitude);
        //console.log(nowBID);

        //在與測速照相相同的Block時
        for(var i=0; i<speedBID.length; i++)
        {
            if(nowBID == speedBID[i] && nowBID!=oldBID)
            {
                if(speedLimit[i]==0)
                {
                    tryToSpeak('前方有測速照相，請小心駕駛');
                }
                else
                {
                    tryToSpeak('前方有測速照相，限速'+speedLimit);
                }
            }
        }
    }
}
//時速100的話大約相隔50公尺
setInterval(getPosition,2000);