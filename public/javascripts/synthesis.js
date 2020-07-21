// 發出聲音的功能(如同google小姐)，但不太穩定，需要再測試

function tryToSpeak(sentence)
{
    var speechSynthesis = window.speechSynthesis;

    function loadVoices(speechSynthesis){
        if (voices.length == 0){
            voices = speechSynthesis.getVoices();
            voices.sort(function(voice1, voice2){
                return voice1.name.localeCompare(voice2.name);
            });
        }
    }
    
    var voices = [];
    window.addEventListener("load", function(){
        loadVoices(speechSynthesis);
        speechSynthesis.addEventListener("voiceschanged", function(){
            loadVoices(speechSynthesis);
        });
    });

    var utterance = new window.SpeechSynthesisUtterance();
    //要唸什麼
    utterance.text = sentence;
    utterance.voice = voices[0];
    utterance.volume = 10;
    utterance.rate = 1;
    utterance.pitch = 1;

    //唸出來
    speechSynthesis.speak(utterance);
}