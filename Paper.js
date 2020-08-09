class Paper{
    constructor(){
        var options = {
           restitution : 0.3,
           isStatic : false,
           friction:0.5,
           density:1.2

        }

        this.body = Bodies.circle(50,600,10,options);

        this.body.radius = this.body.radius;
        
     
    }
    display(){
     pos = this.body.position;
     angle = this.body.angle;
     shapeColor = "red";

     fill(255);

     circle(pos.x,pos.y,this.body.radius);
      


    }
  

}