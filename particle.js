class Particle {
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:1,
            density:1.0,
            friction :1.0
           }
          //this.image=loadImage("dust.png");
       // this.width=width;
       
        this.radius=radius; 
        this.body=Bodies.circle(x,y,(this.radius)/2,options);
        World.add(world,this.body);
    }
    
    display(){
        var pos=this.body.position
        //var angle=this.body.angle
    
        push();
        translate(pos.x,pos.y)
        this.body=Bodies.circle(x,y,this.radius,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        world.add(world,this.body);
       // rotate(angle)
       // imageMode(CENTER)
        //fill("white")
        //strokeWeight(5);
        ellipse(0,0,this.radius,this.radius)
        pop();
    
    }
    
    }
