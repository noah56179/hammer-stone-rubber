
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,stone1,stone2,rubber;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(500, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,350,800,40);
hammer = new Hammer(50,50);
	Engine.run(engine);
  stone1 = new Stone(400,100,50,50);
  stone2 = new Stone(400,200,50,50);
  rubber = new Rubber(400,300,100,100);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 hammer.display();
 stone1.display();
 stone2.display();
rubber.display();
}



