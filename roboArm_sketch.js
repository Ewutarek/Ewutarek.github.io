var fSizes = [[50,160,50], [50,200,50], [50,240,50], [50,200,50], [50,140,50]];
var palmSize = [240,200,50];
var armSize = [170,300,50];
var fingerSpacing = 63;
var canvas;
function setup()
{
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() 
{
  background(0);
    
     rotateY(sin(frameCount/100));
     rotateZ(sin(frameCount/100));
    
  push();
    palm(palmSize[0],palmSize[1],palmSize[2],abs(sin(radians(frameCount))));
    
    
    push();
        rotateZ(45);
        translate(0-(palmSize[0]/2.5),(0-palmSize[1]/3));

        finger(fSizes[0][0],fSizes[0][1],fSizes[0][2],abs(sin(radians(frameCount))));  
        pop();

        translate(0-(palmSize[0]/1.5),0)

          for(var p = 1; p < fSizes.length; p++)
          {
              push();
                  var phaseDiff = TWO_PI /10;
                  var phase =  ((sin(radians(frameCount) + phaseDiff*p) +1 )/2);
                   translate(p*fingerSpacing,(0-palmSize[1]/2),0);

                   finger(fSizes[p][0],fSizes[p][1],fSizes[p][2],abs(sin(radians(frameCount)))*phase); 
              pop();
              
              
              //Rotating spheres
//              for (let j = 0; j < 5; j++) {
//    push();
//        for (let i = 0; i < 80; i++) {
//          translate(
//            sin(frameCount * 0.001 + j) * 100,
//            sin(frameCount * 0.001 + j) * 100,
//            i * 0.1
//          );
//          rotateZ(frameCount * 0.002);
//          push();
//          sphere(8, 6, 4);
//          pop();
//        }
//        pop();
     // }
              }
        pop();
    
    push();
        translate(0,palmSize[1]-palmSize[1]);
        sphere(armSize[0]/6);

        translate(0,110+palmSize[1]);
        phalanx(armSize[0],armSize[1],armSize[2],0);
     
    pop();
    
  

}

function phalanx(w, h, d , bend)
{ 
  var maxAngle = 60; 
  sphere(5);
 // bend = constrain(bend,0,1);
    
//  if (bend == 0)
//  {
//      rotateX(radians(180));
//      translate(0,0);
//  }
//  else if(bend == 1)
//  {
      rotateX(bend)
      translate(0,-(h/2));
  
  
   box(w,h,d);
   
   
}

function finger(w, h, d , bend)
{
   phalanx(w,(h*0.4),d,bend);
    
  //push();  
    translate(0,-(h*0.2),bend/2);
    phalanx(w,(h*0.4),d,bend);
 // pop();
    
 //push();
   translate(0,-(h*0.2),bend/2);
   phalanx(w,(h*0.2),d,bend);
 //pop();
    
 
}

function palm (w, h, d , bend)
{
      rotateX(bend)
      translate(0,-(h/2));
      box(w, h, d);
     
    
}
