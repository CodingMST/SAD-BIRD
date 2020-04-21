const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var box1,box2,box3,box4,box5;

var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var brd
function setup(){
    
    var canvas = createCanvas(1114,400);
engine = Engine.create();
    world = engine.world;
     box1 = new Box(700,370,50,50);
     box2 = new  Box(905,370,50,50);
    ground=new Ground(200,380,1504,20);
    pig1 = new Pig(811,370);
    log1 = new Log(811,350,300,PI/2); 
    box3 = new Box(725,270,50,50);
     box4 = new  Box(885,270,50,50);
     pig2 = new Pig(811,270);
     log2 = new Log(811,250,300,PI/2); 
     box5 = new  Box(811,230,50,50);
     log3 = new Log(745,230,170,PI/4); 
     log4 = new Log(855,230,170,-PI/4); 
    brd = new Brd (0,0);
    }


function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig2.display();
    log2.display();
    box3.display();
    box4.display();
    box5.display();
    log3.display();
    log4.display();
    brd.display();
}