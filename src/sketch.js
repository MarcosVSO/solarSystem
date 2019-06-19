var canvasW = 3000;
canvasH = 2000;
let sol;
let terra;
let mercurio;
let venus;

function setup() {
  createCanvas(canvasW,canvasH);
  frameRate(30);
  angleMode(DEGREES);
  translate(canvasW/2,canvasH/2);
  sol = new Planet(0,0,1000,"#ffbf00");
  dSolDireita = sol.x - (sol.diameter/2); 
  mercurio = new Planet(dSolDireita - 60000000/1000000,sol.y,sol.diameter * 0.003503307,"#adafb2",(360/88));
  venus = new Planet(dSolDireita - 105000000/1000000,sol.y,sol.diameter * 0.00870,"#e9f2b3",(360/224));
  terra = new Planet(dSolDireita - 150000000/1000000,sol.y,sol.diameter * 0.009159292,"#4286f4",(360/365));
}

function draw() {
  background(10);
  translate(canvasW/2,canvasH/2);
  sol.display();
  rotate(terra.translation());
  terra.display();
  rotate(mercurio.translation());
  mercurio.display();
  rotate(venus.translation());
  venus.display();
}

class Planet{
    constructor(x,y,diameter,color,velocity){
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.color=color;
    this.veloctity = velocity;
    this.angle = 0;
  }
  display(){
    fill(this.color);
    noStroke();
    ellipse(this.x,this.y,this.diameter,this.diameter);
  }

  translation(){
    this.angle = float(this.angle + 1 * this.veloctity);
    print(this.angle);
    if(this.angle >= 360){
      this.angle = 0;
    }
    return float(this.angle);
  }
}




