const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,plane,stone,rubber;
function setup() 
{
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;
	plane=new Plane(600,height,1200,20);
	stone=new Stone(700,320,100,100);
	rubber=new Rubber(900,450,70);
	hammer=new Hammer(10,100);
}
function draw()
 {
	 background("lightblue");
	 Engine.update(engine);
	 plane.display();
	 stone.display();
	 rubber.display();
	 hammer.display();
}



