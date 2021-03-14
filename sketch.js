 const Engine = Matter.engine,
 const World = Matter.world,
 const Events = Matter.events,
 const Bodies = Matter.bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=200;


function setup() {
  createCanvas(700, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20);

  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < Plinko.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(100, 700), 10,10));
     score++;
   }
 
  for (var j = 0; j < Particle.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < Divisions.length; k++) {
     
     divisions[k].display();
   }
}