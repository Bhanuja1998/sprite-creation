var ball;
var ballimg;

function preload(){
    ballimg = loadAnimation("1.png","2.png","3.png","4.png","5.png")
    batimg=loadImage("ball.jpg")
}
function setup(){
    ball = createSprite(200,200,50,50)
    ball.addAnimation("run",ballimg)
    ball.scale = 1
    bat = createSprite(300,200,50,50)
    bat.addImage(batimg)
    bat.scale = 1
}

function draw(){
    background("black")
    drawSprites()

}