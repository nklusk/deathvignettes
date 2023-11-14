let screenFourBackground;
let phaseFlower;
let sword;
let dirt1;

function preload() {
    screenFourBackground = 
    loadImage("assets/screenFourBackground.png")
}

function setup(){
    createCanvas(800, 600);
    phaseFlower = new Sprite ();
    phaseFlower.img = 'assets/flowerFour.png'

    sword = new Sprite ();
    sword.img = 'assets/screenFourSword.png'
    sword.layer = 2

    dirt1 = new Sprite ();
    dirt1.img = 'assets/screenFourDirt1.png'
    dirt1.collider = "static"
    dirt1.layer = 1

    dirtX = 645
    dirtY = 450

}

function draw(){
    background(screenFourBackground);
    
    phaseFlower.x = 229
    phaseFlower.y = 210

    sword.x = mouseX
    sword.y = mouseY - 45

    dirt1.x = dirtX
    dirt1.y = dirtY

    flowerAngle = phaseFlower.rotation;
        console.log(flowerAngle);

    if (dirt1.mouse.presses()){
        
        phaseFlower.rotateTo(-72, .2);
       dirt1.img = 'assets/screenFourDirt2.png'
       dirtX = 1000
       dirtY = 1000
    }

    if (flowerAngle < -25 && flowerAngle > -50){
        dirt1.img = 'assets/screenFourDirt3.png'
    }
    if (flowerAngle < -50 && flowerAngle > -72){
        dirt1.img = 'assets/screenFourDirt4.png'
    }
    if (flowerAngle == -72){
        location.assign("screen5.html");
    }
}