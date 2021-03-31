class Hammer {
    constructor(width,height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(200,550,width,height);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
     pos.x = mouseX; 
     pos.y = mouseY;
      var angle = this.body.angle;
       push();
        translate(pos.x, pos.y);
        rotate(angle); 
        strokeWeight(3); 
        stroke('white') 
        fill('orange') 
        rectMode(CENTER) 
        rect(0, 0, this.width, this.height); 
        pop();
    }
  };
  