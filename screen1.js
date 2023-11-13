let screenOneBackground;
let sword;
let handPosition;

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

flower.collider = "static";
leaves.collider = "static";


}

function draw() {
    clear();
    background(screenOneBackground);
    // sword.x = 650;
    // sword.y = 410;
    flower.x = 650;
    flower.y = 350;
    leaves.x = 650;
    leaves.y = 458;

    if (sword.mouse.dragging()) {
        sword.moveTowards(mouseX, mouseY, .1);
        sword.collider = "kinematic";
    }

    if (dist(sword.x,sword.y,handPosition.x,handPosition.y) < 20) {
        console.log("in hand")
        sword.x = 650;
        sword.y = 410;
    }

}