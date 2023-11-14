let screenOneBackground;
let sword;
let handPosition;
let flowerAngle;

function preload () {
    screenOneBackground = loadImage("assets/screenOneBackground.png");
}

function setup () {
createCanvas(800, 600);

sword = new Sprite ();
sword.img = 'assets/screenOneSword.png'
sword.position = createVector(650, 410);
sword.friction = 10;

handPosition = createVector (500, 315);

flower = new Sprite ();
flower.img = 'assets/screenOneFlower.png';

leaves = new Sprite ();
leaves.img = 'assets/screenOneLeaf.png';

hand = new Sprite ();
hand.img = 'assets/screenOneHand.png'

phaseFlower = new Sprite ();
phaseFlower.img = 'assets/flowerOne.png'



flower.collider = "static";
leaves.collider = "static";


}

function draw() {
    clear();

    
    background(screenOneBackground);
    
    flower.x = 650;
    flower.y = 350;
    leaves.x = 650;
    leaves.y = 458;
    hand.x = 1000
    hand.y= 1000

    phaseFlower.x = 220
    phaseFlower.y = 190


    if (sword.mouse.dragging()) {
        sword.moveTowards(mouseX, mouseY, .1);
        sword.collider = "kinematic";
    }

    if (dist(sword.x,sword.y,handPosition.x,handPosition.y) < 20) {
        sword.position = createVector(502, 315);
        sword.collider = "static";
        hand.x = 502
        hand.y = 275
        // phaseFlower.rotationSpeed = -4
        // if (phaseFlower.rotation > -72){
        //     location.assign("screen2.html")
        // }
    
        phaseFlower.rotateTo(-72, .2);
        flowerAngle = phaseFlower.rotation
        console.log(flowerAngle);
        
        if (flowerAngle == -72){
            location.assign("screen2.html");
        }
        // let time = millis();
        // if (millis() > time + 2000) {
        //     location.assign(screen2.html)
        // }
    }

        


}