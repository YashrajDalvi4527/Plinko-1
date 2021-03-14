class Ground{
    constructor (x , y, width, hieght){
        var options ={ 

            isStatic=true 

        }
        this.body = Bodies.rectangle(x,y,hieght,width,options);
        this.width = width;
        this.hieght = hieght;
        World.add(world,this.body);

         

    }
    display(){

        var pos = this.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.width,this.hieght)
    }
}