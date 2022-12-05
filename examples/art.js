//create a variable for the sprite and the animation
let p1, costume;
let cat;
let star, starAni;

//it is smart to preload images so there is no delay.
function preload() {
  // preload kirby
  costume = loadImage('./assets/kirby.png');

  // create an animation from a sequence of numbered images
  //if you are using the p5 web editor you have to loadAnimation like this:
  starAni = loadAnimation(
    'assets/pixil-frame-8.png',
    'assets/pixil-frame-1.png',
    'assets/pixil-frame-2.png',
    'assets/pixil-frame-3.png',
    'assets/pixil-frame-4.png',
    'assets/pixil-frame-5.png',
    'assets/pixil-frame-6.png',
    'assets/pixil-frame-7.png');

  //if you are using replit, you can load an animation like this:
  //starAni = loadAnimation('./assets/pixil-frame-1.png', 8);
}

function setup() {
  createCanvas(600, 200);
  //create a new sprite, add the star animation

  //Mild
  //resize the image
  costume.resize(50,0)

  //sets the sprite’s appearance to be an image.
  p1 = new Sprite(costume);
  p1.x = 150;
  p1.y = 100;
  //for each step make note of p1's width. How does it change?
  console.log("p1's width:", p1.width);


  //Medium
  //type out the "8 Bit" Character you designed as a string
  let txt = `
.y....y.
yyy..yyy
yyyyyyyy
yyyyyyyy
yybyybyy
yyyyyyyy
.yyrryy.
..yyyy..
`;

  //Extension, create a custom color palette
  let palette = {
    'y': color(255, 225, 53),
    'b': color(50),
    'r': color(255, 69, 0),
  }
  //create an variable called 'img' which will hold the image that the text was converted to.
  let img = spriteArt(txt, 16, palette);

  //create a new sprite and store it in the variable you created in step 1, pass in the img as a property..
  cat = new Sprite(img);
  cat.x = 300;
  cat.y = 100;
  //Spicy
  star = createSprite(starAni);
  star.x = 450;
  star.y = 100;
  //defines how many p5 frames before the next animation image.
  //star.animation.frameDelay = 10;

  //stop the animation
  // star.animation.stop();
}

function draw() {
  clear();
  // if the user presses p, start the animation
  // if the user presses s, stop the animation.
  if (kb.presses('p')) {
    star.animation.play();
  } else if (kb.presses('s')) {
    star.animation.stop();
  }

  //magic sauce! this will replace the animation with the rect or circle representing the sprite.
  star.debug = mouse.holding();
}



