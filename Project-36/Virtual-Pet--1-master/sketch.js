var dog,dogHappy;
var foodStock;
var database;
var foodS;
var lastFed
function preload()
{
  dog=loadImage("images/dogImg.png");
  dogHappy=loadImage("images/dogImg1.png");
}
function setup() {
	createCanvas(1000, 600);
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  Dog=createSprite(800,200,150,150);
  Dog.addImage(dog);
  Dog.scale=0.3;

  feed=createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(dogHappy);

  addFood=createButton("AddFood");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}
function draw() { 
  background("blue");
  //foodObj.display();
  
  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  })
  fill(255,255,254);
  if(lastFed>=12){
    text("Last Feed: "+lastFed%12 + "PM",350,30);
  }else if(lastFed==0){
    text("LastFeed : 12AM",350,30);
  }else {
    text("Last Feed : "+lastFed+"AM,350,30")
  }  

  drawSprites();
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  
  database.ref('/').update({
      Food:x
    })
  }
}
function feedDog(){
  dog.addImage(happyDog);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
  Food:foodObj.getFoodStock(),
  FeedTime:hour()
  })
}
function addFoods(){
  foodS++;
  database.ref('/').update({
  Food:foodS
  })
}
