const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  createCanvas(450,600);

  engine = Engine.create();
  world = engine.world;
    
  ground1=new Ground(225,580,450,20);

  celing1=new Ground(225,5,450,10);
  celing2=new Ground(445,300,10,600);
  celing3=new Ground(5,300,10,600);
  celing4=new Ground(225,595,450,10);

  division1=new Division(15,455,10,270);
  division2=new Division(75,455,10,270);
  division3=new Division(135,455,10,270);
  division4=new Division(195,455,10,270);
  division5=new Division(255,455,10,270);
  division6=new Division(315,455,10,270);
  division7=new Division(375,455,10,270);
  division8=new Division(435,455,10,270);

// plinko1=new Plinko(50,50,10);

}

var particles=[];
var plinkos=[];
var divisions=[];


for (var j=40; j<= this.width; j=j+50)
{
  plinkos.push(new Plinko(j,75,10));
}

function draw() {
  background(0);  
  Engine.update(engine);

  fill("brown")
  celing1.display();

  fill("white")
 ground1.display();

 fill("brown")
  celing2.display();

  fill("brown")
  celing3.display();

 fill("brown")
  celing4.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();

  //plinko1.display();
}