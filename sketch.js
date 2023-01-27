const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  //criar objeto da bola
  

  //criar objeto do assoprador
  

  //criar objeto do cano do assoprador (BlowerMouth)
  

  
  button = createButton("Clique para Assoprar");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);

  

}

function draw() {
  background(59);
  Engine.update(engine);

  //exibir os objetos criados
  
}

function blow() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.05});

  

}

