// 封面的圖片輪替功能

var picture_num = 2;
var picture_time = 0;
var picture_top = 1;
function picture_change()
{
    picture_time++;   
    var mypic1 = document.getElementById("pic1");
    var mypic2 = document.getElementById("pic2");
    if(picture_time == 100)
    {
        picture_num++;
        if(picture_num >= 13) picture_num = 1;
        if(picture_top == 1)
        {
            mypic2.src = "images/p" + picture_num + ".jpg";
            picture_top = 0;
        }
        else
        {
            mypic1.src = "images/p" + picture_num + ".jpg";
            picture_top = 1;
        }
        picture_time = 0;
    }
    if(picture_top == 1)
    {
        //變淡
        if(picture_time >= 50)
        {
            var myopacity1 = 1 - (((picture_time * 2) - 100) / 100);
            mypic2.style.opacity = myopacity1;
        }
    }
    else
    {
        //變深
        if(picture_time >= 50)
        {
            var myopacity2 = ((picture_time * 2) - 100) / 100;
            mypic2.style.opacity = myopacity2;
        }
    }
}

setInterval(picture_change,50);