class Boy{
    constructor(){
        this.body = Bodies.rectangle(200,530,50,80);
        this.width = 50;
        this.height = 80;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
       
        fill("red") 
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        
    }
}