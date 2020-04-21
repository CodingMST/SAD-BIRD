class Pig {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }                                                            
      this.body = Bodies.rectangle(x, y,50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body); 
    }
      display(){
        var angle = this.body.angle;
    angleMode(RADIANS);
       push();  
    var pos =this.body.position;
        rectMode(CENTER);
         
      translate(pos.x,pos.y);
      rotate(angle);
       strokeWeight (3);
       stroke("darkgreen");
      fill("green");
        rect(0,0, this.width, this.height);
        pop();
      }
    }
  