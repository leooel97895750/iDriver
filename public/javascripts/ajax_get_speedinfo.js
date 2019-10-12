//縣市對照表
var citylist = ["台北市",7,"臺北市",7,"新北市",8,"基隆市",9,"桃園市",10,"新竹市",11,"新竹縣",12,"宜蘭縣",13,"苗栗縣",14,"台中市",15,"臺中市",15,"彰化縣",16,"南投縣",17,"雲林縣",18,"嘉義市",19,"嘉義縣",20,"台南市",21,"臺南市",21,"高雄市",22,"屏東縣",23,"花蓮縣",24,"台東縣",25,"臺東縣",25,"澎湖縣",26,"金門縣",27,"連江縣",28];
//鄉鎮對照表
var regionlist = ["台北市中正區",29,"台北市大同區",30,"台北市中山區",31,"台北市松山區",32,"台北市大安區",33,"台北市萬華區",34,"台北市信義區",35,"台北市士林區",36,"台北市北投區",37,"台北市內湖區",38,"台北市南港區",39,"台北市文山區",40,"新北市板橋區",41,"新北市新莊區",42,"新北市中和區",43,"新北市永和區",44,"新北市土城區",45,"新北市樹林區",46,"新北市三峽區",47,"新北市鶯歌區",48,"新北市三重區",49,"新北市蘆洲區",50,"新北市五股區",51,"新北市泰山區",52,"新北市林口區",53,"新北市八里區",54,"新北市淡水區",55,"新北市三芝區",56,"新北市石門區",57,"新北市金山區",58,"新北市萬里區",59,"新北市汐止區",60,"新北市瑞芳區",61,"新北市貢寮區",62,"新北市平溪區",63,"新北市雙溪區",64,"新北市新店區",65,"新北市深坑區",66,"新北市石碇區",67,"新北市坪林區",68,"新北市烏來區",69,"基隆市仁愛區",70,"基隆市中正區",71,"基隆市信義區",72,"基隆市中山區",73,"基隆市安樂區",74,"基隆市暖暖區",75,"基隆市七堵區",76,"桃園市桃園區",77,"桃園市中壢區",78,"桃園市平鎮區",79,"桃園市八德區",80,"桃園市楊梅區",81,"桃園市蘆竹區",82,"桃園市大溪區",83,"桃園市龍潭區",84,"桃園市龜山區",85,"桃園市大園區",86,"桃園市觀音區",87,"桃園市新屋區",88,"桃園市復興區",89,"新竹市東區",90,"新竹市北區",91,"新竹市香山區",92,"新竹縣竹北市",93,"新竹縣竹東鎮",94,"新竹縣新埔鎮",95,"新竹縣關西鎮",96,"新竹縣湖口鄉",97,"新竹縣新豐鄉",98,"新竹縣峨眉鄉",99,"新竹縣寶山鄉",100,"新竹縣北埔鄉",101,"新竹縣芎林鄉",102,"新竹縣橫山鄉",103,"新竹縣尖石鄉",104,"新竹縣五峰鄉",105,"宜蘭縣宜蘭市",106,"宜蘭縣頭城鎮",107,"宜蘭縣羅東鎮",108,"宜蘭縣蘇澳鎮",109,"宜蘭縣礁溪鄉",110,"宜蘭縣壯圍鄉",111,"宜蘭縣員山鄉",112,"宜蘭縣冬山鄉",113,"宜蘭縣五結鄉",114,"宜蘭縣三星鄉",115,"宜蘭縣大同鄉",116,"宜蘭縣南澳鄉",117,"苗栗縣苗栗市",118,"苗栗縣頭份市",119,"苗栗縣竹南鎮",120,"苗栗縣後龍鎮",121,"苗栗縣通霄鎮",122,"苗栗縣苑裡鎮",123,"苗栗縣卓蘭鎮",124,"苗栗縣造橋鄉",125,"苗栗縣西湖鄉",126,"苗栗縣頭屋鄉",127,"苗栗縣公館鄉",128,"苗栗縣銅鑼鄉",129,"苗栗縣三義鄉",130,"苗栗縣大湖鄉",131,"苗栗縣獅潭鄉",132,"苗栗縣三灣鄉",133,"苗栗縣南庄鄉",134,"苗栗縣泰安鄉",135,"台中市中區",136,"台中市東區",137,"台中市南區",138,"台中市西區",139,"台中市北區",140,"台中市北屯區",141,"台中市西屯區",142,"台中市南屯區",143,"台中市太平區",144,"台中市大里區",145,"台中市霧峰區",146,"台中市烏日區",147,"台中市豐原區",148,"台中市后里區",149,"台中市石岡區",150,"台中市東勢區",151,"台中市新社區",152,"台中市潭子區",153,"台中市大雅區",154,"台中市神岡區",155,"台中市大肚區",156,"台中市沙鹿區",157,"台中市龍井區",158,"台中市梧棲區",159,"台中市清水區",160,"台中市大甲區",161,"台中市外埔區",162,"台中市大安區",163,"台中市和平區",164,"彰化縣彰化市",165,"彰化縣員林市",166,"彰化縣和美鎮",167,"彰化縣鹿港鎮",168,"彰化縣溪湖鎮",169,"彰化縣二林鎮",170,"彰化縣田中鎮",171,"彰化縣北斗鎮",172,"彰化縣花壇鄉",173,"彰化縣芬園鄉",174,"彰化縣大村鄉",175,"彰化縣永靖鄉",176,"彰化縣伸港鄉",177,"彰化縣線西鄉",178,"彰化縣福興鄉",179,"彰化縣秀水鄉",180,"彰化縣埔心鄉",181,"彰化縣埔鹽鄉",182,"彰化縣大城鄉",183,"彰化縣芳苑鄉",184,"彰化縣竹塘鄉",185,"彰化縣社頭鄉",186,"彰化縣二水鄉",187,"彰化縣田尾鄉",188,"彰化縣埤頭鄉",189,"彰化縣溪州鄉",190,"南投縣南投市",191,"南投縣埔里鎮",192,"南投縣草屯鎮",193,"南投縣竹山鎮",194,"南投縣集集鎮",195,"南投縣名間鄉",196,"南投縣鹿谷鄉",197,"南投縣中寮鄉",198,"南投縣魚池鄉",199,"南投縣國姓鄉",200,"南投縣水里鄉",201,"南投縣信義鄉",202,"南投縣仁愛鄉",203,"雲林縣斗六市",204,"雲林縣斗南鎮",205,"雲林縣虎尾鎮",206,"雲林縣西螺鎮",207,"雲林縣土庫鎮",208,"雲林縣北港鎮",209,"雲林縣林內鄉",210,"雲林縣古坑鄉",211,"雲林縣大埤鄉",212,"雲林縣莿桐鄉",213,"雲林縣褒忠鄉",214,"雲林縣二崙鄉",215,"雲林縣崙背鄉",216,"雲林縣麥寮鄉",217,"雲林縣台西鄉",218,"雲林縣東勢鄉",219,"雲林縣元長鄉",220,"雲林縣四湖鄉",221,"雲林縣口湖鄉",222,"雲林縣水林鄉",223,"嘉義市東區",224,"嘉義市西區",225,"嘉義縣太保市",226,"嘉義縣朴子市",227,"嘉義縣布袋鎮",228,"嘉義縣大林鎮",229,"嘉義縣民雄鄉",230,"嘉義縣溪口鄉",231,"嘉義縣新港鄉",232,"嘉義縣六腳鄉",233,"嘉義縣東石鄉",234,"嘉義縣義竹鄉",235,"嘉義縣鹿草鄉",236,"嘉義縣水上鄉",237,"嘉義縣中埔鄉",238,"嘉義縣竹崎鄉",239,"嘉義縣梅山鄉",240,"嘉義縣番路鄉",241,"嘉義縣大埔鄉",242,"嘉義縣阿里山鄉",243,"台南市中西區",244,"台南市東區",245,"台南市南區",246,"台南市北區",247,"台南市安平區",248,"台南市安南區",249,"台南市永康區",250,"台南市歸仁區",251,"台南市新化區",252,"台南市左鎮區",253,"台南市玉井區",254,"台南市楠西區",255,"台南市南化區",256,"台南市仁德區",257,"台南市關廟區",258,"台南市龍崎區",259,"台南市官田區",260,"台南市麻豆區",261,"台南市佳里區",262,"台南市西港區",263,"台南市七股區",264,"台南市將軍區",265,"台南市學甲區",266,"台南市北門區",267,"台南市新營區",268,"台南市後壁區",269,"台南市白河區",270,"台南市東山區",271,"台南市六甲區",272,"台南市下營區",273,"台南市柳營區",274,"台南市鹽水區",275,"台南市善化區",276,"台南市大內區",277,"台南市山上區",278,"台南市新市區",279,"台南市安定區",280,"高雄市楠梓區",281,"高雄市左營區",282,"高雄市鼓山區",283,"高雄市三民區",284,"高雄市鹽埕區",285,"高雄市前金區",286,"高雄市新興區",287,"高雄市苓雅區",288,"高雄市前鎮區",289,"高雄市旗津區",290,"高雄市小港區",291,"高雄市鳳山區",292,"高雄市大寮區",293,"高雄市鳥松區",294,"高雄市林園區",295,"高雄市仁武區",296,"高雄市大樹區",297,"高雄市大社區",298,"高雄市岡山區",299,"高雄市路竹區",300,"高雄市橋頭區",301,"高雄市梓官區",302,"高雄市彌陀區",303,"高雄市永安區",304,"高雄市燕巢區",305,"高雄市田寮區",306,"高雄市阿蓮區",307,"高雄市茄萣區",308,"高雄市湖內區",309,"高雄市旗山區",310,"高雄市美濃區",311,"高雄市內門區",312,"高雄市杉林區",313,"高雄市甲仙區",314,"高雄市六龜區",315,"高雄市茂林區",316,"高雄市桃源區",317,"高雄市那瑪夏區",318,"屏東縣屏東市",319,"屏東縣潮州鎮",320,"屏東縣東港鎮",321,"屏東縣恆春鎮",322,"屏東縣萬丹鄉",323,"屏東縣長治鄉",324,"屏東縣麟洛鄉",325,"屏東縣九如鄉",326,"屏東縣里港鄉",327,"屏東縣鹽埔鄉",328,"屏東縣高樹鄉",329,"屏東縣萬巒鄉",330,"屏東縣內埔鄉",331,"屏東縣竹田鄉",332,"屏東縣新埤鄉",333,"屏東縣枋寮鄉",334,"屏東縣新園鄉",335,"屏東縣崁頂鄉",336,"屏東縣林邊鄉",337,"屏東縣南州鄉",338,"屏東縣佳冬鄉",339,"屏東縣琉球鄉",340,"屏東縣車城鄉",341,"屏東縣滿州鄉",342,"屏東縣枋山鄉",343,"屏東縣霧台鄉",344,"屏東縣瑪家鄉",345,"屏東縣泰武鄉",346,"屏東縣來義鄉",347,"屏東縣春日鄉",348,"屏東縣獅子鄉",349,"屏東縣牡丹鄉",350,"屏東縣三地門鄉",351,"花蓮縣花蓮市",352,"花蓮縣鳳林鎮",353,"花蓮縣玉里鎮",354,"花蓮縣新城鄉",355,"花蓮縣吉安鄉",356,"花蓮縣壽豐鄉",357,"花蓮縣光復鄉",358,"花蓮縣豐濱鄉",359,"花蓮縣瑞穗鄉",360,"花蓮縣富里鄉",361,"花蓮縣秀林鄉",362,"花蓮縣萬榮鄉",363,"花蓮縣卓溪鄉",364,"台東縣台東市",365,"台東縣成功鎮",366,"台東縣關山鎮",367,"台東縣長濱鄉",368,"台東縣池上鄉",369,"台東縣東河鄉",370,"台東縣鹿野鄉",371,"台東縣卑南鄉",372,"台東縣大武鄉",373,"台東縣綠島鄉",374,"台東縣太麻里鄉",375,"台東縣海端鄉",376,"台東縣延平鄉",377,"台東縣金峰鄉",378,"台東縣達仁鄉",379,"台東縣蘭嶼鄉",380,"澎湖縣馬公市",381,"澎湖縣湖西鄉",382,"澎湖縣白沙鄉",383,"澎湖縣西嶼鄉",384,"澎湖縣望安鄉",385,"澎湖縣七美鄉",386,"金門縣金城鎮",387,"金門縣金湖鎮",388,"金門縣金沙鎮",389,"金門縣金寧鄉",390,"金門縣烈嶼鄉",391,"金門縣烏坵鄉",392,"連江縣南竿鄉",393,"連江縣北竿鄉",394,"連江縣莒光鄉",395,"連江縣東引鄉",396];

