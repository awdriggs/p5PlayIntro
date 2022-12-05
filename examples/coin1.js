let player, gems;
let score = 0;

let timer = 10;
let gameState = "intro";



function setup() {
	createCanvas(400, 400);

	coins = new Group();
	coins.diameter = 10;
	coins.x = () => random(0, width);
	coins.y = () => random(0, height);
	coins.amount = 80;
  coins.color = color(255, 195, 0);
  coins.x = () => random(0, width);
  coins.y = () => random(0, height);

	player = new Sprite();
	player.overlaps(coins, collect);
}

function collect(player, coin) {
  if(gameState == "playing") {
    score += 1;
  	coin.remove();
  }
}

function draw() {
  if(gameState == "intro") {
    intro();
  } else if(gameState == "playing") {
    playing();
  } else {
    gameOver();
  }
  
}

function intro() {
  background(42, 222, 159 );
  player.visible = false;
  coins.visible = false;
  textSize(20);
  text("Welcome to Coin Collector!\nSee how many coins you can collect\nin 10 seconds.\n\nUse WASD to play and click to start!", 20, 50);
}

function playing() {
  background(42, 107, 222); 
  player.visible = true;
  coins.visible = true;
  
	if (kb.pressing('up')) {
		player.vel.y = -4;
	} else if (kb.pressing('down')) {
		player.vel.y = 4;
	} else {
		player.vel.y = 0;
	}
	
	if (kb.pressing('left')) {
		player.vel.x = -4;
	} else if (kb.pressing('right')) {
		player.vel.x = 4;
  } else {
		player.vel.x = 0;
	}

  textSize(20);
  text("Coins collected: " + score, 50, 50);


  if (timer > 0 && frameCount % 60 == 0){
    text(timer, 200,200)
    timer -= 1
  }
  if (timer == 0){
    gameState = "game over";
    gameOver();
   
  }
  
}


function gameOver() {
  background(42, 222, 159 );
  player.visible = false;
  coins.visible = false;
  
  text("Timer Done!\nYou caught " + score + " coins!", 100, 70);
}

function mousePressed() {
  if (gameState == "intro") {
    gameState = "playing";
  }
}
