function love_button()
{
    var endWord = $("#input_end").val();
    var startWord = $("#input_start").val();
    $("#startText").text(startWord);
    $("#endText").text(endWord);
    if(endWord != "")
    {
        $("#love_box").toggle();
    }
    else
    {
        alert("請先輸入起點和目的地!")
    }
}
function addroute()
{
    $("#love_box").toggle();
    console.log("addroute");
    var endWord = $("#input_end").val();
    var startWord = $("#input_start").val();
    var wordStr = "'"+startWord+"','"+endWord+"'";
    var myLoveRoute = $('<li><b class="love_list_button">'+startWord+'</b><b style="margin-left:10px;margin-right:10px;">到</b><b class="love_list_button">'+endWord+'</b>'+
                        '<div class="loveRoute" onclick="routeDirection('+wordStr+')">進入導航</div>'
                        +'</li>');
    $("#love_list_ul").append(myLoveRoute);
}
function addpoint()
{
    $("#love_box").toggle();
    console.log("addpoint");
    var endWord = $("#input_end").val();
    var myLoveRoute = $('<li><b style="margin-right:10px;">目的地:</b><b class="love_list_button">'+endWord+'</b>'+
                        '<div class="loveRoute" onclick="pointDirection('+"'"+endWord+"'"+')">進入導航</div>'
                        +'</li>');
    $("#love_list_ul").append(myLoveRoute);
}
function routeDirection(startWord, endWord)
{
    $("#input_start").val(startWord);
    $("#input_end").val(endWord);
    change_windows('direction_nomove');
    trydirection($("#input_start").val(),0);
}
function pointDirection(endWord)
{
    $("#input_end").val(endWord);
    change_windows('direction_nomove');
}