//順序OID、BID、Lat、Lon、City、Region、Road、Direct、Kind、Speed、nclick、correct、wrong
var mylist = [];//選取區域的object list
var latlng = [];//用來自動調整zoom縮放(包含住所有點的大小)
var titlecount;//選取區域的流水號

//當點選全台
function gettaiwan() {
    for (var i = 0; i < markers.length; i++) {   
        markers[i].setMap(null);   
    }
    titlecount=0;
    mylist.length=0;
    latlng.length=0;
    var url = "http://163.22.21.80:1124/api/getviewdata.ashx?method=iDriver/getCCData&CID=1&Type=1";
    getAPI(url,nlevel_one);
}

//當點選區域 北:2 中:3 南:4 東:5 離島:6 國道:397
function getarea(cid) {
    for (var i = 0; i < markers.length; i++) {   
        markers[i].setMap(null);   
    }
    titlecount=0;
    mylist.length=0;
    latlng.length=0;
    var url = "http://163.22.21.80:1124/api/getviewdata.ashx?method=iDriver/getCCData&CID="+cid+"&Type=1";
    var url_O = "http://163.22.21.80:1124/api/getviewdata.ashx?method=iDriver/getCOData&CID="+cid+"&Type=1";
    if(cid==397)
    {
        getAPI(url_O,getCO);
    }
    else
    {
        getAPI(url,nlevel_two);
    }
}

