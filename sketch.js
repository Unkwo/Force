const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var rope;

var bob;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	
    
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(400,195,20);
	World.add(world,bob1);

	bob2 = Bodies.circle(bob1.position.x-50,195,20);
	World.add(world,bob2);

	bob3 = Bodies.circle(bob1.position.x+50,195,20);
	World.add(world,bob3);

	bob4 = Bodies.circle(bob1.position.x-100,195,20);
	World.add(world,bob4);

	bob5 = Bodies.circle(bob1.position.x+100,195,20);
	World.add(world,bob5);

    var con = Matter.Constraint.create({
		pointA:({x:400}, {y:100}),
		bodyB:bob1,
		pointB:({x:400}, {y:195}),
		length:200,
		stiffness:0.2
	})
	World.add(world,con);

	var con1 = Matter.Constraint.create({
		pointA:({x:400}, {y:100}),
		bodyB:bob2,
		pointB:({x:bob2.position.x}, {y:bob2.position.y}),
		length:200,
		stiffness:0.2
	})
	World.add(world,con1);
	
	var con2 = Matter.Constraint.create({
		pointA:({x:400}, {y:100}),
		bodyB:bob3,
		pointB:({x:bob3.position.x}, {y:bob3.position.y}),
		length:200,
		stiffness:0.2
	})
	World.add(world,con2);

	var con3 = Matter.Constraint.create({
		pointA:({x:400}, {y:100}),
		bodyB:bob4,
		pointB:({x:bob4.position.x}, {y:bob4.position.y}),
		length:200,
		stiffness:0.2
	})
	World.add(world,con3);

	var con4 = Matter.Constraint.create({
		pointA:({x:400}, {y:100}),
		bodyB:bob5,
		pointB:({x:bob5.position.x}, {y:bob5.position.y}),
		length:200,
		stiffness:0.2
	})
	World.add(world,con4);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  
  
	
  
  
  //create ellipse shape for multiple bobs here
   ellipse(bob1.position.x,bob1.position.y,25);
   ellipse(bob2.position.x,bob2.position.y,25);
   ellipse(bob3.position.x,bob3.position.y,25);
   ellipse(bob4.position.x,bob4.position.y,25);
   ellipse(bob5.position.x,bob5.position.y,25);

   stroke ("green");
	strokeWeight(4);
	line (350,100,bob2.position.x,bob2.position.x);
	line(400,100,bob1.position.x,bob1.position.y);
	line(450,100,bob3.position.x,bob3.position.y);
	line(300,100,bob4.position.x,bob4.position.y);
	line(500,100,bob5.position.x,bob5.position.y);
  
	force();
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function force(){
	if(keyDown(space)){
		Matter.Body.applyForce(bob5,{x:0,y:0},{x:0.6,y:0});
	}
}