class Monster{
    constructor(){
        var options = {
            density : 1,
            friction : 1
        }
        var x = Math.round(random(500,1300));
        var y = Math.round(random(400,550));
        var w = 50;
        var h = 80;
        this.body = Bodies.rectangle(x, y, 50, 80, options);
        World.add(world,this.body);  
        
        console.log(x);
        console.log(y);
        }

        display(){
        
        var pos = this.body.position;

       
        
        fill("green");
        rectMode(CENTER);
        rect(pos.x,pos.y,50,80);  
       

        }
}