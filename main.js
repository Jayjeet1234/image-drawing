nosex=0;
nosey=0;
rightwristX=0;
leftwriestx=0;
diffrence=0;
function setup(){
canvas=createCanvas(550,550);
canvas.position(560,150);
video=createCapture(VIDEO);
video.size(550,500);
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotpoases);
}
function modelloaded(){
console.log("poseNet is loaded");
}
function gotpoases(results){
if(results.length>0){
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log("nosex is "+nosex+"nosey is "+nosey);
rightwristX=results[0].pose.rightWrist.x;
leftwriestx=results[0].pose.leftWrist.x;
diffrence=floor(leftwriestx-rightwristX);
console.log("leftWristX = " + leftwriestx + " rightWristX = "+ rightwristX + " difference = " + diffrence);
}
}
function draw(){
background("blue");
document.getElementById("hg").innerHTML = "Width And Height of a Square will be = " + diffrence +"px";
fill("green");
stroke("red");
square(nosex,nosey,diffrence);
}
