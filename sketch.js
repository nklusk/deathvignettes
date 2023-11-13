

// let spinningShape;
// let highScore = 0;

// function setup() {
//     let canvas = new Canvas("fullscreen");

//     world.gravity.y = 10;

//     // this sprite can be created on a single line, but it's easier to read this way:
// 	spinningShape = new Sprite();
// 	spinningShape.width = canvas.width/5;
// 	spinningShape.height = spinningShape.width;
//     spinningShape.collider = "kinematic";

//     textFont("Courier", 24);
// }

// function draw() {

//     // try the game without this line :)
//     clear();

//     // the map function translates a value from one range to another
//     // https://p5js.org/reference/#/p5/map
//     spinningShape.rotationSpeed = map(mouse.y, 0, canvas.height, -10, 10);

//     // create a ball when the mouse is clicked
//     // https://p5play.org/learn/input_devices.html
//     if (mouse.presses()) {
//         let ball = new Sprite(mouse.x, -20, 20);
//         // make the ball resist rolling when it touches the spinning shape
//         // https://p5play.org/learn/sprite.html?page=9
//         ball.rotationDrag = 10;
//     }

//     // make the spinning shape larger or smaller using the keyboard
//     // note the difference between presses (above) and pressing (here)
//     if (kb.pressing('right')) {
//         spinningShape.width += 10;
//     } else if (kb.pressing('left')) {
//         spinningShape.width -= 10;
//     }

//     // loop through the allSprites array and see how many are above the center of the screen
//     let currentScore = 0;
//     for (let sprite of allSprites) {
//         if (sprite.y < canvas.height/2) {
//             currentScore++;
//             if (currentScore > highScore) {
//                 highScore = currentScore;
//             }
//         }
//     }

//     // display the score (minus 1 so it doesn't count the spinning shape)
//     text("BALLS: " + (currentScore-1), 40, 60);
//     text("HIGH:  " + (highScore-1), 40, 86);

// }


let screenZeroBackground;
let deathSpiral;

function preload () {
    screenZeroBackground = loadImage("assets/screenZeroBackground.png");
}

function setup () {
    createCanvas(800, 600);
    
    //image(screenZeroBackground, 0, 0);

    deathSpiral = new Sprite ();
    deathSpiral.img = 'assets/deathSpiral.png'
    // deathSpiral.width = 100;
    // deathSpiral.height = 100;
}

function draw() {
    clear();
    background(screenZeroBackground);
    deathSpiral.scale = .16;
    deathSpiral.rotationSpeed = 1;
    deathSpiral.y = 520;
    deathSpiral.x = 410;
  
}