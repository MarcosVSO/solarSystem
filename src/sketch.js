var canvasW = 1920;
canvasH = 1080;
let v1;
let angle = 0;
let sol;
let terra;

function setup() {
  createCanvas(canvasW,canvasH);
  angleMode(DEGREES);
  sol = new Planet(canvasW/2,canvasH/2,600,"#ff0000");
  dSolDireita = sol.x - (sol.diameter/2);
  dSolEsquerda = sol.x + (sol.diameter/2);
  terra = new Planet(dSolDireita - 150000000/1000000,sol.y,sol.diameter * 0.009159292,"#4286f4");
}

function draw() {
  background(230);
  sol.display();
  translate(sol.x,sol.y)
  //rotate(angle,[dSolDireita,147098290/1000000 + sol.y + (sol.diameter/2)]);
  terra.display();
  //terra.translationLine();
  //angle = angle + 1;

}

class Planet{
  constructor(x,y,diameter,color){
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.color=color;
  }

  display(){
    fill(this.color);
    noStroke();
    ellipse(this.x,this.y,this.diameter,this.diameter);
  }

  translationLine(){
    ellipse(this.x,this.y,this.x + dSolDireita,this.y + dSolDireita);
  }

  
}




