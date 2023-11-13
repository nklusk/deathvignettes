let screenOneBackground;

function preload () {
    screenOneBackground = loadImage("assets/screenOneBackground.png");
}

function setup () {
createCanvas(800, 600);

sword = new Sprite ();
sword.img = 'assets/screenOneSword.png'


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
    sword.x = 650;
    sword.y = 410;
    flower.x = 650;
    flower.y = 350;
    leaves.x = 650;
    leaves.y = 458;
    
    
}