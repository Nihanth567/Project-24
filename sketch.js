
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paper1= new Paper(200,666,2);
ground= new Ground(400,670,800,20)
 dustbin1 = new Dustbin(805,650,200,20);
 dustbin2 = new Dustbin(690,650,100,20);
 dustbin3 = new Dustbin(700,650,100,20);



keyPressed();




  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper1.body,paper1,paper.position,{x:85,y:-85});
	}
}

