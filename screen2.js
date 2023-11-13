let screenTwoBackground;
let phaseFlower;
let screenTwoSword;
let clearRect;

function preload() {
    screenTwoBackground = loadImage("assets/screenTwoBackground.png")
    
}

function setup() {
    createCanvas(800, 600);
    phaseFlower = new Sprite ();
    phaseFlower.img = 'assets/flowerTwo.png'

    screenTwoSword = new Sprite ();
    screenTwoSword.img = 'assets/screenTwoSword.png'

    clearRect = new Sprite ();
    clearRect.img = 'assets/clearRect.png'
    clearRect.x = 494
    clearRect.y = 156
    clearRect.opacity = 0
    
}

function draw(){
    clear();
    background(screenTwoBackground);

    screenTwoSword.x = mouseX + 50
    screenTwoSword.y = mouseY + 140
    phaseFlower.x = 220
    phaseFlower.y = 190
    phaseFlower.rotation = -72

    if (mouse.presses('clearRect')){
        location.assign("screen3.html")
    }
}