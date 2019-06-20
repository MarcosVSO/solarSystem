var canvasW = 1830;
canvasH = 930;
var zoom = 0.1;
let sol;
let mercurio;
let venus;
let terra;
let marte;
let jupiter;
let saturno;
let urano;
let netuno;


function setup() {
  createCanvas(canvasW,canvasH);
  frameRate(30);
  angleMode(DEGREES);
  translate(canvasW/2,canvasH/2);
  sol = new Planet(0,0,1500,"#ffbf00");
  dSolDireita = sol.x - (sol.diameter/2); 
  mercurio = new Planet(dSolDireita - 60000000/1000000,sol.y,sol.diameter * 0.003503307,"#adafb2",(360/88));
  venus = new Planet(dSolDireita - 105000000/1000000,sol.y,sol.diameter * 0.00870,"#e9f2b3",(360/224));
  terra = new Planet(dSolDireita - 150000000/1000000,sol.y,sol.diameter * 0.009159292,"#4286f4",(360/365));
  marte = new Planet(dSolDireita - 225000000 /1000000,sol.y,sol.diameter * 0.004886248,"#ed0000",(360/687));
  jupiter = new Planet(dSolDireita - 750000000 /1000000,sol.y,sol.diameter * 0.1027,"#ede3e3",(360/4329));
  saturno = new Planet(dSolDireita - 1425000000 /1000000,sol.y,sol.diameter * 0.086549425,"#bfab4a",(360/10752));
  urano = new Planet(dSolDireita - 2850000000 /1000000,sol.y,sol.diameter * 0.036704665,"#ffffff",(360/30660));
  netuno = new Planet(dSolDireita - 4500000000 /1000000,sol.y,sol.diameter * 0.035562985,"#1400f4",(360/59860));
}

function draw() {
  background(10);
  translate(canvasW/2,canvasH/2);
  scale(zoom);
  sol.display();
  push();
  rotate(terra.translation());
  terra.display();
  pop();
  push();
  rotate(mercurio.translation());
  mercurio.display();
  pop();
  push()
  rotate(venus.translation());
  venus.display();
  pop();
  push();
  rotate(marte.translation());
  marte.display();
  pop();
  push();
  rotate(jupiter.translation());
  jupiter.display();
  pop();
  push();
  rotate(saturno.translation());
  saturno.displayRing();
  saturno.display();
  pop();
  push();
  rotate(urano.translation());
  urano.display();
  pop();
  push();
  rotate(netuno.translation());
  netuno.display();
  pop();
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

  displayRing(){
    fill(this.color);
    noStroke();
    ellipse(this.x,this.y,this.diameter*2,this.diameter/2);
    fill(0,0,0);
    noStroke();
    ellipse(this.x,this.y,this.diameter+50,this.diameter/2);
  }
  
  translation(){
    this.angle = float(this.angle + this.veloctity);
    if(this.angle >= 360){
      this.angle = 0;
    }
    return float(this.angle);
  }

  velocityDebugger(){
    print(this.angle);
  }
}

function mouseWheel(event) {
  print(zoom);
  print(event.delta)
  if (zoom <= 0.02){
    if (event.delta < 0){
      zoom += 0.01 * (-1 * (event.delta/3));
    }
  }else if(zoom >= 0.34){
    if(event.delta > 0){
      zoom += 0.01 * (-1 * (event.delta/3));
    }
  }else{
    zoom += 0.01 * (-1 * (event.delta/3));
  }
}




