class Food{
  constructor(){
    var foodStock;
    var lastFed;
    image=loadImage("images/Milk.png");
  }
  display(){
    var x=80,y=100;

    imageMode(CENTER);
    image(this.image,720,220,70,70);
    if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
           x=80;
           y=100;
        }
        image(this.image,x,y,50,50);
        x=x+30;
      }
    }
  }
    getFoodStock(){
        var playerCountref=database.ref("playerCount");
        playerCountref.on("value",function(data){
        playerCount=data.val();
        })
    }
    updateFoodStock(){
        database.ref("/").update({
            playerCount:count
        })  
    }
    deductFood(){
        
    }
     
}