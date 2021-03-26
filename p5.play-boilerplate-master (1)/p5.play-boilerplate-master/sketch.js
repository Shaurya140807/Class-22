const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
var engine, world 
var box

var ground
var box2
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  var options = {
    restitution: 2
  }
  box = Bodies.rectangle(200,200,20,10,options)
  World.add(world,box)
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(400,350,800,10,options)
  World.add(world,ground)
box2 = Bodies.rectangle(200,200,15,10)
World.add(world,box2 )

}

function draw() {
    background(0);  
    Engine.update(engine)
    rectMode(CENTER)
    rect(box.position.x, box.position.y,10,10)
    rect(ground.position.x,ground.position.y,800,10)
    rect(box2.position.x,box2.position.y,15,10)
  drawSprites();
}
