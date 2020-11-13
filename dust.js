class box{
    constructor(x,y,width,height){
        var ok={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,ok)
        this.height=height;
        this.width=width;
        //this.image=loadImage("dustbingreen.png")
        World.add(world,this.body)
    }
    display(){
        fill(255)
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)

    }
}