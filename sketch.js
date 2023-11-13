let screenZeroBackground;
let deathSpiral;

function preload () {
    screenZeroBackground = loadImage("assets/screenZeroBackground.png");
}

function setup () {
    createCanvas(800, 600);
    
    

    deathSpiral = new Sprite ();
    deathSpiral.img = 'assets/deathSpiral.png'
   
}

function draw() {
    clear();
    background(screenZeroBackground);
    deathSpiral.scale = .16;
    deathSpiral.rotationSpeed = 1;
    deathSpiral.y = 520;
    deathSpiral.x = 410;
  
}

function mousePressed() {
    location.assign("screen1.html");
}