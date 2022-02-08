class Paper{

constructor(x,y){

var options={

isStatic:false,
restitution:0.3,
friction:0,
density:1.2

}
this.image=loadImage("paper.png");
this.body = Bodies.circle(180,600,70,70,options);
this.width = 70;
this.height = 70;
World.add(world,this.body);

}

display(){

var pos = this.body.position

push();
translate(pos.x,pos.y);
rectMode(CENTER);
fill("white");
ellipse(0,0,this.width,this.height);
pop();


}

}