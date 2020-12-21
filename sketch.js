  var dog, happyDog, database;
  var food, foodStock;

function preload(){
dog=loadImage("dogImg.png");
happyDog=loadImage("dogImg1.png");
}
function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250);
  happyDog= createSprite(100,100);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
backGround(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(dogHappy);
}

  drawSprites();
  stroke(4);
  fill(2);
}

function readStock(data){
  foods=data.val();
}

function writeStock(X){
database.ref('/').update({
  Food:x
})
}


