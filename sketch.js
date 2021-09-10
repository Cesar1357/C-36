var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
var feed;
var lastfeed = 1;
var database;
//crea aquí las variables feed y lastFed 


function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  lastfeed=database.ref('FeedTime');
  lastfeed.on("value",readlastfeed);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //crea aquí el boton Alimentar al perro

  feed=createButton("Alimentar");
  feed.position(1000,95);
  feed.mousePressed(feedDog);
  
 
    
  



  addFood=createButton("Agregar Alimento");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  //escribe el código para leer el valor de tiempo de alimentación de la base de datos
  //if(lastfeed>=12){

    //muestra la hora en formato PM lasfeed mayor a 12
  //}else if(lastfeed==0){
    fill("black");
    text("Ultima hora en que se alimento :"+ lastfeed + ":00", 350,30)
    //text(":00", 535,30);
    //}else{
      //fill("black");
      //text("Ultima hora en que se alimento : 12 AM", 350,30)

  //}

 
  //escribe el código para mostrar el texto lastFed time aquí

 
  drawSprites();
}

//función para leer la Existencia de alimento
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}

function readlastfeed(data){
  lastfeed=data.val();
  .updateFoodStock(foodS);
}


function feedDog(){
  if(foodS >= 1){
  dog.addImage(happyDog);
  lastfeed = hour();
database.ref('/').update({
  FeedTime:lastfeed
})
  
  foodS = foodS - 1;
  database.ref('/').update({
    Food:foodS
  }) 
  //var food_stock_val = foodObj.getFoodStock();
  //if(food_stock_val <= 0){
   //foodObj.updateFoodStock(food_stock_val *0);
  //}else{
    //foodObj.updateFoodStock(food_stock_val -1);
  //}

  }
}
//escribe el código aquí para actualizar las existencia de alimento, y la última vez que se alimentó al perro


//funcón para agregar alimento al almacén
function addFoods(){
  foodS = foodS + 1;
  dog.addImage(sadDog)
  database.ref('/').update({
    Food:foodS
  })
}
