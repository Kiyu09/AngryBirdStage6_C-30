class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //to give the visiblity attribute to pig object every time.
    this.Visiblity = 255;
  }

 display(){
   //to display in console the speed of the body.
   console.log(this.body.speed);
   //if thew speed of the body is less than 3 super class should be  calling
   //the display function in draw so that when speed is less than 3 
   //pig will be intact as shown.
   if(this.body.speed < 3){
    super.display();
   }
   else{
     //to remove body pig from World.
     World.remove(world, this.body);
     //to push the visiblity  only to pig
     push();
     //this viblity should be minus by 5 and to vanish the pig.
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }



};