var speechrecognition=window.webkitSpeechRecognition;

var recognition=new speechrecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    
    if (content=="take my selfie"){
    speak();    
    }
}
function speak(){
    var synth= window.speechSynthesis;
    speakdata="taking your selfie in 5 seconds";
    var utterthis= new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
    Webcam.attach(camera);
 setTimeout(
 function(){
     takesnapshot();
     save();
 },5000);
}
var camera=document.getElementById("camera");
Webcam.set({
    width:350,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});
function takesnapshot(){
    Webcam.snap(function(data){
        document.getElementById("result").innerHTML="<img id='selfie' src="+data+">";
    });
}
function save(){
    link=document.getElementById("link");
    img=document.getElementById("selfie").src;
    link.href=img;
    link.click();
    
}