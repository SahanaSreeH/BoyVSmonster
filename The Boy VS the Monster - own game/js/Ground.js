class Ground
{
	constructor()
	{
		var options={
			isStatic:true			
			}
		this.x=650;
		this.y=585;
		this.w=1300;
		this.h=20;
		this.body=Bodies.rectangle(650, 585, 1300, 20, options);
 		World.add(world, this.body);
        this.body.velocityX = -3; 

	}
	display()
	{
			
			var pos = this.body.position;		

			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill("white")
			rect(0,0,this.w, this.h);
			pop()
			
	}

}