class Dustbin{
    constructor(x,y,width,height){

    
        this.dust = Bodies.rectangle(x,y,width,height,options)

        this.width = width;
      this.height = height;
      World.add(world, this.dust);
    }
    
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
      }
}