class Paper{
    constructor(x,y,width,height){
        var options{
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.paper = Bodies.circle(x,y,radius,options)
       World.add(world,this.dust);

    }
    display(){
        var pos =this.body.position;
        radiusMode(CENTER);
        fill("purple");
        rect(pos.x, pos.y, this.width, this.height);
   
    }
}