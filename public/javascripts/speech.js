var newspeednum = 0;
var tnum = 4;
var rnum = 4;
function speech()
{
    if (!('webkitSpeechRecognition' in window)) 
    {
        // do something...
    } 
    else
    {
        var recognition = new webkitSpeechRecognition();

        recognition.continuous=true;
        recognition.interimResults=false;
        recognition.lang="cmn-Hant-TW";

        recognition.onresult=function(event){
            console.log(event.results[0][0].transcript);
            var trans = event.results[0][0].transcript;
            //檢測字串中有無"測速照相"
            for(var i=0; i<trans.length-3; i++)
            {
                if(trans.slice(i,i+4) == '測速照相')
                {
                    //模擬使用者觸發synthesis
                    tryToSpeak('已新增一筆測速照相位置資訊');
                    console.log(nowBID);
                    newspeednum++;
                    //加入history
                    var newhistory = $('<div class="speedhis"><div style="margin:5px"><b style="margin:0px;padding:0px;">新登錄的測速照相</b><br><input type="text" placeholder="名稱" style="width:80px"><input type="text" placeholder="限速" style="width:80px"><input type="radio" name="'+rnum+'" value="0"><b style="margin:0px;padding:0px;">國道</b><input type="radio" name="'+rnum+'" vlaue="1"><b style="margin:0px;padding:0px;">省道</b><input type="radio" name="'+tnum+'" value="0"><b style="margin:0px;padding:0px;">定點測速</b><input type="radio" name="'+tnum+'" vlaue="1"><b style="margin:0px;padding:0px;">流動測速</b><br><textarea rows="3" cols="26" placeholder="詳細描述" style="margin-top:5px;"></textarea><div class="updatebtn" onclick="updateSpeed()">更新資料</div></div></div>');
                    $("#newhistory").append(newhistory);
                    tnum++;
                    rnum++;

                    break;
                }
            }
            recognition.stop();
            speech();
        };

        recognition.start();
    }
}
//掛https時可以確保speech不會自動關閉
//測試時會一直問，很煩，所以註解掉
setInterval(speech,10000);

function speedNotice()
{
    if(newspeednum == 0)
    {
        $("#member_number").empty();
        $("#contribution_number").empty();
    }
    else
    {
        var view_number1 = $('<div style="font-weight:normal; line-height:20px; text-align:center; font-family:Microsoft JhengHei; border-radius:50%; width:20px;height:20px; background-color:red; color:white;"> '+newspeednum+'</div>');
        var view_number2 = $('<div style="font-weight:normal; line-height:20px; text-align:center; font-family:Microsoft JhengHei; border-radius:50%; width:20px;height:20px; background-color:red; color:white;"> '+newspeednum+'</div>');
        $("#member_number").empty();
        $("#contribution_number").empty();
        $("#member_number").append(view_number1);
        $("#contribution_number").append(view_number2);
    }
}
setInterval(speedNotice,1000);

function writeSpeed()
{
    $("#myhistory").slideToggle();
    newspeednum = 0;
}