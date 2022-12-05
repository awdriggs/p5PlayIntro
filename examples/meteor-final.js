let p1, meteor, rock, flappy;
let playing = true;
let points = 0;

function preload() {
  flappy = loadAnimation(
    "assets/flappy-1.png",
    "assets/flappy-2.png",
    "assets/flappy-3.png",
    "assets/flappy-4.png"
  );

  rock = loadImage("./assets/rock.png");
}

function setup() {
  createCanvas(800, 400);

  //1 - Create a new sprite for p1, give it the flappy animation.
  p1 = new Sprite(flappy, 200, height / 2);

  meteors = new Group();

  for (let i = 0; i < 5; i++) {
    new meteors.Sprite(rock, i * 100 + width, random(height));
  }
  meteors.vel.x = -2;
}

function draw() {
  clear();

  if (playing) {
    background("#FFF");
    text(points, 20, 20);

    if (kb.pressing("up")) {
      p1.vel.y = -5;
      p1.animation.frameDelay = 2; //flap faster!
    } else if (kb.pressing("down")) {
      p1.vel.y = 5;
      p1.animation.stop(); //make it look like sprite is falling!
    } else {
      p1.vel.y = 0;
      p1.animation.play();
      p1.animation.frameDelay = 10;
    }

    for (let meteor of meteors) {
      //each meteor
      if (meteor.x <= 0) {
        meteor.x = width + 50;
        meteor.y = random(height);
        points++; //increase the points
        meteor.vel.x -= 0.5; //moving left, this will make it a little faster
        //limit to a top speed
        if (meteor.vel.y > 30) meteor.vel.y = 30;
      }
    }

    if (p1.colliding(meteors)) {
      playing = false;
      p1.remove();
    }
  } else {
    text("Game Over", width / 2, height / 2);
  }
}

