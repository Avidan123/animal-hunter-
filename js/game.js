class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }
//why have we written state as a parameter
    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {

            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                //what is this for 
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();

            }
           
            
        }
        play(){
            background("white")

            player1=createSprite(250,200)
            player1.addImage(hunter1)
           player1.scale=0.2
            player2=createSprite(250,600)
            player2.addImage(hunter1)
            player2.scale=0.2
            players=[player1,player2]

            
            form.hide()
            Player.getPlayerInfo()


            var x =0
        var y 
        var index=0

            //prl is player represents 1 player at a time
            for(var plr in allPlayers){
                    //how does index help us to diffrenciate between player1 and player 2
                   
                index = index+1;
                x = 250
                y=y+400
                
                players[index -1].x = x;
                players[index - 1].y = y;
                  

               if(index === player.index){
                    
                    // player name 
                  textSize(30)
               fill("black")
               text(allPlayers[plr].name,x-25,y+25)
                    
                }
               
                // player score.
                textSize(30)
               fill("white")
               
               text("player1score="+allPlayers.player1.score,600,100)
               text("player2score="+allPlayers.player2.score,600,150)

            
            }

          

          

           this.chicken()
           this.bird()
           this.sheep()
           this.goat()
           // setInterval(this.chicken,7000)
           if (chickenGroup.isTouching(players)){
            chickenGroup.destroyEach()
            player.score=player.score+1
              }
            
              if (birdGroup.isTouching(players)){
                chickenGroup.destroyEach()
                score=score+3
                  }
            
                  if (sheepGroup.isTouching(players)){
                    chickenGroup.destroyEach()
                    score=score+5
                      }
            
                      if (goatGroup.isTouching(players)){
                        chickenGroup.destroyEach()
                        score=score+7
                          }
       
        if(keyIsDown(UP_ARROW)){
            player.distance=player.distance-10
            player.update()
        }
    
        if(keyIsDown(DOWN_ARROW)){
            player.distance=player.distance+10
            player.update()
        }
     
        drawSprites()
        }
        chicken(){
           if(frameCount%120===0){
            var chicken = createSprite(1800,random(100,780),20,20)
            chicken.velocityX=-4
        chicken.addImage(chick1)
        chicken.scale=0.08
        chickenGroup.add(chicken)
           }
        }

           bird(){
            if(frameCount%250===0){
             var bird = createSprite(1800,random(100,780),20,20)
             bird.velocityX=-7
         bird.addImage(bird1)
        bird.scale=0.02
        birdGroup.add(bird)
            }
        }
            sheep(){
                if(frameCount%500===0){
                 var sheep = createSprite(1800,random(100,780),20,20)
                 sheep.velocityX=-9
            sheep.addImage(sheep1)
            sheep.scale=0.2
            sheepGroup.add(sheep)
                }
            }
    goat(){

        if(frameCount%1000===0){
            var goat = createSprite(1800,random(100,780),20,20)
            goat.velocityX=-15
       goat.addImage(goat1)
       goat.scale=0.08
       goatGroup.add(goat)
           }
    }
                
        
    
}
    

