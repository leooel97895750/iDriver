pagenum = 0;
articlenum = 0;
scroll_trigger = 0;
now_keyword = '';
now_type = '景點';
function loadnews()
{
    console.log(now_keyword+','+now_type);
    pagenum++;
    if(now_keyword=='')news_url = 'http://10.21.23.97:1225/api/newaggregator.ashx?keyword='+now_type+'&Limit=10&Page='+pagenum;
    else news_url = 'http://10.21.23.97:1225/api/newaggregator.ashx?keyword='+now_keyword+','+now_type+'&Limit=10&Page='+pagenum;
    getAPI(news_url,get_news);
}
function get_news(xhttp)
{
    $('#loading_img').css('display', 'none');
    var news_json = JSON.parse(xhttp.responseText);
    console.log(news_json);
    var mynews = $("#news_article");
    for(var i=0; i<10; i++)
    {
        if(news_json[i].author!='')
        {
            var authorstr = '記者: '+ news_json[i].author;
        }
        else
        {
            var authorstr = '';
        }
        var splittime = news_json[i].publishdate.split('T');
        var newsblock = $("<div class='newsdiv'>"+"<h1>"+news_json[i].title+"</h1>"
                            +"<a style='overflow:hidden' href='"+news_json[i].url+"'>"+news_json[i].url+"</a>"
                            +"<p style='margin-top:0px'>"+splittime[0]+" "+splittime[1]+" "+authorstr+"</p><hr style='margin:0px'>"
                            +"<div class='newscontent' style='height:200px'><p>"+news_json[i].content+"</p></div>"
                            +"<p class='morecontent' onclick='readmore("+articlenum+")'>read more...</p>"+"</div>");
        mynews.append(newsblock);
        articlenum++;
    }
}
function readmore(articlenum)
{
    var mymore = document.getElementsByClassName("morecontent");
    var mycontent = $(".newscontent");
    if(mycontent[articlenum].style.height == '200px')
    {
        mycontent[articlenum].style.height = 'auto';
        mymore[articlenum].innerHTML = 'hide ~';
    }
    else
    {
        mycontent[articlenum].style.height = '200px';
        mymore[articlenum].innerHTML = 'read more...';
    }
}

$(window).scroll(function(){
    if(scroll_trigger==1)
    {
        //判斷整體網頁的高度   
        var $BodyHeight = $(document).height();   
        //判斷所見範圍的高度   
        var $ViewportHeight=$(window).height();   
        //偵測目前捲軸頂點   
        $ScrollTop=$(this).scrollTop();  
        //console.log(($BodyHeight))
        //console.log(($ViewportHeight+$ScrollTop))
        if((($BodyHeight)-1)<=Math.floor($ViewportHeight+$ScrollTop)){   
            //console.log('?');
            $('#loading_img').css('display', 'block');
            loadnews();
        }
    }
}); 

function backtop()
{
    $('html,body').animate({scrollTop: 0}, 300);
}

function clicktags(keyword)
{
    pagenum = 0;
    articlenum = 0;
    $("#news_article").empty();
    now_type = keyword;
    loadnews();
}

function inputkeyword()
{
    if($("#input_Snews").val()=='')
    {
        now_keyword = $("#input_Enews").val();
        pagenum = 0;
        articlenum = 0;
        $("#news_article").empty();
        loadnews();
    }
    else
    {
        address = $("#input_Snews").val();
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == 'OK') {
            //得到經緯
            console.log(results[0].geometry.location);
            startlatlng = results[0].geometry.location;
            address = $("#input_Enews").val();
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode( { 'address': address}, function(results, status) {
                if (status == 'OK') {
                //得到經緯
                console.log(results[0].geometry.location);
                endlatlng = results[0].geometry.location;
                direction();
                //等待時間
                setTimeout(regiontags,3000);
                } else {
                console.log(status);
                }
            });
            } else {
            console.log(status);
            }
        });
    }
}
function regiontags()
{
    $('#regiontags').empty();
    for(let item of weatherset)
    {
        console.log(item);
        var regiontag = $("<b class='region' onclick="+"pprint('"+item+"')"+">"+item+"</b>")
        $('#regiontags').append(regiontag);
    }
}
function pprint(region)
{
    now_keyword = region;
    pagenum = 0;
    articlenum = 0;
    $("#news_article").empty();
    loadnews();
}
function inputtype()
{
    now_type = $('#othertype').val();
    pagenum = 0;
    articlenum = 0;
    $("#news_article").empty();
    loadnews();
}
