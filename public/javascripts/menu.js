//一些頁面切換、目錄切換，透過改div的display來做到SPA(Single Page Application)的設計

var open = 1;//紀錄左側目錄的開關
var asideopen = 0;//asidebar的開關  貌似沒用了
var memberopen = 0;//會員功能欄的開關
//目錄開關動畫
function menumove()
{
    if(open==1)
    {
        open=0;
        var menu = document.getElementById('verticalbar');
        var dark = document.getElementById('dark');
        var pos = -150;
        dark.style.zIndex = "10";
        dark.style.display = "block";
        var id = setInterval(frame,5); 
        function frame() {
            if (pos == 0) {
              clearInterval(id);
            }
            else {
              pos+=3; 
              menu.style.left = pos + 'px';
              dark.style.backgroundColor = 'rgba(50, 50, 50, ' + (pos + 150)/300 + ')';
            }
        }  
    }
    else
    {
        open=1;
        var menu = document.getElementById('verticalbar');
        var dark = document.getElementById('dark');
        var pos = 0;
        var id = setInterval(frame,5); 
        function frame() {
            if (pos == -150) {
              clearInterval(id);
              dark.style.display = "none";
            } 
            else {
              pos-=3; 
              menu.style.left = pos +'px';
              dark.style.backgroundColor = 'rgba(50, 50, 50, ' + (pos + 150)/300 + ')';
            }
        }
    }   
}
function membermove()
{
    if(memberopen==0)
    {
        memberopen=1;
        $("#member_detail").slideDown();
        var dark = document.getElementById('dark');
        dark.style.zIndex = "10";
        dark.style.display = "block";
        var pos = -150;
        var id = setInterval(frame,5); 
        function frame() {
            if (pos == 0) {
              clearInterval(id);
            }
            else {
              pos+=3; 
              dark.style.backgroundColor = 'rgba(50, 50, 50, ' + (pos + 150)/300 + ')';
            }
        }  
    }
    else
    {
        memberopen=0;
        $("#member_detail").slideUp();
        var dark = document.getElementById('dark');
        var pos = 0;
        var id = setInterval(frame,5); 
        function frame() {
            if (pos == -150) {
              clearInterval(id);
              dark.style.display = "none";
            } 
            else {
              pos-=3; 
              dark.style.backgroundColor = 'rgba(50, 50, 50, ' + (pos + 150)/300 + ')';
            }
        }
    }   
}
function clean()
{
    subbarclose();
    if(open==0)
    {
        menumove();
    }
    if(memberopen==1)
    {
        membermove();
    }
}
//選擇分頁並切換
function change_windows( target_window )
{
    subbarjump();
    var mydirection = document.getElementsByClassName("flexbox_direction");
    var myroadinfo = document.getElementsByClassName("flexbox_roadinfo");
    var mytravel = document.getElementsByClassName("flexbox_travel");
    var mylove = document.getElementsByClassName("flexbox_love");
    var myhorizontalbar = document.getElementsByClassName("horizontalbar");
    //以後增加全部的div class
    if(target_window == "direction")
    {
        scroll_trigger = 0;
        mydirection[0].style.display = "block";
        myroadinfo[0].style.display = "none";
        mytravel[0].style.display = "none";
        mylove[0].style.display = "none";
        /*
        for(var j = 0; j < myhorizontalbar.length; j++)
        {
            var myul = myhorizontalbar[j].getElementsByTagName("ul");
            for(var k = 0; k < myul.length; k++)
            {
                myul[k].style.height = "60px";
            }
        }
        */
        menumove();
    }
    else if(target_window == "direction_nomove")
    {
        scroll_trigger = 0;
        mydirection[0].style.display = "block";
        myroadinfo[0].style.display = "none";
        mytravel[0].style.display = "none";
        mylove[0].style.display = "none";
    }
    else if(target_window == "love")
    {
        scroll_trigger = 0;
        mydirection[0].style.display = "none";
        myroadinfo[0].style.display = "none";
        mytravel[0].style.display = "none";
        mylove[0].style.display = "block";
        menumove();
    }
    /*
    else if(target_window == "roadinfo")
    {
        scroll_trigger = 0;
        mydirection[0].style.display = "none";
        myroadinfo[0].style.display = "block";
        mytravel[0].style.display = "none";
        for(var j = 0; j < myhorizontalbar.length; j++)
        {
            var myul = myhorizontalbar[j].getElementsByTagName("ul");
            for(var k = 0; k < myul.length; k++)
            {
                myul[k].style.height = "75px";
            }
        }
        menumove();
    }
    */
    else if(target_window == "travel")
    {
        scroll_trigger = 1;
        mydirection[0].style.display = "none";
        myroadinfo[0].style.display = "none";
        mytravel[0].style.display = "block";
        mylove[0].style.display = "none";
        /*
        for(var j = 0; j < myhorizontalbar.length; j++)
        {
            var myul = myhorizontalbar[j].getElementsByTagName("ul");
            for(var k = 0; k < myul.length; k++)
            {
                myul[k].style.height = "75px";
            }
        }
        */
        menumove();
    }
}
//asidebar動畫
function asidebarmove()
{
    if(asideopen==0)
    {
        asideopen=1;
        var myasidebar = document.getElementsByClassName('asidebar');
        var myasidebutton = document.getElementsByClassName("asidebutton");
        for(var i=0;i<myasidebutton.length;i++) myasidebutton[i].src="../images/asidebutton_left_white.png";
        var pos = -100;
        var id = setInterval(frame,5); 
        function frame() {
            if (pos == 0) {
              clearInterval(id);
            }
            else {
              pos+=2; 
              for(var j=0;j<myasidebar.length;j++) myasidebar[j].style.left = pos + 'px';
            }
        }  
    }
    else
    {
        asideopen=0;
        var myasidebar = document.getElementsByClassName('asidebar');
        var myasidebutton = document.getElementsByClassName("asidebutton");
        for(var i=0;i<myasidebutton.length;i++) myasidebutton[i].src="../images/asidebutton_white.png";
        var pos = 0;
        var id = setInterval(frame,5); 
        function frame() {
            if (pos == -100) {
              clearInterval(id);
            } 
            else {
              pos-=2; 
              for(var j=0;j<myasidebar.length;j++) myasidebar[j].style.left = pos +'px';
            }
        }
    }
}
//子目錄動畫
function subbaropen()
{
    $("#subbar").slideDown();
}
function subbarkeep()
{
    $("#subbar").show();
}
function subbarclose()
{
   $("#subbar").slideUp();
}
function subbarjump()
{
    $("#subbar").hide();
}

