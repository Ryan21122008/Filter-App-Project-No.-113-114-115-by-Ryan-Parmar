moustachex = 0;
moustachey = 0;
function preload(){
   moustache = loadImage("moustache.png");
}
function setup(){
    canvas = createCanvas(800, 700);
    canvas.position(700, 300);
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotResults);
}
function draw(){
    image(video, 0, 0, 800, 700);
    image(moustache, moustachex+15, moustachey+150, 130, 60);
}
function takesnapshot(){
    save("mypicture.png");
}
function modelloaded(){
    console.log("Model Loaded");
}
function gotResults(results){
    if (results.length>0){
        console.log(results);
        moustachex = results[0].pose.nose.x;
        moustachey = results[0].pose.nose.y;
        console.log("Moustache X = ", moustachex);
        console.log("Moustache Y = ", moustachey);
    }
}