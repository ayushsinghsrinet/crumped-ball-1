const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//const Engine=Matter.Engine;
//const World=Matter.World;
//const Bodies=Matter.Bodies;

var world,engine;
var ball;
var ground;
var dustbin,dustbin2,dustbin3;
//var engine,world;

function setup(){
    var canvas=  createCanvas(1000,600)
    engine=Engine.create();
    world=engine.world;
    //engine=Engine.create();
    //world=engine.world;
    var opt={
        isStatic:true,
    }
    
    ground=Bodies.rectangle(500,590,1000,30,opt)
    
    World.add(world,ground) 
    dustbin=new box(800,570,160,20)
    dustbin2=new box (890,500,20,160)  
    dustbin3=new box(710,500,20,160)

    var o={
        restitution:0.8,
      
    }
    
    ball=Bodies.circle(180,50,20,o);
    World.add(world,ball);

   
}
function draw(){
    background(0)
    Engine.update(engine)
    dustbin.display();
    dustbin2.display();
    dustbin3.display();
    rectMode(CENTER)
    fill("brown")
    rect(ground.position.x,ground.position.y,1000,30)
    ellipseMode(RADIUS);
    fill("purple")
    ellipse(ball.position.x,ball.position.y,30,20);
    
    keypr();
}

function keypr(){
    if(keyDown(UP_ARROW)){
        Matter.Body.applyForce(ball, {x: ball.position.x, y: ball.position.y}, {x: 0.01, y:- 0.01})
    }
}