//當輸入縣市
function getcity(cid) {
    for (var i = 0; i < markers.length; i++) {   
        markers[i].setMap(null);   
    }
    titlecount=0;
    mylist.length=0;
    latlng.length=0;
    var url = "http://163.22.21.80:1124/api/getviewdata.ashx?method=iDriver/getCCData&CID="+cid+"&Type=1";
    getAPI(url,nlevel_three);
}

//當輸入鄉鎮
function getregion(cid) {
    for (var i = 0; i < markers.length; i++) {   
        markers[i].setMap(null);   
    }
    titlecount=0;
    mylist.length=0;
    latlng.length=0;
    var url = "http://163.22.21.80:1124/api/getviewdata.ashx?method=iDriver/getCOData&CID="+cid+"&Type=1";
    getAPI(url,getCO);
}

//區域
function nlevel_one(xhttp)
{
    var area_json = JSON.parse(xhttp.responseText);
    //console.log(area_json);
    var arealength = area_json.ItemSet.getCCData.length;
    for(var i=0; i<arealength; i++)
    {
        var area_cid = area_json.ItemSet.getCCData[i].CID;
        //console.log(area_cid);
        var url = "http://163.22.21.80:1124/api/getviewdata.ashx?method=iDriver/getCCData&CID="+area_cid+"&Type=1";
        var url_O = "http://163.22.21.80:1124/api/getviewdata.ashx?method=iDriver/getCOData&CID="+area_cid+"&Type=1";
        if(area_cid==397)
        {
            getAPI(url_O, getCO);
        }
        else
        {
            getAPI(url, nlevel_two);
        }
    }
}

