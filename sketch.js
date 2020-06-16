const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var round;
var B,G;
var wall1,wall2;

function setup() {
  createCanvas(800,400);
engine = Engine.create()
world = engine.world;

 B = new baller(100,300)
  

round = new pendulum(B.body,{x:400,y:150});
G = new ground(400,390,800,10);
 push();
fill("green")
wall1 = new ground(600,335,10,100);
wall2 = new ground(680,335,10,100);
 pop();
}

function draw() {
  background(255,255,20);  
  Engine.update(engine);
  B.display();
  round.display();
  G.display();
  wall1.display();
  wall2.display();

}

function mouseDragged(){
  Matter.Body.setPosition(B.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  round.fly();
}