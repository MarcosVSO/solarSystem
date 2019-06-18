var canvasW = 3000;
canvasH = 2000;
let angle = 0;
let sol;
let terra;

function setup() {
  createCanvas(canvasW,canvasH);
  angleMode(DEGREES);
  translate(canvasW/2,canvasH/2);
  sol = new Planet(0,0,1000,"#ff0000");
  dSolDireita = sol.x - (sol.diameter/2);
  dSolEsquerda = sol.x + (sol.diameter/2);
  terra = new Planet(dSolDireita - 150000000/1000000,sol.y,sol.diameter * 0.009159292,"#4286f4",(360/365));
}

function draw() {
  background(230);
  translate(canvasW/2,canvasH/2);
  sol.display();
  rotate(angle);
  terra.display();
  angle = angle + 1 * (360/365);
  print(angle);
  if(angle >= 360){
    angle = 0;
  }

}

class Planet{
  
    constructor(x,y,diameter,color,velocity){
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.color=color;
    this.veloctity = velocity;
  }

  display(){
    fill(this.color);
    noStroke();
    ellipse(this.x,this.y,this.diameter,this.diameter);
  }
}




