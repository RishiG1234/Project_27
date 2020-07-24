
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var ground;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter=140;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(360,400,70);
	bobObject2 = new Bob(370,400,70);
	bobObject3 = new Bob(380,400,70);
	bobObject4 = new Bob(390,400,70);
	bobObject5 = new Bob(400,400,70);

	roof = new Roof(380,100,400,25);

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiamter*2,200);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*2,0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  drawSprites();
 
}



