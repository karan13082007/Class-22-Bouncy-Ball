//Engine/World/Bodies--Matter .js
//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;

var engineV,worldV;
var ground,ball;


function setup() {
  createCanvas(400,400);
  //craetes the physics engine
  engineV = Engine.create();
  //Adding the engine to the world
  worldV = engineV.world;
//Object -- Physical bodt/Displayed Body

//Options that your physics object holds
//Options JSON object--multiple properties
var ground_options = {
  isStatic : true

}


//Physical body
ground = Bodies.rectangle(200,390,400,20,ground_options);
//Add the physics obbject to the physics
World.add(worldV,ground)
console.log(ground);

var ball_options = {
restitution : 1.0
}
ball=Bodies.circle(200,100,20,ball_options)
World.add(worldV,ball)

}

function draw() {
  background("red"); 
  //Update the engine for every Draw call
  Engine.update(engineV);
  rectMode(CENTER);
 //rect(200,200,50,50)
 //Displayed Body
 rect(ground.position.x,ground.position.y,400,20);
 ellipseMode(RADIUS)

 ellipse(ball.position.x,ball.position.y,20,20);

 
}