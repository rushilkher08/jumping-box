var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    rect1 = createSprite(750,550,250,20);
    rect1.shapeColor = "blue"

    rect2 = createSprite(500,550,200,20);
    rect2.shapeColor = "red"

    rect3 = createSprite(260,550,210,20);
    rect3.shapeColor = "yellow"

    rect4 = createSprite(60,550,120,20);
    rect4.shapeColor = "green"

    ball = createSprite(750,525,30,30);
    ball.velocityX = 5
    ball.velocityY = 6   
    //create box sprite and give velocity

    edges = createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    if(ball.isTouching(rect1)){
        ball.shapeColor = "blue"
    }

    if(ball.isTouching(rect2)){
        ball.shapeColor = "red"
    }

    if(ball.isTouching(rect3)){
        ball.shapeColor = "yellow"
    }
    
    if(ball.isTouching(rect4)){
        ball.shapeColor = "green"
    }

    
    ball.bounceOff(edges); 
    drawSprites();

    


    //add condition to check if box touching surface and make it box
}
