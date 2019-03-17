let video;
let mobilenet;
let label = '';

function gotResults(error, data){
    if(error){
        console.error(error);
    }else{
        //console.log(data[0].className);
        label = data[0].className;
        mobilenet.predict(gotResults);
    }
}

function modelReady(){
    console.log("Model is ready");
    mobilenet.predict(gotResults);
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(255);
    video = createCapture(VIDEO);
    video.hide();
    background(0);
    mobilenet = ml5.imageClassifier('Mobilenet', video, modelReady)
}

function draw(){
    background(0);
    image(video, 0 ,0);
    fill(255);
    textSize(30);
    text(label, 10, height - 20);    
}