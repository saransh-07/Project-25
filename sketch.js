const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,paper;
var dusb1,dusr1,dusl1;
function setup(){

var canvas = createCanvas(800,400);

engine = Engine.create();
world=engine.world;


paper = new Paper(50,200,50,50);
dusr1= new Dusr(640,310,20,100);
dusl1 = new Dusl(760,310,20,100);
dusb1 = new Dusb(700,300,160,175);
var ground_options={
	isStatic:true
}
ground =Bodies.rectangle(400,390,800,20,ground_options);
World.add(world,ground);

}
function draw(){
	background(255);
	Engine.update(engine);
	paper.display();
	dusl1.display();
	dusr1.display();
	dusb1.display();
	
	
	rect(ground.position.x,ground.position.y,800,20);
	keyPressed();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-5});
	}
}