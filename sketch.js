const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var GameState = "Sling";

function preload() {
    backgroundImg = loadImage("sprites/images.jpg");
}

function setup(){
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(700,height,1600,20);
    platform = new Ground(150, 305, 300, 170);

  
    box1 = new Box(1005,320,70,70);
    box2 = new Box(1225,320,70,70);
    pig1 = new Pig(1110, 350);
    log1 = new Log(1105,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(910,240,70,70);
    pig3 = new Pig(810, 350);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(1110,160,70,70);
    log4 = new Log(965,12,150, PI/7);
    log5 = new Log(1074,12,150, -PI/7);

    box6 = new Box(810,160,70,70);
    log6 = new Log(960,120,600, PI/2);
  //  log7 = new Log(777,120,150, -PI/7);

  box7 = new Box(1020,4,70,70);
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    box6.display();
    box7.display();
    log6.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(GameState!=="launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    GameState ="launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}