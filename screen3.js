let screenThreeBackground;
let phaseFlower;
let burialDirt;
let clearRect;

function preload() {
    screenThreeBackground = 
    loadImage("assets/screenThreeBackground.png")
}

function setup(){
    createCanvas(800, 600);

    phaseFlower = new Sprite ();
    phaseFlower.img = 'assets/flowerThree.png'

    burialDirt = new Sprite ();
    burialDirt.img = 'assets/screenThreeDirt.png'

    clearRect = new Sprite ();
    clearRect.img = 'assets/clearRect.png'

    burialDirt.collider = "static";

    dirtX = 1000
    dirtY = 1000
}

function draw(){
    background(screenThreeBackground);
   
    phaseFlower.x = 224
    phaseFlower.y = 201

    clearRect.x = 564
    clearRect.y = 300

    burialDirt.x = dirtX
    burialDirt.y = dirtY

    flowerAngle = phaseFlower.rotation;
        console.log(flowerAngle);

    if (clearRect.mouse.presses()){
        dirtX = 564
        dirtY = 300
        phaseFlower.rotateTo(-72, .2);
       
        
    
    }
    if (flowerAngle == -72){
        location.assign("screen4.html");
    }
}