const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var div1, div2, div3, div4, div5, div6;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
function preload(){
}

function setup() {
  createCanvas(500,690);
  
  engine = Engine.create();
	world = engine.world;

  ground = new Ground(500,10);//250, 680, 
  /*div1 = new Divisions(495, 530);
  div2 = new Divisions(395, 530);
  div3 = new Divisions(295, 530);
  div4 = new Divisions(195, 530);
  div5 = new Divisions(95, 530);
  div6 = new Divisions(5, 530);*/
  
  Engine.run(engine); 
}

function draw() {
  background("black");//255,255,255); 
  
  ground.display();
  /*div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();*/
  //console.log("ground");
  for(var k = 0; k <= 100; k = k + 83){
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }



  for (var k = 10; k < divisions.length; k++){
    divisions[k]. display();
  }
  drawSprites();
}