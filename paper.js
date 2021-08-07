class Paper{
    constructor(x,y,width,hieght){
        var option={
            density:1,
            restitution:2,
            friction:1.5,
            }
this.x=x;
this.y=y;
this.r=r;
this.image=loadImage(paper.png);
this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
world.add(world,this.body);
    }
   display(){
var paperpos=this.body.postion;
Push();
translate(paperpos.x, paperpos.y);
rectmode(CENTRE);
stroke("1");
Pop();
image(this.imgage,0,0,this.r,this.r);
Fill("white");
   }


}