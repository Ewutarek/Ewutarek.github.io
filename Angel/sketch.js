
g=4;
function setup()
{
  createCanvas(512,512);
  background(255);
 
}

function draw()
{
   translate(256,256);
   stroke(g++);
   line(sin(g*5)*210,cos(g*20)*200,g%9,g%9);
}

