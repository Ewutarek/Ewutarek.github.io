/*

Creative Rationale: 

 - What effect were you trying to achieve ?
-The effect I was trying to achieve was simply drawing a geometric shape using more random/organic movements.


 - How does your code do this ?
-I tried to use an L System to achieve this by adapting code for a Primrose Tile. I changed the changed the number of rules, generations, and the rotation angle for each step. This helped me achieve my desired shape.


 - What are you happy with ? What could be improved ?
-I am happy that I was able to achieve my desired drawing overall. I think the main improvement could be to have it draw, clear the canvas then repeat. That could probably make it more exciting. I also think making it more interactive would be more stimulating. In the code I have shown a line that can change the generations and thus produce a different drawing. This could be improved by having the user input using keys. 

*/


var systemVectorCapsule;

function setup() {
  createCanvas(410, 400);
  systemVectorCapsule = new LSystem();
  //please, play around with the following line
  systemVectorCapsule.simulate(5);
    // frameRate(10);
}

function draw() {
  background(255);
  systemVectorCapsule.render();
}

function LSystem() {
    this.steps = 0;

   //these are axiom and rules for the penrose rhombus l-system
    this.axiom = "[X]++[X]++[X]++[X]++[X]";
    this.ruleX = "+YF--ZF[---WF--XF]+";
    this.ruleZ = "--YF++++WF[+ZF++++XF]-----XF";

    //These two lines determine the overall general shape because of the angles that each line will be set and the length;
    this.startLength = 900.0;
    this.theta =  TWO_PI/ 2.5; 
    this.reset();
}

LSystem.prototype.simulate = function (gen) {
  while (this.getAge() < gen) {
    this.iterate(this.production);
  }
}

LSystem.prototype.reset = function () {
    this.production = this.axiom;
    this.drawLength = this.startLength;
    this.generations = 0;
  }

LSystem.prototype.getAge = function () {
    return this.generations;
  }

//apply substitution rules to create new iteration of production string
LSystem.prototype.iterate = function() {
    var newProduction = "";

    for(var i=0; i < this.production.length; ++i) {
      var step = this.production.charAt(i);
      //if current character is 'W', replace current character
      //by corresponding rule
      if (step == 'W') {
        newProduction = newProduction + this.ruleW;
      }
      else if (step == 'X') {
        newProduction = newProduction + this.ruleX;
      }
      else if (step == 'Y') {
        newProduction = newProduction + this.ruleY;
      }
      else if (step == 'Z') {
        newProduction = newProduction + this.ruleZ;
      }
      else {
        //drop all 'F' characters, don't touch other
        //characters (i.e. '+', '-', '[', ']'
        if (step != 'F') {
          newProduction = newProduction + step;
        }
      }
    }

    this.drawLength = this.drawLength * 0.5;
    this.generations++;
    this.production = newProduction;
}

//convert production string to a turtle graphic
LSystem.prototype.render = function () {
    translate(width / 2, height / 2);

    this.steps += 10;
    if(this.steps > this.production.length) {
      this.steps = this.production.length;
    }

    for(var i=0; i<this.steps; ++i) {
      var step = this.production.charAt(i);

      //'W', 'X', 'Y', 'Z' symbols don't actually correspond to a turtle action
      if( step == 'F') {
        stroke( 0,0,0);
        
        for(var j=0; j < this.repeats; j++) {
         // stroke(255- this.steps, 50+i,0+j);
          line(0, 0, 0, -this.drawLength);
          noFill();
          translate(0, -this.drawLength);
        }
        this.repeats = 1;
      }
      else if (step == '+') {
        rotate(this.theta);
      }
      else if (step == '-') {
        rotate(-this.theta);
      }
      else if (step == '[') {
        push();
      }
      else if (step == ']') {
        pop();
      }
    }
  }

  function keyPressed() {
      if(keyCode === 82)
       {
           setup();
       }
    
  }




