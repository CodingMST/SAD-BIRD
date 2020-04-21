class Log {
    constructor(x, y,  height,angle) {
      var options = {
          'restitution':0.8,
          'friction':1.3,
          'density':1.0
      }                                                            
      this.body = Bodies.rectangle(x, y, 21, height, options);
      this.width = 21;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
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
       stroke("orange");
      fill("darkorange");
        rect(0,0, this.width, this.height);
        pop();
      }
    }
  