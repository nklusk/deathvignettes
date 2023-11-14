let screenTwoBackground;
let phaseFlower;
let screenTwoSword;
let clearRect;
let flyingBird;
let dyingBird;
let flybirdX;
let flybirdY;
let diebirdX;
let diebirdY;
let flowerAngle;

function preload() {
    screenTwoBackground = loadImage("assets/screenTwoBackground.png")
    
}

function setup() {
    createCanvas(800, 600);
    
    world.gravity.y = 100;

    phaseFlower = new Sprite ();
    phaseFlower.img = 'assets/flowerTwo.png'

    screenTwoSword = new Sprite ();
    screenTwoSword.img = 'assets/screenTwoSword.png'
    screenTwoSword.collider = ("static");

    clearRect = new Sprite ();
    clearRect.img = 'assets/clearRect.png'
    // clearRect.x = 494
    // clearRect.y = 156
    // clearRect.opacity = 0

    flyingBird = new Sprite ();
    flyingBird.img = 'assets/flyingBird.png';
    flyingBird.collider = ("static");

    dyingBird = new Sprite ();
    dyingBird.img = 'assets/dyingBird.png';
    dyingBird.collider = ("static");

    flybirdX = 500;
    flybirdY = 170;

    diebirdX = 1000;
    diebirdY = 1000;
    
    
}

function draw(){
    clear();
    background(screenTwoBackground);
    screenTwoSword.x = mouseX + 50
    screenTwoSword.y = mouseY + 140
    screenTwoSword.layer = 2;
    flyingBird.layer = 1
    dyingBird.layer = 1

    flyingBird.x = flybirdX;
    flyingBird.y = flybirdY;

    dyingBird.x = diebirdX
    dyingBird.y = diebirdY
    
    phaseFlower.x = 220
    phaseFlower.y = 190
    // phaseFlower.rotation = -72
    flowerAngle = phaseFlower.rotation;
        console.log(flowerAngle);

    if (flyingBird.mouse.presses()){
        flybirdX += 1000;
        flybirdY += 1000;
        diebirdX = 500;
        diebirdY = 200;
        phaseFlower.rotateTo(-72, .2);
       
        
        // location.assign("screen3.html")
    }
     if (flowerAngle < -10){
                diebirdX = 1000;
            }

    if (flowerAngle == -72){
        location.assign("screen3.html");
    }
    // if (diebirdX == 500){
    //     phaseFlower.rotateTo(-144, .1);
    // }
}