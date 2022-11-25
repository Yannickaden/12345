//https://teachablemachine.withgoogle.com/models/fxDEXu3Yw/
Webcam.set({
    width:380,
    height:310,
    image_format:'png',
    png_quality:69
})

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="snap" src="'+data_uri+'"/>';
    });
    
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fxDEXu3Yw/model.json",modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

function check(){
    img=document.getElementById('snap');
    classifier.classify(img, gotResult)
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object").innerHTML=results[0].label;
        document.getElementById("aimbot_object").innerHTML=(results[0].confidence*100).toFixed(1)+"%";
    }
    
}














































