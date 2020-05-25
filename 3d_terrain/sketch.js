var cols, rows;
var scl = 25;
var movingTerrain = [];
var widthTerrain = 800; //with of the entire terrain
var heightTerrain = 1200; //height of the entire terrain
var ynMovement = 0;



function setup() {

    createCanvas(512, 512, WEBGL);

    cols = widthTerrain / scl; // size of one colum

    rows = heightTerrain / scl; //size of one row 


    //loop that draws the moving terrain initially before the mesh and movement is added. 
    for (var x = 0; x < cols; x++) {
        movingTerrain[x] = [];
        for (var y = 0; y < rows; y++) {
            movingTerrain[x][y] = 0;
        }
    }




}

function draw() {
    



    background(0, 0, 200, 150);
    //background(0);

    rotateX(HALF_PI); //drawnig rotated 45 degrees on x-ais;
    rotateZ(PI / 3); // drawing rotated 60 degrees on z-axis

    translate(-widthTerrain / 2, -heightTerrain / 2); //translate the drawing to the center of the canvas

    for (var y = 0; y < rows; y++) {
        beginShape(TRIANGLE_STRIP); //triangle strip creates a mesh like plane that assists in creating the noise effct.
        for (var x = 0; x < cols; x++) {
            fill(255 - y, y, y, 50 + x); //adds red to the wave
            vertex(x * scl, y * scl, movingTerrain[x][y]);

            fill(0 + x, x, 255 - x, 150 + x); //adds blue to the gradient
            vertex(x * scl, (y + 1) * scl, movingTerrain[x][y + 1]);

            fill(255 - x, 255 - x, 255 - x, 50 + x); //adds white to the gradient
            vertex(x * scl, (y + 1) * scl, movingTerrain[x][y + 1]);
        }
        endShape();
    }
    
    
    ynMovement -= 0.5;
    var yoff = ynMovement;
    for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            movingTerrain[x][y] = map(noise(xoff, yoff), 0, 1, -250, 250); //Returns the Perlin noise value at specified coordinates via mapping.
            xoff += 0.02;
        }
        yoff += 0.4;
    }

}
