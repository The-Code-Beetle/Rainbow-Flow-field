var inc = 0.1;
var zinc = 0.01;

var cols, rows;
var scl = 10;

var zoff = 0;

var particles = [];
var flow = [];
var a = 10;


function setup() {
     colorMode(HSB, 255);
     createCanvas(800, 800);
     cols = width / scl;
     rows = height / scl;
     
     for(var i = 0; i < 100; i++){
          particles.push(new Particle());
     }
     
     flow = new Array(cols * rows);
}
function draw() {
     stroke(90);
     strokeWeight(1);
     
     var yoff = 0;
     for(var y = 0; y < rows; y++){
          var xoff = 0;
          for(var x = 0; x < cols; x++){
               var index = x + y * cols;
               var n = noise(xoff, yoff, zoff) * TWO_PI * 4;
               
               var v = p5.Vector.fromAngle(n);
               v.setMag(2);
               flow[index] = v;
               
               xoff += inc;
          }    
          yoff += inc;
     }
     
     zoff += zinc;
     
     
     for(var i = 0; i < particles.length; i++){
          particles[i].follow(flow);
          particles[i].update();
          particles[i].display();
          particles[i].updatepos();
          particles[i].edges();
     }
     if(mouseIsPressed){
          background(255);
     }
}

function setInc(a){
     inc = a;
};
function setZinc(a){
     zinc = a;
};
function setA(ap){
     a = ap;
}
