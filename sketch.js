const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var round;
var B;

function setup() {
  createCanvas(800,400);
engine = Engine.create()
world = engine.world;

 B = new baller(100,300)
  

round = new pendulum(B.body,{x:400,y:150});



 
}

function draw() {
  background(255,255,20);  
  Engine.update(engine);
  B.display();
  round.display();
  
  
}

function mouseDragged(){
  Matter.Body.setPosition(B.body,{x:mouseX,y:mouseY})
}