//縣市
function nlevel_two(xhttp)
{
    var city_json = JSON.parse(xhttp.responseText);
    //console.log(city_json);
    var citylength = city_json.ItemSet.getCCData.length;
    for(var i=0; i<citylength; i++)
    {
        var city_cid = city_json.ItemSet.getCCData[i].CID;
        //console.log(city_cid);
        var url = "http://163.22.21.80:1124/api/getviewdata.ashx?method=iDriver/getCCData&CID="+city_cid+"&Type=1";
        getAPI(url, nlevel_three);
    }
}

//鄉鎮
function nlevel_three(xhttp)
{
    var region_json = JSON.parse(xhttp.responseText);
    //console.log(region_json);
    var regionlength = region_json.ItemSet.getCCData.length;
    for(var i=0; i<regionlength; i++)
    {
        var region_cid = region_json.ItemSet.getCCData[i].CID;
        //console.log(region_cid);
        var url = "http://163.22.21.80:1124/api/getviewdata.ashx?method=iDriver/getCOData&CID="+region_cid+"&Type=1";
        getAPI(url, getCO);
    }
}

//直接取得測速資訊
function getCO(xhttp)
{
    var speedinfo_json = JSON.parse(xhttp.responseText);
    //console.log(speedinfo_json);
    var speedinfoarray = speedinfo_json.ItemSet.getCOData;

    //合併speedinfoarray到mylist
    mylist = mylist.concat(speedinfoarray);
    var arraylength = speedinfoarray.length;

    //單個speedinfoarray進入個別處理
    for(var i=0; i<arraylength; i++)
    {
        //產生markers
        var markerlength = markers.length;
        markers[markerlength] = new google.maps.Marker({
            position: {
              lat: speedinfoarray[i].Lat,
              lng: speedinfoarray[i].Lon
            },
            map: map_roadinfo,
            title: titlecount.toString()
        });
        titlecount++;//titlecount將會統計選擇區域全部的測速資訊

        //增加自動調整zoom中的point(以自動調整範圍)
        var newpoint = new google.maps.LatLng(speedinfoarray[i].Lat, speedinfoarray[i].Lon);
        latlng = latlng.concat(newpoint);

        //為每個點新增listener
        markers[markerlength].addListener('click', function(){
            var infoopen = 0;
            var mytitle = this.getTitle();
            //console.log(this.getTitle());

            //建立infowindow and 判斷速限是否合理
            var myspeed =mylist[mytitle].Speed;
            if(myspeed==0)
            {
                myspeed="不明";
            }
            var infowindow = new google.maps.InfoWindow({
                content: "<p>"+mylist[mytitle].City+"</p>"+"<p>"+mylist[mytitle].Region+"</p>"+
                "<p>"+mylist[mytitle].Road+"</p>"+"<p>速限 : "+myspeed+"</p>"
            });

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
    //判斷zoom
    var latlngbounds = new google.maps.LatLngBounds();
    for (var i = 0; i < latlng.length; i++) {
        latlngbounds.extend(latlng[i]);
    }
    map_roadinfo.fitBounds(latlngbounds);
}

//判斷使用者city輸入
function findcitycid()
{
    //console.log($("#city_city").val());
    var city_keyword = $("#city_city").val();
    var citylistlength = citylist.length;//因為有CID所以是兩倍
    var getcity_cid;
    var check = 0;
    //console.log(citylistlength);
    for(var i=0; i<citylistlength/2; i+=2)
    {
        if(city_keyword==citylist[i])
        {
            getcity_cid = citylist[i+1];
            check = 1;
            break;
        }
    }
    if(check!=0)
    {
        getcity(getcity_cid);
    }
    else
    {
        alert("輸入有誤喔!");
    }
}

//判斷使用者region輸入
function findregioncid()
{
    var region_keyword = $("#region_city").val()+$("#region_region").val();
    var regionlistlength = regionlist.length;//因為有CID所以是兩倍
    //console.log(region_keyword);
    //console.log(regionlistlength);
    
    var getregion_cid;
    var check = 0;
    //console.log(citylistlength);
    for(var i=0; i<regionlistlength/2; i+=2)
    {
        if(region_keyword==regionlist[i])
        {
            getregion_cid = regionlist[i+1];
            check = 1;
            break;
        }
    }
    if(check!=0)
    {
        getregion(getregion_cid);
    }
    else
    {
        alert("輸入有誤喔!");
    }
}
