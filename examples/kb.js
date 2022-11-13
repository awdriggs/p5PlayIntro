let press, on, off;

function setup() {
  createCanvas(800, 400);
  noStroke();

  on = color("LawnGreen");
  off = color("white");

  //setup each sprite, nothing fancy here just some math
  presses = new Sprite();
  presses.textColor = "black";
  presses.textSize = 30;
  presses.text = "Presses";
  presses.w = width / 3;
  presses.h = height / 2;
  presses.x = 0 + presses.w / 2;
  presses.y = 0 + presses.h / 2;

  holds = new Sprite();
  holds.textColor = "black";
  holds.text = "Holds";
  holds.textSize = 30;
  holds.w = width / 3;
  holds.h = height / 2;
  holds.x = 0 + holds.w / 2;
  holds.y = holds.h + holds.h / 2;

  pressing = new Sprite();
  pressing.textColor = "black";
  pressing.textSize = 30;
  pressing.text = "Pressing";
  pressing.w = width / 3;
  pressing.h = height / 2;
  pressing.x = pressing.width + pressing.w / 2;
  pressing.y = 0 + pressing.h / 2;

  holding = new Sprite();
  holding.textColor = "black";
  holding.textSize = 30;
  holding.text = "Holding";
  holding.w = width / 3;
  holding.h = height / 2;
  holding.x = holding.w + holding.w / 2;
  holding.y = holding.h + holding.h / 2;

  released = new Sprite();
  released.textColor = "black";
  released.textSize = 30;
  released.text = "Released";
  released.w = width / 3;
  released.h = height / 2;
  released.x = released.width * 2 + released.w / 2;
  released.y = 0 + released.h / 2;

  held = new Sprite();
  held.textColor = "black";
  held.textSize = 30;
  held.text = "Held";
  held.w = width / 3;
  held.h = height / 2;
  held.x = held.w * 2 + held.w / 2;
  held.y = held.h + held.h / 2;
}

function draw() {
  clear();

  //if/else statement for each type of keyboard input
  //will change the color of the matching sprite.

  if (kb.presses(" ")) {
    presses.color = on;
  } else {
    presses.color = off;
  }

  if (kb.holds(" ")) {
    holds.color = on;
  } else {
    holds.color = off;
  }

  if (kb.pressing(" ")) {
    pressing.color = on;
  } else {
    pressing.color = off;
  }

  if (kb.released(" ")) {
    released.color = on;
  } else {
    released.color = off;
  }

  if (kb.holding(" ")) {
    holding.color = on;
  } else {
    holding.color = off;
  }

  if (kb.held(" ")) {
    held.color = on;
  } else {
    held.color = off;
  }
}
