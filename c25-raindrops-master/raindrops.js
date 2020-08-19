class Raindrops{
    constructor(x,y){
   
    this.width = random(1,3);
    this.height = random(1,14);
    this.x = random(0,window.innerWidth);
    this.y = random(-10,700);
    this.velocityY  = random(1,7);
  }

  draw(){
    stroke("blue");
    fill("blue");
      
    var size = random(10,35);
      
 rect(this.x,this.y,this.width,this.height+size);
  }
}
