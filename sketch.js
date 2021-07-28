var game,player,form
var database
var gameState=0
var playerCount=0
var player1,player2
var allPlayers
var players=[]
var chickenGroup
var birdGroup
var sheepGroup
var goatGroup
var chick1,goat1,bird1,sheep1,hunter1,hunter2

function preload(){
chick1=loadImage("images/chickenn.png")
goat1=loadImage("images/goat1.png")
sheep1=loadImage("images/sheep2.png")
bird1=loadImage("images/bird1.png")
hunter1=loadImage("images/hunter1.png")
hunter2=loadImage("images/hunter1.png")

}
function setup() {
  createCanvas(1700,780);
  database=firebase.database()
  chickenGroup=new Group()
 birdGroup=new Group()
sheepGroup=new Group()
 goatGroup=new Group()

 game= new Game()
 game.getState()
 game.start()
}

function draw() {
  background(255);  

  if (playerCount ===2){
    game.update(1)
  }
  if (gameState===1){
    clear()
    game.play()
  }

  
  /*if (sheepGroup.isTouching(player1)){
    sheepGroup.destroy() 
  }*/
 /* stroke("yellow")
  strokeWeight(5)
  line(500,0,500,780) */
  drawSprites();
}


/*function chicken(){
 var chicken = createSprite(random(0,1000),200,20,20)
 chicken.addImage("images/chickenn.png")
}
*/