function radio_speedinfo()
{
    var myradio = document.theform.radioname;
    for(var i=0; i<myradio.length; i++)
    {
        if(myradio[i].checked)
        {
            if(myradio[i].value=="1")
            {
                gettaiwan();
                $("#areaspeed").css("display", "none");
                $("#cityspeed").css("display", "none");
                $("#regionspeed").css("display", "none");
            }
            else if(myradio[i].value=="2")
            {
                $("#areaspeed").css("display", "block");
                $("#cityspeed").css("display", "none");
                $("#regionspeed").css("display", "none");
            }
            else if(myradio[i].value=="3")
            {
                $("#areaspeed").css("display", "none");
                $("#cityspeed").css("display", "block");
                $("#regionspeed").css("display", "none");
            }
            else if(myradio[i].value=="4")
            {
                $("#areaspeed").css("display", "none");
                $("#cityspeed").css("display", "none");
                $("#regionspeed").css("display", "block");
            }
        }
    }
}

function searchmove()
{
    $("#search_background").slideToggle();
}

var directionopen = 1;
function direction_button()
{
    if(directionopen==1)
    {
        $("#direction_button").attr("src","../images/direction_close.png");
        directionopen = 0;
        $("#direction_box").slideToggle();
    }
    else if(directionopen==0)
    {
        $("#direction_button").attr("src","../images/direction_open.png");
        directionopen = 1;
        $("#direction_box").slideToggle();
    }
    
}