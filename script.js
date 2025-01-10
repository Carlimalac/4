let isClicked = false;
let shapes = [];
let gridSize = 100; 

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    document.body.style.cursor = 'pointer';
}

function draw() {
    background(0);

    
    for (let shape of shapes) {
        fill(shape.color);
        rect(shape.x, shape.y, shape.width, shape.height);
    }
}

function mousePressed() {
    
    if (!isClicked) {
        document.getElementById("message").style.opacity = 0;
        isClicked = true;
    }

    
    let shapeWidth = random(50, 200);   
    let shapeHeight = random(50, 200);  
    let shapeColor = color(random(255), random(255), random(255));  

    
    let gridX = floor(mouseX / gridSize) * gridSize;
    let gridY = floor(mouseY / gridSize) * gridSize;

    let shape = {
        x: gridX,
        y: gridY,
        width: shapeWidth,
        height: shapeHeight,
        color: shapeColor
    };

    
    if (shape.x + shape.width <= width && shape.y + shape.height <= height) {
        shapes.push(shape);
    }
}

function touchStarted() {
    
    mousePressed();
    return false;  
}
