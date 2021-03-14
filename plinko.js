class Plinko{
    constructor (x , y, ){
        var options ={ 
            restitution = 0.4,
            friction = 0,
            isStatic = true

        }
        this.radius = radius;

        this.body = Bodies.circle(x, y, this.radius, options);

        World.add(world,this.body);

         

    }
    display(){

        var pos = this.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStorke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}