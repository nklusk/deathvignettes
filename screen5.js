let screenFiveBackground;

function preload() {
    screenFiveBackground = 
    loadImage("assets/screenFiveBackground.png")
}
function setup(){
    createCanvas(800, 600);
    phaseFlower = new Sprite ();
    phaseFlower.img = 'assets/flowerFive.png'
}

function draw(){
    background(screenFiveBackground);
    
    phaseFlower.x = 235
    phaseFlower.y = 220

    phaseFlower.rotateTo(-72, .2);

    flowerAngle = phaseFlower.rotation;
        console.log(flowerAngle);
    
        
        if (flowerAngle == -72){
            location.assign("screen1.html");
}
}
