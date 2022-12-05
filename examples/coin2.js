let player, coin
let score
let bgCol



// p5.js runs this function one time when its ready to start your progra
function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  
  bgCol = 0
  
  player = new Sprite(200,200,20,30)
  coin = new Sprite(300,300,15, "static")
  
  coin.color = 'yellow'

  score = 0
}

function draw() {
  background(bgCol); // try removing this line and see what happens!
  textSize(12)
  textAlign(LEFT)
  fill(100)
  text("Score: " + score, 20, 20 )
  
  if (mouse.isOnCanvas) {
    player.moveTowards(mouse.x,mouse.y)
  }
  if (player.overlaps(coin)) {
    coin.x = random(400)
    coin.y = random(400)
    score += 1
  }
  
  if (score > 10) {
    bgCol = color(270,50,100)
    textSize(32)
    textAlign(CENTER)
    text("Congrats, you won!",200,200)
  }
  
  //optional to make the coin move quickly
  if (frameCount%60 == 0) {
    coin.x = random(400)
    coin.y = random(400)
  }
 
}

