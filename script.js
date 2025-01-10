let isClicked = false;
let shapes = [];
let gridSize = 100; // Grid size to fit the shapes neatly

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    document.body.style.cursor = 'pointer';
}

function draw() {
    background(0);

    // Display all shapes
    for (let shape of shapes) {
        fill(shape.color);
        rect(shape.x, shape.y, shape.width, shape.height);
    }
}

function mousePressed() {
    // Hide the message once the user taps or clicks
    if (!isClicked) {
        document.getElementById("message").style.opacity = 0;
        isClicked = true;
    }

    // Create new shapes with random width and height
    let shapeWidth = random(50, 200);   // Random width between 50px and 200px
    let shapeHeight = random(50, 200);  // Random height between 50px and 200px
    let shapeColor = color(random(255), random(255), random(255));  // Random color

    // Snap the shape to a grid position
    let gridX = floor(mouseX / gridSize) * gridSize;
    let gridY = floor(mouseY / gridSize) * gridSize;

    let shape = {
        x: gridX,
        y: gridY,
        width: shapeWidth,
        height: shapeHeight,
        color: shapeColor
    };

    // Push the shape to the array if it fits within the screen bounds
    if (shape.x + shape.width <= width && shape.y + shape.height <= height) {
        shapes.push(shape);
    }
}

function touchStarted() {
    // Same functionality for mobile as mouse click
    mousePressed();
    return false;  // prevent default touch behavior
}
