var Particle = function(){
     this.pos = createVector(random(width), random(height));
     this.ppos = this.pos.copy();
     this.vel = createVector(0, 0);
     this.acc = createVector(0, 0);
     this.maxSpeed = 2;
     this.h = 0;
     
     this.update = function(){
          this.vel.add(this.acc);
          this.vel.limit(this.maxSpeed);
          this.pos.add(this.vel);
          this.acc.mult(0);
     };
     
     this.updatepos = function(){
          this.ppos.set(this.pos);
     };
     
     this.applyForce = function(force){
          this.acc.set(force);
     };
     
     this.display = function(){
          stroke(this.h, 255, 255, a);
          this.h = this.h + 1;
          if(this.h > 255){
               this.h = 0;
          }
		  strokeWeight(4);
          line(this.pos.x, this.pos.y, this.ppos.x, this.ppos.y);
     };
     
     this.edges = function(){
          if(this.pos.x < 0){
               this.pos.x = width;
               this.ppos.x = width;
          }
          if(this.pos.x > width){
               this.pos.x = 0;
               this.ppos.x = 0;
          }
          if(this.pos.y < 0){
               this.pos.y = height;
               this.ppos.y = height;
          }
          if(this.pos.y > height){
               this.pos.y = 0;
               this.ppos.y = 0;
          }
     };
     
     this.follow = function(a){
          var x = floor(this.pos.x / scl);
          var y = floor(this.pos.y / scl);
          var this_index = x + y * cols;
          var force = a[this_index];
          this.applyForce(force);
     };
};
