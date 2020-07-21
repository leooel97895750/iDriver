//一些滑鼠點擊會換圖片之類的不重要功能

function change_img_sp()
{
    $("#img_sp").attr("src", "../images/limit.png");
}
function change_img_sp_w()
{
    $("#img_sp").attr("src", "../images/limit_w.png");
}
function change_img_tr()
{
    $("#img_tr").attr("src", "../images/traffic.png");
}
function change_img_tr_w()
{
    $("#img_tr").attr("src", "../images/traffic_w.png");
}
function change_img_wh()
{
    $("#img_wh").attr("src", "../images/weather.png");
}
function change_img_wh_w()
{
    $("#img_wh").attr("src", "../images/weather_w.png");
}
function change_img_vi()
{
    $("#img_vi").attr("src", "../images/video.png");
}
function change_img_vi_w()
{
    $("#img_vi").attr("src", "../images/video_w.png");
}
function change_asidebutton_white()
{
    if(asideopen == 1)
    {
        var asidebutton_img = document.getElementsByClassName("asidebutton");
        for(var i=0;i<asidebutton_img.length;i++) asidebutton_img[i].src = "../images/asidebutton_left_white.png";
    }
    else
    {
        var asidebutton_img = document.getElementsByClassName("asidebutton");
        for(var i=0;i<asidebutton_img.length;i++) asidebutton_img[i].src = "../images/asidebutton_white.png";
    }   
}
function change_asidebutton()
{
    if(asideopen == 1)
    {
        var asidebutton_img = document.getElementsByClassName("asidebutton");
        for(var i=0;i<asidebutton_img.length;i++) asidebutton_img[i].src = "../images/asidebutton_left.png";
    }
    else
    {
        var asidebutton_img = document.getElementsByClassName("asidebutton");
        for(var i=0;i<asidebutton_img.length;i++) asidebutton_img[i].src = "../images/asidebutton.png";
    }   
}

function start_focus()
{
    $("#input_start").attr("placeholder","");
}
function end_focus()
{
    $("#input_end").attr("placeholder","");
}
function start_blur()
{
    $("#input_start").attr("placeholder","輸入起始點");
}
function end_blur()
{
    $("#input_end").attr("placeholder","輸入目的地");
}
function bus_w()
{
    $("#bus").attr("src", "../images/bus_w.png");
}
function car_w()
{
    $("#car").attr("src", "../images/car_w.png");
}
function bike_w()
{
    $("#bike").attr("src", "../images/bike_w.png");
}
function walk_w()
{
    $("#walk").attr("src", "../images/walk_w.png");
}
function bus()
{
    $("#bus").attr("src", "../images/bus.png");
}
function car()
{
    $("#car").attr("src", "../images/car.png");
}
function bike()
{
    $("#bike").attr("src", "../images/bike.png");
}
function walk()
{
    $("#walk").attr("src", "../images/walk.png");
}