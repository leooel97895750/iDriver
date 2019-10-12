function print_width()
{
    var mywidth = document.body.clientWidth;
    alert(mywidth);
    
}
function width_size()
{
    var mywidth = document.body.clientWidth;
    var mylogo = document.getElementById("mylogo");
    if(mywidth < 600)
    {
        mylogo.style.left = '60px';
        mylogo.style.width = '200px';
        mylogo.style.margin = '10px';
        mylogo.style.height = 'calc(100% - 20px)';
        $("header").css("height", "80px");
        $(".asidebar img").css("margin-top","5px");
        var direction_box = $("#direction_box");
        direction_box.css("top","340px");
        direction_box.css("bottom","0px");
        direction_box.css("right",'');
        direction_box.css("left","0px");
        direction_box.css("height","200px");
        direction_box.css("width","calc(100% - 10px)");
        $("#img_sp").css("width","50px");
        $("#img_sp").css("height","50px");
        $("#img_tr").css("width","50px");
        $("#img_tr").css("height","50px");
        $("#img_wh").css("width","50px");
        $("#img_wh").css("height","50px");
        $("#img_vi").css("width","50px");
        $("#img_vi").css("height","50px");
        //$(".iframesize").css("width","100px");
        //$(".iframesize").css("height","70px");
        $("#direction_button").css("top","520px");
        $("#love_button").css("top", "520px");
        $("#focus_button").css("top", "520px");
        $("#tagsbar").css("display","block");
        $("#myhistory").css("width", "90%");
        $("#myhistory").css("left", "5%");
    }
    else
    {
        mylogo.style.left = '150px';
        mylogo.style.width = '400px';
        mylogo.style.margin = '10px';
        mylogo.style.height = 'calc(100% - 20px)';
        $("header").css("height", "150px");
        $(".asidebar img").css("margin-top","20px");
        var direction_box = $("#direction_box");
        direction_box.css("top","0px");
        direction_box.css("bottom",'');
        direction_box.css("right","0px");
        direction_box.css("left",'');
        direction_box.css("height","calc(100% - 10px)");
        direction_box.css("width","300px");
        $("#img_sp").css("width","60px");
        $("#img_sp").css("height","60px");
        $("#img_tr").css("width","60px");
        $("#img_tr").css("height","60px");
        $("#img_wh").css("width","60px");
        $("#img_wh").css("height","60px");
        $("#img_vi").css("width","60px");
        $("#img_vi").css("height","60px");
        //$(".iframesize").css("width","500px");
        //$(".iframesize").css("height","300px");
        $("#direction_button").css("top","0px");
        $("#love_button").css("top", "0px");
        $("#focus_button").css("top", "0px");
        $("#tagsbar").css("display","inline");
        $("#myhistory").css("width", "50%");
        $("#myhistory").css("left", "25%");
    }
}

window.addEventListener("resize", function()
{
    width_size();
});
