class Ground{
    constructor(x,y,width,height){
        this.ground =Bodies.rectangle(x,y,width,height)
        this.width=width
        this.height=height

        World.add(world,this.ground);

    

    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
      }
}